import Image from 'next/image';
import styles from '../styles/Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          width="100%"
          height="100%"
          objectFit="contain"
          src="/navbarlogo.jpeg"
        />
      </div>
      <p>&copy; 2022. Rick Huang</p>
    </footer>
  );
};

export default Footer;
