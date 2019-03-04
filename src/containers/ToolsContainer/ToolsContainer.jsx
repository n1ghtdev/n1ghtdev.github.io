import React from 'react';
import Section from '../../components/Section';
import Grid from '../../components/Grid';
import Row from '../../components/Row';
import Col from '../../components/Col';
import Tools from '../../components/Tools';
import { H2 } from '../../components/Headings';
import Paragraph from '../../components/Paragraph';
import List from '../../components/List';
import Icon from '../../components/Icon';

const tools = [
  {
    id: 2,
    title: 'javascript',
    icon: 'javascript',
  },
  {
    id: 3,
    title: 'react',
    icon: 'react',
  },
  {
    id: 4,
    title: 'redux',
    icon: 'redux',
  },
  {
    id: 5,
    title: 'git',
    icon: 'git',
  },
  {
    id: 6,
    title: 'webpack',
    icon: 'webpack',
  },
  {
    id: 7,
    title: 'jquery',
    icon: 'jquery',
  },
  {
    id: 8,
    title: 'eslint',
    icon: 'eslint',
  },
  {
    id: 9,
    title: 'gulp',
    icon: 'gulp',
  },
  {
    id: 10,
    title: 'sass',
    icon: 'sass',
  },
  {
    id: 11,
    title: 'npm',
    icon: 'npm',
  },
];

class ToolsContainer extends React.Component {
  render() {
    return (
      <Section
        style={{border: '1px solid red'}}
        ref={node => {
          this.node = node;
        }}
        Height="100vh"
        className="section--white"
      >
        <Grid style={{border: '1px solid black'}}>
          <Row>
            <Col lg={6} Margin="0 auto" textAlign="center">
              <H2 Color="#000" fontSize="2rem" fontFamily="Lobster Two">Tools I experienced with</H2>
              <Paragraph Color="#000" fontStyle="italic">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos, perspiciatis?</Paragraph>
            </Col>
          </Row>
          <Row>
            <Col>
              <Tools tools={tools} />
            </Col>
          </Row>
          <Row>
            <Col lg={6} style={{fontSize: '5rem'}}>
              <Icon iconName="html5" />
              <Icon iconName="css3" />
              <p style={{ fontSize: '1rem' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sit nesciunt eligendi est illum quidem.</p>
            </Col>
            <Col lg={6} textAlign="center">
              <List listDir="column" listStyle="circle">
                <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem dolorem quaerat quidem aut, minima modi.</li>
                <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem dolorem quaerat quidem aut, minima modi.</li>
                <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem dolorem quaerat quidem aut, minima modi.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dolorem qui repellendus mollitia quasi laboriosam reprehenderit aut tenetur earum vel, natus, amet nemo laborum adipisci.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dolorem qui repellendus mollitia quasi laboriosam reprehenderit aut tenetur earum vel, natus, amet nemo laborum adipisci.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dolorem qui repellendus mollitia quasi laboriosam reprehenderit aut tenetur earum vel, natus, amet nemo laborum adipisci.</li>
              </List>
            </Col>
          </Row>
        </Grid>
      </Section>
    );
  }
}

export default ToolsContainer;
