import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled, { css, keyframes } from 'styled-components';

const DefaultStyles = css`
  transform: translate3d(0,0,0);
  position: fixed;
  user-select: none;
  pointer-events: none;
  z-index: 9999999;
  border-radius: 50%;
`;

const MainCursor = styled.div.attrs(({ X, Y }) => ({
  style: {
    left: `${X}px`,
    top: `${Y}px`,
  },
}))`
  ${DefaultStyles}
  width: 10px;
  height: 10px;
  background: #fff;

  ${({ isHover }) => isHover && `
    background: #eee;
    opacity: 0!important;
  `}
`;

const FollowingCursor = styled.div.attrs(({ X, Y }) => ({
  style: {
    left: `${X}px`,
    top: `${Y}px`,
  },
}))`
  ${DefaultStyles}
  transition: all .15s;
  margin-top: -14px;
  margin-left: -14px;
  width: 38px;
  height: 38px;
  background: transparent;
  border: 1px solid white;

  ${({ isHover }) => isHover && `
    background: #fff;
    border-color: none;
    opacity: .3!important;
    width: 58px;
    height: 58px;
  `}

  ${({ isClicked }) => isClicked && `
    animation: clickAnim .35s linear forwards;
  `}

  @keyframes clickAnim {
    0% {
    transform: scale(1);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const CustomCursor = ({ X, Y, Opacity, isHover, isClicked }) => (
  <Fragment>
    <MainCursor isHover={isHover} style={{ opacity: Opacity }} className="custom-cursor" X={X} Y={Y} />
    <FollowingCursor isClicked={isClicked} isHover={isHover} style={{ opacity: Opacity }} className="custom-cursor" X={X} Y={Y} />
  </Fragment>
);

CustomCursor.propTypes = {
  X: PropTypes.number,
  Y: PropTypes.number,
  Opacity: PropTypes.number,
  isHover: PropTypes.bool,
  isClicked: PropTypes.bool,
};

export default CustomCursor;
