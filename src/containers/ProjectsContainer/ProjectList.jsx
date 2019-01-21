import React from 'react';
import PropTypes from 'prop-types';
import filterByUrl from '../../utils/filterArrayByUrl';
import Projects from '../../components/Projects';
import Item from '../../components/Projects/Item';

const data = [
  {
    id: 0,
    title: 'asdasd',
    description: '',
    imgSrc: 'https://via.placeholder.com/350',
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
    title: 'Hello my name is',
    description: '',
    imgSrc: 'https://via.placeholder.com/350',
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
    imgSrc: 'https://via.placeholder.com/350',
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
    imgSrc: 'https://via.placeholder.com/350',
    imgAlt: '',
    tools: [
      {
        id: 1,
        title: 'javascript',
      },
    ],
  },
  {
    id: 0,
    title: 'asdasd',
    description: '',
    imgSrc: 'https://via.placeholder.com/350',
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
    title: 'Hello my name is',
    description: '',
    imgSrc: 'https://via.placeholder.com/350',
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
    imgSrc: 'https://via.placeholder.com/350',
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
    imgSrc: 'https://via.placeholder.com/350',
    imgAlt: '',
    tools: [
      {
        id: 1,
        title: 'javascript',
      },
    ],
  },
  {
    id: 0,
    title: 'asdasd',
    description: '',
    imgSrc: 'https://via.placeholder.com/350',
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
    title: 'Hello my name is',
    description: '',
    imgSrc: 'https://via.placeholder.com/350',
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
    imgSrc: 'https://via.placeholder.com/350',
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
    imgSrc: 'https://via.placeholder.com/350',
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
    <Item
      description={proj.description}
      imgSrc={proj.imgSrc}
      imgAlt={proj.imgAlt}
      tools={proj.tools}
    >
      {proj.title}
    </Item>
  ));

  return (
    <Projects>
      { renderedProjects }
    </Projects>
  );
};

ProjectList.propTypes = {
  match: PropTypes.object,
};

export default ProjectList;
