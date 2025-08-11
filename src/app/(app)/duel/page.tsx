
"use client";

import { useState, useEffect, useCallback } from 'react';
import { doc, getDoc, onSnapshot, setDoc, updateDoc, collection, addDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase-config';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { mcqs, revisionTopics } from '@/lib/data';
import type { MCQ, Duel, Player } from '@/lib/types';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Swords, Copy, Check, Hourglass, Play } from 'lucide-react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';


const shuffleMcqs = (array: MCQ[]): MCQ[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

// The page now accepts searchParams as a prop, as is standard in Next.js App Router
export default function DuelPage({ searchParams }: { searchParams: { join?: string } }) {
  const [duelId, setDuelId] = useState<string | null>(null);
  const [duel, setDuel] = useState<Duel | null>(null);
  const [playerId, setPlayerId] = useState<string | null>(null);
  const [isCopied, setIsCopied] = useState(false);
  const [topic, setTopic] = useState('');
  const [numQuestions, setNumQuestions] = useState(5);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const joinDuelId = searchParams.join;

  useEffect(() => {
    let pId = sessionStorage.getItem('playerId');
    if (!pId) {
      pId = `player_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
      sessionStorage.setItem('playerId', pId);
    }
    setPlayerId(pId);
  }, []);

  const joinDuel = useCallback(async (idToJoin: string) => {
    if (!playerId) return;
    setIsLoading(true);
    const duelRef = doc(db, 'duels', idToJoin);
    try {
        const duelSnap = await getDoc(duelRef);

        if (duelSnap.exists()) {
            const existingDuel = duelSnap.data() as Duel;
            if (Object.keys(existingDuel.players).length < 2 && !existingDuel.players[playerId]) {
                const player2: Player = { id: playerId, score: 0, answers: {}, time: 0 };
                await updateDoc(duelRef, {
                [`players.${playerId}`]: player2,
                status: 'active'
                });
            }
            setDuelId(idToJoin);
        } else {
            toast({ variant: 'destructive', title: 'Duel not found or is already full.' });
        }
    } catch (error) {
        toast({ variant: 'destructive', title: 'Could not join duel.', description: 'Please check the link or try again later.' });
        console.error("Error joining duel:", error);
    }
    setIsLoading(false);
  }, [playerId, toast]);

  useEffect(() => {
    if (joinDuelId && playerId) {
      joinDuel(joinDuelId);
    }
  }, [playerId, joinDuelId, joinDuel]);

  useEffect(() => {
    if (!duelId) return;

    const unsub = onSnapshot(doc(db, 'duels', duelId), (doc) => {
      if (doc.exists()) {
        setDuel(doc.data() as Duel);
      } else {
        toast({ variant: 'destructive', title: 'Duel not found.' });
        setDuelId(null);
      }
    });

    return () => unsub();
  }, [duelId, toast]);

  const createDuel = async () => {
    if (!playerId || !topic) {
        toast({ variant: 'destructive', title: 'Please select a topic first.' });
        return;
    }
    setIsLoading(true);

    const filteredMcqs = mcqs.filter(q => q.topic === topic);
    if(filteredMcqs.length < numQuestions) {
        toast({ variant: 'destructive', title: 'Not enough questions for this topic. Please choose fewer questions or another topic.' });
        setIsLoading(false);
        return;
    }
    const questions = shuffleMcqs(filteredMcqs).slice(0, numQuestions).map(({ id, question, options, correctAnswerIndex }) => ({ id, question, options, correctAnswerIndex }));

    const player1: Player = { id: playerId, score: 0, answers: {}, time: 0 };
    const newDuel: Duel = {
      questions,
      players: { [playerId]: player1 },
      status: 'waiting',
      createdAt: Date.now(),
      topic: topic,
      questionCount: numQuestions,
      currentQuestion: 0,
    };
    try {
      const docRef = await addDoc(collection(db, 'duels'), newDuel);
      setDuelId(docRef.id);
    } catch (e) {
      console.error("Error creating duel: ", e);
      toast({ variant: 'destructive', title: 'Failed to create duel.' });
    }
    setIsLoading(false);
  };
  
  const copyLink = () => {
    const link = `${window.location.origin}${window.location.pathname}?join=${duelId}`;
    navigator.clipboard.writeText(link);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  if (!duelId || !duel) {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">1v1 Duel Arena</h1>
          <p className="text-muted-foreground">Challenge a friend to a real-time quiz duel!</p>
        </div>
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle>Create a New Duel</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
             <div className="space-y-2">
                <Label htmlFor="topic-select">Select a Topic</Label>
                <Select onValueChange={setTopic} value={topic}>
                    <SelectTrigger id="topic-select">
                        <SelectValue placeholder="Choose a topic..." />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                        {revisionTopics.map((topic) => (
                            <SelectItem key={topic} value={topic}>
                            {topic}
                            </SelectItem>
                        ))}
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
             <div className="space-y-2">
                <Label htmlFor="num-questions">Number of Questions</Label>
                <Select onValueChange={(v) => setNumQuestions(Number(v))} defaultValue="5">
                    <SelectTrigger id="num-questions">
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="5">5</SelectItem>
                        <SelectItem value="10">10</SelectItem>
                        <SelectItem value="15">15</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <Button onClick={createDuel} disabled={isLoading || !topic} className="w-full">
              {isLoading ? <Loader2 className="animate-spin" /> : <Swords className="mr-2" />}
              Create Duel
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (duel.status === 'waiting') {
    return (
       <div className="text-center space-y-4">
        <h2 className="text-2xl font-bold">Waiting for opponent...</h2>
        <p className="text-muted-foreground">Share this link with a friend to start the duel.</p>
        <Card className="max-w-md mx-auto">
            <CardContent className="p-4 flex items-center space-x-2">
                <Input value={`${window.location.origin}${window.location.pathname}?join=${duelId}`} readOnly />
                <Button onClick={copyLink} size="icon" variant="outline">
                    {isCopied ? <Check className="text-green-500" /> : <Copy />}
                </Button>
            </CardContent>
        </Card>
        <Loader2 className="h-8 w-8 animate-spin mx-auto text-primary" />
       </div>
    );
  }

  if (duel.status === 'active') {
    return <QuizArea duel={duel} duelId={duelId} playerId={playerId!} />;
  }

  if (duel.status === 'finished') {
    return <DuelResults duel={duel} playerId={playerId!} />;
  }
  
  return null;
}

const QuizArea = ({ duel, duelId, playerId }: { duel: Duel, duelId: string, playerId: string }) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [startTime, setStartTime] = useState(Date.now());
  const { toast } = useToast();

  const currentQIndex = duel.currentQuestion;
  const question = duel.questions[currentQIndex];
  const playerState = duel.players[playerId];

  const handleAnswer = async () => {
    if (selectedOption === null) return;

    const timeTaken = Date.now() - startTime;
    const isCorrect = selectedOption === question.correctAnswerIndex;

    const newScore = playerState.score + (isCorrect ? 10 : 0);
    const newTime = playerState.time + timeTaken;
    const newAnswers = { ...playerState.answers, [question.id]: selectedOption };

    try {
      await updateDoc(doc(db, 'duels', duelId), {
        [`players.${playerId}.score`]: newScore,
        [`players.${playerId}.time`]: newTime,
        [`players.${playerId}.answers`]: newAnswers,
      });

      // Logic to advance question must be handled carefully to avoid race conditions.
      // A simple approach is letting one player (e.g., the creator) advance the question.
      // Here, we check if both players have answered.
      const duelDoc = await getDoc(doc(db, 'duels', duelId));
      if(duelDoc.exists()){
          const updatedDuel = duelDoc.data() as Duel;
          const allPlayersAnswered = Object.values(updatedDuel.players).every(p => p.answers[question.id] !== undefined);

          if (allPlayersAnswered) {
              if (updatedDuel.currentQuestion < updatedDuel.questions.length - 1) {
                  await updateDoc(doc(db, 'duels', duelId), {
                      currentQuestion: updatedDuel.currentQuestion + 1
                  });
              } else {
                  await updateDoc(doc(db, 'duels', duelId), {
                      status: 'finished'
                  });
              }
          }
      }

    } catch (e) {
      console.error("Error submitting answer: ", e);
      toast({ variant: 'destructive', title: 'Failed to submit answer.' });
    } finally {
        setSelectedOption(null);
        setStartTime(Date.now());
    }
  };
  
  const hasAnswered = playerState?.answers[question.id] !== undefined;

  return (
    <div className="space-y-4">
        <Card>
            <CardHeader>
                <CardDescription>Question {currentQIndex + 1} of {duel.questions.length}</CardDescription>
                <CardTitle>{question.question}</CardTitle>
            </CardHeader>
            <CardContent>
                <RadioGroup
                    value={selectedOption?.toString()}
                    onValueChange={(value) => setSelectedOption(parseInt(value))}
                    disabled={hasAnswered}
                    className="space-y-2"
                >
                    {question.options.map((option, index) => (
                        <div key={index} className="flex items-center space-x-2">
                        <RadioGroupItem value={index.toString()} id={`q-${index}`} />
                        <Label htmlFor={`q-${index}`} className="cursor-pointer">
                            {option}
                        </Label>
                        </div>
                    ))}
                </RadioGroup>
            </CardContent>
        </Card>
        {hasAnswered ? (
            <div className="text-center p-4 rounded-md bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 flex items-center justify-center gap-2">
                <Hourglass/> Waiting for opponent...
            </div>
        ) : (
            <Button onClick={handleAnswer} disabled={selectedOption === null} className="w-full">
                Submit Answer
            </Button>
        )}
    </div>
  );
};


const DuelResults = ({ duel, playerId }: { duel: Duel, playerId: string }) => {
    const players = Object.values(duel.players);
    const winner = players.reduce((prev, current) => {
        if (current.score > prev.score) return current;
        if (current.score === prev.score && current.time < prev.time) return current;
        return prev;
    });

    const isWinner = winner.id === playerId;

    return (
        <Card className="text-center">
            <CardHeader>
                <CardTitle>{isWinner ? '🏆 You Won! 🏆' : 'Better Luck Next Time!'}</CardTitle>
                <CardDescription>The duel has ended. Here are the results.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                {players.map(p => (
                    <div key={p.id} className={cn("p-4 rounded-lg border", p.id === winner.id ? "bg-green-100 dark:bg-green-900/30 border-green-500" : "bg-muted")}>
                        <h3 className="font-bold">{p.id === playerId ? "You" : "Opponent"}</h3>
                        <p>Score: {p.score}</p>
                        <p>Total Time: {(p.time / 1000).toFixed(2)}s</p>
                    </div>
                ))}
                 <Button onClick={() => window.location.href = '/duel'}>Play Again</Button>
            </CardContent>
        </Card>
    );
}

    