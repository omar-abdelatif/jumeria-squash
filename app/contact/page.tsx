import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "اتصل بنا",
  description:
    "تواصل مع نادي جميرا للاسكواش في دبي. حجز ملاعب، استفسارات العضوية، التدريب الخاص، والمزيد.",
  alternates: {
    canonical: "/contact",
  },
  keywords: [
    "اتصل بنادي جميرا للاسكواش",
    "حجز ملعب اسكواش دبي",
    "عضوية نادي جميرا للاسكواش",
    "عنوان نادي جميرا للاسكواش",
  ],
  openGraph: {
    title: "اتصل بنا | نادي جميرا للاسكواش",
    description:
      "تواصل مع نادي جميرا للاسكواش في دبي. حجز ملاعب، استفسارات العضوية، التدريب الخاص، والمزيد.",
    url: "https://jumeira-squash.com/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Header Section */}
      <AnimatedSection>
        <div className="mb-10 sm:mb-16 text-center max-w-3xl mx-auto">
          <h1 className="font-display-lg text-on-surface mb-3">ابق على تواصل</h1>
          <p className="font-body-lg text-on-surface-variant">
            سواء كنت تبحث عن حجز ملعب، أو الاستفسار عن العضوية، أو مجرد إلقاء
            التحية، فإن فريقنا هنا ليقدم لك خدمة ذات مستوى عالمي.
          </p>
        </div>
      </AnimatedSection>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Contact Form */}
        <div className="lg:col-span-7">
          <AnimatedSection delay={0.1}>
            <div className="glass-panel rounded-xl p-5 sm:p-8 h-full">
              <div className="mb-8 border-b border-outline-variant pb-4">
                <h2 className="font-headline-md text-on-surface mb-1">
                  إرسال رسالة
                </h2>
                <p className="font-body-md text-on-surface-variant text-xs sm:text-sm">
                  نحن نهدف للرد على جميع الاستفسارات في غضون 24 ساعة.
                </p>
              </div>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* First Name */}
                  <div>
                    <label
                      className="block font-label-caps text-on-surface-variant mb-2"
                      htmlFor="first_name"
                    >
                      الاسم الأول
                    </label>
                    <input
                      className="w-full bg-background border border-outline-variant rounded-lg px-4 py-3 text-on-surface focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors text-right font-body-md text-sm"
                      id="first_name"
                      placeholder="أحمد"
                      type="text"
                    />
                  </div>
                  {/* Last Name */}
                  <div>
                    <label
                      className="block font-label-caps text-on-surface-variant mb-2"
                      htmlFor="last_name"
                    >
                      اسم العائلة
                    </label>
                    <input
                      className="w-full bg-background border border-outline-variant rounded-lg px-4 py-3 text-on-surface focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors text-right font-body-md text-sm"
                      id="last_name"
                      placeholder="محمد"
                      type="text"
                    />
                  </div>
                </div>
                {/* Email */}
                <div>
                  <label
                    className="block font-label-caps text-on-surface-variant mb-2"
                    htmlFor="email"
                  >
                    عنوان البريد الإلكتروني
                  </label>
                  <input
                    className="w-full bg-background border border-outline-variant rounded-lg px-4 py-3 text-on-surface focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors text-left dir-ltr font-body-md text-sm"
                    id="email"
                    placeholder="ahmed.mohamed@example.com"
                    style={{ direction: "ltr" }}
                    type="email"
                  />
                </div>
                {/* Inquiry Type */}
                <div>
                  <label
                    className="block font-label-caps text-on-surface-variant mb-2"
                    htmlFor="inquiry_type"
                  >
                    طبيعة الاستفسار
                  </label>
                  <div className="relative">
                    <select
                      className="w-full bg-background border border-outline-variant rounded-lg px-4 py-3 text-on-surface appearance-none focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors cursor-pointer font-body-md text-sm"
                      id="inquiry_type"
                    >
                      <option>معلومات العضوية</option>
                      <option>حجز ملعب</option>
                      <option>تدريب خاص</option>
                      <option>التسجيل في البطولات</option>
                      <option>أخرى</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-4 text-on-surface-variant">
                      <span className="material-symbols-outlined text-sm">
                        expand_more
                      </span>
                    </div>
                  </div>
                </div>
                {/* Message */}
                <div>
                  <label
                    className="block font-label-caps text-on-surface-variant mb-2"
                    htmlFor="message"
                  >
                    رسالتك
                  </label>
                  <textarea
                    className="w-full bg-background border border-outline-variant rounded-lg px-4 py-3 text-on-surface focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors resize-none text-right font-body-md text-sm"
                    id="message"
                    placeholder="كيف يمكننا مساعدتك؟"
                    rows={5}
                  ></textarea>
                </div>
                {/* Submit */}
                <div className="pt-4">
                  <button
                    className="w-full md:w-auto bg-secondary text-on-secondary px-8 py-3.5 rounded font-label-caps hover:bg-secondary-fixed transition-all glow-hover flex items-center justify-center gap-2 font-bold active:scale-95 cursor-pointer text-xs sm:text-sm"
                    type="submit"
                  >
                    إرسال الرسالة{" "}
                    <span className="material-symbols-outlined text-sm transform scale-x-[-1]">
                      send
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </AnimatedSection>
        </div>

        {/* Contact Info Cards */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {/* Direct Contact */}
          <AnimatedSection delay={0.2}>
            <div className="glass-panel rounded-xl p-5 sm:p-8 flex flex-col gap-6 relative overflow-hidden group">
              <div className="absolute -left-10 -top-10 w-40 h-40 bg-secondary/5 rounded-full blur-2xl group-hover:bg-secondary/10 transition-colors duration-500"></div>
              <h2 className="font-label-caps text-secondary mb-2">خطوط مباشرة</h2>
              <div className="flex items-start gap-4">
                <div className="bg-surface-container-high p-3 rounded-lg text-secondary">
                  <span className="material-symbols-outlined text-lg sm:text-xl">call</span>
                </div>
                <div>
                  <p className="font-body-md text-on-surface-variant text-xs sm:text-sm mb-1">
                    الاستقبال والحجوزات
                  </p>
                  <p
                    className="font-headline-md text-base sm:text-lg text-on-surface"
                    style={{ direction: "ltr", textAlign: "right" }}
                  >
                    +971 4 123 4567
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-surface-container-high p-3 rounded-lg text-secondary">
                  <span className="material-symbols-outlined text-lg sm:text-xl">mail</span>
                </div>
                <div>
                  <p className="font-body-md text-on-surface-variant text-xs sm:text-sm mb-1">
                    استفسارات عامة
                  </p>
                  <p className="font-body-lg text-sm sm:text-base text-on-surface break-all">
                    concierge@jumeirasquash.com
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-surface-container-high p-3 rounded-lg text-secondary">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <p className="text-on-surface-variant text-sm mb-1">
                    عنوان النادي
                  </p>
                  <p className="text-on-surface">
                    123 شارع شاطئ جميرا
                    <br />
                    دبي، الإمارات العربية المتحدة
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Map Placeholder */}
          <AnimatedSection delay={0.3}>
            <div className="glass-panel rounded-xl p-2 h-64 relative overflow-hidden group">
              <div
                className="w-full h-full rounded-lg bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBhqB9jO2VM6X7gcR-q2dI9Ol97ylKVR4b51GfUFRYZ_13wHTGW8S4oKjXKOp-PtuE9JxL6cZbfQ0Gzl01FKbMdY0i59GgxU4MV07DJksJf36HDK6-X4Ark04Nj9iVkLTjXJW_ol_LQWy1Id9LgMmpkO_dqmADQDgdPof_n_Zmgmy0tiV71iJ43hWgJkuRewtOfEYEvkmU89T1_XWcIFMbU56DxwSpf8YgxYhw3_nN1bf0XpuAjuD2I')",
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent pointer-events-none rounded-lg"></div>
              <button className="absolute bottom-4 left-4 bg-surface-container-high/80 backdrop-blur-sm border border-outline-variant text-on-surface px-4 py-2 rounded-lg flex items-center gap-2 hover:border-secondary hover:text-secondary transition-all active:scale-95">
                <span className="material-symbols-outlined text-sm">
                  directions
                </span>
                احصل على الاتجاهات
              </button>
            </div>
          </AnimatedSection>

          {/* Social Links */}
          <AnimatedSection delay={0.4}>
            <div className="glass-panel rounded-xl p-6 flex items-center justify-between">
              <span className="font-label-caps text-on-surface-variant">
                تابع رحلتنا
              </span>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-on-surface-variant hover:text-secondary transition-colors p-2 rounded-full hover:bg-surface-container-high active:scale-95"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.476 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-on-surface-variant hover:text-secondary transition-colors p-2 rounded-full hover:bg-surface-container-high active:scale-95"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </>
  );
}
