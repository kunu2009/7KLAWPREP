'use server';
/**
 * @fileOverview An AI agent that summarizes legal text.
 *
 * - summarizeLegalText - A function that handles the legal text summarization process.
 * - SummarizeLegalTextInput - The input type for the summarizeLegalText function.
 * - SummarizeLegalTextOutput - The return type for the summarizeLegalText function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import { retrieveLegalContext } from '@/lib/legal-retrieval';

const SummarizeLegalTextInputSchema = z.object({
  legalText: z.string().describe('The legal text to summarize.'),
});
export type SummarizeLegalTextInput = z.infer<typeof SummarizeLegalTextInputSchema>;

const SummarizeLegalTextPromptInputSchema = z.object({
  legalText: z.string(),
  retrievedContext: z.string(),
});

const SummarizeLegalTextOutputSchema = z.object({
  summary: z.string().describe('The summary of the legal text.'),
  sources: z.array(
    z.object({
      title: z.string().describe('Source title for the summary support.'),
      reference: z.string().describe('Specific internal reference label.'),
    })
  ).describe('Supporting source references for the summary.'),
  confidence: z.enum(['low', 'medium', 'high']).describe('Confidence level in the summary quality.'),
  verificationNote: z.string().describe('A short verification note for the learner.'),
  progress: z.string().describe('Progress of the summarization process'),
});
export type SummarizeLegalTextOutput = z.infer<typeof SummarizeLegalTextOutputSchema>;

export async function summarizeLegalText(input: SummarizeLegalTextInput): Promise<SummarizeLegalTextOutput> {
  return summarizeLegalTextFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeLegalTextPrompt',
  input: {schema: SummarizeLegalTextPromptInputSchema},
  output: {schema: SummarizeLegalTextOutputSchema},
  prompt: `You are an expert legal professional, skilled at summarizing legal texts.

Rules:
1) Summarize in clear exam-friendly language with key points.
2) Use retrieved context references to support the summary where relevant.
3) If the legal text is ambiguous or jurisdiction-sensitive, set confidence to "low".
4) Do not invent legal provisions or cases.

Retrieved context:
{{{retrievedContext}}}

Legal text:
{{{legalText}}}

Return a concise summary with source references.`,
});

const summarizeLegalTextFlow = ai.defineFlow(
  {
    name: 'summarizeLegalTextFlow',
    inputSchema: SummarizeLegalTextInputSchema,
    outputSchema: SummarizeLegalTextOutputSchema,
  },
  async input => {
    const retrieved = retrieveLegalContext(input.legalText, 4);
    const retrievedContext =
      retrieved.length > 0
        ? retrieved
            .map(
              (item, index) =>
                `${index + 1}. ${item.title} | ${item.reference}\n${item.excerpt}`
            )
            .join('\n\n')
        : 'No strongly relevant internal context found.';

    const {output} = await prompt({
      legalText: input.legalText,
      retrievedContext,
    });

    if (!output) {
      return {
        summary: 'I could not generate a reliable summary for this text right now. Please retry with a shorter passage or include the key legal issue.',
        sources: retrieved.slice(0, 3).map((item) => ({ title: item.title, reference: item.reference })),
        confidence: 'low',
        verificationNote: 'Cross-check key provisions with the Bare Act and latest case law before relying on this summary.',
        progress: 'The legal text has been summarized.',
      };
    }

    const normalizedSources = Array.isArray(output.sources) ? output.sources.slice(0, 3) : [];
    const fallbackSources = retrieved.slice(0, 3).map((item) => ({
      title: item.title,
      reference: item.reference,
    }));
    const safeSources = fallbackSources.length ? fallbackSources : normalizedSources;
    const confidence = output.confidence ?? (safeSources.length > 0 ? 'medium' : 'low');

    return {
      ...output,
      sources: safeSources,
      confidence,
      verificationNote:
        output.verificationNote ||
        'Use this summary for revision, then verify section-level details from primary sources.',
      progress: 'The legal text has been summarized.',
    };
  }
);
