"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaGlobe, FaCopy, FaCheck } from "react-icons/fa";
import profileData from "@/src/data/profile.json";

export default function Contact() {
  const { contact } = profileData;
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const copyEmail = async () => {
    if (contact.email && contact.email !== "<ADD_EMAIL>") {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send this to an API
    const mailtoLink = `mailto:${contact.email}?subject=Contact from Portfolio&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen bg-gradient-to-b from-[#151520] to-[#0a0a0f] py-20"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f2e_1px,transparent_1px),linear-gradient(to_bottom,#1f1f2e_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10" />

      <div ref={ref} className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold sm:text-5xl md:text-6xl">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <div className="mx-auto h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500" />
          <p className="mt-6 text-lg text-gray-300">
            Let's collaborate and build something amazing together.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass rounded-2xl border border-cyan-500/20 p-8 backdrop-blur-lg">
              <h3 className="mb-6 text-2xl font-semibold text-white">
                Let's Connect
              </h3>
              <p className="mb-8 text-gray-300">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision.
              </p>

              {/* Email */}
              {contact.email && contact.email !== "<ADD_EMAIL>" && (
                <div className="mb-6">
                  <label className="mb-2 block text-sm font-medium text-gray-400">
                    Email
                  </label>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 rounded-lg border border-cyan-500/30 bg-cyan-900/20 px-4 py-3 text-cyan-300">
                      {contact.email}
                    </div>
                    <button
                      onClick={copyEmail}
                      className="flex items-center gap-2 rounded-lg border border-cyan-500/50 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 px-4 py-3 text-cyan-400 transition-all hover:border-cyan-500 hover:bg-cyan-500/30"
                      aria-label="Copy email"
                    >
                      {copied ? (
                        <>
                          <FaCheck className="h-4 w-4" />
                          <span className="text-sm">Copied!</span>
                        </>
                      ) : (
                        <>
                          <FaCopy className="h-4 w-4" />
                          <span className="text-sm">Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}

              {/* Social Links */}
              <div>
                <label className="mb-4 block text-sm font-medium text-gray-400">
                  Connect With Me
                </label>
                <div className="flex flex-wrap gap-4">
                  {contact.github && contact.github !== "<ADD_GITHUB>" && (
                    <a
                      href={contact.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2 rounded-lg border border-purple-500/30 bg-purple-900/20 px-4 py-3 text-purple-300 transition-all hover:border-purple-500 hover:bg-purple-500/20 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]"
                    >
                      <FaGithub className="h-5 w-5" />
                      <span>GitHub</span>
                    </a>
                  )}
                  {contact.linkedin && contact.linkedin !== "<ADD_LINKEDIN>" && (
                    <a
                      href={contact.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2 rounded-lg border border-cyan-500/30 bg-cyan-900/20 px-4 py-3 text-cyan-300 transition-all hover:border-cyan-500 hover:bg-cyan-500/20 hover:shadow-[0_0_20px_rgba(0,255,255,0.3)]"
                    >
                      <FaLinkedin className="h-5 w-5" />
                      <span>LinkedIn</span>
                    </a>
                  )}
                  {contact.website && (
                    <a
                      href={contact.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2 rounded-lg border border-pink-500/30 bg-pink-900/20 px-4 py-3 text-pink-300 transition-all hover:border-pink-500 hover:bg-pink-500/20 hover:shadow-[0_0_20px_rgba(236,72,153,0.3)]"
                    >
                      <FaGlobe className="h-5 w-5" />
                      <span>Website</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form
              onSubmit={handleSubmit}
              className="glass rounded-2xl border border-purple-500/20 p-8 backdrop-blur-lg"
            >
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="w-full rounded-lg border border-cyan-500/30 bg-cyan-900/20 px-4 py-3 text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                  placeholder="Your Name"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="w-full rounded-lg border border-cyan-500/30 bg-cyan-900/20 px-4 py-3 text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={6}
                  className="w-full rounded-lg border border-cyan-500/30 bg-cyan-900/20 px-4 py-3 text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 px-6 py-3 text-lg font-semibold text-white transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(0,255,255,0.5)]"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

