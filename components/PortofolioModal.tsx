import styles from '../styles/PortofolioModal.module.scss';
import Image from 'next/image';
import { FaTimes, FaThumbsUp, FaArrowRight } from 'react-icons/fa';
import { useEffect, useRef, useCallback } from 'react';
import useOnClickOutside from '../hooks/ClickOutside';
const PortofolioModal = ({
  active,
  setActive,
  feature,
  title,
  description,
  projectLink,
  imageSource,
}) => {
  const modal = useRef();
  const escFunction = useCallback((event) => {
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
                  <span>Like This!</span>
                  <FaThumbsUp />
                </button>
                <button>
                  <span>View Project</span>
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

PortofolioModal.defaultProps = {
  feature: 'Feauture - Dev',
  title: 'App Design Development.',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate distinctio assumenda explicabo veniam temporibus eligendi. Consectetur adipisicing elit. Cupiditate distinctio assumenda. dolorum alias suscipit rerum maiores aliquam earum odit, nihil culpa quas iusto hic minus!',
  projectLink: 'https://www.google.com',
  imageSource: '/portfolio-02.jpg',
};

export default PortofolioModal;
