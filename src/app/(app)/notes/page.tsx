
"use client";

import { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { notes } from "@/lib/data";
import type { Note } from "@/lib/types";
import { Link as LinkIcon, FileText, Search, BookOpen, ChevronRight, Clock } from "lucide-react";
import Link from 'next/link';

// Group notes by category for the dropdown
const groupedNotes = notes.reduce((acc, note) => {
  const category = note.category;
  if (!acc[category]) {
    acc[category] = [];
  }
  acc[category].push(note);
  return acc;
}, {} as Record<string, Note[]>);

// Estimate reading time (roughly 200 words per minute)
const estimateReadingTime = (content: string): number => {
  const words = content.split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
};

export default function NotesPage() {
  const [selectedTopic, setSelectedTopic] = useState<string>(notes[0]?.topic || '');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = useMemo(() => Object.keys(groupedNotes).sort(), []);

  const filteredNotes = useMemo(() => {
    let filtered = notes;
    
    if (selectedCategory) {
      filtered = filtered.filter(note => note.category === selectedCategory);
    }
    
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(note => 
        note.topic.toLowerCase().includes(query) ||
        note.content.toLowerCase().includes(query) ||
        note.category.toLowerCase().includes(query)
      );
    }
    
    return filtered;
  }, [searchQuery, selectedCategory]);

  const selectedNote = notes.find(note => note.topic === selectedTopic);
  const readingTime = selectedNote ? estimateReadingTime(selectedNote.content) : 0;

  const handleTopicChange = (topic: string) => {
    setSelectedTopic(topic);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight flex items-center gap-2">
            <FileText className="h-6 w-6 text-primary" />
            Topic Notes
          </h1>
          <p className="text-muted-foreground">Comprehensive reference notes for CLAT preparation.</p>
        </div>
        <Badge variant="secondary" className="w-fit">
          {notes.length} topics available
        </Badge>
      </div>

      <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
        {/* Sidebar */}
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

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            <Badge 
              variant={selectedCategory === null ? "default" : "outline"}
              className="cursor-pointer"
              onClick={() => setSelectedCategory(null)}
            >
              All
            </Badge>
            {categories.map(category => (
              <Badge 
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>

          {/* Topic List */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Topics ({filteredNotes.length})</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <ScrollArea className="h-[400px]">
                <div className="p-2 space-y-1">
                  {filteredNotes.length > 0 ? (
                    filteredNotes.map(note => (
                      <Button
                        key={note.topic}
                        variant={selectedTopic === note.topic ? "secondary" : "ghost"}
                        className="w-full justify-start text-left h-auto py-2 px-3"
                        onClick={() => handleTopicChange(note.topic)}
                      >
                        <div className="flex items-center gap-2 w-full">
                          <BookOpen className="h-4 w-4 shrink-0 text-muted-foreground" />
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium truncate">{note.topic}</p>
                            <p className="text-xs text-muted-foreground">{note.category}</p>
                          </div>
                          <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground" />
                        </div>
                      </Button>
                    ))
                  ) : (
                    <p className="text-sm text-muted-foreground text-center py-4">
                      No notes found matching your search.
                    </p>
                  )}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>

          {/* Quick Select Dropdown (Mobile) */}
          <div className="lg:hidden">
            <Select onValueChange={handleTopicChange} value={selectedTopic}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a topic..." />
              </SelectTrigger>
              <SelectContent className="max-h-[50vh]">
                {Object.entries(groupedNotes).map(([category, notesInCategory]) => (
                  <SelectGroup key={category}>
                    <SelectLabel>{category}</SelectLabel>
                    {notesInCategory.map(note => (
                      <SelectItem key={note.topic} value={note.topic}>{note.topic}</SelectItem>
                    ))}
                  </SelectGroup>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1">
          {selectedNote ? (
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <Badge variant="outline" className="mb-2">{selectedNote.category}</Badge>
                    <CardTitle className="text-xl">{selectedNote.topic}</CardTitle>
                    <CardDescription className="flex items-center gap-2 mt-1">
                      <Clock className="h-3 w-3" />
                      {readingTime} min read
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="prose prose-sm dark:prose-invert max-w-none">
                  <p className="leading-relaxed whitespace-pre-wrap text-foreground/90">{selectedNote.content}</p>
                </div>
                
                {selectedNote.links.length > 0 && (
                  <div className="pt-4 border-t">
                    <h3 className="font-semibold mb-3 flex items-center gap-2">
                      <LinkIcon className="h-4 w-4 text-primary" /> 
                      Useful Resources
                    </h3>
                    <div className="grid gap-2">
                      {selectedNote.links.map(link => (
                        <Link 
                          key={link.url} 
                          href={link.url} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex items-center gap-2 p-2 rounded-md hover:bg-muted transition-colors group"
                        >
                          <div className="p-1 rounded bg-primary/10 text-primary">
                            <LinkIcon className="h-3 w-3" />
                          </div>
                          <span className="text-sm text-primary group-hover:underline underline-offset-2">
                            {link.title}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ) : (
            <Card className="flex items-center justify-center min-h-[400px]">
              <CardContent className="text-center py-12">
                <FileText className="h-12 w-12 mx-auto text-muted-foreground/50 mb-4" />
                <p className="text-muted-foreground">Select a topic from the list to view notes.</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
