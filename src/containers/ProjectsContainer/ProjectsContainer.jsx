import React from 'react';
import { H2 } from '../../components/Headings';
import Paragraph from '../../components/Paragraph';

const ProjectsContainer = ({ match }) => (
  <div>
    <H2>{match.params.catId}</H2>
    <Paragraph>HEYO</Paragraph>
  </div>
);

export default ProjectsContainer;
