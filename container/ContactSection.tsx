"use client";

import { EnvelopeIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { Github, LinkedinIcon } from 'lucide-react';

interface ContactSectionProps {
  profile: {
    email: string;
    linkedin: string;
    github: string;
  };
}

const ContactSection: React.FC<ContactSectionProps> = ({ profile }) => {
  const contactMethods = [
    {
      icon: EnvelopeIcon,
      label: 'Email',
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
    {
      icon: LinkedinIcon,
      label: 'LinkedIn',
      value: 'Connect on LinkedIn',
      href: profile.linkedin,
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'View GitHub Profile',
      href: profile.github,
    },
  ];

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-blue-300">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.label}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col items-center p-6 bg-gray-800/50 backdrop-blur-sm rounded-lg hover:bg-gray-800 transition-all duration-300"
            >
              <method.icon className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors" />
              <h3 className="mt-4 text-lg font-semibold text-gray-200">
                {method.label}
              </h3>
              <p className="mt-2 text-gray-400 group-hover:text-gray-300 transition-colors">
                {method.value}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
