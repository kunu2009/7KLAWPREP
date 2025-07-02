import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { notes } from "@/lib/data";
import { Link as LinkIcon } from "lucide-react";
import Link from 'next/link';

export default function NotesPage() {
  return (
    <div className="space-y-6">
       <div>
        <h1 className="text-2xl font-bold tracking-tight">Topic Notes</h1>
        <p className="text-muted-foreground">Quick-reference notes for key subjects.</p>
      </div>
      <Tabs defaultValue={notes[0].topic} className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-6">
          {notes.map((note) => (
            <TabsTrigger key={note.topic} value={note.topic}>{note.topic}</TabsTrigger>
          ))}
        </TabsList>
        {notes.map((note) => (
          <TabsContent key={note.topic} value={note.topic}>
            <Card>
              <CardHeader>
                <CardTitle>{note.topic}</CardTitle>
                <CardDescription>A brief overview of important concepts.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="leading-relaxed">{note.content}</p>
                {note.links.length > 0 && (
                   <div>
                     <h3 className="font-semibold mb-2 flex items-center gap-2"><LinkIcon className="h-4 w-4"/> Useful Links</h3>
                     <ul className="list-disc list-inside space-y-1">
                        {note.links.map(link => (
                            <li key={link.url}>
                                <Link href={link.url} target="_blank" rel="noopener noreferrer" className="text-primary underline-offset-4 hover:underline">
                                    {link.title}
                                </Link>
                            </li>
                        ))}
                     </ul>
                   </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
