"use client";

import { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow 
} from '@/components/ui/table';
import { comparisonTables } from '@/lib/clat-data';
import { GitCompare, ChevronRight, ArrowLeft } from 'lucide-react';

export default function ComparisonsPage() {
  const [selectedTable, setSelectedTable] = useState<string | null>(null);

  const currentTable = useMemo(() => {
    return comparisonTables.find(t => t.id === selectedTable);
  }, [selectedTable]);

  // Detail View
  if (currentTable) {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => setSelectedTable(null)}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">{currentTable.title}</h1>
            <p className="text-muted-foreground">
              {currentTable.topicA} vs {currentTable.topicB}
            </p>
          </div>
        </div>

        <Card>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50">
                    <TableHead className="w-[200px] font-bold">Aspect</TableHead>
                    <TableHead className="font-bold text-blue-600">{currentTable.topicA}</TableHead>
                    <TableHead className="font-bold text-purple-600">{currentTable.topicB}</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {currentTable.rows.map((row, index) => (
                    <TableRow key={index} className={index % 2 === 0 ? 'bg-muted/20' : ''}>
                      <TableCell className="font-medium">{row.aspect}</TableCell>
                      <TableCell className="text-sm">{row.valueA}</TableCell>
                      <TableCell className="text-sm">{row.valueB}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Mobile Cards View */}
        <div className="md:hidden space-y-4">
          {currentTable.rows.map((row, index) => (
            <Card key={index}>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {row.aspect}
                </CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-blue-500/5 rounded-lg">
                  <p className="text-xs text-blue-600 font-semibold mb-1">{currentTable.topicA}</p>
                  <p className="text-sm">{row.valueA}</p>
                </div>
                <div className="p-3 bg-purple-500/5 rounded-lg">
                  <p className="text-xs text-purple-600 font-semibold mb-1">{currentTable.topicB}</p>
                  <p className="text-sm">{row.valueB}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Button variant="outline" onClick={() => setSelectedTable(null)} className="w-full">
          <ArrowLeft className="h-4 w-4 mr-2" /> Back to All Comparisons
        </Button>
      </div>
    );
  }

  // List View
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight flex items-center gap-2">
          <GitCompare className="h-6 w-6 text-indigo-500" />
          Comparative Tables
        </h1>
        <p className="text-muted-foreground">
          Side-by-side comparisons of confusing legal concepts
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {comparisonTables.map((table) => (
          <Card 
            key={table.id} 
            className="hover:shadow-md transition-shadow cursor-pointer group"
            onClick={() => setSelectedTable(table.id)}
          >
            <CardHeader>
              <CardTitle className="text-lg group-hover:text-primary transition-colors">
                {table.title}
              </CardTitle>
              <CardDescription className="flex items-center gap-2">
                <Badge variant="outline" className="bg-blue-500/10 text-blue-600">
                  {table.topicA}
                </Badge>
                <span className="text-muted-foreground">vs</span>
                <Badge variant="outline" className="bg-purple-500/10 text-purple-600">
                  {table.topicB}
                </Badge>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">
                  {table.rows.length} comparison points
                </p>
                <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
