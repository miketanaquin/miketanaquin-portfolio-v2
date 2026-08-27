"use client";
import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/cv/Mike_Tanaquin_Resume_2026.pdf";
    link.download = "Mike_Tanaquin_Resume_2026.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/mike-louie-tanaquin-003227217/",
      label: "LinkedIn",
      icon: (
        <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
          <path fill="currentColor" d="M6.94 8.5A1.56 1.56 0 1 1 6.93 5.4a1.56 1.56 0 0 1 .01 3.1ZM5.5 9.9h2.9V18H5.5V9.9Zm4.7 0h2.76v1.1h.04c.38-.73 1.33-1.5 2.72-1.5 2.91 0 3.45 1.91 3.45 4.4V18h-2.9v-15.4c0-1.5-.03-3.43-2.09-3.43-2.1 0-2.42 1.64-2.42 3.33V18h-2.9V9.9Z" />
        </svg>
      ),
    },
    {
      href: "mailto:tanaquinmike@gmail.com",
      label: "Email",
      icon: (
        <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
          <path fill="currentColor" d="M3 6.75A2.75 2.75 0 0 1 5.75 4h12.5A2.75 2.75 0 0 1 21 6.75v10.5A2.75 2.75 0 0 1 18.25 20H5.75A2.75 2.75 0 0 1 3 17.25V6.75Zm2.2-.5 6.8 5.17 6.8-5.17H5.2Zm13.05 2.08-5.85 4.44a1 1 0 0 1-1.2 0L5.75 8.33v8.92c0 .41.34.75.75.75h10.99c.41 0 .75-.34.75-.75V8.33Z" />
        </svg>
      ),
    },
    {
      href: "https://github.com/miketanaquin",
      label: "GitHub",
      icon: (
        <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
          <path fill="currentColor" d="M12 .5A12 12 0 0 0 8.21 23.4c.6.11.82-.26.82-.58 0-.28-.01-1.02-.02-2-3.34.73-4.04-1.6-4.04-1.6-.55-1.4-1.34-1.78-1.34-1.78-1.1-.75.08-.73.08-.73 1.2.08 1.83 1.23 1.83 1.23 1.08 1.86 2.83 1.32 3.52 1.01.11-.79.42-1.33.76-1.63-2.66-.3-5.46-1.33-5.46-5.92 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.53.12-3.18 0 0 1-.32 3.3 1.23A11.4 11.4 0 0 1 12 7.2c1.01 0 2.03.14 2.98.41 2.29-1.55 3.29-1.23 3.29-1.23.65 1.65.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.6-2.81 5.62-5.49 5.91.43.37.81 1.11.81 2.24 0 1.62-.01 2.92-.01 3.32 0 .32.22.7.83.58A12 12 0 0 0 12 .5Z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="w-full border-t border-white/10 bg-[#0b0d12]">
      <div className="container py-10 md:py-12">
        <div className="grid gap-8 md:grid-cols-[1.2fr_1fr_auto] md:items-end">
          <div className="space-y-3">
            <p className="text-[0.65rem] font-medium uppercase tracking-[0.32em] text-orange-500">
              Available for work
            </p>
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
                Mike Louie Tañaquin
              </h2>
              <p className="mt-2 text-sm text-slate-400">© {year}</p>
            </div>
          </div>

          <div className="flex flex-col gap-4 md:items-start">
            <p className="text-[0.65rem] font-medium uppercase tracking-[0.3em] text-slate-400">
              Connect
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={link.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-slate-200 transition duration-300 hover:-translate-y-0.5 hover:border-orange-400/40 hover:bg-white/[0.04] hover:text-white"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-start gap-4 md:items-end">
            <p className="text-sm text-slate-300">Let&apos;s build something thoughtful.</p>
            <button
              onClick={handleDownload}
              className="inline-flex items-center justify-center rounded-full border border-orange-400/40 bg-orange-500/10 px-4 py-2 text-sm font-medium text-orange-500 transition duration-300 hover:border-orange-300 hover:bg-orange-500/20 hover:text-white"
            >
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
