"use client";

import { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { gkOneLiners } from '@/lib/clat-data';
import { 
  Search, Bookmark, BookmarkCheck, Shuffle, Filter,
  Calendar, Star, Globe, Award, Briefcase, Scale, Lightbulb, Beaker
} from 'lucide-react';

const categoryIcons: Record<string, React.ElementType> = {
  events: Calendar,
  appointments: Briefcase,
  awards: Award,
  laws: Scale,
  schemes: Lightbulb,
  international: Globe,
  sports: Star,
  science: Beaker,
};

const categoryColors: Record<string, string> = {
  events: 'bg-blue-500/10 text-blue-600 border-blue-500/20',
  appointments: 'bg-purple-500/10 text-purple-600 border-purple-500/20',
  awards: 'bg-yellow-500/10 text-yellow-600 border-yellow-500/20',
  laws: 'bg-red-500/10 text-red-600 border-red-500/20',
  schemes: 'bg-green-500/10 text-green-600 border-green-500/20',
  international: 'bg-cyan-500/10 text-cyan-600 border-cyan-500/20',
  sports: 'bg-orange-500/10 text-orange-600 border-orange-500/20',
  science: 'bg-pink-500/10 text-pink-600 border-pink-500/20',
};

export default function GKOneLinerPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [bookmarked, setBookmarked] = useState<Set<string>>(new Set());
  const [showBookmarkedOnly, setShowBookmarkedOnly] = useState(false);
  const [quizMode, setQuizMode] = useState(false);
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const categories = useMemo(() => {
    const cats = new Set(gkOneLiners.map(item => item.category));
    return ['all', ...Array.from(cats)];
  }, []);

  const filteredItems = useMemo(() => {
    let items = gkOneLiners;
    
    if (selectedCategory !== 'all') {
      items = items.filter(item => item.category === selectedCategory);
    }
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      items = items.filter(item => 
        item.statement.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query)
      );
    }
    
    if (showBookmarkedOnly) {
      items = items.filter(item => bookmarked.has(item.id));
    }
    
    return items;
  }, [selectedCategory, searchQuery, showBookmarkedOnly, bookmarked]);

  const toggleBookmark = (id: string) => {
    const newBookmarked = new Set(bookmarked);
    if (newBookmarked.has(id)) {
      newBookmarked.delete(id);
    } else {
      newBookmarked.add(id);
    }
    setBookmarked(newBookmarked);
  };

  const startQuiz = () => {
    setQuizMode(true);
    setCurrentQuizIndex(0);
    setShowAnswer(false);
  };

  const nextQuizItem = () => {
    if (currentQuizIndex < filteredItems.length - 1) {
      setCurrentQuizIndex(prev => prev + 1);
      setShowAnswer(false);
    } else {
      setQuizMode(false);
    }
  };

  const shuffleQuiz = () => {
    setCurrentQuizIndex(Math.floor(Math.random() * filteredItems.length));
    setShowAnswer(false);
  };

  const importanceColor = (importance: string) => {
    switch (importance) {
      case 'high': return 'text-red-500';
      case 'medium': return 'text-yellow-500';
      case 'low': return 'text-green-500';
      default: return 'text-gray-500';
    }
  };

  // Quiz Mode View
  if (quizMode && filteredItems.length > 0) {
    const currentItem = filteredItems[currentQuizIndex];
    const Icon = categoryIcons[currentItem.category] || Calendar;

    return (
      <div className="space-y-6 max-w-2xl mx-auto">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold">GK Flash Quiz</h1>
            <p className="text-sm text-muted-foreground">
              {currentQuizIndex + 1} of {filteredItems.length}
            </p>
          </div>
          <Button variant="outline" onClick={() => setQuizMode(false)}>
            Exit Quiz
          </Button>
        </div>

        <Card className="min-h-[300px] flex flex-col">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Badge className={categoryColors[currentItem.category]}>
                <Icon className="h-3 w-3 mr-1" />
                {currentItem.category.toUpperCase()}
              </Badge>
              <Badge variant="outline">{currentItem.date}</Badge>
              <Star className={`h-4 w-4 ml-auto ${importanceColor(currentItem.importance)}`} />
            </div>
          </CardHeader>
          <CardContent className="flex-1 flex items-center justify-center">
            {showAnswer ? (
              <p className="text-xl text-center leading-relaxed">{currentItem.statement}</p>
            ) : (
              <Button size="lg" onClick={() => setShowAnswer(true)}>
                Tap to Reveal
              </Button>
            )}
          </CardContent>
          <CardContent className="pt-0 flex gap-3">
            <Button variant="outline" onClick={shuffleQuiz} className="flex-1">
              <Shuffle className="h-4 w-4 mr-2" /> Random
            </Button>
            <Button 
              onClick={() => toggleBookmark(currentItem.id)} 
              variant="outline"
              className="flex-1"
            >
              {bookmarked.has(currentItem.id) ? (
                <><BookmarkCheck className="h-4 w-4 mr-2 text-primary" /> Saved</>
              ) : (
                <><Bookmark className="h-4 w-4 mr-2" /> Save</>
              )}
            </Button>
            <Button onClick={nextQuizItem} className="flex-1">
              {currentQuizIndex < filteredItems.length - 1 ? 'Next' : 'Finish'}
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Main List View
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight flex items-center gap-2">
            <Globe className="h-6 w-6 text-cyan-500" />
            GK One-Liners
          </h1>
          <p className="text-muted-foreground">
            {gkOneLiners.length} current affairs facts for quick revision
          </p>
        </div>
        <div className="flex gap-2">
          <Button 
            variant={showBookmarkedOnly ? "default" : "outline"} 
            onClick={() => setShowBookmarkedOnly(!showBookmarkedOnly)}
          >
            <BookmarkCheck className="h-4 w-4 mr-2" />
            Saved ({bookmarked.size})
          </Button>
          <Button onClick={startQuiz} disabled={filteredItems.length === 0}>
            <Shuffle className="h-4 w-4 mr-2" />
            Quiz Mode
          </Button>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search one-liners..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* Category Tabs */}
      <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
        <TabsList className="flex-wrap h-auto gap-1">
          {categories.map(cat => {
            const Icon = categoryIcons[cat] || Filter;
            const count = cat === 'all' 
              ? gkOneLiners.length 
              : gkOneLiners.filter(i => i.category === cat).length;
            return (
              <TabsTrigger key={cat} value={cat} className="text-xs">
                {cat !== 'all' && <Icon className="h-3 w-3 mr-1" />}
                {cat.charAt(0).toUpperCase() + cat.slice(1)} ({count})
              </TabsTrigger>
            );
          })}
        </TabsList>
      </Tabs>

      {/* Results Count */}
      <p className="text-sm text-muted-foreground">
        Showing {filteredItems.length} one-liners
      </p>

      {/* One-Liners List */}
      <ScrollArea className="h-[600px]">
        <div className="space-y-3 pr-4">
          {filteredItems.map((item, index) => {
            const Icon = categoryIcons[item.category] || Calendar;
            return (
              <Card key={item.id} className="hover:shadow-sm transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-muted text-sm font-medium flex-shrink-0">
                      {index + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm leading-relaxed">{item.statement}</p>
                      <div className="flex items-center gap-2 mt-2 flex-wrap">
                        <Badge className={`${categoryColors[item.category]} text-xs`}>
                          <Icon className="h-3 w-3 mr-1" />
                          {item.category}
                        </Badge>
                        <Badge variant="outline" className="text-xs">{item.date}</Badge>
                        <div className="flex items-center gap-1 ml-auto">
                          <Star className={`h-3 w-3 ${importanceColor(item.importance)}`} />
                          <span className="text-xs text-muted-foreground">{item.importance}</span>
                        </div>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => toggleBookmark(item.id)}
                      className="flex-shrink-0"
                    >
                      {bookmarked.has(item.id) ? (
                        <BookmarkCheck className="h-4 w-4 text-primary" />
                      ) : (
                        <Bookmark className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}

          {filteredItems.length === 0 && (
            <Card className="p-8 text-center">
              <p className="text-muted-foreground">No one-liners found matching your criteria.</p>
            </Card>
          )}
        </div>
      </ScrollArea>
    </div>
  );
}
