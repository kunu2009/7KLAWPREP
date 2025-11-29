"use client";

import { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { 
  ArrowLeft, Search, Calendar, BookOpen, Scale, Award, Globe, 
  Rocket, BarChart3, Landmark, ChevronRight, X, ExternalLink,
  Bookmark, Share2, CheckCircle2
} from 'lucide-react';
import { currentAffairsArticles, CurrentAffairsArticle } from '@/lib/current-affairs-articles';
import { cn } from '@/lib/utils';

const categories = [
  { key: 'all', label: 'All Topics', icon: BookOpen },
  { key: 'hot', label: '🔥 Nov 2025', icon: Calendar },
  { key: 'sc', label: '⚖️ Supreme Court', icon: Scale },
  { key: 'award', label: '🏆 Awards', icon: Award },
  { key: 'intl', label: '🌍 International', icon: Globe },
  { key: 'scitech', label: '🚀 Sci & Tech', icon: Rocket },
  { key: 'report', label: '📊 Reports', icon: BarChart3 },
  { key: 'law', label: '🏛️ Laws', icon: Landmark },
];

export default function CurrentAffairsPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedArticle, setSelectedArticle] = useState<CurrentAffairsArticle | null>(null);
  const [readArticles, setReadArticles] = useState<Set<string>>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('7k-read-articles');
      return saved ? new Set(JSON.parse(saved)) : new Set();
    }
    return new Set();
  });

  const filteredArticles = useMemo(() => {
    let articles = currentAffairsArticles;
    
    // Filter by category
    if (activeCategory !== 'all') {
      articles = articles.filter(a => a.id.startsWith(activeCategory));
    }
    
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

  const markAsRead = (id: string) => {
    const updated = new Set(readArticles);
    updated.add(id);
    setReadArticles(updated);
    if (typeof window !== 'undefined') {
      localStorage.setItem('7k-read-articles', JSON.stringify([...updated]));
    }
  };

  const progress = Math.round((readArticles.size / currentAffairsArticles.length) * 100);

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
            <h1 className="text-2xl font-bold">📰 Current Affairs for CLAT 2025</h1>
            <p className="text-muted-foreground">Comprehensive coverage • June 2024 – November 2025</p>
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

      {/* Category Tabs */}
      <Tabs value={activeCategory} onValueChange={setActiveCategory} className="mb-6">
        <TabsList className="flex flex-wrap h-auto gap-1 bg-transparent p-0">
          {categories.map(cat => (
            <TabsTrigger 
              key={cat.key} 
              value={cat.key}
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              {cat.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

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
              setSelectedArticle(article);
              markAsRead(article.id);
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
                {/* Summary */}
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <h3 className="font-semibold text-sm text-primary mb-2">📌 Quick Summary</h3>
                  <p className="text-sm">{selectedArticle.summary}</p>
                </div>

                {/* Full Article */}
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

                {/* CLAT Relevance */}
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

                {/* Sources */}
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

              {/* Actions */}
              <div className="pt-4 border-t flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <Bookmark className="h-4 w-4 mr-2" />
                  Save
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
                <Button size="sm" className="flex-1" onClick={() => setSelectedArticle(null)}>
                  Done Reading
                </Button>
              </div>
            </>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
}
