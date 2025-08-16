
"use client";

import { useMemo, useState, useTransition } from 'react';
import { useProgress } from '@/hooks/use-progress';
import { mcqs } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList } from 'recharts';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Target, Check, Percent, BookOpenCheck, BarChart3, TrendingUp, Sparkles, Wand2, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { suggestRemedialPlan } from '@/ai/flows/suggest-remedial-plan';
import { useToast } from '@/hooks/use-toast';

const StatCard = ({ title, value, icon: Icon, unit, description }: { title: string, value: string | number, icon: React.ElementType, unit?: string, description?: string }) => (
  <Card className="shadow-sm">
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

function AiAdvisorCard({ topicData, accuracy }: { topicData: { name: string, accuracy: number }[], accuracy: number }) {
    const [isPending, startTransition] = useTransition();
    const [advice, setAdvice] = useState('');
    const { toast } = useToast();

    const weakestTopics = useMemo(() => {
        return topicData.filter(t => t.accuracy < 75).sort((a,b) => a.accuracy - b.accuracy).slice(0, 3).map(t => t.name);
    }, [topicData]);

    const handleGetAdvice = () => {
        if(weakestTopics.length === 0) {
            setAdvice("You're doing great in all topics! Keep up the balanced effort across all subjects.");
            return;
        }

        startTransition(async () => {
            try {
                const response = await suggestRemedialPlan({ weakTopics, accuracy });
                if(response.plan) {
                    setAdvice(response.plan);
                } else {
                    throw new Error("Failed to get a plan.");
                }
            } catch (error) {
                toast({
                    variant: "destructive",
                    title: "Could not get AI advice",
                    description: "The AI Mentor seems to be busy. Please try again in a moment."
                });
            }
        });
    };

    return (
         <Card className="shadow-md">
            <CardHeader>
                <CardTitle className="flex items-center gap-2"><Sparkles className="text-primary"/> AI Study Advisor</CardTitle>
                <CardDescription>
                    Get a personalized study plan based on your performance.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                {advice ? (
                     <div className="text-sm leading-relaxed whitespace-pre-wrap flex-1 prose prose-sm dark:prose-invert max-w-none">
                        <div dangerouslySetInnerHTML={{ __html: advice.replace(/\n/g, '<br />') }} />
                     </div>
                ) : (
                    <Alert>
                        <AlertTitle>Identify Your Weak Spots</AlertTitle>
                        <AlertDescription>
                           Click the button below and our AI mentor will analyze your weakest topics to suggest a focused plan for improvement.
                        </AlertDescription>
                    </Alert>
                )}
            </CardContent>
            <CardFooter>
                 <Button onClick={handleGetAdvice} disabled={isPending}>
                    {isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin"/> : <Wand2 className="mr-2 h-4 w-4"/>}
                    {advice ? "Regenerate Advice" : "Get AI Advice"}
                </Button>
            </CardFooter>
        </Card>
    )
}

export function ProgressTracker() {
  const { attempted, correct, history, resetProgress, isClient } = useProgress();

  const topicMasteryData = useMemo(() => {
    if (!isClient || Object.keys(history).length === 0) {
      return [];
    }

    const topicStats: { [key: string]: { correct: number; attempted: number } } = {};

    for (const mcqId in history) {
      const mcq = mcqs.find(m => m.id === mcqId);
      if (mcq) {
        const topic = mcq.topic;
        if (!topicStats[topic]) {
          topicStats[topic] = { correct: 0, attempted: 0 };
        }
        topicStats[topic].attempted += 1;
        if (history[mcqId] === 'correct') {
          topicStats[topic].correct += 1;
        }
      }
    }

    return Object.entries(topicStats).map(([name, stats]) => {
      const accuracy = Math.round((stats.correct / stats.attempted) * 100);
      let fill;
      if (accuracy > 70) {
        fill = 'hsl(var(--chart-2))'; // Green
      } else if (accuracy > 40) {
        fill = 'hsl(var(--chart-4))'; // Yellow
      } else {
        fill = 'hsl(var(--chart-1))'; // Red
      }
      return { name, accuracy, fill };
    }).sort((a, b) => b.accuracy - a.accuracy);
  }, [history, isClient]);

  if (!isClient) {
    return <div>Loading progress...</div>;
  }

  const accuracy = attempted > 0 ? Math.round((correct / attempted) * 100) : 0;
  
  const overallData = [
    { name: 'Progress', correct, incorrect: attempted - correct },
  ];

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Total Attempted" value={attempted} icon={Target} unit="questions" description="questions answered" />
        <StatCard title="Correct Answers" value={correct} icon={Check} unit="correct" description={`out of ${attempted} attempted`} />
        <StatCard title="Accuracy" value={accuracy} icon={Percent} unit="%" description="your current success rate" />
        <StatCard title="Questions Mastered" value={Object.keys(history).length} icon={BookOpenCheck} unit="unique" description="unique questions seen" />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <AiAdvisorCard topicData={topicMasteryData} accuracy={accuracy} />

        <Card className="shadow-md">
            <CardHeader>
                <CardTitle className="flex items-center gap-2"><TrendingUp /> Topic Mastery</CardTitle>
                <CardDescription>
                    Your accuracy breakdown by topic.
                </CardDescription>
            </CardHeader>
            <CardContent>
                {topicMasteryData.length > 0 ? (
                     <ResponsiveContainer width="100%" height={350}>
                        <BarChart data={topicMasteryData} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                             <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                             <XAxis type="number" domain={[0, 100]} tickFormatter={(value) => `${value}%`} />
                             <YAxis dataKey="name" type="category" width={100} tick={{ fontSize: 12 }} />
                             <Tooltip
                                cursor={{ fill: 'hsl(var(--muted))' }}
                                contentStyle={{
                                    background: 'hsl(var(--background))',
                                    border: '1px solid hsl(var(--border))',
                                    borderRadius: 'var(--radius)',
                                }}
                                formatter={(value) => `${value}%`}
                            />
                             <Bar dataKey="accuracy" radius={[0, 4, 4, 0]}>
                                <LabelList dataKey="accuracy" position="right" formatter={(value: number) => `${value}%`} className="fill-foreground" fontSize={12} />
                             </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                ) : (
                    <Alert>
                         <AlertTitle>Start a Quiz!</AlertTitle>
                        <AlertDescription>
                            Complete a few quizzes from different topics in the <Link href="/practice-quiz" className="font-semibold text-primary hover:underline">Practice Quiz</Link> section to see your mastery chart.
                        </AlertDescription>
                    </Alert>
                )}
            </CardContent>
             <CardFooter>
                <Button variant="destructive" onClick={resetProgress}>Reset All Progress</Button>
            </CardFooter>
        </Card>
      </div>

    </div>
  );
}
