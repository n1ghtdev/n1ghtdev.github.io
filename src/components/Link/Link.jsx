import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Link = styled.a`
  text-decoration: none;
  color: #fff;

  ${({ Style }) => Style && `
    font-style: italic;
    opacity: .35;
    transition: all .25s;

    &:hover {
      opacity: .75;
    }
  `}
`;

Link.propTypes = {
  children: PropTypes.any,
  href: PropTypes.string,
  target: PropTypes.string,
  Style: PropTypes.string,
};

export default Link;
