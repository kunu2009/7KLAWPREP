"use client";

import { useState, useEffect, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  AlertCircle, Plus, Trash2, Edit3, Check, X,
  ChevronDown, ChevronUp, Filter, Calendar, 
  Target, TrendingUp, BarChart3, BookOpen
} from 'lucide-react';

interface ErrorEntry {
  id: string;
  question: string;
  wrongAnswer: string;
  correctAnswer: string;
  explanation: string;
  category: string;
  topic: string;
  date: string;
  reviewed: boolean;
  reviewCount: number;
}

const categories = [
  'Legal Reasoning',
  'Logical Reasoning',
  'Reading Comprehension',
  'Quantitative Techniques',
  'General Knowledge',
  'Constitution',
  'Contracts',
  'Criminal Law',
];

export default function ErrorLogPage() {
  const [errors, setErrors] = useState<ErrorEntry[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [filterReviewed, setFilterReviewed] = useState<string>('all');
  const [expandedError, setExpandedError] = useState<string | null>(null);
  
  // Form state
  const [formData, setFormData] = useState({
    question: '',
    wrongAnswer: '',
    correctAnswer: '',
    explanation: '',
    category: '',
    topic: '',
  });

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('clat-error-log');
    if (saved) {
      setErrors(JSON.parse(saved));
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('clat-error-log', JSON.stringify(errors));
  }, [errors]);

  const filteredErrors = useMemo(() => {
    return errors.filter(error => {
      const matchesCategory = filterCategory === 'all' || error.category === filterCategory;
      const matchesReviewed = filterReviewed === 'all' || 
        (filterReviewed === 'reviewed' && error.reviewed) ||
        (filterReviewed === 'pending' && !error.reviewed);
      return matchesCategory && matchesReviewed;
    });
  }, [errors, filterCategory, filterReviewed]);

  const stats = useMemo(() => {
    const total = errors.length;
    const reviewed = errors.filter(e => e.reviewed).length;
    const byCategory: Record<string, number> = {};
    errors.forEach(e => {
      byCategory[e.category] = (byCategory[e.category] || 0) + 1;
    });
    const topCategories = Object.entries(byCategory)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3);
    return { total, reviewed, pending: total - reviewed, topCategories };
  }, [errors]);

  const handleSubmit = () => {
    if (!formData.question || !formData.correctAnswer || !formData.category) return;

    if (editingId) {
      setErrors(prev => prev.map(e => 
        e.id === editingId 
          ? { ...e, ...formData }
          : e
      ));
      setEditingId(null);
    } else {
      const newError: ErrorEntry = {
        id: Date.now().toString(),
        ...formData,
        date: new Date().toISOString().split('T')[0],
        reviewed: false,
        reviewCount: 0,
      };
      setErrors(prev => [newError, ...prev]);
    }
    
    setFormData({
      question: '',
      wrongAnswer: '',
      correctAnswer: '',
      explanation: '',
      category: '',
      topic: '',
    });
    setShowForm(false);
  };

  const handleEdit = (error: ErrorEntry) => {
    setFormData({
      question: error.question,
      wrongAnswer: error.wrongAnswer,
      correctAnswer: error.correctAnswer,
      explanation: error.explanation,
      category: error.category,
      topic: error.topic,
    });
    setEditingId(error.id);
    setShowForm(true);
  };

  const handleDelete = (id: string) => {
    setErrors(prev => prev.filter(e => e.id !== id));
  };

  const toggleReviewed = (id: string) => {
    setErrors(prev => prev.map(e => 
      e.id === id 
        ? { ...e, reviewed: !e.reviewed, reviewCount: e.reviewCount + 1 }
        : e
    ));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight flex items-center gap-2">
            <AlertCircle className="h-6 w-6 text-red-500" />
            Error Log
          </h1>
          <p className="text-muted-foreground">
            Track your mistakes and never repeat them in CLAT
          </p>
        </div>
        <Button onClick={() => { setShowForm(!showForm); setEditingId(null); }}>
          {showForm ? <X className="h-4 w-4 mr-2" /> : <Plus className="h-4 w-4 mr-2" />}
          {showForm ? 'Cancel' : 'Log Error'}
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-red-500/10">
              <AlertCircle className="h-5 w-5 text-red-500" />
            </div>
            <div>
              <p className="text-2xl font-bold">{stats.total}</p>
              <p className="text-xs text-muted-foreground">Total Errors</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-green-500/10">
              <Check className="h-5 w-5 text-green-500" />
            </div>
            <div>
              <p className="text-2xl font-bold">{stats.reviewed}</p>
              <p className="text-xs text-muted-foreground">Reviewed</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-yellow-500/10">
              <Target className="h-5 w-5 text-yellow-500" />
            </div>
            <div>
              <p className="text-2xl font-bold">{stats.pending}</p>
              <p className="text-xs text-muted-foreground">Pending</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-500/10">
              <BarChart3 className="h-5 w-5 text-purple-500" />
            </div>
            <div>
              <p className="text-sm font-medium">Weak Area</p>
              <p className="text-xs text-muted-foreground">
                {stats.topCategories[0]?.[0] || 'N/A'}
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* Add Error Form */}
      {showForm && (
        <Card className="border-primary/30">
          <CardHeader>
            <CardTitle className="text-lg">
              {editingId ? 'Edit Error Entry' : 'Log New Error'}
            </CardTitle>
            <CardDescription>
              Record the question you got wrong to review later
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Category *</label>
                <Select 
                  value={formData.category} 
                  onValueChange={(v) => setFormData({...formData, category: v})}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map(cat => (
                      <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Topic</label>
                <Input
                  placeholder="e.g., Article 21, Blood Relations"
                  value={formData.topic}
                  onChange={(e) => setFormData({...formData, topic: e.target.value})}
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Question *</label>
              <Textarea
                placeholder="Write the question you got wrong..."
                value={formData.question}
                onChange={(e) => setFormData({...formData, question: e.target.value})}
              />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-red-500">Your (Wrong) Answer</label>
                <Input
                  placeholder="What you answered"
                  value={formData.wrongAnswer}
                  onChange={(e) => setFormData({...formData, wrongAnswer: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-green-500">Correct Answer *</label>
                <Input
                  placeholder="The correct answer"
                  value={formData.correctAnswer}
                  onChange={(e) => setFormData({...formData, correctAnswer: e.target.value})}
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Why you got it wrong / Explanation</label>
              <Textarea
                placeholder="Understand why you made the mistake..."
                value={formData.explanation}
                onChange={(e) => setFormData({...formData, explanation: e.target.value})}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={handleSubmit} className="w-full">
              {editingId ? 'Update Entry' : 'Save Error'} <Check className="h-4 w-4 ml-2" />
            </Button>
          </CardFooter>
        </Card>
      )}

      {/* Filters */}
      <div className="flex flex-wrap gap-4">
        <Select value={filterCategory} onValueChange={setFilterCategory}>
          <SelectTrigger className="w-48">
            <Filter className="h-4 w-4 mr-2" />
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {categories.map(cat => (
              <SelectItem key={cat} value={cat}>{cat}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={filterReviewed} onValueChange={setFilterReviewed}>
          <SelectTrigger className="w-40">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="pending">Pending Review</SelectItem>
            <SelectItem value="reviewed">Reviewed</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Error List */}
      <div className="space-y-4">
        {filteredErrors.length === 0 ? (
          <Card className="p-8 text-center">
            <AlertCircle className="h-12 w-12 mx-auto text-muted-foreground/50 mb-4" />
            <h3 className="text-lg font-medium">No errors logged yet</h3>
            <p className="text-sm text-muted-foreground">
              {errors.length === 0 
                ? 'Click "Log Error" to add your first mistake' 
                : 'No errors match your current filters'}
            </p>
          </Card>
        ) : (
          filteredErrors.map((error) => (
            <Card 
              key={error.id}
              className={`transition-all ${error.reviewed ? 'opacity-75' : ''}`}
            >
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap mb-2">
                      <Badge variant="outline">{error.category}</Badge>
                      {error.topic && <Badge variant="secondary">{error.topic}</Badge>}
                      <Badge variant="outline" className="text-xs">
                        <Calendar className="h-3 w-3 mr-1" />
                        {error.date}
                      </Badge>
                      {error.reviewed && (
                        <Badge className="bg-green-500/10 text-green-600">
                          Reviewed ({error.reviewCount}x)
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-base font-normal">{error.question}</CardTitle>
                  </div>
                  <div className="flex gap-1">
                    <Button variant="ghost" size="icon" onClick={() => handleEdit(error)}>
                      <Edit3 className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => handleDelete(error.id)}>
                      <Trash2 className="h-4 w-4 text-red-500" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="p-3 bg-red-500/5 rounded-lg border-l-4 border-red-500">
                    <p className="text-xs font-medium text-red-500 mb-1">Your Answer</p>
                    <p className="text-sm">{error.wrongAnswer || '-'}</p>
                  </div>
                  <div className="p-3 bg-green-500/5 rounded-lg border-l-4 border-green-500">
                    <p className="text-xs font-medium text-green-500 mb-1">Correct Answer</p>
                    <p className="text-sm">{error.correctAnswer}</p>
                  </div>
                </div>
                {error.explanation && expandedError === error.id && (
                  <div className="mt-3 p-3 bg-muted/30 rounded-lg">
                    <p className="text-xs font-medium text-muted-foreground mb-1">Why I got it wrong</p>
                    <p className="text-sm">{error.explanation}</p>
                  </div>
                )}
              </CardContent>
              <CardFooter className="pt-0 flex justify-between">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setExpandedError(expandedError === error.id ? null : error.id)}
                >
                  {expandedError === error.id ? (
                    <>Less <ChevronUp className="h-4 w-4 ml-1" /></>
                  ) : (
                    <>Explanation <ChevronDown className="h-4 w-4 ml-1" /></>
                  )}
                </Button>
                <Button
                  variant={error.reviewed ? "outline" : "default"}
                  size="sm"
                  onClick={() => toggleReviewed(error.id)}
                >
                  {error.reviewed ? 'Mark Unreviewed' : 'Mark Reviewed'}
                  <Check className="h-4 w-4 ml-1" />
                </Button>
              </CardFooter>
            </Card>
          ))
        )}
      </div>

      {/* Tips */}
      <Card className="bg-red-500/5 border-red-500/20">
        <CardContent className="p-4">
          <h3 className="font-semibold text-red-600 flex items-center gap-2 mb-2">
            <BookOpen className="h-4 w-4" /> Error Log Strategy
          </h3>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Review errors <strong>before</strong> each study session</li>
            <li>• Focus on <strong>WHY</strong> you got it wrong, not just the answer</li>
            <li>• Patterns reveal weak areas - study those topics more</li>
            <li>• Review all pending errors the night before CLAT</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
