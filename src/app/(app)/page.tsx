
"use client";

import Link from "next/link";
import { useState, useEffect, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { mcqs, flashcards, notes, reels } from '@/lib/data';
import { Database, FileText, Layers3, PlaySquare, Flame, Trophy, ArrowRight, Sparkles, Target, Clock3, AlertTriangle, CheckCircle2, Search, Compass, BookOpenCheck, Brain, CalendarDays } from 'lucide-react';
import { useFeatureToggles } from '@/context/feature-toggles';
import { useProgress } from '@/hooks/use-progress';
import { useRevisionMode } from '@/context/revision-mode-context';
import RevisionDashboard from '@/components/revision-dashboard';
import { trackEvent } from '@/lib/analytics';
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

const motivationalQuotes = [
  { quote: "The law is reason, free from passion.", author: "Aristotle" },
  { quote: "Justice delayed is justice denied.", author: "William E. Gladstone" },
  { quote: "Injustice anywhere is a threat to justice everywhere.", author: "Martin Luther King Jr." },
  { quote: "The first duty of society is justice.", author: "Alexander Hamilton" },
  { quote: "Where there is a right, there is a remedy.", author: "Legal Maxim" },
  { quote: "Laws are like cobwebs, which may catch small flies, but let wasps and hornets break through.", author: "Jonathan Swift" },
  { quote: "One who is his own lawyer has a fool for a client.", author: "Legal Proverb" },
];

export default function DashboardPage() {
    const [quote, setQuote] = useState(motivationalQuotes[0]);
    const [searchQuery, setSearchQuery] = useState('');
    const [mounted, setMounted] = useState(false);
    const { zenMode } = useFeatureToggles();
    const { currentStreak, longestStreak, attempted, correct, isClient, getWeakestTopics } = useProgress();
    const { isRevisionMode } = useRevisionMode();

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        // Random quote on load
        setQuote(motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)]);
    }, []);

    const accuracy = attempted > 0 ? Math.round((correct / attempted) * 100) : 0;
    const weakestTopics = useMemo(() => getWeakestTopics(1), [getWeakestTopics]);
    const topWeakTopic = weakestTopics[0];

    // Show Revision Dashboard when revision mode is active (AFTER all hooks are called)
    if (mounted && isRevisionMode) {
        return <RevisionDashboard />;
    }

    const handleStartSession = () => {
        trackEvent("home_session_start", {
            streak: currentStreak,
            attempted,
        });
    };

    const handleToolHop = (destination: string, source: string) => {
        trackEvent("home_tool_hop", { destination, source });
    };

    const materialCards = [
        { title: 'MCQs', count: mcqs.length, href: '/mcqs', icon: Database },
        { title: 'Topic Notes', count: notes.length, href: '/notes', icon: FileText },
        { title: 'Flashcards', count: flashcards.length, href: '/flashcards', icon: Layers3 },
        { title: 'Legal Reels', count: reels.length, href: '/reels', icon: PlaySquare },
        { title: 'Bare Acts', count: null, href: '/bare-acts', icon: BookOpenCheck },
        { title: 'Current Affairs', count: null, href: '/current-affairs', icon: CalendarDays },
    ];

    const guidedPaths = [
        {
            title: 'Beginner Path (7 Days)',
            description: 'Start from basics without getting overwhelmed.',
            href: '/start-here',
            icon: Compass,
        },
        {
            title: 'Accuracy Path',
            description: 'Focus on error reduction via drills and review.',
            href: '/error-log',
            icon: Target,
        },
        {
            title: 'AIR-1 Sprint Path',
            description: 'Use daily mission flow + weak-topic correction loop.',
            href: '/mcqs',
            icon: Brain,
        },
    ];

    const quickActions = [
        { title: 'Start Session', href: '/mcqs' },
        { title: 'Focused Drill', href: '/legal-drill' },
        { title: 'Fix Mistakes', href: '/error-log' },
        { title: 'Ask Assistant', href: '/assistant' },
        { title: 'Quick Revision', href: '/quick-revision' },
        { title: 'Start Here Guide', href: '/start-here' },
    ];

    const searchableItems = [...materialCards.map(item => ({
        title: item.title,
        href: item.href,
        subtitle: typeof item.count === 'number' ? `${item.count} items` : 'Open now',
    })), ...guidedPaths.map(path => ({
        title: path.title,
        href: path.href,
        subtitle: path.description,
    })), ...quickActions.map(action => ({
        title: action.title,
        href: action.href,
        subtitle: 'Quick action',
    }))];

    const filteredSearchResults = useMemo(() => {
        const query = searchQuery.trim().toLowerCase();
        if (!query) return [];
        return searchableItems
            .filter(item => item.title.toLowerCase().includes(query) || item.subtitle.toLowerCase().includes(query))
            .slice(0, 6);
    }, [searchQuery, searchableItems]);

    const todaysPlan = [
        {
            title: topWeakTopic ? `${topWeakTopic.topic} Drill` : 'Warm-up MCQs',
            description: topWeakTopic
                ? `Target weak area (${zenMode ? '---' : `${topWeakTopic.accuracy}%`} accuracy)`
                : 'Solve 10 mixed questions to start momentum',
            href: topWeakTopic ? '/legal-drill' : '/mcqs',
        },
        {
            title: 'Concept Reinforcement',
            description: 'Read one short topic note and revise 5 flashcards',
            href: '/notes',
        },
        {
            title: 'Error Recovery',
            description: 'Review mistakes and lock one learning takeaway',
            href: '/error-log',
        },
    ];

    return (
        <div className="space-y-3 sm:space-y-5 pb-24 md:pb-6">
            <div className="space-y-3">
                <p className="text-xs text-muted-foreground">{new Date().toLocaleDateString(undefined, { day: '2-digit', month: 'short' })}</p>
                <div className="flex items-center justify-between gap-3">
                    <div>
                        <h1 className="text-xl sm:text-2xl font-bold tracking-tight">Hi, Aspirant</h1>
                        <p className="text-sm text-muted-foreground">Let&apos;s make today count.</p>
                    </div>
                    {isClient && (
                        <div className="flex items-center gap-2 rounded-full border bg-card px-3 py-1.5">
                            <Flame className="h-4 w-4 text-primary" />
                            <span className="text-sm font-semibold">{zenMode ? '---' : currentStreak}</span>
                        </div>
                    )}
                </div>
                <div className="space-y-2">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <Input
                            value={searchQuery}
                            onChange={(event) => setSearchQuery(event.target.value)}
                            placeholder="Search notes, reels, drills, assistant..."
                            className="h-11 rounded-xl pl-9"
                        />
                    </div>
                    {searchQuery.trim().length > 0 && (
                        <div className="rounded-xl border bg-card p-2">
                            {filteredSearchResults.length ? (
                                <div className="space-y-1">
                                    {filteredSearchResults.map((item) => (
                                        <Link
                                            key={`${item.title}-${item.href}`}
                                            href={item.href}
                                            onClick={() => handleToolHop(item.href, 'dashboard_inline_search')}
                                            className="flex items-center justify-between rounded-lg px-2 py-2 hover:bg-muted"
                                        >
                                            <div>
                                                <p className="text-sm font-medium">{item.title}</p>
                                                <p className="text-xs text-muted-foreground">{item.subtitle}</p>
                                            </div>
                                            <ArrowRight className="h-3.5 w-3.5 text-muted-foreground" />
                                        </Link>
                                    ))}
                                </div>
                            ) : (
                                <p className="px-2 py-2 text-xs text-muted-foreground">No quick matches. Try “mcq”, “assistant”, “reels”, or “notes”.</p>
                            )}
                        </div>
                    )}
                </div>
            </div>

            {/* Mission-first cards */}
            <Card className="overflow-hidden border-primary/20 bg-gradient-to-r from-primary/10 to-primary/5">
                <CardHeader className="pb-2 sm:pb-3">
                    <CardTitle className="text-base flex items-center gap-2">
                        <Target className="h-4 w-4 text-primary" />
                        What would you like to learn today?
                    </CardTitle>
                    <CardDescription className="text-xs sm:text-sm">Recommended flow: warm-up MCQs → focused drill → review mistakes.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
                        <Button asChild className="h-auto py-3" onClick={handleStartSession}>
                            <Link href="/mcqs" onClick={() => handleToolHop('/mcqs', 'mission_primary')} className="flex items-center justify-center gap-2">
                                <Target className="h-5 w-5" />
                                <span className="font-semibold">Start Session</span>
                            </Link>
                        </Button>
                        <Button variant="outline" asChild className="h-auto py-3" onClick={() => handleToolHop('/legal-drill', 'mission_secondary')}>
                            <Link href="/legal-drill" className="flex items-center justify-center gap-2">
                                <Clock3 className="h-5 w-5 text-blue-500" />
                                <span className="font-medium">Focused Drill</span>
                            </Link>
                        </Button>
                        <Button variant="outline" asChild className="h-auto py-3" onClick={() => handleToolHop('/error-log', 'mission_secondary')}>
                            <Link href="/error-log" className="flex items-center justify-center gap-2">
                                <AlertTriangle className="h-5 w-5 text-amber-500" />
                                <span className="font-medium">Fix Mistakes</span>
                            </Link>
                        </Button>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="pb-3">
                    <CardTitle className="text-base flex items-center gap-2">
                        <Compass className="h-4 w-4 text-primary" />
                        New here?
                    </CardTitle>
                    <CardDescription>Use this guided setup so you don&apos;t jump randomly between tools.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Button asChild className="w-full sm:w-auto" onClick={() => handleToolHop('/start-here', 'new_user_banner')}>
                        <Link href="/start-here" className="flex items-center gap-2">
                            Open Start Here Guide
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </Button>
                </CardContent>
            </Card>

            <Card className="border-primary/20 bg-gradient-to-r from-primary/10 via-primary/5 to-background">
                <CardHeader className="pb-3">
                    <div className="flex items-center justify-between gap-2">
                        <CardTitle className="text-base flex items-center gap-2">
                            <Trophy className="h-4 w-4 text-primary" />
                            Today&apos;s 3-Task Auto Plan
                        </CardTitle>
                        <Badge variant="secondary">Focused</Badge>
                    </div>
                    <CardDescription>Do these in order for a high-impact day.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                    {todaysPlan.map((task, index) => (
                        <Link
                            key={task.title}
                            href={task.href}
                            onClick={() => handleToolHop(task.href, 'today_auto_plan')}
                            className="flex items-center justify-between rounded-xl border bg-card/80 px-3 py-3 hover:border-primary/40"
                        >
                            <div>
                                <p className="text-sm font-semibold">{index + 1}. {task.title}</p>
                                <p className="text-xs text-muted-foreground">{task.description}</p>
                            </div>
                            <ArrowRight className="h-4 w-4 text-muted-foreground" />
                        </Link>
                    ))}
                </CardContent>
            </Card>

            <div className="space-y-3">
                <div className="flex items-center justify-between">
                    <h2 className="text-base font-semibold">Material Hub</h2>
                    <Badge variant="outline">All in one place</Badge>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
                    {materialCards.map((item) => (
                        <Link
                            key={item.title}
                            href={item.href}
                            onClick={() => handleToolHop(item.href, 'material_hub')}
                            className="rounded-2xl border bg-card p-3 sm:p-3.5 hover:border-primary/40 transition-colors"
                        >
                            <div className="flex items-center justify-between">
                                <item.icon className="h-4 w-4 text-primary" />
                                {typeof item.count === 'number' && <span className="text-xs text-muted-foreground">{item.count}</span>}
                            </div>
                            <p className="mt-2.5 text-sm font-semibold leading-tight">{item.title}</p>
                        </Link>
                    ))}
                </div>
            </div>

            <div className="space-y-3">
                <h2 className="text-base font-semibold">Guided Study Paths</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {guidedPaths.map((path) => (
                        <Card key={path.title}>
                            <CardHeader className="pb-2">
                                <CardTitle className="text-sm flex items-center gap-2">
                                    <path.icon className="h-4 w-4 text-primary" />
                                    {path.title}
                                </CardTitle>
                                <CardDescription className="text-xs">{path.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Button variant="outline" asChild size="sm" className="w-full" onClick={() => handleToolHop(path.href, 'guided_paths')}>
                                    <Link href={path.href}>Open</Link>
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            <div className="flex items-center justify-between">
                <h2 className="text-base font-semibold">For you</h2>
                <Link href="/progress" className="text-xs text-muted-foreground">See all</Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <Card>
                    <CardHeader className="pb-3">
                        <CardTitle className="text-base">Weakest Skill Right Now</CardTitle>
                        <CardDescription>Auto-picked from your recent answers (minimum 3 attempts/topic).</CardDescription>
                    </CardHeader>
                    <CardContent>
                        {topWeakTopic ? (
                            <div className="space-y-2">
                                <p className="text-lg font-semibold">{topWeakTopic.topic}</p>
                                <p className="text-sm text-muted-foreground">
                                    Accuracy: <span className="font-semibold text-foreground">{zenMode ? "---" : `${topWeakTopic.accuracy}%`}</span> · Attempts: <span className="font-semibold text-foreground">{zenMode ? "---" : topWeakTopic.attempted}</span>
                                </p>
                                <Button variant="ghost" size="sm" asChild onClick={() => handleToolHop('/legal-drill', 'weak_topic_card')}>
                                    <Link href="/legal-drill" className="flex items-center gap-1">
                                        Practice this now <ArrowRight className="h-3 w-3" />
                                    </Link>
                                </Button>
                            </div>
                        ) : (
                            <p className="text-sm text-muted-foreground">Answer at least 3 questions in a topic to unlock weakness analysis.</p>
                        )}
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="pb-3">
                        <CardTitle className="text-base">Last Mock Recovery</CardTitle>
                        <CardDescription>Your post-test correction ritual for rank improvement.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="h-4 w-4 text-green-600" />
                            Review wrong answers in `Error Log`
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="h-4 w-4 text-green-600" />
                            Reattempt weak topics in `Legal Drill`
                        </div>
                        <Button variant="ghost" size="sm" asChild onClick={() => handleToolHop('/error-log', 'recovery_card')}>
                            <Link href="/error-log" className="flex items-center gap-1">
                                Run recovery now <ArrowRight className="h-3 w-3" />
                            </Link>
                        </Button>
                    </CardContent>
                </Card>
            </div>

            {/* Your Progress Summary */}
            {isClient && attempted > 0 && (
                <Card>
                    <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                            <div>
                                <CardTitle className="text-base">Your Progress</CardTitle>
                                <CardDescription>Quick overview of your performance</CardDescription>
                            </div>
                            <Button variant="ghost" size="sm" asChild>
                                <Link href="/progress" className="flex items-center gap-1">
                                    View Details <ArrowRight className="h-3 w-3" />
                                </Link>
                            </Button>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-3 gap-4 text-center">
                            <div>
                                <p className="text-2xl font-bold">{zenMode ? '---' : attempted}</p>
                                <p className="text-xs text-muted-foreground">Attempted</p>
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-green-600">{zenMode ? '---' : correct}</p>
                                <p className="text-xs text-muted-foreground">Correct</p>
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-primary">{zenMode ? '---' : `${accuracy}%`}</p>
                                <p className="text-xs text-muted-foreground">Accuracy</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            )}

            {/* Motivational Quote */}
            <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
                <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                        <Sparkles className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                        <div>
                            <p className="text-sm italic">"{quote.quote}"</p>
                            <p className="text-xs text-muted-foreground mt-1">— {quote.author}</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
