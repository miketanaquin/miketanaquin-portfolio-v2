"use client";
import { useEffect, useRef } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
    words,
    className,
    filter = true,
    duration = 0.3,
}: {
    words: string;
    className?: string;
    filter?: boolean;
    duration?: number;
}) => {
    const [scope, animate] = useAnimate();
    const sectionRef = useRef(null);

    let wordsArray = words.split(" ");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Trigger the animation when the section comes into view
                        animate(
                            "span",
                            {
                                opacity: 1,
                                filter: filter ? "blur(0px)" : "none",
                            },
                            {
                                duration: duration ? duration : 1,
                                delay: stagger(0.2),
                            }
                        );
                    } else {
                        // Reset the animation when the section goes out of view
                        animate(
                            "span",
                            {
                                opacity: 0,
                                filter: filter ? "blur(10px)" : "none",
                            },
                            {
                                duration: 0,
                            }
                        );
                    }
                });
            },
            { threshold: 0.5 } // Adjust the threshold as needed
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, [scope.current]);

    const renderWords = () => {
        return (
            <motion.div ref={scope}>
                {wordsArray.map((word, idx) => {
                    return (
                        <motion.span
                            key={word + idx}
                            className="dark:text-white text-black opacity-0"
                            style={{
                                filter: filter ? "blur(10px)" : "none",
                            }}
                        >
                            {word}{" "}
                        </motion.span>
                    );
                })}
            </motion.div>
        );
    };

    return (
        <div ref={sectionRef} className={cn("font-bold", className)}>
            <div className="mt-4">
                <div className="font-extralight text-lg md:text-2xl lg:text-3xl text-wrap dark:text-slate-300 my-3 md:text-md">
                    {renderWords()}
                </div>
            </div>
        </div>
    );
};
