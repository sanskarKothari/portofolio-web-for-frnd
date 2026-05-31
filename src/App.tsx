/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Github, Linkedin, Code, Mail, ChevronUp } from "lucide-react";
import { portfolioData } from "./types";
import ThreeBackground from "./components/ThreeBackground";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { github, linkedin, leetcode, email } = portfolioData.personalInfo;

  // Scrollspy logic using IntersectionObserver
  useEffect(() => {
    const sections = ["home", "about", "skills", "projects", "timeline", "contact"];
    
    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -40% 0px", // Focus central screen coverage
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    // Offset header height (~80px)
    const offset = 80;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
    setActiveSection(id);
  };

  return (
    <div className="relative min-h-screen bg-[#020205] text-white selection:bg-[#00f5ff]/30 selection:text-white font-sans overflow-x-hidden antialiased">
      
      {/* Immersive interactive background layer */}
      <ThreeBackground />

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Floating Glass Navigation Header */}
        <Header activeSection={activeSection} scrollToSection={scrollToSection} />

        {/* Outer Section Pages wrapper */}
        <main className="flex-grow">
          {/* Hero Intro view */}
          <Hero scrollToSection={scrollToSection} />

          {/* Separation Divider gradient border line */}
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />

          {/* Story mode section */}
          <About />

          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />

          {/* Matrix specs stack section */}
          <Skills />

          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />

          {/* Card portfolio filter modules */}
          <Projects />

          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />

          {/* Vertical chronology list */}
          <Timeline />

          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />

          {/* Email JS contact form */}
          <Contact />
        </main>

        {/* Elegant Footer with tech tags, credentials and copyright */}
        <footer className="py-8 bg-black/60 border-t border-white/5 backdrop-blur-md text-center text-xs font-mono text-gray-500 mt-auto">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex gap-1.5 items-center">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Deployed & Active on Cloud Secure Infrastructure</span>
            </div>
            
            <div className="text-gray-400 font-sans font-medium">
              Made with 💖 by <span className="hover:text-brand-cyan transition-colors uppercase font-bold text-xs">{portfolioData.personalInfo.name}</span> &copy; 2026
            </div>

            <div className="flex gap-4">
              <a href={github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" title="GitHub">GitHub</a>
              <a href={linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" title="LinkedIn">LinkedIn</a>
              <a href={leetcode} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" title="LeetCode">LeetCode</a>
            </div>
          </div>
        </footer>
      </div>

      {/* FIXED LEFT SIDEBAR: Social Connections Rail (Luxurious Desktop Accent) */}
      <div className="fixed bottom-0 left-8 z-40 hidden xl:flex flex-col items-center gap-6" id="social-sidebar-rail">
        <div className="flex flex-col gap-5 bg-white/5 border border-white/10 px-2 py-4 rounded-full backdrop-blur-md shadow-2xl">
          <motion.a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-[#00f5ff]/10 hover:border-[#00f5ff]/20 border border-transparent transition-all"
            whileHover={{ scale: 1.15, y: -2 }}
            title="GitHub Portfolio"
          >
            <Github size={16} />
          </motion.a>
          
          <motion.a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-[#bc13fe]/10 hover:border-[#bc13fe]/20 border border-transparent transition-all"
            whileHover={{ scale: 1.15, y: -2 }}
            title="LinkedIn Profile"
          >
            <Linkedin size={16} />
          </motion.a>

          <motion.a
            href={leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-[#00f5ff]/10 hover:border-[#00f5ff]/20 border border-transparent transition-all"
            whileHover={{ scale: 1.15, y: -2 }}
            title="LeetCode Profile"
          >
            <Code size={16} />
          </motion.a>
        </div>
        <div className="w-0.5 h-24 bg-gradient-to-b from-brand-purple to-transparent opacity-40" />
      </div>

      {/* FIXED RIGHT SIDEBAR: Email connection Rail (Luxurious Desktop Accent) */}
      <div className="fixed bottom-0 right-8 z-40 hidden xl:flex flex-col items-center gap-6" id="email-sidebar-rail">
        <div className="bg-white/5 border border-white/10 px-2.5 py-6 rounded-full backdrop-blur-md shadow-2xl [writing-mode:vertical-rl] flex items-center justify-center">
          <motion.a
            href={`mailto:${email}`}
            className="font-mono text-[10px] tracking-widest text-gray-400 hover:text-brand-cyan transition-colors uppercase font-bold py-2"
            whileHover={{ scale: 1.05, y: -2 }}
            title="Email Direct"
          >
            {email}
          </motion.a>
        </div>
        <div className="w-0.5 h-24 bg-gradient-to-b from-brand-cyan to-transparent opacity-40" />
      </div>

      {/* BACK TO TOP FLOATING BUTTON */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-8 right-8 z-50 p-3 rounded-xl border border-white/10 bg-black/60 text-brand-cyan hover:text-white hover:border-brand-cyan/40 hover:bg-brand-cyan/10 transition-all duration-300 backdrop-blur-md shadow-2xl cursor-pointer"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            whileHover={{ y: -3 }}
            title="Back to top"
          >
            <ChevronUp size={16} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
