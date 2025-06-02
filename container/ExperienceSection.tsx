'use client';
import { motion } from 'framer-motion';
import ExperienceItem from '@/components/ExperienceItem';

interface ExperienceSectionProps {
  experience: Array<{
    id: string;
    company: string;
    website?: string;
    role: string;
    period: string;
    responsibilities: string[];
    techStack: string[];
  }>;
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experience }) => {
  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-blue-300"
        >
          Work Experience
        </motion.h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {experience.map((exp, index) => (
            <ExperienceItem key={exp.id} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
