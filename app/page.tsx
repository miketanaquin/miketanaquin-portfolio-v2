"use client";
import Footer from "@/components/footer";
import About from "./about/page";
import Home from "./home/page";
import Projects from "./projects/page";
import Skills from "./skills/page";

export default function Page() {
  return (
    <>
      {/* <main > */}
      <Home />
      <Skills />
      <Projects />
      <About />
      <Footer />
      {/* </main> */}
    </>
  );
}
