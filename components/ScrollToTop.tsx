import { useAutoAnimate } from '@formkit/auto-animate/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import styles from '../styles/ScrollToTop.module.scss';

const ScrollToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [parent] = useAutoAnimate<any>();
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={parent}>
      {visible && (
        <Link href="#">
          <a className={styles.container}>
            <div className={styles.inner}>
              <FaArrowUp />
            </div>
          </a>
        </Link>
      )}
    </div>
  );
};

export default ScrollToTop;
