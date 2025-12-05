"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Shuffle, CheckCircle2, XCircle, ArrowRight, RotateCcw, Trophy, Lightbulb, ArrowUp, ArrowDown } from 'lucide-react';

interface ParajumbleQuestion {
  id: string;
  title: string;
  sentences: { id: string; text: string }[];
  correctOrder: string[];
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
  topic: string;
}

const parajumbleQuestions: ParajumbleQuestion[] = [
  {
    id: 'pj1',
    title: 'Constitutional Framework',
    sentences: [
      { id: 'A', text: 'The Constitution of India establishes a parliamentary form of government.' },
      { id: 'B', text: 'This system was adopted to ensure accountability of the executive to the legislature.' },
      { id: 'C', text: 'The founding fathers debated various models before settling on this framework.' },
      { id: 'D', text: 'They believed it would best suit India\'s diverse democratic needs.' }
    ],
    correctOrder: ['A', 'C', 'D', 'B'],
    explanation: 'A introduces the topic (parliamentary government). C follows by mentioning the debate process. D explains the reason for the choice. B concludes with the purpose.',
    difficulty: 'easy',
    topic: 'Constitution'
  },
  {
    id: 'pj2',
    title: 'Judicial Review',
    sentences: [
      { id: 'A', text: 'However, this power is not absolute and must be exercised with judicial restraint.' },
      { id: 'B', text: 'Judicial review is the power of courts to examine the constitutionality of laws.' },
      { id: 'C', text: 'The doctrine was firmly established in the Kesavananda Bharati case.' },
      { id: 'D', text: 'It acts as a check on legislative and executive actions.' }
    ],
    correctOrder: ['B', 'D', 'C', 'A'],
    explanation: 'B defines judicial review. D explains its function. C provides the landmark case. A adds a caveat about limitations.',
    difficulty: 'medium',
    topic: 'Judiciary'
  },
  {
    id: 'pj3',
    title: 'Right to Privacy',
    sentences: [
      { id: 'A', text: 'The Supreme Court declared it to be intrinsic to life and liberty under Article 21.' },
      { id: 'B', text: 'For decades, there was ambiguity about whether privacy was a fundamental right.' },
      { id: 'C', text: 'The Puttaswamy judgment in 2017 finally resolved this question.' },
      { id: 'D', text: 'This has implications for data protection and surveillance laws.' }
    ],
    correctOrder: ['B', 'C', 'A', 'D'],
    explanation: 'B presents the historical uncertainty. C introduces the resolution. A states the court\'s declaration. D discusses the implications.',
    difficulty: 'medium',
    topic: 'Fundamental Rights'
  },
  {
    id: 'pj4',
    title: 'Climate Change Law',
    sentences: [
      { id: 'A', text: 'The Paris Agreement aims to limit global warming to 1.5 degrees Celsius.' },
      { id: 'B', text: 'Nations have submitted their Nationally Determined Contributions (NDCs).' },
      { id: 'C', text: 'Climate change poses an existential threat to human civilization.' },
      { id: 'D', text: 'International cooperation has been the primary response to this challenge.' }
    ],
    correctOrder: ['C', 'D', 'A', 'B'],
    explanation: 'C identifies the problem. D mentions the response approach. A specifies the agreement. B details the implementation mechanism.',
    difficulty: 'easy',
    topic: 'Environment'
  },
  {
    id: 'pj5',
    title: 'Criminal Justice Reform',
    sentences: [
      { id: 'A', text: 'The Bharatiya Nyaya Sanhita (BNS) was enacted in 2023.' },
      { id: 'B', text: 'Critics argue that some colonial-era provisions still remain.' },
      { id: 'C', text: 'It replaced the colonial-era Indian Penal Code of 1860.' },
      { id: 'D', text: 'The reform aimed to modernize criminal law and make it more victim-centric.' }
    ],
    correctOrder: ['A', 'C', 'D', 'B'],
    explanation: 'A introduces the new law. C explains what it replaced. D states the objective. B presents criticism.',
    difficulty: 'medium',
    topic: 'Criminal Law'
  },
  {
    id: 'pj6',
    title: 'Separation of Powers',
    sentences: [
      { id: 'A', text: 'Each organ acts as a check on the others to prevent tyranny.' },
      { id: 'B', text: 'Montesquieu propounded the doctrine of separation of powers.' },
      { id: 'C', text: 'In India, this doctrine is not rigidly applied but its spirit is maintained.' },
      { id: 'D', text: 'The doctrine divides government into legislative, executive, and judicial branches.' }
    ],
    correctOrder: ['B', 'D', 'A', 'C'],
    explanation: 'B introduces Montesquieu and the doctrine. D explains its structure. A describes the purpose. C applies it to India.',
    difficulty: 'hard',
    topic: 'Constitutional Law'
  },
  {
    id: 'pj7',
    title: 'Arbitration Law',
    sentences: [
      { id: 'A', text: 'India has been working to become a hub for international arbitration.' },
      { id: 'B', text: 'The Arbitration and Conciliation Act, 1996 governs these proceedings.' },
      { id: 'C', text: 'Arbitration provides a faster alternative to court litigation.' },
      { id: 'D', text: 'Recent amendments have reduced court intervention in arbitral matters.' }
    ],
    correctOrder: ['C', 'B', 'D', 'A'],
    explanation: 'C introduces arbitration\'s advantage. B mentions the governing law. D discusses recent changes. A states India\'s aspiration.',
    difficulty: 'hard',
    topic: 'ADR'
  },
  {
    id: 'pj8',
    title: 'Freedom of Speech',
    sentences: [
      { id: 'A', text: 'Article 19(1)(a) guarantees the right to freedom of speech and expression.' },
      { id: 'B', text: 'Reasonable restrictions can be imposed under Article 19(2).' },
      { id: 'C', text: 'These include restrictions on grounds of security, public order, and defamation.' },
      { id: 'D', text: 'This right is essential for a functioning democracy.' }
    ],
    correctOrder: ['A', 'D', 'B', 'C'],
    explanation: 'A establishes the right. D explains its importance. B introduces restrictions. C specifies the grounds.',
    difficulty: 'easy',
    topic: 'Fundamental Rights'
  }
];

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function ParajumblePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [items, setItems] = useState<{ id: string; text: string }[]>(() => 
    shuffleArray([...parajumbleQuestions[0].sentences])
  );
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [attempted, setAttempted] = useState(0);

  const currentQuestion = parajumbleQuestions[currentIndex];

  const moveItem = (index: number, direction: 'up' | 'down') => {
    if (showResult) return;
    const newItems = [...items];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= newItems.length) return;
    [newItems[index], newItems[targetIndex]] = [newItems[targetIndex], newItems[index]];
    setItems(newItems);
  };

  const checkAnswer = () => {
    setShowResult(true);
    setAttempted(prev => prev + 1);
    const currentOrder = items.map(item => item.id);
    const isCorrect = JSON.stringify(currentOrder) === JSON.stringify(currentQuestion.correctOrder);
    if (isCorrect) {
      setScore(prev => prev + 1);
    }
  };

  const nextQuestion = () => {
    if (currentIndex < parajumbleQuestions.length - 1) {
      const nextIdx = currentIndex + 1;
      setCurrentIndex(nextIdx);
      setItems(shuffleArray([...parajumbleQuestions[nextIdx].sentences]));
      setShowResult(false);
    }
  };

  const resetQuiz = () => {
    setCurrentIndex(0);
    setItems(shuffleArray([...parajumbleQuestions[0].sentences]));
    setShowResult(false);
    setScore(0);
    setAttempted(0);
  };

  const reshuffleCurrentQuestion = () => {
    setItems(shuffleArray([...currentQuestion.sentences]));
    setShowResult(false);
  };

  const getCorrectPosition = (id: string) => currentQuestion.correctOrder.indexOf(id);

  const isItemCorrect = (id: string, index: number) => {
    return currentQuestion.correctOrder[index] === id;
  };

  const isAllCorrect = () => {
    const currentOrder = items.map(item => item.id);
    return JSON.stringify(currentOrder) === JSON.stringify(currentQuestion.correctOrder);
  };

  const difficultyColors = {
    easy: 'bg-green-500/10 text-green-600',
    medium: 'bg-yellow-500/10 text-yellow-600',
    hard: 'bg-red-500/10 text-red-600'
  };

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold tracking-tight flex items-center gap-2">
          <Shuffle className="h-6 w-6 text-indigo-500" />
          Parajumble Trainer
        </h1>
        <p className="text-muted-foreground">
          Arrange sentences in logical order
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3">
        <Card className="p-3 text-center">
          <Trophy className="h-5 w-5 mx-auto mb-1 text-yellow-500" />
          <p className="text-lg font-bold">{score}/{attempted}</p>
          <p className="text-xs text-muted-foreground">Correct</p>
        </Card>
        <Card className="p-3 text-center">
          <p className="text-lg font-bold">{attempted > 0 ? Math.round((score/attempted)*100) : 0}%</p>
          <p className="text-xs text-muted-foreground">Accuracy</p>
        </Card>
        <Card className="p-3 text-center">
          <p className="text-lg font-bold">{currentIndex + 1}/{parajumbleQuestions.length}</p>
          <p className="text-xs text-muted-foreground">Progress</p>
        </Card>
      </div>

      {/* Progress */}
      <Progress value={((currentIndex + 1) / parajumbleQuestions.length) * 100} className="h-2" />

      {/* Question Card */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2 flex-wrap">
            <Badge className={difficultyColors[currentQuestion.difficulty]}>
              {currentQuestion.difficulty}
            </Badge>
            <Badge variant="outline">{currentQuestion.topic}</Badge>
          </div>
          <CardTitle className="text-lg mt-2">{currentQuestion.title}</CardTitle>
          <CardDescription>Use arrows to arrange in correct order</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {items.map((item, index) => {
            let bgClass = "bg-muted/30";
            if (showResult) {
              bgClass = isItemCorrect(item.id, index) 
                ? "bg-green-500/20 border-green-500" 
                : "bg-red-500/20 border-red-500";
            }

            return (
              <div
                key={item.id}
                className={`p-3 rounded-lg border ${bgClass} flex items-center gap-3`}
              >
                <div className="flex flex-col gap-1">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-6 w-6"
                    onClick={() => moveItem(index, 'up')}
                    disabled={index === 0 || showResult}
                  >
                    <ArrowUp className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-6 w-6"
                    onClick={() => moveItem(index, 'down')}
                    disabled={index === items.length - 1 || showResult}
                  >
                    <ArrowDown className="h-4 w-4" />
                  </Button>
                </div>
                <Badge variant="outline" className="shrink-0">{item.id}</Badge>
                <p className="text-sm flex-1">{item.text}</p>
                {showResult && (
                  isItemCorrect(item.id, index) ? (
                    <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                  ) : (
                    <div className="flex items-center gap-1 text-red-500 text-xs shrink-0">
                      <XCircle className="h-5 w-5" />
                      <span>→ Pos {getCorrectPosition(item.id) + 1}</span>
                    </div>
                  )
                )}
              </div>
            );
          })}

          {/* Result & Explanation */}
          {showResult && (
            <div className="space-y-3">
              <div className={`p-4 rounded-lg ${isAllCorrect() ? 'bg-green-500/10' : 'bg-red-500/10'}`}>
                <p className="font-semibold mb-1">
                  {isAllCorrect() ? '✓ Perfect! Correct order!' : `✗ Correct order: ${currentQuestion.correctOrder.join(' → ')}`}
                </p>
              </div>
              
              <div className="p-3 bg-blue-500/10 rounded-lg flex gap-2">
                <Lightbulb className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-blue-600">Explanation</p>
                  <p className="text-sm text-muted-foreground">{currentQuestion.explanation}</p>
                </div>
              </div>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex gap-2">
          {!showResult ? (
            <>
              <Button variant="outline" onClick={reshuffleCurrentQuestion}>
                <Shuffle className="h-4 w-4 mr-2" /> Shuffle
              </Button>
              <Button onClick={checkAnswer} className="flex-1">
                Check Answer
              </Button>
            </>
          ) : (
            <>
              <Button variant="outline" onClick={resetQuiz}>
                <RotateCcw className="h-4 w-4 mr-2" /> Reset
              </Button>
              {currentIndex < parajumbleQuestions.length - 1 && (
                <Button onClick={nextQuestion} className="flex-1">
                  Next Question <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              )}
            </>
          )}
        </CardFooter>
      </Card>

      {/* Tips */}
      <Card className="bg-indigo-500/5 border-indigo-500/20">
        <CardContent className="p-4">
          <p className="text-sm font-medium text-indigo-600 mb-2">📝 Parajumble Tips</p>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Look for the opening sentence - it introduces the topic</li>
            <li>• Find pronouns (it, this, they) - they refer to something mentioned before</li>
            <li>• Identify connectors (however, therefore, moreover)</li>
            <li>• Check for chronological or logical flow</li>
            <li>• The conclusion often summarizes or gives implications</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
