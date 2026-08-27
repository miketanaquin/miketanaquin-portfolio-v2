"use client";
import ProjectItems from '@/components/project-items';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { TracingBeam } from '@/components/ui/tracing-beam';
import { projectItems } from '@/lib/site-data';

const words = "Explore the diverse range of applications I've developed, each reflecting my commitment to quality, innovation, and a seamless user experience.";

const Projects = () => {
    return (
        <section id='projects' className='w-full min-h-screen bg-zinc-950 transition-colors duration-500'>
            <div className="container py-10 md:py-16">
                <TracingBeam>
                    <div className='flex flex-col gap-8 lg:flex-row lg:gap-10'>
                        <div className='relative flex h-full flex-col lg:sticky lg:top-1/3 lg:w-[32%]'>
                            <p className='mb-3 text-xs font-medium uppercase tracking-[0.3em] text-orange-500'>Selected work</p>
                            <h1 className='mb-4 text-3xl font-medium text-slate-50 lg:text-5xl'>Projects</h1>
                            <div className='max-w-xl'>
                                <TextGenerateEffect words={words} />
                            </div>
                        </div>

                        <ProjectItems items={projectItems} />
                    </div>
                </TracingBeam>
            </div>
        </section>
    );
};

export default Projects;
