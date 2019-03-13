import React from 'react';
import Grid from '../../components/Grid';
import Section from '../../components/Section';
import LatestProjects from '../../components/LatestProjects';
import ProjectContainer from './ProjectContainer';

const latestProjects = [
  {
    id: 1,
    title: 'Weather App',
    description: 'This is latest projects section made with React and HTML5 semantic tags.',
    imgSrc: 'https://i.imgur.com/FAmHLyz.jpg',
    imgAlt: 'Something here',
  },
  {
    id: 2,
    title: 'Project example',
    description: 'This is latest projects section made with React and HTML5 semantic tags.',
    imgSrc: 'https://via.placeholder.com/960',
    imgAlt: 'Something here',
  },
];

const LatestSection = () => (
  <Section>
    <Grid fluid relative>
      <LatestProjects>
        { latestProjects.map(item => (
          <ProjectContainer project={item} />
        )) }
      </LatestProjects>
    </Grid>
  </Section>
);

export default LatestSection;
