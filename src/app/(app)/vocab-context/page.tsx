"use client";

import { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { BookOpen, CheckCircle2, XCircle, ArrowRight, RotateCcw, Bookmark, Trophy } from 'lucide-react';

interface VocabQuestion {
  id: string;
  sentence: string;
  word: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

const vocabQuestions: VocabQuestion[] = [
  {
    id: 'v1',
    sentence: 'The court\'s decision was met with **vociferous** protests from the opposition, who claimed the ruling undermined democratic principles.',
    word: 'vociferous',
    options: ['Silent and subdued', 'Loud and forceful', 'Peaceful and calm', 'Brief and concise'],
    correctIndex: 1,
    explanation: '"Vociferous" means expressing opinions or feelings loudly and forcefully. The context of "protests" and "undermined democratic principles" suggests strong, loud opposition.',
    difficulty: 'medium'
  },
  {
    id: 'v2',
    sentence: 'The lawyer\'s **cogent** argument convinced even the skeptical judges that the defendant deserved acquittal.',
    word: 'cogent',
    options: ['Weak and unconvincing', 'Clear and persuasive', 'Long and tedious', 'Emotional and biased'],
    correctIndex: 1,
    explanation: '"Cogent" means clear, logical, and convincing. The fact that it convinced "skeptical judges" indicates a powerful, persuasive argument.',
    difficulty: 'medium'
  },
  {
    id: 'v3',
    sentence: 'The witness\'s **equivocal** statements made it difficult for the jury to determine the truth.',
    word: 'equivocal',
    options: ['Clear and direct', 'Ambiguous and unclear', 'Truthful and honest', 'Loud and aggressive'],
    correctIndex: 1,
    explanation: '"Equivocal" means ambiguous or open to more than one interpretation. The difficulty in "determining the truth" suggests unclear statements.',
    difficulty: 'hard'
  },
  {
    id: 'v4',
    sentence: 'Despite the **egregious** violations of human rights, the international community remained silent.',
    word: 'egregious',
    options: ['Minor and trivial', 'Shocking and outrageous', 'Accidental and unintentional', 'Legal and justified'],
    correctIndex: 1,
    explanation: '"Egregious" means outstandingly bad or shocking. Human rights violations being described this way indicates severe misconduct.',
    difficulty: 'hard'
  },
  {
    id: 'v5',
    sentence: 'The government\'s **draconian** measures to curb dissent were criticized by human rights organizations.',
    word: 'draconian',
    options: ['Lenient and forgiving', 'Harsh and severe', 'Democratic and fair', 'Temporary and limited'],
    correctIndex: 1,
    explanation: '"Draconian" means excessively harsh and severe. Measures to "curb dissent" being criticized suggests oppressive actions.',
    difficulty: 'hard'
  },
  {
    id: 'v6',
    sentence: 'The judge\'s **impartial** verdict earned respect from both parties in the dispute.',
    word: 'impartial',
    options: ['Biased toward one side', 'Fair and unbiased', 'Incomplete and partial', 'Harsh and punitive'],
    correctIndex: 1,
    explanation: '"Impartial" means treating all rivals or disputants equally; fair. Earning respect from "both parties" indicates fairness.',
    difficulty: 'easy'
  },
  {
    id: 'v7',
    sentence: 'The accused\'s **contrite** apology suggested genuine remorse for his actions.',
    word: 'contrite',
    options: ['Insincere and fake', 'Feeling remorse and regret', 'Angry and defiant', 'Confused and uncertain'],
    correctIndex: 1,
    explanation: '"Contrite" means feeling or expressing remorse. "Genuine remorse" directly relates to this meaning.',
    difficulty: 'medium'
  },
  {
    id: 'v8',
    sentence: 'The **ostensible** reason for the law was public safety, but critics argued it served political interests.',
    word: 'ostensible',
    options: ['True and genuine', 'Stated but not necessarily true', 'Hidden and secret', 'Legal and binding'],
    correctIndex: 1,
    explanation: '"Ostensible" means stated or appearing to be true, but not necessarily so. The contrast with "critics argued" suggests the stated reason may not be the real one.',
    difficulty: 'hard'
  },
  {
    id: 'v9',
    sentence: 'The witness provided **corroborating** evidence that supported the plaintiff\'s claims.',
    word: 'corroborating',
    options: ['Contradicting', 'Supporting and confirming', 'Irrelevant', 'Fabricated'],
    correctIndex: 1,
    explanation: '"Corroborating" means confirming or giving support to a statement or theory. "Supported the claims" is the key context clue.',
    difficulty: 'medium'
  },
  {
    id: 'v10',
    sentence: 'The lawyer\'s **perfunctory** cross-examination suggested he had already given up on the case.',
    word: 'perfunctory',
    options: ['Thorough and detailed', 'Done without care or interest', 'Aggressive and hostile', 'Clever and strategic'],
    correctIndex: 1,
    explanation: '"Perfunctory" means carried out with minimum effort. "Given up on the case" suggests lack of genuine effort.',
    difficulty: 'hard'
  },
  {
    id: 'v11',
    sentence: 'The **arbitrary** arrest of journalists sparked widespread condemnation from press freedom advocates.',
    word: 'arbitrary',
    options: ['Legal and justified', 'Based on random choice without reason', 'Temporary and brief', 'Violent and forceful'],
    correctIndex: 1,
    explanation: '"Arbitrary" means based on random choice rather than reason or system. Condemnation from advocates suggests unjustified action.',
    difficulty: 'medium'
  },
  {
    id: 'v12',
    sentence: 'The court found the evidence **inadmissible** due to procedural violations during its collection.',
    word: 'inadmissible',
    options: ['Acceptable in court', 'Not allowed as evidence', 'Extremely valuable', 'Partially useful'],
    correctIndex: 1,
    explanation: '"Inadmissible" means not accepted as valid, especially in court. "Procedural violations" explain why it cannot be used.',
    difficulty: 'easy'
  },
  {
    id: 'v13',
    sentence: 'The **nebulous** provisions of the law left room for conflicting interpretations.',
    word: 'nebulous',
    options: ['Clear and specific', 'Vague and unclear', 'Strict and rigid', 'Modern and updated'],
    correctIndex: 1,
    explanation: '"Nebulous" means unclear, vague, or ill-defined. "Conflicting interpretations" suggests lack of clarity.',
    difficulty: 'hard'
  },
  {
    id: 'v14',
    sentence: 'The defendant\'s **culpability** in the fraud was established beyond reasonable doubt.',
    word: 'culpability',
    options: ['Innocence', 'Responsibility for wrongdoing', 'Wealth and assets', 'Mental state'],
    correctIndex: 1,
    explanation: '"Culpability" means responsibility for a fault or wrong. Being "established" in a fraud context means proven guilty.',
    difficulty: 'medium'
  },
  {
    id: 'v15',
    sentence: 'The **unprecedented** ruling set a new standard for environmental protection laws.',
    word: 'unprecedented',
    options: ['Expected and routine', 'Never done before', 'Illegal and void', 'Temporary and limited'],
    correctIndex: 1,
    explanation: '"Unprecedented" means never done or known before. Setting a "new standard" indicates something first of its kind.',
    difficulty: 'easy'
  },
  {
    id: 'v16',
    sentence: 'The **litigious** nature of the company resulted in numerous lawsuits against competitors.',
    word: 'litigious',
    options: ['Peaceful and cooperative', 'Prone to engaging in lawsuits', 'Secretive and private', 'Charitable and generous'],
    correctIndex: 1,
    explanation: '"Litigious" means tending to go to law to settle disputes. "Numerous lawsuits" directly indicates this tendency.',
    difficulty: 'medium'
  },
  {
    id: 'v17',
    sentence: 'The statute\'s **retroactive** application meant it could punish actions committed before its enactment.',
    word: 'retroactive',
    options: ['Forward-looking only', 'Applying to past events', 'Limited in scope', 'Temporary in nature'],
    correctIndex: 1,
    explanation: '"Retroactive" means applying to the past as well as the future. "Before its enactment" is the key phrase.',
    difficulty: 'medium'
  },
  {
    id: 'v18',
    sentence: 'The **jurisprudence** on privacy rights has evolved significantly over the past decade.',
    word: 'jurisprudence',
    options: ['Study of law and legal theory', 'Medical science', 'Political ideology', 'Economic policy'],
    correctIndex: 0,
    explanation: '"Jurisprudence" means the theory or philosophy of law. The context of "privacy rights" and legal evolution confirms this.',
    difficulty: 'easy'
  },
  {
    id: 'v19',
    sentence: 'The court\'s **obiter dictum** on the matter, while not binding, influenced subsequent judgments.',
    word: 'obiter dictum',
    options: ['Binding legal ruling', 'Judge\'s passing remark not essential to decision', 'Written law', 'Constitutional provision'],
    correctIndex: 1,
    explanation: '"Obiter dictum" is a judge\'s incidental expression of opinion, not essential to the decision and not binding precedent.',
    difficulty: 'hard'
  },
  {
    id: 'v20',
    sentence: 'The **de facto** government controlled the territory despite lacking legal recognition.',
    word: 'de facto',
    options: ['Legally recognized', 'Existing in fact, regardless of legal status', 'Temporary', 'Democratically elected'],
    correctIndex: 1,
    explanation: '"De facto" means existing in fact, whether or not legally recognized. "Lacking legal recognition" but still in control.',
    difficulty: 'medium'
  }
];

export default function VocabContextPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [bookmarked, setBookmarked] = useState<Set<string>>(new Set());
  const [answeredQuestions, setAnsweredQuestions] = useState<Set<string>>(new Set());

  const currentQuestion = vocabQuestions[currentIndex];
  const progress = ((currentIndex + 1) / vocabQuestions.length) * 100;

  const handleAnswer = (index: number) => {
    if (showResult) return;
    setSelectedAnswer(index);
    setShowResult(true);
    setAnsweredQuestions(prev => new Set([...prev, currentQuestion.id]));
    if (index === currentQuestion.correctIndex) {
      setScore(prev => prev + 1);
    }
  };

  const nextQuestion = () => {
    if (currentIndex < vocabQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    }
  };

  const resetQuiz = () => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnsweredQuestions(new Set());
  };

  const toggleBookmark = () => {
    setBookmarked(prev => {
      const newSet = new Set(prev);
      if (newSet.has(currentQuestion.id)) {
        newSet.delete(currentQuestion.id);
      } else {
        newSet.add(currentQuestion.id);
      }
      return newSet;
    });
  };

  const highlightWord = (sentence: string, word: string) => {
    const parts = sentence.split(`**${word}**`);
    if (parts.length === 2) {
      return (
        <>
          {parts[0]}
          <span className="bg-yellow-300 dark:bg-yellow-600 px-1 rounded font-bold">{word}</span>
          {parts[1]}
        </>
      );
    }
    return sentence;
  };

  const difficultyColors = {
    easy: 'bg-green-500/10 text-green-600',
    medium: 'bg-yellow-500/10 text-yellow-600',
    hard: 'bg-red-500/10 text-red-600'
  };

  const isComplete = currentIndex === vocabQuestions.length - 1 && showResult;

  if (isComplete) {
    const percentage = Math.round((score / vocabQuestions.length) * 100);
    return (
      <div className="space-y-6 max-w-2xl mx-auto">
        <Card className="text-center p-8">
          <Trophy className={`h-16 w-16 mx-auto mb-4 ${percentage >= 70 ? 'text-yellow-500' : 'text-gray-400'}`} />
          <h1 className="text-2xl font-bold mb-2">Quiz Complete!</h1>
          <p className="text-4xl font-bold text-primary mb-2">{score}/{vocabQuestions.length}</p>
          <p className="text-muted-foreground mb-4">{percentage}% Accuracy</p>
          
          <div className="grid grid-cols-3 gap-4 my-6 text-sm">
            <div className="p-3 bg-green-500/10 rounded-lg">
              <p className="font-bold text-green-600">{score}</p>
              <p className="text-muted-foreground">Correct</p>
            </div>
            <div className="p-3 bg-red-500/10 rounded-lg">
              <p className="font-bold text-red-600">{vocabQuestions.length - score}</p>
              <p className="text-muted-foreground">Wrong</p>
            </div>
            <div className="p-3 bg-blue-500/10 rounded-lg">
              <p className="font-bold text-blue-600">{bookmarked.size}</p>
              <p className="text-muted-foreground">Bookmarked</p>
            </div>
          </div>

          <Button onClick={resetQuiz} className="w-full">
            <RotateCcw className="h-4 w-4 mr-2" /> Try Again
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold tracking-tight flex items-center gap-2">
          <BookOpen className="h-6 w-6 text-blue-500" />
          Vocabulary in Context
        </h1>
        <p className="text-muted-foreground">
          Learn CLAT-level words through contextual sentences
        </p>
      </div>

      {/* Progress */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Question {currentIndex + 1} of {vocabQuestions.length}</span>
          <span>Score: {score}/{answeredQuestions.size}</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      {/* Question Card */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <Badge className={difficultyColors[currentQuestion.difficulty]}>
              {currentQuestion.difficulty}
            </Badge>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleBookmark}
              className={bookmarked.has(currentQuestion.id) ? 'text-yellow-500' : ''}
            >
              <Bookmark className="h-5 w-5" />
            </Button>
          </div>
          <CardTitle className="text-lg mt-2">
            What does "{currentQuestion.word}" mean in this context?
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Sentence with highlighted word */}
          <div className="p-4 bg-muted/30 rounded-lg text-lg leading-relaxed">
            {highlightWord(currentQuestion.sentence, currentQuestion.word)}
          </div>

          {/* Options */}
          <div className="space-y-2">
            {currentQuestion.options.map((option, index) => {
              let buttonClass = "w-full justify-start text-left h-auto py-3 px-4";
              if (showResult) {
                if (index === currentQuestion.correctIndex) {
                  buttonClass += " bg-green-500/20 border-green-500 text-green-700";
                } else if (index === selectedAnswer && index !== currentQuestion.correctIndex) {
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
                  {showResult && index === currentQuestion.correctIndex && (
                    <CheckCircle2 className="ml-auto h-5 w-5 text-green-500" />
                  )}
                  {showResult && index === selectedAnswer && index !== currentQuestion.correctIndex && (
                    <XCircle className="ml-auto h-5 w-5 text-red-500" />
                  )}
                </Button>
              );
            })}
          </div>

          {/* Explanation */}
          {showResult && (
            <div className={`p-4 rounded-lg ${selectedAnswer === currentQuestion.correctIndex ? 'bg-green-500/10' : 'bg-red-500/10'}`}>
              <p className="font-semibold mb-1">
                {selectedAnswer === currentQuestion.correctIndex ? '✓ Correct!' : '✗ Incorrect'}
              </p>
              <p className="text-sm text-muted-foreground">{currentQuestion.explanation}</p>
            </div>
          )}
        </CardContent>
        <CardFooter>
          {showResult && (
            <Button onClick={nextQuestion} className="w-full">
              {currentIndex === vocabQuestions.length - 1 ? 'See Results' : 'Next Question'}
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          )}
        </CardFooter>
      </Card>

      {/* Tips */}
      <Card className="bg-blue-500/5 border-blue-500/20">
        <CardContent className="p-4">
          <p className="text-sm font-medium text-blue-600 mb-1">💡 CLAT Vocab Tip</p>
          <p className="text-sm text-muted-foreground">
            Don't memorize definitions in isolation. Always learn words in context - look at surrounding words and sentence meaning to understand usage.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
