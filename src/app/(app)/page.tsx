
"use client";

import Link from "next/link";
import { useState, useEffect, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { mcqs, flashcards, notes, reels } from '@/lib/data';
import { Database, FileText, Layers3, PlaySquare, Flame, Trophy, ArrowRight, Sparkles, Target, Clock3, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { useFeatureToggles, SectionToggleKey } from '@/context/feature-toggles';
import { useProgress } from '@/hooks/use-progress';
import { useRevisionMode } from '@/context/revision-mode-context';
import RevisionDashboard from '@/components/revision-dashboard';
import { StudyToolsCompact } from '@/components/study-tools-drawer';
import { trackEvent } from '@/lib/analytics';

const motivationalQuotes = [
  { quote: "The law is reason, free from passion.", author: "Aristotle" },
  { quote: "Justice delayed is justice denied.", author: "William E. Gladstone" },
  { quote: "Injustice anywhere is a threat to justice everywhere.", author: "Martin Luther King Jr." },
  { quote: "The first duty of society is justice.", author: "Alexander Hamilton" },
  { quote: "Where there is a right, there is a remedy.", author: "Legal Maxim" },
  { quote: "Laws are like cobwebs, which may catch small flies, but let wasps and hornets break through.", author: "Jonathan Swift" },
  { quote: "One who is his own lawyer has a fool for a client.", author: "Legal Proverb" },
];

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
    const [quote, setQuote] = useState(motivationalQuotes[0]);
    const [mounted, setMounted] = useState(false);
    const { sections, sectionOrder, zenMode } = useFeatureToggles();
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

    return (
        <div className="space-y-4 sm:space-y-6">
            {/* Header with Streak */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-xl sm:text-2xl font-bold tracking-tight">AIR-1 Mission Desk</h1>
                    <p className="text-sm sm:text-base text-muted-foreground">One focused session at a time. Start today&apos;s highest-impact work.</p>
                </div>
                {isClient && (
                    <Card className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border-orange-500/20 w-full sm:w-auto sm:min-w-[200px]">
                        <CardContent className="p-4 flex items-center gap-3">
                            <div className="p-2 bg-orange-500/20 rounded-full">
                                <Flame className="h-6 w-6 text-orange-500" />
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-orange-600">{zenMode ? '---' : currentStreak} day{currentStreak !== 1 ? 's' : ''}</p>
                                <p className="text-xs text-muted-foreground flex items-center gap-1">
                                    <Trophy className="h-3 w-3" /> Best: {zenMode ? '---' : longestStreak}
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                )}
            </div>

            {/* Mission-first cards */}
            <Card>
                <CardHeader className="pb-2 sm:pb-3">
                    <CardTitle className="text-base flex items-center gap-2">
                        <Target className="h-4 w-4 text-primary" />
                        Start Today&apos;s AIR-1 Session
                    </CardTitle>
                    <CardDescription className="text-xs sm:text-sm">Recommended flow: warm-up MCQs → focused drill → review mistakes.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <Button asChild className="h-auto py-3 sm:py-4" onClick={handleStartSession}>
                            <Link href="/mcqs" onClick={() => handleToolHop('/mcqs', 'mission_primary')} className="flex items-center justify-center gap-2">
                                <Target className="h-5 w-5" />
                                <span className="font-semibold">Start Session</span>
                            </Link>
                        </Button>
                        <Button variant="outline" asChild className="h-auto py-3 sm:py-4" onClick={() => handleToolHop('/legal-drill', 'mission_secondary')}>
                            <Link href="/legal-drill" className="flex items-center justify-center gap-2">
                                <Clock3 className="h-5 w-5 text-blue-500" />
                                <span className="font-medium">Focused Drill</span>
                            </Link>
                        </Button>
                        <Button variant="outline" asChild className="h-auto py-3 sm:py-4" onClick={() => handleToolHop('/error-log', 'mission_secondary')}>
                            <Link href="/error-log" className="flex items-center justify-center gap-2">
                                <AlertTriangle className="h-5 w-5 text-amber-500" />
                                <span className="font-medium">Fix Mistakes</span>
                            </Link>
                        </Button>
                    </div>
                </CardContent>
            </Card>

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

            <StudyToolsCompact />

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

            {/* Content Stats */}
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

            {/* Content Breakdown */}
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
                        <li><span className="font-semibold text-foreground">{reels.length} Legal Reels</span> for bite-sized learning on the go.</li>
                    </ul>
                    <p className="text-xs text-muted-foreground mt-4">
                        Customize this dashboard from the <Link href="/settings" className="font-medium text-foreground underline-offset-2 hover:underline">Settings</Link> page if you prefer a lighter view.
                    </p>
                </CardContent>
            </Card>
        </div>
    );
}
