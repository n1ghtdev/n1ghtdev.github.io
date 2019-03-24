import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import getIcon from '../../utils/getIcon';

const Svg = styled.svg`
  display: inline-block;
  height: 1em;
  width: 1em;
  font-size: inherit;
`;

const Icon = ({ iconName }) => {
  const IconSvg = getIcon(iconName);
  return (
    <Fragment>
      { IconSvg ?
        <Svg as={IconSvg} /> :
        null }
    </Fragment>
  );
};

Icon.propTypes = {
  iconName: PropTypes.oneOf([
    'css3',
    'eslint',
    'git',
    'gulp',
    'html5',
    'javascript',
    'jquery',
    'npm',
    'reactjs',
    'redux',
    'sass',
    'webpack',
  ]),
};

export default Icon;
