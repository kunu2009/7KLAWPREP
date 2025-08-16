
'use server';
/**
 * @fileOverview An AI agent that generates a visual diagram and description for a legal topic.
 *
 * - generateVisualLaw - A function that generates a mindmap/flowchart.
 * - GenerateVisualLawInput - The input type for the function.
 * - GenerateVisualLawOutput - The return type for the function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import { getStorage } from 'firebase-admin/storage';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase-config-admin';
import { randomUUID } from 'crypto';

const GenerateVisualLawInputSchema = z.object({
  topic: z.string().describe('The legal topic for which to generate a visual guide.'),
});
export type GenerateVisualLawInput = z.infer<typeof GenerateVisualLawInputSchema>;

const GenerateVisualLawOutputSchema = z.object({
  description: z.string().describe('A detailed markdown description of the mindmap or flowchart.'),
  imageUrl: z.string().describe('A public URL to the generated image of the diagram.'),
});
export type GenerateVisualLawOutput = z.infer<typeof GenerateVisualLawOutputSchema>;

export async function generateVisualLaw(input: GenerateVisualLawInput): Promise<GenerateVisualLawOutput> {
  return generateVisualLawFlow(input);
}

const descriptionPrompt = ai.definePrompt({
    name: 'visualLawDescriptionPrompt',
    input: {schema: GenerateVisualLawInputSchema},
    output: {schema: z.object({ description: z.string() })},
    prompt: `You are an expert legal educator. Your task is to create a clear and structured description for a mindmap or flowchart about the legal topic: "{{topic}}".

The description should be detailed enough for a graphic designer or an AI image generator to create a visual representation from it. Use markdown to structure the content with headings, lists, and connections.

For example, for "How a Bill Becomes an Act", you might describe:
- A central box: "The Bill"
- Arrows leading to: "First Reading in House 1 (Lok Sabha)" -> "Second Reading (Debate & Scrutiny)" -> "Third Reading (Voting)"
- A decision diamond: "Passed?" with Yes/No branches.
- Yes branch leads to "Sent to House 2 (Rajya Sabha)" and repeats the process.
- Final step: "Presidential Assent" -> "Becomes an Act".

Provide a similarly structured description for the topic: "{{topic}}".`
});

async function uploadImageToStorage(dataUri: string, topic: string): Promise<string> {
    const bucket = getStorage().bucket();
    const buffer = Buffer.from(dataUri.split(',')[1], 'base64');
    const fileExtension = dataUri.split(';')[0].split('/')[1] || 'png';
    const fileName = `visual-law/${topic.replace(/\s+/g, '_')}_${randomUUID()}.${fileExtension}`;
    const file = bucket.file(fileName);

    await file.save(buffer, {
        metadata: {
            contentType: `image/${fileExtension}`,
        },
        public: true,
    });
    
    return file.publicUrl();
}

const generateVisualLawFlow = ai.defineFlow(
  {
    name: 'generateVisualLawFlow',
    inputSchema: GenerateVisualLawInputSchema,
    outputSchema: GenerateVisualLawOutputSchema,
  },
  async (input) => {
    const visualLawDocRef = doc(db, 'visualLaw', input.topic);
    const docSnap = await getDoc(visualLawDocRef);

    if (docSnap.exists()) {
        const data = docSnap.data();
        if(data.imageUrl && data.description) {
            return {
                description: data.description,
                imageUrl: data.imageUrl,
            };
        }
    }

    // Step 1: Generate a structured description of the diagram.
    const { output: descriptionOutput } = await descriptionPrompt(input);
    const description = descriptionOutput?.description || `A mindmap about ${input.topic}`;

    // Step 2: Use the description to generate an image.
    const { media } = await ai.generate({
        model: 'googleai/gemini-2.0-flash-preview-image-generation',
        prompt: `Generate a very clean, modern, and easy-to-understand diagram, mindmap, or flowchart based on the following description.
        The style should be professional and educational, using clear boxes, arrows, and text. Avoid photographic or realistic styles. Focus on clarity for learning.
        
        Description: ${description}`,
        config: {
            responseModalities: ['TEXT', 'IMAGE'],
        },
    });

    if (!media?.url) {
        throw new Error('Failed to generate image for the visual law guide.');
    }
    
    // Step 3: Upload the image to Firebase Storage and get the public URL.
    const imageUrl = await uploadImageToStorage(media.url, input.topic);

    // Step 4: Save the description and public URL to Firestore.
    await setDoc(visualLawDocRef, {
        topic: input.topic,
        description: description,
        imageUrl: imageUrl,
        createdAt: new Date().toISOString(),
    });

    return {
        description,
        imageUrl,
    };
  }
);
