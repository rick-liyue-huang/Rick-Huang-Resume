import { JackInTheBox } from 'react-awesome-reveal';
import {
  FaAddressBook,
  FaCode,
  FaDashcube,
  FaFeather,
  FaTv,
  FaTwitch,
} from 'react-icons/fa';
import styles from '../styles/Features.module.scss';
import Card from './Card';
import Section from './Section';

const Features: React.FC = () => {
  return (
    <Section id="features">
      {/* <span className={styles.subtitle}>Features</span> */}
      <h1 className={styles.title} style={{ textAlign: 'center' }}>
        What I Do
      </h1>

      <div className={styles.cards}>
        <JackInTheBox cascade damping={0.05} triggerOnce>
          <Card
            icon={<FaTv />}
            title="Frontend Development"
            description="Building a beautiful and scalable WebApp using HTML,CSS, Javascript, React.js and Angular"
          />
          <Card
            icon={<FaDashcube />}
            title="Backend Development"
            description="Handling database including MySQL and MongoDB, server, api using Express and creating BFF (Backend for Frontend) layer using node.js"
          />
          <Card
            icon={<FaAddressBook />}
            title="API Development"
            description="Developing robust REST API and GraphQL API in MERN"
          />
          <Card
            icon={<FaCode />}
            title="Competitive Coder"
            description={
              'Loving to widen professional field by touching new professional technique and application'
            }
          />
          <Card
            icon={<FaFeather />}
            title="UI/UX designer"
            description={
              'Stunning user interface designer using Figma, MUI and Antd'
            }
          />
          <Card
            icon={<FaTwitch />}
            title="More things"
            description={
              'Keeping efficient communication with colleagues and clients, and recording weekly working processing reports and project conclusion as well as'
            }
          />
        </JackInTheBox>
      </div>
    </Section>
  );
};

export default Features;
