/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Terminal, Cpu, Sparkles, Download } from "lucide-react";
import { portfolioData } from "../types";

interface HeaderProps {
  activeSection: string;
  scrollToSection: (id: string) => void;
}

export default function Header({ activeSection, scrollToSection }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Timeline", id: "timeline" },
    { label: "Contact", id: "contact" },
  ];

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "py-4 bg-[#020205]/70 border-b border-white/5 backdrop-blur-xl"
          : "py-6 bg-transparent"
      }`}
      id="portfolio-header"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => handleNavClick("home")}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#00f5ff] to-[#bc13fe] flex items-center justify-center text-black font-sans font-black text-sm shadow-[0_0_15px_rgba(0,245,255,0.4)]">
            S
          </div>
          <span className="font-sans font-bold tracking-tight text-white text-lg">
            Sona<span className="text-[#00f5ff] font-mono font-bold animate-pulse">_</span>
            <span className="text-gray-400 font-mono text-xs font-semibold uppercase tracking-wider ml-1">
              dev
            </span>
          </span>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-1 bg-white/5 border border-white/10 rounded-full px-2 py-1.5 backdrop-blur-md">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-colors uppercase duration-200 cursor-pointer ${
                  isActive ? "text-[#00f5ff] neon-text-cyan" : "text-gray-400 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#00f5ff]/10 to-[#bc13fe]/10 border border-[#00f5ff]/30 rounded-full"
                    layoutId="activeTabIndicator"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Action Button: Get In Touch */}
        <div className="hidden md:flex items-center gap-4">
          <motion.a
            href="/portfolio-source.zip"
            download="portfolio-source.zip"
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-medium uppercase tracking-wider border border-white/20 bg-white/5 text-gray-200 hover:text-white hover:bg-white/10 transition-all duration-300 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            title="Download full project source code as ZIP"
          >
            <Download size={12} />
            <span>Download ZIP</span>
          </motion.a>

          <motion.button
            onClick={() => handleNavClick("contact")}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-medium uppercase tracking-wider border border-brand-cyan/30 bg-brand-cyan/5 text-brand-cyan hover:bg-brand-cyan/10 transition-all duration-300 shadow-[0_0_15px_rgba(0,245,255,0.1)] cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan"></span>
            </span>
            <span>Get in touch</span>
          </motion.button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-gray-300 hover:text-white bg-white/5 border border-white/10 rounded-lg backdrop-blur-md transition-all cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-b border-white/10 bg-[#020205]/95 backdrop-blur-2xl overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-4">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl border text-sm font-medium uppercase tracking-wide cursor-pointer transition-all ${
                      isActive
                        ? "bg-gradient-to-r from-brand-cyan/10 to-brand-purple/10 border-brand-cyan/30 text-white"
                        : "bg-white/0 border-transparent text-gray-400 hover:text-white"
                    }`}
                  >
                    <span>{item.label}</span>
                    <Terminal size={14} className={isActive ? "text-brand-cyan animate-pulse" : "text-gray-600"} />
                  </button>
                );
              })}

              <a
                href="/portfolio-source.zip"
                download="portfolio-source.zip"
                className="w-full py-3.5 rounded-xl text-center text-xs font-bold uppercase tracking-wider border border-white/20 bg-white/5 text-gray-200 hover:text-white hover:bg-white/10 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Download size={14} className="text-brand-cyan" />
                <span>Download Source ZIP</span>
              </a>

              <button
                onClick={() => handleNavClick("contact")}
                className="mt-2 w-full py-3.5 rounded-xl text-center text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-brand-cyan via-brand-purple to-pink-500 text-black hover:opacity-90 shadow-lg cursor-pointer shadow-brand-cyan/20"
              >
                Let&apos;s Connect
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
