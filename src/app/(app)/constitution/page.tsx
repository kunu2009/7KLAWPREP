"use client";

import { useState, useMemo } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import {
  BookOpen,
  Search,
  Star,
  Copy,
  Check,
  ChevronDown,
  ChevronUp,
  Bookmark,
  FileText,
  Lightbulb,
} from "lucide-react";
import { constitutionArticles, ConstitutionArticle } from "@/lib/constitution-articles-detailed";

export default function ConstitutionPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeArticle, setActiveArticle] = useState<string>("coi-preamble");
  const [expandedPoints, setExpandedPoints] = useState<Set<string>>(new Set());
  const [bookmarkedArticles, setBookmarkedArticles] = useState<Set<string>>(new Set());
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [selectedPart, setSelectedPart] = useState<string>("all");

  // Group articles by part
  const articlesByPart = useMemo(() => {
    const grouped: { [key: string]: ConstitutionArticle[] } = {};
    constitutionArticles.forEach((article) => {
      if (!grouped[article.part]) {
        grouped[article.part] = [];
      }
      grouped[article.part].push(article);
    });
    return grouped;
  }, []);

  // Filter articles based on search and part selection
  const filteredArticles = useMemo(() => {
    let filtered = constitutionArticles;

    if (selectedPart !== "all") {
      filtered = filtered.filter((a) => a.part === selectedPart);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (article) =>
          article.article.toLowerCase().includes(query) ||
          article.title.toLowerCase().includes(query) ||
          article.summary.toLowerCase().includes(query) ||
          article.fullText.toLowerCase().includes(query) ||
          article.keyPoints.some((p) => p.toLowerCase().includes(query))
      );
    }

    return filtered;
  }, [searchQuery, selectedPart]);

  const currentArticle = constitutionArticles.find((a) => a.id === activeArticle);
  const parts = Object.keys(articlesByPart).sort();

  const toggleExpandPoint = (pointId: string) => {
    const newExpanded = new Set(expandedPoints);
    if (newExpanded.has(pointId)) {
      newExpanded.delete(pointId);
    } else {
      newExpanded.add(pointId);
    }
    setExpandedPoints(newExpanded);
  };

  const toggleBookmark = (id: string) => {
    const newBookmarked = new Set(bookmarkedArticles);
    if (newBookmarked.has(id)) {
      newBookmarked.delete(id);
    } else {
      newBookmarked.add(id);
    }
    setBookmarkedArticles(newBookmarked);
  };

  const copyToClipboard = async (text: string, id: string) => {
    await navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const bookmarkedItems = constitutionArticles.filter((a) => bookmarkedArticles.has(a.id));

  return (
    <div className="container mx-auto p-4 md:p-6 max-w-6xl">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 rounded-lg bg-blue-500/10">
            <FileText className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">Constitution of India - Full Reference</h1>
            <p className="text-muted-foreground">Detailed explanation of all major Articles across 12 comprehensive iterations</p>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        <Card className="bg-gradient-to-br from-blue-500/10 to-blue-500/5">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <FileText className="h-4 w-4 text-blue-600" />
              <span className="text-sm text-muted-foreground">Articles</span>
            </div>
            <p className="text-2xl font-bold mt-1">{constitutionArticles.length}</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-purple-500/10 to-purple-500/5">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Bookmark className="h-4 w-4 text-purple-600" />
              <span className="text-sm text-muted-foreground">Bookmarked</span>
            </div>
            <p className="text-2xl font-bold mt-1">{bookmarkedArticles.size}</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-yellow-500/10 to-yellow-500/5">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-yellow-600" />
              <span className="text-sm text-muted-foreground">Landmark</span>
            </div>
            <p className="text-2xl font-bold mt-1">
              {constitutionArticles.filter((a) => a.landmark).length}
            </p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-green-500/10 to-green-500/5">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Lightbulb className="h-4 w-4 text-green-600" />
              <span className="text-sm text-muted-foreground">Parts</span>
            </div>
            <p className="text-2xl font-bold mt-1">{parts.length}</p>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <div className="mb-6 space-y-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search articles, keywords, content..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          <Button
            variant={selectedPart === "all" ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedPart("all")}
          >
            All Parts
          </Button>
          {parts.slice(0, 8).map((part) => (
            <Button
              key={part}
              variant={selectedPart === part ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedPart(part)}
              className="text-xs"
            >
              {part.split(" - ")[0]}
            </Button>
          ))}
          {parts.length > 8 && (
            <Button variant="outline" size="sm" className="text-xs">
              +{parts.length - 8} more
            </Button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Article List Sidebar */}
        <div className="md:col-span-1 md:sticky md:top-4 md:h-fit">
          <Card className="border-blue-200/30">
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Articles Index</CardTitle>
              <CardDescription className="text-xs">Found {filteredArticles.length} articles</CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[500px]">
                <div className="space-y-1 pr-4">
                  {filteredArticles.map((article) => (
                    <button
                      key={article.id}
                      onClick={() => setActiveArticle(article.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                        activeArticle === article.id
                          ? "bg-blue-500/20 text-blue-700 font-semibold"
                          : "hover:bg-slate-100 text-slate-700"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1">
                          <div className="font-mono text-xs text-muted-foreground">{article.article}</div>
                          <div className="text-sm font-medium line-clamp-2">{article.title}</div>
                        </div>
                        {article.landmark && <Star className="h-3 w-3 text-yellow-500 flex-shrink-0 mt-1" />}
                      </div>
                    </button>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </div>

        {/* Article Detail */}
        {currentArticle && (
          <div className="md:col-span-2 space-y-6">
            {/* Article Header */}
            <Card className="bg-gradient-to-br from-blue-500/10 to-slate-500/5">
              <CardHeader>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary" className="font-mono text-base px-3 py-1">
                        {currentArticle.article}
                      </Badge>
                      {currentArticle.landmark && (
                        <Badge className="bg-yellow-500/20 text-yellow-700 hover:bg-yellow-500/30">
                          <Star className="h-3 w-3 mr-1" /> Landmark
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-2xl">{currentArticle.title}</CardTitle>
                    <CardDescription className="text-sm mt-2 text-slate-700">
                      <strong>Part:</strong> {currentArticle.part}
                    </CardDescription>
                  </div>

                  <div className="flex gap-1 flex-shrink-0">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => toggleBookmark(currentArticle.id)}
                      title="Bookmark this article"
                    >
                      <Bookmark
                        className={`h-5 w-5 ${
                          bookmarkedArticles.has(currentArticle.id)
                            ? "text-purple-500 fill-purple-500"
                            : "text-muted-foreground"
                        }`}
                      />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => copyToClipboard(currentArticle.fullText, currentArticle.id)}
                      title="Copy full text"
                    >
                      {copiedId === currentArticle.id ? (
                        <Check className="h-5 w-5 text-green-500" />
                      ) : (
                        <Copy className="h-5 w-5 text-muted-foreground" />
                      )}
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-700 leading-relaxed">{currentArticle.summary}</p>
              </CardContent>
            </Card>

            {/* Full Text */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Full Text</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
                  <p className="text-sm leading-relaxed whitespace-pre-wrap text-slate-800">
                    {currentArticle.fullText}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Key Points */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-yellow-600" />
                  Key Points &amp; Implications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {currentArticle.keyPoints.map((point, idx) => {
                    const pointId = `${currentArticle.id}-point-${idx}`;
                    const isExpanded = expandedPoints.has(pointId);
                    const isLong = point.length > 100;

                    return (
                      <div key={pointId} className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                        <div
                          className={`flex items-start gap-2 cursor-pointer ${isLong ? "" : ""}`}
                          onClick={() => isLong && toggleExpandPoint(pointId)}
                        >
                          <div className="text-yellow-600 mt-1">•</div>
                          <div className="flex-1">
                            <p
                              className={`text-sm leading-relaxed ${
                                isLong && !isExpanded ? "line-clamp-2" : ""
                              }`}
                            >
                              {point}
                            </p>
                            {isLong && (
                              <Button
                                variant="ghost"
                                size="sm"
                                className="mt-1 h-auto p-0 text-xs text-blue-600"
                                onClick={() => toggleExpandPoint(pointId)}
                              >
                                {isExpanded ? (
                                  <>
                                    <ChevronUp className="h-3 w-3 mr-1" /> Show less
                                  </>
                                ) : (
                                  <>
                                    <ChevronDown className="h-3 w-3 mr-1" /> Show more
                                  </>
                                )}
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Related Articles */}
            {currentArticle.relatedArticles.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Related Articles</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {currentArticle.relatedArticles.map((relatedId) => {
                      const relatedArticle = constitutionArticles.find((a) => a.id.endsWith(relatedId));
                      if (!relatedArticle) return null;

                      return (
                        <Button
                          key={relatedId}
                          variant="outline"
                          size="sm"
                          onClick={() => setActiveArticle(relatedArticle.id)}
                          className="text-xs cursor-pointer hover:bg-blue-50"
                        >
                          {relatedId}
                        </Button>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Exam Info */}
            {currentArticle.exams.length > 0 && (
              <Card className="bg-gradient-to-br from-purple-500/10 to-purple-500/5">
                <CardHeader>
                  <CardTitle className="text-lg">Exam Relevance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {currentArticle.exams.map((exam) => (
                      <Badge key={exam} variant="secondary" className="bg-purple-500/20 text-purple-700">
                        {exam}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        )}
      </div>

      {/* Bookmarked Articles Section */}
      {bookmarkedItems.length > 0 && (
        <Card className="mt-8 bg-gradient-to-br from-purple-500/10 to-purple-500/5">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <Bookmark className="h-5 w-5 text-purple-600" />
              Bookmarked Articles ({bookmarkedItems.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {bookmarkedItems.map((item) => (
                <Badge
                  key={item.id}
                  variant="secondary"
                  className="cursor-pointer hover:bg-purple-500/20 bg-purple-500/10"
                  onClick={() => setActiveArticle(item.id)}
                >
                  {item.article} - {item.title.substring(0, 20)}...
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
