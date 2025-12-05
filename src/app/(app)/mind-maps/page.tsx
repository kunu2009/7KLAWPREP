"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Network, ChevronRight, ChevronDown, Scale, Book, Gavel, Users, FileText, Building } from 'lucide-react';

interface MindMapNode {
  id: string;
  label: string;
  children?: MindMapNode[];
  description?: string;
}

interface MindMapData {
  id: string;
  title: string;
  category: string;
  icon: any;
  description: string;
  root: MindMapNode;
}

const mindMaps: MindMapData[] = [
  {
    id: 'mm1',
    title: 'Fundamental Rights (Part III)',
    category: 'Constitutional Law',
    icon: Scale,
    description: 'Structure of Fundamental Rights under the Indian Constitution',
    root: {
      id: 'fr-root',
      label: 'Fundamental Rights (Art. 12-35)',
      children: [
        {
          id: 'fr-eq',
          label: 'Right to Equality (Art. 14-18)',
          children: [
            { id: 'fr-14', label: 'Art. 14: Equality before law', description: 'State shall not deny equality before law or equal protection of laws' },
            { id: 'fr-15', label: 'Art. 15: No discrimination', description: 'Prohibition on grounds of religion, race, caste, sex, place of birth' },
            { id: 'fr-16', label: 'Art. 16: Equal opportunity in public employment', description: 'Equality of opportunity in matters of public employment' },
            { id: 'fr-17', label: 'Art. 17: Abolition of Untouchability', description: 'Untouchability abolished and its practice forbidden' },
            { id: 'fr-18', label: 'Art. 18: Abolition of titles', description: 'No titles except military or academic' },
          ]
        },
        {
          id: 'fr-freedom',
          label: 'Right to Freedom (Art. 19-22)',
          children: [
            { id: 'fr-19', label: 'Art. 19: Six Freedoms', description: 'Speech, Assembly, Association, Movement, Residence, Profession' },
            { id: 'fr-20', label: 'Art. 20: Protection in criminal conviction', description: 'Ex post facto law, double jeopardy, self-incrimination' },
            { id: 'fr-21', label: 'Art. 21: Right to Life & Liberty', description: 'No deprivation except by procedure established by law' },
            { id: 'fr-21a', label: 'Art. 21A: Right to Education', description: 'Free and compulsory education for children 6-14 years' },
            { id: 'fr-22', label: 'Art. 22: Protection against arrest', description: 'Rights of arrested person, preventive detention' },
          ]
        },
        {
          id: 'fr-exploit',
          label: 'Right Against Exploitation (Art. 23-24)',
          children: [
            { id: 'fr-23', label: 'Art. 23: Prohibition of trafficking', description: 'Human trafficking and forced labor prohibited' },
            { id: 'fr-24', label: 'Art. 24: Child labor prohibited', description: 'No child below 14 in factory/mine/hazardous employment' },
          ]
        },
        {
          id: 'fr-religion',
          label: 'Right to Religion (Art. 25-28)',
          children: [
            { id: 'fr-25', label: 'Art. 25: Freedom of conscience', description: 'Right to profess, practice, propagate religion' },
            { id: 'fr-26', label: 'Art. 26: Religious affairs management', description: 'Right to manage religious institutions' },
            { id: 'fr-27', label: 'Art. 27: No religious tax', description: 'No tax for promotion of any religion' },
            { id: 'fr-28', label: 'Art. 28: Religious instruction', description: 'Freedom from religious instruction in state institutions' },
          ]
        },
        {
          id: 'fr-culture',
          label: 'Cultural & Educational Rights (Art. 29-30)',
          children: [
            { id: 'fr-29', label: 'Art. 29: Protection of minorities', description: 'Right to conserve culture, language, script' },
            { id: 'fr-30', label: 'Art. 30: Minority institutions', description: 'Right to establish & administer educational institutions' },
          ]
        },
        {
          id: 'fr-remedy',
          label: 'Right to Constitutional Remedies (Art. 32)',
          description: 'Heart and soul of the Constitution - Dr. Ambedkar',
          children: [
            { id: 'fr-habeas', label: 'Habeas Corpus', description: 'To produce the body - against illegal detention' },
            { id: 'fr-mandamus', label: 'Mandamus', description: 'Command to perform public duty' },
            { id: 'fr-prohibition', label: 'Prohibition', description: 'To prohibit inferior court from exceeding jurisdiction' },
            { id: 'fr-certiorari', label: 'Certiorari', description: 'To quash order of inferior court' },
            { id: 'fr-quo', label: 'Quo Warranto', description: 'By what authority - challenge to public office' },
          ]
        },
      ]
    }
  },
  {
    id: 'mm2',
    title: 'How a Bill Becomes Law',
    category: 'Legislative Process',
    icon: FileText,
    description: 'Step-by-step process of legislation in Indian Parliament',
    root: {
      id: 'bill-root',
      label: 'Legislative Process',
      children: [
        {
          id: 'bill-intro',
          label: '1. Introduction of Bill',
          children: [
            { id: 'bill-ordinary', label: 'Ordinary Bill', description: 'Can be introduced in either House' },
            { id: 'bill-money', label: 'Money Bill', description: 'Only in Lok Sabha, Art. 110' },
            { id: 'bill-financial', label: 'Financial Bill', description: 'Only in Lok Sabha, Art. 117' },
            { id: 'bill-const', label: 'Constitution Amendment', description: 'Either House, Art. 368' },
          ]
        },
        {
          id: 'bill-reading1',
          label: '2. First Reading',
          description: 'Introduction and publication in Gazette',
        },
        {
          id: 'bill-reading2',
          label: '3. Second Reading',
          children: [
            { id: 'bill-general', label: 'General Discussion', description: 'Principles of the bill debated' },
            { id: 'bill-committee', label: 'Committee Stage', description: 'Referred to Select/Joint/Standing Committee' },
            { id: 'bill-clause', label: 'Clause-by-clause', description: 'Detailed consideration, amendments proposed' },
          ]
        },
        {
          id: 'bill-reading3',
          label: '4. Third Reading',
          description: 'Voting on the bill, simple majority for ordinary bills',
        },
        {
          id: 'bill-other',
          label: '5. Other House',
          children: [
            { id: 'bill-pass', label: 'Bill passed', description: 'Sent to President' },
            { id: 'bill-amend', label: 'Bill amended', description: 'Returns to originating House' },
            { id: 'bill-reject', label: 'Bill rejected/delayed', description: 'Joint sitting may be called (Art. 108)' },
          ]
        },
        {
          id: 'bill-president',
          label: '6. Presidential Assent',
          children: [
            { id: 'bill-assent', label: 'Assent given', description: 'Bill becomes Act' },
            { id: 'bill-withhold', label: 'Assent withheld', description: 'Bill dies (absolute veto for private bills)' },
            { id: 'bill-return', label: 'Returned for reconsideration', description: 'Suspensive veto, but must assent if passed again' },
          ]
        },
      ]
    }
  },
  {
    id: 'mm3',
    title: 'Hierarchy of Courts in India',
    category: 'Judiciary',
    icon: Gavel,
    description: 'Structure of the Indian judicial system',
    root: {
      id: 'court-root',
      label: 'Indian Judiciary',
      children: [
        {
          id: 'court-sc',
          label: 'Supreme Court of India',
          description: 'Apex court, Art. 124-147',
          children: [
            { id: 'sc-original', label: 'Original Jurisdiction', description: 'Disputes between Union & States (Art. 131)' },
            { id: 'sc-appellate', label: 'Appellate Jurisdiction', description: 'Civil, Criminal, Constitutional appeals' },
            { id: 'sc-advisory', label: 'Advisory Jurisdiction', description: 'President may seek opinion (Art. 143)' },
            { id: 'sc-writ', label: 'Writ Jurisdiction', description: 'Art. 32 for Fundamental Rights' },
          ]
        },
        {
          id: 'court-hc',
          label: 'High Courts (25)',
          description: 'Art. 214-231',
          children: [
            { id: 'hc-original', label: 'Original Jurisdiction', description: 'Varies by state, some have civil original' },
            { id: 'hc-appellate', label: 'Appellate Jurisdiction', description: 'Appeals from subordinate courts' },
            { id: 'hc-writ', label: 'Writ Jurisdiction', description: 'Art. 226, wider than SC (any legal right)' },
            { id: 'hc-supervisory', label: 'Superintendence', description: 'Over all courts in territory (Art. 227)' },
          ]
        },
        {
          id: 'court-district',
          label: 'District Courts',
          children: [
            { id: 'dist-civil', label: 'District Judge', description: 'Principal civil court of original jurisdiction' },
            { id: 'dist-sessions', label: 'Sessions Court', description: 'Principal criminal court' },
          ]
        },
        {
          id: 'court-subordinate',
          label: 'Subordinate Courts',
          children: [
            { id: 'sub-civil', label: 'Civil Judge (Senior/Junior)', description: 'Civil matters below pecuniary limit' },
            { id: 'sub-magistrate', label: 'Judicial Magistrate', description: 'Criminal cases, First/Second Class' },
            { id: 'sub-exec', label: 'Executive Magistrate', description: 'Preventive sections, public order' },
          ]
        },
        {
          id: 'court-tribunals',
          label: 'Tribunals',
          children: [
            { id: 'trib-cat', label: 'CAT', description: 'Central Administrative Tribunal' },
            { id: 'trib-nclat', label: 'NCLAT', description: 'National Company Law Appellate Tribunal' },
            { id: 'trib-nclt', label: 'NCLT', description: 'National Company Law Tribunal' },
            { id: 'trib-ngt', label: 'NGT', description: 'National Green Tribunal' },
            { id: 'trib-itat', label: 'ITAT', description: 'Income Tax Appellate Tribunal' },
          ]
        },
      ]
    }
  },
  {
    id: 'mm4',
    title: 'Criminal Trial Process',
    category: 'Criminal Procedure',
    icon: Gavel,
    description: 'Stages of a criminal trial under BNSS/CrPC',
    root: {
      id: 'crim-root',
      label: 'Criminal Trial (Sessions)',
      children: [
        {
          id: 'crim-fir',
          label: '1. FIR (S. 173 BNSS)',
          description: 'First Information Report to police',
        },
        {
          id: 'crim-invest',
          label: '2. Investigation',
          children: [
            { id: 'inv-scene', label: 'Scene visit', description: 'Inspection of crime scene' },
            { id: 'inv-evidence', label: 'Evidence collection', description: 'Physical evidence, forensics' },
            { id: 'inv-statement', label: 'Witness statements', description: 'Section 180 BNSS statements' },
            { id: 'inv-arrest', label: 'Arrest (if needed)', description: 'Section 35 BNSS' },
          ]
        },
        {
          id: 'crim-chargesheet',
          label: '3. Chargesheet/Police Report',
          description: 'Section 193 BNSS, filed within 60/90 days',
        },
        {
          id: 'crim-cognizance',
          label: '4. Cognizance by Court',
          description: 'Magistrate takes cognizance of offence',
        },
        {
          id: 'crim-charge',
          label: '5. Framing of Charges',
          description: 'Section 230 BNSS, accused informed of charges',
        },
        {
          id: 'crim-prosecution',
          label: '6. Prosecution Evidence',
          children: [
            { id: 'pros-exam', label: 'Examination-in-chief', description: 'Witnesses examined by prosecution' },
            { id: 'pros-cross', label: 'Cross-examination', description: 'Defence cross-examines' },
            { id: 'pros-re', label: 'Re-examination', description: 'Prosecution re-examines if needed' },
          ]
        },
        {
          id: 'crim-statement',
          label: '7. Statement of Accused',
          description: 'Section 313 BNSS examination',
        },
        {
          id: 'crim-defence',
          label: '8. Defence Evidence',
          description: 'Defence witnesses, if any',
        },
        {
          id: 'crim-arguments',
          label: '9. Final Arguments',
          description: 'Prosecution first, then defence',
        },
        {
          id: 'crim-judgment',
          label: '10. Judgment',
          children: [
            { id: 'judg-acquit', label: 'Acquittal', description: 'Accused found not guilty' },
            { id: 'judg-convict', label: 'Conviction', description: 'Accused found guilty' },
            { id: 'judg-sentence', label: 'Sentencing', description: 'If convicted, sentence pronounced' },
          ]
        },
      ]
    }
  },
  {
    id: 'mm5',
    title: 'Types of Contracts',
    category: 'Contract Law',
    icon: FileText,
    description: 'Classification of contracts under Indian Contract Act',
    root: {
      id: 'contract-root',
      label: 'Contracts (ICA 1872)',
      children: [
        {
          id: 'con-validity',
          label: 'Based on Validity',
          children: [
            { id: 'val-valid', label: 'Valid Contract', description: 'All essential elements present' },
            { id: 'val-void', label: 'Void Contract', description: 'No legal effect, S. 2(j)' },
            { id: 'val-voidable', label: 'Voidable Contract', description: 'Valid until avoided, S. 2(i)' },
            { id: 'val-illegal', label: 'Illegal Contract', description: 'Against law, void ab initio' },
            { id: 'val-unenforceable', label: 'Unenforceable', description: 'Valid but not enforceable' },
          ]
        },
        {
          id: 'con-formation',
          label: 'Based on Formation',
          children: [
            { id: 'form-express', label: 'Express Contract', description: 'Terms stated in words' },
            { id: 'form-implied', label: 'Implied Contract', description: 'Terms inferred from conduct' },
            { id: 'form-quasi', label: 'Quasi Contract', description: 'Imposed by law, S. 68-72' },
          ]
        },
        {
          id: 'con-performance',
          label: 'Based on Performance',
          children: [
            { id: 'perf-executed', label: 'Executed', description: 'Both parties have performed' },
            { id: 'perf-executory', label: 'Executory', description: 'One or both yet to perform' },
            { id: 'perf-partly', label: 'Partly Executed', description: 'One performed, other pending' },
          ]
        },
        {
          id: 'con-special',
          label: 'Special Contracts',
          children: [
            { id: 'spec-indemnity', label: 'Indemnity', description: 'Promise to save from loss, S. 124' },
            { id: 'spec-guarantee', label: 'Guarantee', description: 'Promise to perform for another, S. 126' },
            { id: 'spec-bailment', label: 'Bailment', description: 'Delivery of goods for purpose, S. 148' },
            { id: 'spec-pledge', label: 'Pledge', description: 'Bailment as security, S. 172' },
            { id: 'spec-agency', label: 'Agency', description: 'One acts for another, S. 182' },
          ]
        },
      ]
    }
  },
];

function MindMapTreeNode({ node, level = 0 }: { node: MindMapNode; level?: number }) {
  const [isExpanded, setIsExpanded] = useState(level < 2);
  const hasChildren = node.children && node.children.length > 0;

  const levelColors = [
    'bg-primary text-primary-foreground',
    'bg-blue-500/10 text-blue-700 border-blue-500/30',
    'bg-green-500/10 text-green-700 border-green-500/30',
    'bg-purple-500/10 text-purple-700 border-purple-500/30',
    'bg-orange-500/10 text-orange-700 border-orange-500/30',
  ];

  return (
    <div className={`${level > 0 ? 'ml-4 border-l-2 border-muted pl-4' : ''}`}>
      <div 
        className={`p-3 rounded-lg mb-2 cursor-pointer transition-all ${levelColors[Math.min(level, 4)]} ${hasChildren ? 'hover:opacity-80' : ''}`}
        onClick={() => hasChildren && setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center gap-2">
          {hasChildren && (
            isExpanded ? <ChevronDown className="h-4 w-4 shrink-0" /> : <ChevronRight className="h-4 w-4 shrink-0" />
          )}
          <span className={`font-medium ${level === 0 ? 'text-lg' : 'text-sm'}`}>{node.label}</span>
        </div>
        {node.description && (
          <p className="text-xs mt-1 opacity-80">{node.description}</p>
        )}
      </div>
      
      {hasChildren && isExpanded && (
        <div className="space-y-1">
          {node.children!.map(child => (
            <MindMapTreeNode key={child.id} node={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function MindMapsPage() {
  const [selectedMap, setSelectedMap] = useState<MindMapData | null>(null);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight flex items-center gap-2">
          <Network className="h-6 w-6 text-cyan-500" />
          Mind Maps & Concept Maps
        </h1>
        <p className="text-muted-foreground">
          Visual learning aids for complex legal concepts
        </p>
      </div>

      {!selectedMap ? (
        // Map Selection Grid
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {mindMaps.map(map => {
            const Icon = map.icon;
            return (
              <Card 
                key={map.id} 
                className="cursor-pointer hover:border-primary transition-colors"
                onClick={() => setSelectedMap(map)}
              >
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{map.title}</CardTitle>
                      <Badge variant="outline" className="mt-1">{map.category}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{map.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      ) : (
        // Selected Map View
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold">{selectedMap.title}</h2>
              <Badge variant="outline">{selectedMap.category}</Badge>
            </div>
            <Button variant="outline" onClick={() => setSelectedMap(null)}>
              ← Back to All Maps
            </Button>
          </div>

          <Card>
            <CardHeader>
              <CardDescription>{selectedMap.description}</CardDescription>
              <p className="text-xs text-muted-foreground">💡 Click on nodes to expand/collapse branches</p>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[600px] pr-4">
                <MindMapTreeNode node={selectedMap.root} />
              </ScrollArea>
            </CardContent>
          </Card>

          {/* Quick Tips */}
          <Card className="bg-cyan-500/5 border-cyan-500/20">
            <CardContent className="p-4">
              <p className="text-sm font-medium text-cyan-600 mb-2">🧠 Memory Tips</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Visualize the tree structure to remember relationships</li>
                <li>• Click through each branch to understand the hierarchy</li>
                <li>• Use this as a quick revision tool before exams</li>
                <li>• Try to recreate the map from memory for active recall</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
