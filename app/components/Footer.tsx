"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import profileData from "@/src/data/profile.json";
import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";

export default function Footer() {
  const { name, contact, company } = profileData;
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      icon: FaGithub,
      href: contact.github,
      condition: contact.github && contact.github !== "<ADD_GITHUB>",
      color: "hover:text-cyan-400",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      href: contact.linkedin,
      condition: contact.linkedin && contact.linkedin !== "<ADD_LINKEDIN>",
      color: "hover:text-blue-400",
    },
    {
      name: "Website",
      icon: FaGlobe,
      href: contact.website,
      condition: contact.website,
      color: "hover:text-purple-400",
    },
  ].filter((link) => link.condition !== false);

  return (
    <footer className="relative border-t border-cyan-500/20 bg-gradient-to-b from-[#151520] to-[#0a0a0f]">
      {/* Animated Gradient Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-pulse" />

      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="mb-4 text-xl font-bold">
              <span className="gradient-text">{name.split(" ")[0]}</span>
            </h3>
            <p className="text-sm text-neutral-400">
              {company.slogan}
            </p>
          </motion.div>

          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center md:text-left"
          >
            <h4 className="mb-4 font-semibold text-cyan-300">Company</h4>
            <p className="text-sm text-neutral-400">{company.name}</p>
            <p className="mt-2 text-sm text-neutral-500">{company.platform}</p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center md:text-right"
          >
            <h4 className="mb-4 font-semibold text-purple-300">Connect</h4>
            <div className="flex justify-center gap-4 md:justify-end">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center justify-center rounded-full border border-cyan-500/30 bg-neutral-900/50 p-3 text-neutral-400 transition-all duration-300 ${link.color} hover:border-cyan-500/50 hover:bg-cyan-500/10 hover:shadow-[0_0_15px_rgba(0,255,255,0.3)]`}
                    aria-label={link.name}
                  >
                    <Icon className="text-xl transition-transform group-hover:scale-110" />
                  </Link>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 border-t border-cyan-500/10 pt-8 text-center"
        >
          <p className="text-sm text-neutral-500">
            © {currentYear} {name}. All rights reserved.
          </p>
          <p className="mt-2 text-xs text-neutral-600">
            Built with Next.js, React, and Tailwind CSS
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
