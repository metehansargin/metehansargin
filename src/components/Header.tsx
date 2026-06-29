"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const navItems = [
  { name: "Ana Sayfa", href: "/" },
  { name: "Projeler", href: "/projects" },
  { name: "Hakkımda", href: "/about" },
  { name: "İletişim", href: "/contact" },
];

export default function Header() {
  return (
    <header className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="text-2xl font-bold text-primary">
              MS
            </Link>
          </motion.div>
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex space-x-8"
          >
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </motion.ul>
        </div>
      </nav>
    </header>
  );
}
