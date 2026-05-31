/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { GraduationCap, MapPin, Calendar, Compass, ShieldAlert } from "lucide-react";
import { portfolioData } from "../types";

export default function Timeline() {
  const education = portfolioData.education;
  const nss = portfolioData.extracurricular;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  const rightItemVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <section id="timeline" className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 z-10 relative">
        {/* Section Header */}
        <div className="flex flex-col items-start text-left mb-16">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-8 h-[1px] bg-brand-cyan animate-pulse"></span>
            <span className="font-mono text-brand-cyan text-xs font-semibold uppercase tracking-wider">
              04 // Chronological Records
            </span>
          </div>
          <h2 className="text-4xl font-sans font-extrabold tracking-tight text-white mb-2">
            Experience & Education Space
          </h2>
        </div>

        {/* Timeline Core Grid Structure */}
        <div className="relative">
          {/* Main animated vertical line down the middle/left */}
          <div className="absolute left-4 md:left-1/2 top-2 bottom-2 w-0.5 bg-gradient-to-b from-brand-cyan via-brand-purple to-brand-cyan opacity-30 transform md:-translate-x-1/2 animate-pulse" />

          {/* Section: Academic Timeline Items */}
          <motion.div
            className="space-y-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Education Item 1: NIT Rourkela */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
              {/* Left Column (Content Box) */}
              <motion.div
                variants={itemVariants}
                className="relative p-6 sm:p-7 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-xl overflow-hidden hover:border-brand-cyan/25 transition-all duration-300 md:text-right flex flex-col md:items-end offset-0"
              >
                <div className="flex md:flex-row-reverse items-center justify-between md:justify-start gap-2.5 mb-2 w-full">
                  <span className="p-2 rounded-xl bg-brand-cyan/15 text-brand-cyan border border-brand-cyan/20">
                    <GraduationCap size={16} />
                  </span>
                  <span className="font-mono text-[11px] font-bold text-brand-cyan border border-brand-cyan/25 bg-brand-cyan/5 px-2.5 py-1 rounded-full uppercase tracking-wider animate-pulse">
                    {education[0].period}
                  </span>
                </div>
                <h3 className="font-sans font-bold text-white text-lg tracking-tight mb-1">
                  {education[0].school}
                </h3>
                <span className="font-sans text-xs text-[#00f5ff] mb-3 block font-semibold">
                  {education[0].degree}
                </span>
                <p className="text-xs text-gray-400 leading-relaxed mb-4 font-sans md:max-w-md font-normal">
                  Active B.Tech student exploring electrical networks, machine principles, and algorithmic data structures, achieving core software concepts.
                </p>
                <div className="flex flex-wrap md:flex-row-reverse gap-3.5 text-[11px] font-mono font-medium text-gray-500">
                  <span className="flex items-center gap-1">
                    <MapPin size={11} className="text-brand-cyan" />
                    <span>{education[0].location}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <Compass size={11} className="text-brand-purple" />
                    <span>{education[0].details}</span>
                  </span>
                </div>
              </motion.div>

              {/* Central timeline bullet spacer */}
              <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-[#020205] border-2 border-brand-cyan flex items-center justify-center transform -translate-x-[14px] md:-translate-x-4 shadow-[0_0_10px_rgba(0,245,255,0.4)] z-10 animate-pulse">
                <div className="w-2.5 h-2.5 rounded-full bg-brand-cyan" />
              </div>

              {/* Right empty side on desktop to align layout Grid */}
              <div className="hidden md:block" />
            </div>

            {/* Experience Item: NSS Volunteering */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
              <div className="hidden md:block" />

              {/* Central timeline bullet spacer */}
              <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-[#020205] border-2 border-brand-purple flex items-center justify-center transform -translate-x-[14px] md:-translate-x-4 shadow-[0_0_10px_rgba(188,19,254,0.4)] z-10">
                <div className="w-2.5 h-2.5 rounded-full bg-brand-purple animate-pulse" />
              </div>

              {/* Right Column (Content Box) */}
              <motion.div
                variants={rightItemVariants}
                className="relative p-6 sm:p-7 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-xl overflow-hidden hover:border-brand-purple/25 transition-all duration-300 text-left flex flex-col items-start offset-0"
              >
                <div className="flex items-center justify-between gap-2.5 mb-2 w-full">
                  <span className="p-2 rounded-xl bg-brand-purple/15 text-brand-purple border border-brand-purple/20">
                    <Compass size={16} />
                  </span>
                  <span className="font-mono text-[11px] font-bold text-brand-purple border border-brand-purple/25 bg-brand-purple/5 px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {nss.period}
                  </span>
                </div>
                <h3 className="font-sans font-bold text-white text-lg tracking-tight mb-1">
                  {nss.activity}
                </h3>
                <span className="font-sans text-xs text-[#bc13fe] mb-3 block font-semibold">
                  {nss.role} — NIT Rourkela
                </span>
                <ul className="text-xs text-gray-400 leading-relaxed mb-4 font-sans space-y-1.5 list-disc pl-4 font-normal">
                  {nss.details.map((dtl, dIdx) => (
                    <li key={dIdx}>{dtl}</li>
                  ))}
                </ul>
                <div className="flex gap-3.5 text-[11px] font-mono font-medium text-gray-500">
                  <span className="flex items-center gap-1">
                    <MapPin size={11} className="text-brand-purple" />
                    <span>{nss.location}</span>
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Education Item 2: The Eminent Public School */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
              {/* Left Column (Content Box) */}
              <motion.div
                variants={itemVariants}
                className="relative p-6 sm:p-7 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-xl overflow-hidden hover:border-brand-cyan/25 transition-all duration-300 md:text-right flex flex-col md:items-end offset-0"
              >
                <div className="flex md:flex-row-reverse items-center justify-between md:justify-start gap-2.5 mb-2 w-full">
                  <span className="p-2 rounded-xl bg-brand-cyan/15 text-brand-cyan border border-brand-cyan/20">
                    <GraduationCap size={16} />
                  </span>
                  <span className="font-mono text-[11px] font-bold text-brand-cyan border border-brand-cyan/25 bg-brand-cyan/5 px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {education[1].period}
                  </span>
                </div>
                <h3 className="font-sans font-bold text-white text-lg tracking-tight mb-1">
                  {education[1].school}
                </h3>
                <span className="font-sans text-xs text-[#00f5ff] mb-3 block font-semibold">
                  {education[1].degree}
                </span>
                <p className="text-xs text-gray-400 leading-relaxed mb-4 font-sans md:max-w-md font-normal">
                  Intermediate high school curriculum majoring in Mathematics, Science and Physics, building strong logical problem solving blocks.
                </p>
                <div className="flex flex-wrap md:flex-row-reverse gap-3.5 text-[11px] font-mono font-medium text-gray-500">
                  <span className="flex items-center gap-1">
                    <MapPin size={11} className="text-brand-cyan" />
                    <span>{education[1].location}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <Compass size={11} className="text-brand-purple" />
                    <span>{education[1].details}</span>
                  </span>
                </div>
              </motion.div>

              {/* Central timeline bullet spacer */}
              <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-[#020205] border-2 border-brand-cyan flex items-center justify-center transform -translate-x-[14px] md:-translate-x-4 shadow-[0_0_10px_rgba(0,245,255,0.4)] z-10 animate-pulse">
                <div className="w-2.5 h-2.5 rounded-full bg-brand-cyan" />
              </div>

              <div className="hidden md:block" />
            </div>

            {/* Education Item 3: Varsana Model H.S. School */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
              <div className="hidden md:block" />

              {/* Central timeline bullet spacer */}
              <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-[#020205] border-2 border-brand-purple flex items-center justify-center transform -translate-x-[14px] md:-translate-x-4 shadow-[0_0_10px_rgba(188,19,254,0.4)] z-10">
                <div className="w-2.5 h-2.5 rounded-full bg-brand-purple animate-pulse" />
              </div>

              {/* Right Column (Content Box) */}
              <motion.div
                variants={rightItemVariants}
                className="relative p-6 sm:p-7 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-xl overflow-hidden hover:border-brand-purple/25 transition-all duration-300 text-left flex flex-col items-start offset-0"
              >
                <div className="flex items-center justify-between gap-2.5 mb-2 w-full">
                  <span className="p-2 rounded-xl bg-brand-purple/15 text-brand-purple border border-brand-purple/20">
                    <GraduationCap size={16} />
                  </span>
                  <span className="font-mono text-[11px] font-bold text-brand-purple border border-brand-purple/25 bg-brand-purple/5 px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {education[2].period}
                  </span>
                </div>
                <h3 className="font-sans font-bold text-white text-lg tracking-tight mb-1">
                  {education[2].school}
                </h3>
                <span className="font-sans text-xs text-[#bc13fe] mb-3 block font-semibold">
                  {education[2].degree}
                </span>
                <p className="text-xs text-gray-400 leading-relaxed mb-4 font-sans font-normal">
                  Secondary matriculation education. Graduated with merit and excellent academic status, ranking near top tier of the region.
                </p>
                <div className="flex gap-3.5 text-[11px] font-mono font-medium text-gray-500">
                  <span className="flex items-center gap-1">
                    <MapPin size={11} className="text-brand-purple" />
                    <span>{education[2].location}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <Compass size={11} className="text-brand-cyan" />
                    <span>{education[2].details}</span>
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
