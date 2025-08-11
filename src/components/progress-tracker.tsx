
"use client";

import { useMemo } from 'react';
import { useProgress } from '@/hooks/use-progress';
import { mcqs } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList } from 'recharts';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Target, Check, Percent, BookOpenCheck, BarChart3, TrendingUp } from 'lucide-react';
import Link from 'next/link';

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
        <Card className="shadow-md">
            <CardHeader>
            <CardTitle className="flex items-center gap-2"><BarChart3/> Performance Overview</CardTitle>
            <CardDescription>
                Your overall correct vs. incorrect answers.
            </CardDescription>
            </CardHeader>
            <CardContent>
                {attempted > 0 ? (
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={overallData} layout="vertical" margin={{ left: 10 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" hide />
                        <YAxis type="category" dataKey="name" hide />
                        <Tooltip
                            cursor={{ fill: 'hsl(var(--muted))' }}
                            contentStyle={{
                                background: 'hsl(var(--background))',
                                border: '1px solid hsl(var(--border))',
                                borderRadius: 'var(--radius)',
                            }}
                        />
                        <Bar dataKey="correct" stackId="a" fill="hsl(var(--primary))" name="Correct" radius={[4, 0, 0, 4]} />
                        <Bar dataKey="incorrect" stackId="a" fill="hsl(var(--destructive) / 0.5)" name="Incorrect" radius={[0, 4, 4, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                ) : (
                    <Alert>
                        <AlertTitle>No Data Yet!</AlertTitle>
                        <AlertDescription>
                            Attempt some MCQs from the <Link href="/mcqs" className="font-semibold text-primary hover:underline">Daily MCQs</Link> section to see your progress here.
                        </AlertDescription>
                    </Alert>
                )}
            </CardContent>
            <CardFooter>
                <Button variant="destructive" onClick={resetProgress}>Reset All Progress</Button>
            </CardFooter>
        </Card>

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
        </Card>
      </div>

    </div>
  );
}
