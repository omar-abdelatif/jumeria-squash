import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-outline-variant bg-surface-container-lowest mt-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8 py-16 w-full max-w-7xl mx-auto">
        {/* Brand Column */}
        <div className="flex flex-col gap-4">
          <span className="font-headline-md text-secondary">
            نادي جميرا للاسكواش
          </span>
          <p className="text-on-surface-variant text-sm max-w-xs">
            الارتقاء بلعبة الاسكواش من خلال مرافق متميزة ومجتمع حصري.
          </p>
        </div>

        {/* Links Column */}
        <div className="flex flex-col gap-3">
          <h4 className="font-label-caps text-on-surface mb-2">
            القانونية والدعم
          </h4>
          <Link
            href="#"
            className="text-on-surface-variant hover:text-secondary transition-colors text-sm"
          >
            سياسة الخصوصية
          </Link>
          <Link
            href="#"
            className="text-on-surface-variant hover:text-secondary transition-colors text-sm"
          >
            شروط الخدمة
          </Link>
          <Link
            href="#"
            className="text-on-surface-variant hover:text-secondary transition-colors text-sm"
          >
            الأسئلة الشائعة
          </Link>
          <Link
            href="#"
            className="text-on-surface-variant hover:text-secondary transition-colors text-sm"
          >
            الدعم
          </Link>
        </div>

        {/* Contact / Location */}
        <div className="flex flex-col gap-3">
          <h4 className="font-label-caps text-on-surface mb-2">قم بزيارتنا</h4>
          <p className="text-on-surface-variant text-sm flex items-start gap-2">
            <span className="material-symbols-outlined text-base">
              location_on
            </span>
            <span>
              123 إيليت أثليتيكس بوليفارد،
              <br />
              دبي، الإمارات العربية المتحدة
            </span>
          </p>
          <p className="text-on-surface-variant text-sm flex items-center gap-2 mt-2">
            <span className="material-symbols-outlined text-base">mail</span>
            concierge@jumeirasquash.com
          </p>
        </div>

        {/* Copyright */}
        <div className="col-span-1 md:col-span-3 pt-8 mt-8 border-t border-outline-variant/50 text-center">
          <p className="text-on-surface-variant text-sm">
            © 2024 نادي جميرا للاسكواش. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
}
