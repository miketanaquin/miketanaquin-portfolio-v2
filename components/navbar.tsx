"use client";
import Link from "next/link";
import React, { useMemo } from "react";
// import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Nav = () => {
    const navItems = useMemo(() => [{
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
    },], []);

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
    }, [navItems]);

    const handleScrollToSection = (id: any) => {
        const section = document.getElementById(id);
        section.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <div className="hidden md:flex flex-row dark:text-slate-100 font-medium text-lg gap-8 md:text-xl lg:text-2xl ">
            {navItems.map((item, index) => {
                return (
                    <>
                        <div
                            key={index}
                            className={`cursor-pointer relative pb-2 transition-colors duration-300 group ${
                                activeSection === item.id ? 'text-slate-100' : ''
                            }`}
                            onClick={() => handleScrollToSection(item.id)}
                        >
                            {item.name}
                            <span
                                className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-400 transition-all duration-500 ${
                                    activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                                }`}
                            />
                        </div>
                    </>
                );
            })}
        </div>
    );
}

export default Nav;
