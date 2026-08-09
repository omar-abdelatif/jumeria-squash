import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import { newsArticles } from "@/lib/newsData";
import NewsListWithLoadMore from "@/components/NewsListWithLoadMore";

export const metadata: Metadata = {
  title: "الأخبار والتحديثات",
  description:
    "ابق على اطلاع بنتائج البطولات، وإعلانات النادي، ورؤى الأداء ومراجعات المعدات من مجتمع نادي جميرا للاسكواش.",
  alternates: {
    canonical: "/news",
  },
  keywords: [
    "أخبار نادي جميرا للاسكواش",
    "نتائج بطولات اسكواش دبي",
    "مراجعة مضارب اسكواش",
    "تغذية وتدريب اسكواش",
  ],
  openGraph: {
    title: "الأخبار والتحديثات | نادي جميرا للاسكواش",
    description:
      "ابق على اطلاع بنتائج البطولات، وإعلانات النادي، ورؤى الأداء ومراجعات المعدات من مجتمع نادي جميرا للاسكواش.",
    url: "https://jumeira-squash.com/news",
  },
};

export default function NewsPage() {
  const featuredArticle = newsArticles.find((a) => a.featured) || newsArticles[0];
  const gridArticles = newsArticles.filter((a) => a.slug !== featuredArticle.slug);

  return (
    <>
      {/* Page Header */}
      <AnimatedSection>
        <div className="mb-10 sm:mb-16 max-w-3xl">
          <h1 className="font-display-lg text-on-surface mb-4 sm:mb-6">آخر الأخبار</h1>
          <p className="font-body-lg text-on-surface-variant">
            ابق على اطلاع بنتائج البطولات، وإعلانات النادي، ورؤى الأداء من مجتمع
            نادي جميرا للاسكواش.
          </p>
        </div>
      </AnimatedSection>

      {/* Featured Article */}
      <AnimatedSection delay={0.1}>
        <div className="glass-card rounded-xl overflow-hidden mb-12 sm:mb-16 hover-lift group">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            <div className="h-[240px] sm:h-[300px] md:h-[450px] w-full overflow-hidden">
              <img
                alt={featuredArticle.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src={featuredArticle.image}
              />
            </div>
            <div className="p-6 sm:p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-3">
                <span className="bg-surface-container-highest px-3 py-1 rounded text-secondary font-label-caps border border-outline-variant">
                  {featuredArticle.category}
                </span>
                <span className="text-on-surface-variant font-label-caps">
                  {featuredArticle.date}
                </span>
              </div>
              <h2 className="font-headline-lg text-on-surface mb-4 sm:mb-6 group-hover:text-secondary transition-colors">
                {featuredArticle.title}
              </h2>
              <p className="font-body-md text-on-surface-variant mb-6 line-clamp-3">
                {featuredArticle.excerpt}
              </p>
              <Link
                href={`/news/${featuredArticle.slug}`}
                className="text-secondary font-semibold flex items-center gap-2 hover:opacity-80 transition-opacity mt-auto font-body-md text-sm sm:text-base"
              >
                اقرأ المقال كاملاً{" "}
                <span className="material-symbols-outlined text-sm">
                  arrow_back
                </span>
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Interactive News Grid with Working Load More */}
      <NewsListWithLoadMore
        initialArticles={gridArticles.slice(0, 3)}
        allArticles={gridArticles}
      />
    </>
  );
}
