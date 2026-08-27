"use client";
import Header from '@/components/header'
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';
import { motion } from "framer-motion";
import React from 'react'

const Home = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/cv/Mike_Tanaquin_Resume_2026.pdf'; // Replace with the actual path to your PDF file
        link.download = 'Mike_Tanaquin_Resume_2026.pdf'; // The name of the file that will be downloaded
        document.body.appendChild(link);
        link.click();
    };

    return (
        <div id='home' className="section w-full h-fit overflow-x-hidden bg-zinc-950 pb-20 lg:pb-36">
            <Header />
            <motion.div initial={{ opacity: 0.0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.5,
                    ease: "easeInOut",
                }} className="container pt-24 md:pt-28">
                <div className="flex flex-col gap-3 md:flex-row md:justify-between">
                    <div className="order-2 flex min-w-0 flex-col gap-5 md:order-1 md:w-3/5 md:justify-center lg:gap-8">
                        <div className="whitespace-nowrap text-xl font-semibold tracking-tight dark:text-slate-100 sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl">
                            <h1>
                                One Line of Code at a Time.
                            </h1>
                        </div>
                        <div className="font-extralight text-md text-wrap tracking-tight dark:text-slate-300 md:text-lg md:my-0 xl:text-2xl">
                            <h2>
                                Hi, I'm <span className="text-orange-500 font-semibold "> Mike Louie Tañaquin</span>. A dedicated mid-level front-end developer who creates innovative web applications and seamless user experiences by turning ideas into reality through code.
                            </h2>
                        </div>

                        <div className="flex flex-col items-center gap-3 justify-center">
                            <HoverBorderGradient onClick={handleDownload}
                                containerClassName="rounded-full"
                                as="button"
                                className="bg-zinc-950 text-white flex items-center space-x-2 shadow-[0_0_0_1px_rgba(249,115,22,0.18)]"
                            >
                                <span>Download Resume</span>
                            </HoverBorderGradient>

                            {/* <a href="#projects" className="rounded-full border border-white/10 bg-zinc-900/80 px-5 py-3 text-sm font-medium text-slate-100 transition-all duration-300 hover:border-orange-500/40 hover:bg-zinc-900 hover:text-orange-300">
                                View Projects
                            </a>

                            <a href="#about" className="rounded-full border border-orange-500/30 bg-orange-500/10 px-5 py-3 text-sm font-medium text-orange-200 transition-all duration-300 hover:border-orange-400 hover:bg-orange-500/15 hover:text-orange-100">
                                Contact Me
                            </a> */}
                        </div>

                        <div className="relative mt-2 flex justify-center md:hidden">
                            <img alt='tanaquin' className="brightness-75 contrast-25 border-r-2 border-b-2 w-auto h-auto border-orange-500 z-10 hover:brightness-100 hover:duration-1000" src="/photo/miketanaquin.png" />
                            <div className="w-5/6 h-5/6 bg-slate-600 absolute bottom-10 right-0 blur-3xl"></div>
                            <div className="w-5/6 h-5/6 bg-slate-600 absolute bottom-0 right-10 blur-3xl"></div>
                            <div className="w-5/6 h-5/6 bg-slate-800 absolute -bottom-10 right-0 blur-3xl"></div>
                            <div className="w-5/6 h-5/6 bg-slate-800 absolute bottom-0 -right-10 blur-3xl"></div>
                        </div>

                        <div className="grid gap-3 pt-2 text-sm text-slate-600 dark:text-slate-300 sm:grid-cols-3 z-10">
                            <div className="rounded-2xl border border-white/10 bg-zinc-900/75 p-3">
                                <div className="text-xl font-semibold text-orange-500">3+</div>
                                <div className="text-slate-300">Years building web products</div>
                            </div>
                            <div className="rounded-2xl border border-white/10 bg-zinc-900/75 p-3">
                                <div className="text-xl font-semibold text-orange-500">10+</div>
                                <div className="text-slate-300">Projects delivered</div>
                            </div>
                            <div className="rounded-2xl border border-white/10 bg-zinc-900/75 p-3">
                                <div className="text-xl font-semibold text-orange-500">UI + UX</div>
                                <div className="text-slate-300">Design-minded development</div>
                            </div>
                        </div>

                        {/* <div className="grid gap-3 pt-3 md:grid-cols-3">
                            {[
                                { title: "Product-first UI", body: "Clean interfaces built around business goals and user flow." },
                                { title: "Modern stacks", body: "React, Next.js, and Tailwind for fast and maintainable products." },
                                { title: "Execution mindset", body: "From design handoff to polished front-end implementation and iteration." },
                            ].map((item) => (
                                <div key={item.title} className="rounded-2xl border border-white/10 bg-zinc-900/75 p-4">
                                    <h3 className="mb-2 text-base font-semibold text-white">{item.title}</h3>
                                    <p className="text-sm leading-6 text-slate-300">{item.body}</p>
                                </div>
                            ))}
                        </div> */}
                    </div>
                    <div className="order-1 mt-5 hidden min-w-0 justify-center relative md:order-2 md:flex md:w-2/5 lg:justify-end">
                        <img alt='tanaquin' className="z-10 h-auto max-w-full border-r-2 border-b-2 border-orange-500 object-contain brightness-75 contrast-25 hover:brightness-100 hover:duration-1000" src="/photo/miketanaquin.png" />
                        <div className="w-5/6 h-5/6 bg-slate-600 absolute bottom-10 right-0 blur-3xl"></div>
                        <div className="w-5/6 h-5/6 bg-slate-600 absolute bottom-0 right-10 blur-3xl"></div>
                        <div className="w-5/6 h-5/6 bg-slate-800 absolute -bottom-10 right-0 blur-3xl"></div>
                        <div className="w-5/6 h-5/6 bg-slate-800 absolute bottom-0 -right-10 blur-3xl"></div>
                    </div>
                </div>
            </motion.div >
        </div>

    )
}

export default Home