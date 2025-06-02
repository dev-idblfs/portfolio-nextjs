import { motion } from 'framer-motion';
import { BriefcaseIcon, CalendarIcon } from '@heroicons/react/24/outline';

interface ExperienceItemProps {
  experience: {
    company: string;
    website?: string;
    role: string;
    period: string;
    responsibilities: string[];
    techStack: string[];
  };
  index: number;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ experience, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg shadow-lg mb-6 hover:bg-gray-800 transition-colors duration-300"
    >
      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-blue-400 flex items-center">
            <BriefcaseIcon className="h-5 w-5 mr-2" />
            {experience.role}
          </h3>
          <a
            href={experience.website ? `https://${experience.website}` : '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="text-md text-gray-400 hover:text-blue-300 transition-colors mt-1 block"
          >
            {experience.company}
          </a>
        </div>
        <p className="text-sm text-gray-500 flex items-center mt-2 md:mt-0">
          <CalendarIcon className="h-4 w-4 mr-1" />
          {experience.period}
        </p>
      </div>
      
      <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4 text-sm pl-4">
        {experience.responsibilities.map((resp, idx) => (
          <motion.li
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 + idx * 0.1 }}
          >
            {resp}
          </motion.li>
        ))}
      </ul>

      <div>
        <h4 className="text-xs font-semibold text-gray-500 uppercase mb-2">Tech Stack:</h4>
        <div className="flex flex-wrap gap-2">
          {experience.techStack.map((tech, idx) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 + idx * 0.05 }}
              className="bg-blue-600/20 text-blue-400 px-2 py-1 text-xs rounded-full"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceItem;
