import styled from 'styled-components';
import Img from 'gatsby-image';
import media from '@styles/media';
import { fadeInRightShort, fadeInLeftShort } from '@styles/animations';

export const Wrapper = styled.article`
  display: flex;
  flex-flow: nowrap column;
  margin-bottom: 100px;

  ${media.medium`
    padding: 20px;
  `}
  ${media.large`
    margin-bottom: 120px;
  `}
  ${media.xl`
    flex-flow: nowrap row;
    align-items: flex-start;
  `}
`;

export const ImageWrapper = styled.div`
  width: 100%;
  flex-shrink: 0;

  position: relative;
  overflow: hidden;
  visibility: hidden;
  opacity: 0;
  order: 1;

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
    box-shadow: 2px 2px 25px ${({ theme }: { theme: any }) => theme.secondary};

    &:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      background-color: ${({ theme }: { theme: any }) => theme.secondary};
      opacity: 0;
      transition: opacity 250ms ease-in;
    }

    &:hover:after {
      opacity: 0;
    }
  `}
  ${media.xl`
    max-width: 760px;
    order: 0;
  `}
  ${media.xxl`
    max-width: 960px;
  `}
`;

export const Image = styled(Img)`
  position: relative;
  vertical-align: middle;
  width: 100%;
`;

export const Content = styled.div`
  order: 0;
  margin-bottom: 20px;

  ${media.xl`
    order: 1;
    margin-bottom: 0;
    align-self: center;
    margin-left: 60px;
  `}
`;

export const Title = styled.h3`
  font-size: 32px;
  font-family: 'Inter', sans-serif;
  font-weight: 1000;
  color: ${({ theme }: { theme: any }) => theme.text};
  margin-bottom: 10px;

  ${media.medium`
    font-size: 48px;
  `}
`;

export const Description = styled.p`
  margin-left: 20px;
  margin-bottom: 20px;
  line-height: 23px;

  ${media.medium`
    line-height: 30px;
  `}
`;

export const Tools = styled.ul`
  display: inline-flex;
  flex-wrap: wrap;
  margin-left: 20px;
  margin-bottom: 10px;
  list-style-type: none;
`;

export const Tool = styled.li`
  margin-right: 10px;
  margin-bottom: 5px;

  color: ${({ theme }: { theme: any }) => theme.primary};
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;

  &:last-child {
    margin-right: 0;
  }
`;
