import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";

export default function HomePage() {
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
            <h1 className="font-display-lg text-on-background mb-6 leading-tight">
              أداء استثنائي. هيبة لا مثيل لها.
            </h1>
            <p className="font-body-lg text-on-surface-variant mb-8 max-w-2xl">
              جرب قمة التدريب على الاسكواش في منشأة مصممة للأبطال. انضم إلى مجتمع
              حصري مكرس لإتقان اللعبة.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-secondary text-on-secondary px-8 py-3.5 rounded font-label-caps hover:bg-secondary-fixed transition-all gold-glow active:scale-95 font-bold">
                انضم للنادي
              </button>
              <button className="bg-transparent border border-outline-variant text-on-surface px-8 py-3.5 rounded font-label-caps hover:border-secondary hover:text-secondary transition-all active:scale-95">
                استكشف
              </button>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Stats Glass Panel */}
      <AnimatedSection delay={0.1}>
        <section className="mb-16 glass-panel rounded-xl p-8 hover:border-outline-variant transition-all">
          <h3 className="font-label-caps text-secondary mb-6 tracking-widest">
            إحصائيات المنشأة
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "6", label: "ملاعب بطولة" },
              { value: "200+", label: "لاعبين نشطين" },
              { value: "12", label: "مدربين نخبة" },
              { value: "24/7", label: "إمكانية الدخول" },
            ].map((stat) => (
              <div key={stat.label} className="text-center group cursor-default">
                <span className="block font-display-lg text-secondary mb-2 transition-transform duration-300 group-hover:scale-110">
                  {stat.value}
                </span>
                <span className="text-on-surface-variant text-sm">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* Standard of Excellence */}
      <AnimatedSection delay={0.2}>
        <section className="mb-16">
          <div className="mb-12 border-b border-outline-variant pb-4 flex justify-between items-end">
            <h2 className="font-headline-lg text-on-background">معيار التميز</h2>
            <span className="font-label-caps text-secondary hidden md:block">
              مصمم بدقة
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-surface-container-low border border-outline-variant rounded-xl p-8 hover:border-outline transition-all duration-300 hover:shadow-xl">
              <h3 className="font-headline-md text-on-surface mb-4">
                مصمم بدقة للرياضي المعاصر
              </h3>
              <p className="text-on-surface-variant leading-relaxed mb-6">
                في نادي جميرا للاسكواش، ندمج أحدث التكنولوجيا الرياضية مع الجو
                الراقي لنادي الأعضاء الفاخر. كل تفصيل، من الميكانيكا الحيوية
                لأرضيات ملاعبنا إلى البيئة التي يتم التحكم في مناخها، مصمم بدقة
                للارتقاء بلعبتك.
              </p>
              <span className="text-secondary font-label-caps font-semibold">
                تدرب مع أبطال دوليين.
              </span>
            </div>
            <div
              className="rounded-xl overflow-hidden min-h-[300px] bg-cover bg-center border border-outline-variant hover:scale-[1.01] transition-transform duration-500"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC-e_0OVzP2cS0EuSLc48u93WBl_UIBAsm64FS9XmRO4kzVfqvnNlLx1QA5LEOmW21FhPeNMsNRfz1PoVZRXYGkcoAq4Y9hBZi6YH_NPQ0JVu7CXi8802YgrGyJEvxdnysOBWapiSCOrjp8iUV6Da5p6nuwsArsiiNY25OOJtcKWBKUsS13O47xH0ft20Gd0k8ORkf1PVKKSfyetkUv5syM7G7Go1fWojwwmzBvx2j3wPgAIxabwYP3')",
              }}
            ></div>
          </div>
        </section>
      </AnimatedSection>

      {/* Club Amenities */}
      <AnimatedSection delay={0.3}>
        <section className="mb-16">
          <div className="mb-12 border-b border-outline-variant pb-4 flex justify-between items-end">
            <h2 className="font-headline-lg text-on-background">مرافق النادي</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "sports_tennis",
                title: "ملاعب ASB ذات الأرضية الزجاجية",
                description:
                  "أرضيات زجاجية تفاعلية بالكامل بتقنية LED توفر استدعاء فوري للخط، وتدريبات، وامتصاص للصدمات لا مثيل له.",
              },
              {
                icon: "fitness_center",
                title: "صالة أداء رياضية",
                description:
                  "مركز مخصص للقوة والتكييف مصمم خصيصًا للميكانيكا الحيوية للاسكواش والوقاية من الإصابات.",
              },
              {
                icon: "spa",
                title: "أجنحة الاستشفاء",
                description:
                  "غرف العلاج بالتبريد، والساونا بالأشعة تحت الحمراء، وعلاج التدليك الرياضي المتاح بعد المباراة.",
              },
            ].map((amenity) => (
              <div
                key={amenity.title}
                className="bg-surface-container-low border border-outline-variant rounded-xl p-8 hover:border-outline transition-all duration-300 gold-glow hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center border border-outline-variant mb-6 group-hover:border-secondary transition-colors">
                  <span
                    className="material-symbols-outlined text-secondary text-2xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {amenity.icon}
                  </span>
                </div>
                <h3 className="font-headline-md text-on-surface mb-3 group-hover:text-secondary transition-colors">
                  {amenity.title}
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  {amenity.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </AnimatedSection>
    </>
  );
}
