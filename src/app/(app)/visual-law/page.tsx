
"use client";

import { useState } from 'react';
import { visualLawData } from '@/lib/data';
import { VisualLawCard } from '@/components/visual-law-card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

const categories = ['All', ...Array.from(new Set(visualLawData.map(item => item.category)))];

export default function VisualLawPage() {
  const [activeTab, setActiveTab] = useState('All');

  const filteredData = activeTab === 'All'
    ? visualLawData
    : visualLawData.filter(item => item.category === activeTab);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Visual Law</h1>
        <p className="text-muted-foreground">
          Understand complex legal concepts and procedures through diagrams and mindmaps.
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          {categories.map(category => (
            <TabsTrigger key={category} value={category}>{category}</TabsTrigger>
          ))}
        </TabsList>
        
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredData.map(item => (
            <VisualLawCard key={item.id} item={item} />
          ))}
        </div>
      </Tabs>
    </div>
  );
}
