/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowDown, Github, Linkedin, Briefcase, FileText, ChevronRight, Mail, Code } from "lucide-react";
import { portfolioData } from "../types";
import SonaPortrait from "./SonaPortrait";

interface HeroProps {
  scrollToSection: (id: string) => void;
}

export default function Hero({ scrollToSection }: HeroProps) {
  const { name, bio, roles, github, linkedin, leetcode } = portfolioData.personalInfo;
  
  // Custom GSAP-style typewriter typing animation
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 100;
  const deletingSpeed = 60;
  const pauseDuration = 1800;

  useEffect(() => {
    let timer: number;
    const fullText = roles[roleIndex];

    const tick = () => {
      if (!isDeleting) {
        // Typing
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText.length + 1 === fullText.length) {
          // Pause and then delete
          timer = setTimeout(() => setIsDeleting(true), pauseDuration) as unknown as number;
          return;
        }
      } else {
        // Deleting
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }

      const speed = isDeleting ? deletingSpeed : typingSpeed;
      timer = setTimeout(tick, speed) as unknown as number;
    };

    timer = setTimeout(tick, typingSpeed) as unknown as number;
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex, roles]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 md:pt-24 md:pb-12 overflow-hidden"
    >
      <div className="absolute inset-0 bg-transparent pointer-events-none" />

      {/* Hero Content Grid */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-center z-10">
        {/* Left: Text & Info Column */}
        <motion.div
          className="md:col-span-7 flex flex-col items-start gap-4 text-left order-2 md:order-1"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Dynamic Hello Greeting Badge */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-cyan/5 border border-brand-cyan/25 text-[#00f5ff] neon-text-cyan font-mono text-xs font-semibold uppercase tracking-wider"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00f5ff] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00f5ff]"></span>
            </span>
            <span>Welcome to my universe</span>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-1">
            <span className="font-mono text-[#00f5ff] text-xs font-bold tracking-widest uppercase block mb-1">Hello, World! I am</span>
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-sans font-extrabold tracking-tighter text-white leading-[0.9] md:-ml-1">
              ENGINEERING<br/>
              <span className="bg-gradient-to-r from-[#00f5ff] to-[#bc13fe] bg-clip-text text-transparent">{name}</span>
            </h1>
          </motion.div>

          {/* GSAP Custom Typing Animation */}
          <motion.div variants={itemVariants} className="h-10 sm:h-12 flex items-center">
            <div className="font-mono text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-[#00f5ff] to-[#bc13fe] bg-clip-text text-transparent flex items-center gap-1.5">
              <span>&gt; {currentText}</span>
              <span className="w-2 h-6 bg-[#00f5ff] animate-blink" style={{ display: "inline-block" }} />
            </div>
          </motion.div>

          {/* Short Bio Description */}
          <motion.p
            variants={itemVariants}
            className="text-gray-400 font-sans text-sm sm:text-base leading-relaxed max-w-xl"
          >
            {bio}
          </motion.p>

          {/* Social Icons Row */}
          <motion.div variants={itemVariants} className="flex gap-4 py-2">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-white/10 bg-white/5 text-gray-400 hover:text-white hover:border-[#00f5ff]/50 hover:bg-[#00f5ff]/10 transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.2)]"
              aria-label="GitHub Profile"
            >
              <Github size={18} />
            </a>
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-white/10 bg-white/5 text-gray-400 hover:text-white hover:border-[#bc13fe]/50 hover:bg-[#bc13fe]/10 transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.2)]"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-white/10 bg-white/5 text-gray-400 hover:text-white hover:border-[#00f5ff]/30 hover:bg-[#00f5ff]/5 transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.2)]"
              aria-label="LeetCode Profile"
            >
              <Code size={18} />
            </a>
          </motion.div>

          {/* Action CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4">
            <button
              onClick={() => scrollToSection("projects")}
              className="group px-8 py-3.5 bg-[#00f5ff] text-black font-extrabold rounded-full text-xs tracking-widest hover:brightness-110 hover:shadow-[0_0_20px_rgba(0,245,255,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-[#00f5ff]/25"
            >
              <span>Explore Projects</span>
              <ChevronRight size={14} className="group-hover:translate-x-1.5 transition-transform duration-300" />
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-3.5 glass text-white font-extrabold rounded-full text-xs tracking-widest border border-white/20 hover:bg-white/10 active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Mail size={14} />
              <span>Contact Me</span>
            </button>
          </motion.div>
        </motion.div>

        {/* Right: Sona Portrait Showcase Column */}
        <motion.div
          className="md:col-span-5 flex items-center justify-center order-1 md:order-2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 80, damping: 15 }}
        >
          <SonaPortrait />
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-60 z-10 cursor-pointer"
        onClick={() => scrollToSection("about")}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: [0.3, 0.8, 0.3], y: 0 }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
      >
        <span className="text-[10px] uppercase tracking-widest font-mono text-gray-500">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ArrowDown size={14} className="text-[#00f5ff] neon-text-cyan font-bold" />
        </motion.div>
      </motion.div>
    </section>
  );
}
