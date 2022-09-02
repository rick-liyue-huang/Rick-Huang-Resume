import { useAutoAnimate } from '@formkit/auto-animate/react';
import { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import styles from '../styles/Resume.module.scss';
import Section from './Section';

interface CardProps {
  title?: string;
  description?: string;
  institution?: string;
  grade?: string;
}

const CardComponent: React.FC<CardProps> = ({
  title,
  institution,
  grade,
  description,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <div className={styles.cardTitle}>
          <h4>{title}</h4>
          <span>{institution}</span>
        </div>
        {/* <div className={styles.grade}>
          <div className={styles.gradeContainer}>
            <span>{grade}</span>
          </div>
        </div> */}
      </div>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

CardComponent.defaultProps = {
  title: 'Personal Portfolio April Fools',
  institution: 'University of DVI (1997 - 2001)',
  grade: '4.30/5',
  description:
    'The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.',
};

const Resume = () => {
  const [ed, setEd] = useState(true);
  const [exp, setExp] = useState(false);
  const [parent] = useAutoAnimate<any>(/* optional config */);
  return (
    <Section id="resume">
      {/* <span className={styles.subtitle}>7+ YEARS OF EXPERIENCE</span> */}
      <h1 className={styles.title}>Resume</h1>
      <div className={styles.tabs}>
        <button
          className={ed ? styles.tabActive : undefined}
          onClick={() => {
            setEd(true);
            setExp(false);
          }}
        >
          <span>Education</span>
        </button>
        <button
          className={exp ? styles.tabActive : undefined}
          onClick={() => {
            setEd(false);
            setExp(true);
          }}
        >
          <span>Experience</span>
        </button>
      </div>
      <div className={styles.tree} ref={parent}>
        <Fade duration={1000} triggerOnce>
          {ed && (
            <div className={styles.education}>
              {/* <span className={styles.subtitle2}>2007-2010</span> */}
              <h2 className={styles.title2}>Education Quality</h2>
              <div className={styles.rows}>
                <div className={styles.cards}>
                  <CardComponent
                    title={'Master of Telecommunication'}
                    institution={'University of New South Wales'}
                    description={
                      'Major in telecommunication technology and network design, and completed all the courses with the Distinction scores.'
                    }
                  />
                  <CardComponent
                    title={'Master of Engineering'}
                    institution={'University of Adelaide'}
                    description={
                      'Major in Electronic and Telecommunication, and completed all the courses with the Distinction scores.'
                    }
                  />
                  <CardComponent
                    title={'Bachelor in Automation'}
                    institution={'Harbin Institute of Technology, (HIT), China'}
                    description={
                      'Major in Automation Design and Analysis, and specialising in the telecommunication network encryption.'
                    }
                  />
                </div>
                {/* <div className={styles.cards}>
                  <CardComponent />
                  <CardComponent />
                  <CardComponent />
                </div> */}
              </div>
            </div>
          )}
          <div className={styles.experience}>
            {exp && (
              <div className={styles.education}>
                {/* <span className={styles.subtitle2}>2007-2010</span> */}
                <h2 className={styles.title2}>Job Experience</h2>
                <div className={styles.rows}>
                  <div className={styles.cards}>
                    <CardComponent
                      title={'Full Stack Developer'}
                      institution={'WebberTech, (Melbourne, Australia)'}
                      description={
                        'Being a full-stack developer, I offer professional experience providing high-impact web solutions for diverse industry organizations. When facing the multiple tasks with time-critical need, I prefer for agile development with my team mates through effective communication. Completing weekly progress report and pretty coding style have required me to communicate efficiently and solve the problems quickly. Preferring for touching new relative techniques help me to widen my sight and deepen my professional knowledge.'
                      }
                    />
                    <CardComponent
                      title={'Front End developer'}
                      institution={'Haiyi Information Co., (Hefei, China)'}
                      description={
                        'Taking part in the front end views rendering; Dealing with the whole project with MVC infrastructure; Use the Kendo UI for jQuery framework to realize the multiple terminal layout and user interaction; Reconstruct the Kendo UI components to suite for projects needs; Reconstruct the partial project to Angular based one.'
                      }
                    />
                    <CardComponent
                      title={'Web Designer and Web Developer'}
                      institution={'24Quan Co.,(24quan.com)(Beijing, China)'}
                      description={
                        'Encapsulating the common UI components being compatible with the project needs; Design the Admin page used to interact with server MySQL database; Taking part in the whole infrastructure building; Involving in re-encapsulating some agile frameworks with smaller loading size.'
                      }
                    />
                  </div>
                  {/* <div className={styles.cards}>
                    <CardComponent
                      title={'The Personal Portfolio Mystery'}
                      institution={'Job at Rainbow-Themes (2008 - 2016)'}
                      description={
                        'Generate Lorem Ipsum which looks. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.'
                      }
                    />
                    <CardComponent
                      title={'The Personal Portfolio Mystery'}
                      institution={'Job at Rainbow-Themes (2008 - 2016)'}
                      description={
                        'Generate Lorem Ipsum which looks. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.'
                      }
                    />
                    <CardComponent
                      title={'The Personal Portfolio Mystery'}
                      institution={'Job at Rainbow-Themes (2008 - 2016)'}
                      description={
                        'Generate Lorem Ipsum which looks. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.'
                      }
                    />
                  </div> */}
                </div>
              </div>
            )}
          </div>
        </Fade>
      </div>
    </Section>
  );
};

export default Resume;
