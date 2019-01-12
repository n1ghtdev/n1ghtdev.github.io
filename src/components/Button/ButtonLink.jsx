import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

// const Wrapper = styled(Link)`
//   ${({ Mod }) => Mod === 'simple' && `
//     display: inline-block;
//     border: 2px solid #fff;
//     background: transparency;
//     font-size: 2rem;
//     color: #fff;
//     font-weight: bold;
//     text-transform: uppercase;
//     text-decoration: none;
//     padding: 8px 60px;
//   `}
// `;

const Wrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  padding: ${({ Padding }) => Padding};
`;

const Button = styled(Link)`
  position: relative;
  display: block;
  width: 100%;
  padding: 10px 0;
  text-align: center;
  overflow: hidden;
  text-decoration: none;
  box-shadow: 0 2px 4px rgba(0,0,0,.1);

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
      text-transform: uppercase;
      font-weight: bold;
      &:hover {
        color: #12121B;
      }
    }
    & > ${Hover} {
      background: #fff;
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

const ButtonLink = ({ children, to, view, Padding }) => (
  <Wrapper Padding={Padding}>
    <Button to={to} view={view}>
      <Text>{children}</Text>
      <Hover />
    </Button>
  </Wrapper>
);

// const ButtonLink = ({ children, to, Mod }) => (
//   <Wrapper Mod={Mod} to={to}>{children}</Wrapper>
// );

ButtonLink.propTypes = {
  children: PropTypes.any,
  to: PropTypes.any,
  view: PropTypes.string,
  Padding: PropTypes.string,
  reverse: PropTypes.bool,
};

ButtonLink.defaultProps = {
  reverse: false,
};

export default ButtonLink;
