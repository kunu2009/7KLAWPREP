
"use client";

import { useState, useMemo, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { studyEvents as defaultEvents } from "@/lib/data";
import type { StudyEvent } from '@/lib/types';
import { format, addDays, startOfWeek, isSameDay, isToday, isFuture, isPast } from 'date-fns';
import { CalendarClock, Plus, Clock, BookOpen, Target, Trophy, Trash2, CheckCircle2 } from 'lucide-react';
import { useProgress } from '@/hooks/use-progress';

interface CustomEvent extends StudyEvent {
  id: string;
  type: 'study' | 'revision' | 'mock' | 'break';
  completed?: boolean;
}

const eventTypeColors: Record<string, string> = {
  study: 'bg-blue-500/10 text-blue-600 border-blue-500/20',
  revision: 'bg-purple-500/10 text-purple-600 border-purple-500/20',
  mock: 'bg-orange-500/10 text-orange-600 border-orange-500/20',
  break: 'bg-green-500/10 text-green-600 border-green-500/20',
};

const STORAGE_KEY = 'lawprep_custom_events';

export default function PlannerPage() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [customEvents, setCustomEvents] = useState<CustomEvent[]>([]);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [newEvent, setNewEvent] = useState({ title: '', description: '', type: 'study' as const });
  const { currentStreak } = useProgress();

  // Load custom events from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        setCustomEvents(parsed.map((e: CustomEvent) => ({
          ...e,
          date: new Date(e.date)
        })));
      }
    } catch (error) {
      console.error('Failed to load custom events', error);
    }
  }, []);

  // Save custom events to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(customEvents));
    } catch (error) {
      console.error('Failed to save custom events', error);
    }
  }, [customEvents]);

  // Combine default and custom events
  const allEvents = useMemo(() => {
    const defaultConverted: CustomEvent[] = defaultEvents.map((e, i) => ({
      ...e,
      id: `default-${i}`,
      type: 'study' as const,
    }));
    return [...defaultConverted, ...customEvents];
  }, [customEvents]);

  const eventDates = allEvents.map(event => event.date);

  const eventsForSelectedDay = allEvents.filter(
    event => selectedDate && isSameDay(event.date, selectedDate)
  );

  // Get week view
  const weekStart = startOfWeek(selectedDate || new Date(), { weekStartsOn: 1 });
  const weekDays = Array.from({ length: 7 }, (_, i) => addDays(weekStart, i));

  const handleAddEvent = () => {
    if (!selectedDate || !newEvent.title.trim()) return;
    
    const event: CustomEvent = {
      id: `custom-${Date.now()}`,
      date: selectedDate,
      title: newEvent.title,
      description: newEvent.description,
      type: newEvent.type,
      completed: false,
    };
    
    setCustomEvents(prev => [...prev, event]);
    setNewEvent({ title: '', description: '', type: 'study' });
    setIsAddDialogOpen(false);
  };

  const handleDeleteEvent = (id: string) => {
    setCustomEvents(prev => prev.filter(e => e.id !== id));
  };

  const handleToggleComplete = (id: string) => {
    setCustomEvents(prev => prev.map(e => 
      e.id === id ? { ...e, completed: !e.completed } : e
    ));
  };

  // Stats
  const todayEvents = allEvents.filter(e => isToday(e.date));
  const upcomingEvents = allEvents.filter(e => isFuture(e.date)).slice(0, 5);
  const completedToday = todayEvents.filter(e => (e as CustomEvent).completed).length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight flex items-center gap-2">
            <CalendarClock className="h-6 w-6 text-primary" />
            Study Planner
          </h1>
          <p className="text-muted-foreground">Organize your study schedule and track your sessions.</p>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Event
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Study Event</DialogTitle>
              <DialogDescription>
                Schedule a new study session for {selectedDate ? format(selectedDate, 'PPP') : 'the selected date'}.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <Input
                placeholder="Event title"
                value={newEvent.title}
                onChange={(e) => setNewEvent(prev => ({ ...prev, title: e.target.value }))}
              />
              <Textarea
                placeholder="Description (optional)"
                value={newEvent.description}
                onChange={(e) => setNewEvent(prev => ({ ...prev, description: e.target.value }))}
              />
              <Select 
                value={newEvent.type} 
                onValueChange={(v) => setNewEvent(prev => ({ ...prev, type: v as CustomEvent['type'] }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Event type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="study">📚 Study Session</SelectItem>
                  <SelectItem value="revision">🔄 Revision</SelectItem>
                  <SelectItem value="mock">📝 Mock Test</SelectItem>
                  <SelectItem value="break">☕ Break</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>Cancel</Button>
              <Button onClick={handleAddEvent} disabled={!newEvent.title.trim()}>Add Event</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-500/10 rounded-full">
              <Clock className="h-4 w-4 text-blue-500" />
            </div>
            <div>
              <p className="text-lg font-bold">{todayEvents.length}</p>
              <p className="text-xs text-muted-foreground">Today's Events</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-green-500/10 rounded-full">
              <CheckCircle2 className="h-4 w-4 text-green-500" />
            </div>
            <div>
              <p className="text-lg font-bold">{completedToday}/{todayEvents.length}</p>
              <p className="text-xs text-muted-foreground">Completed</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-500/10 rounded-full">
              <Target className="h-4 w-4 text-purple-500" />
            </div>
            <div>
              <p className="text-lg font-bold">{upcomingEvents.length}</p>
              <p className="text-xs text-muted-foreground">Upcoming</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-orange-500/10 rounded-full">
              <Trophy className="h-4 w-4 text-orange-500" />
            </div>
            <div>
              <p className="text-lg font-bold">{currentStreak} days</p>
              <p className="text-xs text-muted-foreground">Streak</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Week Overview */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-medium">This Week</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-7 gap-2">
            {weekDays.map((day, i) => {
              const dayEvents = allEvents.filter(e => isSameDay(e.date, day));
              const isSelected = selectedDate && isSameDay(day, selectedDate);
              return (
                <button
                  key={i}
                  onClick={() => setSelectedDate(day)}
                  className={`p-2 rounded-lg text-center transition-colors ${
                    isSelected 
                      ? 'bg-primary text-primary-foreground' 
                      : isToday(day) 
                        ? 'bg-primary/10' 
                        : 'hover:bg-muted'
                  }`}
                >
                  <p className="text-xs font-medium">{format(day, 'EEE')}</p>
                  <p className={`text-lg font-bold ${isSelected ? '' : isToday(day) ? 'text-primary' : ''}`}>
                    {format(day, 'd')}
                  </p>
                  {dayEvents.length > 0 && (
                    <div className="flex justify-center gap-0.5 mt-1">
                      {dayEvents.slice(0, 3).map((_, idx) => (
                        <div key={idx} className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-primary-foreground' : 'bg-primary'}`} />
                      ))}
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Main Content */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-[400px_1fr]">
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle>Calendar</CardTitle>
            <CardDescription>Select a date to view or add events.</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center flex-1 items-center">
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              modifiers={{ scheduled: eventDates }}
              modifiersClassNames={{ scheduled: 'bg-primary/20 rounded-full' }}
              className="rounded-md border"
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>{selectedDate ? `Events for ${format(selectedDate, 'PPP')}` : 'Select a Date'}</span>
              {isToday(selectedDate || new Date()) && (
                <Badge variant="secondary">Today</Badge>
              )}
            </CardTitle>
            <CardDescription>Your study sessions for the selected day.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {eventsForSelectedDay.length > 0 ? (
                eventsForSelectedDay.map((event) => (
                  <div 
                    key={event.id} 
                    className={`flex items-start gap-3 p-3 rounded-lg border ${
                      (event as CustomEvent).completed 
                        ? 'bg-muted/30 opacity-60' 
                        : eventTypeColors[(event as CustomEvent).type] || 'bg-muted/50'
                    }`}
                  >
                    <div className="flex flex-col items-center justify-center bg-background rounded-md p-2 w-14 shrink-0">
                      <span className="font-bold text-lg">{format(event.date, 'dd')}</span>
                      <span className="text-xs font-medium uppercase">{format(event.date, 'MMM')}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className={`font-semibold ${(event as CustomEvent).completed ? 'line-through' : ''}`}>
                        {event.title}
                      </p>
                      <p className="text-sm text-muted-foreground truncate">{event.description}</p>
                      <Badge variant="outline" className="mt-1 text-xs">
                        {(event as CustomEvent).type}
                      </Badge>
                    </div>
                    {event.id.startsWith('custom-') && (
                      <div className="flex flex-col gap-1">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => handleToggleComplete(event.id)}
                        >
                          <CheckCircle2 className={`h-4 w-4 ${(event as CustomEvent).completed ? 'text-green-500' : ''}`} />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-destructive hover:text-destructive"
                          onClick={() => handleDeleteEvent(event.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div className="flex flex-col items-center justify-center h-full min-h-[200px] text-center text-muted-foreground">
                  <BookOpen className="h-12 w-12 mb-3 opacity-50" />
                  <p>{selectedDate ? "No events scheduled for this day." : "Select a date to see events."}</p>
                  {selectedDate && (
                    <Button variant="link" onClick={() => setIsAddDialogOpen(true)} className="mt-2">
                      Add your first event
                    </Button>
                  )}
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
