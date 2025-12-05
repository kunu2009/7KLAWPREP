"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Scale, CheckCircle2, XCircle, ArrowRight, RotateCcw, Trophy, Lightbulb, BarChart3, FileText } from 'lucide-react';

interface Statement {
  id: string;
  text: string;
  type: 'fact' | 'opinion';
  explanation: string;
  topic: string;
}

const statementSets: Statement[][] = [
  // Set 1: Legal & Constitutional
  [
    { id: 's1-1', text: 'The Indian Constitution was adopted on November 26, 1949.', type: 'fact', explanation: 'This is a verifiable historical date that can be confirmed from official records.', topic: 'Constitution' },
    { id: 's1-2', text: 'The Constitution of India is the best constitution in the world.', type: 'opinion', explanation: '"Best" is subjective. Different people may value different constitutional features.', topic: 'Constitution' },
    { id: 's1-3', text: 'Article 21 guarantees the right to life and personal liberty.', type: 'fact', explanation: 'This can be verified by reading Article 21 of the Constitution.', topic: 'Fundamental Rights' },
    { id: 's1-4', text: 'The Supreme Court has 34 judges including the Chief Justice.', type: 'fact', explanation: 'This is the current sanctioned strength and can be verified from official sources.', topic: 'Judiciary' },
    { id: 's1-5', text: 'Judges in India are overpaid compared to their workload.', type: 'opinion', explanation: '"Overpaid" is a value judgment. What counts as fair pay is subjective.', topic: 'Judiciary' },
    { id: 's1-6', text: 'The Kesavananda Bharati case was decided in 1973.', type: 'fact', explanation: 'This is a verifiable historical date of the judgment.', topic: 'Landmark Cases' },
    { id: 's1-7', text: 'The basic structure doctrine is the most important judicial innovation.', type: 'opinion', explanation: '"Most important" is a subjective assessment. Scholars may disagree.', topic: 'Landmark Cases' },
    { id: 's1-8', text: 'India has a federal structure with features of unitary government.', type: 'fact', explanation: 'This is an academically accepted description of Indian federalism.', topic: 'Constitution' },
    { id: 's1-9', text: 'Parliament should have more power over the judiciary.', type: 'opinion', explanation: '"Should" indicates a normative claim about what ought to be, not what is.', topic: 'Separation of Powers' },
    { id: 's1-10', text: 'The President of India must act on the aid and advice of the Council of Ministers.', type: 'fact', explanation: 'Article 74(1) clearly states this requirement.', topic: 'Executive' },
  ],
  // Set 2: Current Affairs & GK
  [
    { id: 's2-1', text: 'India hosted the G20 Summit in 2023.', type: 'fact', explanation: 'This is a verifiable historical event that occurred in New Delhi.', topic: 'International' },
    { id: 's2-2', text: 'India\'s G20 presidency was the most successful in G20 history.', type: 'opinion', explanation: '"Most successful" is subjective. Success can be measured in many ways.', topic: 'International' },
    { id: 's2-3', text: 'The Chandrayaan-3 mission landed on the Moon\'s south pole region in August 2023.', type: 'fact', explanation: 'This is a verifiable scientific achievement by ISRO.', topic: 'Science' },
    { id: 's2-4', text: 'ISRO is more efficient than NASA.', type: 'opinion', explanation: '"More efficient" is a comparative judgment that depends on chosen metrics.', topic: 'Science' },
    { id: 's2-5', text: 'The Bharatiya Nyaya Sanhita replaced the Indian Penal Code in 2023.', type: 'fact', explanation: 'This is a verifiable legislative change enacted by Parliament.', topic: 'Laws' },
    { id: 's2-6', text: 'The new criminal laws are a significant improvement over colonial-era laws.', type: 'opinion', explanation: '"Significant improvement" involves value judgment. Critics and supporters disagree.', topic: 'Laws' },
    { id: 's2-7', text: 'India\'s population exceeded 1.4 billion in 2023.', type: 'fact', explanation: 'This is verifiable census/UN population data.', topic: 'Demographics' },
    { id: 's2-8', text: 'Population growth is India\'s biggest problem.', type: 'opinion', explanation: '"Biggest problem" is a subjective prioritization. Others may cite different issues.', topic: 'Demographics' },
    { id: 's2-9', text: 'The Digital Personal Data Protection Act was enacted in 2023.', type: 'fact', explanation: 'This is a verifiable legislative fact.', topic: 'Laws' },
    { id: 's2-10', text: 'Data privacy regulations will harm business innovation.', type: 'opinion', explanation: 'This is a predictive claim with value judgment. Evidence can support either view.', topic: 'Laws' },
  ],
  // Set 3: Legal Reasoning & Logic
  [
    { id: 's3-1', text: 'Murder is punishable under the Bharatiya Nyaya Sanhita.', type: 'fact', explanation: 'This is a verifiable legal provision.', topic: 'Criminal Law' },
    { id: 's3-2', text: 'Capital punishment should be abolished in India.', type: 'opinion', explanation: '"Should" indicates a normative preference, not a factual claim.', topic: 'Criminal Law' },
    { id: 's3-3', text: 'The burden of proof in criminal cases lies on the prosecution.', type: 'fact', explanation: 'This is an established legal principle in criminal law.', topic: 'Procedure' },
    { id: 's3-4', text: 'Criminals are treated too leniently by Indian courts.', type: 'opinion', explanation: '"Too leniently" is a value judgment. Standards of appropriate punishment vary.', topic: 'Judiciary' },
    { id: 's3-5', text: 'Bail is a matter of right in bailable offences.', type: 'fact', explanation: 'This is a legal provision clearly stated in procedural law.', topic: 'Procedure' },
    { id: 's3-6', text: 'The adversarial system is better than the inquisitorial system.', type: 'opinion', explanation: '"Better" is subjective. Different legal systems have different merits.', topic: 'Jurisprudence' },
    { id: 's3-7', text: 'A contract requires offer, acceptance, and consideration to be valid.', type: 'fact', explanation: 'These are established elements of a valid contract under Indian Contract Act.', topic: 'Contract Law' },
    { id: 's3-8', text: 'Verbal contracts are unreliable and should be banned.', type: 'opinion', explanation: '"Should be banned" is a policy recommendation, not a fact.', topic: 'Contract Law' },
    { id: 's3-9', text: 'Tort law in India is largely based on common law principles.', type: 'fact', explanation: 'This is an academically accepted description of Indian tort law.', topic: 'Tort Law' },
    { id: 's3-10', text: 'India needs a comprehensive tort legislation like the UK.', type: 'opinion', explanation: '"Needs" implies a judgment about what is desirable policy.', topic: 'Tort Law' },
  ],
  // Set 4: Economy & Policy
  [
    { id: 's4-1', text: 'India\'s GDP growth rate was over 7% in 2023-24.', type: 'fact', explanation: 'This is verifiable economic data from official sources.', topic: 'Economy' },
    { id: 's4-2', text: 'India\'s economic growth is sustainable in the long term.', type: 'opinion', explanation: '"Sustainable" involves prediction and value judgment about future trends.', topic: 'Economy' },
    { id: 's4-3', text: 'The GST was implemented on July 1, 2017.', type: 'fact', explanation: 'This is a verifiable date of implementation.', topic: 'Taxation' },
    { id: 's4-4', text: 'GST has simplified the tax structure significantly.', type: 'opinion', explanation: '"Significantly simplified" is a judgment. Complexity is relative.', topic: 'Taxation' },
    { id: 's4-5', text: 'The RBI is responsible for monetary policy in India.', type: 'fact', explanation: 'This is RBI\'s statutory mandate under the RBI Act.', topic: 'Banking' },
    { id: 's4-6', text: 'RBI\'s interest rate decisions are always correct.', type: 'opinion', explanation: '"Always correct" is an absolute judgment. Economists often disagree.', topic: 'Banking' },
    { id: 's4-7', text: 'FDI limits in various sectors are set by government policy.', type: 'fact', explanation: 'This is a verifiable regulatory framework.', topic: 'Investment' },
    { id: 's4-8', text: 'More FDI liberalization would benefit the economy.', type: 'opinion', explanation: '"Would benefit" is a predictive judgment with competing views.', topic: 'Investment' },
    { id: 's4-9', text: 'India is the fifth-largest economy by nominal GDP.', type: 'fact', explanation: 'This is verifiable from IMF/World Bank rankings.', topic: 'Economy' },
    { id: 's4-10', text: 'India will become a superpower by 2047.', type: 'opinion', explanation: 'This is a prediction about the future, not a verifiable fact.', topic: 'Economy' },
  ],
];

export default function FactOpinionPage() {
  const [currentSetIndex, setCurrentSetIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, 'fact' | 'opinion' | null>>({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [totalAttempted, setTotalAttempted] = useState(0);

  const currentSet = statementSets[currentSetIndex];

  const handleAnswer = (statementId: string, answer: 'fact' | 'opinion') => {
    if (showResults) return;
    setAnswers(prev => ({ ...prev, [statementId]: answer }));
  };

  const checkAnswers = () => {
    setShowResults(true);
    let correct = 0;
    currentSet.forEach(statement => {
      if (answers[statement.id] === statement.type) {
        correct++;
      }
    });
    setScore(prev => prev + correct);
    setTotalAttempted(prev => prev + currentSet.length);
  };

  const nextSet = () => {
    if (currentSetIndex < statementSets.length - 1) {
      setCurrentSetIndex(prev => prev + 1);
      setAnswers({});
      setShowResults(false);
    }
  };

  const resetAll = () => {
    setCurrentSetIndex(0);
    setAnswers({});
    setShowResults(false);
    setScore(0);
    setTotalAttempted(0);
  };

  const answeredCount = Object.values(answers).filter(a => a !== null).length;
  const currentSetScore = currentSet.filter(s => answers[s.id] === s.type).length;

  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold tracking-tight flex items-center gap-2">
          <Scale className="h-6 w-6 text-purple-500" />
          Fact vs. Opinion Sorter
        </h1>
        <p className="text-muted-foreground">
          Train to distinguish verifiable facts from subjective opinions
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3">
        <Card className="p-3 text-center">
          <BarChart3 className="h-5 w-5 mx-auto mb-1 text-blue-500" />
          <p className="text-lg font-bold">{score}/{totalAttempted}</p>
          <p className="text-xs text-muted-foreground">Total Score</p>
        </Card>
        <Card className="p-3 text-center">
          <FileText className="h-5 w-5 mx-auto mb-1 text-green-500" />
          <p className="text-lg font-bold">Set {currentSetIndex + 1}/{statementSets.length}</p>
          <p className="text-xs text-muted-foreground">Current Set</p>
        </Card>
        <Card className="p-3 text-center">
          <Trophy className="h-5 w-5 mx-auto mb-1 text-yellow-500" />
          <p className="text-lg font-bold">{totalAttempted > 0 ? Math.round((score / totalAttempted) * 100) : 0}%</p>
          <p className="text-xs text-muted-foreground">Accuracy</p>
        </Card>
      </div>

      {/* Progress */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Answered: {answeredCount}/{currentSet.length}</span>
          {showResults && <span>This Set: {currentSetScore}/{currentSet.length}</span>}
        </div>
        <Progress value={(answeredCount / currentSet.length) * 100} className="h-2" />
      </div>

      {/* Instructions */}
      {!showResults && (
        <Card className="bg-purple-500/5 border-purple-500/20">
          <CardContent className="p-4">
            <p className="text-sm font-medium text-purple-600 mb-2">📊 How to Identify</p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-semibold text-green-600">📊 FACT</p>
                <ul className="text-muted-foreground text-xs space-y-1">
                  <li>• Can be verified/proven</li>
                  <li>• Uses specific data/dates</li>
                  <li>• Objective statements</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-orange-600">💭 OPINION</p>
                <ul className="text-muted-foreground text-xs space-y-1">
                  <li>• Value judgments (best, worst)</li>
                  <li>• Uses "should", "must", "need"</li>
                  <li>• Predictions about future</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Statements */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Set {currentSetIndex + 1}: Classify Each Statement</CardTitle>
          <CardDescription>Click Fact or Opinion for each statement</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {currentSet.map((statement, index) => {
            const userAnswer = answers[statement.id];
            const isCorrect = userAnswer === statement.type;
            
            let bgClass = "bg-muted/30";
            if (showResults) {
              bgClass = isCorrect ? "bg-green-500/10 border-green-500" : "bg-red-500/10 border-red-500";
            }

            return (
              <div key={statement.id} className={`p-4 rounded-lg border ${bgClass}`}>
                <div className="flex items-start gap-3">
                  <span className="font-bold text-muted-foreground">{index + 1}.</span>
                  <div className="flex-1">
                    <p className="mb-2">{statement.text}</p>
                    <Badge variant="outline" className="text-xs mb-2">{statement.topic}</Badge>
                    
                    <div className="flex gap-2 mt-2">
                      <Button
                        size="sm"
                        variant={userAnswer === 'fact' ? "default" : "outline"}
                        onClick={() => handleAnswer(statement.id, 'fact')}
                        disabled={showResults}
                        className={`${showResults && statement.type === 'fact' ? 'bg-green-500 hover:bg-green-600' : ''}`}
                      >
                        📊 Fact
                      </Button>
                      <Button
                        size="sm"
                        variant={userAnswer === 'opinion' ? "default" : "outline"}
                        onClick={() => handleAnswer(statement.id, 'opinion')}
                        disabled={showResults}
                        className={`${showResults && statement.type === 'opinion' ? 'bg-green-500 hover:bg-green-600' : ''}`}
                      >
                        💭 Opinion
                      </Button>
                      
                      {showResults && (
                        <span className="ml-2 flex items-center">
                          {isCorrect ? (
                            <CheckCircle2 className="h-5 w-5 text-green-500" />
                          ) : (
                            <XCircle className="h-5 w-5 text-red-500" />
                          )}
                        </span>
                      )}
                    </div>

                    {showResults && (
                      <p className="text-sm text-muted-foreground mt-2 p-2 bg-muted/50 rounded">
                        <span className="font-medium">{statement.type === 'fact' ? '📊 Fact' : '💭 Opinion'}:</span> {statement.explanation}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </CardContent>
        <CardFooter className="flex gap-2">
          {!showResults ? (
            <Button 
              onClick={checkAnswers} 
              className="flex-1"
              disabled={answeredCount < currentSet.length}
            >
              Check Answers ({answeredCount}/{currentSet.length})
            </Button>
          ) : (
            <>
              <Button variant="outline" onClick={resetAll}>
                <RotateCcw className="h-4 w-4 mr-2" /> Reset All
              </Button>
              {currentSetIndex < statementSets.length - 1 && (
                <Button onClick={nextSet} className="flex-1">
                  Next Set <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              )}
            </>
          )}
        </CardFooter>
      </Card>

      {/* Tips */}
      <Card className="bg-blue-500/5 border-blue-500/20">
        <CardContent className="p-4">
          <div className="flex gap-2">
            <Lightbulb className="h-5 w-5 text-blue-500 shrink-0" />
            <div>
              <p className="text-sm font-medium text-blue-600">CLAT Strategy</p>
              <p className="text-sm text-muted-foreground">
                In CLAT, distinguishing fact from opinion is crucial for both English and Logical Reasoning sections. 
                Watch for loaded words like "best," "worst," "should," "must" - these usually signal opinions.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
