"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const searchableItems = [
  {
    title: "ملاعب بطولة زجاجية",
    category: "المرافق",
    href: "/about",
    description: "6 ملاعب فاخرة معتمدة من الاتحاد الدولي للاسكواش (WSF)",
  },
  {
    title: "ماركوس ثورن - المدرب الرئيسي",
    category: "الفريق",
    href: "/coaches",
    description: "لاعب سابق ضمن أفضل 20 عالمياً، متخصص في الاستراتيجية التكتيكية",
  },
  {
    title: "إيلينا روستوفا - محترف أول",
    category: "الفريق",
    href: "/coaches",
    description: "خبيرة الميكانيكا الحيوية والأسلوب الفني",
  },
  {
    title: "ديفيد تشين - أخصائي الأداء",
    category: "الفريق",
    href: "/coaches",
    description: "أخصائي القوة والرشاقة والوقاية من الإصابات",
  },
  {
    title: "كلاسيك الخريف السنوي",
    category: "الأخبار",
    href: "/news",
    description: "حسم نصف النهائي في مباريات مثيرة من خمسة أشواط",
  },
  {
    title: "مضارب كاربون-لايت برو سيريز",
    category: "الأخبار",
    href: "/news",
    description: "مراجعة شاملة لأحدث معدات وتقنيات الاسكواش",
  },
  {
    title: "حجز ملاعب ومعلومات العضوية",
    category: "الخدمات",
    href: "/contact",
    description: "تواصل مع مكتب الاستقبال لحجز ملعبك الخاص",
  },
  {
    title: "عن نادي جميرا للاسكواش",
    category: "معلومات",
    href: "/about",
    description: "رؤيتنا ومهمتنا في التميز الرياضي والضيافة الفاخرة",
  },
];

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const filteredItems = query.trim() === ""
    ? searchableItems.slice(0, 4)
    : searchableItems.filter(
        (item) =>
          item.title.includes(query) ||
          item.category.includes(query) ||
          item.description.includes(query)
      );

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="relative z-10 w-full max-w-2xl bg-surface-container-low border border-outline-variant rounded-2xl shadow-2xl overflow-hidden glass-panel"
          >
            {/* Search Input Bar */}
            <div className="p-4 border-b border-outline-variant flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary text-2xl">
                search
              </span>
              <input
                type="text"
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="ابحث عن ملاعب، مدربين، أخبار، أو خدمات..."
                className="w-full bg-transparent text-on-surface text-lg focus:outline-none placeholder:text-on-surface-variant/60"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="text-on-surface-variant hover:text-on-surface text-sm"
                >
                  مسح
                </button>
              )}
              <kbd className="hidden sm:inline-block px-2 py-1 text-xs bg-surface-container-high border border-outline-variant rounded text-on-surface-variant font-mono">
                ESC
              </kbd>
            </div>

            {/* Search Results */}
            <div className="p-4 max-h-[60vh] overflow-y-auto space-y-2">
              <div className="text-xs font-label-caps text-on-surface-variant px-3 py-1">
                {query ? `نتائج البحث (${filteredItems.length})` : "الأكثر بحثاً"}
              </div>

              {filteredItems.length === 0 ? (
                <div className="py-12 text-center text-on-surface-variant">
                  <span className="material-symbols-outlined text-4xl mb-2 block">
                    search_off
                  </span>
                  لم يتم العثور على نتائج تطابق "{query}"
                </div>
              ) : (
                filteredItems.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.href}
                    onClick={onClose}
                    className="block p-3.5 rounded-xl hover:bg-surface-container-high border border-transparent hover:border-outline-variant transition-all group"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-headline-md text-base text-on-surface group-hover:text-secondary transition-colors">
                        {item.title}
                      </span>
                      <span className="text-xs bg-primary-container text-secondary px-2.5 py-0.5 rounded border border-outline-variant font-label-caps">
                        {item.category}
                      </span>
                    </div>
                    <p className="text-xs text-on-surface-variant line-clamp-1">
                      {item.description}
                    </p>
                  </Link>
                ))
              )}
            </div>

            {/* Modal Footer */}
            <div className="px-5 py-3 bg-surface-container-lowest border-t border-outline-variant/60 flex justify-between items-center text-xs text-on-surface-variant">
              <span>نادي جميرا للاسكواش</span>
              <span>انقر على أي نتيجة للانتقال مباشرة</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
