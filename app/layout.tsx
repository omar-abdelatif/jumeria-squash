import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://jumeira-squash.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "نادي جميرا للاسكواش | تدريب النخبة ومرافق فاخرة في دبي",
    template: "%s | نادي جميرا للاسكواش",
  },
  description:
    "جرب قمة التدريب على الاسكواش والمرافق الفاخرة في دبي. ملاعب زجاجية عالمية، مدربين دوليين، وصالة أداء مخصصة للأبطال.",
  keywords: [
    "نادي جميرا للاسكواش",
    "جميرا للاسكواش دبي",
    "حجز ملاعب اسكواش دبي",
    "تدريب اسكواش دبي",
    "مدربي اسكواش دبي",
    "بطولات اسكواش الإمارات",
    "Jumeira Squash Club",
    "Squash court booking Dubai",
    "Squash academy Dubai",
  ],
  authors: [{ name: "نادي جميرا للاسكواش" }],
  creator: "نادي جميرا للاسكواش",
  publisher: "نادي جميرا للاسكواش",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/favicon.ico",
    apple: "/logo.png",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "نادي جميرا للاسكواش | تدريب النخبة ومرافق فاخرة",
    description:
      "جرب قمة التدريب على الاسكواش والمرافق الفاخرة في دبي. ملاعب زجاجية عالمية، مدربين دوليين، وصالة أداء مخصصة للأبطال.",
    url: siteUrl,
    siteName: "نادي جميرا للاسكواش",
    locale: "ar_AE",
    type: "website",
    images: [
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtGGrg3cSAmhl3GdON4OGVThyrhrAry_T4X9ohPX6DW6mWHIkUSs8c-ppJOo1FVQArVOLNhyZG1E4ig-5WiA9UU_pf9qowy85y-Ktg7Qc8W1ZKRv1GalduSPXQkIR02ZcCGPkpiDVyCqbHguKVdSXhRlijN8sY-RGpcT3Pc3eWtjVHk3neYPIpd4SzbUX6chle6pzsaB02juUy9mhlPm7-LqyI-oqvC_nrIQ7ZnfGy-PIE_Ii5PS7j",
        width: 1200,
        height: 630,
        alt: "نادي جميرا للاسكواش دبي",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "نادي جميرا للاسكواش | دبي",
    description:
      "جرب قمة التدريب على الاسكواش والمرافق الفاخرة في دبي. ملاعب زجاجية عالمية ومدربين دوليين.",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDtGGrg3cSAmhl3GdON4OGVThyrhrAry_T4X9ohPX6DW6mWHIkUSs8c-ppJOo1FVQArVOLNhyZG1E4ig-5WiA9UU_pf9qowy85y-Ktg7Qc8W1ZKRv1GalduSPXQkIR02ZcCGPkpiDVyCqbHguKVdSXhRlijN8sY-RGpcT3Pc3eWtjVHk3neYPIpd4SzbUX6chle6pzsaB02juUy9mhlPm7-LqyI-oqvC_nrIQ7ZnfGy-PIE_Ii5PS7j",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  name: "نادي جميرا للاسكواش",
  alternateName: "Jumeira Squash Club",
  url: siteUrl,
  telephone: "+971-4-123-4567",
  email: "concierge@jumeirasquash.com",
  priceRange: "$$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 شارع شاطئ جميرا",
    addressLocality: "دبي",
    addressCountry: "AE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 25.2048,
    longitude: 55.2708,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html dir="rtl" lang="ar" className="dark">
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="shortcut icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&family=Tajawal:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-24 sm:pt-[104px] pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
