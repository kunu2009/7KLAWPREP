// This file is machine-generated - edit at your own risk.

'use server';

/**
 * @fileOverview An AI agent that answers law-related questions for students.
 *
 * - answerLawQuestion - A function that uses the AI to answer a law question.
 * - AnswerLawQuestionInput - The input type for the answerLawQuestion function.
 * - AnswerLawQuestionOutput - The return type for the answerLawQuestion function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import { retrieveLegalContext } from '@/lib/legal-retrieval';

const AnswerLawQuestionInputSchema = z.object({
  question: z.string().describe('The law-related question to be answered.'),
});
export type AnswerLawQuestionInput = z.infer<typeof AnswerLawQuestionInputSchema>;

const AnswerLawQuestionPromptInputSchema = z.object({
  question: z.string(),
  retrievedContext: z.string(),
});

const AnswerLawQuestionOutputSchema = z.object({
  answer: z.string().describe('The answer to the law-related question.'),
  sources: z.array(
    z.object({
      title: z.string().describe('Source title such as Bare Act, Article, or case name.'),
      reference: z.string().describe('Specific section/article/case reference.'),
    })
  ).describe('Supporting legal references used in the answer.'),
  confidence: z.enum(['low', 'medium', 'high']).describe('Confidence level in the legal correctness of the response.'),
  verificationNote: z.string().describe('A brief verification caution for the learner.'),
  progress: z.string().describe('Progress of answering the law-related question'),
});
export type AnswerLawQuestionOutput = z.infer<typeof AnswerLawQuestionOutputSchema>;

export async function answerLawQuestion(input: AnswerLawQuestionInput): Promise<AnswerLawQuestionOutput> {
  return answerLawQuestionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'answerLawQuestionPrompt',
  input: {schema: AnswerLawQuestionPromptInputSchema},
  output: {schema: AnswerLawQuestionOutputSchema},
  prompt: `You are a helpful AI assistant for law students. Your goal is to answer questions about legal concepts in a clear and concise manner.

Rules:
1) Prefer Indian law context unless the user explicitly asks otherwise.
2) Keep answer educational and exam-focused.
3) Use only the retrieved context provided below for source references.
4) If uncertain or the question is jurisdiction-dependent, set confidence to "low" and state what must be verified.
5) Do not fabricate case names or section numbers.
6) Keep verificationNote short and practical.

Retrieved context:
{{{retrievedContext}}}

Question: {{{question}}}`,
});

const answerLawQuestionFlow = ai.defineFlow(
  {
    name: 'answerLawQuestionFlow',
    inputSchema: AnswerLawQuestionInputSchema,
    outputSchema: AnswerLawQuestionOutputSchema,
  },
  async input => {
    const retrieved = retrieveLegalContext(input.question, 4);
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
      question: input.question,
      retrievedContext,
    });

    if (!output) {
      return {
        answer: 'I could not generate a reliable answer for this query right now. Please rephrase the question and include the specific Act, Article, or case context.',
        sources: [],
        confidence: 'low',
        verificationNote: 'Verify with the latest Bare Act text and recent judgments before relying on this.',
        progress: 'The law-related question has been answered.',
      };
    }

    const normalizedSources = Array.isArray(output.sources) ? output.sources.slice(0, 3) : [];
    const normalizedConfidence = output.confidence ?? (normalizedSources.length > 0 ? 'medium' : 'low');
    const fallbackSources = retrieved.map((item) => ({
      title: item.title,
      reference: item.reference,
    }));
    const safeSources = fallbackSources.length ? fallbackSources : normalizedSources;

    return {
      ...output,
      sources: safeSources.slice(0, 3),
      confidence: normalizedConfidence,
      verificationNote:
        output.verificationNote ||
        'For exam prep, cross-check key sections/articles with primary sources.',
      progress: 'The law-related question has been answered.',
    };
  }
);

