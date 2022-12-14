import { projectsData } from '../projectData';
import styles from '../styles/Portofolio.module.scss';
import PortofolioCard from './ProjectCard';
import Section from './Section';

const Project: React.FC = () => {
  return (
    <Section id="projects" className={styles.portofolio}>
      {/* SUBTITLE */}
      {/* <span className={styles.subtitle}>Visit my projects</span> */}

      {/* TITLE */}
      <h1 className={styles.title}>Projects</h1>

      {/* ALL CARDS */}
      <div className={styles.cards}>
        {projectsData.map((project) => (
          <PortofolioCard
            key={project.description}
            description={project.description}
            category={project.category}
            imageSource={project.imageSource}
            detail={project.detail}
            projectLink={project.projectLink}
            onlineLink={project.onlineLink}
          />
        ))}
      </div>
    </Section>
  );
};

export default Project;
