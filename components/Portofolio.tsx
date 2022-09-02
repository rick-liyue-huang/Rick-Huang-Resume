import styles from '../styles/Portofolio.module.scss';
import PortofolioCard from './PortofolioCard';
import Section from './Section';

const Portofolio: React.FC = () => {
  return (
    <Section id="projects" className={styles.portofolio}>
      {/* SUBTITLE */}
      {/* <span className={styles.subtitle}>Visit my projects</span> */}

      {/* TITLE */}
      <h1 className={styles.title}>Projects</h1>

      {/* ALL CARDS */}
      <div className={styles.cards}>
        <PortofolioCard imageSource={'/portfolio-01.jpg'} />
        <PortofolioCard imageSource={'/portfolio-02.jpg'} />
        <PortofolioCard imageSource={'/portfolio-03.jpg'} />
        <PortofolioCard imageSource={'/portfolio-04.jpg'} />
        <PortofolioCard imageSource={'/portfolio-05.jpg'} />
        <PortofolioCard imageSource={'/portfolio-06.jpg'} />
      </div>
    </Section>
  );
};

export default Portofolio;
