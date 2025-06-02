"use client";

import { motion } from 'framer-motion';
import ProjectCard from '@/components/ProjectCard';

interface ProjectsSectionProps {
  projects: Array<{
    id: string;
    title: string;
    description: string;
    techStack: string[];
    imageUrl: string;
    liveLink?: string;
    repoLink?: string;
  }>;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  return (
    <section id="projects" className="py-16 md:py-24 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-blue-300"
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
