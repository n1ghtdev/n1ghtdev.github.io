import React from 'react';
import Grid from '../../components/Grid';
import Line from '../../components/Line';
import ProjectList from './ProjectList';
import MoreProjects from '../../components/MoreProjects';

const latestProjects = [
  {
    number: 1,
    title: 'Latest project #1',
    description: 'This is latest projects section made with React and HTML5 semantic tags.',
    imgSrc: 'https://via.placeholder.com/960',
    imgAlt: 'Something here',
  },
  {
    number: 2,
    title: 'Latest project #2',
    description: 'This is latest projects section made with React and HTML5 semantic tags.',
    imgSrc: 'https://via.placeholder.com/960',
    imgAlt: 'Something here',
  },
  {
    number: 3,
    title: 'Latest project #3',
    description: 'This is latest projects section made with React and HTML5 semantic tags.',
    imgSrc: 'https://via.placeholder.com/960',
    imgAlt: 'Something here',
  },
];
// should be stateless?, if there is no api for projects, then yes, it is stateless 
class ProjectSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <Grid relative>
        <Line vertical color="#dfdfdf" />
        <Line vertical color="#dfdfdf" align="right" />
        <Line vertical color="#dfdfdf" align="center" />
        <ProjectList projects={latestProjects} />
        <MoreProjects to="/projects">More projects</MoreProjects>
      </Grid>
    );
  }
}

export default ProjectSection;
