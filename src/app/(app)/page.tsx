
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

const StatCard = ({ title, value, icon: Icon, unit, description }: { title: string, value: string | number, icon: React.ElementType, unit?: string, description?: string }) => (
    <Card className="shadow-md">
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

const getAppreciation = (points: number) => {
    if (points >= 100) return "Incredible work! You're a true legal scholar!";
    if (points >= 70) return "Amazing progress! Keep up the brilliant work!";
    if (points >= 50) return "Great job! You're building a strong foundation.";
    if (points > 0) return "Excellent start! Every point counts.";
    return "Complete a task to earn points!";
};

export default function DashboardPage() {
    const [dataSize, setDataSize] = useState(0);
    const [tasks, setTasks] = useState<Task[]>([]);
    const [points, setPoints] = useState(0);
    const [isPending, startTransition] = useTransition();
    const { history } = useProgress();
    const { toast } = useToast();

    const fetchTasks = () => {
        startTransition(async () => {
            try {
                const completedTaskTitles = tasks.filter(t => t.completed).map(t => t.title);
                const userProgressSummary = `User has answered ${Object.keys(history).length} unique MCQs.`;
                const response = await generateDailyTasks({
                    completedTasks: completedTaskTitles,
                    userProgress: userProgressSummary,
                });
                if (response && response.tasks) {
                    setTasks(response.tasks.map(task => ({ ...task, id: uuidv4(), completed: false })));
                } else {
                    throw new Error("Failed to generate new tasks.");
                }
            } catch (error) {
                 toast({
                    variant: "destructive",
                    title: "AI Error",
                    description: "Could not generate new tasks. Please try again.",
                });
            }
        });
    };

    useEffect(() => {
        const allData = { mcqs, flashcards, notes };
        const sizeInBytes = new Blob([JSON.stringify(allData)]).size;
        setDataSize(sizeInBytes);
        fetchTasks();
    }, []);

    const handleTaskCompletion = (taskId: string) => {
        setTasks(currentTasks =>
            currentTasks.map(task => {
                if (task.id === taskId && !task.completed) {
                    setPoints(currentPoints => currentPoints + task.points);
                    return { ...task, completed: true };
                }
                return task;
            })
        );
    };

    const allTasksCompleted = tasks.length > 0 && tasks.every(t => t.completed);

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
                <p className="text-muted-foreground">An overview of your study materials and daily tasks.</p>
            </div>

            <Card className="shadow-lg bg-gradient-to-br from-primary/10 via-card to-card">
                <CardHeader>
                    <div className="flex justify-between items-center">
                        <div>
                            <CardTitle className="flex items-center gap-2"><Trophy className="text-amber-500" /> Daily Sprint</CardTitle>
                            <CardDescription>{getAppreciation(points)}</CardDescription>
                        </div>
                        <div className="text-right">
                            <p className="text-3xl font-bold text-primary">{points}</p>
                            <p className="text-xs text-muted-foreground">Total Points</p>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="space-y-4">
                    {isPending && tasks.length === 0 ? (
                        <div className="flex items-center justify-center p-8 text-muted-foreground">
                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                            <span>Generating your daily tasks...</span>
                        </div>
                    ) : (
                        tasks.map(task => (
                            <Card 
                                key={task.id} 
                                className={cn(
                                    "p-4 flex items-center gap-4 transition-all",
                                    task.completed ? "bg-primary/10 border-primary/20" : "bg-card/50"
                                )}
                            >
                                <button onClick={() => handleTaskCompletion(task.id)} disabled={task.completed}>
                                    {task.completed ? <CheckCircle className="h-6 w-6 text-green-500" /> : <Circle className="h-6 w-6 text-muted-foreground" />}
                                </button>
                                <div className="flex-1">
                                    <Link href={task.link}>
                                        <p className={cn("font-semibold", task.completed && "line-through text-muted-foreground")}>{task.title}</p>
                                    </Link>
                                    <p className={cn("text-sm text-muted-foreground", task.completed && "line-through")}>{task.description}</p>
                                </div>
                                <div className="flex items-center gap-1 text-amber-500 font-semibold">
                                    <Star className="h-4 w-4"/>
                                    <span>{task.points}</span>
                                </div>
                            </Card>
                        ))
                    )}
                </CardContent>
                {allTasksCompleted && (
                     <CardFooter>
                        <Button onClick={fetchTasks} disabled={isPending}>
                            <RefreshCw className="mr-2 h-4 w-4" />
                            Get New Sprint
                        </Button>
                    </CardFooter>
                )}
            </Card>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <StatCard title="Total MCQs" value={mcqs.length} icon={Database} unit="questions" description="Across all topics" />
                <StatCard title="Total Flashcards" value={flashcards.length} icon={Layers3} unit="cards" description="For quick revision" />
                <StatCard title="Note Topics" value={notes.length} icon={FileText} unit="subjects" description="Covering key areas" />
                <StatCard title="Approx. Data Size" value={(dataSize / 1024).toFixed(2)} icon={Server} unit="KB" description="Loaded on client" />
            </div>
             <Card className="shadow-md">
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
                        The total size of this data loaded in your browser is approximately <span className="font-semibold text-foreground">{(dataSize / 1024).toFixed(2)} KB</span>.
                    </p>
                </CardContent>
            </Card>
        </div>
    );
}
