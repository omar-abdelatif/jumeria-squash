"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { NewsArticle } from "@/lib/newsData";

interface NewsListWithLoadMoreProps {
  initialArticles: NewsArticle[];
  allArticles: NewsArticle[];
}

export default function NewsListWithLoadMore({
  initialArticles,
  allArticles,
}: NewsListWithLoadMoreProps) {
  const [visibleCount, setVisibleCount] = useState(initialArticles.length);
  const [isLoading, setIsLoading] = useState(false);

  const displayedArticles = allArticles.slice(0, visibleCount);
  const hasMore = visibleCount < allArticles.length;

  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleCount((prev) => Math.min(prev + 3, allArticles.length));
      setIsLoading(false);
    }, 800);
  };

  return (
    <>
      {/* News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {displayedArticles.map((article, idx) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: (idx % 3) * 0.1 }}
            >
              <article className="glass-card rounded-xl overflow-hidden flex flex-col hover-lift h-full group">
                <div className="h-48 w-full overflow-hidden">
                  <img
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    src={article.image}
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-secondary font-label-caps">
                      {article.category}
                    </span>
                    <span className="text-on-surface-variant font-label-caps">
                      {article.date}
                    </span>
                  </div>
                  <h3 className="font-headline-md text-on-surface mb-3 line-clamp-2 group-hover:text-secondary transition-colors">
                    {article.title}
                  </h3>
                  <p className="font-body-md text-on-surface-variant mb-6 line-clamp-3 flex-grow">
                    {article.excerpt}
                  </p>
                  <Link
                    href={`/news/${article.slug}`}
                    className="text-secondary font-semibold flex items-center gap-2 hover:opacity-80 transition-opacity mt-auto"
                  >
                    اقرأ المزيد
                    <span className="material-symbols-outlined text-sm">
                      arrow_back
                    </span>
                  </Link>
                </div>
              </article>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Load More Button */}
      <div className="flex flex-col items-center justify-center mt-16 gap-2">
        {hasMore ? (
          <button
            onClick={handleLoadMore}
            disabled={isLoading}
            className="bg-transparent border border-outline-variant text-on-surface px-8 py-3.5 rounded hover:border-secondary hover:text-secondary transition-all active:scale-95 cursor-pointer font-medium flex items-center gap-3 gold-glow disabled:opacity-50"
          >
            {isLoading ? (
              <>
                <span className="w-5 h-5 border-2 border-secondary border-t-transparent rounded-full animate-spin" />
                جاري تحميل المقالات...
              </>
            ) : (
              <>
                تحميل المزيد من المقالات
                <span className="material-symbols-outlined text-lg">
                  expand_more
                </span>
              </>
            )}
          </button>
        ) : (
          <div className="text-on-surface-variant text-sm border border-outline-variant/40 bg-surface-container-low px-6 py-2.5 rounded-full font-label-caps">
            تم عرض جميع المقالات المتاحة ({allArticles.length})
          </div>
        )}
      </div>
    </>
  );
}
