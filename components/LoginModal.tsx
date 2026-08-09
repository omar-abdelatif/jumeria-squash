"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 1200);
    }, 1000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/80 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative z-10 w-full max-w-md bg-surface-container-low border border-outline-variant rounded-2xl p-8 shadow-2xl overflow-hidden glass-panel"
          >
            {/* Background Glow */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="font-headline-md text-on-surface">تسجيل الدخول</h2>
                <p className="text-on-surface-variant text-sm mt-1">
                  أهلاً بك مجدداً في نادي جميرا للاسكواش
                </p>
              </div>
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-surface-container-high border border-outline-variant flex items-center justify-center text-on-surface-variant hover:text-secondary hover:border-secondary transition-colors"
              >
                <span className="material-symbols-outlined text-lg">close</span>
              </button>
            </div>

            {/* Success State */}
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-10 text-center flex flex-col items-center gap-3"
              >
                <div className="w-16 h-16 rounded-full bg-secondary/20 border border-secondary flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined text-3xl">check</span>
                </div>
                <h3 className="font-headline-md text-on-surface">تم تسجيل الدخول بنجاح!</h3>
                <p className="text-on-surface-variant text-sm">جاري التوجيه إلى حسابك...</p>
              </motion.div>
            ) : (
              /* Form */
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block font-label-caps text-on-surface-variant mb-2">
                    البريد الإلكتروني
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@example.com"
                      className="w-full bg-background border border-outline-variant rounded-xl px-4 py-3 text-on-surface focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all text-left dir-ltr pl-10"
                      style={{ direction: "ltr" }}
                    />
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-lg">
                      mail
                    </span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="font-label-caps text-on-surface-variant">
                      كلمة المرور
                    </label>
                    <a
                      href="#"
                      className="text-xs text-secondary hover:underline"
                    >
                      نسيت كلمة المرور؟
                    </a>
                  </div>
                  <div className="relative">
                    <input
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full bg-background border border-outline-variant rounded-xl px-4 py-3 text-on-surface focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all text-left dir-ltr pl-10"
                      style={{ direction: "ltr" }}
                    />
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-lg">
                      lock
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <input
                    type="checkbox"
                    id="remember"
                    className="w-4 h-4 rounded accent-secondary cursor-pointer"
                  />
                  <label
                    htmlFor="remember"
                    className="text-sm text-on-surface-variant cursor-pointer"
                  >
                    تذكرني على هذا الجهاز
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-secondary text-on-secondary py-3.5 rounded-xl font-label-caps hover:bg-secondary-fixed transition-all gold-glow flex items-center justify-center gap-2 font-bold"
                >
                  {isLoading ? (
                    <span className="inline-block w-5 h-5 border-2 border-on-secondary border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      تسجيل الدخول
                      <span className="material-symbols-outlined text-sm transform scale-x-[-1]">
                        arrow_forward
                      </span>
                    </>
                  )}
                </button>

                <div className="relative my-6 text-center">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-outline-variant" />
                  </div>
                  <span className="relative bg-surface-container-low px-4 text-xs text-on-surface-variant">
                    أو الدخول عبر
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    className="flex items-center justify-center gap-2 bg-background border border-outline-variant hover:border-outline py-2.5 rounded-xl text-sm font-medium transition-colors text-on-surface"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="currentColor"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                      />
                    </svg>
                    Google
                  </button>
                  <button
                    type="button"
                    className="flex items-center justify-center gap-2 bg-background border border-outline-variant hover:border-outline py-2.5 rounded-xl text-sm font-medium transition-colors text-on-surface"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.85c.66-.8 1.11-1.92.99-3.04-.96.04-2.12.64-2.8 1.44-.61.71-1.14 1.86-1 2.97 1.08.08 2.16-.57 2.81-1.37z" />
                    </svg>
                    Apple
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
