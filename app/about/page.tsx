import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "حول",
  description: "تعرف على نادي جميرا للاسكواش - مهمتنا ورؤيتنا ومرافقنا العالمية المستوى.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <AnimatedSection>
        <section className="mb-16 relative rounded-xl overflow-hidden min-h-[60vh] flex items-center border border-outline-variant group">
          <div className="absolute inset-0 z-0">
            <div
              className="w-full h-full bg-cover bg-center opacity-40 transition-transform duration-1000 group-hover:scale-105"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDtGGrg3cSAmhl3GdON4OGVThyrhrAry_T4X9ohPX6DW6mWHIkUSs8c-ppJOo1FVQArVOLNhyZG1E4ig-5WiA9UU_pf9qowy85y-Ktg7Qc8W1ZKRv1GalduSPXQkIR02ZcCGPkpiDVyCqbHguKVdSXhRlijN8sY-RGpcT3Pc3eWtjVHk3neYPIpd4SzbUX6chle6pzsaB02juUy9mhlPm7-LqyI-oqvC_nrIQ7ZnfGy-PIE_Ii5PS7j')",
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
          </div>
          <div className="relative z-10 px-8 md:px-16 max-w-3xl py-20">
            <h1 className="font-display-lg text-on-background mb-6">
              الارتقاء باللعبة.
            </h1>
            <p className="font-body-lg text-on-surface-variant mb-8 max-w-2xl">
              تأسس نادي جميرا للاسكواش في قلب المدينة، وهو ملاذ للرياضيين النخبة
              والهواة المتحمسين على حد سواء. نحن نمزج بين مرافق عالمية المستوى
              وجو حصري راقٍ.
            </p>
            <button className="bg-secondary text-on-secondary px-8 py-3.5 rounded font-label-caps hover:bg-secondary-fixed transition-all gold-glow active:scale-95 font-bold">
              انضم للنادي
            </button>
          </div>
        </section>
      </AnimatedSection>

      {/* Vision & Mission (Bento Style) */}
      <AnimatedSection delay={0.1}>
        <section className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-surface-container-low border border-outline-variant rounded-xl p-8 hover:border-outline transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center border border-outline-variant">
                <span
                  className="material-symbols-outlined text-secondary"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  flag
                </span>
              </div>
              <h2 className="font-headline-md text-on-surface">مهمتنا</h2>
            </div>
            <p className="text-on-surface-variant leading-relaxed">
              توفير مرافق لا مثيل لها وتدريب على مستوى عالمي وأجواء مجتمعية
              نابضة بالحياة. نحن ملتزمون برعاية المواهب على جميع المستويات، وتعزيز
              رياضة الاسكواش، وضمان تجربة كل عضو لأعلى مستوى من الخدمة والتطوير
              الرياضي.
            </p>
          </div>
          <div className="bg-surface-container-low border border-outline-variant rounded-xl p-8 hover:border-outline transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center border border-outline-variant">
                <span
                  className="material-symbols-outlined text-secondary"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  visibility
                </span>
              </div>
              <h2 className="font-headline-md text-on-surface">رؤيتنا</h2>
            </div>
            <p className="text-on-surface-variant leading-relaxed">
              أن نكون الوجهة الأولى لتميز الاسكواش، وتعزيز مجتمع يلتقي فيه الشغف
              بالأداء. نحن نسعى جاهدين لوضع المعيار العالمي للأندية الرياضية
              الفاخرة، وخلق بيئة تلهم الإنجاز البدني والتواصل الاجتماعي.
            </p>
          </div>
        </section>
      </AnimatedSection>

      {/* Facilities Section */}
      <AnimatedSection delay={0.2}>
        <section className="mb-16">
          <div className="mb-12 border-b border-outline-variant pb-4 flex justify-between items-end">
            <h2 className="font-headline-lg text-on-background">
              مرافق عالمية المستوى
            </h2>
            <span className="font-label-caps text-secondary hidden md:block">
              تميز لا هوادة فيه
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Secondary Features */}
            <div className="col-span-1 md:col-span-4 flex flex-col gap-6">
              {/* Performance Hall */}
              <div className="flex-1 bg-surface-container-low border border-outline-variant rounded-xl overflow-hidden group relative min-h-[250px]">
                <div
                  className="absolute inset-0 w-full h-full bg-cover bg-center opacity-30 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-40"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCoL8XIE8Y30LvIk5nGWjf4KRq3RzHcZsYrxjpwgMSU9_FcJuTh6SE9DOj-ZQQq6s3rzhRWMPJVyCN6jKINs9RUqGLh7HIIMFcf2O2drMi5gbJYwEoj6BpowHF5ds9NN3ApbC9KrS0lMnyRc1MfCXYN0wsGf8f-DINY3uCI2YN-T9UFz5XnZSltqwrCqWb6cqOCqOxeCx0jdBwryuQURJKBCtKIpN6OjCYz0ftheRZ4R2LFqYkH_FuG')",
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/20"></div>
                <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                  <div className="w-10 h-10 rounded-full bg-background border border-outline-variant flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-tertiary">
                      fitness_center
                    </span>
                  </div>
                  <h3 className="font-headline-md text-on-surface mb-2">
                    صالة الأداء
                  </h3>
                  <p className="text-on-surface-variant text-sm">
                    منطقة تدريب وظيفي واستشفاء مجهزة بالكامل ومصممة خصيصًا لتكييف
                    الاسكواش.
                  </p>
                </div>
              </div>
              {/* Members Lounge */}
              <div className="flex-1 bg-surface-container-low border border-outline-variant rounded-xl overflow-hidden group relative min-h-[250px]">
                <div
                  className="absolute inset-0 w-full h-full bg-cover bg-center opacity-30 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-40"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC49c7rhR0zbtgeEPODZCXlEQmjCuFWgBB8DyUer-cT_cIuNhp5tGp3E3hgBR0S8UHDM3eVpZQQ4Zyp12gWtZG488ZzBh-rgEZItEjfaX1R3-e3NB7DTkUmIOD22ghU-ZLVpI-BP1YDmMcEv13K_7pvgWCWKouYTndEIhzJPZqM0qKz1L5ZprjBfhaoIxh7ilNSgoV4p1T6SykGSzuWVP6uS3QjIZRb9sWFHiHo34wxwe_pZvSIh92D')",
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/20"></div>
                <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                  <div className="w-10 h-10 rounded-full bg-background border border-outline-variant flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-tertiary">
                      local_cafe
                    </span>
                  </div>
                  <h3 className="font-headline-md text-on-surface mb-2">
                    صالة الأعضاء
                  </h3>
                  <p className="text-on-surface-variant text-sm">
                    مساحة راقية للاستشفاء بعد المباراة والتواصل وخدمات الضيافة
                    المتميزة.
                  </p>
                </div>
              </div>
            </div>

            {/* Main Feature: Courts */}
            <div className="col-span-1 md:col-span-8 bg-surface-container-low border border-outline-variant rounded-xl overflow-hidden group">
              <div className="h-64 md:h-80 w-full relative overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC-e_0OVzP2cS0EuSLc48u93WBl_UIBAsm64FS9XmRO4kzVfqvnNlLx1QA5LEOmW21FhPeNMsNRfz1PoVZRXYGkcoAq4Y9hBZi6YH_NPQ0JVu7CXi8802YgrGyJEvxdnysOBWapiSCOrjp8iUV6Da5p6nuwsArsiiNY25OOJtcKWBKUsS13O47xH0ft20Gd0k8ORkf1PVKKSfyetkUv5syM7G7Go1fWojwwmzBvx2j3wPgAIxabwYP3')",
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"></div>
                <div className="absolute bottom-6 right-6">
                  <span className="inline-block bg-background/80 backdrop-blur-md border border-outline-variant text-secondary font-label-caps px-3 py-1 rounded-sm mb-3">
                    6 ملاعب فاخرة
                  </span>
                  <h3 className="font-headline-md text-on-surface">
                    ملاعب بطولة زجاجية
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-on-surface-variant">
                  تتميز منشأتنا بستة ملاعب ASB System100، بما في ذلك ملعبين عرض
                  للبطولات زجاجيين بالكامل. صُممت هذه الملاعب لامتصاص الصدمات
                  بشكل مثالي وارتداد مثالي للكرة، وتلبي مواصفات WSF للعب البطولات
                  الدولية.
                </p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </>
  );
}
