import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "فريق التدريب",
  description:
    "تدرب مع محترفين عالميين مكرسين للارتقاء بمستواك في نادي جميرا للاسكواش دبي. خبرات استراتيجية، فنية وبدنية للأبطال.",
  alternates: {
    canonical: "/coaches",
  },
  keywords: [
    "مدربي اسكواش دبي",
    "تدريب اسكواش محترف",
    "ماركوس ثورن اسكواش",
    "إيلينا روستوفا اسكواش",
    "ديفيد تشين لياقة اسكواش",
  ],
  openGraph: {
    title: "فريق التدريب | نادي جميرا للاسكواش",
    description:
      "تدرب مع محترفين عالميين مكرسين للارتقاء بمستواك في نادي جميرا للاسكواش دبي.",
    url: "https://jumeira-squash.com/coaches",
  },
};

const coaches = [
  {
    name: "ماركوس ثورن",
    role: "المدرب الرئيسي",
    bio: "لاعب سابق ضمن أفضل 20 عالمياً، متخصص في التكييف التكتيكي عالي الكثافة وعلم نفس المباريات.",
    specialty: "الاستراتيجية التكتيكية",
    experience: "15 سنة",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAbplEaFj6M-48mF8_dRalPQwcWFzqoR9ESPyf0PXDXmmp3i6HEcg3jTlildiEXbfVFu0CVjkxMfXRit3vH_7hY7b1v3Dgxtw4j1EXHhQzX3ocZOwxaWVGWzhkiYtPc1Dkj9ou-dCENOjdEkr8nnqZJ3i4edQRncN93PCFxCaNDHRPR5RHMe-Qjv3Mly2XjLMRnSW5BRntSEqXGLbLuKiyggRIdgPQK6homjFBiR2NhCnlja-TCgR0D",
  },
  {
    name: "إيلينا روستوفا",
    role: "محترف أول",
    bio: "خبيرة في الميكانيكا الحيوية وكفاءة الحركة. تحول إيلينا اللاعبين المتوسطين من خلال التحسين الفني الدقيق.",
    specialty: "الأسلوب الفني",
    experience: "12 سنة",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCbXujCPSyT7IlVs3weoWdRDkg4znrlepPhDr3IBohwET9Ea7cP6WfDHtFlzFTusTPxDS2Vs3FZSVlUl60iuGLq_L8wUtAiN-qLtx5x2j4jxWR-dNA9dfrKjJk42STvbbidHKKord6y4JK3pd4Y98OFx-9aPrUGEGRsKG0n3UxZ7RkN9KO76IYJCKtfFMEWqUvlpVdADQo9IeD6jjRIdBWx5Y7pnPUBKCSjQ-F0t06j7RncJoDjmYJy",
  },
  {
    name: "ديفيد تشين",
    role: "أخصائي الأداء",
    bio: "يركز على القوة الخاصة بالاسكواش، والرشاقة، والوقاية من الإصابات. يبني ديفيد الأساس البدني المطلوب للعب النخبة.",
    specialty: "اللياقة البدنية",
    experience: "8 سنوات",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBJx3Axa70STB1EPSq0rGb5jJK5ozLCkDSXvAnFiN7Mnwq48igXBH-HfSy5cvK_mcdU7wSesh0jkKY6HmZc6BSBijNP03kpaWaqJlMU_6j8g8raoHPZEJBsPkMZtjbSc3kSMGiRS-IjVoOYmC118Yq-aj2_mxBXNmmm6NNBMy5cVCySL3BEI540tblp1DqcDf7Rg52FgRus4Jp99lAqzQ8oobBLXd6ZX-02cON3t6GyjmFrqvNEsJeO",
  },
];

export default function CoachesPage() {
  return (
    <>
      {/* Page Header */}
      <AnimatedSection>
        <header className="text-center w-full max-w-4xl mx-auto mb-10 sm:mb-16">
          <h1 className="font-display-lg text-on-background mb-3">
            طاقم تدريب النخبة
          </h1>
          <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto">
            تدرب مع محترفين عالميين مكرسين للارتقاء بمستواك. يمتلك فريق التدريب
            لدينا عقودًا من الخبرة الدولية والتخصص الدقيق في ملاعب جميرا.
          </p>
        </header>
      </AnimatedSection>

      {/* Coaches Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-[1200px] mx-auto">
        {coaches.map((coach, index) => (
          <AnimatedSection key={coach.name} delay={0.1 * (index + 1)}>
            <article className="glass-panel rounded-xl overflow-hidden gold-glow transition-all duration-300 flex flex-col group cursor-pointer hover:-translate-y-2">
              {/* Coach Image */}
              <div className="h-56 sm:h-64 w-full relative overflow-hidden">
                <img
                  alt={`صورة ${coach.name}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src={coach.image}
                />
                <div className="absolute bottom-0 right-0 w-full p-4 bg-gradient-to-t from-background to-transparent">
                  <span className="bg-primary-container text-secondary font-label-caps px-2.5 py-1 rounded border border-outline-variant">
                    {coach.role}
                  </span>
                </div>
              </div>

              {/* Coach Info */}
              <div className="p-5 sm:p-6 flex flex-col flex-grow">
                <h2 className="font-headline-md text-on-background mb-2 group-hover:text-secondary transition-colors">
                  {coach.name}
                </h2>
                <p className="font-body-md text-on-surface-variant mb-6 flex-grow leading-relaxed">
                  {coach.bio}
                </p>
                <div className="grid grid-cols-2 gap-2 pt-4 border-t border-outline-variant">
                  <div>
                    <span className="block text-on-surface-variant font-label-caps mb-1">
                      التخصص
                    </span>
                    <span className="text-on-background font-body-md text-xs sm:text-sm">{coach.specialty}</span>
                  </div>
                  <div>
                    <span className="block text-on-surface-variant font-label-caps mb-1">
                      الخبرة
                    </span>
                    <span className="text-secondary font-bold font-body-md text-xs sm:text-sm">
                      {coach.experience}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          </AnimatedSection>
        ))}
      </div>
    </>
  );
}
