"use client";

import { useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
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
  Users,
} from 'lucide-react';
import { currentAffairsArticles, CurrentAffairsArticle } from '@/lib/current-affairs-articles';
import { cn } from '@/lib/utils';

const categories = [
  { key: 'all', label: 'All', icon: BookOpen },
  { key: 'y2026', label: '2026', icon: Calendar },
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
  const isReadyRef = useRef(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedArticle, setSelectedArticle] = useState<CurrentAffairsArticle | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [detailTab, setDetailTab] = useState<'summary' | 'full' | 'relevance' | 'sources'>('full');
  const [readArticles, setReadArticles] = useState<Set<string>>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('7k-read-articles');
      return saved ? new Set(JSON.parse(saved)) : new Set();
    }
    return new Set();
  });

  useEffect(() => {
    const syncViewport = () => setIsMobile(window.innerWidth < 768);
    syncViewport();
    isReadyRef.current = true;
    window.addEventListener('resize', syncViewport);
    return () => window.removeEventListener('resize', syncViewport);
  }, []);

  useEffect(() => {
    if (!isMobile || !isReadyRef.current) return;

    const onPopState = () => {
      if (selectedArticle) {
        setSelectedArticle(null);
      } else {
        router.back();
      }
    };

    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, [isMobile, selectedArticle, router]);

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
    setDetailTab('full');
    markAsRead(article.id);
    if (isMobile) {
      window.history.pushState({ article: article.id }, '', window.location.href);
    }
  };

  if (isMobile && selectedArticle) {
    return (
      <div className="min-h-screen bg-slate-50">
        <div className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
          <div className="p-4 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 min-w-0">
              <Button variant="ghost" size="icon" onClick={() => setSelectedArticle(null)}>
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <div className="min-w-0">
                <Badge variant="outline" className="text-xs mb-1">{selectedArticle.date}</Badge>
                <h1 className="text-sm font-semibold line-clamp-1">{selectedArticle.title}</h1>
              </div>
            </div>
            <CheckCircle2 className="h-5 w-5 text-green-500" />
          </div>

          <div className="px-4 pb-3">
            <div className="grid grid-cols-4 gap-1 rounded-lg bg-slate-100 p-1">
              {[
                { key: 'summary', label: 'Summary' },
                { key: 'full', label: 'Full' },
                { key: 'relevance', label: 'CLAT' },
                { key: 'sources', label: 'Sources' },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setDetailTab(tab.key as 'summary' | 'full' | 'relevance' | 'sources')}
                  className={cn(
                    'rounded-md py-2 text-[11px] font-medium transition-colors',
                    detailTab === tab.key ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600'
                  )}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="p-4 space-y-4">
          {detailTab === 'summary' && (
            <Card className="border-0 bg-white">
              <CardContent className="p-5">
                <p className="text-[15px] leading-7 text-slate-700">{selectedArticle.summary}</p>
              </CardContent>
            </Card>
          )}

          {detailTab === 'full' && (
            <Card className="border-0 bg-white">
              <CardContent className="p-5">
                <div className="space-y-4">
                  {selectedArticle.article.split('\n\n').map((para, i) => (
                    <p key={i} className="text-[14px] leading-7 text-slate-800">
                      {para.replace(/\*\*/g, '')}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {detailTab === 'relevance' && (
            <Card className="border-0 bg-white">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">CLAT Relevance</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3">
                  {selectedArticle.relevance.map((point, i) => (
                    <div key={i} className="p-3 rounded-lg bg-amber-50 border border-amber-100">
                      <div className="flex gap-3">
                        <span className="text-xs font-semibold text-amber-700 mt-0.5">{i + 1}.</span>
                        <p className="text-sm leading-6 text-slate-800">{point}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {detailTab === 'sources' && (
            <Card className="border-0 bg-white">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Sources</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-2">
                  {selectedArticle.sources.map((source, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm p-2 rounded bg-slate-50">
                      <ExternalLink className="h-4 w-4 mt-0.5 text-slate-500" />
                      <span className="text-slate-700">{source}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    );
  }

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
          placeholder="Search articles..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Category Pills */}
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

      {/* Articles Grid */}
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

      {filteredArticles.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No articles found matching your search.</p>
        </div>
      )}

      {/* Desktop Article Detail */}
      {selectedArticle && (
        <Card className="mt-8">
          <CardHeader>
            <div className="flex items-center justify-between gap-3">
              <div>
                <Badge variant="outline" className="mb-2">{selectedArticle.date}</Badge>
                <CardTitle className="text-xl">{selectedArticle.title}</CardTitle>
              </div>
              <Button variant="outline" onClick={() => setSelectedArticle(null)}>
                Close
              </Button>
            </div>
            <CardDescription>{selectedArticle.summary}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-3">
              {selectedArticle.article.split('\n\n').map((para, i) => (
                <p key={i} className="text-sm leading-7 text-slate-700">
                  {para.replace(/\*\*/g, '')}
                </p>
              ))}
            </div>

            <div className="p-4 bg-amber-50 rounded-lg border border-amber-100">
              <h3 className="font-semibold mb-2">CLAT Relevance</h3>
              <ul className="space-y-2">
                {selectedArticle.relevance.map((point, i) => (
                  <li key={i} className="text-sm">• {point}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Sources</h3>
              <ul className="space-y-1">
                {selectedArticle.sources.map((source, i) => (
                  <li key={i} className="text-xs text-muted-foreground flex items-center gap-2">
                    <ExternalLink className="h-3 w-3" />
                    {source}
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
