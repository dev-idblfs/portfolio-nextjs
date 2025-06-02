'use client';
import { motion } from 'framer-motion';
import SkillBadge from '@/components/SkillBadge';

interface SkillsSectionProps {
  skills: Array<{
    id: string;
    name: string;
    category: string;
    icon?: string;
  }>;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  // Group skills by category
  const groupedSkills = skills.reduce((acc, skill) => {
    const category = skill.category || 'Others';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <section id="skills" className="py-16 md:py-24 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-blue-300"
        >
          Technical Skills
        </motion.h2>

        <div className="space-y-12">
          {Object.entries(groupedSkills).map(([category, skillList], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-gray-400">
                {category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {skillList.map((skill, index) => (
                  <SkillBadge key={skill.id} skill={skill} index={index} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
