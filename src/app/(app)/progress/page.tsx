import { ProgressTracker } from '@/components/progress-tracker';

export default function ProgressPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Progress Tracker</h1>
        <p className="text-muted-foreground">Visualize your performance and identify areas for improvement.</p>
      </div>
      <ProgressTracker />
    </div>
  );
}
