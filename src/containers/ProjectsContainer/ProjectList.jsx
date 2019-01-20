import React from 'react';
import PropTypes from 'prop-types';
import { H2 } from '../../components/Headings';
import filterByUrl from '../../utils/filterArrayByUrl';

const data = [
  {
    id: 0,
    title: 'asdasd',
    description: '',
    imgSrc: '',
    imgAlt: '',
    tools: [
      {
        id: 0,
        title: 'html/css',
      },
    ],
  },
  {
    id: 1,
    title: 'asdasd',
    description: '',
    imgSrc: '',
    imgAlt: '',
    tools: [
      {
        id: 0,
        title: 'html/css',
      },
      {
        id: 1,
        title: 'javascript',
      },
    ],
  },
  {
    id: 2,
    title: 'asdasd',
    description: '',
    imgSrc: '',
    imgAlt: '',
    tools: [
      {
        id: 0,
        title: 'backend',
      },
    ],
  },
  {
    id: 3,
    title: 'asdasd',
    description: '',
    imgSrc: '',
    imgAlt: '',
    tools: [
      {
        id: 1,
        title: 'javascript',
      },
    ],
  },
];

const ProjectList = ({ match }) => {
  const renderedProjects = filterByUrl(data, match.params.catId).map(proj => (
    <div>{proj.title}</div>
  ));

  return (
    <div>
      <H2>{match.params.catId}</H2>
      { renderedProjects }
    </div>
  );
};

ProjectList.propTypes = {
  match: PropTypes.object,
};

export default ProjectList;
