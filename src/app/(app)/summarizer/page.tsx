
"use client";

import { useState, useTransition } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { summarizeLegalText } from '@/ai/flows/summarize-legal-text';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Wand2, X } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { trackEvent } from '@/lib/analytics';

type SummaryResult = {
  summary: string;
  confidence: 'low' | 'medium' | 'high';
  verificationNote: string;
  sources: Array<{ title: string; reference: string }>;
};

export default function SummarizerPage() {
  const [legalText, setLegalText] = useState('');
  const [summaryResult, setSummaryResult] = useState<SummaryResult | null>(null);
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!legalText.trim()) return;

    setSummaryResult(null);
    trackEvent('ai_summary_requested', { textLength: legalText.trim().length });

    startTransition(async () => {
      try {
        const response = await summarizeLegalText({ legalText });
        if (response && response.summary) {
          setSummaryResult({
            summary: response.summary,
            confidence: response.confidence,
            verificationNote: response.verificationNote,
            sources: response.sources ?? [],
          });
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

  const handleClear = () => {
    setLegalText('');
    setSummaryResult(null);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Legal Text Summarizer</h1>
        <p className="text-muted-foreground">Paste any legal text to get a concise summary from our AI.</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Your Text</CardTitle>
            <CardDescription>Enter the legal document you want to summarize.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <Textarea
                value={legalText}
                onChange={(e) => setLegalText(e.target.value)}
                placeholder="Paste your legal text here..."
                className="min-h-[300px] flex-1"
                disabled={isPending}
                required
              />
              <div className="flex flex-wrap gap-2">
                <Button type="submit" disabled={isPending || !legalText.trim()}>
                  {isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Wand2 className="mr-2 h-4 w-4" />}
                  Summarize Text
                </Button>
                <Button type="button" variant="outline" onClick={handleClear} disabled={isPending}>
                  <X className="mr-2 h-4 w-4" />
                  Clear
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
        
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle>AI Summary</CardTitle>
            <CardDescription>This is the retrieval-grounded AI summary of your text.</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 flex">
            {isPending && !summaryResult && (
              <div className="flex flex-1 items-center justify-center">
                <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
              </div>
            )}
            {summaryResult && (
              <div className="text-sm leading-relaxed whitespace-pre-wrap flex-1 space-y-4">
                <div>{summaryResult.summary}</div>

                <Badge
                  variant={
                    summaryResult.confidence === 'high'
                      ? 'default'
                      : summaryResult.confidence === 'medium'
                      ? 'secondary'
                      : 'outline'
                  }
                  className="text-[10px] uppercase tracking-wide"
                >
                  Confidence: {summaryResult.confidence}
                </Badge>

                {summaryResult.sources.length > 0 && (
                  <div className="space-y-2">
                    <p className="text-xs font-medium text-muted-foreground">Sources</p>
                    <div className="flex flex-wrap gap-1.5">
                      {summaryResult.sources.map((source, index) => (
                        <button
                          key={`${source.reference}-${index}`}
                          type="button"
                          onClick={() => trackEvent('ai_citation_clicked', { title: source.title, reference: source.reference })}
                          className="rounded-md border px-2 py-1 text-xs text-left hover:bg-muted"
                          title={`${source.title} — ${source.reference}`}
                        >
                          {source.title}: {source.reference}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <p className="text-xs text-muted-foreground">{summaryResult.verificationNote}</p>
              </div>
            )}
            {!isPending && !summaryResult && (
              <div className="flex flex-1 items-center justify-center text-center text-muted-foreground">
                <p>Your summary will appear here.</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
