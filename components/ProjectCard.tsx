import { useAutoAnimate } from '@formkit/auto-animate/react';
import Image from 'next/image';
import { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import styles from '../styles/PortofolioCard.module.scss';
import ProjectModal from './ProjectModal';

interface Props {
  imageSource: string;
  category: string;
  description: string;
  // likes: number;
  detail: string;
  projectLink: string;
  onlineLink: string;
}

const ProjectCard: React.FC<Props> = ({
  imageSource,
  category,
  // likes,
  description,
  detail,
  projectLink,
  onlineLink,
}) => {
  const [active, setActive] = useState(false);
  const [parent] = useAutoAnimate<any>(/* optional config */);
  return (
    <div ref={parent}>
      {/* ANIMATION */}
      <Fade fraction={0.2} duration={500}>
        {/* CONTAINER */}
        <button className={styles.container} onClick={() => setActive(true)}>
          {/* IMAGE */}
          <div className={styles.imageContainer}>
            <Image
              src={imageSource}
              width="100%"
              height="100%"
              objectFit="cover"
              layout="responsive"
              alt=""
            />
          </div>
          {/* INFORMATION */}
          <div className={styles.info}>
            <span className={styles.category}>{category}</span>
            {/* <div className={styles.likes}>
              <FaHeart />
              <span>{likes}</span>
            </div> */}
          </div>
          <h2>{description}</h2>
        </button>
      </Fade>
      {/* MODAL */}
      {active && (
        <ProjectModal
          active={active}
          setActive={setActive}
          feature={category}
          imageSource={imageSource}
          title={description}
          description={detail}
          projectLink={projectLink}
          onlineLink={onlineLink}
        />
      )}
    </div>
  );
};

// PortofolioCard.defaultProps = {
//   imageSource: '/portfolio-01.jpg',
//   category: 'Development',
//   likes: 680,
//   description: 'Mobile App Page',
// };

export default ProjectCard;
