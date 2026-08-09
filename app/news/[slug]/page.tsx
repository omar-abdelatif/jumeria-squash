import { notFound } from "next/navigation";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import { getNewsBySlug, newsArticles } from "@/lib/newsData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://jumeira-squash.com";

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const article = getNewsBySlug(slug);
  if (!article) {
    return {
      title: "المقال غير موجود | نادي جميرا للاسكواش",
    };
  }

  const articleUrl = `${siteUrl}/news/${article.slug}`;

  return {
    title: article.title,
    description: article.excerpt,
    alternates: {
      canonical: `/news/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: articleUrl,
      type: "article",
      siteName: "نادي جميرا للاسكواش",
      locale: "ar_AE",
      images: [
        {
          url: article.image,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [article.image],
    },
  };
}

export async function generateStaticParams() {
  return newsArticles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function NewsDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const article = getNewsBySlug(slug);

  if (!article) {
    notFound();
    return null;
  }

  const relatedArticles = newsArticles
    .filter((a) => a.slug !== article.slug)
    .slice(0, 2);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    description: article.excerpt,
    image: [article.image],
    author: {
      "@type": "Person",
      name: article.author.name,
      jobTitle: article.author.role,
    },
    publisher: {
      "@type": "Organization",
      name: "نادي جميرا للاسكواش",
      url: siteUrl,
    },
  };

  return (
    <article className="max-w-4xl mx-auto py-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      {/* Back Button */}
      <AnimatedSection>
        <div className="mb-8">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-on-surface-variant hover:text-secondary transition-colors font-body-md group"
          >
            <span className="material-symbols-outlined text-lg group-hover:-translate-x-1 transition-transform">
              arrow_forward
            </span>
            العودة إلى الأخبار
          </Link>
        </div>
      </AnimatedSection>

      {/* Article Header */}
      <AnimatedSection delay={0.1}>
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <span className="bg-primary-container text-secondary font-label-caps px-3 py-1 rounded border border-outline-variant">
              {article.category}
            </span>
            <span className="text-on-surface-variant text-sm">
              {article.date}
            </span>
            <span className="text-on-surface-variant text-sm flex items-center gap-1">
              <span className="material-symbols-outlined text-base">schedule</span>
              {article.readTime}
            </span>
          </div>

          <h1 className="font-display-lg text-on-surface mb-6 leading-tight">
            {article.title}
          </h1>

          {/* Author Badge */}
          <div className="flex items-center gap-3 pt-4 border-t border-outline-variant/60">
            <div className="w-10 h-10 rounded-full bg-secondary/20 border border-secondary flex items-center justify-center text-secondary font-bold">
              {article.author.name.charAt(0)}
            </div>
            <div>
              <p className="font-headline-md text-base text-on-surface">
                {article.author.name}
              </p>
              <p className="text-xs text-on-surface-variant">
                {article.author.role}
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Hero Image */}
      <AnimatedSection delay={0.2}>
        <div className="relative rounded-2xl overflow-hidden mb-8 sm:mb-12 h-[240px] sm:h-[350px] md:h-[480px] border border-outline-variant shadow-2xl">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
        </div>
      </AnimatedSection>

      {/* Article Content */}
      <AnimatedSection delay={0.3}>
        <div className="space-y-8 text-on-surface-variant font-body-lg leading-relaxed">
          {/* Introduction */}
          <p className="font-body-lg text-on-surface font-medium border-r-4 border-secondary pr-4 leading-relaxed bg-surface-container-low/50 p-4 sm:p-5 rounded-l-xl">
            {article.content.introduction}
          </p>

          {/* Sections */}
          {article.content.sections.map((sec, idx) => (
            <div key={idx} className="space-y-3">
              <h2 className="font-headline-lg text-on-surface pt-4">
                {sec.heading}
              </h2>
              <p className="font-body-lg text-on-surface-variant">{sec.body}</p>
            </div>
          ))}

          {/* Quote Block */}
          {article.content.quote && (
            <div className="my-8 sm:my-10 glass-panel rounded-2xl p-5 sm:p-8 border-r-4 border-secondary relative overflow-hidden">
              <span className="material-symbols-outlined text-secondary/20 text-4xl sm:text-6xl absolute top-4 left-4">
                format_quote
              </span>
              <p className="font-headline-md text-on-surface italic mb-4 relative z-10">
                &ldquo;{article.content.quote.text}&rdquo;
              </p>
              <span className="text-secondary font-label-caps text-xs sm:text-sm block font-semibold">
                — {article.content.quote.author}
              </span>
            </div>
          )}

          {/* Highlights List */}
          {article.content.highlights && (
            <div className="bg-surface-container-low border border-outline-variant rounded-2xl p-5 sm:p-6 my-8">
              <h3 className="font-headline-md text-on-surface mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-lg sm:text-xl">
                  stars
                </span>
                أبرز نقاط المقال
              </h3>
              <ul className="space-y-3 font-body-md text-xs sm:text-sm md:text-base">
                {article.content.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary text-base sm:text-lg mt-0.5">
                      check_circle
                    </span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </AnimatedSection>

      {/* Share & Tags */}
      <AnimatedSection delay={0.4}>
        <div className="my-12 py-6 border-t border-b border-outline-variant flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <span className="font-label-caps text-on-surface-variant">
              مشاركة المقال:
            </span>
            <button className="p-2 rounded-full bg-surface-container-high hover:text-secondary transition-colors text-on-surface-variant">
              <span className="material-symbols-outlined text-lg">share</span>
            </button>
            <button className="p-2 rounded-full bg-surface-container-high hover:text-secondary transition-colors text-on-surface-variant">
              <span className="material-symbols-outlined text-lg">bookmark</span>
            </button>
          </div>

          <Link
            href="/news"
            className="text-secondary font-label-caps hover:underline flex items-center gap-1"
          >
            جميع مقالات الأخبار
            <span className="material-symbols-outlined text-sm transform scale-x-[-1]">
              arrow_forward
            </span>
          </Link>
        </div>
      </AnimatedSection>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <AnimatedSection delay={0.5}>
          <div className="mt-16">
            <h3 className="font-headline-lg text-2xl text-on-surface mb-8 border-b border-outline-variant pb-4">
              مقالات ذات صلة
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedArticles.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/news/${rel.slug}`}
                  className="glass-card rounded-xl overflow-hidden flex flex-col hover-lift group"
                >
                  <div className="h-44 w-full overflow-hidden">
                    <img
                      src={rel.image}
                      alt={rel.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <span className="text-secondary font-label-caps mb-2">
                      {rel.category}
                    </span>
                    <h4 className="font-headline-md text-lg text-on-surface group-hover:text-secondary transition-colors line-clamp-2 mb-2">
                      {rel.title}
                    </h4>
                    <p className="text-xs text-on-surface-variant line-clamp-2 mt-auto">
                      {rel.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </AnimatedSection>
      )}
    </article>
  );
}
