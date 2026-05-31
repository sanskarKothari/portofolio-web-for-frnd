/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Github, ExternalLink, Code2, Folder, Sparkles, Filter } from "lucide-react";
import { portfolioData, Project } from "../types";

export default function Projects() {
  const allProjects = portfolioData.projects;
  const [activeFilter, setActiveFilter] = useState<"All" | "Full-Stack" | "Security">("All");

  const filteredProjects = allProjects.filter((p) => {
    if (activeFilter === "All") return true;
    return p.category === activeFilter;
  });

  const categories: ("All" | "Full-Stack" | "Security")[] = ["All", "Full-Stack", "Security"];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const projectVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } },
    exit: { opacity: 0, scale: 0.95, y: 15, transition: { duration: 0.2 } },
  };

  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 z-10 relative">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div className="flex flex-col items-start text-left">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-8 h-[1px] bg-brand-cyan animate-pulse"></span>
              <span className="font-mono text-brand-cyan text-xs font-semibold uppercase tracking-wider">
                03 // Creative Forge
              </span>
            </div>
            <h2 className="text-4xl font-sans font-extrabold tracking-tight text-white mb-2">
              Selected Projects
            </h2>
          </div>

          {/* Interactive Filters Panel */}
          <div className="flex flex-wrap items-center gap-2 bg-white/5 border border-white/10 rounded-2xl p-1.5 backdrop-blur-md self-start md:self-auto">
            <div className="flex items-center gap-1.5 px-2.5 text-gray-500 font-mono text-[10px] uppercase font-bold">
              <Filter size={11} className="text-brand-cyan" />
              <span>Filter</span>
            </div>
            {categories.map((cat) => {
              const isActive = activeFilter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-4 py-1.5 rounded-xl text-xs font-semibold uppercase font-sans tracking-wide transition-all cursor-pointer ${
                    isActive
                      ? "bg-gradient-to-r from-brand-cyan to-brand-purple text-black shadow-md shadow-brand-cyan/20 font-extrabold border-none"
                      : "border border-transparent text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                variants={projectVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="group relative h-full flex flex-col rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden hover:border-brand-cyan/40 transition-all duration-300 shadow-xl [transform-style:preserve-3d]"
              >
                {/* Neon Background Glow for hovered project */}
                <div className="absolute inset-x-0 -bottom-16 h-32 bg-gradient-to-t from-brand-cyan/15 via-brand-purple/5 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Cover/Top Accent */}
                <div className="h-1.5 w-full bg-gradient-to-r from-brand-purple to-brand-cyan animate-pulse" />

                {/* Card Content body */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col [transform:translateZ(10px)]">
                  {/* Category and static tag */}
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-mono text-[10px] font-bold text-brand-cyan border border-brand-cyan/25 bg-brand-cyan/5 px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {project.category}
                    </span>
                    <span className="font-mono text-gray-500 text-[10px] font-medium uppercase tracking-wide">
                      {project.period}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-sans font-bold text-white text-lg tracking-tight mb-3 group-hover:text-brand-cyan transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Bullet Bullet Descriptions */}
                  <ul className="space-y-2.5 text-xs text-gray-400 font-sans leading-relaxed flex-1 mb-6">
                    {project.description.map((desc, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-1.5">
                        <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full mt-1.5 shrink-0" />
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack Tags cloud */}
                  <div className="flex flex-wrap gap-1.5 my-4">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md border border-white/5 bg-white/5 text-[10px] text-gray-300 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Divider line */}
                  <div className="border-t border-white/5 pt-5 flex items-center justify-between mt-auto">
                    {/* Left icon code flag */}
                    <div className="flex items-center gap-1.5 text-gray-500 text-xs font-mono font-semibold">
                      <Code2 size={13} className="text-brand-purple" />
                      <span>Codebase</span>
                    </div>

                    {/* Links row */}
                    <div className="flex items-center gap-3">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg border border-white/10 bg-white/5 text-gray-400 hover:text-white hover:border-brand-purple/40 hover:bg-brand-purple/10 transition-all duration-300 shadow-md"
                        title="View GitHub Repository"
                      >
                        <Github size={15} />
                      </a>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg border border-white/10 bg-white/5 text-gray-400 hover:text-white hover:border-brand-cyan/40 hover:bg-brand-cyan/10 transition-all duration-300 shadow-md"
                        title="Open Live Website Demo"
                      >
                        <ExternalLink size={15} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Git Banner Footer CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex gap-2 items-center bg-white/5 border border-white/10 rounded-2xl px-5 py-3 backdrop-blur-md">
            <span className="text-xs text-gray-400 font-sans">See more systems and contributions on my profile</span>
            <a
              href="https://github.com/Sona"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs font-extrabold text-brand-cyan hover:text-[#00f5ff] underline flex items-center gap-1.5"
            >
              <Github size={13} />
              <span>@Sona</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
