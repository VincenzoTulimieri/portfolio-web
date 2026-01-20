'use client';
import React, { useState } from 'react';
import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/VincenzoTulimieri",
    icon: <Github size={18} />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/vincenzo-tulimieri-79a798299/",
    icon: <Linkedin size={18} />,
  },
  {
    name: "Mail",
    href: "mailto:vincenzo22tulimieri@gmail.com",
    icon: <Mail size={18} />,
  },
];

export function Footer() {
  return (
    <footer id='contact' className="md:rounded-t-[60px] relative w-full border-t border-white/10 bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/5%),transparent)] px-6 py-12">
      <div className="bg-white/20 absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur-sm" />

      <div className="max-w-6xl mx-auto flex flex-col items-center gap-8 w-full text-center">
        <AnimatedContainer className="flex flex-col items-center space-y-6">
          <h2 className="text-2xl font-bold text-white">Connect with me</h2>
          <p className="text-neutral-400 -mt-4 text-sm">Follow my journey on social media</p>
          
          <SocialIcons />
          
          <p className="text-neutral-500 text-sm font-mono">
            © {new Date().getFullYear()} Vincenzo Tulimieri. Built with Next.js & Tailwind.
          </p>
        </AnimatedContainer>
      </div>
    </footer>
  );
}

function SocialIcons() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="relative flex items-center gap-1 px-2 py-2 rounded-2xl bg-neutral-900/50 border border-white/[0.08]">
      {socials.map((social, index) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center size-10 rounded-xl transition-colors duration-200"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          aria-label={social.name}
        >
          {/* Sfondo hover */}
          <span
            className={`absolute inset-1 rounded-lg bg-white/[0.08] transition-all duration-300 ease-out ${
              hoveredIndex === index ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
          />
          {/* Icona Lucide */}
          <span className={`relative z-10 transition-all duration-300 ease-out ${
            hoveredIndex === index ? "text-white scale-110" : "text-neutral-500"
          }`}>
            {social.icon}
          </span>
          {/* Tooltip */}
          <span className={`absolute -top-12 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-lg bg-white text-neutral-950 text-[11px] font-medium whitespace-nowrap transition-all duration-300 ease-out ${
            hoveredIndex === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
          }`}>
            {social.name}
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 size-2 rotate-45 bg-white" />
          </span>
        </a>
      ))}
    </div>
  );
}

function AnimatedContainer({ className, delay = 0.1, children }: { className?: string; delay?: number; children: ReactNode }) {
  const shouldReduceMotion = useReducedMotion();
  if (shouldReduceMotion) return <div className={className}>{children}</div>;

  return (
    <motion.div
      initial={{ filter: 'blur(4px)', y: 20, opacity: 0 }}
      whileInView={{ filter: 'blur(0px)', y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}