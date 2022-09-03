import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';
import styles from '../styles/Intro.module.scss';
import Section from './Section';

const Intro: React.FC = () => {
  return (
    <Section id="">
      <div className={styles.container}>
        {/* LEFT */}
        <div className={styles.text}>
          <span className={styles.welcome}>Welcome to my page</span>
          <span className={styles.name}>
            <span>
              <span>Hi,</span>
              <span className={styles.name_color}>{` I'm Rick Huang`}</span>
            </span>
            <span>a FullStack Developer</span>
          </span>
          <p className={styles.description}>
            Being a full-stack developer, I offer professional experience with
            high-impact web solutions for diverse industry organizations. When
            facing the multiple tasks with time-critical need, I prefer for
            agile development with my team mates through effective
            communication. Completing weekly progress report and pretty coding
            style have required me to communicate efficiently and solve the
            problems quickly. Preferring for touching new relative techniques
            help me to widen my sight and deepen my professional knowledge.
          </p>
          {/* SOCIALS */}
          <div className={styles.icons}>
            <div className={styles.socials}>
              <span>Find Me</span>
              <ul>
                <li>
                  <a
                    href="https://github.com/rick-liyue-huang"
                    target={'_blank'}
                    rel={'noreferrer'}
                  >
                    <FaGithub />
                  </a>
                </li>
                {/* <li>
                  <a
                    href="https://www.instagram.com/"
                    target={'_blank'}
                    rel={'noreferrer'}
                  >
                    <FaInstagram />
                  </a>
                </li> */}
                {/* <li>
                  <a
                    href="https://www.linkedin.com/"
                    target={'_blank'}
                    rel={'noreferrer'}
                  >
                    <FaLinkedinIn />
                  </a>
                </li> */}
              </ul>
            </div>
            <div className={styles.skills}>
              <span>Basic Info</span>
              <ul>
                <li>
                  <div
                    className={styles.skill}
                    style={{ color: 'white', width: '160px', fontSize: '10px' }}
                  >
                    Melbourne, Australia
                  </div>
                </li>
                <li>
                  <div
                    className={styles.skill}
                    style={{ color: 'white', width: '200px', fontSize: '10px' }}
                  >
                    rick.liyue.huang@gmail.com
                  </div>
                </li>

                <li>
                  <div
                    className={styles.skill}
                    style={{ color: 'white', width: '160px', fontSize: '10px' }}
                  >
                    0499 059 029
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* RIGHT */}
        <div className={styles.image}>
          <div className={styles.inner}>
            <Image
              src="/bg.jpg"
              width="100%"
              height="100%"
              layout="responsive"
              objectFit="cover"
              alt=""
              priority
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Intro;
