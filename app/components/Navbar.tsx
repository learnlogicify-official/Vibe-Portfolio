"use client";

import { useState, useEffect } from "react";
import profileData from "@/src/data/profile.json";
import { motion } from "framer-motion";

export default function Navbar() {
  const { name } = profileData;
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const sections = ["hero", "about", "skills", "projects", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      setActiveSection(current || "");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "glass border-cyan-500/20 bg-[#151520]/80 backdrop-blur-md shadow-[0_0_20px_rgba(0,255,255,0.1)]"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-lg font-bold transition-all duration-300 hover:scale-105"
          >
            <span className="gradient-text">{name.split(" ")[0]}</span>
          </button>
          <div className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`relative text-sm font-medium transition-all duration-300 ${
                  activeSection === link.id
                    ? "text-cyan-300"
                    : "text-neutral-400 hover:text-cyan-400"
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500"
                    initial={false}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("contact")}
              className="rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(0,255,255,0.5)]"
            >
              Get In Touch
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-cyan-400"
            onClick={() => {
              // Mobile menu can be added later
              scrollToSection("contact");
            }}
          >
            Menu
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
