import HeroSection from '../container/HeroSection';
import AboutSection from '../container/AboutSection';
import SkillsSection from '../container/SkillsSection';
import ExperienceSection from '../container/ExperienceSection';
import ProjectsSection from '../container/ProjectsSection';
import ContactSection from '../container/ContactSection';
import portfolioData from '@/data/portfolioData.json';

export default function Home() {
  return (
    <>
      <HeroSection profile={portfolioData.profile} />
      <AboutSection profile={portfolioData.profile} />
      <SkillsSection skills={portfolioData.skills} />
      <ExperienceSection experience={portfolioData.experience} />
      <ProjectsSection projects={portfolioData.projects} />
      <ContactSection profile={portfolioData.profile} />
    </>
  );
}
