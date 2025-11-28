"use client";

import { useState, useMemo, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { mcqs, notes, flashcards, reels } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Link from 'next/link';
import { Search, FileText, Database, Layers3, PlaySquare, Sparkles } from 'lucide-react';

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  const searchResults = useMemo(() => {
    if (!debouncedSearchTerm.trim()) {
      return { mcqs: [], notes: [], flashcards: [], reels: [] };
    }

    const term = debouncedSearchTerm.toLowerCase();

    const filteredMcqs = mcqs.filter(
      (mcq) =>
        mcq.question.toLowerCase().includes(term) ||
        mcq.explanation.toLowerCase().includes(term) ||
        mcq.options.some(opt => opt.toLowerCase().includes(term)) ||
        mcq.topic.toLowerCase().includes(term)
    );

    const filteredNotes = notes.filter((note) =>
      note.content.toLowerCase().includes(term) ||
      note.topic.toLowerCase().includes(term) ||
      note.category.toLowerCase().includes(term)
    );

    const filteredFlashcards = flashcards.filter((card) =>
      card.term.toLowerCase().includes(term) ||
      card.definition.toLowerCase().includes(term) ||
      card.topic.toLowerCase().includes(term)
    );

    const filteredReels = reels.filter((reel) =>
      reel.title.toLowerCase().includes(term) ||
      reel.content.toLowerCase().includes(term) ||
      reel.topic.toLowerCase().includes(term)
    );

    return { 
      mcqs: filteredMcqs, 
      notes: filteredNotes, 
      flashcards: filteredFlashcards,
      reels: filteredReels 
    };
  }, [debouncedSearchTerm]);

  const totalResults = searchResults.mcqs.length + searchResults.notes.length + 
                       searchResults.flashcards.length + searchResults.reels.length;
  const showResults = debouncedSearchTerm.trim() !== '';

  // Highlight matching text
  const highlightMatch = (text: string, maxLength: number = 150) => {
    if (!debouncedSearchTerm.trim()) return text.slice(0, maxLength);
    
    const term = debouncedSearchTerm.toLowerCase();
    const index = text.toLowerCase().indexOf(term);
    
    if (index === -1) return text.slice(0, maxLength) + (text.length > maxLength ? '...' : '');
    
    const start = Math.max(0, index - 50);
    const end = Math.min(text.length, index + term.length + 100);
    let snippet = text.slice(start, end);
    
    if (start > 0) snippet = '...' + snippet;
    if (end < text.length) snippet = snippet + '...';
    
    return snippet;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight flex items-center gap-2">
          <Search className="h-6 w-6 text-primary" />
          Search Content
        </h1>
        <p className="text-muted-foreground">Find MCQs, notes, flashcards, and reels by keyword.</p>
      </div>

      {/* Search Input */}
      <div className="relative max-w-2xl">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search for keywords like 'Constitution', 'defamation', 'Article 21'..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 h-12 text-base"
        />
      </div>

      {/* Quick Stats */}
      {showResults && (
        <div className="flex flex-wrap gap-2 items-center">
          <span className="text-sm text-muted-foreground">
            Found {totalResults} results for "{debouncedSearchTerm}"
          </span>
          <div className="flex gap-1">
            {searchResults.mcqs.length > 0 && (
              <Badge variant="outline" className="text-xs">
                <Database className="h-3 w-3 mr-1" /> {searchResults.mcqs.length} MCQs
              </Badge>
            )}
            {searchResults.notes.length > 0 && (
              <Badge variant="outline" className="text-xs">
                <FileText className="h-3 w-3 mr-1" /> {searchResults.notes.length} Notes
              </Badge>
            )}
            {searchResults.flashcards.length > 0 && (
              <Badge variant="outline" className="text-xs">
                <Layers3 className="h-3 w-3 mr-1" /> {searchResults.flashcards.length} Flashcards
              </Badge>
            )}
            {searchResults.reels.length > 0 && (
              <Badge variant="outline" className="text-xs">
                <PlaySquare className="h-3 w-3 mr-1" /> {searchResults.reels.length} Reels
              </Badge>
            )}
          </div>
        </div>
      )}

      {/* Results */}
      {showResults && (
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="all">All ({totalResults})</TabsTrigger>
            <TabsTrigger value="mcqs" disabled={searchResults.mcqs.length === 0}>
              MCQs ({searchResults.mcqs.length})
            </TabsTrigger>
            <TabsTrigger value="notes" disabled={searchResults.notes.length === 0}>
              Notes ({searchResults.notes.length})
            </TabsTrigger>
            <TabsTrigger value="flashcards" disabled={searchResults.flashcards.length === 0}>
              Flashcards ({searchResults.flashcards.length})
            </TabsTrigger>
            <TabsTrigger value="reels" disabled={searchResults.reels.length === 0}>
              Reels ({searchResults.reels.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-6 mt-4">
            {totalResults > 0 ? (
              <>
                {/* Notes */}
                {searchResults.notes.length > 0 && (
                  <section>
                    <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <FileText className="h-4 w-4" /> Notes
                    </h2>
                    <div className="space-y-3">
                      {searchResults.notes.slice(0, 3).map(note => (
                        <Link href="/notes" key={note.topic} className="block">
                          <Card className="hover:border-primary transition-colors">
                            <CardHeader className="pb-2">
                              <div className="flex items-center justify-between">
                                <CardTitle className="text-base">{note.topic}</CardTitle>
                                <Badge variant="secondary">{note.category}</Badge>
                              </div>
                            </CardHeader>
                            <CardContent>
                              <p className="text-sm text-muted-foreground">{highlightMatch(note.content)}</p>
                            </CardContent>
                          </Card>
                        </Link>
                      ))}
                    </div>
                  </section>
                )}

                {/* MCQs */}
                {searchResults.mcqs.length > 0 && (
                  <section>
                    <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <Database className="h-4 w-4" /> MCQs
                    </h2>
                    <div className="space-y-3">
                      {searchResults.mcqs.slice(0, 3).map(mcq => (
                        <Link href="/mcqs" key={mcq.id} className="block">
                          <Card className="hover:border-primary transition-colors">
                            <CardHeader className="pb-2">
                              <div className="flex items-center justify-between">
                                <CardTitle className="text-base line-clamp-2">{mcq.question}</CardTitle>
                                <Badge variant="secondary">{mcq.topic}</Badge>
                              </div>
                            </CardHeader>
                          </Card>
                        </Link>
                      ))}
                    </div>
                  </section>
                )}

                {/* Flashcards */}
                {searchResults.flashcards.length > 0 && (
                  <section>
                    <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <Layers3 className="h-4 w-4" /> Flashcards
                    </h2>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {searchResults.flashcards.slice(0, 4).map(card => (
                        <Link href="/flashcards" key={card.id} className="block">
                          <Card className="hover:border-primary transition-colors h-full">
                            <CardHeader className="pb-2">
                              <CardTitle className="text-base">{card.term}</CardTitle>
                              <Badge variant="outline" className="w-fit">{card.topic}</Badge>
                            </CardHeader>
                            <CardContent>
                              <p className="text-sm text-muted-foreground line-clamp-2">{card.definition}</p>
                            </CardContent>
                          </Card>
                        </Link>
                      ))}
                    </div>
                  </section>
                )}

                {/* Reels */}
                {searchResults.reels.length > 0 && (
                  <section>
                    <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <PlaySquare className="h-4 w-4" /> Reels
                    </h2>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {searchResults.reels.slice(0, 4).map(reel => (
                        <Link href="/reels" key={reel.id} className="block">
                          <Card className="hover:border-primary transition-colors h-full">
                            <CardHeader className="pb-2">
                              <CardTitle className="text-base">{reel.title}</CardTitle>
                              <Badge variant="outline" className="w-fit">{reel.topic}</Badge>
                            </CardHeader>
                            <CardContent>
                              <p className="text-sm text-muted-foreground line-clamp-2">{reel.content}</p>
                            </CardContent>
                          </Card>
                        </Link>
                      ))}
                    </div>
                  </section>
                )}
              </>
            ) : (
              <Card className="py-12">
                <CardContent className="text-center">
                  <Sparkles className="h-12 w-12 mx-auto text-muted-foreground/50 mb-4" />
                  <p className="text-muted-foreground">No results found for "{debouncedSearchTerm}"</p>
                  <p className="text-sm text-muted-foreground mt-1">Try a different keyword or check spelling</p>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* Individual tabs for each content type */}
          <TabsContent value="mcqs" className="space-y-3 mt-4">
            {searchResults.mcqs.map(mcq => (
              <Link href="/mcqs" key={mcq.id} className="block">
                <Card className="hover:border-primary transition-colors">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base">{mcq.question}</CardTitle>
                      <Badge variant="secondary">{mcq.topic}</Badge>
                    </div>
                    <CardDescription className="mt-2">{highlightMatch(mcq.explanation)}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </TabsContent>

          <TabsContent value="notes" className="space-y-3 mt-4">
            {searchResults.notes.map(note => (
              <Link href="/notes" key={note.topic} className="block">
                <Card className="hover:border-primary transition-colors">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base">{note.topic}</CardTitle>
                      <Badge variant="secondary">{note.category}</Badge>
                    </div>
                    <CardDescription className="mt-2">{highlightMatch(note.content, 200)}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </TabsContent>

          <TabsContent value="flashcards" className="mt-4">
            <div className="grid gap-3 sm:grid-cols-2">
              {searchResults.flashcards.map(card => (
                <Link href="/flashcards" key={card.id} className="block">
                  <Card className="hover:border-primary transition-colors h-full">
                    <CardHeader>
                      <CardTitle className="text-base">{card.term}</CardTitle>
                      <Badge variant="outline" className="w-fit">{card.topic}</Badge>
                      <CardDescription className="mt-2">{card.definition}</CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="reels" className="mt-4">
            <div className="grid gap-3 sm:grid-cols-2">
              {searchResults.reels.map(reel => (
                <Link href="/reels" key={reel.id} className="block">
                  <Card className="hover:border-primary transition-colors h-full">
                    <CardHeader>
                      <CardTitle className="text-base">{reel.title}</CardTitle>
                      <Badge variant="outline" className="w-fit">{reel.topic}</Badge>
                      <CardDescription className="mt-2">{reel.content}</CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      )}

      {/* Empty State */}
      {!showResults && (
        <Card className="py-12">
          <CardContent className="text-center">
            <Search className="h-12 w-12 mx-auto text-muted-foreground/50 mb-4" />
            <p className="text-muted-foreground">Start typing to search across all content</p>
            <p className="text-sm text-muted-foreground mt-1">
              Search through {mcqs.length} MCQs, {notes.length} notes, {flashcards.length} flashcards, and {reels.length} reels
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
