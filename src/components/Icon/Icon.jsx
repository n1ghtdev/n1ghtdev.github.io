import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { icons } from './getIcons';

const Svg = styled.svg`
  display: inline-block;
  height: 1em;
  width: 1em;
  font-size: inherit;
`;

const Icon = ({ iconName }) => (
  <Fragment>
    { !icons ?
      null :
      <Svg role={icons[`${iconName}.svg`].props.role} viewBox={icons[`${iconName}.svg`].props.viewBox}>
        {icons[`${iconName}.svg`].children.map(item =>
          React.createElement(item.tagname, item.props && { ...item.props }, item.children && item.children[0]))}
      </Svg> }
  </Fragment>
);


Icon.propTypes = {
  iconName: PropTypes.oneOf([
    'css3',
    'eslint',
    'git',
    'gulp',
    'html5',
    'javascript',
    'jquery',
    'mysql',
    'nodejs',
    'npm',
    'postgresql',
    'react',
    'redux',
    'sass',
    'visualstudiocode',
    'webpack',
  ]),
};

export default Icon;
