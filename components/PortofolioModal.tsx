import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect, useRef } from 'react';
import { FaArrowRight, FaTimes } from 'react-icons/fa';
import useOnClickOutside from '../hooks/ClickOutside';
import styles from '../styles/PortofolioModal.module.scss';

interface Props {
  active: boolean;
  setActive: (arg: boolean) => void;
  feature: string;
  title: string;
  description: string;
  projectLink: string;
  imageSource: string;
  onlineLink: string;
}
const PortofolioModal: React.FC<Props> = ({
  active,
  setActive,
  feature,
  title,
  description,
  projectLink,
  imageSource,
  onlineLink,
}) => {
  const modal = useRef<any>();
  const escFunction = useCallback((event: any) => {
    if (event.key === 'Escape') {
      setActive(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', escFunction, false);
    return () => {
      document.removeEventListener('keydown', escFunction, false);
    };
  }, [modal]);
  useOnClickOutside(modal, () => setActive(false));
  return (
    <div className={styles.container}>
      {/* BACKGROUND */}
      <div className={styles.overflow}>
        <div className={styles.inner} ref={modal}>
          {/* CLOSE BUTTON */}
          <div className={styles.close}>
            <div
              className={styles.svgContainer}
              onClick={() => setActive(false)}
            >
              <FaTimes />
            </div>
          </div>
          {/* CONTENT */}
          <div className={styles.content}>
            {/* IMAGE */}
            <div className={styles.imageContainer}>
              <div className={styles.inner}>
                <Image
                  src={imageSource}
                  width="100%"
                  height="100%"
                  objectFit="cover"
                  layout="responsive"
                  alt=""
                />
              </div>
            </div>
            {/* INFORMATION */}
            <div className={styles.info}>
              <span className={styles.feature}>{feature}</span>
              <span className={styles.title}>{title}</span>
              <p className={styles.description}>{description}</p>
              <div className={styles.actions}>
                <button>
                  <Link href={`${onlineLink}`}>
                    <span>Visit Project</span>
                  </Link>
                  <FaArrowRight />
                </button>
                <button>
                  <Link href={`${projectLink}`}>
                    <span>View Project Structure</span>
                  </Link>
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// PortofolioModal.defaultProps = {
//   feature: 'Feauture - Dev',
//   title: 'App Design Development.',
//   description:
//     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate distinctio assumenda explicabo veniam temporibus eligendi. Consectetur adipisicing elit. Cupiditate distinctio assumenda. dolorum alias suscipit rerum maiores aliquam earum odit, nihil culpa quas iusto hic minus!',
//   projectLink: 'https://www.google.com',
//   imageSource: '/portfolio-02.jpg',
// };

export default PortofolioModal;
