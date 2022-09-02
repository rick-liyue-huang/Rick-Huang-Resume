import { useAutoAnimate } from '@formkit/auto-animate/react';
import { ReactNode, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { BiPulse, BiTime } from 'react-icons/bi';
import { FaArrowRight } from 'react-icons/fa';
import { MdDone } from 'react-icons/md';
import styles from '../styles/Pricing.module.scss';
import Section from './Section';

interface FeatureProps {
  children: ReactNode;
}

const Feature: React.FC<FeatureProps> = ({ children }) => {
  return (
    <div className={styles.feature}>
      <MdDone />
      <span>{children}</span>
    </div>
  );
};

const Pricing = () => {
  const [simple, setSimple] = useState(true);
  const [standard, setStandard] = useState(false);
  const [premium, setPremium] = useState(false);
  const [parent] = useAutoAnimate<any>(/* optional config */);
  return (
    <Section id="pricing" className={styles.pricing}>
      <div className={styles.sticky}>
        <span className={styles.subtitle}>Pricing</span>
        <h1 className={styles.title}>My Pricing</h1>
      </div>
      <div className={styles.table} ref={parent}>
        <Fade triggerOnce>
          {/* BUTTON OPTIONS */}
          <div className={styles.options}>
            <button
              className={simple ? styles.active : undefined}
              onClick={() => {
                setSimple(true);
                setStandard(false);
                setPremium(false);
              }}
            >
              Simple
            </button>
            <button
              className={standard ? styles.active : undefined}
              onClick={() => {
                setSimple(false);
                setStandard(true);
                setPremium(false);
              }}
            >
              Standard
            </button>
            <button
              className={premium ? styles.active : undefined}
              onClick={() => {
                setSimple(false);
                setStandard(false);
                setPremium(true);
              }}
            >
              Premium
            </button>
          </div>
          {simple && (
            <div className={styles.content}>
              {/* INFO */}
              <div className={styles.infoContainer}>
                <div className={styles.info}>
                  <h2>Make Your Single Page</h2>
                  <span>Elementor</span>
                </div>
                <div className={styles.price}>
                  <span>$30.00</span>
                </div>
              </div>
              {/* DESCRIPTION */}
              <p className={styles.description}>
                All the Lorem Ipsum generators on the Internet tend to repeat
                predefined chunks as necessary
              </p>
              {/* ALL FEATURES */}
              <div className={styles.features}>
                <div className={styles.col}>
                  <Feature>1 Page with Elementor</Feature>
                  <Feature>Design Customization</Feature>
                  <Feature>Responsive Design</Feature>
                  <Feature>Content Upload</Feature>
                  <Feature>2 Plugins/Extensions</Feature>
                  <Feature>Design Customization</Feature>
                </div>
                <div className={styles.col}>
                  <Feature>Multipage Elementor</Feature>
                  <Feature>Design Figma</Feature>
                  <Feature>Maintaine Design</Feature>
                  <Feature>Content Upload</Feature>
                  <Feature>Design With XD</Feature>
                  <Feature>8 Plugins/Extensions</Feature>
                </div>
              </div>
              {/* ACTION */}
              <div className={styles.action}>
                <button>
                  <a href="#contact">ORDER NOW</a>
                  <FaArrowRight />
                </button>
              </div>
              {/* EXTRAS */}
              <div className={styles.extras}>
                <div className={styles.extra}>
                  <BiTime />
                  <span>2 Days Delivery</span>
                </div>
                <div className={styles.extra}>
                  <BiPulse />
                  <span>Unlimited Revission</span>
                </div>
              </div>
            </div>
          )}
          {standard && (
            <div className={styles.content}>
              {/* INFO */}
              <div className={styles.infoContainer}>
                <div className={styles.info}>
                  <h2>Design Make this Page</h2>
                  <span>Elementor</span>
                </div>
                <div className={styles.price}>
                  <span>$50.00</span>
                </div>
              </div>
              {/* DESCRIPTION */}
              <p className={styles.description}>
                All the Lorem Ipsum generators on the Internet tend to repeat
                predefined chunks as necessary
              </p>
              {/* ALL FEATURES */}
              <div className={styles.features}>
                <div className={styles.col}>
                  <Feature>1 Page with Elementor</Feature>
                  <Feature>Design Customization</Feature>
                  <Feature>Responsive Design</Feature>
                  <Feature>Content Upload</Feature>
                  <Feature>2 Plugins/Extensions</Feature>
                  <Feature>Design Customization</Feature>
                </div>
                <div className={styles.col}>
                  <Feature>Multipage Elementor</Feature>
                  <Feature>Design Figma</Feature>
                  <Feature>Maintaine Design</Feature>
                  <Feature>Content Upload</Feature>
                  <Feature>Design With XD</Feature>
                  <Feature>8 Plugins/Extensions</Feature>
                </div>
              </div>
              {/* ACTION */}
              <div className={styles.action}>
                <button>
                  <a href="#contact">ORDER NOW</a>
                  <FaArrowRight />
                </button>
              </div>
              {/* EXTRAS */}
              <div className={styles.extras}>
                <div className={styles.extra}>
                  <BiTime />
                  <span>2 Days Delivery</span>
                </div>
                <div className={styles.extra}>
                  <BiPulse />
                  <span>Unlimited Revission</span>
                </div>
              </div>
            </div>
          )}
          {premium && (
            <div className={styles.content}>
              {/* INFO */}
              <div className={styles.infoContainer}>
                <div className={styles.info}>
                  <h2>Customize Your Single Page</h2>
                  <span>Elementor</span>
                </div>
                <div className={styles.price}>
                  <span>$90.00</span>
                </div>
              </div>
              {/* DESCRIPTION */}
              <p className={styles.description}>
                All the Lorem Ipsum generators on the Internet tend to repeat
                predefined chunks as necessary
              </p>
              {/* ALL FEATURES */}
              <div className={styles.features}>
                <div className={styles.col}>
                  <Feature>1 Page with Elementor</Feature>
                  <Feature>Design Customization</Feature>
                  <Feature>Responsive Design</Feature>
                  <Feature>Content Upload</Feature>
                  <Feature>2 Plugins/Extensions</Feature>
                  <Feature>Design Customization</Feature>
                </div>
                <div className={styles.col}>
                  <Feature>Multipage Elementor</Feature>
                  <Feature>Design Figma</Feature>
                  <Feature>Maintaine Design</Feature>
                  <Feature>Content Upload</Feature>
                  <Feature>Design With XD</Feature>
                  <Feature>8 Plugins/Extensions</Feature>
                </div>
              </div>
              {/* ACTION */}
              <div className={styles.action}>
                <button>
                  <a href="#contact">ORDER NOW</a>
                  <FaArrowRight />
                </button>
              </div>
              {/* EXTRAS */}
              <div className={styles.extras}>
                <div className={styles.extra}>
                  <BiTime />
                  <span>2 Days Delivery</span>
                </div>
                <div className={styles.extra}>
                  <BiPulse />
                  <span>Unlimited Revission</span>
                </div>
              </div>
            </div>
          )}
        </Fade>
      </div>
    </Section>
  );
};

export default Pricing;
