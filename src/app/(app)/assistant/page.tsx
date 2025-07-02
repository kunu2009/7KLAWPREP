import { ChatInterface } from "@/components/chat-interface";

export default function AssistantPage() {
    return (
        <div className="h-full flex flex-col">
            <div className="mb-6">
                <h1 className="text-2xl font-bold tracking-tight">AI Doubt Assistant</h1>
                <p className="text-muted-foreground">Ask any law-related question and get instant help from our AI assistant.</p>
            </div>
            <ChatInterface />
        </div>
    );
}
