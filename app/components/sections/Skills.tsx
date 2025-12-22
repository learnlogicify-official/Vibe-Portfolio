"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
} from "react-icons/si";
import { FaCode, FaJava } from "react-icons/fa";
import profileData from "@/src/data/profile.json";
import { ReactElement } from "react";

const skillIcons: { [key: string]: ReactElement } = {
  "Data Structures & Algorithms": <FaCode className="h-8 w-8" />,
  Java: <FaJava className="h-8 w-8" />,
  JavaScript: <SiJavascript className="h-8 w-8" />,
  React: <SiReact className="h-8 w-8" />,
  "Next.js": <SiNextdotjs className="h-8 w-8" />,
  "Node.js": <SiNodedotjs className="h-8 w-8" />,
};

const getSkillColor = (index: number) => {
  const colors = [
    "from-cyan-500 to-blue-500",
    "from-purple-500 to-pink-500",
    "from-blue-500 to-cyan-500",
    "from-pink-500 to-purple-500",
    "from-cyan-500 to-purple-500",
    "from-purple-500 to-cyan-500",
  ];
  return colors[index % colors.length];
};

export default function Skills() {
  const { skills } = profileData;
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="skills"
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
            <span className="gradient-text">Skills & Technologies</span>
          </h2>
          <div className="mx-auto h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500" />
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-xl border border-cyan-500/20 bg-gradient-to-br from-cyan-900/20 to-purple-900/20 p-6 backdrop-blur-lg transition-all duration-300 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(0,255,255,0.3)]">
                {/* Animated Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${getSkillColor(index)} opacity-0 transition-opacity duration-300 group-hover:opacity-10`}
                />

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div
                    className={`mb-4 rounded-lg bg-gradient-to-br ${getSkillColor(index)} p-4 text-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
                  >
                    {skillIcons[skill] || <FaCode className="h-8 w-8" />}
                  </div>

                  <h3 className="text-xl font-semibold text-white">{skill}</h3>

                  {/* Animated Progress Bar */}
                  <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-gray-800">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${getSkillColor(index)}`}
                      initial={{ width: 0 }}
                      animate={inView ? { width: "85%" } : {}}
                      transition={{
                        duration: 1,
                        delay: index * 0.1 + 0.3,
                        ease: "easeOut",
                      }}
                    />
                  </div>
                </div>

                {/* Glow Effect */}
                <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-0 blur transition-opacity duration-300 group-hover:opacity-20" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 rounded-2xl border border-purple-500/20 bg-gradient-to-r from-purple-900/20 to-cyan-900/20 p-8 text-center backdrop-blur-lg"
        >
          <p className="text-lg text-gray-300">
            Continuously learning and adapting to{" "}
            <span className="gradient-text font-semibold">
              cutting-edge technologies
            </span>{" "}
            to build scalable and efficient solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

