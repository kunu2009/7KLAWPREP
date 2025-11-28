"use client";

import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Brain, Send, Loader2, User, Sparkles, BookOpen, Scale, Lightbulb, HelpCircle } from "lucide-react";
import { answerLawQuestion } from "@/ai/flows/answer-law-questions";

interface Message {
    id: string;
    role: 'user' | 'assistant';
    content: string;
    timestamp: Date;
}

const suggestedQuestions = [
    { icon: Scale, text: "What is the doctrine of separation of powers?" },
    { icon: BookOpen, text: "Explain Article 21 of the Indian Constitution" },
    { icon: Lightbulb, text: "What are the essential elements of a valid contract?" },
    { icon: HelpCircle, text: "What is mens rea in criminal law?" },
];

export default function AssistantPage() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        // Scroll to bottom when new messages arrive
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            role: 'user',
            content: input.trim(),
            timestamp: new Date(),
        };

        setMessages(prev => [...prev, userMessage]);
        setInput("");
        setIsLoading(true);

        try {
            const response = await answerLawQuestion({ question: userMessage.content });
            
            const assistantMessage: Message = {
                id: (Date.now() + 1).toString(),
                role: 'assistant',
                content: response.answer,
                timestamp: new Date(),
            };

            setMessages(prev => [...prev, assistantMessage]);
        } catch (error) {
            console.error("Error getting response:", error);
            const errorMessage: Message = {
                id: (Date.now() + 1).toString(),
                role: 'assistant',
                content: "I apologize, but I encountered an error while processing your question. Please try again.",
                timestamp: new Date(),
            };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
            inputRef.current?.focus();
        }
    };

    const handleSuggestedQuestion = (question: string) => {
        setInput(question);
        inputRef.current?.focus();
    };

    return (
        <div className="flex flex-col h-[calc(100vh-100px)]">
            {/* Header */}
            <div className="p-4 border-b">
                <h1 className="text-2xl font-bold tracking-tight flex items-center gap-2">
                    <Brain className="h-6 w-6 text-primary" />
                    AI Assistant
                </h1>
                <p className="text-muted-foreground">Your personal legal study companion powered by AI</p>
            </div>

            {/* Chat Area */}
            <ScrollArea className="flex-1 p-4" ref={scrollRef}>
                {messages.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-full py-12">
                        <div className="p-4 rounded-full bg-primary/10 mb-4">
                            <Sparkles className="h-12 w-12 text-primary" />
                        </div>
                        <h2 className="text-xl font-semibold mb-2">How can I help you today?</h2>
                        <p className="text-muted-foreground text-center mb-6 max-w-md">
                            Ask me anything about law, legal concepts, CLAT preparation, or study strategies. I'm here to help!
                        </p>
                        
                        {/* Suggested Questions */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-2xl">
                            {suggestedQuestions.map((q, index) => (
                                <Button
                                    key={index}
                                    variant="outline"
                                    className="h-auto py-3 px-4 justify-start text-left"
                                    onClick={() => handleSuggestedQuestion(q.text)}
                                >
                                    <q.icon className="h-4 w-4 mr-3 text-primary shrink-0" />
                                    <span className="text-sm">{q.text}</span>
                                </Button>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="space-y-4 max-w-3xl mx-auto">
                        {messages.map((message) => (
                            <div
                                key={message.id}
                                className={`flex gap-3 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                {message.role === 'assistant' && (
                                    <div className="shrink-0 p-2 rounded-full bg-primary/10 h-fit">
                                        <Brain className="h-4 w-4 text-primary" />
                                    </div>
                                )}
                                <div
                                    className={`rounded-lg px-4 py-3 max-w-[80%] ${
                                        message.role === 'user'
                                            ? 'bg-primary text-primary-foreground'
                                            : 'bg-muted'
                                    }`}
                                >
                                    <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                                    <p className={`text-xs mt-1 ${
                                        message.role === 'user' ? 'text-primary-foreground/70' : 'text-muted-foreground'
                                    }`}>
                                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                    </p>
                                </div>
                                {message.role === 'user' && (
                                    <div className="shrink-0 p-2 rounded-full bg-primary h-fit">
                                        <User className="h-4 w-4 text-primary-foreground" />
                                    </div>
                                )}
                            </div>
                        ))}
                        
                        {isLoading && (
                            <div className="flex gap-3 justify-start">
                                <div className="shrink-0 p-2 rounded-full bg-primary/10 h-fit">
                                    <Brain className="h-4 w-4 text-primary" />
                                </div>
                                <div className="rounded-lg px-4 py-3 bg-muted">
                                    <div className="flex items-center gap-2">
                                        <Loader2 className="h-4 w-4 animate-spin" />
                                        <span className="text-sm text-muted-foreground">Thinking...</span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </ScrollArea>

            {/* Input Area */}
            <div className="border-t p-4">
                <form onSubmit={handleSubmit} className="flex gap-2 max-w-3xl mx-auto">
                    <Input
                        ref={inputRef}
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Ask a law-related question..."
                        disabled={isLoading}
                        className="flex-1"
                    />
                    <Button type="submit" disabled={isLoading || !input.trim()}>
                        {isLoading ? (
                            <Loader2 className="h-4 w-4 animate-spin" />
                        ) : (
                            <Send className="h-4 w-4" />
                        )}
                    </Button>
                </form>
                <p className="text-xs text-muted-foreground text-center mt-2">
                    AI responses are for educational purposes. Always verify with authoritative sources.
                </p>
            </div>
        </div>
    );
}