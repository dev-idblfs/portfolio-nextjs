import { motion } from 'framer-motion';

interface SkillBadgeProps {
  skill: {
    name: string;
    category: string;
    icon?: string;
  };
  index: number;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="flex items-center bg-gray-700/50 backdrop-blur-sm text-gray-200 px-4 py-2 rounded-lg shadow-md hover:bg-gray-600 hover:scale-105 transition-all duration-300"
    >
      {/* We'll implement proper icons later */}
      <div className="w-2 h-2 rounded-full bg-blue-400 mr-2" />
      <span className="font-medium">{skill.name}</span>
    </motion.div>
  );
};

export default SkillBadge;
