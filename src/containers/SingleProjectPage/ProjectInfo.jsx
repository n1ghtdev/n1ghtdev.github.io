import React from 'react';
import PropTypes from 'prop-types';
import { H2 } from '../../components/Headings';
import Paragraph from '../../components/Paragraph';
import Span from '../../components/Span';
import HR from '../../components/HR';
import Nav from '../../components/Nav';
import NavItem from '../../components/NavItem';

const propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  type: PropTypes.string,
  date: PropTypes.string,
  sourceLink: PropTypes.string,
  demoLink: PropTypes.string,
};

const ProjectInfo = ({
  title,
  description,
  type,
  date,
  sourceLink,
  demoLink,
}) => (
  <div>
    <H2 FontSize="2rem" FontFamily="Merriweather" FontStyle="italic">
      {title}
    </H2>
    <HR Color="#E5E5E5" />
    <Span Color="#999999">{type}</Span>
    <Span Color="#999999" style={{ float: 'right' }}>
      {date}
    </Span>
    <Paragraph Margin="20px 0" FontFamily="Ubuntu" FontWeight="300">
      {description}
    </Paragraph>
    <HR Color="#E5E5E5" />
    <Nav>
      {sourceLink && (
        <NavItem divider="square" href={sourceLink}>
          github source
        </NavItem>
      )}
      {demoLink && (
        <NavItem divider="square" href={demoLink}>
          live website/demo
        </NavItem>
      )}
    </Nav>
  </div>
);

ProjectInfo.propTypes = propTypes;

export default ProjectInfo;
