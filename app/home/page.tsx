"use client";
import Header from '@/components/header'
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';
import { motion } from "framer-motion";
import React from 'react'

const Home = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/cv/MikeTanaquin_CV_2024.pdf'; // Replace with the actual path to your PDF file
        link.download = 'MikeTanaquin_CV_2024.pdf'; // The name of the file that will be downloaded
        document.body.appendChild(link);
        link.click();
    };

    return (
        <div id='home' className="section w-full h-fit overflow-x-hidden bg-white dark:bg-zinc-900 pb-20 lg:pb-36">
            <Header />
            <motion.div initial={{ opacity: 0.0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.5,
                    ease: "easeInOut",
                }} className="container pt-20">
                <div className="flex flex-col md:flex-row md:justify-between gap-3">
                    <div className="flex flex-col lg:w-3/5 lg:gap-8 md:justify-center gap-5">
                        <div className="text-3xl font-semibold text-wrap tracking-tight  dark:text-slate-100 md:text-4xl lg:text-5xl xl:text-6xl ">
                            <h1>
                                One Line of Code at a Time.
                            </h1>
                        </div>
                        <div className="font-extralight text-md text-wrap tracking-tight dark:text-slate-300 md:text-lg md:my-0 xl:text-2xl">
                            <h2>
                                Hi, I'm <span className="text-orange-500 font-semibold "> Mike Louie Tañaquin</span>. A dedicated junior software developer who creates innovative web applications and seamless user experiences by turning ideas into reality through code.
                            </h2>
                        </div>
                        <div className="flex justify-center text-center">
                            <HoverBorderGradient onClick={handleDownload}
                                containerClassName="rounded-full"
                                as="button"
                                className="dark:bg-gray-900 bg-white text-black dark:text-white flex items-center space-x-2"
                            >
                                <span>Download Resume</span>
                            </HoverBorderGradient>
                        </div>
                    </div>
                    <div className="mt-5 flex justify-center lg:w-2/5 lg:justify-end relative">
                        <img alt='tanaquin' className="brightness-75 contrast-25 border-r-2 border-b-2 w-auto h-auto border-orange-500 z-10 hover:brightness-100 hover:duration-1000" src="/photo/Main-Picture.png" />
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