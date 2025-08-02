
"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { monthlyAffairs } from "@/lib/current-affairs-data";
import type { CurrentAffairsCategory, CurrentAffairsItem } from "@/lib/types";
import { Calendar, HelpCircle, Newspaper, Pin, History, Landmark, GanttChartSquare } from "lucide-react";

// Group items by category for each month
const categorizedMonthlyAffairs = monthlyAffairs.map(month => {
  const grouped = month.items.reduce((acc, item) => {
    const category = item.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(item);
    return acc;
  }, {} as Record<CurrentAffairsCategory, CurrentAffairsItem[]>);

  return {
    month: month.month,
    // Sort categories alphabetically
    categories: Object.entries(grouped).sort((a, b) => a[0].localeCompare(b[0])),
  };
});

export default function CurrentAffairsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Current Affairs</h1>
        <p className="text-muted-foreground">
          A categorized monthly archive of important news for your exam preparation.
        </p>
      </div>

      {categorizedMonthlyAffairs.map(monthlyData => (
        <div key={monthlyData.month}>
            <h2 className="text-xl font-semibold mb-4 pb-2 border-b-2 border-primary flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                {monthlyData.month}
            </h2>
            <Accordion type="single" collapsible className="w-full space-y-4">
                {monthlyData.categories.map(([category, items]) => (
                    <AccordionItem key={category} value={category} className="border rounded-lg px-4 bg-card">
                        <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                            <div className="flex items-center gap-3">
                                <Newspaper className="h-5 w-5 text-primary" />
                                <span>{category}</span>
                                <Badge variant="secondary">{items.length} {items.length > 1 ? 'items' : 'item'}</Badge>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="pt-2">
                            <div className="space-y-6">
                                {items.map(item => (
                                    <Card key={item.id} className="shadow-sm">
                                        <CardHeader>
                                            <CardTitle className="text-base">{item.title}</CardTitle>
                                            <CardDescription className="flex items-center gap-2 pt-1">
                                                <Calendar className="h-4 w-4" /> {item.date}
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent className="space-y-4 text-sm">
                                            <div>
                                                <h4 className="font-semibold mb-2 flex items-center gap-2"><Pin className="h-4 w-4 text-primary"/>What Happened</h4>
                                                <p className="text-muted-foreground ml-6">{item.whatHappened}</p>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold mb-2 flex items-center gap-2"><GanttChartSquare className="h-4 w-4 text-primary"/>Summary</h4>
                                                <p className="text-muted-foreground ml-6">{item.summary}</p>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold mb-2 flex items-center gap-2"><History className="h-4 w-4 text-primary"/>Previous Context</h4>
                                                <p className="text-muted-foreground ml-6">{item.previousContext}</p>
                                            </div>
                                             <div>
                                                <h4 className="font-semibold mb-2 flex items-center gap-2"><Newspaper className="h-4 w-4 text-primary"/>Latest News</h4>
                                                <p className="text-muted-foreground ml-6">{item.latestNews}</p>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold mb-2 flex items-center gap-2"><Landmark className="h-4 w-4 text-primary"/>Why It's Important</h4>
                                                <p className="text-muted-foreground ml-6">{item.importance}</p>
                                            </div>
                                             <div>
                                                <h4 className="font-semibold mb-2 flex items-center gap-2"><HelpCircle className="h-4 w-4 text-primary"/>Probable Question</h4>
                                                <div className="text-muted-foreground italic ml-6">
                                                  <p>{item.probableQuestion.question}</p>
                                                  <ul className="list-disc list-inside mt-1">
                                                    {item.probableQuestion.options.map((opt, index) => (
                                                      <li key={index} className={opt === item.probableQuestion.answer ? 'font-bold text-primary' : ''}>
                                                        {String.fromCharCode(65 + index)}. {opt}
                                                      </li>
                                                    ))}
                                                  </ul>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
      ))}
    </div>
  );
}
