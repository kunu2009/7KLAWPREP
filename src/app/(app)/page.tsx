
"use client";

import Link from "next/link";
import { useState, useEffect, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { mcqs, flashcards, notes, reels } from '@/lib/data';
import { Database, FileText, Layers3, PlaySquare, Server } from 'lucide-react';
import { useFeatureToggles, SectionToggleKey } from '@/context/feature-toggles';

const StatCard = ({ title, value, icon: Icon, unit, description }: { title: string, value: string | number, icon: React.ElementType, unit?: string, description?: string }) => (
    <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{title}</CardTitle>
            <Icon className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
            <div className="text-2xl font-bold">
                {value} {unit && <span className="text-base font-medium text-muted-foreground">{unit}</span>}
            </div>
            {description && <p className="text-xs text-muted-foreground">{description}</p>}
        </CardContent>
    </Card>
);

export default function DashboardPage() {
    const [dataSize, setDataSize] = useState(0);
    const { sections, sectionOrder, zenMode } = useFeatureToggles();

    useEffect(() => {
        // This calculation runs only on the client-side to avoid server/client mismatch
        const allData = { mcqs, flashcards, notes };
        const sizeInBytes = new Blob([JSON.stringify(allData)]).size;
        setDataSize(sizeInBytes);
    }, []);

    const formattedSize = (dataSize / 1024).toFixed(2); // Convert to KB

    const statConfigs: Array<{ key: SectionToggleKey; title: string; value: number; unit: string; description: string; icon: React.ElementType; }> = useMemo(() => ([
        { key: 'mcqs', title: 'Total MCQs', value: mcqs.length, unit: 'questions', description: 'Across all topics', icon: Database },
        { key: 'flashcards', title: 'Total Flashcards', value: flashcards.length, unit: 'cards', description: 'For quick revision', icon: Layers3 },
        { key: 'notes', title: 'Note Topics', value: notes.length, unit: 'subjects', description: 'Covering key areas', icon: FileText },
        { key: 'reels', title: 'Legal Reels', value: reels.length, unit: 'shorts', description: 'Bite-sized explainers', icon: PlaySquare },
    ]), []);

    const visibleStats = useMemo(() => {
        return sectionOrder
            .map(key => statConfigs.find(stat => stat.key === key))
            .filter((stat): stat is NonNullable<typeof stat> => !!stat && sections[stat.key]);
    }, [sectionOrder, sections, statConfigs]);

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
                <p className="text-muted-foreground">An overview of your study materials.</p>
            </div>
            {visibleStats.length ? (
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    {visibleStats.map((stat) => (
                        <StatCard
                            key={stat.key}
                            title={stat.title}
                            value={zenMode ? "---" : stat.value}
                            icon={stat.icon}
                            unit={stat.unit}
                            description={stat.description}
                        />
                    ))}
                    <StatCard title="Approx. Data Size" value={formattedSize} icon={Server} unit="KB" description="Loaded on client" />
                </div>
            ) : (
                <Card>
                    <CardHeader>
                        <CardTitle>Nothing to display</CardTitle>
                        <CardDescription>All dashboard sections are hidden. Re-enable the ones you need from Settings.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Link href="/settings" className="text-sm font-semibold text-primary underline-offset-4 hover:underline">
                            Open Settings
                        </Link>
                    </CardContent>
                </Card>
            )}
            <Card>
                <CardHeader>
                    <CardTitle>Content Breakdown</CardTitle>
                    <CardDescription>
                        Here is a summary of the study materials currently in the app.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <ul className="list-disc list-inside mt-2 space-y-2 text-muted-foreground">
                        <li><span className="font-semibold text-foreground">{mcqs.length} Multiple Choice Questions</span> across various subjects to test your knowledge.</li>
                        <li><span className="font-semibold text-foreground">{flashcards.length} Flashcards</span> for quick revision of key legal terms and maxims.</li>
                        <li>In-depth <span className="font-semibold text-foreground">{notes.length} Topic Notes</span> covering Constitution, Legal Aptitude, and more.</li>
                    </ul>
                    <p className="text-sm text-muted-foreground mt-4">
                        The total size of this data loaded in your browser is approximately <span className="font-semibold text-foreground">{formattedSize} KB</span>.
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">
                        Customize this dashboard from the <Link href="/settings" className="font-medium text-foreground underline-offset-2 hover:underline">Settings</Link> page if you prefer a lighter view.
                    </p>
                </CardContent>
            </Card>
        </div>
    );
}
