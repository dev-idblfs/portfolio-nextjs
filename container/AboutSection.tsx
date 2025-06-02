'use client'
import { motion } from 'framer-motion';

interface AboutSectionProps {
  profile: {
    bio: string;
  };
}

const AboutSection: React.FC<AboutSectionProps> = ({ profile }) => {
  return (
    <section id="about" className="py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-6"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-blue-300">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-800/50 backdrop-blur-sm p-6 md:p-8 rounded-lg shadow-xl"
          >
            <p className="text-gray-300 leading-relaxed whitespace-pre-line text-lg">
              {profile.bio}
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
