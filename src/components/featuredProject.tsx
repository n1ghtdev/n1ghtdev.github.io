import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import useInView from '@hooks/useInView';

import GithubIcon from './assets/github';
import ExternalIcon from './assets/external';

import media from '@styles/media';

import {
  fadeInRightShort,
  fadeInLeftShort,
  fadeInUpShort,
} from '@styles/animations';

type ProjectProps = {
  img: any;
  title: string;
  description: string;
  github: string;
  external: string;
  tools: string[];
  date: string;
};

const Wrapper: any = styled.article`
  ${media.large`
    margin-bottom: 120px;
  `}
  margin-bottom: 60px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  align-items: center;
  ${media.medium`
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: unset;
  `}
`;

const Content = styled.div`
  ${media.medium`
    grid-column: 7/-1;
    grid-row: 1/-1;
    margin-bottom: 0;
    ${Wrapper}:nth-child(2n) & {
      grid-column: 1/7;
      text-align: left;
      align-items: flex-start;
    }
  `}
  grid-row: 1;
  text-align: right;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 20px;

  visibility: hidden;
  opacity: 0;

  ${Wrapper}.visible & {
    visibility: visible;
    animation: ${fadeInUpShort} 250ms forwards linear;
    animation-delay: 250ms;
  }
`;

const ImageWrapper = styled.a`
  ${media.medium`
    grid-column: 1/10;
    grid-row: 1/-1;
    max-width: 720px;
    ${Wrapper}:nth-child(2n) & {
      grid-column: 4/-1;
    }
  `}

  grid-column: 1/12;
  grid-row: 2;
  position: relative;
  display: inline-block;
  cursor: pointer;

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
      background-color: #1f223d;
      opacity: .6;
      transition: opacity 250ms ease-in;
    }

    &:hover:after {
      opacity: .2;
    }
  `}
`;
const Image = styled(Img)`
  position: relative;
  vertical-align: middle;
  border-radius: 4px;
  width: 100%;
  max-width: 100%;
  ${media.medium`
    filter: grayscale(1);
    transition: filter 250ms;
    ${ImageWrapper}:hover & {
      filter: grayscale(0);
    }
  `}
`;

const Title = styled.h3`
  margin-bottom: 20px;
  font-size: 1.75rem;
  color: ${({ theme }: { theme: any }) => theme.text};
`;

const Date = styled.p`
  display: none;
  margin-bottom: 10px;
  font-size: 12px;
  ${media.large`
    display: block;
  `}
`;

const Description = styled.div`
  ${media.large`
    margin-bottom: 20px;
  `}
  display: block;
  /* background-color: ${({ theme }: { theme: any }) => theme.contrastLow}; */
  padding: 25px 15px;
  box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
  border-radius: 2px;
  text-align: center;
  position: relative;
  z-index: 2;

  a:hover {
    text-decoration: underline;
  }
`;

const Tools = styled.ul`
  display: none;
  list-style-type: none;
  margin-bottom: 20px;
  opacity: 0.7;
  ${media.large`
    display: inline-flex;
  `}
`;

const Tool = styled.li`
  font-size: 14px;
  margin-right: 10px;
  &:last-child {
    margin-right: 0;
  }
`;

const LinkWrapper = styled.div`
  display: flex;
  align-items: center;

  ${Wrapper}:nth-child(2n) & {
    flex-direction: row-reverse;
    & > a:first-child {
      margin-left: 10px;
    }
    & > a:nth-child(2) {
      margin-left: 0;
    }
  }
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

const FeaturedProject = (props: ProjectProps) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { threshold: 0.5 }, true);
  console.log(props.img);

  const { fluid } = props.img.childImageSharp;

  return (
    <Wrapper ref={ref} className={isInView ? 'visible' : ''}>
      <Grid>
        <ImageWrapper
          href={props.external}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Image fluid={fluid} />
        </ImageWrapper>
        <Content>
          <Date>{props.date}</Date>
          <Title>{props.title}</Title>
          <Description
            dangerouslySetInnerHTML={{ __html: props.description }}
          />
          <Tools>
            {props.tools?.map((tool) => (
              <Tool>{tool}</Tool>
            ))}
          </Tools>
          <LinkWrapper>
            {props.github && (
              <a href={props.github} target="_blank" rel="noopener noreferrer">
                <GithubIcon />
              </a>
            )}
            {props.external && (
              <a
                href={props.external}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalIcon />
              </a>
            )}
          </LinkWrapper>
        </Content>
      </Grid>
    </Wrapper>
  );
};

export default FeaturedProject;
