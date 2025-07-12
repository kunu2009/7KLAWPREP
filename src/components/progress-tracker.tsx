
"use client";

import { useProgress } from '@/hooks/use-progress';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Target, Check, Percent, BookOpenCheck } from 'lucide-react';
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

  if (!isClient) {
    return <div>Loading progress...</div>;
  }

  const accuracy = attempted > 0 ? Math.round((correct / attempted) * 100) : 0;
  
  const data = [
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

      <Card className="shadow-md">
        <CardHeader>
          <CardTitle>Performance Overview</CardTitle>
          <CardDescription>
            A visual breakdown of your correct vs. incorrect answers.
          </CardDescription>
        </CardHeader>
        <CardContent>
            {attempted > 0 ? (
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={data} layout="vertical" margin={{ left: 10 }}>
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
                    <Bar dataKey="correct" stackId="a" fill="hsl(var(--primary))" name="Correct" radius={[4, 4, 4, 4]} />
                    <Bar dataKey="incorrect" stackId="a" fill="hsl(var(--destructive) / 0.5)" name="Incorrect" radius={[4, 4, 4, 4]} />
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
    </div>
  );
}
