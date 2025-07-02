"use client";

import { useState, useMemo } from 'react';
import { Input } from '@/components/ui/input';
import { mcqs, notes } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const searchResults = useMemo(() => {
    if (!searchTerm.trim()) {
      return { mcqs: [], notes: [] };
    }

    const lowerCaseSearchTerm = searchTerm.toLowerCase();

    const filteredMcqs = mcqs.filter(
      (mcq) =>
        mcq.question.toLowerCase().includes(lowerCaseSearchTerm) ||
        mcq.explanation.toLowerCase().includes(lowerCaseSearchTerm) ||
        mcq.options.some(opt => opt.toLowerCase().includes(lowerCaseSearchTerm))
    );

    const filteredNotes = notes.filter((note) =>
      note.content.toLowerCase().includes(lowerCaseSearchTerm) ||
      note.topic.toLowerCase().includes(lowerCaseSearchTerm)
    );

    return { mcqs: filteredMcqs, notes: filteredNotes };
  }, [searchTerm]);

  const hasResults = searchResults.mcqs.length > 0 || searchResults.notes.length > 0;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Search Content</h1>
        <p className="text-muted-foreground">Find MCQs and notes by keyword.</p>
      </div>
      <div className="max-w-xl">
        <Input
          type="search"
          placeholder="Search for keywords like 'Constitution', 'defamation'..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {searchTerm.trim() && (
         <div className="space-y-6">
          {hasResults ? (
            <>
              {searchResults.notes.length > 0 && (
                <section>
                  <h2 className="text-xl font-semibold mb-4">Matching Notes</h2>
                  <div className="space-y-4">
                    {searchResults.notes.map(note => (
                       <Link href="/notes" key={note.topic} className="block">
                         <Card className="hover:border-primary transition-colors">
                           <CardHeader>
                             <CardTitle className="flex items-center justify-between">
                               {note.topic}
                               <Badge variant="secondary">Note</Badge>
                             </CardTitle>
                           </CardHeader>
                           <CardContent>
                             <p className="text-muted-foreground line-clamp-2">{note.content}</p>
                           </CardContent>
                         </Card>
                       </Link>
                    ))}
                  </div>
                </section>
              )}
               {searchResults.mcqs.length > 0 && (
                <section>
                  <h2 className="text-xl font-semibold mb-4">Matching MCQs</h2>
                  <div className="space-y-4">
                    {searchResults.mcqs.map(mcq => (
                       <Link href="/" key={mcq.id} className="block">
                         <Card className="hover:border-primary transition-colors">
                           <CardHeader>
                             <CardTitle className="flex items-center justify-between text-base">
                               {mcq.question}
                               <Badge variant="secondary">MCQ</Badge>
                             </CardTitle>
                           </CardHeader>
                         </Card>
                       </Link>
                    ))}
                  </div>
                </section>
              )}
            </>
          ) : (
            <p className="text-muted-foreground text-center py-8">No results found for "{searchTerm}".</p>
          )}
        </div>
      )}
    </div>
  );
}
