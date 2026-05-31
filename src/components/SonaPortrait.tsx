/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion } from "motion/react";
import { Sparkles, Terminal, Code, Heart, HelpCircle } from "lucide-react";

export default function SonaPortrait() {
  const imageSources = ["/sona_portrait.png.jpg", "/sona_portrait.png", "/sona_portrait.jpg"];
  const [imgIndex, setImgIndex] = useState(0);
  return (
    <div className="relative w-full max-w-[340px] md:max-w-none aspect-square mx-auto flex items-center justify-center">
      {/* Dynamic Aura Glow */}
      <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-pink-500 via-purple-600 to-cyan-400 opacity-40 blur-xl animate-pulse" />

      {/* Futuristic Frame rings */}
      <svg
        className="absolute w-full h-full pointer-events-none animate-[spin_40s_linear_infinite]"
        viewBox="0 0 400 400"
        id="portrait-deco-rings"
      >
        <circle
          cx="200"
          cy="200"
          r="190"
          fill="none"
          stroke="url(#neon-cyan)"
          strokeWidth="1.5"
          strokeDasharray="15 30"
          className="opacity-30"
        />
        <circle
          cx="200"
          cy="200"
          r="175"
          fill="none"
          stroke="url(#neon-pink)"
          strokeWidth="1"
          strokeDasharray="4 20"
          className="opacity-40"
        />
        <defs>
          <linearGradient id="neon-cyan" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
          <linearGradient id="neon-pink" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ec4899" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
      </svg>

      {/* Main Glassmorphic Photo Frame */}
      <motion.div
        className="relative w-[88%] h-[88%] rounded-full overflow-hidden border border-white/10 shadow-2xl bg-black/40 backdrop-blur-md flex items-center justify-center group pointer-events-auto cursor-pointer"
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
      >
        {/* Animated Cyber Dot Matrix Grid Background inside Avatar */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ec4899_1px,transparent_1px)] [background-size:16px_16px]" />

        {imgIndex < imageSources.length ? (
          <img
            src={imageSources[imgIndex]}
            onError={() => setImgIndex((prev) => prev + 1)}
            alt="Sona Ahirwar Portrait"
            className="w-full h-full object-cover z-10 transition-transform duration-500 group-hover:scale-105 rounded-full"
            referrerPolicy="no-referrer"
          />
        ) : (
          <svg
            viewBox="0 0 400 400"
            className="w-full h-full object-cover z-10 transition-transform duration-500 group-hover:scale-105"
            id="sona-svg-avatar"
          >
            {/* Avatar Background Circle Gradient */}
            <defs>
              <radialGradient id="avatar-bg" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#2e0249" />
                <stop offset="60%" stopColor="#120024" />
                <stop offset="100%" stopColor="#030014" />
              </radialGradient>
              <linearGradient id="skin" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffd8be" />
                <stop offset="100%" stopColor="#f5b8a1" />
              </linearGradient>
              <linearGradient id="glasses-frame" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ff4b91" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
              <linearGradient id="hair-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#2d1d18" />
                <stop offset="100%" stopColor="#0f0907" />
              </linearGradient>
              <linearGradient id="flower-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ff1493" />
                <stop offset="100%" stopColor="#ff85cc" />
              </linearGradient>
            </defs>

            {/* Background circle */}
            <circle cx="200" cy="200" r="185" fill="url(#avatar-bg)" />

            <g className="avatar-composition">
              {/* 1. Behind Hair Layer */}
              <path
                d="M 120,380 C 100,280 130,160 200,140 C 270,160 300,280 280,380 Z"
                fill="url(#hair-grad)"
              />
              {/* Wavy Hair background clumps */}
              <path
                d="M 100,220 C 70,260 60,330 80,390 C 95,300 110,240 120,220"
                fill="#0f0907"
              />
              <path
                d="M 300,220 C 330,260 340,330 320,390 C 305,300 290,240 280,220"
                fill="#0f0907"
              />

              {/* 2. Neck */}
              <path
                d="M 175,250 L 175,320 L 225,320 L 225,250 Z"
                fill="#e3a18a"
              />
              <path
                d="M 175,270 C 190,290 210,290 225,270 Z"
                fill="#cb8b75" // Neck shadow
              />

              {/* 3. Shoulders & White Shoulder-Strap Top (mirroring portrait photo) */}
              <path
                d="M 110,390 C 120,330 150,315 200,315 C 250,315 280,330 290,390 Z"
                fill="url(#hair-grad)" // shoulders covered by hair
              />
              {/* White strap top */}
              <path
                d="M 140,390 C 145,340 160,340 165,390"
                fill="#ffffff"
                stroke="#ffffff"
                strokeWidth="2"
              />
              <path
                d="M 235,390 C 240,340 255,340 260,390"
                fill="#ffffff"
                stroke="#ffffff"
                strokeWidth="2"
              />
              <path
                d="M 155,340 C 165,340 235,340 245,340 C 250,370 150,370 155,340 Z"
                fill="#ffffff"
              />

              {/* 4. Head / Face Shape */}
              <path
                d="M 140,190 C 140,115 260,115 260,190 C 260,250 200,285 200,285 C 200,285 140,250 140,190 Z"
                fill="url(#skin)"
              />

              {/* 5. Forehead Hair bangs */}
              <path
                d="M 140,165 C 160,120 200,120 220,140 C 240,120 260,140 270,175 C 255,145 220,135 200,150 C 180,135 150,145 140,165 Z"
                fill="url(#hair-grad)"
              />

              {/* 6. Pretty Smiling Mouth */}
              <path
                d="M 170,235 C 180,255 220,255 230,235 C 220,242 180,242 170,235 Z"
                fill="#ffffff" // happy white teeth
                stroke="#af1d38"
                strokeWidth="1.5"
              />
              {/* Dimples & smile corners */}
              <path
                d="M 166,233 C 167,235 170,235 171,234"
                stroke="#af1d38"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M 234,233 C 233,235 230,235 229,234"
                stroke="#af1d38"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
              />

              {/* Subtle nose */}
              <path
                d="M 197,205 C 197,215 203,215 203,205"
                fill="none"
                stroke="#cb8b75"
                strokeWidth="2"
                strokeLinecap="round"
              />

              {/* Eyes & Eyebrows */}
              {/* Left Eye */}
              <ellipse cx="178" cy="195" rx="7" ry="5" fill="#422213" />
              <ellipse cx="179" cy="194" rx="2" ry="2" fill="#ffffff" />
              <path
                d="M 170,188 C 175,183 182,183 186,188"
                fill="none"
                stroke="#0f0907"
                strokeWidth="2"
                strokeLinecap="round"
              />
              {/* Right Eye */}
              <ellipse cx="222" cy="195" rx="7" ry="5" fill="#422213" />
              <ellipse cx="223" cy="194" rx="2" ry="2" fill="#ffffff" />
              <path
                d="M 214,188 C 219,183 226,183 230,188"
                fill="none"
                stroke="#0f0907"
                strokeWidth="2"
                strokeLinecap="round"
              />

              {/* 7. Cute Pink Frame Glasses (Sona's signature!) */}
              <g className="spectacles">
                {/* Left Lens Frame */}
                <rect
                  x="156"
                  y="180"
                  width="34"
                  height="28"
                  rx="14"
                  fill="none"
                  stroke="url(#glasses-frame)"
                  strokeWidth="4"
                  className="drop-shadow-[0_0_4px_rgba(236,72,153,0.6)]"
                />
                {/* Right Lens Frame */}
                <rect
                  x="210"
                  y="180"
                  width="34"
                  height="28"
                  rx="14"
                  fill="none"
                  stroke="url(#glasses-frame)"
                  strokeWidth="4"
                  className="drop-shadow-[0_0_4px_rgba(236,72,153,0.6)]"
                />
                {/* Glasses Bridge */}
                <path
                  d="M 190,192 Q 200,186 210,192"
                  fill="none"
                  stroke="url(#glasses-frame)"
                  strokeWidth="4"
                />
                {/* Left Temple */}
                <path
                  d="M 156,192 Q 146,188 140,194"
                  fill="none"
                  stroke="url(#glasses-frame)"
                  strokeWidth="3"
                />
                {/* Right Temple */}
                <path
                  d="M 244,192 Q 254,188 260,194"
                  fill="none"
                  stroke="url(#glasses-frame)"
                  strokeWidth="3"
                />
                {/* Glass Lens Reflection */}
                <path
                  d="M 163,184 L 180,202"
                  stroke="rgba(255,255,255,0.4)"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M 217,184 L 234,202"
                  stroke="rgba(255,255,255,0.4)"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </g>

              {/* 8. Lush Wavy Hair Front Clumps framing the face */}
              <path
                d="M 140,160 C 130,200 120,250 125,320 C 130,270 148,220 152,180"
                fill="url(#hair-grad)"
              />
              <path
                d="M 260,160 C 270,200 280,250 275,320 C 270,270 252,220 248,180"
                fill="url(#hair-grad)"
              />
              {/* Long curly flow reaching lower bottom */}
              <path
                d="M 125,310 C 110,340 100,380 115,400 C 135,400 145,370 140,330"
                fill="url(#hair-grad)"
              />
              <path
                d="M 275,310 C 290,340 300,380 285,400 C 265,400 255,370 260,330"
                fill="url(#hair-grad)"
              />

              {/* 9. A Beautiful Pink Bougainvillea Flower in her Hair (Above Left ear) */}
              <g className="pink-flower" transform="translate(133, 142)">
                {/* Leaf background element */}
                <path
                  d="M -15,-5 C -25,-12 -25,-25 -10,-20 C -2,-17 -1,-7 -15,-5 Z"
                  fill="#22c55e"
                  opacity="0.8"
                />
                {/* Petal 1 */}
                <path
                  d="M 0,0 C -12,-15 -25,2 -12,12 C -2,22 10,12 0,0"
                  fill="url(#flower-grad)"
                  stroke="#ff1493"
                  strokeWidth="1"
                />
                {/* Petal 2 */}
                <path
                  d="M 0,0 C 15,-12 -2,-25 -12,-12 C -22,-2 0,15 0,0"
                  fill="url(#flower-grad)"
                  stroke="#ff1493"
                  strokeWidth="1"
                  transform="rotate(65)"
                />
                {/* Petal 3 */}
                <path
                  d="M 0,0 C -5,22 18,18 15,2 C 12,-10 -8,-10 0,0"
                  fill="url(#flower-grad)"
                  stroke="#ff1493"
                  strokeWidth="1"
                  transform="rotate(-50)"
                />
                {/* Flower Center stamen */}
                <circle cx="0" cy="0" r="3" fill="#ffffff" />
                <circle cx="-1" cy="2" r="1.5" fill="#fef08a" />
                <circle cx="2" cy="-1" r="1.5" fill="#fef08a" />
              </g>
            </g>
          </svg>
        )}

        {/* Hover overlay stats/tech text orbiting */}
        <div className="absolute inset-0 bg-gradient-to-t from-purple-950/80 via-black/0 to-cyan-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 items-center text-center z-20">
          <motion.div
            initial={{ y: 15 }}
            whileHover={{ y: 0 }}
            className="flex flex-col items-center gap-1"
          >
            <div className="flex gap-1.5 items-center bg-cyan-500/10 border border-cyan-500/30 rounded-full px-3 py-0.5 text-[11px] font-mono text-cyan-400">
              <Terminal size={10} className="animate-pulse" />
              <span>NIT ROURKELA</span>
            </div>
            <span className="text-white text-md font-sans font-bold tracking-tight">Sona Ahirwar</span>
            <span className="text-purple-300 text-xs font-mono">B.Tech Electrical Eng.</span>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="absolute top-2 right-4 bg-purple-950/70 border border-purple-500/30 backdrop-blur-md px-3 py-1.5 rounded-xl flex items-center gap-1.5 text-purple-300 shadow-lg text-xs font-mono z-30"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      >
        <Sparkles size={13} className="text-pink-400" />
        <span>EE Undergrad</span>
      </motion.div>

      <motion.div
        className="absolute bottom-6 -left-2 bg-cyan-950/80 border border-cyan-500/30 backdrop-blur-md px-3 py-1.5 rounded-xl flex items-center gap-1.5 text-cyan-300 shadow-lg text-xs font-mono z-30"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
      >
        <Code size={13} className="text-cyan-400" />
        <span>React & Node</span>
      </motion.div>

      <motion.div
        className="absolute bottom-20 -right-4 bg-emerald-950/80 border border-emerald-500/30 backdrop-blur-md px-2.5 py-1 rounded-xl flex items-center gap-1 text-emerald-300 shadow-lg text-xs font-mono z-30"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 2 }}
      >
        <Heart size={11} className="text-rose-500 fill-rose-500 animate-heartbeat" />
        <span>LeetCode Solver</span>
      </motion.div>
    </div>
  );
}
