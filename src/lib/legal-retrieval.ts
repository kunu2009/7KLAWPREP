import { flashcards, mcqs, notes, reels } from "@/lib/data";

export type RetrievedSource = {
  title: string;
  reference: string;
  excerpt: string;
  score: number;
};

const STOPWORDS = new Set([
  "the",
  "is",
  "a",
  "an",
  "of",
  "to",
  "and",
  "in",
  "for",
  "on",
  "what",
  "how",
  "why",
  "can",
  "with",
  "about",
  "under",
  "law",
]);

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .map((token) => token.trim())
    .filter((token) => token.length > 2 && !STOPWORDS.has(token));
}

function scoreText(queryTokens: string[], text: string): number {
  if (!queryTokens.length) return 0;
  const target = text.toLowerCase();

  let score = 0;
  for (const token of queryTokens) {
    if (target.includes(token)) {
      score += 1;
    }
  }

  return score;
}

function clip(text: string, maxLen = 220): string {
  if (text.length <= maxLen) return text;
  return `${text.slice(0, maxLen)}...`;
}

export function retrieveLegalContext(query: string, limit = 4): RetrievedSource[] {
  const queryTokens = tokenize(query);
  if (!queryTokens.length) return [];

  const candidates: RetrievedSource[] = [];

  for (const note of notes) {
    const score = scoreText(queryTokens, `${note.topic} ${note.category} ${note.content}`);
    if (score > 0) {
      candidates.push({
        title: note.topic,
        reference: `Notes · ${note.category}`,
        excerpt: clip(note.content),
        score,
      });
    }
  }

  for (const mcq of mcqs) {
    const score = scoreText(
      queryTokens,
      `${mcq.topic} ${mcq.question} ${mcq.options.join(" ")} ${mcq.explanation}`
    );
    if (score > 0) {
      candidates.push({
        title: mcq.topic,
        reference: `MCQ · ${mcq.id}`,
        excerpt: clip(`${mcq.question} ${mcq.explanation}`),
        score,
      });
    }
  }

  for (const card of flashcards) {
    const score = scoreText(queryTokens, `${card.topic} ${card.term} ${card.definition}`);
    if (score > 0) {
      candidates.push({
        title: card.term,
        reference: `Flashcard · ${card.topic}`,
        excerpt: clip(card.definition),
        score,
      });
    }
  }

  for (const reel of reels) {
    const score = scoreText(queryTokens, `${reel.topic} ${reel.title} ${reel.content}`);
    if (score > 0) {
      candidates.push({
        title: reel.title,
        reference: `Reel · ${reel.topic}`,
        excerpt: clip(reel.content),
        score,
      });
    }
  }

  return candidates
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
}
