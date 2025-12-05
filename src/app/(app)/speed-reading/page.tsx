"use client";

import { useState, useEffect, useRef, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Slider } from '@/components/ui/slider';
import { Zap, Play, Pause, RotateCcw, Settings, Eye, Timer, Trophy, ChevronRight } from 'lucide-react';

interface SpeedReadingPassage {
  id: string;
  title: string;
  content: string;
  wordCount: number;
  questions: {
    question: string;
    options: string[];
    correctIndex: number;
  }[];
}

const passages: SpeedReadingPassage[] = [
  {
    id: 'sr1',
    title: 'Constitutional Morality',
    content: `The concept of constitutional morality goes beyond the mere letter of the Constitution. It encompasses the values, ethics, and principles that underpin the constitutional framework. Dr. B.R. Ambedkar, the chief architect of the Indian Constitution, emphasized that constitutional morality means adherence to the core principles of the Constitution. It is not about the form but about the spirit of governance. Constitutional morality requires that the organs of government must follow the constitutional norms and procedures. It demands that those in power must exercise self-restraint and respect the limits imposed by the Constitution. The Supreme Court of India has repeatedly invoked this principle to ensure that the state functions within constitutional boundaries. In the Kesavananda Bharati case, the Court held that there are certain basic features of the Constitution that cannot be amended. This doctrine of basic structure is itself a manifestation of constitutional morality. It ensures that the fundamental character of the Constitution remains intact despite amendments.`,
    wordCount: 162,
    questions: [
      {
        question: 'Who emphasized the concept of constitutional morality?',
        options: ['Jawaharlal Nehru', 'B.R. Ambedkar', 'Mahatma Gandhi', 'Sardar Patel'],
        correctIndex: 1
      },
      {
        question: 'What doctrine was established in Kesavananda Bharati case?',
        options: ['Due Process', 'Basic Structure', 'Judicial Review', 'Separation of Powers'],
        correctIndex: 1
      }
    ]
  },
  {
    id: 'sr2',
    title: 'Arbitration in India',
    content: `Arbitration has emerged as a preferred mode of dispute resolution in commercial matters. The Arbitration and Conciliation Act, 1996, governs arbitration proceedings in India. The Act is based on the UNCITRAL Model Law and aims to provide a speedy and efficient mechanism for settling disputes. One of the key principles of arbitration is party autonomy. Parties are free to choose their arbitrators, the seat of arbitration, and the procedural rules. This flexibility makes arbitration attractive for businesses. The Supreme Court has consistently supported minimal judicial intervention in arbitral proceedings. In BALCO v. Kaiser Aluminium, the Court held that the seat of arbitration determines the applicable law and the supervisory jurisdiction of courts. Recent amendments have further streamlined the process by reducing timelines and introducing provisions for fast-track arbitration. India aims to become a hub for international arbitration, competing with Singapore and London.`,
    wordCount: 148,
    questions: [
      {
        question: 'Which law governs arbitration in India?',
        options: ['Civil Procedure Code', 'Arbitration and Conciliation Act, 1996', 'Contract Act', 'Companies Act'],
        correctIndex: 1
      },
      {
        question: 'What principle allows parties to choose arbitrators?',
        options: ['Judicial Discretion', 'Party Autonomy', 'Natural Justice', 'Res Judicata'],
        correctIndex: 1
      }
    ]
  },
  {
    id: 'sr3',
    title: 'Defamation Law',
    content: `Defamation is the publication of a statement which tends to lower a person in the estimation of right-thinking members of society. In India, defamation can be both civil and criminal. Civil defamation is a tort, while criminal defamation is punishable under Section 356 of the Bharatiya Nyaya Sanhita (previously Section 499 IPC). The essential elements of defamation include a defamatory statement, publication to a third party, and identification of the plaintiff. Truth is generally a defence to defamation. Other defences include fair comment on matters of public interest, privilege (absolute and qualified), and consent. The Supreme Court in Subramanian Swamy v. Union of India upheld the constitutional validity of criminal defamation, holding that reputation is a part of the right to life under Article 21. The digital age has complicated defamation law with issues of jurisdiction and liability of intermediaries.`,
    wordCount: 145,
    questions: [
      {
        question: 'Under which BNS section is criminal defamation punishable?',
        options: ['Section 354', 'Section 356', 'Section 420', 'Section 302'],
        correctIndex: 1
      },
      {
        question: 'Which case upheld the validity of criminal defamation?',
        options: ['Maneka Gandhi v. UOI', 'Subramanian Swamy v. UOI', 'Kesavananda Bharati', 'Vishaka v. State'],
        correctIndex: 1
      }
    ]
  },
  {
    id: 'sr4',
    title: 'Environmental Law',
    content: `Environmental protection is now recognized as a fundamental duty under Article 51A(g) of the Constitution. The Supreme Court has also interpreted the right to a clean environment as part of the right to life under Article 21. Landmark cases like MC Mehta v. Union of India established the principle of absolute liability for hazardous industries. The polluter pays principle requires that those who pollute must bear the cost of remediation. The precautionary principle mandates that where there is a threat of serious environmental damage, lack of scientific certainty should not be used as a reason to postpone preventive measures. India has enacted numerous environmental laws including the Environment Protection Act, 1986, Water Prevention and Control of Pollution Act, 1974, and Air Prevention and Control of Pollution Act, 1981. The National Green Tribunal was established in 2010 to handle environmental disputes expeditiously.`,
    wordCount: 142,
    questions: [
      {
        question: 'Environmental protection is mentioned under which Article as fundamental duty?',
        options: ['Article 21', 'Article 14', 'Article 51A(g)', 'Article 32'],
        correctIndex: 2
      },
      {
        question: 'When was the National Green Tribunal established?',
        options: ['2005', '2010', '2015', '2000'],
        correctIndex: 1
      }
    ]
  },
  {
    id: 'sr5',
    title: 'Right to Privacy',
    content: `The right to privacy was declared a fundamental right by a nine-judge bench of the Supreme Court in KS Puttaswamy v. Union of India (2017). The Court overruled earlier judgments that had held privacy was not a fundamental right. Justice DY Chandrachud, writing for the majority, held that privacy is intrinsic to liberty and dignity, both of which are protected under Article 21. The judgment recognized informational privacy, bodily autonomy, and decisional privacy as facets of the right. However, the right to privacy is not absolute and can be restricted through a law that serves a legitimate state aim and is proportionate. This judgment has had far-reaching implications for laws relating to surveillance, data protection, and personal autonomy. The Digital Personal Data Protection Act, 2023 was enacted partly in response to this judgment.`,
    wordCount: 140,
    questions: [
      {
        question: 'In which case was privacy declared a fundamental right?',
        options: ['Maneka Gandhi', 'KS Puttaswamy', 'Navtej Johar', 'Vishaka'],
        correctIndex: 1
      },
      {
        question: 'How many judges were on the bench in Puttaswamy case?',
        options: ['Five', 'Seven', 'Nine', 'Eleven'],
        correctIndex: 2
      }
    ]
  }
];

export default function SpeedReadingPage() {
  const [currentPassageIndex, setCurrentPassageIndex] = useState(0);
  const [isReading, setIsReading] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [wordsPerMinute, setWordsPerMinute] = useState([250]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [showQuestions, setShowQuestions] = useState(false);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [completedPassages, setCompletedPassages] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const currentPassage = passages[currentPassageIndex];
  const words = currentPassage.content.split(' ');

  const startReading = useCallback(() => {
    setIsReading(true);
    setIsPaused(false);
    setCurrentWordIndex(0);
    setShowQuestions(false);
    setAnswers([]);
    setShowResults(false);
  }, []);

  const pauseReading = () => {
    setIsPaused(true);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const resumeReading = () => {
    setIsPaused(false);
  };

  const resetReading = () => {
    setIsReading(false);
    setIsPaused(false);
    setCurrentWordIndex(0);
    setShowQuestions(false);
    setAnswers([]);
    setShowResults(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  useEffect(() => {
    if (isReading && !isPaused) {
      const msPerWord = (60 / wordsPerMinute[0]) * 1000;
      intervalRef.current = setInterval(() => {
        setCurrentWordIndex((prev) => {
          if (prev >= words.length - 1) {
            clearInterval(intervalRef.current!);
            setIsReading(false);
            setShowQuestions(true);
            return prev;
          }
          return prev + 1;
        });
      }, msPerWord);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isReading, isPaused, wordsPerMinute, words.length]);

  const handleAnswer = (questionIndex: number, answerIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = answerIndex;
    setAnswers(newAnswers);
  };

  const submitAnswers = () => {
    setShowResults(true);
    const correctCount = answers.reduce((acc, answer, index) => {
      return acc + (answer === currentPassage.questions[index].correctIndex ? 1 : 0);
    }, 0);
    setTotalScore(prev => prev + correctCount);
    setCompletedPassages(prev => prev + 1);
  };

  const nextPassage = () => {
    if (currentPassageIndex < passages.length - 1) {
      setCurrentPassageIndex(prev => prev + 1);
      resetReading();
    }
  };

  const progress = isReading ? ((currentWordIndex + 1) / words.length) * 100 : 0;

  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold tracking-tight flex items-center gap-2">
          <Zap className="h-6 w-6 text-yellow-500" />
          Speed Reading Strip
        </h1>
        <p className="text-muted-foreground">
          Train your reading speed for CLAT passages
        </p>
      </div>

      {/* Stats Bar */}
      <div className="grid grid-cols-4 gap-3">
        <Card className="p-3 text-center">
          <Timer className="h-5 w-5 mx-auto mb-1 text-blue-500" />
          <p className="text-lg font-bold">{wordsPerMinute[0]}</p>
          <p className="text-xs text-muted-foreground">WPM</p>
        </Card>
        <Card className="p-3 text-center">
          <Eye className="h-5 w-5 mx-auto mb-1 text-green-500" />
          <p className="text-lg font-bold">{completedPassages}</p>
          <p className="text-xs text-muted-foreground">Read</p>
        </Card>
        <Card className="p-3 text-center">
          <Trophy className="h-5 w-5 mx-auto mb-1 text-yellow-500" />
          <p className="text-lg font-bold">{totalScore}</p>
          <p className="text-xs text-muted-foreground">Correct</p>
        </Card>
        <Card className="p-3 text-center">
          <Settings className="h-5 w-5 mx-auto mb-1 text-purple-500" />
          <p className="text-lg font-bold">{currentPassageIndex + 1}/{passages.length}</p>
          <p className="text-xs text-muted-foreground">Passage</p>
        </Card>
      </div>

      {/* Speed Control */}
      {!isReading && !showQuestions && (
        <Card className="p-4">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Reading Speed: {wordsPerMinute[0]} WPM</span>
              <Badge variant="outline">
                {wordsPerMinute[0] < 200 ? 'Slow' : wordsPerMinute[0] < 300 ? 'Normal' : wordsPerMinute[0] < 400 ? 'Fast' : 'Expert'}
              </Badge>
            </div>
            <Slider
              value={wordsPerMinute}
              onValueChange={setWordsPerMinute}
              min={100}
              max={500}
              step={25}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>100 WPM</span>
              <span>300 WPM (CLAT Average)</span>
              <span>500 WPM</span>
            </div>
          </div>
        </Card>
      )}

      {/* Passage Display */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-lg">{currentPassage.title}</CardTitle>
              <CardDescription>{currentPassage.wordCount} words</CardDescription>
            </div>
            <Badge variant="outline">Passage {currentPassageIndex + 1}</Badge>
          </div>
        </CardHeader>
        <CardContent>
          {!isReading && !showQuestions ? (
            <div className="text-center py-12">
              <Zap className="h-12 w-12 mx-auto mb-4 text-yellow-500" />
              <p className="text-lg mb-2">Ready to Speed Read?</p>
              <p className="text-sm text-muted-foreground mb-6">
                Words will appear one at a time. Focus on comprehension.
              </p>
              <Button onClick={startReading} size="lg">
                <Play className="h-4 w-4 mr-2" /> Start Reading
              </Button>
            </div>
          ) : showQuestions ? (
            <div className="space-y-6">
              <p className="text-center text-green-600 font-medium">
                ✓ Passage completed! Now answer the questions.
              </p>
              
              {currentPassage.questions.map((q, qIndex) => (
                <div key={qIndex} className="space-y-3">
                  <p className="font-medium">{qIndex + 1}. {q.question}</p>
                  <div className="grid grid-cols-1 gap-2">
                    {q.options.map((option, oIndex) => {
                      let optionClass = "justify-start text-left";
                      if (showResults) {
                        if (oIndex === q.correctIndex) {
                          optionClass += " bg-green-500/20 border-green-500";
                        } else if (oIndex === answers[qIndex] && oIndex !== q.correctIndex) {
                          optionClass += " bg-red-500/20 border-red-500";
                        }
                      } else if (answers[qIndex] === oIndex) {
                        optionClass += " bg-primary/20 border-primary";
                      }
                      
                      return (
                        <Button
                          key={oIndex}
                          variant="outline"
                          className={optionClass}
                          onClick={() => !showResults && handleAnswer(qIndex, oIndex)}
                          disabled={showResults}
                        >
                          {String.fromCharCode(65 + oIndex)}. {option}
                        </Button>
                      );
                    })}
                  </div>
                </div>
              ))}

              {!showResults ? (
                <Button 
                  onClick={submitAnswers} 
                  className="w-full"
                  disabled={answers.length !== currentPassage.questions.length || answers.includes(null)}
                >
                  Submit Answers
                </Button>
              ) : (
                <div className="space-y-4">
                  <div className="p-4 bg-muted rounded-lg text-center">
                    <p className="text-lg font-bold">
                      Score: {answers.reduce((acc, answer, index) => 
                        acc + (answer === currentPassage.questions[index].correctIndex ? 1 : 0), 0
                      )}/{currentPassage.questions.length}
                    </p>
                  </div>
                  {currentPassageIndex < passages.length - 1 && (
                    <Button onClick={nextPassage} className="w-full">
                      Next Passage <ChevronRight className="h-4 w-4 ml-2" />
                    </Button>
                  )}
                </div>
              )}
            </div>
          ) : (
            <div className="space-y-6">
              {/* Reading Display */}
              <div className="min-h-[200px] flex items-center justify-center bg-muted/30 rounded-lg p-8">
                <p className="text-4xl font-medium text-center transition-all">
                  {words[currentWordIndex]}
                </p>
              </div>
              
              {/* Progress */}
              <div className="space-y-2">
                <Progress value={progress} className="h-2" />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Word {currentWordIndex + 1} of {words.length}</span>
                  <span>{Math.round(progress)}%</span>
                </div>
              </div>

              {/* Controls */}
              <div className="flex gap-2 justify-center">
                {isPaused ? (
                  <Button onClick={resumeReading}>
                    <Play className="h-4 w-4 mr-2" /> Resume
                  </Button>
                ) : (
                  <Button onClick={pauseReading} variant="outline">
                    <Pause className="h-4 w-4 mr-2" /> Pause
                  </Button>
                )}
                <Button onClick={resetReading} variant="ghost">
                  <RotateCcw className="h-4 w-4 mr-2" /> Reset
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Tips */}
      <Card className="bg-yellow-500/5 border-yellow-500/20">
        <CardContent className="p-4">
          <p className="text-sm font-medium text-yellow-600 mb-1">⚡ Speed Reading Tips</p>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Don't subvocalize (say words in your head)</li>
            <li>• Focus on word groups, not individual words</li>
            <li>• Use a pointer or your finger to guide your eyes</li>
            <li>• CLAT requires ~300 WPM for comfortable timing</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
