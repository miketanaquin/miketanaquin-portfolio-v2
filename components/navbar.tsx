"use client";
import Link from "next/link";
import React from "react";
// import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Nav = () => {
    const navItems = [
        {
            name: "Home",
            id: "home",
        },
        {
            name: "Projects",
            id: "projects",
        },
        {
            name: "About",
            id: "about",
        },
    ];

    // const pathName = usePathname();

    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const sectionOffsets = navItems.map((section) => {
                const element = document.getElementById(section.id);
                return {
                    id: section.id,
                    offsetTop: element.offsetTop,
                    offsetHeight: element.offsetHeight,
                };
            });

            const scrollPosition = window.scrollY + window.innerHeight / 2;

            const currentSection = sectionOffsets.find(
                (section) =>
                    scrollPosition >= section.offsetTop &&
                    scrollPosition < section.offsetTop + section.offsetHeight
            );

            if (currentSection) {
                setActiveSection(currentSection.id);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScrollToSection = (id: any) => {
        const section = document.getElementById(id);
        section.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(id); // Set active section when clicked
    };
    return (
        <div className="hidden md:flex flex-row dark:text-slate-100 font-medium text-lg gap-8 md:text-xl lg:text-2xl ">
            {navItems.map((item, index) => {
                return (
                    // <Link href={item.id} key={index} className={`${item.id === pathName && "text-slate-100 underline underline-offset-8 decoration-orange-500 "}`}>
                    //     <h1 className="hover:text-slate-300 hover:cursor-pointer">{item.name}</h1>
                    // </Link>
                    <>
                        <div
                            key={item.id}
                            className={`cursor-pointer ${activeSection === item.id ? 'text-slate-100 underline underline-offset-8 decoration-orange-500' : ''
                                }`}
                            onClick={() => handleScrollToSection(item.id)}
                        >
                            {item.name}
                        </div>
                    </>
                );
            })}
        </div>
    );
}

export default Nav;
