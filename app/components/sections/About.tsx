"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import profileData from "@/src/data/profile.json";

export default function About() {
  const { bio, company } = profileData;
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
      id="about"
      className="relative min-h-screen bg-gradient-to-b from-[#0a0a0f] to-[#151520] py-20"
    >
      <div ref={ref} className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold sm:text-5xl md:text-6xl">
            <span className="gradient-text">About Me</span>
          </h2>
          <div className="mx-auto h-1 w-24 bg-gradient-to-r from-cyan-500 to-purple-500" />
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass rounded-2xl border border-cyan-500/20 p-8 backdrop-blur-lg"
          >
            <h3 className="mb-4 text-2xl font-semibold text-cyan-400">
              My Story
            </h3>
            <p className="text-lg leading-relaxed text-gray-300">{bio}</p>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20 px-4 py-2">
                <span className="text-sm font-medium text-cyan-300">
                  Software Engineer
                </span>
              </div>
              <div className="rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 px-4 py-2">
                <span className="text-sm font-medium text-purple-300">
                  EdTech Entrepreneur
                </span>
              </div>
              <div className="rounded-lg bg-gradient-to-r from-pink-500/20 to-cyan-500/20 px-4 py-2">
                <span className="text-sm font-medium text-pink-300">
                  Industry Trainer
                </span>
              </div>
            </div>
          </motion.div>

          {/* Company Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="group relative overflow-hidden rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-900/20 to-cyan-900/20 p-8 backdrop-blur-lg transition-all duration-300 hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            
            <div className="relative z-10">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-cyan-500">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {company.name}
                  </h3>
                  <p className="text-sm text-gray-400">{company.platform}</p>
                </div>
              </div>

              <p className="mb-6 text-lg leading-relaxed text-gray-300">
                {company.slogan}
              </p>

              <div className="flex items-center gap-2 text-cyan-400">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
                <a
                  href={profileData.contact.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium hover:underline"
                >
                  Visit Platform
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 rounded-2xl border border-cyan-500/20 bg-gradient-to-r from-cyan-900/20 to-purple-900/20 p-8 text-center backdrop-blur-lg"
        >
          <p className="text-xl font-medium text-gray-200">
            Bridging the gap between{" "}
            <span className="gradient-text font-bold">academia</span> and{" "}
            <span className="gradient-text font-bold">industry</span> through
            practical, industry-ready learning.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

