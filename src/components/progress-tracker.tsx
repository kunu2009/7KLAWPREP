"use client";

import { useProgress } from '@/hooks/use-progress';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Target, Check, Percent, BookOpenCheck } from 'lucide-react';

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
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Attempted</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{attempted}</div>
            <p className="text-xs text-muted-foreground">questions answered</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Correct Answers</CardTitle>
            <Check className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{correct}</div>
             <p className="text-xs text-muted-foreground">out of {attempted} attempted</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Accuracy</CardTitle>
            <Percent className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{accuracy}%</div>
            <p className="text-xs text-muted-foreground">your current success rate</p>
          </CardContent>
        </Card>
         <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Questions Mastered</CardTitle>
            <BookOpenCheck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{Object.keys(history).length}</div>
            <p className="text-xs text-muted-foreground">unique questions seen</p>
          </CardContent>
        </Card>
      </div>

      <Card>
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
                        Attempt some MCQs from the "Daily MCQs" section to see your progress here.
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
