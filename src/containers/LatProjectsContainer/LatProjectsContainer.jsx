import React from 'react';
import Grid from '../../components/Grid';
import Section from '../../components/Section';
import LatestProjects from '../../components/LatestProjects';

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

const LatProjectsContainer = () => (
  <Section>
    <Grid fluid relative>
      <LatestProjects projects={latestProjects} />
    </Grid>
  </Section>
);

export default LatProjectsContainer;
