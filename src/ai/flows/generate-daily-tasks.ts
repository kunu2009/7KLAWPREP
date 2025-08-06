
'use server';
/**
 * @fileOverview An AI agent that generates personalized daily study tasks.
 *
 * - generateDailyTasks - Generates three study tasks for the user.
 * - GenerateDailyTasksInput - The input type for the function.
 * - GenerateDailyTasksOutput - The return type for the function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { revisionTopics } from '@/lib/data';

const GenerateDailyTasksInputSchema = z.object({
  completedTasks: z.array(z.string()).describe("A list of recently completed tasks to avoid repetition."),
  userProgress: z.string().describe("A summary of the user's recent performance, e.g., topics they struggled with."),
});
export type GenerateDailyTasksInput = z.infer<typeof GenerateDailyTasksInputSchema>;

const TaskSchema = z.object({
    id: z.string().describe("A unique ID for the task."),
    title: z.string().describe("A short, actionable title for the task."),
    description: z.string().describe("A one-sentence description of the task."),
    points: z.number().describe("The number of points awarded for completing the task (e.g., 10, 20, 30)."),
    link: z.string().describe("A relevant page link within the app for the task (e.g., '/mcqs', '/notes').")
});

const GenerateDailyTasksOutputSchema = z.object({
  tasks: z.array(TaskSchema).length(3).describe("An array of exactly three personalized study tasks."),
});
export type GenerateDailyTasksOutput = z.infer<typeof GenerateDailyTasksOutputSchema>;

export async function generateDailyTasks(input: GenerateDailyTasksInput): Promise<GenerateDailyTasksOutput> {
  return generateDailyTasksFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateDailyTasksPrompt',
  input: { schema: GenerateDailyTasksInputSchema },
  output: { schema: GenerateDailyTasksOutputSchema },
  prompt: `You are a study coach for a law prep app. Your goal is to generate three unique, actionable, and personalized daily tasks for a law student.

The app has the following sections the user can be directed to:
- /mcqs: Daily multiple-choice questions.
- /practice-quiz: Targeted quizzes on specific topics.
- /notes: Detailed topic notes.
- /flashcards: For quick revision.
- /reels: Short, memorable legal facts.
- /summarizer: To summarize legal texts.
- /ai-tools: A suite of AI-powered tools.
- /visual-law: AI-generated diagrams for legal topics.

RULES:
- Generate exactly THREE unique tasks.
- Do not repeat tasks from the user's recently completed list: {{{completedTasks}}}.
- Base the tasks on the user's progress if available, otherwise create a balanced set of tasks. User progress: {{{userProgress}}}.
- Assign points (10, 20, or 30) based on the task's difficulty.
- Each task must have a unique ID.
- The tasks should be diverse and cover different study methods (e.g., one practice, one revision, one active learning).
- The topics should be relevant for law entrance exams. Here are some available topics: ${revisionTopics.join(', ')}.

Example Output:
{
  "tasks": [
    { "id": "1", "title": "Constitution Challenge", "description": "Complete the Daily MCQs on the Constitution.", "points": 10, "link": "/mcqs" },
    { "id": "2", "title": "Flashcard Flip", "description": "Review 20 flashcards on Legal Maxims.", "points": 20, "link": "/flashcards" },
    { "id": "3", "title": "Summarize a Judgment", "description": "Find a recent legal news article and summarize it using the AI Summarizer.", "points": 30, "link": "/summarizer" }
  ]
}
`,
});

const generateDailyTasksFlow = ai.defineFlow(
  {
    name: 'generateDailyTasksFlow',
    inputSchema: GenerateDailyTasksInputSchema,
    outputSchema: GenerateDailyTasksOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
