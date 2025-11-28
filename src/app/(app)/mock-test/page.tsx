"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ArrowLeft, BookOpen, Clock, Target, AlertTriangle } from 'lucide-react';
import MockTestComponent from '@/components/mock-test';

export default function MockTestPage() {
  const router = useRouter();

  return (
    <div className="container max-w-5xl mx-auto py-6 px-4">
      <div className="mb-6">
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => router.back()}
          className="mb-4"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Dashboard
        </Button>
        <h1 className="text-2xl font-bold">CLAT Mock Test Center</h1>
        <p className="text-muted-foreground">Practice with full-length mock tests simulating the actual CLAT exam</p>
      </div>

      <MockTestComponent />
    </div>
  );
}
