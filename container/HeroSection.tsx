"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDownIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

interface HeroSectionProps {
  profile: {
    name: string;
    title: string;
    tagline?: string;
    profileImage?: string;
  };
}

const HeroSection: React.FC<HeroSectionProps> = ({ profile }) => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const y = useTransform(scrollY, [0, 300], [0, 100]);

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: custom * 0.2,
        ease: [0.215, 0.61, 0.355, 1]
      }
    })
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center relative py-16 md:py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900" />
      <motion.div 
        style={{ opacity }}
        className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"
      />
      
      {/* Content */}
      <motion.div style={{ y }} className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {profile.profileImage && (
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            custom={0}
            className="mb-8"
          >
            <Image
              src={profile.profileImage}
              alt={profile.name}
              width={120}
              height={120}
              className="rounded-full border-4 border-blue-500/30 shadow-xl mx-auto"
            />
          </motion.div>
        )}

        <motion.h1 
          className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight"
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          Hello, I'm{' '}
          <motion.span 
            className="text-blue-400 inline-block"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.5, 
              delay: 0.4,
              type: "spring",
              stiffness: 200
            }}
          >
            {profile.name}
          </motion.span>
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-gray-300 mb-4"
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          {profile.title}
        </motion.p>

        {profile.tagline && (
          <motion.p 
            className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto"
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            custom={3}
          >
            {profile.tagline}
          </motion.p>
        )}
        
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          custom={4}
          className="space-x-4"
        >
          <motion.a
            href="#projects"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg text-lg shadow-lg transition-all duration-300 hover:shadow-blue-500/25"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgb(59 130 246 / 0.25)" }}
            whileTap={{ scale: 0.98 }}
          >
            View My Work
            <ArrowDownIcon className="w-5 h-5 ml-2" />
          </motion.a>
          <motion.a
            href="#contact"
            className="inline-flex items-center bg-transparent border-2 border-blue-500/30 hover:border-blue-500 text-blue-400 font-semibold py-3 px-8 rounded-lg text-lg transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Contact Me
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ 
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <ArrowDownIcon className="w-6 h-6 text-gray-400" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
