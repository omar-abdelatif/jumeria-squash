import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "نادي جميرا للاسكواش - Jumeira Squash Club",
    short_name: "جميرا اسكواش",
    description:
      "تدريب النخبة للاسكواش والمرافق الفاخرة للرياضي المعاصر في دبي.",
    start_url: "/",
    display: "standalone",
    background_color: "#131315",
    theme_color: "#131315",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
