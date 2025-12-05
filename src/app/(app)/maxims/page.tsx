"use client";

import { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { legalMaxims } from '@/lib/clat-data';
import { 
  Search, Bookmark, BookmarkCheck, BookOpen, Shuffle, 
  Volume2, ChevronDown, ChevronUp, Scale
} from 'lucide-react';

export default function MaximsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTopic, setSelectedTopic] = useState<string>('all');
  const [bookmarked, setBookmarked] = useState<Set<string>>(new Set());
  const [expandedMaxims, setExpandedMaxims] = useState<Set<string>>(new Set());
  const [quizMode, setQuizMode] = useState(false);
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [showMeaning, setShowMeaning] = useState(false);

  const topics = useMemo(() => {
    const t = new Set(legalMaxims.map(m => m.topic));
    return ['all', ...Array.from(t)];
  }, []);

  const filteredMaxims = useMemo(() => {
    let maxims = legalMaxims;
    
    if (selectedTopic !== 'all') {
      maxims = maxims.filter(m => m.topic === selectedTopic);
    }
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      maxims = maxims.filter(m => 
        m.latin.toLowerCase().includes(query) ||
        m.meaning.toLowerCase().includes(query) ||
        m.example.toLowerCase().includes(query)
      );
    }
    
    return maxims;
  }, [selectedTopic, searchQuery]);

  const toggleBookmark = (id: string) => {
    const newBookmarked = new Set(bookmarked);
    if (newBookmarked.has(id)) {
      newBookmarked.delete(id);
    } else {
      newBookmarked.add(id);
    }
    setBookmarked(newBookmarked);
  };

  const toggleExpand = (id: string) => {
    const newExpanded = new Set(expandedMaxims);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedMaxims(newExpanded);
  };

  const startQuiz = () => {
    setQuizMode(true);
    setCurrentQuizIndex(0);
    setShowMeaning(false);
  };

  const nextQuizItem = () => {
    if (currentQuizIndex < filteredMaxims.length - 1) {
      setCurrentQuizIndex(prev => prev + 1);
      setShowMeaning(false);
    } else {
      setQuizMode(false);
    }
  };

  const shuffleQuiz = () => {
    setCurrentQuizIndex(Math.floor(Math.random() * filteredMaxims.length));
    setShowMeaning(false);
  };

  const topicColors: Record<string, string> = {
    'Criminal Law': 'bg-red-500/10 text-red-600 border-red-500/20',
    'Natural Justice': 'bg-blue-500/10 text-blue-600 border-blue-500/20',
    'Torts': 'bg-orange-500/10 text-orange-600 border-orange-500/20',
    'Constitution': 'bg-purple-500/10 text-purple-600 border-purple-500/20',
    'Civil Procedure': 'bg-green-500/10 text-green-600 border-green-500/20',
    'Contracts': 'bg-cyan-500/10 text-cyan-600 border-cyan-500/20',
    'Jurisprudence': 'bg-pink-500/10 text-pink-600 border-pink-500/20',
  };

  // Quiz Mode
  if (quizMode && filteredMaxims.length > 0) {
    const currentMaxim = filteredMaxims[currentQuizIndex];

    return (
      <div className="space-y-6 max-w-2xl mx-auto">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold">Maxim Quiz</h1>
            <p className="text-sm text-muted-foreground">
              {currentQuizIndex + 1} of {filteredMaxims.length}
            </p>
          </div>
          <Button variant="outline" onClick={() => setQuizMode(false)}>
            Exit Quiz
          </Button>
        </div>

        <Card className="min-h-[400px] flex flex-col">
          <CardHeader className="text-center border-b">
            <Badge className={topicColors[currentMaxim.topic] || 'bg-gray-500/10'}>
              {currentMaxim.topic}
            </Badge>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col items-center justify-center p-8">
            <p className="text-2xl font-serif italic text-center mb-8">
              "{currentMaxim.latin}"
            </p>
            
            {showMeaning ? (
              <div className="space-y-4 text-center">
                <div className="p-4 bg-primary/5 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Meaning</p>
                  <p className="font-medium">{currentMaxim.meaning}</p>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Example</p>
                  <p className="text-sm">{currentMaxim.example}</p>
                </div>
                {currentMaxim.relatedCases && currentMaxim.relatedCases.length > 0 && (
                  <div className="flex flex-wrap gap-2 justify-center">
                    {currentMaxim.relatedCases.map((c, i) => (
                      <Badge key={i} variant="outline" className="text-xs">{c}</Badge>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Button size="lg" onClick={() => setShowMeaning(true)}>
                Reveal Meaning
              </Button>
            )}
          </CardContent>
          <CardContent className="pt-0 flex gap-3">
            <Button variant="outline" onClick={shuffleQuiz} className="flex-1">
              <Shuffle className="h-4 w-4 mr-2" /> Random
            </Button>
            <Button 
              onClick={() => toggleBookmark(currentMaxim.id)} 
              variant="outline"
              className="flex-1"
            >
              {bookmarked.has(currentMaxim.id) ? (
                <><BookmarkCheck className="h-4 w-4 mr-2 text-primary" /> Saved</>
              ) : (
                <><Bookmark className="h-4 w-4 mr-2" /> Save</>
              )}
            </Button>
            <Button onClick={nextQuizItem} className="flex-1">
              {currentQuizIndex < filteredMaxims.length - 1 ? 'Next' : 'Finish'}
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
            <Scale className="h-6 w-6 text-amber-500" />
            Legal Maxims Bank
          </h1>
          <p className="text-muted-foreground">
            {legalMaxims.length} Latin maxims with meanings and examples
          </p>
        </div>
        <Button onClick={startQuiz} disabled={filteredMaxims.length === 0}>
          <Shuffle className="h-4 w-4 mr-2" /> Quiz Mode
        </Button>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search maxims, meanings, or examples..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Topic Filter */}
      <div className="flex flex-wrap gap-2">
        {topics.map(topic => (
          <Button
            key={topic}
            variant={selectedTopic === topic ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedTopic(topic)}
          >
            {topic === 'all' ? 'All Topics' : topic}
          </Button>
        ))}
      </div>

      <p className="text-sm text-muted-foreground">
        Showing {filteredMaxims.length} maxims
      </p>

      {/* Maxims List */}
      <ScrollArea className="h-[600px]">
        <div className="space-y-4 pr-4">
          {filteredMaxims.map((maxim) => {
            const isExpanded = expandedMaxims.has(maxim.id);
            
            return (
              <Card key={maxim.id} className="overflow-hidden">
                <CardHeader 
                  className="cursor-pointer hover:bg-muted/30 transition-colors"
                  onClick={() => toggleExpand(maxim.id)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className={topicColors[maxim.topic] || 'bg-gray-500/10'}>
                          {maxim.topic}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg font-serif italic">
                        {maxim.latin}
                      </CardTitle>
                      <CardDescription className="mt-1">
                        {maxim.meaning}
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleBookmark(maxim.id);
                        }}
                      >
                        {bookmarked.has(maxim.id) ? (
                          <BookmarkCheck className="h-4 w-4 text-primary" />
                        ) : (
                          <Bookmark className="h-4 w-4" />
                        )}
                      </Button>
                      {isExpanded ? (
                        <ChevronUp className="h-4 w-4 text-muted-foreground" />
                      ) : (
                        <ChevronDown className="h-4 w-4 text-muted-foreground" />
                      )}
                    </div>
                  </div>
                </CardHeader>
                
                {isExpanded && (
                  <CardContent className="border-t bg-muted/20">
                    <div className="space-y-4 pt-4">
                      <div>
                        <h4 className="text-sm font-semibold text-muted-foreground mb-1 flex items-center gap-2">
                          <BookOpen className="h-4 w-4" /> Example
                        </h4>
                        <p className="text-sm">{maxim.example}</p>
                      </div>
                      
                      {maxim.relatedCases && maxim.relatedCases.length > 0 && (
                        <div>
                          <h4 className="text-sm font-semibold text-muted-foreground mb-2">
                            Related Cases
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {maxim.relatedCases.map((caseName, i) => (
                              <Badge key={i} variant="outline">{caseName}</Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                )}
              </Card>
            );
          })}

          {filteredMaxims.length === 0 && (
            <Card className="p-8 text-center">
              <p className="text-muted-foreground">No maxims found matching your search.</p>
            </Card>
          )}
        </div>
      </ScrollArea>
    </div>
  );
}
