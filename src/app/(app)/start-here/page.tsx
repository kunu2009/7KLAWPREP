import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Target, BookOpen, Layers3, Scale, ClipboardCheck } from "lucide-react";

const onboardingSteps = [
  {
    title: "Step 1: Check your current level",
    description: "Take a short mini test to identify weak areas before starting heavy prep.",
    href: "/mini-test",
    cta: "Take Mini Test",
    icon: ClipboardCheck,
  },
  {
    title: "Step 2: Build daily consistency",
    description: "Complete daily MCQs to build speed, confidence, and streak discipline.",
    href: "/mcqs",
    cta: "Start Daily MCQs",
    icon: Target,
  },
  {
    title: "Step 3: Strengthen basics",
    description: "Study topic notes, then lock key terms with flashcards.",
    href: "/notes",
    cta: "Open Notes",
    icon: BookOpen,
  },
  {
    title: "Step 4: Apply with legal reasoning",
    description: "Use Legal Drill to practice principle + fact questions in CLAT style.",
    href: "/legal-drill",
    cta: "Practice Legal Drill",
    icon: Scale,
  },
];

export default function StartHerePage() {
  return (
    <div className="space-y-5">
      <div className="space-y-1">
        <Badge variant="outline">New User Guide</Badge>
        <h1 className="text-2xl font-bold tracking-tight">Start Here</h1>
        <p className="text-sm text-muted-foreground">
          Follow this flow for your first 7 days so you don&apos;t get lost between tools.
        </p>
      </div>

      <Card className="border-primary/20 bg-gradient-to-r from-primary/10 to-primary/5">
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Week 1 Target</CardTitle>
          <CardDescription>Finish 5 daily sessions + 1 mini test + 1 revision day.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2 text-sm text-muted-foreground">
          <p>Day 1-5: Daily MCQs + one focused drill.</p>
          <p>Day 6: Mini test + error review in Error Log.</p>
          <p>Day 7: Flashcards + quick revision.</p>
        </CardContent>
      </Card>

      <div className="space-y-3">
        {onboardingSteps.map((step) => (
          <Card key={step.title}>
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center gap-2">
                <step.icon className="h-4 w-4 text-primary" />
                {step.title}
              </CardTitle>
              <CardDescription>{step.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" className="w-full justify-between">
                <Link href={step.href}>
                  {step.cta}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base flex items-center gap-2">
            <Layers3 className="h-4 w-4 text-primary" />
            After Week 1
          </CardTitle>
          <CardDescription>Move to full AIR-1 dashboard flow with weak-topic targeting.</CardDescription>
        </CardHeader>
        <CardContent>
          <Button asChild className="w-full justify-between">
            <Link href="/">
              Open AIR-1 Dashboard
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
