import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Tania Lapalelo | Frontend Developer & Educator",
    template: "%s | Tania Lapalelo",
  },
  description:
    "I'm Tania — a frontend developer, educator, and content creator who builds clean, accessible, and creative web experiences.",
  icons: {
    icon: "/favicon.ico", 
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
    other: {
      rel: "manifest",
      url: "/site.webmanifest",
    },
  },
  keywords: [
    "Tania",
    "Tania Lapalelo",
    "Frontend Developer",
    "Next.js Portfolio",
    "Web Developer",
    "Indonesian Developer",
    "UI Designer",
    "Frontend Engineer",
  ],
  metadataBase: new URL("https://tanialapalelo.my.id"),
  openGraph: {
    title: "Tania Lapalelo | Frontend Developer & Educator",
    description:
      "Creative frontend developer with a passion for teaching and UI design. Let's build something beautiful.",
    url: "https://tanialapalelo.my.id",
    siteName: "Tania Lapalelo Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tania Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tania | Frontend Developer & Educator",
    description:
      "Creative frontend developer with a passion for teaching and UI design. Let's build something beautiful.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxVideoPreview: -1,
      maxImagePreview: "large",
      maxSnippet: -1,
    },
  },
  alternates: {
    canonical: "https://tanialapalelo.my.id",
  },
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen px-4 py-8">{children}</main>
        {/* <Toaster richColors position="top-right" /> */}
        <Footer />
      </body>
    </html>
  );
}
