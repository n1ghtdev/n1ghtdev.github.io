import styled from 'styled-components';
import media from '@styles/media';
import {
  fadeIn,
  fadeInFn,
  fadeInUp,
  fadeInDownShort,
} from '@styles/animations';

export const Wrapper = styled.article`
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
`;

export const Poster = styled.img`
  border-radius: 10px;
  opacity: 0;

  ${Wrapper}.visible & {
    animation: ${fadeInDownShort} 250ms linear forwards;
    animation-delay: 250ms;
  }
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column nowrap;
`;

export const Header = styled.div`
  padding-top: 20px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h3`
  opacity: 0;

  ${Wrapper}.visible & {
    animation: ${fadeInDownShort} 250ms linear forwards;
    animation-delay: 500ms;
  }
`;

export const Description = styled.div`
  flex: 1;
  font-weight: 500;
  margin-bottom: 10px;
  opacity: 0;

  ${Wrapper}.visible & {
    animation: ${fadeInDownShort} 250ms linear forwards;
    animation-delay: 750ms;
  }
`;

export const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const Tag = styled.li`
  color: #5c6c8c;
  font-size: 14px;
  font-weight: bold;
  margin-right: 10px;
  opacity: 0;

  ${Wrapper}.visible & {
    animation: ${fadeInUp} 250ms linear forwards;
    animation-delay: 850ms;
  }

  &:before {
    content: '#';
  }

  &:last-child {
    margin-right: 0;
  }
`;

export const Links = styled.div`
  & > a:not(.disabled) {
    opacity: 0;

    ${Wrapper}.visible & {
      animation: ${fadeIn} 250ms linear forwards;
      animation-delay: 500ms;
    }
  }
  & > a:first-child {
    margin-right: 20px;
  }
  & > a.disabled {
    opacity: 0;
    pointer-events: none;

    ${Wrapper}.visible & {
      animation: ${fadeInFn(0.4)} 250ms linear forwards;
      animation-delay: 500ms;
    }
  }
`;
