import React, { ReactNode } from 'react';

interface Props {
  id: string;
  children: ReactNode;
  className?: string;
}

const Section: React.FC<Props> = ({ children, id, className }) => {
  return (
    <section id={id} className={className}>
      {children}
    </section>
  );
};

export default Section;
