"use client";
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import React, { useEffect, useState } from 'react';

const projectItems = [
    {
        title: "CCK Philippines Website",
        description: `I collaborated closely with my teammate to design and develop the CCK Philippines website with the goal of increasing client engagement and attracting new business opportunities. Our focus was on creating a user-friendly platform that effectively showcases the company's services and strengths, ensuring a positive experience for potential clients while maximizing online visibility and brand appeal. This project allowed us to apply strategic design and development techniques, resulting in a website that serves as a powerful tool for client acquisition and company growth.`,
        exos: `Web App`,
        tech: `Javascript, React js, Tailwind CSS, TypeScript, Next js, PHP, Laravel, Inertia js`,
        db: `None`,
        tasktype: `Developed Several functions and Front end design`
    },
    {
        title: "This Portfolio",
        description: `I developed this portfolio to promote and showcase my skills and the projects I have completed throughout my career as a software developer. The portfolio includes detailed information about my background, expertise, and a means to contact me for professional inquiries.`,
        exos: `Web App`,
        tech: `Javascript, React js, Tailwind CSS, TypeScript, Next js`,
        db: `None`,
        tasktype: `Developed the System`
    },
    {
        title: "Data Entry Announcement System",
        description: `I developed a website for the Data Entry Department of CCK City Network, Inc., which serves as both an announcement system and a communication tool. This platform is designed to efficiently broadcast messages and notifications within the department, ensuring real-time dissemination of information across various channels. By enhancing internal communication, the system helps the department stay informed and respond promptly to important updates.`,
        exos: `Web App`,
        tech: `Javascript, React js, Inertia js, PHP, Laravel, Vite, Tailwind CSS`,
        db: `MySQL`,
        tasktype: `Developed the System`
    },
    {
        title: "Ecommerce Website",
        description: `During my training, I undertook the development of a sneaker e-commerce website, which serves as an online platform for buying and selling sneakers, catering to both casual buyers and collectors. The website features comprehensive product listings, complete with search and filtering options. Each sneaker is showcased on a dedicated page that includes images and descriptions. The platform also incorporates a checkout process and seller tools for managing product listings. This project highlights my ability to create a robust and user-friendly e-commerce experience.`,
        exos: `Web App`,
        tech: `Javascript, Bootstrap, PHP, Laravel`,
        db: `MySQL`,
        tasktype: `Training Project`
    },
    {
        title: "Video Sharing Website",
        description: `During my training, I developed a video-sharing website, an online platform that allows users to create accounts and upload their own videos. The platform also enables users to subscribe to channels and engage with content through features such as likes, comments, and shares. This project showcases my ability to build an interactive and community-driven website, providing users with a dynamic space to share and discover video content.`,
        exos: `Web App`,
        tech: `Javascript, Vue js, PHP, Laravel, Jquery, JSON, Tailwind CSS, Vite`,
        db: `MySQL`,
        tasktype: `Training Project`
    },
    {
        title: "Inventory System",
        description: `I developed several functions and design elements for an inventory management system used by businesses to efficiently oversee and monitor their inventory. This system provides a comprehensive management solution for goods, raw materials, and finished products. It enables businesses to accurately track item quantities, streamline reordering processes, monitor sales performance, and mitigate the risks of overstocking or stockouts. By integrating these functionalities, the system enhances operational efficiency and supports optimal inventory control.`,
        exos: `Web App`,
        tech: `Javascript, Vue js, PHP, Laravel, Jquery, JSON, Tailwind CSS, Vite`,
        db: `MySQL`,
        tasktype: `Developed Front-end, Several Functions for Back-end`
    },
    {
        title: "Eiken and Kanken Exam Application for Manila Japanese School",
        description: `I designed and developed various functions and design components for the Manila Japanese School's Exam Applications website. This platform is specifically tailored to facilitate the management and processing of examination-related activities. My contributions include implementing key functionalities and developing user interfaces to support the seamless operation of exam applications, enhancing the efficiency and effectiveness of the examination process for the school.`,
        exos: `Web App`,
        tech: `Javascript, Google App Script, Jquery, JSON, Bootstrap`,
        db: `Spreadsheet`,
        tasktype: `Developed Front-end, Several Functions for Back-end`
    },
    {
        title: "Data Entry AWS Support System",
        description: `The AWS support system was an existing project at CCK City Network, Inc. before I joined the company. Following a colleague's resignation, I was entrusted with the responsibility of maintaining this critical system. The AWS support system leverages AWS and Google APIs to monitor the tasks of the Data Entry Department, ensuring smooth and efficient operations. My role involves overseeing the system's functionality, ensuring it continues to perform reliably, and addressing any issues that arise to maintain seamless task monitoring.`,
        exos: `Web App`,
        tech: `Javascript, Jquery, JSON, Bootstrap, PHP, Laravel`,
        db: `MySQL`,
        tasktype: `Support, Several Functions for Back-end`
    },

]

// Define an array of 3 colors to loop through
const colors = ['bg-zinc-800', 'bg-slate-800', 'bg-black'];

const words = `Explore the diverse range of applications I've developed, each reflecting my commitment to quality, innovation, and a seamless user experience.`;

const Projects = () => {
    // State to track the current color index
    const [colorIndex, setColorIndex] = useState(0);

    useEffect(() => {
        // Function to change background color based on scroll position
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;


            // Calculate the current section based on scroll position and total number of colors
            const newColorIndex = Math.floor(scrollY / windowHeight) % colors.length;

            // Update the state with the new color index
            setColorIndex(newColorIndex);
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup event listener on unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);

    return (
        <>
            {/* Dynamically apply background color to the whole projects section */}
            {/* <section id='projects' className={`w-full min-h-screen ${colors[colorIndex]} transition-colors duration-500`}>
                <div className="container py-10 ">
                    <div className='flex flex-col lg:flex-row lg:gap-8'>
                        <div className='relative lg:sticky lg:top-1/3 flex flex-col py-5 h-full lg:w-1/2'>
                            <div className="w-full h-full bg-slate-800 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-3xl rounded-full"></div>
                            <div className="w-1/2 h-1/2 bg-slate-700/90 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-3xl rounded-full"></div>
                            <h1 className='text-3xl lg:text-5xl font-medium mb-3 z-10'>Projects</h1>
                            <TextGenerateEffect words={words} />
                        </div>
                        <div className="h-full lg:w-1/2">
                            {projectItems.map((item, index) => (
                                <section className="py-5 min-h-screen" key={index}>
                                    <div className='mb-5'>
                                        <h1 className='text-slate-50 text-2xl font-medium font-sans'>{item.title}</h1>
                                    </div>
                                    <div className='mb-5'>
                                        <h1 className='text-slate-50 tracking-tight leading-relaxed'>Description:</h1>
                                        <span className='text-slate-400'>{item.description}</span>
                                    </div>
                                    <div className='grid grid-cols-2'>
                                        <div className='mb-5'>
                                            <h1 className='text-slate-50 tracking-tight leading-relaxed'>Execution OS:</h1>
                                            <span className='text-slate-400'>{item.exos}</span>
                                        </div>
                                        <div className='mb-5'>
                                            <h1 className='text-slate-50 tracking-tight leading-relaxed'>Tech:</h1>
                                            <span className='text-slate-400'>{item.tech}</span>
                                        </div>
                                    </div>
                                    <div className='grid grid-cols-2'>
                                        <div className='mb-5'>
                                            <h1 className='text-slate-50 tracking-tight leading-relaxed'>Database:</h1>
                                            <span className='text-slate-400'>{item.db}</span>
                                        </div>
                                        <div className='mb-5'>
                                            <h1 className='text-slate-50 tracking-tight leading-relaxed'>Task Type:</h1>
                                            <span className='text-slate-400'>{item.tasktype}</span>
                                        </div>
                                    </div>
                                    <div className="p-[.5px] mt-5 bg-gradient-to-r from-orange-500/0 via-orange-500 to-orange-500/0 rounded-lg"></div>
                                </section>
                            ))}
                        </div>
                    </div>
                </div>
            </section> */}

            <section id='projects' className={`w-full min-h-screen ${colors[colorIndex]} transition-colors duration-500 `}>
                <div className="container py-10 ">
                    <div className='flex flex-col lg:flex-row lg:gap-8'>
                        <div className='relative lg:sticky lg:top-1/3 flex flex-col h-full lg:w-1/2'>
                            {/* <div className="w-full h-full bg-slate-800 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-3xl rounded-full"></div>
                            <div className="w-1/2 h-1/2 bg-slate-700/90 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-3xl rounded-full"></div> */}
                            <h1 className='text-3xl lg:text-5xl font-medium mb-3 z-10'>Projects</h1>
                            <TextGenerateEffect words={words} />
                        </div>
                        <div className="h-full lg:w-1/2">
                            {projectItems.map((item, index) => (
                                <>
                                    <div className="p-3" key={index}>
                                        <div className='mb-5'>
                                            <h1 className='text-slate-50 text-2xl font-medium font-sans'>{item.title}</h1>
                                        </div>
                                        <div className='mb-5'>
                                            <h1 className='text-slate-50 tracking-tight leading-relaxed'>Description:</h1>
                                            <span className=' text-slate-400'>{item.description}</span>
                                        </div>
                                        <div className='grid grid-cols-2'>
                                            <div className='mb-5'>
                                                <h1 className='text-slate-50 tracking-tight leading-relaxed'>Execution OS:</h1>
                                                <span className=' text-slate-400'>{item.exos}</span>
                                            </div>
                                            <div className='mb-5'>
                                                <h1 className='text-slate-50 tracking-tight leading-relaxed'>Tech:</h1>
                                                <span className=' text-slate-400'>{item.tech}</span>
                                            </div>
                                        </div>
                                        <div className='grid grid-cols-2'>
                                            <div className='mb-5'>
                                                <h1 className='text-slate-50 tracking-tight leading-relaxed'>DataBase:</h1>
                                                <span className=' text-slate-400'>{item.db}</span>
                                            </div>
                                            <div className='mb-5'>
                                                <h1 className='text-slate-50 tracking-tight leading-relaxed'>Task Type:</h1>
                                                <span className=' text-slate-400'>{item.tasktype}</span>
                                            </div>
                                        </div>
                                        <div className="p-[.5px] mt-5 bg-gradient-to-r from-orange-500/0  via-orange-500 to-orange-500/0 rounded-lg"></div>
                                    </div>
                                </>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Projects;
