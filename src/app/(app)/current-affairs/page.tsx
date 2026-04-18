"use client";

import { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { 
  ArrowLeft,
  Search,
  BookOpen,
  Scale,
  Award,
  Globe,
  Rocket,
  BarChart3,
  Landmark,
  ChevronRight,
  ExternalLink,
  CheckCircle2,
  Calendar,
  Leaf,
  Users
} from 'lucide-react';
import { currentAffairsArticles, CurrentAffairsArticle } from '@/lib/current-affairs-articles';
import { jan2026DailyCurrentAffairs, DailyCurrentAffairsDay } from '@/lib/current-affairs-daily-jan2026';
import { cn } from '@/lib/utils';

const categories = [
  { key: 'y2026', label: '2026 (Jan-Apr)', icon: Calendar },
  { key: 'all', label: 'All Topics', icon: BookOpen },
  { key: 'law', label: 'Law/Courts', icon: Scale },
  { key: 'governance', label: 'Governance', icon: Landmark },
  { key: 'economy', label: 'Economy', icon: BarChart3 },
  { key: 'intl', label: 'International', icon: Globe },
  { key: 'scitech', label: 'Sci-Tech', icon: Rocket },
  { key: 'environment', label: 'Environment', icon: Leaf },
  { key: 'society', label: 'Society', icon: Users },
  { key: 'award', label: 'Awards', icon: Award },
];

const getDateValue = (raw: string) => {
  const date = new Date(raw);
  return Number.isNaN(date.getTime()) ? 0 : date.getTime();
};

const isArticleInCategory = (article: CurrentAffairsArticle, category: string) => {
  if (category === 'all') return true;
  if (category === 'y2026') return article.date.startsWith('2026-');

  const haystack = `${article.title} ${article.summary} ${article.relevance.join(' ')}`.toLowerCase();

  if (category === 'law') return /(supreme court|constitutional|article|judicial|law|tribunal|legal|rights)/.test(haystack);
  if (category === 'governance') return /(parliament|cabinet|policy|ministry|election|commission|governance|federal)/.test(haystack);
  if (category === 'economy') return /(economy|budget|tax|gdp|startup|trade|bank|rbi|inflation|market|employment)/.test(haystack);
  if (category === 'intl') return /(international|bilateral|treaty|un|quad|global|foreign|diplomatic|maritime)/.test(haystack);
  if (category === 'scitech') return /(technology|ai|semiconductor|science|space|digital|data|innovation|cyber)/.test(haystack);
  if (category === 'environment') return /(climate|environment|pollution|green|renewable|cyclone|disaster|ecology|water)/.test(haystack);
  if (category === 'society') return /(education|health|women|child|reservation|welfare|social|inclusion|rights)/.test(haystack);
  if (category === 'award') return /(award|padma|honour|medal|prize)/.test(haystack);

  return true;
};

const formatRange = (articles: CurrentAffairsArticle[]) => {
  const sorted = [...articles].sort((a, b) => getDateValue(a.date) - getDateValue(b.date));
  if (sorted.length === 0) return 'Coverage unavailable';

  const start = new Date(sorted[0].date);
  const end = new Date(sorted[sorted.length - 1].date);
  if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) return 'Coverage updated';

  return `${start.toLocaleString('en-US', { month: 'short', year: 'numeric' })} - ${end.toLocaleString('en-US', { month: 'short', year: 'numeric' })}`;
};

export default function CurrentAffairsPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('y2026');
  const [viewMode, setViewMode] = useState<'articles' | 'daily'>('articles');
  const [selectedArticle, setSelectedArticle] = useState<CurrentAffairsArticle | null>(null);
  const [selectedDaily, setSelectedDaily] = useState<DailyCurrentAffairsDay | null>(null);
  const [readArticles, setReadArticles] = useState<Set<string>>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('7k-read-articles');
      return saved ? new Set(JSON.parse(saved)) : new Set();
    }
    return new Set();
  });

  const filteredArticles = useMemo(() => {
    let articles = [...currentAffairsArticles].sort((a, b) => getDateValue(b.date) - getDateValue(a.date));
    
    // Filter by category
    articles = articles.filter((a) => isArticleInCategory(a, activeCategory));
    
    // Filter by search
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      articles = articles.filter(a => 
        a.title.toLowerCase().includes(query) ||
        a.summary.toLowerCase().includes(query) ||
        a.article.toLowerCase().includes(query)
      );
    }
    
    return articles;
  }, [activeCategory, searchQuery]);

  const coverageRange = useMemo(() => formatRange(currentAffairsArticles), []);

  const filteredDaily = useMemo(() => {
    let days = [...jan2026DailyCurrentAffairs].sort((a, b) => getDateValue(b.date) - getDateValue(a.date));
    if (!searchQuery.trim()) return days;

    const query = searchQuery.toLowerCase();
    return days.filter((day) =>
      day.dayLabel.toLowerCase().includes(query) ||
      (day.dailyBrief?.toLowerCase().includes(query) ?? false) ||
      (day.sources?.some((source) => source.toLowerCase().includes(query)) ?? false) ||
      day.items.some(
        (item) =>
          item.category.toLowerCase().includes(query) ||
          item.headline.toLowerCase().includes(query) ||
          item.detail.toLowerCase().includes(query) ||
          item.source.toLowerCase().includes(query)
      )
    );
  }, [searchQuery]);

  const markAsRead = (id: string) => {
    const updated = new Set(readArticles);
    updated.add(id);
    setReadArticles(updated);
    if (typeof window !== 'undefined') {
      localStorage.setItem('7k-read-articles', JSON.stringify([...updated]));
    }
  };

  const progress = Math.round((readArticles.size / currentAffairsArticles.length) * 100);

  const openArticle = (article: CurrentAffairsArticle) => {
    setSelectedArticle(article);
    markAsRead(article.id);
  };

  return (
    <div className="container max-w-6xl mx-auto py-6 px-4">
      {/* Header */}
      <div className="mb-6">
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => router.back()}
          className="mb-4"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold">📰 Current Affairs Hub</h1>
            <p className="text-muted-foreground">Comprehensive coverage • {coverageRange}</p>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="text-sm">
              {readArticles.size}/{currentAffairsArticles.length} Read
            </Badge>
            <Badge variant={progress >= 80 ? "default" : "outline"} className="text-sm">
              {progress}% Complete
            </Badge>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder={viewMode === 'articles' ? 'Search articles...' : 'Search daily digests, categories, headlines...'}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Section Switch */}
      <div className="mb-4 flex gap-2">
        <Button
          variant={viewMode === 'articles' ? 'default' : 'outline'}
          onClick={() => setViewMode('articles')}
          size="sm"
        >
          Articles
        </Button>
        <Button
          variant={viewMode === 'daily' ? 'default' : 'outline'}
          onClick={() => setViewMode('daily')}
          size="sm"
        >
          Daily (Jan 2026)
        </Button>
      </div>

      {/* Category Tabs */}
      {viewMode === 'articles' && (
      <div className="mb-6 flex gap-2 overflow-x-auto pb-1">
        {categories.map((cat) => {
          const Icon = cat.icon;
          const active = activeCategory === cat.key;
          return (
            <Button
              key={cat.key}
              variant={active ? 'default' : 'outline'}
              size="sm"
              className="shrink-0"
              onClick={() => setActiveCategory(cat.key)}
            >
              <Icon className="h-4 w-4 mr-1" />
              {cat.label}
            </Button>
          );
        })}
      </div>
      )}

      {/* Articles Grid */}
      {viewMode === 'articles' && (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredArticles.map(article => (
          <Card 
            key={article.id}
            className={cn(
              "cursor-pointer transition-all hover:shadow-md hover:border-primary/50",
              readArticles.has(article.id) && "bg-muted/30"
            )}
            onClick={() => {
              openArticle(article);
            }}
          >
            <CardHeader className="pb-2">
              <div className="flex items-start justify-between gap-2">
                <Badge variant="outline" className="text-xs shrink-0">
                  {article.date}
                </Badge>
                {readArticles.has(article.id) && (
                  <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0" />
                )}
              </div>
              <CardTitle className="text-base line-clamp-2">{article.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground line-clamp-3">{article.summary}</p>
              <div className="flex items-center justify-between mt-3">
                <div className="flex flex-wrap gap-1">
                  {article.relevance.slice(0, 2).map((tag, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {tag.split(' ').slice(0, 2).join(' ')}...
                    </Badge>
                  ))}
                </div>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      )}

      {/* Daily Grid */}
      {viewMode === 'daily' && (
        <div className="space-y-4">
          {filteredDaily.map((day) => (
            <Card
              key={day.id}
              className="cursor-pointer transition-all hover:shadow-md hover:border-primary/50"
              onClick={() => setSelectedDaily(day)}
            >
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between gap-2">
                  <Badge variant="outline" className="text-xs">{day.dayLabel}</Badge>
                  <Badge variant="secondary" className="text-xs">{day.items.length} updates</Badge>
                </div>
                <CardTitle className="text-base">Daily Current Affairs - {day.dayLabel}</CardTitle>
                <CardDescription className="text-xs">
                  Law, International, National, Maharashtra, Sports, Awards, Crime, Judgments and more
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1 mb-2">
                  {[...new Set(day.items.map((item) => item.category))].slice(0, 6).map((cat) => (
                    <Badge key={cat} variant="secondary" className="text-xs">{cat}</Badge>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {day.dailyBrief ?? day.items[0]?.headline ?? 'Daily updates across categories'}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {viewMode === 'articles' && filteredArticles.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No articles found matching your search.</p>
        </div>
      )}

      {viewMode === 'daily' && filteredDaily.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No daily digests found matching your search.</p>
        </div>
      )}

      {/* Article Detail Sheet */}
      <Sheet open={!!selectedArticle} onOpenChange={(open) => !open && setSelectedArticle(null)}>
        <SheetContent side="right" className="w-full sm:max-w-2xl overflow-y-auto">
          {selectedArticle && (
            <>
              <SheetHeader className="pb-4 border-b">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline">{selectedArticle.date}</Badge>
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                </div>
                <SheetTitle className="text-xl leading-tight">{selectedArticle.title}</SheetTitle>
              </SheetHeader>
              
              <div className="py-6 space-y-6">
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <h3 className="font-semibold text-sm text-primary mb-2">📌 Quick Summary</h3>
                  <p className="text-sm">{selectedArticle.summary}</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">📖 Detailed Analysis</h3>
                  <div className="prose prose-sm dark:prose-invert max-w-none">
                    {selectedArticle.article.split('\n\n').map((para, i) => {
                      if (para.startsWith('**') && para.endsWith('**')) {
                        return <h4 key={i} className="font-semibold mt-4 mb-2">{para.replace(/\*\*/g, '')}</h4>;
                      }
                      if (para.includes('**')) {
                        return (
                          <p key={i} className="mb-3 text-sm leading-relaxed" 
                            dangerouslySetInnerHTML={{ 
                              __html: para.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') 
                            }} 
                          />
                        );
                      }
                      return <p key={i} className="mb-3 text-sm leading-relaxed">{para}</p>;
                    })}
                  </div>
                </div>

                <div className="p-4 bg-amber-500/10 rounded-lg border border-amber-500/20">
                  <h3 className="font-semibold text-sm text-amber-700 dark:text-amber-400 mb-3">
                    🎯 CLAT Relevance
                  </h3>
                  <ul className="space-y-2">
                    {selectedArticle.relevance.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <span className="text-amber-500 mt-0.5">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-sm mb-2">📚 Sources</h3>
                  <ul className="space-y-1">
                    {selectedArticle.sources.map((source, i) => (
                      <li key={i} className="text-xs text-muted-foreground flex items-center gap-1">
                        <ExternalLink className="h-3 w-3" />
                        {source}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t">
                <Button size="sm" className="w-full" onClick={() => setSelectedArticle(null)}>
                  Done Reading
                </Button>
              </div>
            </>
          )}
        </SheetContent>
      </Sheet>

      {/* Daily Detail Sheet */}
      <Sheet open={!!selectedDaily} onOpenChange={(open) => !open && setSelectedDaily(null)}>
        <SheetContent side="right" className="w-full sm:max-w-2xl overflow-y-auto">
          {selectedDaily && (
            <>
              <SheetHeader className="pb-4 border-b">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline">{selectedDaily.dayLabel}</Badge>
                  <Badge variant="secondary">January 2026</Badge>
                </div>
                <SheetTitle className="text-xl leading-tight">Daily Current Affairs - {selectedDaily.dayLabel}</SheetTitle>
              </SheetHeader>

              <div className="py-6 space-y-4">
                {selectedDaily.dailyBrief && (
                  <div className="p-4 rounded-lg border bg-primary/5 border-primary/20">
                    <h3 className="font-semibold text-sm text-primary mb-2">Newspaper Desk Brief</h3>
                    <p className="text-sm leading-relaxed">{selectedDaily.dailyBrief}</p>
                  </div>
                )}

                {selectedDaily.items.map((item, index) => (
                  <div key={`${selectedDaily.id}-${index}`} className="p-4 rounded-lg border bg-card">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary" className="text-xs">{item.category}</Badge>
                    </div>
                    <h4 className="font-semibold text-sm mb-2">{item.headline}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.detail}</p>
                    <a
                      href={item.sourceUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-flex items-center gap-1 text-xs text-primary hover:underline"
                    >
                      <ExternalLink className="h-3 w-3" />
                      Source: {item.source}
                    </a>
                  </div>
                ))}

                <div className="p-4 rounded-lg border bg-muted/40">
                  <h3 className="font-semibold text-sm mb-2">Reported In</h3>
                  <ul className="space-y-1">
                    {(selectedDaily.sources?.length
                      ? selectedDaily.sources
                      : [...new Set(selectedDaily.items.map((item) => item.source))]
                    ).map((source, i) => (
                      <li key={i} className="text-xs text-muted-foreground flex items-start gap-1">
                        <ExternalLink className="h-3 w-3 mt-0.5" />
                        <span>{source}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t">
                <Button size="sm" className="w-full" onClick={() => setSelectedDaily(null)}>
                  Close Daily Brief
                </Button>
              </div>
            </>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
}
