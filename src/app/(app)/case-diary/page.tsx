"use client";

import { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { caseLaws } from '@/lib/clat-data';
import { 
  BookMarked, Search, Star, ChevronDown, ChevronUp,
  Scale, Calendar, User, FileText, Bookmark, BookmarkCheck
} from 'lucide-react';

export default function CaseDiaryPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedCase, setExpandedCase] = useState<string | null>(null);
  const [bookmarked, setBookmarked] = useState<Set<string>>(new Set());
  const [showBookmarkedOnly, setShowBookmarkedOnly] = useState(false);

  const categories = useMemo(() => {
    const cats = new Set(caseLaws.map(c => c.category));
    return ['all', ...Array.from(cats)];
  }, []);

  const filteredCases = useMemo(() => {
    return caseLaws.filter(caseLaw => {
      const matchesSearch = searchQuery === '' || 
        caseLaw.caseName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        caseLaw.facts.toLowerCase().includes(searchQuery.toLowerCase()) ||
        caseLaw.principle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        caseLaw.keywords.some(k => k.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || caseLaw.category === selectedCategory;
      const matchesBookmark = !showBookmarkedOnly || bookmarked.has(caseLaw.id);
      
      return matchesSearch && matchesCategory && matchesBookmark;
    });
  }, [searchQuery, selectedCategory, showBookmarkedOnly, bookmarked]);

  const toggleBookmark = (id: string) => {
    setBookmarked(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const categoryColors: Record<string, string> = {
    'Fundamental Rights': 'bg-red-500/10 text-red-600',
    'Criminal Law': 'bg-purple-500/10 text-purple-600',
    'Property Law': 'bg-green-500/10 text-green-600',
    'Constitutional Law': 'bg-blue-500/10 text-blue-600',
    'Civil Rights': 'bg-orange-500/10 text-orange-600',
    'Contracts': 'bg-cyan-500/10 text-cyan-600',
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight flex items-center gap-2">
          <BookMarked className="h-6 w-6 text-amber-500" />
          Case Diary
        </h1>
        <p className="text-muted-foreground">
          Quick reference for landmark cases - facts, principles, and significance
        </p>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search cases by name, principle, or keyword..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>
        <Button
          variant={showBookmarkedOnly ? "default" : "outline"}
          onClick={() => setShowBookmarkedOnly(!showBookmarkedOnly)}
          className="gap-2"
        >
          {showBookmarkedOnly ? <BookmarkCheck className="h-4 w-4" /> : <Bookmark className="h-4 w-4" />}
          {showBookmarkedOnly ? 'Show All' : `Bookmarked (${bookmarked.size})`}
        </Button>
      </div>

      {/* Category Tabs */}
      <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
        <TabsList className="flex flex-wrap h-auto gap-1">
          {categories.map(cat => (
            <TabsTrigger key={cat} value={cat} className="capitalize text-xs">
              {cat === 'all' ? 'All Cases' : cat}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      {/* Stats */}
      <div className="flex gap-4 text-sm text-muted-foreground">
        <span>Showing {filteredCases.length} of {caseLaws.length} cases</span>
      </div>

      {/* Cases List */}
      <div className="space-y-4">
        {filteredCases.map((caseLaw) => (
          <Card 
            key={caseLaw.id}
            className={`transition-all ${expandedCase === caseLaw.id ? 'ring-2 ring-primary/30' : ''}`}
          >
            <CardHeader className="pb-2">
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap mb-2">
                    <Badge className={categoryColors[caseLaw.category] || 'bg-gray-500/10'}>
                      {caseLaw.category}
                    </Badge>
                    <Badge variant="outline" className="font-mono text-xs">
                      {caseLaw.year}
                    </Badge>
                    {caseLaw.importance === 'high' && (
                      <Badge className="bg-yellow-500/10 text-yellow-600">
                        <Star className="h-3 w-3 mr-1" /> Must Know
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-lg">{caseLaw.caseName}</CardTitle>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => toggleBookmark(caseLaw.id)}
                  className={bookmarked.has(caseLaw.id) ? 'text-amber-500' : ''}
                >
                  {bookmarked.has(caseLaw.id) ? (
                    <BookmarkCheck className="h-5 w-5" />
                  ) : (
                    <Bookmark className="h-5 w-5" />
                  )}
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {/* Principle - Always visible */}
                <div className="p-3 bg-primary/5 rounded-lg border-l-4 border-primary">
                  <p className="text-sm font-medium text-primary">Principle</p>
                  <p className="text-sm">{caseLaw.principle}</p>
                </div>

                {/* Expandable Content */}
                {expandedCase === caseLaw.id && (
                  <div className="space-y-3 pt-2 animate-in fade-in">
                    {/* Facts */}
                    <div className="p-3 bg-muted/30 rounded-lg">
                      <p className="text-sm font-medium flex items-center gap-2 mb-1">
                        <FileText className="h-4 w-4" /> Facts
                      </p>
                      <p className="text-sm text-muted-foreground">{caseLaw.facts}</p>
                    </div>

                    {/* Significance */}
                    <div className="p-3 bg-green-500/5 rounded-lg border-l-4 border-green-500">
                      <p className="text-sm font-medium text-green-600 mb-1">Significance</p>
                      <p className="text-sm">{caseLaw.significance}</p>
                    </div>

                    {/* Keywords */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {caseLaw.keywords.map((keyword, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {keyword}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
            <CardFooter className="pt-0">
              <Button
                variant="ghost"
                className="w-full text-muted-foreground hover:text-foreground"
                onClick={() => setExpandedCase(expandedCase === caseLaw.id ? null : caseLaw.id)}
              >
                {expandedCase === caseLaw.id ? (
                  <>Show Less <ChevronUp className="h-4 w-4 ml-1" /></>
                ) : (
                  <>Show Facts & Details <ChevronDown className="h-4 w-4 ml-1" /></>
                )}
              </Button>
            </CardFooter>
          </Card>
        ))}

        {filteredCases.length === 0 && (
          <Card className="p-8 text-center">
            <Scale className="h-12 w-12 mx-auto text-muted-foreground/50 mb-4" />
            <h3 className="text-lg font-medium">No cases found</h3>
            <p className="text-sm text-muted-foreground">
              Try adjusting your search or filters
            </p>
          </Card>
        )}
      </div>

      {/* Quick Tips */}
      <Card className="bg-amber-500/5 border-amber-500/20">
        <CardContent className="p-4">
          <h3 className="font-semibold text-amber-600 mb-2">💡 CLAT Case Study Tips</h3>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Focus on the <strong>principle</strong> - that's what gets asked in MCQs</li>
            <li>• Remember <strong>year</strong> for landmark cases (esp. 1973, 1976, 1978, 1997)</li>
            <li>• Link cases to <strong>Articles</strong> they interpret</li>
            <li>• Cases marked "Must Know" have appeared in previous CLAT papers</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
