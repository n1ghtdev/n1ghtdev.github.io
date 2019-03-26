import React from 'react';
import PropTypes from 'prop-types';
import Section from '../../components/Section';
import Grid from '../../components/Grid';
import Row from '../../components/Row';
import Col from '../../components/Col';
import { H3 } from '../../components/Headings';
import Paragraph from '../../components/Paragraph';
import Tools from '../../components/Tools';

const AboutProjectSection = ({ project }) => (
  <Section bgColor="#000" Height="100vh">
    <Grid>
      <Row>
        <Col textAlign="center">
          <H3 Color="#fff">{project.title}</H3>
        </Col>
      </Row>
      <Row>
        <Col textAlign="center">
          <Paragraph>{project.description}</Paragraph>
        </Col>
      </Row>
      <Row>
        <Col textAlign="center">
          <Tools tools={project.tools} />
        </Col>
      </Row>
    </Grid>
  </Section>
);

AboutProjectSection.propTypes = {
  project: PropTypes.object.isRequired,
};

export default AboutProjectSection;
