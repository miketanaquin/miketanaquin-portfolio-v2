"use client";

import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="w-full bg-zinc-950 py-16 md:py-24">
      <div className="container overflow-x-hidden">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col gap-8"
        >
          <div className="max-w-3xl">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.32em] text-orange-400">About</p>
            <h2 className="text-3xl font-semibold text-white md:text-5xl">
              Front-end engineer with a sharp eye for product clarity.
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.5fr]">
            <div className="rounded-2xl border border-white/10 bg-zinc-900/75 p-5 md:p-6">
              <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Background</p>
              <div className="mt-6 space-y-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-orange-300">Education</p>
                  <h3 className="mt-2 text-xl font-medium text-white">University of the East, Manila</h3>
                </div>
                <p className="max-w-sm text-slate-300">Bachelor&apos;s Degree in Electronics and Communications Engineering</p>
                <p className="text-sm text-slate-400">June 2015 — December 2020</p>
              </div>
            </div>

            <div className="space-y-5">
              <div className="mb-1">
                <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Work Experience</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-zinc-900/75 p-5 md:p-6">
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.22em] text-slate-400">Current</p>
                    <h3 className="mt-2 text-xl font-medium text-white">StunnerYPP Corp.</h3>
                  </div>
                  <span className="rounded-full border border-orange-500/20 bg-orange-500/5 px-3 py-1 text-xs font-medium text-orange-300">
                    Frontend Developer
                  </span>
                </div>
                <p className="mt-4 text-sm text-slate-300">November 2024 — Present</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-zinc-900/75 p-5 md:p-6">
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.22em] text-slate-400">Previous</p>
                    <h3 className="mt-2 text-xl font-medium text-white">CCK City Network, Inc.</h3>
                  </div>
                  <span className="rounded-full border border-orange-500/20 bg-orange-500/5 px-3 py-1 text-xs font-medium text-orange-200">
                    Software Engineer
                  </span>
                </div>
                <p className="mt-4 text-sm text-slate-300">August 2023 — November 2024</p>
              </div>
            </div>
          </div>

          <div className="mt-2 rounded-3xl border border-white/10 bg-zinc-900/75 p-6 md:p-10">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <p className="text-xs font-medium uppercase tracking-[0.28em] text-orange-400">Let&apos;s work together</p>
                <h2 className="max-w-3xl text-2xl font-semibold text-white md:text-4xl">
                  Building thoughtful product experiences that feel premium from day one.
                </h2>
                <p className="max-w-2xl text-sm leading-6 text-slate-300 md:text-base">
                  I help teams turn ideas into clear, high-converting digital experiences — from polished frontends and product interfaces to smarter user flows that convert attention into action.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="mailto:tanaquinmike@gmail.com"
                  className="inline-flex items-center justify-center rounded-full bg-orange-500 px-5 py-3 text-sm font-medium text-slate-950 transition hover:bg-orange-400"
                >
                  Start a project
                </a>
                <a
                  href="https://www.linkedin.com/in/mike-louie-tanaquin-003227217/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-white transition hover:border-orange-400 hover:text-orange-300"
                >
                  Connect on LinkedIn
                </a>
              </div>

              <div className="mt-1 grid gap-3 border-t border-white/10 pt-4 text-sm text-slate-300 md:grid-cols-3">
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=tanaquinmike@gmail.com" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 transition hover:text-orange-300">
                  <span className="h-2.5 w-2.5 rounded-full bg-orange-400" />
                  tanaquinmike@gmail.com
                </a>
                <a href="https://github.com/miketanaquin" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 transition hover:text-orange-300">
                  <span className="h-2.5 w-2.5 rounded-full bg-orange-300" />
                  github.com/miketanaquin
                </a>
                <a href="tel:+639061395059" className="group flex items-center gap-2 transition hover:text-orange-300">
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-400" />
                  +63 906 139 5059
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;