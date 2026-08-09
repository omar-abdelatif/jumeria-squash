export interface NewsArticle {
  slug: string;
  title: string;
  category: string;
  date: string;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  readTime: string;
  featured?: boolean;
  image: string;
  excerpt: string;
  content: {
    introduction: string;
    sections: {
      heading: string;
      body: string;
    }[];
    quote?: {
      text: string;
      author: string;
    };
    highlights?: string[];
  };
}

export const newsArticles: NewsArticle[] = [
  {
    slug: "annual-autumn-classic",
    title: "كلاسيك الخريف السنوي: حسم نصف النهائي في مباريات مثيرة من خمسة أشواط",
    category: "بطولة",
    date: "15 أكتوبر 2024",
    featured: true,
    author: {
      name: "أحمد المنصوري",
      role: "محرر الألعاب الرياضية",
    },
    readTime: "5 دقائق",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA-CCL3k9YJMJ25xFpJH8Ykf4SphEWzpIB-FpMVkQrXlWmf79Oz_dbEzzRZO50gsAVKCoCN8rOms0iPrzMuBXn4HgY10krevlIGcifadRyUhkUrawEOLn9h4l0B1fYoK-v0Oau7SdZBN4YcYqP-dVcL9q0X2T-gCtmOdEvaa8KSIztmr84kXo_9274RnYm4sm1MqrroeOA__UtqPVn1Zt_AOipyAV-qi25uQ9SGQfy3N9pP3EFxDAQX",
    excerpt:
      "كانت الملاعب مليئة بالحماس الليلة الماضية حيث تنافس كبار المصنفين على مكان في النهائيات. نجا المدافع عن اللقب الفايد بصعوبة من مفاجأة، بينما أثبت الوافد الجديد ديفيس أنه ينتمي إلى النخبة.",
    content: {
      introduction:
        "شهدت ملاعب نادي جميرا للاسكواش واحدة من أكثر الأمسيات حماساً وإثارة في تاريخ بطولة كلاسيك الخريف السنوية. وسط حضور جماهيري غفير من أعضاء النادي وعشاق اللعبة، امتدت مباراتا نصف النهائي إلى خمسة أشواط حاسمة حبست أنفاس جميع الحاضرين حتى النقطة الأخيرة.",
      sections: [
        {
          heading: "ريمونتادا النخبة في الشوط الخامس",
          body: "نجح المدافع عن اللقب طارق الفايد في قلب تأخره بشوطين مقابل شوط واحد أمام منافسه العنيد، ليحسم الشوط الفاصل بنتيجة 12-10 بعد ماراتون تكتيكي استغرق 78 دقيقة. تميزت المباراة بالتبادلات السريعة والتحكم المذهل في زوايا الملعب الزجاجي.",
        },
        {
          heading: "تألق الوافد الجديد",
          body: "في المباراة الثانية، واصل الشاب جاك ديفيس سلسلة مفاجآته بتغلبه على المصنف الثاني عالمياً سابقاً، بفضل لياقته البدنية العالية وتديداته الخلفية المحكمة التي أربكت خطط منافسه في الأوقات الحاسم.",
        },
      ],
      quote: {
        text: "المستوى الفني والرياضي الذي شاهدناه الليلة يمثل روح النادي والتميز الذي نسعى إليه دائماً في جميرا.",
        author: "ماركوس ثورن - المدرب الرئيسي",
      },
      highlights: [
        "حضور أكثر من 150 عضواً في منصات المشاهدة الرئيسية",
        "تسجيل أطول تبادل ضربات في البطولة (54 ضربة متتالية)",
        "المباراة النهائية ستقام مساء الجمعة القادم الساعة 7:00 مساءً",
      ],
    },
  },
  {
    slug: "carbon-light-pro-review",
    title: "مراجعة: مضارب كاربون-لايت برو سيريز الجديدة",
    category: "معدات وتقنية",
    date: "12 أكتوبر 2024",
    author: {
      name: "ماركوس ثورن",
      role: "المدرب الرئيسي",
    },
    readTime: "4 دقائق",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDNtebXPFrCX-okSNOq8XdOi5KSrMoV2ggM2fZsaJwrEEvw6JxuHkEJdKfPwI6fGfBj8q_vVVVSkFPM3QDUSvxt396f6NAp3NpllVXOsjzQsiO1jy_0zyeUUwbdIZ3WoDnatPhJ7F6tGhmb6x2x3s-BZMAXohU5zD7iqVe6IG7Rg3YECXWR9E7MSrCjLzULH7BdhvNJOvKNZEEWsool9OA7zmXR89s0f0xHBC1wLZsQEKN0HUceBpaj",
    excerpt:
      "يختبر مدربنا الرئيسي أحدث الإطارات خفيفة الوزن من كبار المصنعين ليرى ما إذا كانت تفي بوعودها بزيادة القوة دون التضحية بالتحكم.",
    content: {
      introduction:
        "مع التطور المستمر في ألياف الكربون وتقنيات هندسة المضرب، تقدم سلسلة 'كاربون-لايت برو' الجديدة تحولاً ملحوظاً في التوازن بين الوزن والصلابة. قام طاقم التدريب في نادي جميرا باختبار المضرب على مدار 30 ساعة لعب مكثفة.",
      sections: [
        {
          heading: "توزيع الوزن والديناميكية",
          body: "يتميز المضرب بوزن إطار 120 جراماً مع توزيع متوازن للغاية (Even Balance)، مما يمنح اللاعب سرعة مناورة عالية عند الكرات السريعة بالقرب من الجدار الجانبي، دون التضحية بقوة التسديد المباشر.",
        },
        {
          heading: "امتصاص الاهتزازات والتحكم",
          body: "بفضل تقنية الجرافيت المدمج في المقبض، تقل الاهتزازات بنسبة 25% مقارنة بالإصدارات السابقة، مما يوفر راحة أكبر للرسغ واستجابة أدق في ضربات Drop Shots.",
        },
      ],
      highlights: [
        "إطار من ألياف أيروجيل والكربون الخالص",
        "تنسيق أوتار 14x18 للتحكم الفائق في الدوران",
        "متوفر للتجربة المجانية في متجر النادي للأعضاء",
      ],
    },
  },
  {
    slug: "off-court-conditioning",
    title: "التكييف خارج الملعب: بناء قوة الساق الانفجارية",
    category: "تدريب",
    date: "08 أكتوبر 2024",
    author: {
      name: "ديفيد تشين",
      role: "أخصائي الأداء",
    },
    readTime: "6 دقائق",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAbDw_yu7zjSWPKriSHEmIqfnViPJr4RfqVFsjYQL7KBmbFPD43T5mkRLvPQuZa45MHJaYHVM0hKBJ4yvvQ-sqm-eqiDYom334DYO9O4O2-SzLvmXquz9GAHB8qYXnWgOd0qFSmsZfL9Pvniu98MHcrYsP695WjRvT9wKLnZJHnGYruZYrcmIovzS8yzRxkUjUz375hPw3FCTtwCuNRHbVOH880XhPYtwASBGaGr0Ddm8jR-FeYQE3D",
    excerpt:
      "يتطلب الاسكواش تغييرات سريعة في الاتجاه. يوفر التركيز التدريبي لهذا الشهر روتينًا رياضيًا مستهدفًا مصممًا خصيصًا لتحسين سرعة تعافي الاندفاع وتغطية الملعب.",
    content: {
      introduction:
        "تعتمد لعبة الاسكواش بشكل أساسي على القدرة الانفجارية للساقين للاندفاع نحو الزوايا الأربع ثم التعافي السريع نحو حرف T. في هذا المقال، يستعرض أخصائي الأداء البدني ديفيد تشين برنامج التكييف المعتمد في النادي.",
      sections: [
        {
          heading: "تمارين البليومترك الخاصة بالاسكواش",
          body: "التركيز على القفز الأحادي Lateral Bounds والاندفاع المتعدد الزوايا بناءً على الاستجابة البصرية. يساعد هذا النوع من التدريب في تقليل زمن استجابة العضلات عند الانطلاق اللحظي.",
        },
        {
          heading: "الوقاية من إصابات الركبة والكاحل",
          body: "تقوية عضلات الفخذ الخلفية والألياف الضامة تحمي المفصل من الإجهاد الناجم عن التوقف المفاجئ على الأرضيات الخشبية والزجاجية.",
        },
      ],
      quote: {
        text: "القوة بدون سرعة تعافٍ غير كافية في الاسكواش الحديث؛ السرعة هي مفتاح السيطرة على منتصف الملعب.",
        author: "ديفيد تشين - أخصائي الأداء",
      },
    },
  },
  {
    slug: "member-social-exhibition",
    title: "لقاء الأعضاء القادم ومباراة استعراضية",
    category: "حياة النادي",
    date: "05 أكتوبر 2024",
    author: {
      name: "سارة الزرعوني",
      role: "مديرة علاقات الأعضاء",
    },
    readTime: "3 دقائق",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuATydysM30sbRJhFiSBsmCDJ9sUMYcy7bNGZ-AKS48-DPu2nFn3vqkOZFofoMD2mCG-N2u-jWGmR3P3tV-87k4eEiOTCNChZVUvRVOor9QEldVi2KQ9Mn4BeIGEJ0pmDvi9ogN9XDQ3e7U3hI8YB7Wma6WM8wOmc3wrvz829PynSsJwrsouwUjNsNfmVQ02TElDP0kZE3A55h4efbTuponB8pi4H7yJZez8_AO3Kk3KA02zeLJNLXFy",
    excerpt:
      "انضم إلينا مساء الجمعة القادم في حدثنا الاجتماعي الشهري، والذي يضم مرطبات مجانية ومباراة استعراضية بين محترفينا المقيمين.",
    content: {
      introduction:
        "يسر إدارة نادي جميرا للاسكواش دعوة جميع الأعضاء وعائلاتهم لحضور اللقاء الاجتماعي الشهري في صالة الأعضاء، يعقبه مباراة استعراضية فريدة من نوعها تقام على الملعب الزجاجي الرئيسي.",
      sections: [
        {
          heading: "برنامج الأمسية",
          body: "تبدأ الفعالية في تمام الساعة 6:30 مساءً مع بوفيه المأكولات الخفيفة والعصائر الطازجة في صالة الأعضاء، يليها المباراة الاستعراضية بين الكابتن ماركوس ثورن وإيلينا روستوفا الساعة 7:30 مساءً.",
        },
      ],
      highlights: [
        "مرطبات ومأكولات خفيفة مجانية لجميع الأعضاء",
        "سحب على جوائز قسائم تدريب مخصص وتجهيزات رياضية",
        "فرصة التواصل واللعب الودي في الملاعب المفتوحة عقب الفعالية",
      ],
    },
  },
  {
    slug: "junior-championship-2024",
    title: "بطولة التحدي للناشئين: مواهب صاعدة تتألق على ملاعب جميرا",
    category: "أكاديمية الناشئين",
    date: "28 سبتمبر 2024",
    author: {
      name: "إيلينا روستوفا",
      role: "محترف أول",
    },
    readTime: "4 دقائق",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAbplEaFj6M-48mF8_dRalPQwcWFzqoR9ESPyf0PXDXmmp3i6HEcg3jTlildiEXbfVFu0CVjkxMfXRit3vH_7hY7b1v3Dgxtw4j1EXHhQzX3ocZOwxaWVGWzhkiYtPc1Dkj9ou-dCENOjdEkr8nnqZJ3i4edQRncN93PCFxCaNDHRPR5RHMe-Qjv3Mly2XjLMRnSW5BRntSEqXGLbLuKiyggRIdgPQK6homjFBiR2NhCnlja-TCgR0D",
    excerpt:
      "شهدت بطولة الناشئين دون 15 سنة منافسات شرسة وإصراراً من المواهب الشابة التي أثبتت تميز أكاديمية النادي في إعداد أبطال المستقبل.",
    content: {
      introduction:
        "اختتمت نهاية الأسبوع الماضي بطولة النادي للناشئين بمشاركة أكثر من 40 لاعباً ولاعبة في فئات تحت 13 وتحت 15 سنة، في خطوة تعكس التزام جميرا بتطوير القاعدة الرياضية.",
      sections: [
        {
          heading: "المباراة النهائية لفئة تحت 15 سنة",
          body: "تميزت المباراة النهائية بالأداء المذهل والدقة التكتيكية العالية من كلا اللاعبين، وحسمها الواعد عمر خالد بعد ثلاث جولات حماسية.",
        },
      ],
      highlights: [
        "مشاركة 42 لاعباً من الأكاديمية",
        "تكريم المراكز الثلاثة الأولى بـ دروع تذكارية ورعايات للبطولات المقبلة",
      ],
    },
  },
  {
    slug: "squash-nutrition-guide",
    title: "التغذية الرياضية: كيف تضمن الطاقة القصوى طوال المباراة",
    category: "صحة وتغذية",
    date: "20 سبتمبر 2024",
    author: {
      name: "ديفيد تشين",
      role: "أخصائي الأداء",
    },
    readTime: "5 دقائق",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCoL8XIE8Y30LvIk5nGWjf4KRq3RzHcZsYrxjpwgMSU9_FcJuTh6SE9DOj-ZQQq6s3rzhRWMPJVyCN6jKINs9RUqGLh7HIIMFcf2O2drMi5gbJYwEoj6BpowHF5ds9NN3ApbC9KrS0lMnyRc1MfCXYN0wsGf8f-DINY3uCI2YN-T9UFz5XnZSltqwrCqWb6cqOCqOxeCx0jdBwryuQURJKBCtKIpN6OjCYz0ftheRZ4R2LFqYkH_FuG",
    excerpt:
      "دليل شامل لتغذية لاعبي الاسكواش قبل وأثناء وبعد المباريات الشديدة لضمان سرعة الاستشفاء وتجنب هبوط الجلوكوز في الأشواط الحاسمة.",
    content: {
      introduction:
        "الاسكواش هي واحدة من أعلى الرياضات حرقاً للسعرات الحرارية؛ لذا فإن برنامج التغذية والهيدرات (السوائل) يعادل أهمية التمرين الفني على الملعب.",
      sections: [
        {
          heading: "وجبة ما قبل المباراة بـ 3 ساعات",
          body: "يجب أن تحتوي على كربوهيدرات معقدة سهلة الهضم مثل الأرز البني أو الشوفان مع نسبة معتدلة من البروتين وتجنب الدهون الثقيلة.",
        },
      ],
      quote: {
        text: "الترطيب المنتظم والأملاح المعدنية يمنعان تقلصات العضلات المفاجئة في الشوط الرابع والخامس.",
        author: "ديفيد تشين - أخصائي الأداء",
      },
    },
  },
  {
    slug: "court-renovation-complete",
    title: "تطوير الملاعب الفرعية: افتتاحات جديدة لخدمة الأعضاء",
    category: "المرافق",
    date: "10 سبتمبر 2024",
    author: {
      name: "سارة الزرعوني",
      role: "مديرة علاقات الأعضاء",
    },
    readTime: "3 دقائق",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBhqB9jO2VM6X7gcR-q2dI9Ol97ylKVR4b51GfUFRYZ_13wHTGW8S4oKjXKOp-PtuE9JxL6cZbfQ0Gzl01FKbMdY0i59GgxU4MV07DJksJf36HDK6-X4Ark04Nj9iVkLTjXJW_ol_LQWy1Id9LgMmpkO_dqmADQDgdPof_n_Zmgmy0tiV71iJ43hWgJkuRewtOfEYEvkmU89T1_XWcIFMbU56DxwSpf8YgxYhw3_nN1bf0XpuAjuD2I",
    excerpt:
      "أعلنت إدارة النادي عن اكتمال أعمال الصيانة والتطوير الدوري لملاعب ASB الفرعية بما في ذلك تحديث نظام الإضاءة الـ LED وأنظمة التحكم بالحيوية.",
    content: {
      introduction:
        "في إطار سعينا المستمر للحفاظ على أرقى معايير الجودة الفندقية والرياضية، تم تجديد ملاعب النادي رقم 4 و 5 بالكامل وفتحهما الآن لحجوزات الأعضاء.",
      sections: [
        {
          heading: "إضاءة ذكية جديدة تمنع الانعكاسات",
          body: "تم تركيب مصابيح LED حديثة مصممة خصيصاً لتوزيع الضوء بالتساوي على كافة أرضية الملعب دون أي توهج على الجدران الزجاجية.",
        },
      ],
      highlights: [
        "إعادة تلميع وتقوية أرضيات الخشب الصلب",
        "زيادة كفاءة التكييف وزيادة النقاء الهوائي بنسبة 30%",
      ],
    },
  },
];

export function getNewsBySlug(slug: string): NewsArticle | undefined {
  return newsArticles.find((article) => article.slug === slug);
}
