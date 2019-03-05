import React from 'react';
import Section from '../../components/Section';
import Grid from '../../components/Grid';
import Row from '../../components/Row';
import Col from '../../components/Col';
import { H2 } from '../../components/Headings';
import Paragraph from '../../components/Paragraph';
import Skill from '../../components/Skill';
import ToolsList from '../ToolsList';

const skills = [
  {
    id: 0,
    title: 'html',
    icon: 'html5',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos, perspiciatis? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos, perspiciatis?',
  },
  {
    id: 1,
    title: 'css',
    icon: 'css3',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos, perspiciatis? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos, perspiciatis?',
  },
  {
    id: 2,
    title: 'javascript',
    icon: 'javascript',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos, perspiciatis? Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
  },
  {
    id: 3,
    title: 'react',
    icon: 'react',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos, perspiciatis? Lorem ipsum dolor, sit amet consectetur adipisicing elit. ',
  },
];

class ToolsContainer extends React.Component {
  render() {
    return (
      <Section
        ref={node => {
          this.node = node;
        }}
        Height="100vh"
        className="section--white"
      >
        <Grid>
          <Row>
            <Col lg={6} Margin="0 auto" textAlign="center">
              <H2 Color="#000" fontSize="2rem" fontFamily="Lobster Two">My skills and tools</H2>
              <Paragraph Color="#000" fontStyle="italic">web. js. front-end.</Paragraph>
            </Col>
          </Row>
          <Row Padding="50px 0" as="ul">
            { skills.map(item => (
              <Skill key={item.id} description={item.description} icon={item.icon} />
            )) }
          </Row>
          <ToolsList />
        </Grid>
      </Section>
    );
  }
}

export default ToolsContainer;
