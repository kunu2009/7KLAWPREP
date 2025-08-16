
'use server';
/**
 * @fileOverview An AI agent that suggests a remedial study plan based on weak topics.
 *
 * - suggestRemedialPlan - A function that generates a study plan.
 * - RemedialPlanInput - The input type for the function.
 * - RemedialPlanOutput - The return type for the function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const RemedialPlanInputSchema = z.object({
  weakTopics: z.array(z.string()).describe("The list of topics the user is weakest in."),
  accuracy: z.number().describe("The user's overall accuracy percentage."),
});
export type RemedialPlanInput = z.infer<typeof RemedialPlanInputSchema>;

const RemedialPlanOutputSchema = z.object({
  plan: z.string().describe("A concise, encouraging, and actionable study plan formatted in markdown. It should recommend specific activities and link to relevant app sections like /notes, /practice-quiz, or /flashcards."),
});
export type RemedialPlanOutput = z.infer<typeof RemedialPlanOutputSchema>;

export async function suggestRemedialPlan(input: RemedialPlanInput): Promise<RemedialPlanOutput> {
  return suggestRemedialPlanFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestRemedialPlanPrompt',
  input: { schema: RemedialPlanInputSchema },
  output: { schema: RemedialPlanOutputSchema },
  prompt: `You are an encouraging AI study coach for a law entrance exam app. A user needs a remedial study plan based on their recent performance.

User's overall accuracy: {{{accuracy}}}%
User's weakest topics: {{{weakTopics}}}

Based on this, generate a short, positive, and actionable study plan.
- Keep the tone encouraging, not critical.
- Recommend 2-3 specific, concrete actions.
- For each action, suggest a relevant section of the app to visit (e.g., "/notes", "/practice-quiz", "/flashcards").
- Format the response using markdown (headings, bullet points).

Example Response for a user weak in 'Constitution':
### Let's Sharpen Your Skills!

Your overall accuracy of {{{accuracy}}}% is a solid foundation! To boost it even further, let's focus on a few key areas.

*   **Deepen Your Understanding:** You seem to be finding 'Constitution' a bit tricky. I recommend spending 15 minutes reviewing the Topic Notes for 'Constitution' to solidify the core concepts. You can find them at [/notes](/notes).
*   **Targeted Practice:** After reviewing the notes, take a short 5-question Practice Quiz specifically on the 'Constitution' topic. This will help reinforce what you've learned. Head over to [/practice-quiz](/practice-quiz) to start.

Keep up the great work! Consistent effort is the key to success.
`,
});

const suggestRemedialPlanFlow = ai.defineFlow(
  {
    name: 'suggestRemedialPlanFlow',
    inputSchema: RemedialPlanInputSchema,
    outputSchema: RemedialPlanOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
