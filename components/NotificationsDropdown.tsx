"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export interface NotificationItem {
  id: number;
  title: string;
  description?: string;
  time: string;
  unread: boolean;
  icon: string;
  href: string;
  category?: "booking" | "tournament" | "training" | "info";
}

interface NotificationsDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  onUnreadCountChange?: (count: number) => void;
}

const initialNotifications: NotificationItem[] = [
  {
    id: 1,
    title: "تم تأكيد حجز الملعب #3",
    description: "حجزك ليوم الغد الساعة 6:00 مساءً تم تأكيده بنجاح.",
    time: "منذ 10 دقائق",
    unread: true,
    icon: "event_available",
    href: "/contact",
    category: "booking",
  },
  {
    id: 2,
    title: "بطولة الخريف: تبدأ التصفيات غداً",
    description: "راجع جدول المباريات والمواجهات الافتتاحية للموسم.",
    time: "منذ ساعتين",
    unread: true,
    icon: "trophy",
    href: "/news",
    category: "tournament",
  },
  {
    id: 3,
    title: "تمت إضافة جلسة تدريب جديدة مع الكابتن ماركوس",
    description: "جلسة أداء عالي متقدم لمستوى المحترفين.",
    time: "منذ يوم واحد",
    unread: false,
    icon: "sports",
    href: "/coaches",
    category: "training",
  },
  {
    id: 4,
    title: "تحديث مواقيت عمل صالة الاستشفاء",
    description: "تم تمديد ساعات العمل حتى 11:00 مساءً طوال الأسبوع.",
    time: "منذ يومين",
    unread: false,
    icon: "schedule",
    href: "/about",
    category: "info",
  },
];

export default function NotificationsDropdown({
  isOpen,
  onClose,
  onUnreadCountChange,
}: NotificationsDropdownProps) {
  const [notifications, setNotifications] = useState<NotificationItem[]>(initialNotifications);
  const [filter, setFilter] = useState<"all" | "unread">("all");

  const unreadCount = notifications.filter((n) => n.unread).length;

  useEffect(() => {
    if (onUnreadCountChange) {
      onUnreadCountChange(unreadCount);
    }
  }, [unreadCount, onUnreadCountChange]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, unread: false })));
  };

  const toggleReadStatus = (id: number) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, unread: !n.unread } : n))
    );
  };

  const deleteNotification = (id: number) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  const clearAll = () => {
    setNotifications([]);
  };

  const filteredNotifications = notifications.filter((n) => {
    if (filter === "unread") return n.unread;
    return true;
  });

  const getCategoryStyle = (category?: string, unread?: boolean) => {
    if (!unread) {
      return "bg-surface-container-high text-on-surface-variant border-outline-variant/60";
    }
    switch (category) {
      case "booking":
        return "bg-secondary/15 text-secondary border-secondary/40";
      case "tournament":
        return "bg-amber-500/15 text-amber-400 border-amber-500/40";
      case "training":
        return "bg-emerald-500/15 text-emerald-400 border-emerald-500/40";
      case "info":
      default:
        return "bg-primary/15 text-primary border-primary/40";
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop for closing */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-xs sm:bg-transparent sm:backdrop-blur-none"
            onClick={onClose}
          />

          {/* Popover Card */}
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.96 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            role="dialog"
            aria-label="قائمة الإشعارات"
            className="fixed left-3 right-3 top-20 z-50 max-w-md mx-auto sm:absolute sm:inset-auto sm:left-0 sm:top-full sm:mt-2.5 sm:w-96 sm:max-w-none bg-surface-container-low/95 border border-outline-variant/80 rounded-2xl shadow-2xl overflow-hidden glass-panel flex flex-col max-h-[calc(100vh-6rem)] sm:max-h-[520px]"
          >
            {/* Header */}
            <div className="p-3.5 sm:p-4 border-b border-outline-variant/60 bg-surface-container-high/40 flex flex-col gap-3 shrink-0">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="font-headline-md text-base sm:text-lg font-bold text-on-surface">
                    الإشعارات
                  </span>
                  {unreadCount > 0 && (
                    <span className="bg-secondary text-on-secondary text-xs px-2 py-0.5 rounded-full font-bold">
                      {unreadCount} جديد
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  {unreadCount > 0 && (
                    <button
                      onClick={markAllAsRead}
                      className="text-xs text-secondary hover:underline cursor-pointer font-body-md transition-colors"
                    >
                      تحديد الكل كمقروء
                    </button>
                  )}

                  {/* Mobile Close Button */}
                  <button
                    onClick={onClose}
                    aria-label="إغلاق"
                    className="sm:hidden p-1 text-on-surface-variant hover:text-on-surface rounded-lg hover:bg-surface-container-high transition-colors cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-lg">close</span>
                  </button>
                </div>
              </div>

              {/* Filter Tabs */}
              <div className="flex items-center gap-1 bg-surface-container-lowest/60 p-1 rounded-xl border border-outline-variant/40 text-xs">
                <button
                  onClick={() => setFilter("all")}
                  className={`flex-1 py-1.5 px-3 rounded-lg font-medium transition-all text-center cursor-pointer ${
                    filter === "all"
                      ? "bg-secondary text-on-secondary font-bold shadow-xs"
                      : "text-on-surface-variant hover:text-on-surface"
                  }`}
                >
                  الكل ({notifications.length})
                </button>
                <button
                  onClick={() => setFilter("unread")}
                  className={`flex-1 py-1.5 px-3 rounded-lg font-medium transition-all text-center cursor-pointer ${
                    filter === "unread"
                      ? "bg-secondary text-on-secondary font-bold shadow-xs"
                      : "text-on-surface-variant hover:text-on-surface"
                  }`}
                >
                  غير مقروء ({unreadCount})
                </button>
              </div>
            </div>

            {/* Notification Items List */}
            <div className="divide-y divide-outline-variant/30 overflow-y-auto flex-1 min-h-0">
              {filteredNotifications.length > 0 ? (
                filteredNotifications.map((n) => (
                  <div
                    key={n.id}
                    className={`group relative flex items-start gap-3 p-3.5 sm:p-4 hover:bg-surface-container-high/80 transition-all ${
                      n.unread ? "bg-surface-container/70" : ""
                    }`}
                  >
                    <Link
                      href={n.href}
                      onClick={onClose}
                      className="flex items-start gap-3 flex-grow min-w-0"
                    >
                      <div
                        className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0 border transition-transform group-hover:scale-105 ${getCategoryStyle(
                          n.category,
                          n.unread
                        )}`}
                      >
                        <span className="material-symbols-outlined text-lg sm:text-xl">
                          {n.icon}
                        </span>
                      </div>

                      <div className="flex-grow min-w-0">
                        <p
                          className={`text-xs sm:text-sm leading-snug font-body-md ${
                            n.unread
                              ? "text-on-surface font-bold"
                              : "text-on-surface-variant"
                          }`}
                        >
                          {n.title}
                        </p>
                        {n.description && (
                          <p className="text-[11px] sm:text-xs text-on-surface-variant/80 mt-0.5 line-clamp-2">
                            {n.description}
                          </p>
                        )}
                        <span className="text-[10px] sm:text-[11px] text-on-surface-variant/60 mt-1 block">
                          {n.time}
                        </span>
                      </div>
                    </Link>

                    {/* Item action buttons */}
                    <div className="flex items-center gap-1 shrink-0 pt-0.5">
                      <button
                        onClick={() => toggleReadStatus(n.id)}
                        title={n.unread ? "تحديد كمقروء" : "تحديد كغير مقروء"}
                        className="p-1 text-on-surface-variant/60 hover:text-secondary hover:bg-surface-container-highest rounded-lg transition-colors cursor-pointer"
                      >
                        <span className="material-symbols-outlined text-base">
                          {n.unread ? "mark_email_read" : "mark_email_unread"}
                        </span>
                      </button>
                      <button
                        onClick={() => deleteNotification(n.id)}
                        title="حذف الإشعار"
                        className="p-1 text-on-surface-variant/60 hover:text-error hover:bg-error/10 rounded-lg transition-colors cursor-pointer"
                      >
                        <span className="material-symbols-outlined text-base">delete</span>
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                /* Empty State */
                <div className="p-8 text-center flex flex-col items-center justify-center gap-2 text-on-surface-variant">
                  <span className="material-symbols-outlined text-4xl text-on-surface-variant/40">
                    notifications_off
                  </span>
                  <p className="text-xs sm:text-sm font-body-md">
                    {filter === "unread"
                      ? "لا توجد إشعارات غير مقروءة"
                      : "لا توجد إشعارات حالياً"}
                  </p>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-3 bg-surface-container-lowest/80 border-t border-outline-variant/60 flex items-center justify-between text-xs shrink-0">
              <Link
                href="/news"
                onClick={onClose}
                className="text-xs text-secondary font-label-caps hover:underline block font-semibold"
              >
                عرض كل التحديثات والأخبار
              </Link>
              {notifications.length > 0 && (
                <button
                  onClick={clearAll}
                  className="text-[11px] text-on-surface-variant/70 hover:text-error cursor-pointer transition-colors"
                >
                  مسح الكل
                </button>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

