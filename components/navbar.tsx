"use client";
import { navItems } from "@/lib/site-data";
import { useEffect, useState } from "react";

const Nav = () => {
    const [activeSection, setActiveSection] = useState<string>("home");

    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems
                .map((section) => {
                    const element = document.getElementById(section.id);
                    if (!element) return null;

                    return {
                        id: section.id,
                        offsetTop: element.offsetTop,
                        offsetHeight: element.offsetHeight,
                    };
                })
                .filter((section): section is { id: string; offsetTop: number; offsetHeight: number } => Boolean(section));

            const scrollPosition = window.scrollY + window.innerHeight / 2;
            const currentSection = sections.find(
                (section) =>
                    scrollPosition >= section.offsetTop &&
                    scrollPosition < section.offsetTop + section.offsetHeight
            );

            if (currentSection) {
                setActiveSection(currentSection.id);
            }
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleScrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (!section) return;

        section.scrollIntoView({ behavior: "smooth", block: "start" });
        setActiveSection(id);
    };

    return (
        <div className="hidden md:flex flex-row dark:text-slate-100 font-medium text-lg gap-8 md:text-xl lg:text-2xl ">
            {navItems.map((item, index) => (
                <div
                    key={`${item.id}-${index}`}
                    className={`cursor-pointer relative pb-2 transition-colors duration-300 group ${
                        activeSection === item.id ? "text-slate-100" : ""
                    }`}
                    onClick={() => handleScrollToSection(item.id)}
                >
                    {item.name}
                    <span
                        className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-400 transition-all duration-500 ${
                            activeSection === item.id ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                    />
                </div>
            ))}
        </div>
    );
};

export default Nav;
