import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Poster from './Poster';
import Overlay from './Overlay';
import Span from '../Span';
import { H4 } from '../Headings';

const propTypes = {
  children: PropTypes.any,
  to: PropTypes.string.isRequired,
};

const Item = styled(Link)`
  display: block;
  position: relative;
  height: 250px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
  text-decoration: none;
  transition: opacity 0.25s;
  opacity: 0.75;

  &:hover {
    opacity: 1;
  }
`;

const Title = styled(H4)`
  font-size: 1.125rem;
`;

const Description = styled(Span)``;

const ProjectItem = ({ children, to }) => <Item to={to}>{children}</Item>;

ProjectItem.propTypes = propTypes;

ProjectItem.Poster = Poster;
ProjectItem.Overlay = Overlay;
ProjectItem.Title = Title;
ProjectItem.Description = Description;

export default ProjectItem;
