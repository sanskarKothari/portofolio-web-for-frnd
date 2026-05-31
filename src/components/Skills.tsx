/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Code, Cpu, Layout, Database, GitBranch, Terminal, Paintbrush, ShieldAlert } from "lucide-react";
import { portfolioData } from "../types";

export default function Skills() {
  const categories = portfolioData.skills;

  // Helper to map icon name to Lucide icons
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "Code":
        return <Code size={16} />;
      case "Cpu":
        return <Cpu size={16} />;
      case "Layout":
        return <Layout size={16} />;
      case "Database":
        return <Database size={16} />;
      case "GitBranch":
        return <GitBranch size={16} />;
      case "Terminal":
        return <Terminal size={16} />;
      case "Paintbrush":
        return <Paintbrush size={16} />;
      case "ShieldAlert":
        return <ShieldAlert size={16} />;
      default:
        return <Code size={16} />;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 z-10 relative">
        {/* Section Header */}
        <div className="flex flex-col items-start text-left mb-16">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-8 h-[1px] bg-brand-purple animate-pulse"></span>
            <span className="font-mono text-brand-purple text-xs font-semibold uppercase tracking-wider">
              02 // Technology Matrix
            </span>
          </div>
          <h2 className="text-4xl font-sans font-extrabold tracking-tight text-white mb-2">
            Technical Skills
          </h2>
        </div>

        {/* Categories Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="relative p-6 sm:p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-xl overflow-hidden group hover:border-[#00f5ff]/30 transition-all duration-300"
            >
              {/* Animated corner glow accent per card */}
              <div className="absolute -top-12 -right-12 w-28 h-28 bg-gradient-to-br from-[#00f5ff]/20 via-[#bc13fe]/10 to-transparent rounded-full blur-xl group-hover:scale-125 transition-transform duration-500 pointer-events-none" />

              <h3 className="font-sans font-bold text-lg text-white mb-6 flex items-center gap-2.5 border-b border-white/5 pb-4">
                <span className="p-1.5 rounded-lg bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/15">
                  <Terminal size={15} />
                </span>
                <span>{cat.category}</span>
              </h3>

              {/* Skills List with custom elegant progress sliders */}
              <div className="space-y-5">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-1.5">
                    <div className="flex justify-between items-center text-xs font-mono">
                      <div className="flex items-center gap-2 text-gray-200">
                        <span className="text-[#00f5ff]">{renderIcon(skill.iconName)}</span>
                        <span className="font-sans font-semibold tracking-wide">{skill.name}</span>
                      </div>
                      <span className="text-[#00f5ff] font-bold">{skill.level}%</span>
                    </div>

                    {/* Progress slider bar with custom dynamic thumb pointer */}
                    <div className="h-2 w-full bg-black/40 rounded-full overflow-hidden border border-white/5 relative">
                      <motion.div
                        className="h-full bg-gradient-to-r from-brand-purple to-brand-cyan rounded-full animate-pulse"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Extra glowing interactive tech badges marquee / cloud footer */}
        <div className="mt-16 text-center">
          <p className="font-mono text-gray-500 text-xs uppercase tracking-widest mb-4">
            Currently Mastering & Deploying
          </p>
          <div className="flex flex-wrap justify-center gap-2.5 max-w-2xl mx-auto">
            {["React Router 7", "Express APIs", "Data Structures", "EJS Templates", "MongoDB Schemes", "TOTP/MFA Standards", "C++ Algorithms"].map(
              (addSkill, addIdx) => (
                <span
                  key={addIdx}
                  className="px-3.5 py-1.5 rounded-full border border-brand-cyan/15 bg-brand-cyan/5 text-brand-cyan font-mono text-[11px] font-semibold tracking-wide hover:bg-brand-cyan/10 cursor-default transition-all duration-300 hover:scale-105"
                >
                  📍 {addSkill}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
