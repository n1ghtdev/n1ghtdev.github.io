import React from 'react';
import styled, { css } from 'styled-components';
import media from '@styles/media';

type Props = {
  onClick: any;
  isActive: boolean;
};

const Wrapper = styled.div`
  width: 30px;
  height: 24px;
  position: relative;
  z-index: 100;
  overflow: hidden;
  ${media.medium`
    display: none;
  `}
`;

const InnerStyles = css`
  position: absolute;
  display: block;
  width: 100%;
  height: 2px;
  background-color: ${({ theme }: { theme: any }) => theme.text};
`;

const Inner = styled.span<{ isActive: boolean }>`
  top: 50%;
  ${InnerStyles};
  transition: background-color 0.125s ease-in 0.175s;

  ${({ isActive }) =>
    isActive &&
    css`
      transition-delay: 0s;
      transition-timing-function: ease-out;
      background-color: transparent !important;
    `}

  &:before {
    ${InnerStyles};
    content: '';
    top: -10px;
    transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335),
      top 0.05s linear 0.125s, left 0.125s ease-in 0.175s;

    ${({ isActive }) =>
      isActive &&
      css`
        transition: left 0.125s ease-out, top 0.05s linear 0.125s,
          transform 0.125s cubic-bezier(0.075, 0.82, 0.165, 1) 0.175s;
        top: -80px;
        left: -80px;
        transform: translate3d(80px, 80px, 0) rotate(45deg);
      `}
  }
  &:after {
    ${InnerStyles};
    content: '';
    bottom: -10px;
    transition: right .125s ease-out,top .05s linear .125s,transform .125s cubic-bezier(.075,.82,.165,1) .175s;

    ${({ isActive }) =>
      isActive &&
      css`
        top: -80px;
        right: -80px;
        transform: translate3d(-80px, 80px, 0) rotate(-45deg);
      `}
}


  }
`;

const Hamburger = (props: Props) => {
  return (
    <Wrapper onClick={props.onClick}>
      <Inner isActive={props.isActive} />
    </Wrapper>
  );
};

export default Hamburger;
