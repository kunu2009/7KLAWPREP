"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, MessageSquare } from "lucide-react";

export default function AssistantPage() {
    return (
        <div className="space-y-6 p-4">
            <div>
                <h1 className="text-2xl font-bold tracking-tight">AI Assistant</h1>
                <p className="text-muted-foreground">Your personal legal study assistant.</p>
            </div>

            <Card className="flex flex-col items-center justify-center p-8 text-center h-[calc(100vh-180px)]">
                <Brain className="h-16 w-16 text-primary mb-4" />
                <CardTitle className="text-xl mb-2">How can I help you today?</CardTitle>
                <CardDescription className="mb-4">
                    Ask me anything about law, legal concepts, or study strategies.
                </CardDescription>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <MessageSquare className="h-4 w-4" />
                    <span>Chat functionality coming soon!</span>
                </div>
            </Card>
        </div>
    );
}