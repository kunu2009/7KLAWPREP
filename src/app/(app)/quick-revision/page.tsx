"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Zap, Scale, BookOpen, Globe, Building, Calculator,
  ChevronRight, Star, Clock, CheckCircle2
} from 'lucide-react';

// Quick revision data - key points for CLAT
const revisionData = {
  constitution: {
    icon: Scale,
    color: 'text-red-500',
    bgColor: 'bg-red-500/10',
    title: 'Constitution Quick Bits',
    points: [
      { topic: 'Preamble', points: ['Added by 42nd Amendment: Socialist, Secular, Integrity', 'Key words: Sovereign, Democratic, Republic', 'Kesavananda Bharati: Part of basic structure'] },
      { topic: 'Fundamental Rights', points: ['Articles 12-35 (Part III)', 'Art 14: Equality before law', 'Art 19: 6 freedoms (speech, assembly, etc.)', 'Art 21: Right to life & personal liberty', 'Art 32: Constitutional remedies (Heart of Constitution)'] },
      { topic: 'DPSPs', points: ['Articles 36-51 (Part IV)', 'Non-justiciable', 'Art 39: Equal pay, child protection', 'Art 44: Uniform Civil Code', 'Art 48: Cow protection'] },
      { topic: 'Key Amendments', points: ['1st: Added 9th Schedule', '24th: Amended Art 13 & 368', '42nd: Mini Constitution (1976)', '44th: Restored pre-emergency position', '73rd & 74th: Panchayati Raj'] },
      { topic: 'Emergency Provisions', points: ['Art 352: National Emergency', 'Art 356: State Emergency (President\'s Rule)', 'Art 360: Financial Emergency', '44th removed Art 358 (Art 19 suspended)'] },
    ]
  },
  legal: {
    icon: BookOpen,
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
    title: 'Legal Reasoning Essentials',
    points: [
      { topic: 'IPC Sections', points: ['Sec 299: Culpable homicide', 'Sec 300: Murder (4 exceptions)', 'Sec 302: Punishment for murder', 'Sec 304: Culpable homicide not amounting to murder', 'Sec 307: Attempt to murder'] },
      { topic: 'Contract Act', points: ['Sec 2(a): Proposal/Offer', 'Sec 2(b): Promise/Acceptance', 'Sec 10: Valid contract essentials', 'Sec 11: Competency', 'Sec 23: Unlawful consideration'] },
      { topic: 'Torts', points: ['Vicarious liability: Master-servant', 'Strict liability: Rylands v Fletcher', 'Absolute liability: Oleum Gas Leak', 'Res ipsa loquitur: Thing speaks for itself', 'Volenti non fit injuria: Consent'] },
      { topic: 'CrPC Basics', points: ['Sec 41: When police can arrest w/o warrant', 'Sec 154: FIR registration', 'Sec 161: Examination of witnesses', 'Sec 164: Confession before Magistrate', 'Sec 313: Examination of accused'] },
    ]
  },
  gk: {
    icon: Globe,
    color: 'text-green-500',
    bgColor: 'bg-green-500/10',
    title: 'GK Power Points',
    points: [
      { topic: 'Constitution Bodies', points: ['ECI: Art 324, CEC tenure 6 years', 'CAG: Art 148, Auditor General', 'UPSC: Art 315-323', 'Finance Commission: Art 280', 'NHRC: 1993, statutory body'] },
      { topic: 'International', points: ['UN HQ: New York', 'WHO HQ: Geneva', 'ICJ: The Hague, 15 judges', 'WTO HQ: Geneva', 'IMF HQ: Washington DC'] },
      { topic: 'Important Articles', points: ['Art 1: Name and territory', 'Art 3: Formation of new states', 'Art 13: Laws inconsistent with FR', 'Art 32: Supreme Court writs', 'Art 226: High Court writs'] },
      { topic: '2024 Updates', points: ['Women\'s Reservation: 33% seats', 'Chief Justice: D.Y. Chandrachud', 'New Criminal Laws: BNS, BNSS, BSA', 'CAA implemented: March 2024', 'Article 370 abrogation upheld'] },
    ]
  },
  logical: {
    icon: Calculator,
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10',
    title: 'Logical Reasoning Tips',
    points: [
      { topic: 'Syllogisms', points: ['All A are B + All B are C = All A are C', 'Some A are B = Some B are A', 'No A are B = No B are A', 'Use Venn diagrams for complex ones', 'Check for "possibility" questions'] },
      { topic: 'Arrangements', points: ['Linear: Read constraints carefully', 'Circular: Fix one position first', 'Blood Relations: Draw family tree', 'Direction: Start from origin point', 'Coding: Find pattern in letters/numbers'] },
      { topic: 'Critical Reasoning', points: ['Strengthen: Find supporting evidence', 'Weaken: Find contradicting facts', 'Assumption: Hidden premise', 'Conclusion: Must follow logically', 'Inference: Definitely true from passage'] },
      { topic: 'Number Series', points: ['Check +, -, ×, ÷ patterns', 'Prime numbers: 2,3,5,7,11,13...', 'Square series: 1,4,9,16,25...', 'Cube series: 1,8,27,64...', 'Fibonacci: 1,1,2,3,5,8,13...'] },
    ]
  },
  quant: {
    icon: Building,
    color: 'text-orange-500',
    bgColor: 'bg-orange-500/10',
    title: 'Quantitative Formulas',
    points: [
      { topic: 'Percentages', points: ['X% of Y = Y% of X', 'Increase: (New-Old)/Old × 100', 'Successive: a+b+ab/100', 'Population: P(1+r/100)^n', 'Depreciation: P(1-r/100)^n'] },
      { topic: 'Profit & Loss', points: ['Profit% = (Profit/CP) × 100', 'SP = CP × (100+P%)/100', 'Discount = MP - SP', 'Single Discount: a+b-ab/100', 'CP for n articles sold = SP for m articles → P% = (n-m)/m × 100'] },
      { topic: 'Time & Work', points: ['A\'s 1 day work = 1/A days', 'Together = 1/A + 1/B', 'More workers = Less time', 'Pipes: Inlet + Outlet = Net', 'Efficiency × Time = Work'] },
      { topic: 'Averages', points: ['Avg = Sum/Count', 'New avg when person joins', 'Weighted average for mixtures', 'Ratio problems: Use allegation', 'Age problems: Form equations'] },
    ]
  }
};

export default function QuickRevisionPage() {
  const [activeSection, setActiveSection] = useState<string>('constitution');
  const [completedTopics, setCompletedTopics] = useState<Set<string>>(new Set());

  const toggleComplete = (key: string) => {
    setCompletedTopics(prev => {
      const newSet = new Set(prev);
      if (newSet.has(key)) {
        newSet.delete(key);
      } else {
        newSet.add(key);
      }
      return newSet;
    });
  };

  const totalTopics = Object.values(revisionData).reduce((acc, section) => acc + section.points.length, 0);
  const progress = Math.round((completedTopics.size / totalTopics) * 100);

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight flex items-center gap-2">
            <Zap className="h-6 w-6 text-yellow-500" />
            Quick Revision
          </h1>
          <p className="text-muted-foreground">
            Last-minute key points for CLAT - organized by section
          </p>
        </div>
        <Card className="p-3">
          <div className="text-center">
            <p className="text-2xl font-bold text-primary">{progress}%</p>
            <p className="text-xs text-muted-foreground">Covered</p>
          </div>
        </Card>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        {Object.entries(revisionData).map(([key, section]) => {
          const Icon = section.icon;
          const sectionComplete = section.points.filter(p => 
            completedTopics.has(`${key}-${p.topic}`)
          ).length;
          return (
            <Card 
              key={key}
              className={`p-3 cursor-pointer transition-all ${activeSection === key ? 'ring-2 ring-primary' : ''}`}
              onClick={() => setActiveSection(key)}
            >
              <div className="flex items-center gap-2">
                <div className={`p-2 rounded-lg ${section.bgColor}`}>
                  <Icon className={`h-4 w-4 ${section.color}`} />
                </div>
                <div>
                  <p className="text-xs font-medium capitalize">{key}</p>
                  <p className="text-xs text-muted-foreground">
                    {sectionComplete}/{section.points.length}
                  </p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Section Content */}
      <Tabs value={activeSection} onValueChange={setActiveSection}>
        <TabsList className="w-full grid grid-cols-5">
          {Object.entries(revisionData).map(([key, section]) => {
            const Icon = section.icon;
            return (
              <TabsTrigger key={key} value={key} className="gap-1">
                <Icon className="h-4 w-4" />
                <span className="hidden md:inline capitalize">{key}</span>
              </TabsTrigger>
            );
          })}
        </TabsList>

        {Object.entries(revisionData).map(([key, section]) => (
          <TabsContent key={key} value={key} className="mt-4">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className={section.color}>{section.title}</CardTitle>
                <CardDescription>
                  Click on topics to mark as reviewed
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {section.points.map((item) => {
                    const itemKey = `${key}-${item.topic}`;
                    const isComplete = completedTopics.has(itemKey);
                    return (
                      <Card 
                        key={item.topic}
                        className={`cursor-pointer transition-all ${
                          isComplete ? 'bg-green-500/5 border-green-500/30' : 'hover:border-primary/30'
                        }`}
                        onClick={() => toggleComplete(itemKey)}
                      >
                        <CardHeader className="py-3 px-4">
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-base flex items-center gap-2">
                              {isComplete ? (
                                <CheckCircle2 className="h-4 w-4 text-green-500" />
                              ) : (
                                <ChevronRight className="h-4 w-4" />
                              )}
                              {item.topic}
                            </CardTitle>
                            {isComplete && (
                              <Badge variant="outline" className="bg-green-500/10 text-green-600 text-xs">
                                Done
                              </Badge>
                            )}
                          </div>
                        </CardHeader>
                        <CardContent className="pt-0 px-4 pb-3">
                          <ul className="space-y-1">
                            {item.points.map((point, i) => (
                              <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                                <Star className="h-3 w-3 text-yellow-500 mt-1 flex-shrink-0" />
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-2 gap-4">
        <Card className="bg-yellow-500/5 border-yellow-500/20">
          <CardContent className="p-4">
            <h3 className="font-semibold text-yellow-600 flex items-center gap-2 mb-2">
              <Clock className="h-4 w-4" /> Last Hour Strategy
            </h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>✓ Skim through all starred points</li>
              <li>✓ Focus on GK - Most volatile section</li>
              <li>✓ Revise legal maxims (Latin phrases)</li>
              <li>✓ Don't learn new concepts</li>
            </ul>
          </CardContent>
        </Card>
        <Card className="bg-green-500/5 border-green-500/20">
          <CardContent className="p-4">
            <h3 className="font-semibold text-green-600 flex items-center gap-2 mb-2">
              <Star className="h-4 w-4" /> During Exam
            </h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>✓ Start with your strongest section</li>
              <li>✓ 1.5 mins per question max</li>
              <li>✓ Mark & skip difficult ones</li>
              <li>✓ -0.25 negative marking - be careful</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
