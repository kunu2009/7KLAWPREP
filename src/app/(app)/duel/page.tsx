
"use client";

import { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { mcqs, revisionTopics } from '@/lib/data';
import type { MCQ } from '@/lib/types';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Swords, Copy, Check, Hourglass, User } from 'lucide-react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { v4 as uuidv4 } from 'uuid';

interface Player {
  id: string;
  name: string;
  score: number;
  answers: { [questionId: string]: number };
}

interface Duel {
  id: string;
  questions: Omit<MCQ, 'explanation' | 'topic'>[];
  players: Player[];
  status: 'waiting' | 'active' | 'finished';
  topic: string;
}

// A mock "database" using local storage for demonstration
const getDuel = (id: string): Duel | null => {
  if (typeof window === 'undefined') return null;
  const duel = localStorage.getItem(`duel_${id}`);
  return duel ? JSON.parse(duel) : null;
};

const saveDuel = (duel: Duel) => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(`duel_${duel.id}`, JSON.stringify(duel));
};

const getLocalPlayer = (): Player | null => {
  if (typeof window === 'undefined') return null;
  let playerJson = localStorage.getItem('localPlayer');
  if (playerJson) {
    return JSON.parse(playerJson);
  }
  const newPlayer: Player = { id: uuidv4(), name: `Player_${uuidv4().substring(0, 4)}`, score: 0, answers: {} };
  localStorage.setItem('localPlayer', JSON.stringify(newPlayer));
  return newPlayer;
};


export default function DuelPage({ searchParams }: { searchParams: { join?: string } }) {
  const [localPlayer, setLocalPlayer] = useState<Player | null>(null);
  const [duel, setDuel] = useState<Duel | null>(null);
  const [isCopied, setIsCopied] = useState(false);
  const [topic, setTopic] = useState('');
  const [numQuestions, setNumQuestions] = useState(5);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  const joinDuelId = searchParams.join;
  
  useEffect(() => {
    setLocalPlayer(getLocalPlayer());
    setIsLoading(false);
  }, []);

  const joinDuel = useCallback((idToJoin: string) => {
    if (!localPlayer) return;
    setIsLoading(true);
    const existingDuel = getDuel(idToJoin);
    if (existingDuel) {
      if (existingDuel.players.length < 2 && !existingDuel.players.find(p => p.id === localPlayer.id)) {
        existingDuel.players.push({ ...localPlayer, score: 0, answers: {} });
        existingDuel.status = 'active';
        saveDuel(existingDuel);
      }
      setDuel(existingDuel);
    } else {
      toast({ variant: 'destructive', title: 'Duel not found or is already full.' });
    }
    setIsLoading(false);
  }, [localPlayer, toast]);

  useEffect(() => {
    if (joinDuelId && localPlayer) {
      joinDuel(joinDuelId);
    }
  }, [joinDuelId, joinDuel, localPlayer]);

  useEffect(() => {
    if (!duel || duel.status !== 'active') return;

    const interval = setInterval(() => {
      const updatedDuel = getDuel(duel.id);
      if (updatedDuel) {
        setDuel(updatedDuel);
      }
    }, 2000); // Poll for updates every 2 seconds

    return () => clearInterval(interval);
  }, [duel]);


  const createDuel = async () => {
    if (!localPlayer) return;
    if (!topic) {
        toast({ variant: 'destructive', title: 'Please select a topic first.' });
        return;
    }
    setIsLoading(true);

    const filteredMcqs = mcqs.filter(q => q.topic === topic);
    if(filteredMcqs.length < numQuestions) {
        toast({ variant: 'destructive', title: 'Not enough questions for this topic.' });
        setIsLoading(false);
        return;
    }
    const questions = shuffleMcqs(filteredMcqs).slice(0, numQuestions).map(({ id, question, options, correctAnswerIndex }) => ({ id, question, options, correctAnswerIndex }));

    const newDuel: Duel = {
      id: uuidv4(),
      questions,
      players: [{ ...localPlayer, score: 0, answers: {} }],
      status: 'waiting',
      topic: topic,
    };
    saveDuel(newDuel);
    setDuel(newDuel);
    setIsLoading(false);
  };
  
  const copyLink = () => {
    if(!duel) return;
    const link = `${window.location.origin}${window.location.pathname}?join=${duel.id}`;
    navigator.clipboard.writeText(link);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  if (isLoading || !localPlayer) {
    return (
        <div className="flex items-center justify-center h-full">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
    );
  }

  if (!duel) {
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
                <Label>Your Player Name: {localPlayer.name}</Label>
             </div>
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
                <Input value={`${window.location.origin}/duel?join=${duel.id}`} readOnly />
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
    return <QuizArea duel={duel} localPlayer={localPlayer} />;
  }

  if (duel.status === 'finished') {
    return <DuelResults duel={duel} localPlayer={localPlayer} />;
  }
  
  return null;
}

const QuizArea = ({ duel, localPlayer }: { duel: Duel, localPlayer: Player }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [myPlayerState, setMyPlayerState] = useState(duel.players.find(p => p.id === localPlayer.id)!)
  
    const question = duel.questions[currentQuestionIndex];
  
    const handleAnswer = () => {
      if (selectedOption === null) return;
  
      const isCorrect = selectedOption === question.correctAnswerIndex;
      const updatedPlayerState = {
          ...myPlayerState,
          score: myPlayerState.score + (isCorrect ? 10 : 0),
          answers: {
              ...myPlayerState.answers,
              [question.id]: selectedOption
          }
      };
      
      setMyPlayerState(updatedPlayerState);

      const updatedDuel = getDuel(duel.id);
      if(updatedDuel) {
          const playerIndex = updatedDuel.players.findIndex(p => p.id === localPlayer.id);
          updatedDuel.players[playerIndex] = updatedPlayerState;
          saveDuel(updatedDuel);
      }
      
      if (currentQuestionIndex < duel.questions.length - 1) {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
          setSelectedOption(null);
      } else {
          // Quiz finished for this player
          const finalDuel = getDuel(duel.id)!;
          if(finalDuel.players.every(p => Object.keys(p.answers).length === duel.questions.length)){
              finalDuel.status = 'finished';
              saveDuel(finalDuel);
          }
      }
    };
    
    const hasAnsweredAll = Object.keys(myPlayerState.answers).length === duel.questions.length;
    const opponent = duel.players.find(p => p.id !== localPlayer.id);

    if (hasAnsweredAll) {
         return (
            <div className="text-center p-4 rounded-md bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 flex items-center justify-center gap-2">
                <Hourglass/> Quiz finished! Waiting for {opponent?.name || 'opponent'} to finish...
            </div>
         )
    }
  
    return (
      <div className="space-y-4">
          <div className="flex justify-around text-center">
              <div><p className="font-bold">{myPlayerState.name} (You)</p><p>Score: {myPlayerState.score}</p></div>
              {opponent && <div><p className="font-bold">{opponent.name}</p><p>Score: {opponent.score}</p></div>}
          </div>
          <Card>
              <CardHeader>
                  <CardDescription>Question {currentQuestionIndex + 1} of {duel.questions.length}</CardDescription>
                  <CardTitle>{question.question}</CardTitle>
              </CardHeader>
              <CardContent>
                  <RadioGroup
                      value={selectedOption?.toString()}
                      onValueChange={(value) => setSelectedOption(parseInt(value))}
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
          <Button onClick={handleAnswer} disabled={selectedOption === null} className="w-full">
              Submit Answer
          </Button>
      </div>
    );
  };


const DuelResults = ({ duel, localPlayer }: { duel: Duel, localPlayer: Player }) => {
    const players = duel.players;
    const winner = players.reduce((prev, current) => (current.score > prev.score) ? current : prev);
    const isWinner = winner.id === localPlayer.id;

    return (
        <Card className="text-center">
            <CardHeader>
                <CardTitle>{isWinner ? '🏆 You Won! 🏆' : 'Better Luck Next Time!'}</CardTitle>
                <CardDescription>The duel has ended. Here are the results.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                {players.map(p => (
                    <div key={p.id} className={cn("p-4 rounded-lg border", p.id === winner.id ? "bg-green-100 dark:bg-green-900/30 border-green-500" : "bg-muted")}>
                        <h3 className="font-bold">{p.name} {p.id === localPlayer.id && '(You)'}</h3>
                        <p>Score: {p.score}</p>
                    </div>
                ))}
                 <Button onClick={() => window.location.href = '/duel'}>Play Again</Button>
            </CardContent>
        </Card>
    );
}

    