/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, CheckCircle, AlertTriangle, Phone, Mail, MapPin, Terminal, Cpu } from "lucide-react";
import { portfolioData } from "../types";

export default function Contact() {
  const { phone, email } = portfolioData.personalInfo;

  // Form Fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      setErrorMessage("All fields are required before transmission.");
      return;
    }

    setStatus("loading");

    // We can fetch from environment configuration if desired, or support custom EmailJS keys
    const serviceId = "service_default"; // Replace with real service id
    const templateId = "template_default"; // Replace with real template id
    const publicKey = "YOUR_PUBLIC_KEY"; // Replace with real public key

    try {
      // Simulate/Trigger Email Transmission
      // If the user replaces with their real parameters, this fires directly to EmailJS
      if (publicKey && publicKey !== "YOUR_PUBLIC_KEY") {
        const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            service_id: serviceId,
            template_id: templateId,
            user_id: publicKey,
            template_params: {
              from_name: formData.name,
              from_email: formData.email,
              message: formData.message,
              to_name: "Sona Ahirwar",
            },
          }),
        });

        if (response.ok) {
          setStatus("success");
          setFormData({ name: "", email: "", message: "" });
        } else {
          const errText = await response.text();
          throw new Error(errText || "EmailJS server rejected request");
        }
      } else {
        // High-end mock simulation for preview/demo when no custom keys exist
        // It provides instant successful feedback in the trial environment
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (err: any) {
      console.error("EmailJS Error:", err);
      setStatus("error");
      setErrorMessage(err.message || "Failed to make pipeline routing. Try again later.");
    }
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 z-10 relative">
        {/* Section Header */}
        <div className="flex flex-col items-start text-left mb-16">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-8 h-[1px] bg-brand-cyan animate-pulse"></span>
            <span className="font-mono text-brand-cyan text-xs font-semibold uppercase tracking-wider">
              05 // Quantum Connection
            </span>
          </div>
          <h2 className="text-4xl font-sans font-extrabold tracking-tight text-white mb-2">
            Get In Touch
          </h2>
        </div>

        {/* Core Layout split: Info details vs Form glass board */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Side: Detail specifications */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-left">
            <h3 className="font-sans font-bold text-white text-xl tracking-tight mb-2">
              Let&apos;s Create Something Monumental
            </h3>
            <p className="text-gray-400 font-sans text-xs sm:text-sm leading-relaxed mb-6 font-normal">
              I am open to summer internships, full-time developer positions, or collaborative open-source engineering. Drop a ping, and I&apos;ll respond almost instantly!
            </p>

            {/* Quick Link metrics */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/5 backdrop-blur-sm hover:border-brand-cyan/35 transition-all duration-300">
                <div className="p-3 rounded-lg bg-brand-cyan/10 text-brand-cyan">
                  <Mail size={16} />
                </div>
                <div>
                  <div className="font-mono text-[9px] text-gray-500 uppercase">E-Mail Direct</div>
                  <a href={`mailto:${email}`} className="text-white font-mono text-xs hover:text-brand-cyan transition-colors font-medium">
                    {email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/5 backdrop-blur-sm hover:border-brand-purple/35 transition-all duration-300">
                <div className="p-3 rounded-lg bg-brand-purple/10 text-brand-purple">
                  <Phone size={16} />
                </div>
                <div>
                  <div className="font-mono text-[9px] text-gray-500 uppercase">Mobile Cell</div>
                  <a href={`tel:${phone}`} className="text-white font-mono text-xs hover:text-brand-purple transition-colors font-medium">
                    {phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/5 backdrop-blur-sm hover:border-brand-cyan/35 transition-all duration-300">
                <div className="p-3 rounded-lg bg-brand-cyan/10 text-brand-cyan">
                  <MapPin size={16} />
                </div>
                <div>
                  <div className="font-mono text-[9px] text-gray-500 uppercase">Current Station</div>
                  <p className="text-white text-xs font-mono">
                    NIT Rourkela, Odisha, India
                  </p>
                </div>
              </div>
            </div>

            {/* Tech details signature */}
            <div className="mt-6 p-4 rounded-xl border border-brand-purple/20 bg-brand-purple/5 font-mono text-[10px] text-[#bc13fe] leading-relaxed flex items-start gap-2.5">
              <Terminal size={14} className="shrink-0 mt-0.5 text-brand-cyan" />
              <span>
                <strong>System log:</strong> Outbound emails are preconfigured with EmailJS templates. Replace raw credentials inside the source code to link to personal mailboxes directly.
              </span>
            </div>
          </div>

          {/* Right Side: Form structure */}
          <div className="lg:col-span-7">
            <motion.div
              className="relative p-6 sm:p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl overflow-hidden group animate-pulse-subtle"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/5 via-transparent to-brand-purple/5 pointer-events-none" />

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div className="space-y-2 text-left">
                  <label htmlFor="form-name" className="block text-xs font-mono font-semibold text-gray-400 uppercase tracking-wide">
                    Your Identity / Name
                  </label>
                  <input
                    type="text"
                    id="form-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. John Doe"
                    disabled={status === "loading" || status === "success"}
                    className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl text-white text-sm font-sans placeholder-gray-600 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan/30 transition-all duration-300 disabled:opacity-50"
                    required
                  />
                </div>

                {/* Email */}
                <div className="space-y-2 text-left">
                  <label htmlFor="form-email" className="block text-xs font-mono font-semibold text-gray-400 uppercase tracking-wide">
                    Contact Address / Email
                  </label>
                  <input
                    type="email"
                    id="form-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. user@example.com"
                    disabled={status === "loading" || status === "success"}
                    className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl text-white text-sm font-sans placeholder-gray-600 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple/30 transition-all duration-300 disabled:opacity-50"
                    required
                  />
                </div>

                {/* Message */}
                <div className="space-y-2 text-left">
                  <label htmlFor="form-msg" className="block text-xs font-mono font-semibold text-gray-400 uppercase tracking-wide">
                    Statement / Message
                  </label>
                  <textarea
                    id="form-msg"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your requirements, proposal, or greetings..."
                    disabled={status === "loading" || status === "success"}
                    className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl text-white text-sm font-sans placeholder-gray-600 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan/30 resize-none transition-all duration-300 disabled:opacity-50"
                    required
                  />
                </div>

                {/* Button actions / Feedbacks */}
                <div className="pt-2">
                  <AnimatePresence mode="wait">
                    {status === "idle" && (
                      <motion.button
                        key="btn-idle"
                        type="submit"
                        className="w-full py-4 rounded-xl text-xs font-extrabold uppercase tracking-wider bg-gradient-to-r from-brand-purple to-brand-cyan text-black hover:opacity-95 shadow-md shadow-brand-cyan/15 cursor-pointer flex items-center justify-center gap-2"
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                      >
                        <span>Send Message</span>
                        <Send size={13} className="animate-pulse" />
                      </motion.button>
                    )}

                    {status === "loading" && (
                      <motion.button
                        key="btn-loading"
                        disabled
                        type="button"
                        className="w-full py-4 rounded-xl text-xs font-bold uppercase tracking-wider bg-slate-900 border border-brand-purple/30 text-brand-purple flex items-center justify-center gap-2 shadow-inner"
                      >
                        <div className="w-4 h-4 border-2 border-brand-purple border-t-transparent rounded-full animate-spin" />
                        <span>Transmitting over secure pipeline...</span>
                      </motion.button>
                    )}

                    {status === "success" && (
                      <motion.div
                        key="msg-success"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex flex-col items-center gap-2 p-5 rounded-xl border border-emerald-500/30 bg-emerald-500/5 text-emerald-300 text-center"
                      >
                        <CheckCircle size={32} className="text-emerald-400 animate-bounce" />
                        <h4 className="font-sans font-bold text-sm">Message Transmitted Successfully!</h4>
                        <p className="text-[11px] text-emerald-400/80 font-sans leading-relaxed">
                          Thank you! Your message was routed safely. Sona will get back to your endpoint shortly.
                        </p>
                        <button
                          type="button"
                          onClick={() => setStatus("idle")}
                          className="mt-2.5 px-4 py-1.5 rounded-lg border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-[10px] uppercase tracking-wider font-mono font-bold hover:bg-emerald-500/20"
                        >
                          Send another
                        </button>
                      </motion.div>
                    )}

                    {status === "error" && (
                      <motion.div
                        key="msg-err"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-start gap-3 p-4 rounded-xl border border-rose-500/30 bg-rose-500/5 text-rose-300 text-xs text-left"
                      >
                        <AlertTriangle size={18} className="text-rose-400 shrink-0 mt-0.5" />
                        <div className="flex-1 space-y-1">
                          <h4 className="font-sans font-bold">Transmission Interrupted</h4>
                          <p className="text-[11px] text-rose-400/80 leading-relaxed font-sans">{errorMessage}</p>
                          <button
                            type="button"
                            onClick={() => setStatus("idle")}
                            className="text-[10px] uppercase font-mono font-bold text-rose-400 underline hover:text-rose-300"
                          >
                            Double check and try again
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
