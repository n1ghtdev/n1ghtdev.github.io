import React from 'react';
import Img from 'gatsby-image';

import ProjectLinks from '@components/project-links';

import * as styles from './project.styles';

type ProjectProps = {
  title: string;
  img: any;
  description: string;
  github: string;
  external: string;
  tools: string[];
  date: string;
  className: string;
};

const Project = (props: ProjectProps) => {
  const {
    date,
    title,
    description,
    tools,
    github,
    external,
    img,
    className,
  } = props;

  const [open, setOpen] = React.useState(false);
  const [delayedOpen, setDelayedOpen] = React.useState(false);

  function handleHeaderClick() {
    if (!open) {
      setOpen(!open);
      setTimeout(() => {
        setDelayedOpen(!open);
      }, 0);
    } else {
      setDelayedOpen(!open);
      setTimeout(() => {
        setOpen(!open);
      }, 500);
    }
  }

  return (
    <styles.Wrapper className={className}>
      <styles.Header onClick={handleHeaderClick} tabIndex={-1}>
        <styles.Title>{title}</styles.Title>
        <ProjectLinks github={github} external={external} />
      </styles.Header>
      <styles.ProjectInnerContent open={delayedOpen}>
        {open ? (
          <>
            <styles.Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              numquam esse nobis rem, consectetur laborum fugiat modi ipsa
              expedita iste saepe ex, consequuntur quaerat quia! numquam esse
              nobis rem, consectetur laborum fugiat modi ipsa expedita iste
              saepe ex, consequuntur quaerat quia! numquam esse nobis rem,
              consectetur laborum fugiat modi ipsa expedita iste saepe ex,
              consequuntur quaerat quia! numquam esse nobis rem, consectetur
              laborum fugiat modi ipsa expedita iste saepe ex, consequuntur
              quaerat quia!
            </styles.Description>
            {img ? <Img fluid={img.childImageSharp.fluid} /> : null}
          </>
        ) : null}
      </styles.ProjectInnerContent>
    </styles.Wrapper>
  );
};

export default Project;
