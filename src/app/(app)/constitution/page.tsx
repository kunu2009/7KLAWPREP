"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Search,
  Star,
  Copy,
  Check,
  ChevronDown,
  ChevronUp,
  Bookmark,
  FileText,
  Menu,
  X,
  ArrowLeft,
  Lightbulb,
} from "lucide-react";
import { constitutionArticles, ConstitutionArticle } from "@/lib/constitution-articles-detailed";

export default function ConstitutionPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeArticle, setActiveArticle] = useState<ConstitutionArticle | null>(null);
  const [bookmarkedArticles, setBookmarkedArticles] = useState<Set<string>>(new Set());
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [selectedPart, setSelectedPart] = useState<string>("all");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileReadTab, setMobileReadTab] = useState<"summary" | "full" | "points">("full");
  const isReadyRef = useRef(false);

  useEffect(() => {
    const syncViewport = () => {
      setIsMobile(window.innerWidth < 768);
    };

    syncViewport();
    isReadyRef.current = true;
    window.addEventListener("resize", syncViewport);
    return () => window.removeEventListener("resize", syncViewport);
  }, []);

  useEffect(() => {
    if (!isMobile || !isReadyRef.current) return;

    const onPopState = () => {
      if (activeArticle) {
        setActiveArticle(null);
        return;
      }

      router.push("/bare-acts");
    };

    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, [activeArticle, isMobile, router]);

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

  const parts = Object.keys(articlesByPart).sort();

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

  const handleArticleSelect = (article: ConstitutionArticle) => {
    setActiveArticle(article);
    setMobileReadTab("full");
    setMenuOpen(false);
    if (isMobile) {
      window.history.pushState({ article: article.id }, "", window.location.href);
    }
  };

  const handleBack = () => {
    setActiveArticle(null);
    setMobileReadTab("full");
    setMenuOpen(false);
  };

  // MOBILE VIEW - Article List
  if (isMobile && !activeArticle) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Mobile Header */}
        <div className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
          <div className="p-4 space-y-3">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-lg"
                  onClick={() => router.push("/bare-acts")}
                >
                  <ArrowLeft className="h-5 w-5" />
                </Button>
                <div>
                  <h1 className="text-lg font-bold text-slate-900">Constitution</h1>
                  <p className="text-xs text-slate-500">India - Full Reference</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMenuOpen(!menuOpen)}
                className="rounded-lg"
              >
                {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>

            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 py-2 text-sm"
              />
            </div>

            {/* Part Filter - Collapsible on mobile */}
            {menuOpen && (
              <div className="space-y-2">
                <Button
                  variant={selectedPart === "all" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedPart("all")}
                  className="w-full text-xs"
                >
                  All Parts
                </Button>
                <div className="grid grid-cols-2 gap-2">
                  {parts.slice(0, 6).map((part) => (
                    <Button
                      key={part}
                      variant={selectedPart === part ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedPart(part)}
                      className="text-xs"
                    >
                      {part.split(" - ")[0].substring(0, 12)}
                    </Button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Article List */}
        <div className="p-4 space-y-2">
          {filteredArticles.length > 0 ? (
            filteredArticles.map((article) => (
              <button
                key={article.id}
                onClick={() => handleArticleSelect(article)}
                className="w-full p-3 rounded-lg bg-white border border-slate-200 text-left hover:border-blue-400 hover:bg-blue-50 transition-all"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="font-mono text-xs">
                        {article.article}
                      </Badge>
                      {article.landmark && <Star className="h-3 w-3 text-yellow-500 flex-shrink-0" />}
                    </div>
                    <h3 className="font-semibold text-sm text-slate-900 mt-1 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">{article.summary}</p>
                  </div>
                  <ChevronDown className="h-4 w-4 text-slate-400 flex-shrink-0 mt-1" />
                </div>
              </button>
            ))
          ) : (
            <div className="text-center py-12">
              <Search className="h-12 w-12 text-slate-300 mx-auto mb-2" />
              <p className="text-sm text-slate-500">No articles found</p>
            </div>
          )}
        </div>
      </div>
    );
  }

  // MOBILE VIEW - Article Details
  if (isMobile && activeArticle) {
    return (
      <div className="min-h-screen bg-slate-50">
        {/* Mobile Header */}
        <div className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
          <div className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <Button variant="ghost" size="icon" onClick={handleBack} className="flex-shrink-0">
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <div className="min-w-0">
                <Badge variant="secondary" className="font-mono text-xs mb-1">
                  {activeArticle.article}
                </Badge>
                <h1 className="font-bold text-sm text-slate-900 line-clamp-1">
                  {activeArticle.title}
                </h1>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => toggleBookmark(activeArticle.id)}
              className="flex-shrink-0"
            >
              <Bookmark
                className={`h-5 w-5 ${
                  bookmarkedArticles.has(activeArticle.id)
                    ? "text-purple-500 fill-purple-500"
                    : "text-slate-400"
                }`}
              />
            </Button>
          </div>

          <div className="px-4 pb-3">
            <div className="grid grid-cols-3 gap-2 rounded-lg bg-slate-100 p-1">
              <button
                onClick={() => setMobileReadTab("summary")}
                className={`rounded-md py-2 text-xs font-medium transition-colors ${
                  mobileReadTab === "summary" ? "bg-white text-slate-900 shadow-sm" : "text-slate-600"
                }`}
              >
                Summary
              </button>
              <button
                onClick={() => setMobileReadTab("full")}
                className={`rounded-md py-2 text-xs font-medium transition-colors ${
                  mobileReadTab === "full" ? "bg-white text-slate-900 shadow-sm" : "text-slate-600"
                }`}
              >
                Full Text
              </button>
              <button
                onClick={() => setMobileReadTab("points")}
                className={`rounded-md py-2 text-xs font-medium transition-colors ${
                  mobileReadTab === "points" ? "bg-white text-slate-900 shadow-sm" : "text-slate-600"
                }`}
              >
                Key Points
              </button>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="p-4 space-y-4">
          {mobileReadTab === "summary" && (
            <Card className="border-0 bg-white">
              <CardContent className="p-5">
                <p className="text-[15px] text-slate-700 leading-7">{activeArticle.summary}</p>
              </CardContent>
            </Card>
          )}

          {mobileReadTab === "full" && (
            <Card className="border-0 bg-white">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Full Text</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
                  <p className="text-[14px] leading-7 text-slate-800 whitespace-pre-wrap">
                    {activeArticle.fullText}
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => copyToClipboard(activeArticle.fullText, activeArticle.id)}
                  className="mt-3 w-full"
                >
                  {copiedId === activeArticle.id ? (
                    <>
                      <Check className="h-4 w-4 mr-1" /> Copied
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4 mr-1" /> Copy Full Text
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          )}

          {mobileReadTab === "points" && (
            <Card className="border-0 bg-white">
              <CardHeader className="pb-2">
                <CardTitle className="text-base flex items-center gap-2">
                  <Lightbulb className="h-4 w-4 text-yellow-600" />
                  Key Points
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3">
                  {activeArticle.keyPoints.map((point, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                      <div className="flex gap-3">
                        <span className="text-[12px] font-semibold text-slate-500 mt-0.5">{idx + 1}.</span>
                        <p className="text-[14px] leading-6 text-slate-800">{point}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Related Articles */}
          {activeArticle.relatedArticles.length > 0 && (
            <Card className="border-0 bg-white">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Related</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-2">
                  {activeArticle.relatedArticles.map((relatedId) => (
                    <Button
                      key={relatedId}
                      variant="outline"
                      size="sm"
                      className="text-xs"
                      onClick={() => {
                        const related = constitutionArticles.find((a) => a.id.endsWith(relatedId));
                        if (related) handleArticleSelect(related);
                      }}
                    >
                      {relatedId}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Bottom Padding for Safety */}
        <div className="h-4" />
      </div>
    );
  }

  // DESKTOP VIEW - Original layout
  return (
    <div className="container mx-auto p-4 md:p-6 max-w-6xl">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 rounded-lg bg-blue-500/10">
            <FileText className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">Constitution of India</h1>
            <p className="text-muted-foreground">Detailed explanation of major Articles</p>
          </div>
        </div>
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
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Article List Sidebar */}
        <div className="md:col-span-1 md:sticky md:top-4 md:h-fit">
          <Card className="border-blue-200/30">
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Articles ({filteredArticles.length})</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-1">
                {filteredArticles.map((article) => (
                  <button
                    key={article.id}
                    onClick={() => handleArticleSelect(article)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                      activeArticle?.id === article.id
                        ? "bg-blue-500/20 text-blue-700 font-semibold"
                        : "hover:bg-slate-100 text-slate-700"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="font-mono text-xs text-muted-foreground">{article.article}</div>
                        <div className="font-medium line-clamp-2">{article.title}</div>
                      </div>
                      {article.landmark && <Star className="h-3 w-3 text-yellow-500 flex-shrink-0 mt-1" />}
                    </div>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Article Detail */}
        {(activeArticle ?? filteredArticles[0]) && (
          <div className="md:col-span-2 space-y-6">
            {(() => {
              const article = activeArticle ?? filteredArticles[0];
              if (!article) return null;
              return (
                <>
            {/* Article Header */}
            <Card className="bg-gradient-to-br from-blue-500/10 to-slate-500/5">
              <CardHeader>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary" className="font-mono text-base px-3 py-1">
                        {article.article}
                      </Badge>
                      {article.landmark && (
                        <Badge className="bg-yellow-500/20 text-yellow-700 hover:bg-yellow-500/30">
                          <Star className="h-3 w-3 mr-1" /> Landmark
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-2xl">{article.title}</CardTitle>
                    <CardDescription className="text-sm mt-2 text-slate-700">
                      <strong>Part:</strong> {article.part}
                    </CardDescription>
                  </div>

                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => toggleBookmark(article.id)}
                  >
                    <Bookmark
                      className={`h-5 w-5 ${
                        bookmarkedArticles.has(article.id)
                          ? "text-purple-500 fill-purple-500"
                          : "text-muted-foreground"
                      }`}
                    />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-700 leading-relaxed">{article.summary}</p>
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
                    {article.fullText}
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => copyToClipboard(article.fullText, article.id)}
                  className="mt-2"
                >
                  {copiedId === article.id ? (
                    <>
                      <Check className="h-4 w-4 mr-2" /> Copied
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4 mr-2" /> Copy
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>

            {/* Key Points */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-yellow-600" />
                  Key Points
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {article.keyPoints.map((point, idx) => {
                    const pointId = `${article.id}-point-${idx}`;
                    return (
                      <div key={pointId} className="p-3 rounded-lg bg-slate-50">
                        <div className="flex items-start gap-2">
                          <span className="text-yellow-600 mt-1">•</span>
                          <p className="text-sm text-slate-800 leading-relaxed">{point}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Related Articles */}
            {article.relatedArticles.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Related Articles</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {article.relatedArticles.map((relatedId) => (
                      <Button
                        key={relatedId}
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          const related = constitutionArticles.find((a) => a.id.endsWith(relatedId));
                          if (related) handleArticleSelect(related);
                        }}
                      >
                        {relatedId}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
                </>
              );
            })()}
          </div>
        )}
      </div>
    </div>
  );
}
