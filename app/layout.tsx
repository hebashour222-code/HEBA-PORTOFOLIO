import type { Metadata, Viewport } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  title: "هبة عاشور إبراهيم | أخصائية تسويق رقمي ومخططة استراتيجية | Heba Ashour Ibrahim",
  description:
    "معرض أعمال هبة عاشور إبراهيم: صيدلانية وأخصائية تسويق رقمي ومخططة استراتيجية لقطاعات الـ B2B، الصيدلة، والتصنيع. B2B, Pharmaceutical & Manufacturing Marketing Strategist.",
  keywords: [
    "Heba Ashour",
    "هبة عاشور",
    "Digital Marketing Specialist",
    "Marketing Strategist",
    "B2B Marketing",
    "Pharma Marketing",
    "Manufacturing Marketing",
    "Cairo Egypt",
    "Pharmacist Marketer",
    "Performance Marketing",
    "AI-Powered Marketing",
  ],
  authors: [{ name: "Heba Ashour Ibrahim", url: "https://www.linkedin.com/in/heba-ashour-d/" }],
  creator: "Heba Ashour Ibrahim",
  metadataBase: new URL("https://heba-ashour.com"),
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "هبة عاشور إبراهيم | أخصائية تسويق رقمي ومخططة استراتيجية",
    description:
      "صيدلانية ومسوقة رقمية متخصصة في قطاعات الأعمال B2B، الصناعات الدوائية، والحلول الصناعية. استعراض الاستراتيجيات ونماذج الأعمال الموثقة.",
    type: "website",
    locale: "ar_EG",
    alternateLocale: ["en_US"],
    images: [
      {
        url: "/assets/profile/heba-ashour.jpeg",
        width: 800,
        height: 800,
        alt: "Heba Ashour Ibrahim — Portrait",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Heba Ashour Ibrahim | Digital Marketing Specialist & Strategist",
    description: "Performance, Growth & Full-Funnel Marketing for B2B, Pharma & Manufacturing",
    images: ["/assets/profile/heba-ashour.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#FAF6F0",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="min-h-screen bg-[#FAF6F0] text-[#241812] selection:bg-[#F8CEC0] selection:text-[#241812]">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
