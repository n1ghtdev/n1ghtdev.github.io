import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

// Create Wrapper to prevent passing React props to DOM
// more info: https://github.com/styled-components/styled-components/issues/439
const Wrapper = styled.span`
 ${({ Style }) => Style === 'blue' && css`
    & > ${Button} {
      background: #889FB0;
      & > ${Text} {
        color: #fff;
      }
      & > ${Hover} {
        background: #154883;
      }
    }
  `}

  ${({ Style }) => Style === 'simple' && css`
    ${Button} {
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
    }
  `} 
`;

const Button = styled(Link, { Style: false })`
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

const WideButton = ({ children, to, Style }) => (
  <Wrapper Style={Style}>
    <Button to={to}>
      <Text>{children}</Text>
      <Hover />
    </Button>
  </Wrapper>
);

WideButton.propTypes = {
  children: PropTypes.string,
  to: PropTypes.string.isRequired,
  Style: PropTypes.string,
};

WideButton.defaultProps = {
  Style: 'simple',
};

export default WideButton;
