
'use server';
/**
 * @fileOverview An AI agent that provides briefs of landmark legal cases.
 *
 * - briefCase - A function that generates a brief for a given case name.
 * - BriefCaseInput - The input type for the briefCase function.
 * - BriefCaseOutput - The return type for the briefCase function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const BriefCaseInputSchema = z.object({
  caseName: z.string().describe('The name of the landmark legal case.'),
});
export type BriefCaseInput = z.infer<typeof BriefCaseInputSchema>;

const BriefCaseOutputSchema = z.object({
  brief: z.string().describe('A structured brief of the case, formatted in markdown. It should include sections for Facts, Issues, Arguments, Judgment, and Legal Principle Laid Down.'),
});
export type BriefCaseOutput = z.infer<typeof BriefCaseOutputSchema>;

export async function briefCase(input: BriefCaseInput): Promise<BriefCaseOutput> {
  return briefCaseFlow(input);
}

const prompt = ai.definePrompt({
  name: 'briefCasePrompt',
  input: {schema: BriefCaseInputSchema},
  output: {schema: BriefCaseOutputSchema},
  prompt: `You are an expert legal analyst who creates concise and accurate case briefs for law students.
  
Generate a structured case brief for the following landmark case: **{{{caseName}}}**

The brief must be well-organized and formatted using markdown. It must contain the following sections:
- **Facts of the Case:** A brief summary of what happened.
- **Issues:** The key legal questions the court had to decide.
- **Arguments:** A summary of the main arguments from both the petitioner and respondent sides.
- **Judgment:** The court's final decision.
- **Legal Principle Laid Down:** The significant legal rule or doctrine established or affirmed by this case.
`,
});

const briefCaseFlow = ai.defineFlow(
  {
    name: 'briefCaseFlow',
    inputSchema: BriefCaseInputSchema,
    outputSchema: BriefCaseOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
