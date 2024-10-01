import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mike Tanaquin's Portfolio",
  description: "Mike Louie O Tañaquin – A software engineer with expertise in both frontend and backend development. Specializing in React JS, Vue JS, Tailwind CSS, Bootstrap for the frontend, and PHP, Laravel for the backend. With over a year of experience, Mike has developed and collaborated on diverse projects, including e-commerce platforms, exam application systems, and data management solutions. Based in the Philippines, Mike creates dynamic, responsive, and scalable web applications that prioritize user experience and SEO optimization. Explore Mike's portfolio to see his innovative solutions in action.",
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
