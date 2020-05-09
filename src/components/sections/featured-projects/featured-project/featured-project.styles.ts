import styled from 'styled-components';
import Img from 'gatsby-image';
import media from '@styles/media';
import { fadeInRightShort, fadeInLeftShort } from '@styles/animations';

export const Wrapper = styled.article`
  ${media.large`
    margin-bottom: 120px;
  `}
  margin-bottom: 60px;
  position: relative;
  height: 600px;
`;

export const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 40px;
  transform: translate(0, -50%);
  width: 50%;

  visibility: hidden;
  opacity: 0;
  transition: all 250ms;

  ${Wrapper}:hover & {
    visibility: visible;
    opacity: 1;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
  height: 100%;

  overflow: hidden;
  visibility: hidden;
  opacity: 0;

  ${Wrapper}.visible & {
    visibility: visible;
    animation: ${fadeInRightShort} 250ms forwards linear;
    animation-delay: 250ms;

    /* prettier-ignore */
    ${Wrapper}:nth-child(2n) & {
      animation: ${fadeInLeftShort} 250ms forwards linear;
    }
  }
  ${media.medium`
    &:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      background-color: #000;
      opacity: 0;
      transition: opacity 250ms ease-in;
    }

    ${Wrapper}:hover &:after {
      opacity: .6;
    }
  `}
`;

export const Image = styled(Img)`
  position: relative;
  vertical-align: middle;
  width: 100%;
  max-width: 100%;
  ${media.medium`
    transition: filter 250ms;
    ${Wrapper}:hover & {
      filter: blur(3px);
    }
  `}
`;

export const Title = styled.h3`
  margin-bottom: 20px;
  font-size: 1.75rem;
  color: ${({ theme }: { theme: any }) => theme.text};
`;

export const Date = styled.p`
  display: none;
  margin-bottom: 10px;
  font-size: 12px;
  ${media.large`
    display: block;
  `}
`;

export const Description = styled.p`
  ${media.large`
    margin-bottom: 20px;
  `}
`;

export const Tools = styled.ul`
  display: none;
  list-style-type: none;
  margin-bottom: 20px;
  opacity: 0.7;
  ${media.large`
    display: inline-flex;
  `}
`;

export const Tool = styled.li`
  font-size: 14px;
  margin-right: 10px;
  &:last-child {
    margin-right: 0;
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  align-items: center;

  & > a {
    vertical-align: middle;
    fill: ${({ theme }: { theme: any }) => theme.text};
    transition: fill 250ms;
    &:nth-child(2) {
      margin-left: 10px;
    }
    &:hover {
      fill: ${({ theme }: { theme: any }) => theme.text};
    }
  }
`;
