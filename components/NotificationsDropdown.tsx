"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface NotificationsDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

const initialNotifications = [
  {
    id: 1,
    title: "تم تأكيد حجز الملعب #3",
    time: "منذ 10 دقائق",
    unread: true,
    icon: "event_available",
    href: "/contact",
  },
  {
    id: 2,
    title: "بطولة الخريف: تبدأ التصفيات غداً",
    time: "منذ ساعتين",
    unread: true,
    icon: "trophy",
    href: "/news",
  },
  {
    id: 3,
    title: "تمت إضافة جلسة تدريب جديدة مع الكابتن ماركوس",
    time: "منذ يوم واحد",
    unread: false,
    icon: "sports",
    href: "/coaches",
  },
  {
    id: 4,
    title: "تحديث مواقيت عمل صالة الاستشفاء",
    time: "منذ يومين",
    unread: false,
    icon: "schedule",
    href: "/about",
  },
];

export default function NotificationsDropdown({
  isOpen,
  onClose,
}: NotificationsDropdownProps) {
  const [notifications, setNotifications] = useState(initialNotifications);

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, unread: false })));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop for closing */}
          <div
            className="fixed inset-0 z-40"
            onClick={onClose}
          />

          {/* Popover Card */}
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute left-4 top-16 md:left-24 z-50 w-80 sm:w-96 bg-surface-container-low border border-outline-variant rounded-2xl shadow-2xl overflow-hidden glass-panel"
          >
            {/* Header */}
            <div className="p-4 border-b border-outline-variant flex justify-between items-center bg-surface-container-high/40">
              <div className="flex items-center gap-2">
                <span className="font-headline-md text-base text-on-surface">
                  الإشعارات
                </span>
                {notifications.some((n) => n.unread) && (
                  <span className="bg-secondary text-on-secondary text-xs px-2 py-0.5 rounded-full font-bold">
                    {notifications.filter((n) => n.unread).length} جديد
                  </span>
                )}
              </div>
              <button
                onClick={markAllAsRead}
                className="text-xs text-secondary hover:underline cursor-pointer"
              >
                تحديد الكل كمقروء
              </button>
            </div>

            {/* Notification Items */}
            <div className="divide-y divide-outline-variant/40 max-h-[380px] overflow-y-auto">
              {notifications.map((n) => (
                <Link
                  key={n.id}
                  href={n.href}
                  onClick={onClose}
                  className={`flex items-start gap-3 p-4 hover:bg-surface-container-high transition-colors ${
                    n.unread ? "bg-surface-container/60" : ""
                  }`}
                >
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border ${
                      n.unread
                        ? "bg-secondary/15 text-secondary border-secondary/40"
                        : "bg-surface-container-high text-on-surface-variant border-outline-variant"
                    }`}
                  >
                    <span className="material-symbols-outlined text-lg">
                      {n.icon}
                    </span>
                  </div>

                  <div className="flex-grow">
                    <p
                      className={`text-sm leading-snug ${
                        n.unread
                          ? "text-on-surface font-semibold"
                          : "text-on-surface-variant"
                      }`}
                    >
                      {n.title}
                    </p>
                    <span className="text-xs text-on-surface-variant/70 mt-1 block">
                      {n.time}
                    </span>
                  </div>

                  {n.unread && (
                    <span className="w-2 h-2 rounded-full bg-secondary shrink-0 mt-1.5" />
                  )}
                </Link>
              ))}
            </div>

            {/* Footer */}
            <div className="p-3 bg-surface-container-lowest border-t border-outline-variant/60 text-center">
              <Link
                href="/news"
                onClick={onClose}
                className="text-xs text-secondary font-label-caps hover:underline block"
              >
                عرض كل التحديثات والأخبار
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
