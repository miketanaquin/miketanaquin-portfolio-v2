import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Mike Tanaquin | Front-End Developer",
    template: "%s | Portfolio",
  },
  description:
    "Portfolio of Mike Louie Tañaquin — a Filipino front-end developer building responsive, SEO-friendly web applications with React, Next.js, and Tailwind CSS.",
  keywords: [
    "Mike Tanaquin",
    "Front-End Developer",
    "React Developer",
    "Next.js Portfolio",
    "Tailwind CSS",
    "Web Developer Philippines",
    "UI/UX",
    "Responsive Web Design",
  ],
  authors: [{ name: "Mike Louie Tañaquin", url: "https://miketanaquin.dev" }],
  openGraph: {
    title: "Mike Tanaquin | Front-End Developer",
    description:
      "Explore the portfolio of Mike Louie Tañaquin, a driven front-end developer specializing in React, Next.js, Tailwind CSS, and accessible web experiences.",
    type: "website",
    images: [
      {
        url: "https://miketanaquin.netlify.app/photo/miketanaquin.png",
        width: 1200,
        height: 630,
        alt: "Mike Tanaquin portfolio image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mike Tanaquin | Front-End Developer",
    description:
      "Discover responsive, performance-first web applications by Mike Louie Tañaquin — a front-end developer from the Philippines.",
    images: ["https://miketanaquin.netlify.app/photo/miketanaquin.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
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
