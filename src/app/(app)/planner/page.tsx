import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { studyEvents } from "@/lib/data";
import { Badge } from "@/components/ui/badge";

export default function PlannerPage() {
  const eventDates = studyEvents.map(event => event.date);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Study Planner</h1>
        <p className="text-muted-foreground">Organize your study schedule and set reminders.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
           <CardHeader>
            <CardTitle>Your Calendar</CardTitle>
            <CardDescription>Days with scheduled events are highlighted.</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
             <Calendar
                mode="multiple"
                selected={eventDates}
                className="rounded-md border"
             />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
            <CardDescription>Your next few study sessions.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {studyEvents.map((event, index) => (
                <div key={index} className="flex items-start gap-4">
                   <div className="flex flex-col items-center">
                    <span className="font-bold text-lg text-primary">{event.date.toLocaleDateString('en-US', { day: '2-digit' })}</span>
                    <span className="text-xs text-muted-foreground">{event.date.toLocaleDateString('en-US', { month: 'short' })}</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold">{event.title}</p>
                    <p className="text-sm text-muted-foreground">{event.description}</p>
                  </div>
                </div>
              ))}
              {studyEvents.length === 0 && <p className="text-muted-foreground">No upcoming events planned.</p>}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
