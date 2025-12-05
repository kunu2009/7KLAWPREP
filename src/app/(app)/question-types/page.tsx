"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Target, CheckCircle2, XCircle, ArrowRight, RotateCcw, Trophy, Lightbulb, TrendingUp, TrendingDown, HelpCircle, FileText, User, Brain } from 'lucide-react';

interface QuestionTypeDrill {
  id: string;
  type: 'strengthen' | 'weaken' | 'inference' | 'assumption' | 'tone' | 'summary' | 'principle';
  passage?: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  tip: string;
}

const questionTypeData: Record<string, { label: string; icon: any; color: string; description: string }> = {
  strengthen: { label: 'Strengthen', icon: TrendingUp, color: 'green', description: 'Arguments that support the conclusion' },
  weaken: { label: 'Weaken', icon: TrendingDown, color: 'red', description: 'Arguments that undermine the conclusion' },
  inference: { label: 'Inference', icon: Brain, color: 'purple', description: 'What can be logically concluded' },
  assumption: { label: 'Assumption', icon: HelpCircle, color: 'orange', description: 'Unstated premises in the argument' },
  tone: { label: "Author's Tone", icon: User, color: 'blue', description: "Identify writer's attitude" },
  summary: { label: 'Para-Summary', icon: FileText, color: 'cyan', description: 'Main idea extraction' },
  principle: { label: 'Principle + Fact', icon: Target, color: 'pink', description: 'Apply principle to given facts' }
};

const drills: QuestionTypeDrill[] = [
  // STRENGTHEN
  {
    id: 'str1',
    type: 'strengthen',
    passage: 'Studies show that students who attend coaching classes perform better in CLAT. This proves that coaching is essential for CLAT success.',
    question: 'Which of the following, if true, would STRENGTHEN the argument?',
    options: [
      'Some toppers did not attend any coaching',
      'Students who attend coaching also study more hours independently',
      'Coaching institutes have access to better study materials',
      'The difficulty of CLAT has increased over the years'
    ],
    correctIndex: 2,
    explanation: 'Option C strengthens the argument by providing an additional reason why coaching leads to better performance - access to better materials.',
    tip: 'Look for options that provide additional support or evidence for the conclusion.'
  },
  {
    id: 'str2',
    type: 'strengthen',
    passage: 'Crime rates have decreased in cities with more CCTV cameras. Therefore, installing CCTV cameras reduces crime.',
    question: 'Which statement would strengthen this conclusion?',
    options: [
      'Some criminals wear masks to avoid identification',
      'Cities with CCTV cameras also have more police patrols',
      'Studies show criminals avoid areas where they know cameras are present',
      'CCTV cameras are expensive to maintain'
    ],
    correctIndex: 2,
    explanation: 'Option C provides a causal mechanism explaining WHY CCTV reduces crime - criminals actively avoid surveilled areas.',
    tip: 'The best strengthener explains the causal link between the evidence and conclusion.'
  },
  // WEAKEN
  {
    id: 'wk1',
    type: 'weaken',
    passage: 'Country X has strict gun control laws and low gun violence. Therefore, strict gun laws reduce violence.',
    question: 'Which of the following would WEAKEN this argument?',
    options: [
      'Country X has a strong economy',
      'Country Y has strict gun laws but high violence rates',
      'Gun control laws are difficult to enforce',
      'Country X also has low rates of other crimes'
    ],
    correctIndex: 1,
    explanation: 'Option B provides a counter-example where strict laws did not reduce violence, weakening the causal claim.',
    tip: 'Counter-examples are powerful weakeners. Look for cases where the supposed cause exists but the effect does not.'
  },
  {
    id: 'wk2',
    type: 'weaken',
    passage: 'Students who eat breakfast score higher on exams. Parents should ensure children eat breakfast before exams.',
    question: 'Which statement weakens this recommendation?',
    options: [
      'Breakfast provides essential nutrients',
      'Students who eat breakfast also sleep more and study more regularly',
      'Many schools provide free breakfast programs',
      'Breakfast improves concentration'
    ],
    correctIndex: 1,
    explanation: 'Option B suggests correlation, not causation - breakfast eaters may score higher due to other healthy habits, not breakfast itself.',
    tip: 'Correlation vs. causation arguments are classic weakeners. Look for alternative explanations.'
  },
  // INFERENCE
  {
    id: 'inf1',
    type: 'inference',
    passage: 'All judges in India must have at least 10 years of legal experience. Justice Kumar was appointed to the Supreme Court in 2020.',
    question: 'Which of the following can be INFERRED?',
    options: [
      'Justice Kumar is the best judge in India',
      'Justice Kumar had legal experience before 2020',
      'Justice Kumar will serve until 2030',
      'Justice Kumar graduated from a top law school'
    ],
    correctIndex: 1,
    explanation: 'If all judges need 10+ years experience and Kumar became a judge, he must have had prior legal experience. This is a valid inference.',
    tip: 'Valid inferences must necessarily follow from the given information. Avoid assumptions beyond the text.'
  },
  {
    id: 'inf2',
    type: 'inference',
    passage: 'No lawyer can practice in the Supreme Court without an Advocate-on-Record certificate. Adv. Sharma argued a case in the Supreme Court yesterday.',
    question: 'What can be inferred about Adv. Sharma?',
    options: [
      'He is the best advocate in India',
      'He has an Advocate-on-Record certificate',
      'He has won many Supreme Court cases',
      'He specializes in constitutional law'
    ],
    correctIndex: 1,
    explanation: 'If no one can practice without the certificate and Sharma practiced, he must have the certificate. This is a logical necessity.',
    tip: 'Use deductive logic: If A is required for B, and B happened, then A must be true.'
  },
  // ASSUMPTION
  {
    id: 'asm1',
    type: 'assumption',
    passage: 'Online education has increased access to quality learning. Therefore, educational inequality will decrease.',
    question: 'What assumption does this argument make?',
    options: [
      'Online education is better than offline education',
      'All students have equal access to internet and devices',
      'Teachers prefer online teaching',
      'Online courses are cheaper than offline courses'
    ],
    correctIndex: 1,
    explanation: 'The argument assumes everyone can access online education equally. Without this, increased online education won\'t reduce inequality.',
    tip: 'Find the hidden bridge between evidence and conclusion. What must be true for the conclusion to follow?'
  },
  {
    id: 'asm2',
    type: 'assumption',
    passage: 'The death penalty deters crime because potential criminals fear execution. Therefore, countries should adopt the death penalty.',
    question: 'Which assumption underlies this argument?',
    options: [
      'The death penalty is morally justified',
      'Criminals rationally consider punishment before committing crimes',
      'All countries have similar crime rates',
      'Imprisonment is not effective'
    ],
    correctIndex: 1,
    explanation: 'The deterrence argument assumes criminals make rational calculations about punishment. If crimes are impulsive, deterrence fails.',
    tip: 'Ask: "What must be true for this reasoning to work?"'
  },
  // TONE
  {
    id: 'tn1',
    type: 'tone',
    passage: 'The government\'s new policy, while well-intentioned, suffers from the same bureaucratic inefficiencies that have plagued previous attempts at reform. One wonders if the policymakers have learned anything from past failures.',
    question: "What is the author's tone?",
    options: [
      'Completely supportive',
      'Neutral and objective',
      'Critical but measured',
      'Extremely hostile'
    ],
    correctIndex: 2,
    explanation: 'The author acknowledges good intentions but criticizes inefficiencies. The tone is critical but not hostile - it\'s measured criticism.',
    tip: 'Look for qualifying words like "while," "but," "however" to identify nuanced tones.'
  },
  {
    id: 'tn2',
    type: 'tone',
    passage: 'The court\'s judgment represents a landmark moment in Indian jurisprudence. By recognizing privacy as a fundamental right, the bench has finally brought Indian constitutional law in line with global human rights standards.',
    question: "The author's attitude toward the judgment is:",
    options: [
      'Critical and dismissive',
      'Appreciative and positive',
      'Neutral and detached',
      'Skeptical and doubtful'
    ],
    correctIndex: 1,
    explanation: 'Words like "landmark," "finally," and positive framing indicate appreciation and approval of the judgment.',
    tip: 'Positive adjectives and affirmative language indicate supportive tone.'
  },
  // SUMMARY
  {
    id: 'sum1',
    type: 'summary',
    passage: 'Artificial intelligence is transforming the legal profession in unprecedented ways. Document review that once took weeks can now be completed in hours. Contract analysis has become more accurate. However, critics argue that AI cannot replace the human judgment essential for courtroom advocacy and client counseling. The legal profession must adapt to harness AI\'s benefits while preserving the irreplaceable human elements of legal practice.',
    question: 'Which best summarizes the main idea?',
    options: [
      'AI will completely replace lawyers in the future',
      'AI is useless for legal work',
      'AI enhances legal work but cannot replace human judgment',
      'Lawyers should resist all forms of technology'
    ],
    correctIndex: 2,
    explanation: 'The passage discusses both AI benefits and limitations, concluding that both technology and human skills are needed.',
    tip: 'Good summaries capture the main argument without being too narrow or too broad.'
  },
  {
    id: 'sum2',
    type: 'summary',
    passage: 'The Right to Information Act 2005 was enacted to promote transparency in governance. Citizens can now request information from public authorities. However, implementation has been uneven across states. Some states have proactive disclosure systems while others lag behind. The effectiveness of RTI depends largely on the administrative will to implement it properly.',
    question: 'The central idea of this passage is:',
    options: [
      'RTI Act is a complete failure',
      'All states have implemented RTI perfectly',
      'RTI success varies based on implementation quality',
      'Citizens should not use RTI'
    ],
    correctIndex: 2,
    explanation: 'The passage emphasizes that while RTI exists, its effectiveness depends on how well each state implements it.',
    tip: 'Identify the controlling idea that all other sentences support.'
  },
  // PRINCIPLE + FACT
  {
    id: 'pr1',
    type: 'principle',
    passage: 'PRINCIPLE: A person is liable for negligence if they breach a duty of care owed to another, causing foreseeable harm.\n\nFACT: Dr. Mehta, a surgeon, performed an operation while intoxicated. The patient suffered complications that would not have occurred with a sober surgeon.',
    question: 'Is Dr. Mehta liable for negligence?',
    options: [
      'No, because doctors are not liable for complications',
      'Yes, because he breached his duty of care by operating while intoxicated',
      'No, because the patient consented to surgery',
      'Yes, but only if the patient dies'
    ],
    correctIndex: 1,
    explanation: 'Dr. Mehta owed a duty of care to his patient. Operating while intoxicated breached that duty. The complications were foreseeable harm caused by this breach.',
    tip: 'Apply the principle step by step: Was there a duty? Was it breached? Did it cause harm?'
  },
  {
    id: 'pr2',
    type: 'principle',
    passage: 'PRINCIPLE: Self-defense is a valid defense if the force used is proportionate to the threat faced and there was no opportunity to retreat.\n\nFACT: A attacked B with bare hands. B pulled out a gun and shot A dead, even though B could have easily run away.',
    question: 'Can B claim self-defense?',
    options: [
      'Yes, because A attacked first',
      'No, because B used disproportionate force and could have retreated',
      'Yes, because guns are legal',
      'No, because self-defense is never valid'
    ],
    correctIndex: 1,
    explanation: 'Two conditions failed: (1) Gun against bare hands is disproportionate, and (2) B could have retreated. Both conditions of the principle are violated.',
    tip: 'Check ALL conditions of the principle. If any condition fails, the principle may not apply.'
  },
  {
    id: 'pr3',
    type: 'principle',
    passage: 'PRINCIPLE: A contract entered into under coercion is voidable at the option of the party coerced.\n\nFACT: X threatened to release embarrassing photos of Y unless Y signed a property transfer deed. Y signed the deed.',
    question: 'What is the status of the contract?',
    options: [
      'The contract is void and has no effect',
      'The contract is valid and binding',
      'The contract is voidable - Y can choose to cancel it',
      'X can cancel the contract'
    ],
    correctIndex: 2,
    explanation: 'The principle states contracts under coercion are voidable (not void) at the option of the coerced party (Y). Y can choose to affirm or cancel it.',
    tip: 'Pay attention to precise legal terminology: void vs. voidable, at whose option.'
  }
];

export default function QuestionTypesPage() {
  const [selectedType, setSelectedType] = useState<string>('strengthen');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [scores, setScores] = useState<Record<string, { correct: number; total: number }>>({
    strengthen: { correct: 0, total: 0 },
    weaken: { correct: 0, total: 0 },
    inference: { correct: 0, total: 0 },
    assumption: { correct: 0, total: 0 },
    tone: { correct: 0, total: 0 },
    summary: { correct: 0, total: 0 },
    principle: { correct: 0, total: 0 }
  });

  const filteredDrills = drills.filter(d => d.type === selectedType);
  const currentDrill = filteredDrills[currentIndex];
  const typeInfo = questionTypeData[selectedType];

  const handleAnswer = (index: number) => {
    if (showResult) return;
    setSelectedAnswer(index);
    setShowResult(true);
    
    setScores(prev => ({
      ...prev,
      [selectedType]: {
        correct: prev[selectedType].correct + (index === currentDrill.correctIndex ? 1 : 0),
        total: prev[selectedType].total + 1
      }
    }));
  };

  const nextQuestion = () => {
    if (currentIndex < filteredDrills.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    }
  };

  const handleTypeChange = (type: string) => {
    setSelectedType(type);
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setShowResult(false);
  };

  const resetType = () => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setShowResult(false);
  };

  const TypeIcon = typeInfo?.icon || Target;

  if (!currentDrill) {
    return (
      <div className="text-center py-12">
        <p>No questions available for this type yet.</p>
        <Button onClick={() => handleTypeChange('strengthen')} className="mt-4">
          Try Strengthen Questions
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold tracking-tight flex items-center gap-2">
          <Target className="h-6 w-6 text-blue-500" />
          Question-Type Drills
        </h1>
        <p className="text-muted-foreground">
          Master each CLAT question type separately
        </p>
      </div>

      {/* Type Selector Tabs */}
      <div className="flex flex-wrap gap-2">
        {Object.entries(questionTypeData).map(([key, data]) => {
          const Icon = data.icon;
          const score = scores[key];
          return (
            <Button
              key={key}
              variant={selectedType === key ? "default" : "outline"}
              size="sm"
              onClick={() => handleTypeChange(key)}
              className="gap-1"
            >
              <Icon className="h-4 w-4" />
              {data.label}
              {score.total > 0 && (
                <Badge variant="secondary" className="ml-1 text-xs">
                  {score.correct}/{score.total}
                </Badge>
              )}
            </Button>
          );
        })}
      </div>

      {/* Current Type Info */}
      <Card className={`bg-${typeInfo.color}-500/5 border-${typeInfo.color}-500/20`}>
        <CardContent className="p-4">
          <div className="flex items-center gap-2">
            <TypeIcon className={`h-5 w-5 text-${typeInfo.color}-500`} />
            <span className="font-semibold">{typeInfo.label}</span>
          </div>
          <p className="text-sm text-muted-foreground mt-1">{typeInfo.description}</p>
        </CardContent>
      </Card>

      {/* Progress */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Question {currentIndex + 1} of {filteredDrills.length}</span>
          <span>Score: {scores[selectedType].correct}/{scores[selectedType].total}</span>
        </div>
        <Progress value={((currentIndex + 1) / filteredDrills.length) * 100} className="h-2" />
      </div>

      {/* Question Card */}
      <Card>
        <CardHeader>
          <Badge className={`w-fit bg-${typeInfo.color}-500/10 text-${typeInfo.color}-600`}>
            {typeInfo.label}
          </Badge>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Passage */}
          {currentDrill.passage && (
            <div className="p-4 bg-muted/30 rounded-lg whitespace-pre-line">
              {currentDrill.passage}
            </div>
          )}

          {/* Question */}
          <p className="font-medium text-lg">{currentDrill.question}</p>

          {/* Options */}
          <div className="space-y-2">
            {currentDrill.options.map((option, index) => {
              let buttonClass = "w-full justify-start text-left h-auto py-3 px-4";
              if (showResult) {
                if (index === currentDrill.correctIndex) {
                  buttonClass += " bg-green-500/20 border-green-500";
                } else if (index === selectedAnswer && index !== currentDrill.correctIndex) {
                  buttonClass += " bg-red-500/20 border-red-500";
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
                  {showResult && index === currentDrill.correctIndex && (
                    <CheckCircle2 className="ml-auto h-5 w-5 text-green-500 shrink-0" />
                  )}
                  {showResult && index === selectedAnswer && index !== currentDrill.correctIndex && (
                    <XCircle className="ml-auto h-5 w-5 text-red-500 shrink-0" />
                  )}
                </Button>
              );
            })}
          </div>

          {/* Explanation */}
          {showResult && (
            <div className="space-y-3">
              <div className={`p-4 rounded-lg ${selectedAnswer === currentDrill.correctIndex ? 'bg-green-500/10' : 'bg-red-500/10'}`}>
                <p className="font-semibold mb-1">
                  {selectedAnswer === currentDrill.correctIndex ? '✓ Correct!' : '✗ Incorrect'}
                </p>
                <p className="text-sm text-muted-foreground">{currentDrill.explanation}</p>
              </div>
              
              <div className="p-3 bg-blue-500/10 rounded-lg flex gap-2">
                <Lightbulb className="h-5 w-5 text-blue-500 shrink-0" />
                <div>
                  <p className="text-sm font-medium text-blue-600">Strategy Tip</p>
                  <p className="text-sm text-muted-foreground">{currentDrill.tip}</p>
                </div>
              </div>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex gap-2">
          <Button variant="outline" onClick={resetType}>
            <RotateCcw className="h-4 w-4 mr-2" /> Reset
          </Button>
          {showResult && currentIndex < filteredDrills.length - 1 && (
            <Button onClick={nextQuestion} className="flex-1">
              Next Question <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          )}
        </CardFooter>
      </Card>

      {/* Overall Stats */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Trophy className="h-5 w-5 text-yellow-500" />
            Your Performance
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {Object.entries(scores).map(([type, score]) => {
              const info = questionTypeData[type];
              const Icon = info.icon;
              const accuracy = score.total > 0 ? Math.round((score.correct / score.total) * 100) : 0;
              return (
                <div key={type} className="p-3 rounded-lg bg-muted/30 text-center">
                  <Icon className={`h-5 w-5 mx-auto mb-1 text-${info.color}-500`} />
                  <p className="text-xs text-muted-foreground">{info.label}</p>
                  <p className="font-bold">{score.total > 0 ? `${accuracy}%` : '-'}</p>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
