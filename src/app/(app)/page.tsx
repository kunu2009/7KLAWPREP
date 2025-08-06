
"use client";

import { useState, useEffect, useTransition } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { mcqs, flashcards, notes } from '@/lib/data';
import { Database, FileText, Layers3, Server, CheckCircle, Circle, RefreshCw, Star, Trophy, Loader2, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { generateDailyTasks } from '@/ai/flows/generate-daily-tasks';
import { useProgress } from '@/hooks/use-progress';
import { v4 as uuidv4 } from 'uuid';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

interface Task {
    id: string;
    title: string;
    description: string;
    points: number;
    link: string;
    completed: boolean;
}

const EmptyTasksIllustration = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="166" viewBox="0 0 896 747.97143" role="img" className="mx-auto my-4 text-muted-foreground">
      <title>No Tasks</title>
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
      <polygon points="362.06 702.184 125.274 702.184 125.274 700.481 360.356 700.481 360.356 617.861 145.18 617.861 134.727 596.084 136.263 595.347 146.252 616.157 362.06 616.157 362.06 702.184" fill="currentColor" opacity="0.8"/>
      <circle cx="156.78851" cy="726.03301" r="17.88673" fill="currentColor" opacity="0.6"/>
      <circle cx="333.10053" cy="726.03301" r="17.88673" fill="currentColor" opacity="0.6"/>
      <circle cx="540.92726" cy="346.153" r="11.07274" fill="currentColor" opacity="0.6"/>
      <path d="M539.38538,665.76747H273.23673L215.64844,477.531H598.69256l-.34852,1.10753Zm-264.8885-1.7035H538.136l58.23417-184.82951H217.95082Z" transform="translate(-152 -76.01429)" fill="currentColor" opacity="0.8"/>
      <polygon points="366.61 579.958 132.842 579.958 82.26 413.015 418.701 413.015 418.395 413.998 366.61 579.958" fill="hsl(var(--card))"/>
      <polygon points="451.465 384.7 449.818 384.263 461.059 341.894 526.448 341.894 526.448 343.598 462.37 343.598 451.465 384.7" fill="currentColor" opacity="0.8"/>
      <rect x="82.2584" y="458.58385" width="345.2931" height="1.7035" fill="currentColor" opacity="0.8"/>
      <rect x="101.45894" y="521.34377" width="306.31852" height="1.7035" fill="currentColor" opacity="0.8"/>
      <rect x="254.31376" y="402.36843" width="1.7035" height="186.53301" fill="currentColor" opacity="0.8"/>
      <rect x="385.55745" y="570.79732" width="186.92877" height="1.70379" transform="translate(-274.73922 936.23495) rotate(-86.24919)" fill="currentColor" opacity="0.8"/>
      <rect x="334.45728" y="478.18483" width="1.70379" height="186.92877" transform="translate(-188.46866 -52.99638) rotate(-3.729)" fill="currentColor" opacity="0.8"/>
      <rect y="745" width="896" height="2" fill="currentColor" opacity="0.8"/>
      <path d="M747.41068,137.89028s14.61842,41.60627,5.62246,48.00724S783.39448,244.573,783.39448,244.573l47.22874-12.80193-25.86336-43.73993s-3.37348-43.73992-3.37348-50.14089S747.41068,137.89028,747.41068,137.89028Z" transform="translate(-152 -76.01429)" fill="hsl(var(--accent))" opacity="0.6"/>
      <path d="M747.41068,137.89028s14.61842,41.60627,5.62246,48.00724S783.39448,244.573,783.39448,244.573l47.22874-12.80193-25.86336-43.73993s-3.37348-43.73992-3.37348-50.14089S747.41068,137.89028,747.41068,137.89028Z" transform="translate(-152 -76.01429)" opacity="0.1"/>
      <path d="M722.87364,434.46832s-4.26731,53.34138,0,81.07889,10.66828,104.5491,10.66828,104.5491,0,145.08854,23.4702,147.22219,40.53945,4.26731,42.6731-4.26731-10.66827-12.80193-4.26731-17.06924,8.53462-19.20289,0-36.27213,0-189.8953,0-189.8953l40.53945,108.81641s4.26731,89.61351,8.53462,102.41544-4.26731,36.27213,10.66827,38.40579,32.00483-10.66828,40.53945-14.93559-12.80193-4.26731-8.53462-6.401,17.06924-8.53462,12.80193-10.66828-8.53462-104.54909-8.53462-104.54909S879.69728,414.1986,864.7617,405.664s-24.537,6.16576-24.537,6.16576Z" transform="translate(-152 -76.01429)" fill="currentColor" opacity="0.8"/>
      <path d="M761.27943,758.78388v17.06924s-19.20289,46.39942,0,46.39942,34.13848,4.8083,34.13848-1.59266V763.05119Z" transform="translate(-152 -76.01429)" fill="currentColor" opacity="0.8"/>
      <path d="M887.16508,758.75358v17.06924s19.20289,46.39941,0,46.39941-34.13848,4.80831-34.13848-1.59266V763.02089Z" transform="translate(-152 -76.01429)" fill="currentColor" opacity="0.8"/>
      <circle cx="625.28185" cy="54.4082" r="38.40579" fill="hsl(var(--accent))" opacity="0.6"/>
      <path d="M765.54674,201.89993s10.66828,32.00482,27.73752,25.60386l17.06924-6.401L840.22467,425.9337s-23.47021,34.13848-57.60869,12.80193S765.54674,201.89993,765.54674,201.89993Z" transform="translate(-152 -76.01429)" fill="hsl(var(--primary))" opacity="0.6"/>
      <path d="M795.41791,195.499l9.60145-20.26972s56.54186,26.67069,65.07648,35.20531,8.53462,21.33655,8.53462,21.33655l-14.93559,53.34137s4.26731,117.351,4.26731,121.61834,14.93559,27.73751,4.26731,19.20289-12.80193-17.06924-21.33655-4.26731-27.73751,27.73752-27.73751,27.73752Z" transform="translate(-152 -76.01429)" fill="hsl(var(--primary))" opacity="0.5"/>
      <path d="M870.09584,349.12212l-6.401,59.74234s-38.40579,34.13848-29.87117,36.27214,12.80193-6.401,12.80193-6.401,14.93559,14.93559,23.47021,6.401S899.967,355.52309,899.967,355.52309Z" transform="translate(-152 -76.01429)" fill="hsl(var(--accent))" opacity="0.6"/>
      <path d="M778.1,76.14416c-8.51412-.30437-17.62549-.45493-24.80406,4.13321a36.31263,36.31263,0,0,0-8.5723,8.39153c-6.99153,8.83846-13.03253,19.95926-10.43553,30.92537l3.01633-1.1764a19.75086,19.75086,0,0,1-1.90515,8.46261c.42475-1.2351,1.84722.76151,1.4664,2.01085L733.543,139.792c5.46207-2.00239,12.25661,2.05189,13.08819,7.80969.37974-12.66123,1.6932-27.17965,11.964-34.59331,5.17951-3.73868,11.73465-4.88,18.04162-5.8935,5.81832-.935,11.91781-1.82659,17.49077.08886s10.31871,7.615,9.0553,13.37093c2.56964-.88518,5.44356.90566,6.71347,3.30856s1.33662,5.2375,1.37484,7.95506c2.73911,1.93583,5.85632-1.9082,6.97263-5.07112,2.62033-7.42434,4.94941-15.32739,3.53783-23.073s-7.72325-15.14773-15.59638-15.174a5.46676,5.46676,0,0,0,1.42176-3.84874l-6.48928-.5483a7.1723,7.1723,0,0,0,4.28575-2.25954C802.7981,84.73052,782.31323,76.29477,778.1,76.14416Z" transform="translate(-152 -76.01429)" fill="currentColor" opacity="0.8"/>
      <path d="M776.215,189.098s-17.36929-17.02085-23.62023-15.97822S737.80923,189.098,737.80923,189.098s-51.20772,17.06924-49.07407,34.13848S714.339,323.51826,714.339,323.51826s19.2029,100.28179,2.13366,110.95006,81.07889,38.40579,83.21254,25.60386,6.401-140.82123,0-160.02412S776.215,189.098,776.215,189.098Z" transform="translate(-152 -76.01429)" fill="hsl(var(--primary))" opacity="0.5"/>
      <path d="M850.89294,223.23648h26.38265S895.6997,304.31537,897.83335,312.85s6.401,49.07406,4.26731,49.07406-44.80675-8.53462-44.80675-2.13365Z" transform="translate(-152 -76.01429)" fill="hsl(var(--primary))" opacity="0.5"/>
      <path d="M850,424.01429H749c-9.85608-45.34-10.67957-89.14649,0-131H850C833.70081,334.115,832.68225,377.62137,850,424.01429Z" transform="translate(-152 -76.01429)" fill="hsl(var(--card))"/>
      <path d="M707.93806,368.325,737.80923,381.127s57.60868,8.53462,57.60868-14.93559-57.60868-10.66827-57.60868-10.66827L718.60505,349.383Z" transform="translate(-152 -76.01429)" fill="hsl(var(--accent))" opacity="0.6"/>
      <path d="M714.339,210.43455l-25.60386,6.401L669.53227,329.91923s-6.401,29.87117,4.26731,32.00482S714.339,381.127,714.339,381.127s4.26731-32.00483,12.80193-32.00483L705.8044,332.05288,718.60633,257.375Z" transform="translate(-152 -76.01429)" fill="hsl(var(--primary))" opacity="0.5"/>
      <rect x="60.2485" y="352.90779" width="140" height="2" fill="currentColor" opacity="0.1"/>
      <rect x="98.2485" y="334.90779" width="2" height="18.5" fill="currentColor" opacity="0.1"/>
      <rect x="159.2485" y="334.90779" width="2" height="18.5" fill="currentColor" opacity="0.1"/>
      <rect x="109.2485" y="56.90779" width="140" height="2" fill="currentColor" opacity="0.1"/>
      <rect x="209.2485" y="58.40779" width="2" height="18.5" fill="currentColor" opacity="0.1"/>
      <rect x="148.2485" y="58.40779" width="2" height="18.5" fill="currentColor" opacity="0.1"/>
      <rect x="250.2485" y="253.90779" width="140" height="2" fill="currentColor" opacity="0.1"/>
      <rect x="350.2485" y="255.40779" width="2" height="18.5" fill="currentColor" opacity="0.1"/>
      <rect x="289.2485" y="255.40779" width="2" height="18.5" fill="currentColor" opacity="0.1"/>
      <rect x="12.2485" y="252.90779" width="140" height="2" fill="currentColor" opacity="0.1"/>
      <rect x="112.2485" y="254.40779" width="2" height="18.5" fill="currentColor" opacity="0.1"/>
      <rect x="51.2485" y="254.40779" width="2" height="18.5" fill="currentColor" opacity="0.1"/>
      <rect x="180.2485" y="152.90779" width="140" height="2" fill="currentColor" opacity="0.1"/>
      <rect x="218.2485" y="134.90779" width="2" height="18.5" fill="currentColor" opacity="0.1"/>
      <rect x="279.2485" y="134.90779" width="2" height="18.5" fill="currentColor" opacity="0.1"/>
    </svg>
  );

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [points, setPoints] = useState(0);
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();
  const { history } = useProgress();

  const fetchTasks = () => {
    startTransition(async () => {
      try {
        const completedTaskTitles = tasks.filter(t => t.completed).map(t => t.title);
        const userProgressSummary = `Attempted: ${history.attempted}, Correct: ${history.correct}`;
        
        const response = await generateDailyTasks({ 
            completedTasks: completedTaskTitles,
            userProgress: userProgressSummary,
        });
        
        if (response && response.tasks) {
          setTasks(response.tasks.map(task => ({ ...task, completed: false })));
        } else {
          throw new Error("Invalid response from task generator.");
        }
      } catch (error) {
        toast({
          variant: "destructive",
          title: "An error occurred",
          description: "Failed to generate new tasks. Please try again.",
        });
      }
    });
  };
  
  useEffect(() => {
    fetchTasks();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleTaskToggle = (id: string) => {
    const newTasks = tasks.map(task => {
      if (task.id === id && !task.completed) {
        setPoints(p => p + task.points);
        return { ...task, completed: true };
      }
      return task;
    });
    setTasks(newTasks);
  };

  const allTasksCompleted = tasks.length > 0 && tasks.every(task => task.completed);

  const getEncouragement = () => {
    if (points > 50) return "Incredible! You're on a roll!";
    if (points > 20) return "Great job! Keep up the momentum!";
    if (points > 0) return "Nice start! Keep going!";
    return "Let's get started!";
  };

  return (
    <div className="space-y-8">
      
      <section>
          <div className="flex justify-between items-start mb-4">
              <div>
                <h1 className="text-2xl font-bold tracking-tight">Your Daily Sprint</h1>
                <p className="text-muted-foreground">Complete these tasks to earn points and boost your prep!</p>
              </div>
              <div className="text-right">
                  <div className="text-3xl font-bold text-primary flex items-center gap-2">
                     <Trophy className="h-7 w-7"/> {points}
                  </div>
                   <p className="text-sm text-muted-foreground">Points</p>
              </div>
          </div>
          
          <Card>
              <CardHeader>
                <CardTitle>Today's Tasks</CardTitle>
                <CardDescription>{getEncouragement()}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {isPending && tasks.length === 0 ? (
                    <div className="flex justify-center items-center py-8">
                        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
                    </div>
                ) : tasks.length > 0 ? (
                    tasks.map(task => (
                        <div key={task.id} className={cn("flex items-center space-x-4 p-4 rounded-lg transition-colors", task.completed ? "bg-primary/10" : "bg-muted/50")}>
                           <Button 
                                size="icon" 
                                variant={task.completed ? "default" : "outline"}
                                onClick={() => handleTaskToggle(task.id)}
                                disabled={task.completed}
                                className="rounded-full"
                           >
                            {task.completed ? <CheckCircle className="h-5 w-5"/> : <Circle className="h-5 w-5" />}
                           </Button>
                           <div className="flex-1">
                            <Link href={task.link}>
                                <p className={cn("font-semibold cursor-pointer hover:underline", task.completed && "line-through text-muted-foreground")}>
                                    {task.title}
                                </p>
                            </Link>
                             <p className={cn("text-sm text-muted-foreground", task.completed && "line-through")}>{task.description}</p>
                           </div>
                           <div className="flex items-center gap-1 text-primary font-bold">
                             <Star className="h-4 w-4"/>
                             <span>{task.points}</span>
                           </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center py-8">
                        <EmptyTasksIllustration />
                        <p className="text-muted-foreground mt-4">You're all done for now! Great job.</p>
                    </div>
                )}
              </CardContent>
              {allTasksCompleted && (
                <CardFooter>
                    <Button onClick={fetchTasks} disabled={isPending}>
                        <RefreshCw className="mr-2 h-4 w-4"/>
                        Get New Sprint
                    </Button>
                </CardFooter>
              )}
          </Card>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold tracking-tight">Content Breakdown</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total MCQs</CardTitle>
              <Database className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mcqs.length}</div>
              <p className="text-xs text-muted-foreground">questions across all topics</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Topic Notes</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{notes.length}</div>
              <p className="text-xs text-muted-foreground">detailed subject notes</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Flashcards</CardTitle>
              <Layers3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{flashcards.length}</div>
              <p className="text-xs text-muted-foreground">cards for quick revision</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Topics</CardTitle>
              <Server className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{[...new Set(mcqs.map(m => m.topic))].length}</div>
              <p className="text-xs text-muted-foreground">subjects covered</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

    