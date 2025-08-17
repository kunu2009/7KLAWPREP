
"use client";

import { useState, useTransition } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { summarizeLegalText } from '@/ai/flows/summarize-legal-text';
import { briefCase } from '@/ai/flows/brief-case-flow';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Wand2, BookText, FileSignature } from 'lucide-react';
import { Input } from '@/components/ui/input';

function SummarizerTool() {
  const [legalText, setLegalText] = useState('');
  const [summary, setSummary] = useState('');
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!legalText.trim()) return;
    setSummary('');

    startTransition(async () => {
      try {
        const response = await summarizeLegalText({ legalText });
        if (response && response.summary) {
          setSummary(response.summary);
        } else {
          throw new Error("Invalid response from summarizer.");
        }
      } catch (error) {
        toast({
          variant: "destructive",
          title: "An error occurred",
          description: "Failed to summarize the text. Please try again.",
        });
      }
    });
  };

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Your Text</CardTitle>
          <CardDescription>Enter the legal document you want to summarize.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <Textarea
              value={legalText}
              onChange={(e) => setLegalText(e.target.value)}
              placeholder="Paste your legal text here..."
              className="min-h-[300px] flex-1"
              disabled={isPending}
              required
            />
            <Button type="submit" disabled={isPending || !legalText.trim()}>
              {isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Wand2 className="mr-2 h-4 w-4" />}
              Summarize Text
            </Button>
          </form>
        </CardContent>
      </Card>
      <Card className="flex flex-col">
        <CardHeader>
          <CardTitle>AI Summary</CardTitle>
          <CardDescription>The AI-generated summary of your text.</CardDescription>
        </CardHeader>
        <CardContent className="flex-1 flex items-center justify-center">
            {isPending ? (
              <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
            ) : summary ? (
              <div className="text-sm leading-relaxed whitespace-pre-wrap flex-1">{summary}</div>
            ) : (
              <div className="text-center text-muted-foreground">
                <BookText className="mx-auto h-8 w-8 mb-2" />
                <p>Your summary will appear here.</p>
              </div>
            )}
        </CardContent>
      </Card>
    </div>
  );
}

function CaseBriefTool() {
  const [caseName, setCaseName] = useState('');
  const [brief, setBrief] = useState('');
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!caseName.trim()) return;
    setBrief('');

    startTransition(async () => {
      try {
        const response = await briefCase({ caseName });
        if (response && response.brief) {
          setBrief(response.brief);
        } else {
          throw new Error("Invalid response from AI.");
        }
      } catch (error) {
        toast({
          variant: "destructive",
          title: "An error occurred",
          description: "Failed to get case brief. Please try again.",
        });
      }
    });
  };
  
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Case Name</CardTitle>
          <CardDescription>Enter the name of a landmark case to get its brief.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
             <Input 
                value={caseName}
                onChange={(e) => setCaseName(e.target.value)}
                placeholder="e.g., Kesavananda Bharati v. State of Kerala"
                disabled={isPending}
                required
            />
            <Button type="submit" disabled={isPending || !caseName.trim()}>
              {isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Wand2 className="mr-2 h-4 w-4" />}
              Get Case Brief
            </Button>
          </form>
        </CardContent>
      </Card>
      <Card className="flex flex-col">
        <CardHeader>
          <CardTitle>AI Case Brief</CardTitle>
          <CardDescription>The AI-generated brief of the case.</CardDescription>
        </CardHeader>
        <CardContent className="flex-1 flex items-center justify-center">
            {isPending ? (
              <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
            ) : brief ? (
              <div className="text-sm leading-relaxed whitespace-pre-wrap flex-1">{brief}</div>
            ) : (
              <div className="text-center text-muted-foreground">
                <FileSignature className="mx-auto h-8 w-8 mb-2" />
                <p>Your case brief will appear here.</p>
              </div>
            )}
        </CardContent>
      </Card>
    </div>
  );
}


export default function AIToolsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">AI Tools</h1>
        <p className="text-muted-foreground">Your personal AI-powered legal toolkit.</p>
      </div>

      <Tabs defaultValue="summarizer" className="space-y-4">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="summarizer"><BookText className="mr-2 h-4 w-4"/>Summarizer</TabsTrigger>
          <TabsTrigger value="case-briefer"><FileSignature className="mr-2 h-4 w-4"/>Case Briefer</TabsTrigger>
        </TabsList>
        <TabsContent value="summarizer">
          <SummarizerTool />
        </TabsContent>
        <TabsContent value="case-briefer">
          <CaseBriefTool />
        </TabsContent>
      </Tabs>
    </div>
  );
}

    