import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const Button = styled(Link)`
  position: relative;
  display: block;
  width: 100%;
  padding: 10px 0;
  text-align: center;
  overflow: hidden;
  text-decoration: none;
  box-shadow: 0 2px 4px rgba(0,0,0,.1);
  text-transform: uppercase;
  font-weight: bold;

  ${({ view }) => view === 'blue' && css`
    background: #889FB0;
    & > ${Text} {
      color: #fff;
    }
    & > ${Hover} {
      background: #154883;
    }
  `}

  ${({ view }) => view === 'simple' && css`
    background: transparent;
    border: 1px solid rgba(255,255,255, .1);
    & > ${Text} {
      color: #fff;
    }
    & > ${Hover} {
      background: #fff;
    }
    &:hover {
      & > ${Text} {
        color: #12121B;
      }
    }
  `} 
`;

const Hover = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  opacity: 0;
  transform: translateX(-100%);
  transition: all .5s;

  ${Button}:hover & {
    opacity: 1;
    transform: translateX(0);
  }
`;

const Text = styled.span`
  position: relative;
  z-index: 10;
  display: block;
  font-size: 2rem;
  transition: all .5s;

  ${Button}:hover & {
    transform: translateX(30%);
  }
`;

const ButtonLink = ({ children, to, view }) => (
    <Button to={to} view={view}>
      <Text>{children}</Text>
      <Hover />
    </Button>
);

ButtonLink.propTypes = {
  children: PropTypes.string,
  to: PropTypes.string.isRequired,
  view: PropTypes.string,
};

ButtonLink.defaultProps = {
  view: 'simple',
};

export default ButtonLink;
