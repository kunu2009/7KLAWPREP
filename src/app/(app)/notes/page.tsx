
"use client";

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { notes as initialNotes } from "@/lib/data";
import type { Note } from "@/lib/types";
import { Link as LinkIcon, Pencil, Save } from "lucide-react";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

const groupedNotes = initialNotes.reduce((acc, note) => {
  const category = note.category;
  if (!acc[category]) {
    acc[category] = [];
  }
  acc[category].push(note);
  return acc;
}, {} as Record<string, Note[]>);

const getNotesFromStorage = (): Note[] => {
    if (typeof window === 'undefined') return initialNotes;
    try {
        const savedNotes = localStorage.getItem('userNotes');
        if (savedNotes) {
            const userNotesMap: Record<string, string> = JSON.parse(savedNotes);
            return initialNotes.map(note => ({
                ...note,
                userNotes: userNotesMap[note.topic] || ''
            }));
        }
    } catch (error) {
        console.error("Failed to load user notes from localStorage", error);
    }
    return initialNotes.map(note => ({ ...note, userNotes: '' }));
};

const saveNoteToStorage = (topic: string, content: string) => {
    try {
        const savedNotes = localStorage.getItem('userNotes');
        const userNotesMap = savedNotes ? JSON.parse(savedNotes) : {};
        userNotesMap[topic] = content;
        localStorage.setItem('userNotes', JSON.stringify(userNotesMap));
    } catch (error) {
        console.error("Failed to save user notes to localStorage", error);
    }
};

export default function NotesPage() {
  const [notes, setNotes] = useState<Note[]>(initialNotes);
  const [selectedTopic, setSelectedTopic] = useState<string>(initialNotes[0].topic);
  const [isEditing, setIsEditing] = useState(false);
  const [currentUserNote, setCurrentUserNote] = useState('');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setNotes(getNotesFromStorage());
  }, []);

  const selectedNote = notes.find(note => note.topic === selectedTopic);

  useEffect(() => {
    if (selectedNote) {
        setCurrentUserNote(selectedNote.userNotes || '');
        setIsEditing(false);
    }
  }, [selectedTopic, selectedNote]);

  const handleTopicChange = (topic: string) => {
    setSelectedTopic(topic);
  };
  
  const handleSaveNote = () => {
    if (!selectedNote) return;
    saveNoteToStorage(selectedNote.topic, currentUserNote);
    setNotes(notes.map(n => n.topic === selectedNote.topic ? { ...n, userNotes: currentUserNote } : n));
    setIsEditing(false);
  };

  return (
    <div className="space-y-6">
       <div>
        <h1 className="text-2xl font-bold tracking-tight">Topic Notes</h1>
        <p className="text-muted-foreground">Select a topic to see detailed reference notes and add your own thoughts.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-[280px_1fr]">
        <div className="flex flex-col gap-4">
           <h3 className="text-lg font-semibold">Select Topic</h3>
           <Select onValueChange={handleTopicChange} defaultValue={selectedTopic}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a topic..." />
            </SelectTrigger>
            <SelectContent className="max-h-[70vh]">
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

        <div className="flex-1">
          {selectedNote ? (
            <Card>
              <CardHeader>
                <CardTitle>{selectedNote.topic}</CardTitle>
                <CardDescription>A brief overview of important concepts in {selectedNote.category}.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="leading-relaxed whitespace-pre-wrap">{selectedNote.content}</p>
                {selectedNote.links.length > 0 && (
                   <div>
                     <h3 className="font-semibold mb-2 flex items-center gap-2"><LinkIcon className="h-4 w-4"/> Useful Links</h3>
                     <ul className="list-disc list-inside space-y-1">
                        {selectedNote.links.map(link => (
                            <li key={link.url}>
                                <Link href={link.url} target="_blank" rel="noopener noreferrer" className="text-primary underline-offset-4 hover:underline">
                                    {link.title}
                                </Link>
                            </li>
                        ))}
                     </ul>
                   </div>
                )}
                <div className="border-t pt-4 mt-4">
                    <div className="flex justify-between items-center mb-2">
                        <h3 className="text-lg font-semibold">My Notes</h3>
                        {isClient && (
                          isEditing ? (
                              <Button size="sm" onClick={handleSaveNote}><Save className="mr-2 h-4 w-4"/> Save</Button>
                          ) : (
                              <Button size="sm" variant="outline" onClick={() => setIsEditing(true)}><Pencil className="mr-2 h-4 w-4"/> Edit</Button>
                          )
                        )}
                    </div>
                    {isClient && (
                      isEditing ? (
                          <Textarea 
                            value={currentUserNote}
                            onChange={(e) => setCurrentUserNote(e.target.value)}
                            placeholder="Add your personal notes here..."
                            className="min-h-[150px]"
                          />
                      ) : (
                          <div className="p-3 bg-muted/50 rounded-lg min-h-[150px] whitespace-pre-wrap text-sm">
                            {currentUserNote || <span className="text-muted-foreground">Click 'Edit' to add your notes.</span>}
                          </div>
                      )
                    )}
                </div>
              </CardContent>
            </Card>
          ) : (
             <div className="flex items-center justify-center h-full min-h-[400px] text-center text-muted-foreground border rounded-lg">
                <p>Please select a topic to view the notes.</p>
              </div>
          )}
        </div>
      </div>
    </div>
  );
}
