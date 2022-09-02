import React from 'react';
import { FaBars } from 'react-icons/fa';
import styles from '../styles/Card.module.scss';

interface Props {
  icon?: any;
  title: string;
  description: string;
}

const Card: React.FC<Props> = ({ icon, description, title }) => {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.iconContainer}>{icon}</div>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
      </div>
    </div>
  );
};

Card.defaultProps = {
  icon: <FaBars />,
  description: 'Test Desc',
  title: 'Test Title',
};

export default Card;
