"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import LoginModal from "./LoginModal";
import SearchModal from "./SearchModal";
import NotificationsDropdown from "./NotificationsDropdown";

const navLinks = [
  { href: "/", label: "الرئيسية" },
  { href: "/about", label: "عن النادي" },
  { href: "/coaches", label: "الفريق" },
  { href: "/news", label: "الأخبار" },
  { href: "/contact", label: "اتصل بنا" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Modal states
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-40 border-b border-outline-variant shadow-sm h-20 transition-all duration-300 ${
          scrolled
            ? "bg-background/90 backdrop-blur-md"
            : "bg-background"
        }`}
        id="topNav"
      >
        <div className="flex justify-between items-center px-4 sm:px-6 lg:px-8 h-full w-full max-w-7xl mx-auto relative">
          {/* Brand */}
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="text-base sm:text-lg md:text-xl font-bold text-secondary tracking-tight hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              نادي جميرا للاسكواش
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-4 lg:gap-6"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm lg:text-base transition-all duration-200 cursor-pointer active:scale-95 ${
                  pathname === link.href
                    ? "text-secondary border-b-2 border-secondary pb-1 font-semibold"
                    : "text-on-surface-variant hover:text-secondary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-4 md:gap-6">
            {/* Search Button */}
            <button
              onClick={() => {
                setIsNotificationsOpen(false);
                setIsSearchOpen(true);
              }}
              aria-label="Search"
              className="p-2 text-on-surface-variant hover:text-secondary transition-colors rounded-lg hover:bg-surface-container-high active:scale-95"
            >
              <span className="material-symbols-outlined text-lg sm:text-xl">search</span>
            </button>

            {/* Notifications Button */}
            <div className="relative">
              <button
                onClick={() => {
                  setIsSearchOpen(false);
                  setIsNotificationsOpen(!isNotificationsOpen);
                }}
                aria-label="Notifications"
                className="p-2 text-on-surface-variant hover:text-secondary transition-colors rounded-lg hover:bg-surface-container-high relative active:scale-95"
              >
                <span className="material-symbols-outlined text-lg sm:text-xl">
                  notifications
                </span>
                <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-secondary rounded-full ring-2 ring-background animate-pulse" />
              </button>

              {/* Notifications Dropdown */}
              <NotificationsDropdown
                isOpen={isNotificationsOpen}
                onClose={() => setIsNotificationsOpen(false)}
              />
            </div>

            {/* Login Button */}
            <button
              onClick={() => {
                setIsSearchOpen(false);
                setIsNotificationsOpen(false);
                setIsLoginOpen(true);
              }}
              className="hidden md:block bg-secondary text-on-secondary px-5 lg:px-6 py-2 rounded font-label-caps hover:bg-secondary-fixed transition-all gold-glow active:scale-95 font-bold text-xs lg:text-sm"
            >
              تسجيل الدخول
            </button>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 text-on-surface-variant hover:text-secondary"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <span className="material-symbols-outlined text-xl sm:text-2xl">
                {mobileOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-lg border-t border-outline-variant px-6 py-5 flex flex-col gap-3 shadow-xl">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`py-2 transition-colors ${
                  pathname === link.href
                    ? "text-secondary font-bold"
                    : "text-on-surface-variant hover:text-secondary"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => {
                setMobileOpen(false);
                setIsLoginOpen(true);
              }}
              className="bg-secondary text-on-secondary px-6 py-3 rounded font-label-caps mt-2 font-bold"
            >
              تسجيل الدخول
            </button>
          </div>
        )}
      </header>

      {/* Login Modal */}
      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
      />

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
}
