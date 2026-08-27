import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://miketanaquin.netlify.app"),
  title: {
    default: "Mike Louie Tañaquin | Front-End Developer",
    template: "%s | Mike Tañaquin",
  },
  description:
    "Mike Louie Tañaquin is a front-end developer from the Philippines who builds thoughtful, responsive web experiences with React, Next.js, and Tailwind CSS.",
  keywords: [
    "Mike Tanaquin",
    "Mike Louie Tañaquin",
    "Front-End Developer",
    "React Developer",
    "Next.js Portfolio",
    "TypeScript Developer",
    "Tailwind CSS",
    "Web Developer Philippines",
    "UI/UX",
    "Responsive Web Design",
  ],
  authors: [{ name: "Mike Louie Tañaquin", url: "https://miketanaquin.dev" }],
  creator: "Mike Louie Tañaquin",
  publisher: "Mike Louie Tañaquin",
  icons: {
    icon: "/photo/miketanaquin.png",
    apple: "/photo/miketanaquin.png",
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Mike Louie Tañaquin | Front-End Developer",
    description:
      "Explore the portfolio of Mike Louie Tañaquin, a front-end developer specializing in React, Next.js, TypeScript, and accessible digital experiences.",
    type: "website",
    url: "/",
    siteName: "Mike Louie Tañaquin Portfolio",
    locale: "en_US",
    images: [
      {
        url: "/photo/miketanaquin.png",
        width: 1024,
        height: 1024,
        alt: "Mike Tanaquin portfolio image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mike Louie Tañaquin | Front-End Developer",
    description:
      "Discover responsive web applications by Mike Louie Tañaquin, a front-end developer from the Philippines.",
    creator: "@miketanaquin",
    images: ["/photo/miketanaquin.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html >
  );
}
