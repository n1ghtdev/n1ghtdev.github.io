import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { H4 } from '../../components/Headings';

import Poster from './Poster';
import Overlay from './Overlay';

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
  opacity: 0.9;

  &:hover ${Overlay} {
    opacity: 0.8;
  }
`;

const Title = styled(H4)`
  font-size: 1.125rem;
`;

const ProjectItem = ({ children, to }) => <Item to={to}>{children}</Item>;

ProjectItem.propTypes = propTypes;

ProjectItem.Poster = Poster;
ProjectItem.Overlay = Overlay;
ProjectItem.Title = Title;

export default ProjectItem;
