"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Header from "@/components/Header";

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/metehansargin", label: "GitHub" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/metehansargin/", label: "LinkedIn" },
  { icon: FaEnvelope, href: "mailto:metehansarginn@gmail.com", label: "Email" },
];

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Metehan Sargın
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto font-medium"
          >
            Backend Developer
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center space-x-4 mb-12"
          >
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
              >
                <Icon className="w-6 h-6" />
                <span className="sr-only">{label}</span>
              </Link>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex justify-center space-x-4"
          >
            <Link
              href="/projects"
              className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Projelerimi Görüntüle
            </Link>
            <Link
              href="/contact"
              className="bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-white px-8 py-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              İletişime Geç
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
    </>
  );
}
