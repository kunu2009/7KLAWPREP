"use client";

import { useState, useMemo, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { notes } from "@/lib/data";
import type { Note } from "@/lib/types";
import { 
  Link as LinkIcon, FileText, Search, BookOpen, ChevronRight, Clock, 
  ChevronDown, Menu, ExternalLink, PanelRightOpen,
  Home, ArrowUp
} from "lucide-react";
import Link from 'next/link';
import { cn } from '@/lib/utils';

// Group notes by category
const groupedNotes = notes.reduce((acc, note) => {
  const category = note.category;
  if (!acc[category]) {
    acc[category] = [];
  }
  acc[category].push(note);
  return acc;
}, {} as Record<string, Note[]>);

// Estimate reading time
const estimateReadingTime = (content: string): number => {
  const words = content.split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
};

// Category icons and colors
const categoryStyles: Record<string, { icon: string; color: string }> = {
  'Constitution': { icon: '⚖️', color: 'bg-blue-500/10 text-blue-600 border-blue-500/20' },
  'Legal Aptitude': { icon: '📜', color: 'bg-purple-500/10 text-purple-600 border-purple-500/20' },
  'Legal Maxims': { icon: '🔖', color: 'bg-amber-500/10 text-amber-600 border-amber-500/20' },
  'Current Affairs': { icon: '📰', color: 'bg-green-500/10 text-green-600 border-green-500/20' },
  'English': { icon: '📚', color: 'bg-pink-500/10 text-pink-600 border-pink-500/20' },
  'Logical Reasoning': { icon: '🧠', color: 'bg-cyan-500/10 text-cyan-600 border-cyan-500/20' },
  'General Knowledge': { icon: '🌍', color: 'bg-orange-500/10 text-orange-600 border-orange-500/20' },
};

export default function NotesPage() {
  const [selectedTopic, setSelectedTopic] = useState<string>(notes[0]?.topic || '');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set(Object.keys(groupedNotes)));
  const [leftSidebarOpen, setLeftSidebarOpen] = useState(false);
  const [rightSidebarOpen, setRightSidebarOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const filteredGroupedNotes = useMemo(() => {
    if (!searchQuery.trim()) return groupedNotes;
    
    const query = searchQuery.toLowerCase();
    const filtered: Record<string, Note[]> = {};
    
    Object.entries(groupedNotes).forEach(([category, notesInCategory]) => {
      const matchingNotes = notesInCategory.filter(note =>
        note.topic.toLowerCase().includes(query) ||
        note.content.toLowerCase().includes(query)
      );
      if (matchingNotes.length > 0) {
        filtered[category] = matchingNotes;
      }
    });
    
    return filtered;
  }, [searchQuery]);

  const selectedNote = notes.find(note => note.topic === selectedTopic);
  const readingTime = selectedNote ? estimateReadingTime(selectedNote.content) : 0;

  // Get nearby topics for quick navigation
  const currentIndex = notes.findIndex(n => n.topic === selectedTopic);
  const prevNote = currentIndex > 0 ? notes[currentIndex - 1] : null;
  const nextNote = currentIndex < notes.length - 1 ? notes[currentIndex + 1] : null;

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev => {
      const newSet = new Set(prev);
      if (newSet.has(category)) {
        newSet.delete(category);
      } else {
        newSet.add(category);
      }
      return newSet;
    });
  };

  // Track scroll for back to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Sidebar content component (reusable for desktop and mobile)
  const SidebarContent = () => (
    <div className="space-y-4">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input 
          placeholder="Search notes..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-9"
        />
      </div>

      {/* Collapsible Category List */}
      <ScrollArea className="h-[calc(100vh-220px)]">
        <div className="space-y-2 pr-4">
          {Object.entries(filteredGroupedNotes).map(([category, notesInCategory]) => {
            const style = categoryStyles[category] || { icon: '📄', color: 'bg-gray-500/10 text-gray-600 border-gray-500/20' };
            
            return (
              <Collapsible
                key={category}
                open={expandedCategories.has(category)}
                onOpenChange={() => toggleCategory(category)}
              >
                <CollapsibleTrigger asChild>
                  <Button
                    variant="ghost"
                    className={cn(
                      "w-full justify-between h-auto py-2 px-3 font-medium",
                      expandedCategories.has(category) && "bg-muted"
                    )}
                  >
                    <span className="flex items-center gap-2">
                      <span>{style.icon}</span>
                      <span className="text-sm">{category}</span>
                      <Badge variant="secondary" className="ml-1 h-5 px-1.5 text-xs">
                        {notesInCategory.length}
                      </Badge>
                    </span>
                    <ChevronDown className={cn(
                      "h-4 w-4 transition-transform",
                      expandedCategories.has(category) && "rotate-180"
                    )} />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="pl-4 space-y-1 mt-1">
                  {notesInCategory.map(note => (
                    <Button
                      key={note.topic}
                      variant={selectedTopic === note.topic ? "secondary" : "ghost"}
                      className="w-full justify-start text-left h-auto py-2 px-3 text-sm"
                      onClick={() => {
                        setSelectedTopic(note.topic);
                        setLeftSidebarOpen(false);
                      }}
                    >
                      <span className="truncate">{note.topic}</span>
                    </Button>
                  ))}
                </CollapsibleContent>
              </Collapsible>
            );
          })}
        </div>
      </ScrollArea>
    </div>
  );

  // Quick actions sidebar content
  const QuickActionsContent = () => (
    <div className="space-y-4 p-4">
      <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
        Quick Actions
      </div>
      
      <div className="space-y-1">
        <Button
          variant="ghost"
          size="sm"
          className="w-full justify-start gap-2"
          onClick={() => {
            setRightSidebarOpen(false);
            setLeftSidebarOpen(true);
          }}
        >
          <FileText className="h-4 w-4" />
          Browse Topics
        </Button>
        
        <Button
          variant="ghost"
          size="sm"
          className="w-full justify-start gap-2"
          onClick={() => {
            scrollToTop();
            setRightSidebarOpen(false);
          }}
        >
          <ArrowUp className="h-4 w-4" />
          Scroll to Top
        </Button>
        
        <Button
          variant="ghost"
          size="sm"
          className="w-full justify-start gap-2"
          asChild
        >
          <Link href="/">
            <Home className="h-4 w-4" />
            Dashboard
          </Link>
        </Button>
      </div>

      {/* Current Note Info */}
      {selectedNote && (
        <>
          <div className="border-t pt-4">
            <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
              Current Note
            </div>
            <div className="space-y-2">
              <Badge variant="outline" className="text-xs">
                {selectedNote.category}
              </Badge>
              <div className="text-xs text-muted-foreground flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {readingTime} min read
              </div>
            </div>
          </div>

          {/* Navigation between notes */}
          <div className="border-t pt-4">
            <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
              Navigate
            </div>
            <div className="space-y-1">
              {prevNote && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start gap-2 text-xs"
                  onClick={() => {
                    setSelectedTopic(prevNote.topic);
                    setRightSidebarOpen(false);
                  }}
                >
                  <ChevronRight className="h-3 w-3 rotate-180" />
                  <span className="truncate">Previous</span>
                </Button>
              )}
              {nextNote && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start gap-2 text-xs"
                  onClick={() => {
                    setSelectedTopic(nextNote.topic);
                    setRightSidebarOpen(false);
                  }}
                >
                  <ChevronRight className="h-3 w-3" />
                  <span className="truncate">Next</span>
                </Button>
              )}
            </div>
          </div>

          {/* Quick Links */}
          {selectedNote.links.length > 0 && (
            <div className="border-t pt-4">
              <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
                Resources
              </div>
              <div className="space-y-1">
                {selectedNote.links.map(link => (
                  <Button
                    key={link.url}
                    variant="ghost"
                    size="sm"
                    className="w-full justify-start gap-2 text-xs"
                    asChild
                  >
                    <Link href={link.url} target="_blank">
                      <ExternalLink className="h-3 w-3" />
                      <span className="truncate">{link.title}</span>
                    </Link>
                  </Button>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );

  return (
    <div className="min-h-screen -m-4 sm:-m-6">
      {/* Mobile Header */}
      <div className="lg:hidden sticky top-0 z-20 bg-background/95 backdrop-blur border-b p-3 flex items-center justify-between">
        <Sheet open={leftSidebarOpen} onOpenChange={setLeftSidebarOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-80 p-4">
            <SheetHeader className="mb-4">
              <SheetTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Topics
              </SheetTitle>
            </SheetHeader>
            <SidebarContent />
          </SheetContent>
        </Sheet>

        <div className="flex-1 text-center">
          <span className="text-sm font-medium">Notes</span>
        </div>

        <Sheet open={rightSidebarOpen} onOpenChange={setRightSidebarOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <PanelRightOpen className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-64 p-0">
            <QuickActionsContent />
          </SheetContent>
        </Sheet>
      </div>

      <div className="flex">
        {/* Desktop Left Sidebar */}
        <aside className="hidden lg:block w-80 border-r bg-muted/30 p-4 sticky top-0 h-screen overflow-hidden">
          <div className="mb-4">
            <h1 className="text-lg font-bold flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              Topic Notes
            </h1>
            <p className="text-xs text-muted-foreground">
              {notes.length} topics available
            </p>
          </div>
          <SidebarContent />
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0">
          {selectedNote ? (
            <article className="max-w-3xl mx-auto p-6 lg:p-10">
              {/* Note Header */}
              <header className="mb-8 pb-6 border-b">
                <Badge 
                  variant="outline" 
                  className={cn(
                    "mb-3",
                    categoryStyles[selectedNote.category]?.color
                  )}
                >
                  {categoryStyles[selectedNote.category]?.icon} {selectedNote.category}
                </Badge>
                <h1 className="text-2xl lg:text-3xl font-bold tracking-tight mb-3">
                  {selectedNote.topic}
                </h1>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4" />
                    {readingTime} min read
                  </span>
                  {selectedNote.links.length > 0 && (
                    <span className="flex items-center gap-1.5">
                      <LinkIcon className="h-4 w-4" />
                      {selectedNote.links.length} resource{selectedNote.links.length > 1 ? 's' : ''}
                    </span>
                  )}
                </div>
              </header>

              {/* Note Content with Markdown */}
              <div className="prose prose-neutral dark:prose-invert max-w-none
                prose-headings:font-bold prose-headings:tracking-tight
                prose-h1:text-2xl prose-h1:mt-8 prose-h1:mb-4
                prose-h2:text-xl prose-h2:mt-6 prose-h2:mb-3
                prose-h3:text-lg prose-h3:mt-4 prose-h3:mb-2
                prose-p:leading-7 prose-p:text-foreground/90 prose-p:my-4
                prose-li:text-foreground/90 prose-li:leading-7
                prose-strong:text-foreground prose-strong:font-semibold
                prose-ul:my-4 prose-ul:pl-6 prose-ul:list-disc
                prose-ol:my-4 prose-ol:pl-6
                prose-li:my-2
                prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono
                prose-pre:bg-muted prose-pre:border prose-pre:rounded-lg
                prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-muted/50 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:italic
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                prose-hr:my-8
              ">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {selectedNote.content}
                </ReactMarkdown>
              </div>

              {/* Resources Section */}
              {selectedNote.links.length > 0 && (
                <section className="mt-12 pt-8 border-t">
                  <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <LinkIcon className="h-5 w-5 text-primary" />
                    Additional Resources
                  </h2>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {selectedNote.links.map(link => (
                      <Link
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-4 rounded-lg border bg-card hover:bg-muted/50 transition-colors group"
                      >
                        <div className="p-2 rounded-md bg-primary/10 text-primary shrink-0">
                          <ExternalLink className="h-4 w-4" />
                        </div>
                        <span className="text-sm font-medium group-hover:text-primary transition-colors">
                          {link.title}
                        </span>
                      </Link>
                    ))}
                  </div>
                </section>
              )}

              {/* Navigation Footer */}
              <footer className="mt-12 pt-8 border-t">
                <div className="flex flex-col sm:flex-row gap-4 justify-between">
                  {prevNote ? (
                    <Button
                      variant="outline"
                      className="flex-1 h-auto py-4 justify-start text-left"
                      onClick={() => setSelectedTopic(prevNote.topic)}
                    >
                      <ChevronRight className="h-4 w-4 rotate-180 mr-3 shrink-0" />
                      <div className="min-w-0">
                        <p className="text-xs text-muted-foreground">Previous</p>
                        <p className="font-medium truncate">{prevNote.topic}</p>
                      </div>
                    </Button>
                  ) : <div className="flex-1" />}
                  
                  {nextNote && (
                    <Button
                      variant="outline"
                      className="flex-1 h-auto py-4 justify-end text-right"
                      onClick={() => setSelectedTopic(nextNote.topic)}
                    >
                      <div className="min-w-0">
                        <p className="text-xs text-muted-foreground">Next</p>
                        <p className="font-medium truncate">{nextNote.topic}</p>
                      </div>
                      <ChevronRight className="h-4 w-4 ml-3 shrink-0" />
                    </Button>
                  )}
                </div>
              </footer>
            </article>
          ) : (
            <div className="flex items-center justify-center min-h-[60vh]">
              <div className="text-center">
                <FileText className="h-16 w-16 mx-auto text-muted-foreground/30 mb-4" />
                <p className="text-lg text-muted-foreground">Select a topic to start reading</p>
              </div>
            </div>
          )}
        </main>

        {/* Desktop Right Sidebar - Icon Only */}
        <aside className="hidden lg:flex w-14 border-l bg-muted/30 sticky top-0 h-screen flex-col items-center py-4 space-y-2">
          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10"
            onClick={scrollToTop}
            title="Scroll to top"
          >
            <ArrowUp className="h-4 w-4" />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10"
            asChild
            title="Home"
          >
            <Link href="/">
              <Home className="h-4 w-4" />
            </Link>
          </Button>

          <div className="border-t w-8 my-2" />

          {/* Note navigation */}
          {prevNote && (
            <Button
              variant="ghost"
              size="icon"
              className="h-10 w-10"
              onClick={() => setSelectedTopic(prevNote.topic)}
              title={`Previous: ${prevNote.topic}`}
            >
              <ChevronRight className="h-4 w-4 rotate-180" />
            </Button>
          )}
          
          {nextNote && (
            <Button
              variant="ghost"
              size="icon"
              className="h-10 w-10"
              onClick={() => setSelectedTopic(nextNote.topic)}
              title={`Next: ${nextNote.topic}`}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          )}

          <div className="border-t w-8 my-2" />

          {/* Quick links */}
          {selectedNote?.links.slice(0, 3).map((link, i) => (
            <Button
              key={link.url}
              variant="ghost"
              size="icon"
              className="h-10 w-10"
              asChild
              title={link.title}
            >
              <Link href={link.url} target="_blank">
                <ExternalLink className="h-4 w-4" />
              </Link>
            </Button>
          ))}
        </aside>
      </div>

      {/* Floating Scroll to Top Button (Mobile) */}
      {showScrollTop && (
        <Button
          className="lg:hidden fixed bottom-6 right-6 h-12 w-12 rounded-full shadow-lg z-50"
          onClick={scrollToTop}
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}
    </div>
  );
}
