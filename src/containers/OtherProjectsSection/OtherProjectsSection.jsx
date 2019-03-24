import React from 'react';
import Section from '../../components/Section';
import Grid from '../../components/Grid';
import Row from '../../components/Row';
import Col from '../../components/Col';
import OtherProject from '../../components/OtherProject';

const data = [
  {
    id: 0,
    title: 'asdasd',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed  incididunt ut labore et dolore magna aliqua. ',
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
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ',
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
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
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
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
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
    id: 4,
    title: 'asdasd',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
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
    id: 5,
    title: 'Hello my name is',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
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
    id: 6,
    title: 'Hello my name is',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
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
];

const OtherProjectsSection = () => (
  <Section Padding="200px 0">
    <Grid>
      <Row>
        { data.map(entity => (
          <Col lg="4" Padding="10px" key={entity.id}>
            <OtherProject
              title={entity.title}
              description={entity.description}
              tools={entity.tools}
            />
          </Col>
        )) }
      </Row>
    </Grid>
  </Section>
);

export default OtherProjectsSection;
