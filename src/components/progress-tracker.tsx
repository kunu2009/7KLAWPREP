"use client";

import { useProgress } from '@/hooks/use-progress';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, PieChart, Pie } from 'recharts';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Target, Check, Percent, BookOpenCheck, Flame, Trophy, TrendingDown, Zap } from 'lucide-react';
import Link from 'next/link';
import { useFeatureToggles } from '@/context/feature-toggles';

const COLORS = ['hsl(var(--primary))', 'hsl(var(--chart-2))', 'hsl(var(--chart-3))', 'hsl(var(--chart-4))', 'hsl(var(--chart-5))'];

export function ProgressTracker() {
  const { attempted, correct, history, currentStreak, longestStreak, topicProgress, resetProgress, isClient, getWeakestTopics } = useProgress();
  const { zenMode } = useFeatureToggles();

  if (!isClient) {
    return <div>Loading progress...</div>;
  }

  const accuracy = attempted > 0 ? Math.round((correct / attempted) * 100) : 0;
  
  const barData = [
    { name: 'Progress', correct, incorrect: attempted - correct },
  ];

  // Topic breakdown data for pie chart
  const topicData = Object.entries(topicProgress).map(([topic, data]) => ({
    name: topic,
    value: data.attempted,
    accuracy: data.attempted > 0 ? Math.round((data.correct / data.attempted) * 100) : 0,
  }));

  const weakestTopics = getWeakestTopics(3);

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Attempted</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{zenMode ? '---' : attempted}</div>
            <p className="text-xs text-muted-foreground">questions answered</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Correct Answers</CardTitle>
            <Check className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{zenMode ? '---' : correct}</div>
             <p className="text-xs text-muted-foreground">out of {zenMode ? '---' : attempted} attempted</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Accuracy</CardTitle>
            <Percent className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{zenMode ? '---' : `${accuracy}%`}</div>
            <p className="text-xs text-muted-foreground">your current success rate</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border-orange-500/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current Streak</CardTitle>
            <Flame className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">{zenMode ? '---' : `${currentStreak} days`}</div>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              <Trophy className="h-3 w-3" /> Best: {zenMode ? '---' : longestStreak} days
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Main Charts Row */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Performance Bar Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Performance Overview</CardTitle>
            <CardDescription>
              A visual breakdown of your correct vs. incorrect answers.
            </CardDescription>
          </CardHeader>
          <CardContent>
              {attempted > 0 ? (
                  <ResponsiveContainer width="100%" height={200}>
                      <BarChart data={barData} layout="vertical" margin={{ left: 10 }}>
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
        </Card>

        {/* Topic Distribution Pie Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Topic Distribution</CardTitle>
            <CardDescription>
              Questions attempted by subject area.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {topicData.length > 0 ? (
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={topicData}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={80}
                    paddingAngle={2}
                    dataKey="value"
                    label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                    labelLine={false}
                  >
                    {topicData.map((_, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      background: 'hsl(var(--background))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: 'var(--radius)',
                    }}
                    formatter={(value: number, name: string, props: { payload: { accuracy: number } }) => [
                      `${value} questions (${props.payload.accuracy}% accuracy)`,
                      name
                    ]}
                  />
                </PieChart>
              </ResponsiveContainer>
            ) : (
              <div className="h-[200px] flex items-center justify-center text-muted-foreground">
                <p>No topic data yet. Start practicing!</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Weakness Heatmap / Error DNA */}
      {weakestTopics.length > 0 && (
        <Card className="border-amber-500/30 bg-amber-500/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingDown className="h-5 w-5 text-amber-600" />
              Focus Areas (Weakness Heatmap)
            </CardTitle>
            <CardDescription>
              Topics where you need more practice. The AI Coach recommends focusing here.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {weakestTopics.map((topic, index) => (
                <div key={topic.topic} className="flex items-center justify-between p-3 rounded-lg bg-background border">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold text-sm">
                      {index + 1}
                    </span>
                    <div>
                      <p className="font-medium">{topic.topic}</p>
                      <p className="text-xs text-muted-foreground">{topic.attempted} questions attempted</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`text-lg font-bold ${topic.accuracy < 50 ? 'text-destructive' : 'text-amber-600'}`}>
                      {topic.accuracy}%
                    </p>
                    <p className="text-xs text-muted-foreground">accuracy</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 p-3 rounded-lg bg-primary/5 border border-primary/20">
              <div className="flex items-start gap-2">
                <Zap className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium text-sm">AI Coach Tip</p>
                  <p className="text-xs text-muted-foreground">
                    Spend 20 extra minutes daily on your weakest topic. Use flashcards + MCQs together for faster improvement.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Questions Mastered & Reset */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <BookOpenCheck className="h-5 w-5" />
              Questions Mastered
            </CardTitle>
            <CardDescription>{Object.keys(history).length} unique questions seen</CardDescription>
          </div>
        </CardHeader>
        <CardFooter>
            <Button variant="destructive" onClick={resetProgress}>Reset All Progress</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
