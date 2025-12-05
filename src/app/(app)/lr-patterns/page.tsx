"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Brain, CheckCircle2, XCircle, ArrowRight, RotateCcw, Lightbulb, Trophy, Shuffle } from 'lucide-react';

interface LRPattern {
  id: string;
  type: 'arrangement' | 'syllogism' | 'blood-relation' | 'direction' | 'coding' | 'analogy';
  title: string;
  description: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  tip: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

const lrPatterns: LRPattern[] = [
  // Arrangement
  {
    id: 'lr1',
    type: 'arrangement',
    title: 'Linear Arrangement',
    description: 'Five persons standing in a queue',
    question: 'A, B, C, D, and E are standing in a queue. A is between B and C. D is at one end. If B is not at any end, who is at the other end?',
    options: ['A', 'B', 'C', 'E'],
    correctIndex: 3,
    explanation: 'D is at one end. A is between B and C, and B is not at any end, so B must be in middle. Since A is between B and C, and D is at one end, the order could be: D-B-A-C-E or D-C-A-B-? (invalid as B at end). So E is at the other end.',
    tip: 'Always start with definite positions and eliminate possibilities.',
    difficulty: 'medium'
  },
  {
    id: 'lr2',
    type: 'arrangement',
    title: 'Circular Arrangement',
    description: 'Six persons sitting in a circle',
    question: '6 persons A, B, C, D, E, F sit around a circular table facing the center. A sits opposite to D. B sits to the immediate right of A. E sits to the immediate left of D. Who sits opposite to B?',
    options: ['C', 'E', 'F', 'Cannot be determined'],
    correctIndex: 1,
    explanation: 'A-D are opposite. B is to right of A. E is to left of D. This means B and E are opposite to each other (both are adjacent to the opposite pair A-D).',
    tip: 'In circular arrangements, draw the diagram and fix one position first.',
    difficulty: 'hard'
  },
  // Syllogism
  {
    id: 'lr3',
    type: 'syllogism',
    title: 'Basic Syllogism',
    description: 'Categorical statements',
    question: 'Statements: All dogs are cats. All cats are birds. Conclusions: I. All dogs are birds. II. All birds are dogs.',
    options: ['Only I follows', 'Only II follows', 'Both follow', 'Neither follows'],
    correctIndex: 0,
    explanation: 'From "All dogs are cats" and "All cats are birds," we can conclude "All dogs are birds" (I follows). But we cannot conclude "All birds are dogs" because the relationship is not reversible.',
    tip: 'Use Venn diagrams to visualize - smaller set inside larger set.',
    difficulty: 'easy'
  },
  {
    id: 'lr4',
    type: 'syllogism',
    title: 'Negative Syllogism',
    description: 'Statements with negatives',
    question: 'Statements: Some apples are oranges. No oranges are mangoes. Conclusions: I. Some apples are not mangoes. II. No mangoes are apples.',
    options: ['Only I follows', 'Only II follows', 'Both follow', 'Neither follows'],
    correctIndex: 0,
    explanation: 'Some apples are oranges, and no oranges are mangoes, so those apples that are oranges are definitely not mangoes. Hence, "Some apples are not mangoes" follows. But we cannot say "No mangoes are apples" as some apples might not be oranges.',
    tip: 'With "No" statements, focus on what is definitely excluded.',
    difficulty: 'medium'
  },
  // Blood Relations
  {
    id: 'lr5',
    type: 'blood-relation',
    title: 'Family Tree',
    description: 'Complex family relationship',
    question: 'A is the father of B. C is the daughter of B. D is the brother of B. E is the son of D. How is E related to A?',
    options: ['Son', 'Grandson', 'Nephew', 'Brother'],
    correctIndex: 1,
    explanation: 'A→B (father), B→C (daughter), D is brother of B (so A is also father of D), D→E (son). So E is the son of D, and D is the son of A. Therefore, E is the grandson of A.',
    tip: 'Draw a family tree starting from the oldest member.',
    difficulty: 'easy'
  },
  {
    id: 'lr6',
    type: 'blood-relation',
    title: 'Mixed Relations',
    description: 'Indirect family connections',
    question: 'Pointing to a woman, a man said, "Her mother is the only daughter of my mother." How is the man related to the woman?',
    options: ['Father', 'Uncle', 'Brother', 'Grandfather'],
    correctIndex: 1,
    explanation: '"Only daughter of my mother" means the man\'s sister. So the woman\'s mother is the man\'s sister. Therefore, the man is the woman\'s uncle (maternal uncle).',
    tip: 'Break down complex sentences step by step.',
    difficulty: 'medium'
  },
  // Direction Sense
  {
    id: 'lr7',
    type: 'direction',
    title: 'Direction Test',
    description: 'Movement in directions',
    question: 'A man walks 5 km North, then turns right and walks 3 km, then turns right again and walks 5 km. In which direction is he from his starting point?',
    options: ['North', 'South', 'East', 'West'],
    correctIndex: 2,
    explanation: '5 km North → 3 km East (right turn) → 5 km South (right turn). The North and South movements cancel out (5 km each). Net movement is 3 km East.',
    tip: 'Always draw the path and track displacement, not total distance.',
    difficulty: 'easy'
  },
  {
    id: 'lr8',
    type: 'direction',
    title: 'Shadow-based Direction',
    description: 'Finding direction from shadow',
    question: 'One morning, Ravi was walking towards the sun. His shadow fell to his right. Which direction was he facing?',
    options: ['North', 'South', 'East', 'West'],
    correctIndex: 2,
    explanation: 'In the morning, the sun is in the East. If Ravi walks towards the sun, he faces East. Shadow falls opposite to the sun (West), and if it\'s to his right, he must be facing East (shadow to the West is on his right).',
    tip: 'Morning sun = East, Evening sun = West. Shadow falls opposite.',
    difficulty: 'medium'
  },
  // Coding-Decoding
  {
    id: 'lr9',
    type: 'coding',
    title: 'Letter Coding',
    description: 'Alphabetical coding pattern',
    question: 'If APPLE is coded as ELPPA, how is MANGO coded?',
    options: ['OGNAM', 'NBOHP', 'MANGP', 'NANGO'],
    correctIndex: 0,
    explanation: 'APPLE → ELPPA is simply the reverse of the word. So MANGO → OGNAM.',
    tip: 'First identify the pattern: reversal, substitution, or position-based.',
    difficulty: 'easy'
  },
  {
    id: 'lr10',
    type: 'coding',
    title: 'Number Coding',
    description: 'Numerical coding pattern',
    question: 'If CAT = 24 and DOG = 26, what is FOX?',
    options: ['36', '42', '45', '39'],
    correctIndex: 2,
    explanation: 'C=3, A=1, T=20; CAT = 3+1+20 = 24. D=4, O=15, G=7; DOG = 4+15+7 = 26. F=6, O=15, X=24; FOX = 6+15+24 = 45.',
    tip: 'Assign A=1, B=2... Z=26 and check for sum or product patterns.',
    difficulty: 'medium'
  },
  // Analogy
  {
    id: 'lr11',
    type: 'analogy',
    title: 'Word Analogy',
    description: 'Relationship between word pairs',
    question: 'Pen : Writer :: Scalpel : ?',
    options: ['Carpenter', 'Surgeon', 'Painter', 'Engineer'],
    correctIndex: 1,
    explanation: 'A pen is a tool used by a writer. Similarly, a scalpel is a tool used by a surgeon.',
    tip: 'Identify the relationship: tool-user, part-whole, cause-effect, etc.',
    difficulty: 'easy'
  },
  {
    id: 'lr12',
    type: 'analogy',
    title: 'Number Analogy',
    description: 'Numerical relationship pattern',
    question: '8 : 64 :: 7 : ?',
    options: ['42', '49', '56', '63'],
    correctIndex: 1,
    explanation: '8 : 64 → 8² = 64. So 7 : ? → 7² = 49.',
    tip: 'Check for squares, cubes, or arithmetic operations.',
    difficulty: 'easy'
  },
  {
    id: 'lr13',
    type: 'arrangement',
    title: 'Ranking',
    description: 'Position-based ranking',
    question: 'In a row of students, Ram is 15th from the left and Shyam is 7th from the right. If they interchange positions, Ram becomes 21st from the left. How many students are in the row?',
    options: ['25', '27', '28', '30'],
    correctIndex: 1,
    explanation: 'After interchange, Ram is 21st from left (was 15th). This means Shyam\'s original position was 21st from left. Shyam was 7th from right, so total = 21 + 7 - 1 = 27.',
    tip: 'Total = (position from left) + (position from right) - 1',
    difficulty: 'hard'
  },
  {
    id: 'lr14',
    type: 'syllogism',
    title: 'Either-Or Conclusion',
    description: 'Complementary conclusions',
    question: 'Statements: Some dogs are cats. Some cats are rats. Conclusions: I. Some dogs are rats. II. No dogs are rats.',
    options: ['Only I follows', 'Only II follows', 'Either I or II follows', 'Neither follows'],
    correctIndex: 2,
    explanation: 'We cannot definitely say some dogs are rats, nor can we say no dogs are rats. Both are possible. Hence "Either I or II" follows.',
    tip: 'Either-Or applies when both conclusions are complementary and neither can be definitively proven.',
    difficulty: 'hard'
  },
  {
    id: 'lr15',
    type: 'blood-relation',
    title: 'Coded Relation',
    description: 'Relations with symbols',
    question: 'A + B means A is the father of B. A - B means A is the sister of B. A × B means A is the son of B. What does P × Q + R - S mean?',
    options: ['S is niece of P', 'S is cousin of P', 'S is aunt of P', 'S is daughter of P'],
    correctIndex: 2,
    explanation: 'P × Q: P is son of Q. Q + R: Q is father of R. R - S: R is sister of S. So Q is father of both R and S (siblings). P is son of Q, so R and S are siblings of P. But R is sister meaning R is female, and R-S means R is sister of S. So S is sibling of R, and P\'s sibling too. Actually, R is P\'s aunt (sister of P\'s parent Q).',
    tip: 'Convert symbols to relationships step by step.',
    difficulty: 'hard'
  }
];

const patternTypes = {
  'all': 'All Patterns',
  'arrangement': 'Arrangement',
  'syllogism': 'Syllogism',
  'blood-relation': 'Blood Relations',
  'direction': 'Direction',
  'coding': 'Coding-Decoding',
  'analogy': 'Analogy'
};

export default function LRPatternsPage() {
  const [selectedType, setSelectedType] = useState<string>('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [attempted, setAttempted] = useState(0);

  const filteredPatterns = selectedType === 'all' 
    ? lrPatterns 
    : lrPatterns.filter(p => p.type === selectedType);

  const currentPattern = filteredPatterns[currentIndex];

  const handleAnswer = (index: number) => {
    if (showResult) return;
    setSelectedAnswer(index);
    setShowResult(true);
    setAttempted(prev => prev + 1);
    if (index === currentPattern.correctIndex) {
      setScore(prev => prev + 1);
    }
  };

  const nextQuestion = () => {
    if (currentIndex < filteredPatterns.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    }
  };

  const shuffleQuestions = () => {
    setCurrentIndex(Math.floor(Math.random() * filteredPatterns.length));
    setSelectedAnswer(null);
    setShowResult(false);
  };

  const resetQuiz = () => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAttempted(0);
  };

  const handleTypeChange = (type: string) => {
    setSelectedType(type);
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setShowResult(false);
  };

  const difficultyColors = {
    easy: 'bg-green-500/10 text-green-600',
    medium: 'bg-yellow-500/10 text-yellow-600',
    hard: 'bg-red-500/10 text-red-600'
  };

  const typeColors = {
    arrangement: 'bg-blue-500/10 text-blue-600',
    syllogism: 'bg-purple-500/10 text-purple-600',
    'blood-relation': 'bg-pink-500/10 text-pink-600',
    direction: 'bg-green-500/10 text-green-600',
    coding: 'bg-orange-500/10 text-orange-600',
    analogy: 'bg-cyan-500/10 text-cyan-600'
  };

  if (!currentPattern) {
    return (
      <div className="text-center py-12">
        <p>No patterns available for this category.</p>
        <Button onClick={() => handleTypeChange('all')} className="mt-4">
          View All Patterns
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold tracking-tight flex items-center gap-2">
          <Brain className="h-6 w-6 text-purple-500" />
          Logical Reasoning Pattern Bank
        </h1>
        <p className="text-muted-foreground">
          Master all LR question types for CLAT
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3">
        <Card className="p-3 text-center">
          <p className="text-2xl font-bold">{score}/{attempted}</p>
          <p className="text-xs text-muted-foreground">Correct</p>
        </Card>
        <Card className="p-3 text-center">
          <p className="text-2xl font-bold">{attempted > 0 ? Math.round((score/attempted)*100) : 0}%</p>
          <p className="text-xs text-muted-foreground">Accuracy</p>
        </Card>
        <Card className="p-3 text-center">
          <p className="text-2xl font-bold">{filteredPatterns.length}</p>
          <p className="text-xs text-muted-foreground">Questions</p>
        </Card>
      </div>

      {/* Type Filter */}
      <div className="flex flex-wrap gap-2">
        {Object.entries(patternTypes).map(([key, label]) => (
          <Button
            key={key}
            variant={selectedType === key ? "default" : "outline"}
            size="sm"
            onClick={() => handleTypeChange(key)}
          >
            {label}
          </Button>
        ))}
      </div>

      {/* Progress */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Question {currentIndex + 1} of {filteredPatterns.length}</span>
          <Button variant="ghost" size="sm" onClick={shuffleQuestions}>
            <Shuffle className="h-4 w-4 mr-1" /> Random
          </Button>
        </div>
        <Progress value={((currentIndex + 1) / filteredPatterns.length) * 100} className="h-2" />
      </div>

      {/* Question Card */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2 flex-wrap">
            <Badge className={typeColors[currentPattern.type as keyof typeof typeColors]}>
              {patternTypes[currentPattern.type as keyof typeof patternTypes]}
            </Badge>
            <Badge className={difficultyColors[currentPattern.difficulty]}>
              {currentPattern.difficulty}
            </Badge>
          </div>
          <CardTitle className="text-lg mt-2">{currentPattern.title}</CardTitle>
          <CardDescription>{currentPattern.description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Question */}
          <div className="p-4 bg-muted/30 rounded-lg">
            <p className="whitespace-pre-line">{currentPattern.question}</p>
          </div>

          {/* Options */}
          <div className="space-y-2">
            {currentPattern.options.map((option, index) => {
              let buttonClass = "w-full justify-start text-left h-auto py-3 px-4";
              if (showResult) {
                if (index === currentPattern.correctIndex) {
                  buttonClass += " bg-green-500/20 border-green-500 text-green-700";
                } else if (index === selectedAnswer && index !== currentPattern.correctIndex) {
                  buttonClass += " bg-red-500/20 border-red-500 text-red-700";
                }
              }
              
              return (
                <Button
                  key={index}
                  variant="outline"
                  className={buttonClass}
                  onClick={() => handleAnswer(index)}
                  disabled={showResult}
                >
                  <span className="mr-3 font-bold">{String.fromCharCode(65 + index)}.</span>
                  {option}
                  {showResult && index === currentPattern.correctIndex && (
                    <CheckCircle2 className="ml-auto h-5 w-5 text-green-500" />
                  )}
                  {showResult && index === selectedAnswer && index !== currentPattern.correctIndex && (
                    <XCircle className="ml-auto h-5 w-5 text-red-500" />
                  )}
                </Button>
              );
            })}
          </div>

          {/* Explanation */}
          {showResult && (
            <div className="space-y-3">
              <div className={`p-4 rounded-lg ${selectedAnswer === currentPattern.correctIndex ? 'bg-green-500/10' : 'bg-red-500/10'}`}>
                <p className="font-semibold mb-1">
                  {selectedAnswer === currentPattern.correctIndex ? '✓ Correct!' : '✗ Incorrect'}
                </p>
                <p className="text-sm text-muted-foreground">{currentPattern.explanation}</p>
              </div>
              
              <div className="p-3 bg-blue-500/10 rounded-lg flex gap-2">
                <Lightbulb className="h-5 w-5 text-blue-500 shrink-0" />
                <div>
                  <p className="text-sm font-medium text-blue-600">Pro Tip</p>
                  <p className="text-sm text-muted-foreground">{currentPattern.tip}</p>
                </div>
              </div>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex gap-2">
          <Button variant="outline" onClick={resetQuiz}>
            <RotateCcw className="h-4 w-4 mr-2" /> Reset
          </Button>
          {showResult && currentIndex < filteredPatterns.length - 1 && (
            <Button onClick={nextQuestion} className="flex-1">
              Next Question <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          )}
        </CardFooter>
      </Card>

      {/* Pattern Tips Card */}
      <Card className="bg-purple-500/5 border-purple-500/20">
        <CardContent className="p-4">
          <p className="text-sm font-medium text-purple-600 mb-2">🧠 CLAT LR Strategy</p>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Syllogisms: Use Venn diagrams for accuracy</li>
            <li>• Arrangements: Fix one position and build outward</li>
            <li>• Blood Relations: Always draw family trees</li>
            <li>• Coding: Identify pattern type first (reversal/substitution/position)</li>
            <li>• Direction: Draw path diagram, track net displacement</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
