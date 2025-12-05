"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { ScrollArea } from '@/components/ui/scroll-area';
import { brainDumpTopics } from '@/lib/clat-data';
import { 
  Brain, Timer, CheckCircle2, XCircle, ArrowRight, 
  RotateCcw, Eye, EyeOff, Lightbulb, PenLine
} from 'lucide-react';

type DumpState = 'select' | 'writing' | 'compare';

export default function BrainDumpPage() {
  const [state, setState] = useState<DumpState>('select');
  const [selectedTopic, setSelectedTopic] = useState<typeof brainDumpTopics[0] | null>(null);
  const [userContent, setUserContent] = useState('');
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [showNotes, setShowNotes] = useState(false);

  // Timer
  useState(() => {
    let interval: NodeJS.Timeout;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setTimeElapsed(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  });

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const startDump = (topic: typeof brainDumpTopics[0]) => {
    setSelectedTopic(topic);
    setUserContent('');
    setTimeElapsed(0);
    setIsTimerRunning(true);
    setShowNotes(false);
    setState('writing');
  };

  const finishWriting = () => {
    setIsTimerRunning(false);
    setState('compare');
  };

  const resetDump = () => {
    setState('select');
    setSelectedTopic(null);
    setUserContent('');
    setTimeElapsed(0);
    setShowNotes(false);
  };

  const categoryColors: Record<string, string> = {
    'Constitution': 'bg-red-500/10 text-red-600',
    'Contracts': 'bg-blue-500/10 text-blue-600',
    'Torts': 'bg-orange-500/10 text-orange-600',
    'Criminal Law': 'bg-purple-500/10 text-purple-600',
  };

  // Select Screen
  if (state === 'select') {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight flex items-center gap-2">
            <Brain className="h-6 w-6 text-pink-500" />
            Brain-Dump Mode
          </h1>
          <p className="text-muted-foreground">
            Test your recall - write everything you know, then compare with notes
          </p>
        </div>

        <Card className="bg-pink-500/5 border-pink-500/20">
          <CardContent className="p-4">
            <h3 className="font-semibold text-pink-600 mb-2">How It Works</h3>
            <ol className="text-sm text-muted-foreground space-y-1 list-decimal list-inside">
              <li>Select a topic you've studied</li>
              <li>Write down everything you remember (no peeking!)</li>
              <li>Compare your dump with the official notes</li>
              <li>Identify gaps in your knowledge</li>
            </ol>
          </CardContent>
        </Card>

        <div className="grid gap-4 md:grid-cols-2">
          {brainDumpTopics.map((topic) => (
            <Card 
              key={topic.id} 
              className="hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => startDump(topic)}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge className={categoryColors[topic.category] || 'bg-gray-500/10'}>
                    {topic.category}
                  </Badge>
                  <Badge variant="outline">{topic.keyPoints.length} key points</Badge>
                </div>
                <CardTitle className="text-lg mt-2">{topic.title}</CardTitle>
              </CardHeader>
              <CardFooter>
                <Button className="w-full" variant="outline">
                  Start Brain Dump <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  // Writing Screen
  if (state === 'writing' && selectedTopic) {
    return (
      <div className="space-y-6 max-w-3xl mx-auto">
        <div className="flex items-center justify-between">
          <div>
            <Badge className={categoryColors[selectedTopic.category] || 'bg-gray-500/10'}>
              {selectedTopic.category}
            </Badge>
            <h1 className="text-xl font-bold mt-2">{selectedTopic.title}</h1>
            <p className="text-sm text-muted-foreground">
              Write everything you remember about this topic
            </p>
          </div>
          <Card className="p-3 bg-primary/5">
            <div className="flex items-center gap-2">
              <Timer className="h-5 w-5 text-primary" />
              <span className="text-xl font-mono font-bold">{formatTime(timeElapsed)}</span>
            </div>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <PenLine className="h-4 w-4" />
              Your Brain Dump
            </CardTitle>
            <CardDescription>
              Don't look at any notes! Write in bullet points or free form.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Textarea
              placeholder="Start typing everything you remember...

• Key concepts
• Important definitions
• Relevant articles/sections
• Landmark cases
• Exceptions and conditions
• Related topics..."
              value={userContent}
              onChange={(e) => setUserContent(e.target.value)}
              className="min-h-[400px] font-mono text-sm"
            />
          </CardContent>
          <CardFooter className="flex gap-3">
            <Button variant="outline" onClick={resetDump}>
              Cancel
            </Button>
            <Button 
              onClick={finishWriting} 
              className="flex-1"
              disabled={userContent.trim().length < 20}
            >
              I'm Done - Show Notes <Eye className="h-4 w-4 ml-2" />
            </Button>
          </CardFooter>
        </Card>

        <Card className="bg-yellow-500/5 border-yellow-500/20">
          <CardContent className="p-4 flex items-start gap-3">
            <Lightbulb className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-yellow-600">Tip</p>
              <p className="text-sm text-muted-foreground">
                Don't worry about perfect formatting. Just get everything out of your head!
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Compare Screen
  if (state === 'compare' && selectedTopic) {
    return (
      <div className="space-y-6 max-w-4xl mx-auto">
        <div className="flex items-center justify-between">
          <div>
            <Badge className={categoryColors[selectedTopic.category] || 'bg-gray-500/10'}>
              {selectedTopic.category}
            </Badge>
            <h1 className="text-xl font-bold mt-2">{selectedTopic.title}</h1>
            <p className="text-sm text-muted-foreground">
              Compare your dump with the official notes
            </p>
          </div>
          <div className="text-right">
            <p className="text-sm text-muted-foreground">Time taken</p>
            <p className="text-xl font-mono font-bold">{formatTime(timeElapsed)}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* User's Dump */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <PenLine className="h-4 w-4 text-blue-500" />
                Your Brain Dump
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[400px]">
                <div className="whitespace-pre-wrap font-mono text-sm bg-muted/30 p-4 rounded-lg">
                  {userContent || "Nothing written"}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>

          {/* Official Notes */}
          <Card className="border-green-500/30">
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2 text-green-600">
                <CheckCircle2 className="h-4 w-4" />
                Official Notes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[400px]">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Key Points to Remember</h4>
                    <ul className="space-y-2">
                      {selectedTopic.keyPoints.map((point, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <span className="flex items-center justify-center w-5 h-5 rounded-full bg-green-500/10 text-green-600 text-xs flex-shrink-0">
                            {i + 1}
                          </span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="border-t pt-4">
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Detailed Notes</h4>
                    <ul className="space-y-3">
                      {selectedTopic.officialNotes.map((note, i) => (
                        <li key={i} className="text-sm p-3 bg-muted/30 rounded-lg">
                          {note}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </div>

        {/* Self-Assessment */}
        <Card className="bg-primary/5">
          <CardHeader>
            <CardTitle className="text-base">Self-Assessment</CardTitle>
            <CardDescription>
              How well did you remember the key points?
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4">
              <Button variant="outline" className="h-auto py-4 flex-col gap-2 border-red-500/30 hover:bg-red-500/10">
                <XCircle className="h-6 w-6 text-red-500" />
                <span className="text-sm">Needs Work</span>
                <span className="text-xs text-muted-foreground">Missed most points</span>
              </Button>
              <Button variant="outline" className="h-auto py-4 flex-col gap-2 border-yellow-500/30 hover:bg-yellow-500/10">
                <Lightbulb className="h-6 w-6 text-yellow-500" />
                <span className="text-sm">Getting There</span>
                <span className="text-xs text-muted-foreground">Got some points</span>
              </Button>
              <Button variant="outline" className="h-auto py-4 flex-col gap-2 border-green-500/30 hover:bg-green-500/10">
                <CheckCircle2 className="h-6 w-6 text-green-500" />
                <span className="text-sm">Excellent</span>
                <span className="text-xs text-muted-foreground">Got most points</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="flex gap-3">
          <Button variant="outline" onClick={() => startDump(selectedTopic)} className="flex-1">
            <RotateCcw className="h-4 w-4 mr-2" /> Try Again
          </Button>
          <Button onClick={resetDump} className="flex-1">
            Choose Another Topic <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    );
  }

  return null;
}
