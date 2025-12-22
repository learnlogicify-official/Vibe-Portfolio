"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import {
  SiNextdotjs,
  SiReact,
  SiPostgresql,
  SiDocker,
} from "react-icons/si";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import profileData from "@/src/data/profile.json";
import { ReactElement } from "react";

const techIcons: { [key: string]: ReactElement } = {
  "Next.js": <SiNextdotjs className="h-5 w-5" />,
  React: <SiReact className="h-5 w-5" />,
  PostgreSQL: <SiPostgresql className="h-5 w-5" />,
  Docker: <SiDocker className="h-5 w-5" />,
};

// Get unique projects
const getUniqueProjects = () => {
  const seen = new Set<string>();
  return profileData.projects.filter((project) => {
    if (seen.has(project.title)) {
      return false;
    }
    seen.add(project.title);
    return true;
  });
};

export default function Projects() {
  const projects = getUniqueProjects();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="projects"
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
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <div className="mx-auto h-1 w-24 bg-gradient-to-r from-cyan-500 to-purple-500" />
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
                type: "spring",
                stiffness: 100,
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative"
            >
              <div className="relative h-full overflow-hidden rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-900/10 to-purple-900/10 backdrop-blur-lg transition-all duration-500 hover:border-cyan-500/50 hover:shadow-[0_0_40px_rgba(0,255,255,0.3)]">
                {/* 3D Transform Effect */}
                <motion.div
                  className="relative h-full p-6"
                  animate={{
                    rotateY: hoveredIndex === index ? 5 : 0,
                    rotateX: hoveredIndex === index ? -5 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  style={{
                    transformStyle: "preserve-3d",
                    perspective: "1000px",
                  }}
                >
                  {/* Project Image Placeholder */}
                  <div className="relative mb-4 aspect-video overflow-hidden rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-4xl font-bold text-white/20">
                        {project.title.charAt(0)}
                      </div>
                    </div>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-cyan-500/40 to-purple-500/40"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: hoveredIndex === index ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>

                  {/* Project Info */}
                  <div className="relative z-10">
                    <h3 className="mb-2 text-2xl font-bold text-white">
                      {project.title}
                    </h3>
                    <p className="mb-4 text-gray-300">{project.description}</p>

                    {/* Tech Stack */}
                    <div className="mb-6 flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <div
                          key={tech}
                          className="flex items-center gap-1 rounded-lg bg-cyan-500/20 px-3 py-1 text-sm text-cyan-300"
                        >
                          {techIcons[tech] || <span>•</span>}
                          <span>{tech}</span>
                        </div>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-4">
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/link flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 px-4 py-2 text-sm font-semibold text-white transition-all hover:scale-105 hover:shadow-lg"
                        >
                          <FaExternalLinkAlt className="h-4 w-4" />
                          <span>Live Demo</span>
                        </a>
                      )}
                      {project.github &&
                        project.github !== "<PRIVATE_REPO>" && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 rounded-lg border border-cyan-500/50 bg-transparent px-4 py-2 text-sm font-semibold text-cyan-400 transition-all hover:bg-cyan-500/10"
                          >
                            <FaGithub className="h-4 w-4" />
                            <span>Code</span>
                          </a>
                        )}
                    </div>
                  </div>

                  {/* Glow Effect */}
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-30" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="mb-6 text-lg text-gray-300">
            Want to see more of my work?
          </p>
          <a
            href={profileData.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full border-2 border-cyan-400/50 bg-transparent px-8 py-3 text-lg font-semibold text-cyan-400 transition-all hover:border-cyan-400 hover:bg-cyan-400/10 hover:shadow-[0_0_20px_rgba(0,255,255,0.3)]"
          >
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}

