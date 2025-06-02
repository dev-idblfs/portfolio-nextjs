'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

interface FooterProps {
  profile: {
    name: string;
    linkedin: string;
    github: string;
    email: string;
  };
}

const Footer: React.FC<FooterProps> = ({ profile }) => {
  const socialLinks = [
    { href: profile.github, icon: FaGithub, label: 'GitHub' },
    { href: profile.linkedin, icon: FaLinkedin, label: 'LinkedIn' },
    { href: `mailto:${profile.email}`, icon: FaEnvelope, label: 'Email' },
  ];

  return (
    <footer className="bg-gray-900/50 backdrop-blur-sm text-gray-400 py-8">
      <div className="container mx-auto px-6">
        <div className="flex justify-center space-x-8 mb-6">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
            >
              <link.icon size={24} />
              <span className="sr-only">{link.label}</span>
            </motion.a>
          ))}
        </div>
        <div className="text-center">
          <p className="mb-2">&copy; {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <p className="text-xs">
            Built with{' '}
            <Link href="https://nextjs.org" target="_blank" className="text-blue-400 hover:text-blue-300">
              Next.js
            </Link>
            {' '}&&nbsp;
            <Link href="https://tailwindcss.com" target="_blank" className="text-blue-400 hover:text-blue-300">
              Tailwind CSS
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
