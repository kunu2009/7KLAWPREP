
"use client";

import { useState, useEffect, useTransition, useCallback } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { mcqs, flashcards, notes } from '@/lib/data';
import { Database, FileText, Layers3, CheckCircle, Flame, Star, Trophy, Loader2, Target, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { generateDailyTasks } from '@/ai/flows/generate-daily-tasks';
import { useProgress } from '@/hooks/use-progress';
import { v4 as uuidv4 } from 'uuid';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { format, isToday, isYesterday, subDays, startOfDay } from 'date-fns';

interface Task {
    id: string;
    title: string;
    description: string;
    points: number;
    link: string;
    completed: boolean;
}

const EmptyTasksIllustration = () => (
    <div className="flex flex-col items-center justify-center text-center p-8">
        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="166" viewBox="0 0 896 747.97143" role="img" className="mx-auto my-4 text-muted-foreground max-w-[150px]">
            <title>All tasks complete!</title>
            <path d="M193.634,788.75225c12.42842,23.049,38.806,32.9435,38.806,32.9435s6.22712-27.47543-6.2013-50.52448-38.806-32.9435-38.806-32.9435S181.20559,765.7032,193.634,788.75225Z" transform="translate(-152 -76.01429)" fill="hsl(var(--primary))" opacity="0.2"/>
            <path d="M202.17653,781.16927c22.43841,13.49969,31.08016,40.3138,31.08016,40.3138s-27.73812,4.92679-50.17653-8.57291S152,772.59636,152,772.59636,179.73811,767.66958,202.17653,781.16927Z" transform="translate(-152 -76.01429)" fill="hsl(var(--primary))" opacity="0.6"/>
            <rect x="413.2485" y="35.90779" width="140" height="2" fill="currentColor" opacity="0.1"/>
            <rect x="513.2485" y="37.40779" width="2" height="18.5" fill="currentColor" opacity="0.1"/>
            <rect x="452.2485" y="37.40779" width="2" height="18.5" fill="currentColor" opacity="0.1"/>
            <rect x="484.2485" y="131.90779" width="140" height="2" fill="currentColor" opacity="0.1"/>
            <rect x="522.2485" y="113.90779" width="2" height="18.5" fill="currentColor" opacity="0.1"/>
            <rect x="583.2485" y="113.90779" width="2" height="18.5" fill="currentColor" opacity="0.1"/>
            <rect x="670.2485" y="176.90779" width="140" height="2" fill="currentColor" opacity="0.1"/>
            <rect x="708.2485" y="158.90779" width="2" height="18.5" fill="currentColor" opacity="0.1"/>
            <rect x="769.2485" y="158.90779" width="2" height="18.5" fill="currentColor" opacity="0.1"/>
            <rect x="656.2485" y="640.90779" width="140" height="2" fill="currentColor" opacity="0.1"/>
            <rect x="694.2485" y="622.90779" width="2" height="18.5" fill="currentColor" opacity="0.1"/>
            <rect x="755.2485" y="622.90779" width="2" height="18.5" fill="currentColor" opacity="0.1"/>
            <rect x="417.2485" y="319.90779" width="140" height="2" fill="currentColor" opacity="0.1"/>
            <rect x="455.2485" y="301.90779" width="2" height="18.5" fill="currentColor" opacity="0.1"/>
            <rect x="516.2485" y="301.90779" width="2" height="18.5" fill="currentColor" opacity="0.1"/>
            <rect x="461.2485" y="560.90779" width="140" height="2" fill="currentColor" opacity="0.1"/>
            <rect x="499.2485" y="542.90779" width="2" height="18.5" fill="currentColor" opacity="0.1"/>
            <rect x="560.2485" y="542.90779" width="2" height="18.5" fill="currentColor" opacity="0.1"/>
            <rect x="685.2485" y="487.90779" width="140" height="2" fill="currentColor" opacity="0.1"/>
            <rect x="723.2485" y="469.90779" width="2" height="18.5" fill="currentColor" opacity="0.1"/>
            <rect x="784.2485" y="469.90779" width="2" height="18.5" fill="currentColor" opacity="0.1"/>
            <polygon points="362.06 702.184 125.274 702.184 125.274 700.481 360.356 700.481 360.356 617.861 145.18 617.861 134.727 596.084 136.263 595.347 146.252 616.157 362.06 616.157 362.06 702.184" fill="#2f2e41"/><circle cx="156.78851" cy="726.03301" r="17.88673" fill="#3f3d56"/><circle cx="333.10053" cy="726.03301" r="17.88673" fill="#3f3d56"/><circle cx="540.92726" cy="346.153" r="11.07274" fill="#3f3d56"/><path d="M539.38538,665.76747H273.23673L215.64844,477.531H598.69256l-.34852,1.10753Zm-264.8885-1.7035H538.136l58.23417-184.82951H217.95082Z" transform="translate(-152 -76.01429)" fill="#2f2e41"/><polygon points="366.61 579.958 132.842 579.958 82.26 413.015 418.701 413.015 418.395 413.998 366.61 579.958" fill="#f2f2f2"/><polygon points="451.465 384.7 449.818 384.263 461.059 341.894 526.448 341.894 526.448 343.598 462.37 343.598 451.465 384.7" fill="#2f2e41"/><rect x="82.2584" y="458.58385" width="345.2931" height="1.7035" fill="#2f2e41"/><rect x="101.45894" y="521.34377" width="306.31852" height="1.7035" fill="#2f2e41"/><rect x="254.31376" y="402.36843" width="1.7035" height="186.53301" fill="#2f2e41"/><rect x="385.55745" y="570.79732" width="186.92877" height="1.70379" transform="translate(-274.73922 936.23495) rotate(-86.24919)" fill="#2f2e41"/><rect x="334.45728" y="478.18483" width="1.70379" height="186.92877" transform="translate(-188.46866 -52.99638) rotate(-3.729)" fill="#2f2e41"/><rect y="745" width="896" height="2" fill="#2f2e41"/><path d="M747.41068,137.89028s14.61842,41.60627,5.62246,48.00724S783.39448,244.573,783.39448,244.573l47.22874-12.80193-25.86336-43.73993s-3.37348-43.73992-3.37348-50.14089S747.41068,137.89028,747.41068,137.89028Z" transform="translate(-152 -76.01429)" fill="#a0616a"/><path d="M747.41068,137.89028s14.61842,41.60627,5.62246,48.00724S783.39448,244.573,783.39448,244.573l47.22874-12.80193-25.86336-43.73993s-3.37348-43.73992-3.37348-50.14089S747.41068,137.89028,747.41068,137.89028Z" transform="translate(-152 -76.01429)" opacity="0.1"/><path d="M722.87364,434.46832s-4.26731,53.34138,0,81.07889,10.66828,104.5491,10.66828,104.5491,0,145.08854,23.4702,147.22219,40.53945,4.26731,42.6731-4.26731-10.66827-12.80193-4.26731-17.06924,8.53462-19.20289,0-36.27213,0-189.8953,0-189.8953l40.53945,108.81641s4.26731,89.61351,8.53462,102.41544-4.26731,36.27213,10.66827,38.40579,32.00483-10.66828,40.53945-14.93559-12.80193-4.26731-8.53462-6.401,17.06924-8.53462,12.80193-10.66828-8.53462-104.54909-8.53462-104.54909S879.69728,414.1986,864.7617,405.664s-24.537,6.16576-24.537,6.16576Z" transform="translate(-152 -76.01429)" fill="#2f2e41"/><path d="M761.27943,758.78388v17.06924s-19.20289,46.39942,0,46.39942,34.13848,4.8083,34.13848-1.59266V763.05119Z" transform="translate(-152 -76.01429)" fill="#2f2e41"/><path d="M887.16508,758.75358v17.06924s19.20289,46.39941,0,46.39941-34.13848,4.80831-34.13848-1.59266V763.02089Z" transform="translate(-152 -76.01429)" fill="#2f2e41"/><circle cx="625.28185" cy="54.4082" r="38.40579" fill="#a0616a"/><path d="M765.54674,201.89993s10.66828,32.00482,27.73752,25.60386l17.06924-6.401L840.22467,425.9337s-23.47021,34.13848-57.60869,12.80193S765.54674,201.89993,765.54674,201.89993Z" transform="translate(-152 -76.01429)" fill="#6c63ff"/><path d="M795.41791,195.499l9.60145-20.26972s56.54186,26.67069,65.07648,35.20531,8.53462,21.33655,8.53462,21.33655l-14.93559,53.34137s4.26731,117.351,4.26731,121.61834,14.93559,27.73751,4.26731,19.20289-12.80193-17.06924-21.33655-4.26731-27.73751,27.73752-27.73751,27.73752Z" transform="translate(-152 -76.01429)" fill="#3f3d56"/><path d="M870.09584,349.12212l-6.401,59.74234s-38.40579,34.13848-29.87117,36.27214,12.80193-6.401,12.80193-6.401,14.93559,14.93559,23.47021,6.401S899.967,355.52309,899.967,355.52309Z" transform="translate(-152 -76.01429)" fill="#a0616a"/><path d="M778.1,76.14416c-8.51412-.30437-17.62549-.45493-24.80406,4.13321a36.31263,36.31263,0,0,0-8.5723,8.39153c-6.99153,8.83846-13.03253,19.95926-10.43553,30.92537l3.01633-1.1764a19.75086,19.75086,0,0,1-1.90515,8.46261c.42475-1.2351,1.84722.76151,1.4664,2.01085L733.543,139.792c5.46207-2.00239,12.25661,2.05189,13.08819,7.80969.37974-12.66123,1.6932-27.17965,11.964-34.59331,5.17951-3.73868,11.73465-4.88,18.04162-5.8935,5.81832-.935,11.91781-1.82659,17.49077.08886s10.31871,7.615,9.0553,13.37093c2.56964-.88518,5.44356.90566,6.71347,3.30856s1.33662,5.2375,1.37484,7.95506c2.73911,1.93583,5.85632-1.9082,6.97263-5.07112,2.62033-7.42434,4.94941-15.32739,3.53783-23.073s-7.72325-15.14773-15.59638-15.174a5.46676,5.46676,0,0,0,1.42176-3.84874l-6.48928-.5483a7.1723,7.1723,0,0,0,4.28575-2.25954C802.7981,84.73052,782.31323,76.29477,778.1,76.14416Z" transform="translate(-152 -76.01429)" fill="#2f2e41"/><path d="M776.215,189.098s-17.36929-17.02085-23.62023-15.97822S737.80923,189.098,737.80923,189.098s-51.20772,17.06924-49.07407,34.13848S714.339,323.51826,714.339,323.51826s19.2029,100.28179,2.13366,110.95006,81.07889,38.40579,83.21254,25.60386,6.401-140.82123,0-160.02412S776.215,189.098,776.215,189.098Z" transform="translate(-152 -76.01429)" fill="#3f3d56"/><path d="M850.89294,223.23648h26.38265S895.6997,304.31537,897.83335,312.85s6.401,49.07406,4.26731,49.07406-44.80675-8.53462-44.80675-2.13365Z" transform="translate(-152 -76.01429)" fill="#3f3d56"/><path d="M850,424.01429H749c-9.85608-45.34-10.67957-89.14649,0-131H850C833.70081,334.115,832.68225,377.62137,850,424.01429Z" transform="translate(-152 -76.01429)" fill="#f2f2f2"/><path d="M707.93806,368.325,737.80923,381.127s57.60868,8.53462,57.60868-14.93559-57.60868-10.66827-57.60868-10.66827L718.60505,349.383Z" transform="translate(-152 -76.01429)" fill="#a0616a"/><path d="M714.339,210.43455l-25.60386,6.401L669.53227,329.91923s-6.401,29.87117,4.26731,32.00482S714.339,381.127,714.339,381.127s4.26731-32.00483,12.80193-32.00483L705.8044,332.05288,718.60633,257.375Z" transform="translate(-152 -76.01429)" fill="#3f3d56"/><rect x="60.2485" y="352.90779" width="140" height="2" fill="#f2f2f2"/><rect x="98.2485" y="334.90779" width="2" height="18.5" fill="#f2f2f2"/><rect x="159.2485" y="334.90779" width="2" height="18.5" fill="#f2f2f2"/><rect x="109.2485" y="56.90779" width="140" height="2" fill="#f2f2f2"/><rect x="209.2485" y="58.40779" width="2" height="18.5" fill="#f2f2f2"/><rect x="148.2485" y="58.40779" width="2" height="18.5" fill="#f2f2f2"/><rect x="250.2485" y="253.90779" width="140" height="2" fill="#f2f2f2"/><rect x="350.2485" y="255.40779" width="2" height="18.5" fill="#f2f2f2"/><rect x="289.2485" y="255.40779" width="2" height="18.5" fill="#f2f2f2"/><rect x="12.2485" y="252.90779" width="140" height="2" fill="#f2f2f2"/><rect x="112.2485" y="254.40779" width="2" height="18.5" fill="#f2f2f2"/><rect x="51.2485" y="254.40779" width="2" height="18.5" fill="#f2f2f2"/><rect x="180.2485" y="152.90779" width="140" height="2" fill="#f2f2f2"/><rect x="218.2485" y="134.90779" width="2" height="18.5" fill="#f2f2f2"/><rect x="279.2485" y="134.90779" width="2" height="18.5" fill="#f2f2f2"/>
        </svg>
        <p className="mt-4 font-semibold text-lg">All Tasks Completed!</p>
        <p className="text-muted-foreground text-sm">Nicely done. Come back tomorrow for a new set.</p>
    </div>
);


const LoadingTasksIllustration = () => (
    <div className="flex flex-col items-center justify-center text-center p-8">
        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="166" viewBox="0 0 797.11577 598.24466" className="mx-auto my-4 text-muted-foreground animate-pulse max-w-[150px]">
            <title>Loading Tasks...</title>
            <circle cx="553.82356" cy="30" r="30" fill="hsl(var(--accent))"/>
            <g>
                <g>
                    <polygon points="634.24197 572.81558 623.43685 573.03878 617.41395 530.54397 633.35953 530.21362 634.24197 572.81558" fill="hsl(var(--primary-foreground))"/>
                    <path d="M600.1435,591.00002c.05777,2.66672,2.26303,4.78348,4.92986,4.73201l21.48121-.44666,3.53758-7.73036,1.60403,7.61947,8.1055-.16266-2.84236-27.25964-2.82474-.1054-11.52243-.45757-3.7172-.14033,.1602,7.73156-16.91063,12.20406c-1.28593,.92868-2.0339,2.42959-2.00101,4.01552Z" fill="hsl(var(--foreground))"/>
                </g>
                <g>
                    <polygon points="706.95318 572.81558 696.14806 573.03878 690.12516 530.54397 706.07074 530.21362 706.95318 572.81558" fill="hsl(var(--primary-foreground))"/>
                    <path d="M672.85472,591.00002c.05777,2.66672,2.26303,4.78348,4.92986,4.73201l21.48121-.44666,3.53758-7.73036,1.60403,7.61947,8.1055-.16266-2.84236-27.25964-2.82474-.1054-11.52243-.45757-3.7172-.14033,.1602,7.73156-16.91063,12.20406c-1.28593,.92868-2.0339,2.42959-2.00101,4.01552Z" fill="hsl(var(--foreground))"/>
                </g>
                <path d="M645.13168,246.09588l59.49099-1.65253-3.30506,4.95758,7.52746,7.43637s27.17562,37.18187,18.91298,71.05868c-8.26264,33.87681-3.61084,234.15469-3.61084,234.15469l-48.44378-5.27963,5.37071-202.02149-39.66066,76.01627,11.53191,123.23417-41.27741-.12087-13.22022-133.02847,46.6839-174.75479Z" fill="hsl(var(--foreground))"/>
            </g>
            <path d="M396.26902,86.26655c.22394,.55166,.99694,.55161,1.22077-.00016,1.56147-3.8494,3.78448-8.16027,6.20251-11.45472,.38714-.52746-.14657-1.23226-.76183-1.0097l-5.18327,1.87521V43.59077h-1.73515v32.08647l-5.18518-1.87548c-.61526-.22256-1.14891,.48224-.76178,1.0097,2.41814,3.2945,4.64141,7.60554,6.20394,11.45509Z" fill="hsl(var(--foreground))"/>
            <path d="M430.25973,119.30389c-.16772,.57127,.43765,1.05196,.95607,.75908,3.61674-2.04334,8.03852-4.03665,11.9809-5.11272,.6312-.17229,.65157-1.05613,.03136-1.26448l-5.22518-1.75505,19.95475-25.12659-1.35878-1.0791-19.95478,25.12664-2.8941-4.69337c-.34339-.55692-1.19961-.33688-1.22448,.31693-.15525,4.08375-1.09529,8.84236-2.26575,12.82866Z" fill="hsl(var(--foreground))"/>
            <g>
                <path d="M556.99558,177.92945l32.04131-3.69326,4.66358,18.00947-34.015,2.6994c-.72392,.74967-1.56721,1.4082-2.52551,1.94059-5.21203,2.89558-11.7846,1.01771-14.68018-4.19432-2.89558-5.21203-1.01771-11.7846,4.19432-14.68018,3.32395-1.84664,7.19751-1.74459,10.32148-.0817Z" fill="hsl(var(--primary-foreground))"/>
                <path d="M710.41365,136.39001l-12.5401-19.03003c-2.27997,1.81-4.27997,3.63-5.78998,5.23999l-2.60004,1.79004-8.39996,7.50995-23.78003,21.23004-7.90997,7.07001-8.83002,1.54999-19.48999,3.42999-29.51568,7.94234-21.73432,1.40764c-.01001,.44-.01001,1.10004-.01001,1.92004-.01001,4.26996,.09003,12.90997,.92999,17.62,.29004,1.63995,.67004,2.79999,1.17004,3.14996,.15997,.10999,16.80433-5.08763,17.64429-5.09764,6.77002-.01001,18.08569,1.84764,40.91571-1.12233,13.56-1.78003,25.5-3.40002,30.51996-4.09003l.11005-.01996,3.62994-1.76001,39.85004-19.30005,12.03003-5.82996c-1-8.06-3.07007-16.01001-6.19995-23.60999Z" fill="hsl(var(--primary))"/>
            </g>
            <path d="M22.69,27.94094C10.15866,27.94094,0,38.09961,0,50.63095V434.94094H2V185.62094C2,99.64096,71.70001,29.94094,157.67999,29.94094l397.68367-.36367-.36367-1.63633H22.69Z" fill="hsl(var(--foreground))"/>
            <ellipse cx="127.70614" cy="83.1512" rx="8.45661" ry="8.64507" fill="hsl(var(--foreground))"/>
            <ellipse cx="156.91989" cy="83.1512" rx="8.45661" ry="8.64507" fill="hsl(var(--foreground))"/>
            <ellipse cx="186.13364" cy="83.1512" rx="8.45661" ry="8.64507" fill="hsl(var(--foreground))"/>
            <g>
                <path d="M333.5136,185.00004c-12.53134,0-22.69001,10.15865-22.69001,22.68999l-.00008,164.31h2v-29.32001c.00005-85.97998,69.7001-155.67996,155.68008-155.67992l144.68367-.3636-.36366-1.63633-279.31-.00013Z" fill="hsl(var(--muted))"/>
                <g>
                    <path d="M417.52738,286.97251c-1.10303,0-2,.89697-2,2v31c-.00002,1.10303,.89696,2,1.99998,2s2-.89697,2-2v-31c.00002-1.10303-.89696-2-1.99998-2Z" fill="hsl(var(--foreground))"/>
                    <g>
                        <ellipse cx="437.12845" cy="304.64297" rx="12.46328" ry="12.20069" fill="hsl(var(--primary))"/>
                        <path d="M537.04131,300.4691l-67.08496-.00003c-2.30142,0-4.17392-1.8725-4.17392-4.17392s1.8725-4.17392,4.17392-4.17392l67.08496,.00003c2.30142,0,4.17392,1.8725,4.17392,4.17392s-1.8725,4.17392-4.17392,4.17392Z" fill="hsl(var(--muted))"/>
                        <path d="M589.39463,314.59623l-119.43829-.00006c-2.30142,0-4.17392-1.8725-4.17392-4.17392s1.8725-4.17392,4.17392-4.17392l119.43829,.00006c2.30142,0,4.17392,1.8725,4.17392,4.17392s-1.8725,4.17392-4.17392,4.17392Z" fill="hsl(var(--muted))"/>
                    </g>
                </g>
                <ellipse cx="423.70614" cy="225.1512" rx="8.45661" ry="8.64507" fill="hsl(var(--muted))"/>
                <ellipse cx="452.91989" cy="225.1512" rx="8.45661" ry="8.64507" fill="hsl(var(--muted))"/>
                <ellipse cx="482.13364" cy="225.1512" rx="8.45661" ry="8.64507" fill="hsl(var(--muted))"/>
            </g>
            <path d="M90.35415,169.40551c-1.10303,0-2,.89697-2,2v31c0,1.10303,.89697,2,2,2s2-.89697,2-2v-31c0-1.10303-.89697-2-2-2Z" fill="hsl(var(--foreground))"/>
            <g>
                <ellipse cx="109.95523" cy="187.07596" rx="12.46328" ry="12.20069" fill="hsl(var(--primary))"/>
                <path d="M209.86809,182.90204h-67.08496c-2.30142,0-4.17392-1.87249-4.17392-4.17392s1.87249-4.17392,4.17392-4.17392h67.08496c2.30142,0,4.17392,1.87249,4.17392,4.17392s-1.87249,4.17392-4.17392,4.17392Z" fill="hsl(var(--muted))"/>
                <path d="M262.22142,197.02915h-119.43829c-2.30142,0-4.17392-1.87249-4.17392-4.17392s1.87249-4.17392,4.17392-4.17392h119.43829c2.30142,0,4.17392,1.87249,4.17392,4.17392s-1.87249,4.17392-4.17392,4.17392Z" fill="hsl(var(--muted))"/>
            </g>
            <path d="M90.35415,255.40551c-1.10303,0-2,.89697-2,2v31c0,1.10303,.89697,2,2,2s2-.89697,2-2v-31c0-1.10303-.89697-2-2-2Z" fill="hsl(var(--foreground))"/>
            <g>
                <ellipse cx="109.95523" cy="273.07596" rx="12.46328" ry="12.20069" fill="hsl(var(--primary))"/>
                <path d="M209.86809,268.90204h-67.08496c-2.30142,0-4.17392-1.87249-4.17392-4.17392s1.87249-4.17392,4.17392-4.17392h67.08496c2.30142,0,4.17392,1.87249,4.17392,4.17392s-1.87249,4.17392-4.17392,4.17392Z" fill="hsl(var(--muted))"/>
                <path d="M262.22142,283.02915h-119.43829c-2.30142,0-4.17392-1.87249-4.17392-4.17392s1.87249-4.17392,4.17392-4.17392h119.43829c2.30142,0,4.17392,1.87249,4.17392,4.17392s-1.87249,4.17392-4.17392,4.17392Z" fill="hsl(var(--muted))"/>
            </g>
            <g>
                <path d="M90.35415,341.40551c-1.10303,0-2,.89697-2,2v31c0,1.10303,.89697,2,2,2s2-.89697,2-2v-31c0-1.10303-.89697-2-2-2Z" fill="hsl(var(--foreground))"/>
                <g>
                    <ellipse cx="109.95523" cy="359.07596" rx="12.46328" ry="12.20069" fill="hsl(var(--primary))"/>
                    <path d="M209.86809,354.90204h-67.08496c-2.30142,0-4.17392-1.87249-4.17392-4.17392s1.87249-4.17392,4.17392-4.17392h67.08496c2.30142,0,4.17392,1.87249,4.17392,4.17392s-1.87249,4.17392-4.17392,4.17392Z" fill="hsl(var(--muted))"/>
                    <path d="M262.22142,369.02915h-119.43829c-2.30142,0-4.17392-1.87249-4.17392-4.17392s1.87249-4.17392,4.17392-4.17392h119.43829c2.30142,0,4.17392,1.87249,4.17392,4.17392s-1.87249,4.17392-4.17392,4.17392Z" fill="hsl(var(--muted))"/>
                </g>
            </g>
            <path d="M720.55788,278.12233c-1.23688,9.418-65.35004-12.88-73-17-14.31-7.69,.66218,.19717,.66218,.19717l-1.66218-47.19717-1.73432-28.12233s-.96997-7.47003-3-17c-.46002-2.14001-.95001-4.62-1.26001-7.25-.88-7.59003-.20996-16.41003,7.26001-21.75l26.04999-38.84003,12.83002-.75,11.16998,16.95001,12.5401,19.03003c3.12988,7.59998,5.19995,15.54999,6.19995,23.60999,.46997,3.76996,.70996,7.57001,.70996,11.38,0,6.70996-.72998,13.44-2.20996,20.06l-7.8501,22.01001s-.98797,3.72472,2.46009,5.81001c6.99573,4.2308-7.16571,15.8623,1.5,30.26996,0,0-.80994,6.61998,3.04992,7.2,3.86011,.59003,6.80524,17.42641,6.28437,21.39235Z" fill="hsl(var(--primary))"/>
            <g>
                <path d="M596.00401,300.74969l19.02355-26.04593,16.39515,8.79141-21.09268,26.82174c.05967,1.04043-.02861,2.10674-.28759,3.17197-1.40851,5.7936-7.24702,9.34844-13.04061,7.93993-5.7936-1.40851-9.34844-7.24702-7.93993-13.04061,.89827-3.69484,3.60109-6.47146,6.94211-7.63851Z" fill="hsl(var(--primary-foreground))"/>
                <path d="M676.34787,136.44544c-4.34035-3.12209-9.42376-5.33038-15.01626-6.31032-7.63304-1.33157-11.91422,9.65173-13.5967,20.36388-.77353,4.96486-1.00211,9.87419-.7359,13.45777l-.44949,3.1346-.26317,16.22693-.62066,37.51486-19.10779,28.28916-8,19-16.34824,20.89685c.31917,.30716,.80674,.75474,1.40771,1.31706,3.13566,2.90002,9.53601,8.68411,13.57087,11.26415,1.40239,.88986,2.50706,1.39554,3.1025,1.27104,.18791-.04094,11.69948-11.12891,12.26716-11.7491,3.8183-4.15637,4.57003-9.7346,16.11486-25.94736,10.51524-14.7559,20.76859-29.42922,24.47277-34.7387l.06808-.09518,16.64483-54.89617,1.51386-4.97616c1.61405-13.62793-4.52548-26.48237-15.02442-34.02332Z" fill="hsl(var(--primary))"/>
            </g>
            <path d="M666.91017,137.2677c-.03101-.01196-.0589-.02625-.08972-.03833-.2572,.02136-.51184,.03674-.76068,.03833h.8504Z" fill="hsl(var(--foreground))"/>
            <circle cx="674.37449" cy="65.07091" r="29.08812" fill="hsl(var(--primary-foreground))"/>
            <path d="M634.99198,56.98588c-1.96381-14.10135,3.7617-18.41542,12.71962-19.69336,17.72365-9.21077,21.78317-6.89541,27.40239-5.89577l2.06473-.44424c6.33666-1.36336,8.63549-.78173,14.27119,1.34865,11.887,4.48215,19.69595,15.84776,20.56044,28.52134,.59469,8.73684-2.14357,10.09703,2.9215,17.1923,4.23561,5.92353,.99605,14.23752-6.11481,15.76746l-6.61838,10.00584c-1.6116-2.03703-2.89952-4.17168-4.35971-6.84654-.57596,2.38662-.63983,5.11944-.33935,7.85757-6.58918,3.28205-13.78262,4.64007-21.4128,4.60707-1.22727-1.63552-2.3268-3.45688-2.18161-5.50876-.42365,2.05599-.9421,4.10432-1.03128,6.20003-4.79967-3.09072-8.76696-2.18272-11.9346,2.56779-8.00073-6.63103-8.62737-21.82477,.88289-25.63072,8.04571-3.21985-4.64581-25.76026-13.2997-26.21987-.05571-.00296-2.3604,8.71193-2.44232,8.54811-1.22116-2.44232-.66263-3.78109-2.12275-6.45598-.4796,2.01207-.60941,4.26549-.45108,6.55939-2.06165-.45033-4.14958-1.10924-6.25678-1.98746-2.44392-3.31915-3.38878-6.79646-2.25759-10.49287Z" fill="hsl(var(--foreground))"/>
            <path d="M742.85689,580.91171c2.06592,.12937,3.20768-2.43737,1.64468-3.93333l-.1555-.61819c.02047-.04951,.04105-.09897,.06178-.14839,2.08924-4.9818,9.16992-4.94742,11.24139,.04177,1.83859,4.42817,4.17942,8.86389,4.75579,13.54594,.25838,2.0668,.14213,4.17236-.31648,6.20047,4.30807-9.41059,6.57515-19.68661,6.57515-30.02077,0-2.59652-.14213-5.19301-.43275-7.78295-.239-2.11854-.56839-4.2241-.99471-6.31034-2.30575-11.2772-7.29852-22.01825-14.50012-30.98962-3.46197-1.89248-6.34906-4.85065-8.09295-8.39652-.62649-1.27891-1.11739-2.65462-1.34991-4.05618,.39398,.05168,1.48556-5.94866,1.18841-6.3168,.54906-.83317,1.53178-1.24733,2.13144-2.06034,2.98232-4.04341,7.0912-3.33741,9.23621,2.15727,4.58224,2.31266,4.62659,6.14806,1.81495,9.83683-1.78878,2.34682-2.03456,5.52233-3.60408,8.03478,.16151,.20671,.32944,.40695,.4909,.61366,2.96106,3.79788,5.52208,7.88002,7.68104,12.16859-.61017-4.76621,.29067-10.50822,1.82641-14.20959,1.74819-4.21732,5.02491-7.76915,7.91045-11.41501,3.46601-4.37924,10.57337-2.46806,11.18401,3.08332,.00591,.05375,.01166,.10745,.01731,.1612-.4286,.24178-.84849,.49867-1.25864,.76992-2.33949,1.54723-1.53096,5.17386,1.24107,5.60174l.06277,.00967c-.15503,1.54366-.41984,3.07444-.80734,4.57937,3.70179,14.31579-4.29011,19.5299-15.70147,19.76412-.25191,.12916-.49738,.25832-.74929,.38109,1.15617,3.25525,2.07982,6.59447,2.76441,9.97891,.61359,2.99043,1.03991,6.01317,1.27885,9.04888,.29715,3.83006,.27129,7.67959-.05168,11.50323l.01939-.13562c.82024-4.21115,3.10671-8.14462,6.4266-10.87028,4.94561-4.06264,11.93282-5.55869,17.26826-8.82425,2.56833-1.57196,5.85945,.45945,5.41121,3.43708l-.02182,.14261c-.79443,.32289-1.56947,.69755-2.31871,1.11733-.4286,.24184-.84848,.49867-1.25864,.76992-2.33949,1.54729-1.53096,5.17392,1.24107,5.6018l.06282,.00965c.0452,.00646,.08397,.01295,.12911,.01944-1.36282,3.23581-3.26168,6.23922-5.63854,8.82922-2.31463,12.49713-12.25603,13.68282-22.89022,10.04354h-.00648c-1.16259,5.06378-2.86128,10.01127-5.0444,14.72621h-18.02019c-.06463-.20022-.12274-.40692-.18089-.60717,1.6664,.10341,3.34571,.00649,4.98629-.29702-1.33701-1.64059-2.67396-3.29409-4.01097-4.93462-.03229-.0323-.05816-.0646-.08397-.09689-.67817-.8396-1.36282-1.67283-2.04099-2.51246l-.00036-.00102c-.04245-2.57755,.26652-5.14662,.87876-7.63984l.00057-.00035Z" fill="hsl(var(--muted))"/>
            <path d="M541.30554,597.05466c0,.66003,.53003,1.19,1.19006,1.19h253.28998c.65997,0,1.19-.52997,1.19-1.19,0-.65997-.53003-1.19-1.19-1.19h-253.28998c-.66003,0-1.19006,.53003-1.19006,1.19Z" fill="hsl(var(--muted))"/>
            <g>
                <path d="M414.0266,140.71614h-33.72142c-2.09368,0-3.79696-1.70328-3.79696-3.79696-4.45851-13.03165-4.37046-25.80093,0-38.32306,0-2.09368,1.70329-3.79696,3.79696-3.79696h33.72142c2.09368,0,3.79696,1.70328,3.79696,3.79696v38.32306c0,2.09368-1.70328,3.79696-3.79696,3.79696Z" fill="#e6e6e6"/>
                <path d="M387.53027,95.93044c-5.46252,0-9.89077,4.42825-9.89077,9.89076v30.28487c0,1.92125,1.55748,3.47874,3.47874,3.47874h18.648c9.34795,0,16.92596-7.57801,16.92596-16.92596v-23.24967c0-1.92125-1.55748-3.47874-3.47874-3.47874h-25.6832Z" fill="#fff"/>
                <g>
                    <path d="M405.01919,107.06733h-15.78792c-.39803,0-.72189-.32387-.72189-.72189,0-.39803,.32387-.72174,.72189-.72174h15.78792c.39803,0,.72174,.32372,.72174,.72174s-.32372,.72189-.72174,.72189Z" fill="#e6e6e6"/>
                    <path d="M405.01919,122.45988h-15.78792c-.39803,0-.72189-.32387-.72189-.72189,0-.39803,.32387-.72174,.72189-.72174h15.78792c.39803,0,.72174,.32372,.72174,.72174s-.32372,.72189-.72174,.72189Z" fill="#e6e6e6"/>
                    <path d="M413.49115,114.76865h-32.73185c-.39803,0-.72189-.32387-.72189-.72189,0-.39803,.32387-.72174,.72189-.72174h32.73185c.39803,0,.72174,.32372,.72174,.72174s-.32372,.72189-.72174,.72189Z" fill="#e6e6e6"/>
                </g>
                <path d="M413.87719,128.71847h-13.65783c-.39803,0-.72189-.32387-.72189-.72189,0-.39803,.32387-.72174,.72189-.72174h13.65783c.39803,0,.72174,.32372,.72174,.72174,0,.39803-.32372,.72189-.72174,.72189Z" fill="#e6e6e6"/>
            </g>
        </svg>
        <p className="mt-4 font-semibold text-lg">Generating your next sprint...</p>
        <p className="text-muted-foreground text-sm">Personalizing tasks just for you.</p>
    </div>
);

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isPending, startTransition] = useTransition();
  const [completedTasks, setCompletedTasks] = useState<string[]>([]);
  const [totalPoints, setTotalPoints] = useState(0);
  const [lastCompletionDate, setLastCompletionDate] = useState<string | null>(null);
  const [studyStreak, setStudyStreak] = useState(0);
  const [level, setLevel] = useState(1);
  const [xp, setXp] = useState(0);
  const { toast } = useToast();
  const { history } = useProgress();

  const xpForNextLevel = level * 100;
  const levelProgress = (xp / xpForNextLevel) * 100;

  const getPersonalizationData = useCallback(() => {
    const incorrectTopics: Record<string, number> = {};
    Object.keys(history).forEach(mcqId => {
      if (history[mcqId] === 'incorrect') {
        const mcq = mcqs.find(m => m.id === mcqId);
        if (mcq) {
          incorrectTopics[mcq.topic] = (incorrectTopics[mcq.topic] || 0) + 1;
        }
      }
    });

    const sortedTopics = Object.entries(incorrectTopics).sort((a, b) => b[1] - a[1]);
    if (sortedTopics.length > 0) {
      return `User is struggling with these topics: ${sortedTopics.map(t => t[0]).join(', ')}.`;
    }
    return "User has no specific weak areas recorded yet.";
  }, [history]);
  
  const fetchTasks = useCallback(() => {
    startTransition(async () => {
      try {
        const personalization = getPersonalizationData();
        const response = await generateDailyTasks({ 
          completedTasks: tasks.map(t => t.title),
          userProgress: personalization,
        });
        if (response && response.tasks) {
          setTasks(response.tasks.map(task => ({ ...task, completed: false })));
          setCompletedTasks([]);
        } else {
          throw new Error("Invalid response from AI.");
        }
      } catch (error) {
        toast({
          variant: 'destructive',
          title: 'Failed to generate tasks',
          description: 'Could not fetch new tasks from the AI. Please try again later.'
        });
      }
    });
  }, [getPersonalizationData, toast, tasks]);
  
  // Load state from localStorage on mount
  useEffect(() => {
    const savedPoints = localStorage.getItem('lawPrepTotalPoints');
    const savedDate = localStorage.getItem('lawPrepLastCompletionDate');
    const savedStreak = localStorage.getItem('lawPrepStudyStreak');
    const savedLevel = localStorage.getItem('lawPrepLevel');
    const savedXp = localStorage.getItem('lawPrepXp');

    if (savedPoints) setTotalPoints(JSON.parse(savedPoints));
    if (savedDate) setLastCompletionDate(savedDate);
    if (savedStreak) setStudyStreak(JSON.parse(savedStreak));
    if(savedLevel) setLevel(JSON.parse(savedLevel));
    if(savedXp) setXp(JSON.parse(savedXp));

    // Check streak
    const today = startOfDay(new Date());
    const lastDate = savedDate ? startOfDay(new Date(savedDate)) : null;

    if(lastDate) {
        if(!isToday(lastDate) && !isYesterday(lastDate)) {
           setStudyStreak(0); // Reset streak if user missed more than a day
        }
    }

    const savedTasks = localStorage.getItem('lawPrepTasks');
    if (savedTasks) {
      const parsedTasks: Task[] = JSON.parse(savedTasks);
      setTasks(parsedTasks);
      setCompletedTasks(parsedTasks.filter(t => t.completed).map(t => t.id));
    } else {
      fetchTasks();
    }
  }, [fetchTasks]);

  // Save state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('lawPrepTotalPoints', JSON.stringify(totalPoints));
    if (lastCompletionDate) localStorage.setItem('lawPrepLastCompletionDate', lastCompletionDate);
    localStorage.setItem('lawPrepStudyStreak', JSON.stringify(studyStreak));
    localStorage.setItem('lawPrepLevel', JSON.stringify(level));
    localStorage.setItem('lawPrepXp', JSON.stringify(xp));
    localStorage.setItem('lawPrepTasks', JSON.stringify(tasks));
  }, [totalPoints, lastCompletionDate, studyStreak, level, xp, tasks]);


  const handleTaskComplete = (taskId: string, points: number) => {
    if (completedTasks.includes(taskId)) return;

    const newCompletedTasks = [...completedTasks, taskId];
    setCompletedTasks(newCompletedTasks);
    
    setTasks(tasks.map(t => t.id === taskId ? {...t, completed: true} : t));

    const newXp = xp + points;
    if(newXp >= xpForNextLevel) {
        setLevel(level + 1);
        setXp(newXp - xpForNextLevel);
        toast({ title: "Leveled Up!", description: `Congratulations! You've reached Level ${level + 1}.`});
    } else {
        setXp(newXp);
    }


    if (newCompletedTasks.length === tasks.length && tasks.length > 0) {
      toast({
        title: "Daily Sprint Complete!",
        description: `Great work! You've earned ${points} XP. Come back tomorrow!`,
      });
      
      const today = new Date();
      const todayStr = today.toISOString().split('T')[0];
      
      if (lastCompletionDate) {
        const yesterday = subDays(today, 1).toISOString().split('T')[0];
        if (lastCompletionDate === yesterday) {
          setStudyStreak(studyStreak + 1);
        } else if (lastCompletionDate !== todayStr) {
          setStudyStreak(1);
        }
      } else {
        setStudyStreak(1);
      }
      setLastCompletionDate(todayStr);
    }
  };

  const allTasksCompleted = tasks.length > 0 && completedTasks.length === tasks.length;

  const getEncouragement = () => {
    if (studyStreak > 10) return "You're a legal legend in the making!";
    if (studyStreak > 5) return "Incredible consistency! Keep it up!";
    if (studyStreak > 1) return `You're on a ${studyStreak}-day streak! Keep the fire burning!`;
    if (allTasksCompleted) return "Fantastic job today!";
    return "Your daily sprint to success starts now!";
  };
  
  return (
    <div className="space-y-8">
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Level</CardTitle>
                <Star className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">{level}</div>
                <p className="text-xs text-muted-foreground">{xp} / {xpForNextLevel} XP</p>
                <Progress value={levelProgress} className="h-2 mt-2" />
            </CardContent>
        </Card>
        <Card className="shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Study Streak</CardTitle>
                <Flame className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">{studyStreak}</div>
                <p className="text-xs text-muted-foreground">{studyStreak > 1 ? 'days in a row!' : 'day streak'}</p>
            </CardContent>
        </Card>
        <StatCard title="Total Attempted" value={history ? Object.keys(history).length : 0} icon={Target} />
        <StatCard title="Overall Accuracy" value={useProgress().attempted > 0 ? `${Math.round((useProgress().correct / useProgress().attempted) * 100)}%` : 'N/A'} icon={CheckCircle} />
      </div>

       <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Trophy className="text-primary"/> Daily Sprint
          </CardTitle>
          <CardDescription>{getEncouragement()}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {isPending && tasks.length === 0 ? (
                <LoadingTasksIllustration />
            ) : tasks.length > 0 ? (
                tasks.map(task => (
                    <div key={task.id} className={cn(
                        "flex items-center space-x-4 rounded-lg border p-4 transition-all",
                        task.completed ? "bg-muted/50 text-muted-foreground" : "bg-background"
                    )}>
                        <Checkbox
                            id={task.id}
                            checked={task.completed}
                            onCheckedChange={() => handleTaskComplete(task.id, task.points)}
                            disabled={task.completed}
                        />
                        <div className="flex-1">
                            <Label htmlFor={task.id} className={cn("font-semibold", task.completed && "line-through")}>
                                {task.title}
                            </Label>
                            <p className="text-sm text-muted-foreground">{task.description}</p>
                        </div>
                        <Link href={task.link}>
                            <Button variant="ghost" size="sm" disabled={task.completed}>Go</Button>
                        </Link>
                        <div className="font-bold text-primary">+{task.points} XP</div>
                    </div>
                ))
            ) : (
                <EmptyTasksIllustration />
            )}
          </div>
        </CardContent>
        {allTasksCompleted && (
            <CardFooter>
                <Button onClick={fetchTasks} disabled={isPending}>
                    <RefreshCw className="mr-2 h-4 w-4"/>
                    Generate New Tasks for Tomorrow
                </Button>
            </CardFooter>
        )}
      </Card>
      
      <div>
        <h2 className="text-xl font-bold tracking-tight mb-4">Content Breakdown</h2>
        <div className="grid gap-4 md:grid-cols-3">
            <Card className="hover:border-primary transition-colors">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total MCQs</CardTitle>
                <Database className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">{mcqs.length}</div>
                <p className="text-xs text-muted-foreground">Available for practice.</p>
            </CardContent>
            </Card>
            <Card className="hover:border-primary transition-colors">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Topic Notes</CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">{notes.length}</div>
                <p className="text-xs text-muted-foreground">In-depth articles.</p>
            </CardContent>
            </Card>
            <Card className="hover:border-primary transition-colors">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Flashcards</CardTitle>
                <Layers3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">{flashcards.length}</div>
                <p className="text-xs text-muted-foreground">For quick revision.</p>
            </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}

const StatCard = ({ title, value, icon: Icon }: { title: string, value: string | number, icon: React.ElementType }) => (
    <Card className="hover:border-primary transition-colors">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{title}</CardTitle>
            <Icon className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
            <div className="text-2xl font-bold">{value}</div>
        </CardContent>
    </Card>
);

    