"use client"
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-sm dark:bg-gray-900/80 dark:border-gray-800 transition-colors duration-300"
    >
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
          Divyanshu J.
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={link.href}
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-500 dark:hover:text-blue-300 transition-all"
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
          
          {/* Theme Toggle Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle theme"
            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            onClick={toggleTheme}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={theme}
                initial={{ opacity: 0, rotate: -180 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 180 }}
                transition={{ duration: 0.3 }}
              >
                {mounted && (theme === 'dark' ? (
                  <SunIcon className="h-5 w-5" />
                ) : (
                  <MoonIcon className="h-5 w-5" />
                ))}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle theme"
            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            onClick={toggleTheme}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={theme}
                initial={{ opacity: 0, rotate: -180 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 180 }}
                transition={{ duration: 0.3 }}
              >
                {mounted && (theme === 'dark' ? (
                  <SunIcon className="h-5 w-5" />
                ) : (
                  <MoonIcon className="h-5 w-5" />
                ))}
              </motion.div>
            </AnimatePresence>
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={isOpen ? 'close' : 'open'}
                initial={{ opacity: 0, rotate: -180 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 180 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-800">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-blue-500 dark:hover:text-blue-300 transition-all"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
