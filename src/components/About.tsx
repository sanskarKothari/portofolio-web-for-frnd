/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { GraduationCap, MapPin, Calendar, Award, BookOpen, Layers } from "lucide-react";
import { portfolioData } from "../types";

export default function About() {
  const { name, dob, college, branch, bio } = portfolioData.personalInfo;
  const coursework = portfolioData.coursework;
  const education = portfolioData.education;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 z-10 relative">
        {/* Section Header */}
        <div className="flex flex-col items-start text-left mb-16">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-8 h-[1px] bg-brand-cyan animate-pulse"></span>
            <span className="font-mono text-brand-cyan text-xs font-semibold uppercase tracking-wider">
              01 // Story Mode
            </span>
          </div>
          <h2 className="text-4xl font-sans font-extrabold tracking-tight text-white mb-2">
            About Me
          </h2>
        </div>

        {/* Content Structure */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Glass Bio Board */}
          <motion.div
            className="lg:col-span-7 flex flex-col gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div
              variants={cardVariants}
              className="relative p-6 sm:p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-xl overflow-hidden group hover:border-brand-cyan/30 transition-all duration-300"
            >
              {/* Card Hover Border Glow Accent */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-purple/10 via-brand-cyan/0 to-brand-cyan/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <h3 className="font-sans font-bold text-lg sm:text-xl text-white mb-4 flex items-center gap-2">
                <span className="text-[#00f5ff] font-mono">&lt;</span> Bio / Overview{" "}
                <span className="text-[#00f5ff] font-mono">/&gt;</span>
              </h3>
              <p className="text-gray-300 font-sans text-sm sm:text-base leading-relaxed mb-6">
                {bio}
              </p>

              {/* Personal Quick Info Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-3.5 rounded-xl border border-white/5 bg-white/0 font-sans text-xs">
                  <div className="p-2 rounded-lg bg-brand-purple/15 text-[#bc13fe]">
                    <Calendar size={15} />
                  </div>
                  <div>
                    <div className="text-gray-500 font-mono text-[10px] uppercase">DOB</div>
                    <div className="text-white font-medium">{dob}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-xl border border-white/5 bg-white/0 font-sans text-xs">
                  <div className="p-2 rounded-lg bg-brand-cyan/15 text-[#00f5ff]">
                    <MapPin size={15} />
                  </div>
                  <div>
                    <div className="text-gray-500 font-mono text-[10px] uppercase">Hometown</div>
                    <div className="text-white font-medium">Vidisha, MP</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-xl border border-white/5 bg-white/0 font-sans text-xs">
                  <div className="p-2 rounded-lg bg-brand-purple/15 text-[#bc13fe]">
                    <GraduationCap size={15} />
                  </div>
                  <div>
                    <div className="text-gray-500 font-mono text-[10px] uppercase">College</div>
                    <div className="text-white font-medium">NIT Rourkela</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-xl border border-white/5 bg-white/0 font-sans text-xs">
                  <div className="p-2 rounded-lg bg-brand-cyan/15 text-[#00f5ff]">
                    <Layers size={15} />
                  </div>
                  <div>
                    <div className="text-gray-500 font-mono text-[10px] uppercase">Major</div>
                    <div className="text-white font-medium">Electrical Eng.</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Coursework Card */}
            <motion.div
              variants={cardVariants}
              className="relative p-6 sm:p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-xl overflow-hidden group hover:border-brand-cyan/20 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-cyan/5 via-transparent to-brand-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <h3 className="font-sans font-bold text-lg sm:text-xl text-white mb-4 flex items-center gap-2">
                <BookOpen size={18} className="text-[#00f5ff]" />
                <span>Relevant Coursework</span>
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {coursework.map((course, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 rounded-xl border border-white/5 bg-white/5 text-gray-300 font-sans text-xs hover:border-brand-cyan/30 hover:text-[#00f5ff] transition-colors duration-300 cursor-default"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Academic & Scholar timelines / highlights */}
          <motion.div
            className="lg:col-span-5 flex flex-col gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Quick Metrics Cards (Bento-style layout) */}
            <motion.div
              variants={cardVariants}
              className="relative p-6 sm:p-8 rounded-2xl border border-white/10 bg-gradient-to-tr from-brand-purple/10 to-transparent backdrop-blur-md shadow-xl overflow-hidden group hover:border-[#bc13fe]/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-purple/10 rounded-full blur-2xl group-hover:bg-brand-purple/20 transition-all duration-500 pointer-events-none" />
              
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 rounded-xl bg-brand-purple/10 text-brand-purple border border-brand-purple/20 shadow-md">
                  <GraduationCap size={22} />
                </div>
                <span className="font-mono text-[#bc13fe] text-xs font-semibold border border-brand-purple/30 bg-brand-purple/5 px-2.5 py-1 rounded-full">
                  Academic Standout
                </span>
              </div>

              <div>
                <span className="font-mono text-gray-500 text-xs block uppercase mb-1">
                  National Institute of Technology
                </span>
                <h4 className="font-sans font-bold text-white text-xl sm:text-2xl tracking-tight mb-2">
                  NIT Rourkela
                </h4>
                <p className="text-gray-400 font-sans text-xs leading-relaxed mb-4 font-normal">
                  Pursuing Electrical Engineering (2023 - 2027) with deep involvement in computing, software architecture, and algorithms coursework.
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-sans font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#00f5ff] to-[#bc13fe]">
                    6.35
                  </span>
                  <span className="font-mono text-gray-500 text-xs uppercase font-medium">B.Tech CGPA</span>
                </div>
              </div>
            </motion.div>

            {/* Scholar Badges Card */}
            <motion.div
              variants={cardVariants}
              className="relative p-6 sm:p-8 rounded-2xl border border-white/10 bg-gradient-to-bl from-brand-cyan/5 to-transparent backdrop-blur-md shadow-xl overflow-hidden group hover:border-brand-cyan/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-cyan/10 rounded-full blur-2xl group-hover:bg-brand-cyan/20 transition-all duration-500 pointer-events-none" />

              <div className="flex justify-between items-start mb-4">
                <div className="p-3 rounded-xl bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20 shadow-md">
                  <Award size={22} />
                </div>
                <span className="font-mono text-brand-cyan text-xs font-semibold border border-[#00f5ff]/30 bg-[#00f5ff]/5 px-2.5 py-1 rounded-full">
                  National Recognition
                </span>
              </div>

              <div>
                <span className="font-mono text-gray-500 text-xs block uppercase mb-1">
                  Merit & Scholarship
                </span>
                <h4 className="font-sans font-bold text-white text-xl tracking-tight mb-3">
                  Scholarships Conferred
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-2 text-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan mt-1.5 shrink-0" />
                    <div>
                      <strong className="text-white">Medhavi Scholar</strong>
                      <p className="text-gray-400">Awarded for high-merit academic standards pursuing higher education.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 text-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-purple mt-1.5 shrink-0" />
                    <div>
                      <strong className="text-white">FFE Scholar</strong>
                      <p className="text-gray-400">Awarded Foundation for Academic Excellence Scholarship (national engineering honor).</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
