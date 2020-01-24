import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import useInView from '../hooks/useInView';

import GithubIcon from './assets/github';
import ExternalIcon from './assets/external';

import {
  fadeInRightShort,
  fadeInLeftShort,
  fadeInUpShort,
} from '../styles/animations';

type ProjectProps = {
  img: string;
  title: string;
  description: string;
  github: string;
  external: string;
  tools: string[];
  date: string;
};

const Wrapper = styled.article`
  height: 320px;
  margin-bottom: 120px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
`;

const ImageWrapper = styled.a`
  grid-column: 1/8;
  grid-row: 1/-1;
  position: relative;
  display: block;
  cursor: pointer;
  animation: ${fadeInRightShort} 250ms forwards linear;

  ${Wrapper}:nth-child(2n) & {
    grid-column: 6/-1;
    animation: ${fadeInLeftShort} 250ms forwards linear;
  }
`;

const Content = styled.div`
  grid-column: 7/-1;
  grid-row: 1/-1;
  text-align: right;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-end;
  animation: ${fadeInUpShort} 250ms forwards linear;

  ${Wrapper}:nth-child(2n) & {
    grid-column: 1/7;
    text-align: left;
    align-items: flex-start;
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  border-radius: 4px;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }: { theme: any }) => theme.contrastLow};
  opacity: 0.6;
  transition: opacity 250ms;
  z-index: 1;

  ${ImageWrapper}:hover & {
    opacity: 0;
  }
`;

const Image = styled.img`
  border-radius: 4px;
  width: 100%;
  max-width: 100%;
  height: 320px;
  display: block;
  object-fit: cover;
  filter: grayscale(1);
  transition: filter 250ms;

  ${ImageWrapper}:hover & {
    filter: grayscale(0);
  }
`;

const Title = styled.h3`
  margin-bottom: 20px;
  font-size: 1.75rem;
  color: ${({ theme }: { theme: any }) => theme.bright};
`;

const Date = styled.p`
  margin-bottom: 10px;
  font-size: 12px;
`;

const Description = styled.p`
  display: block;
  background-color: ${({ theme }: { theme: any }) => theme.contrastLow};
  padding: 25px 15px;
  box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
  border-radius: 2px;
  text-align: center;
  position: relative;
  z-index: 2;
`;

const Tools = styled.ul`
  list-style-type: none;
  display: inline-flex;
  margin-bottom: 20px;
  opacity: 0.7;
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
      margin-right: 10px;
    }
    & > a:nthchild(2) {
      margin-left: 0;
    }
  }
  & > a {
    vertical-align: middle;
    fill: ${({ theme }: { theme: any }) => theme.brightDark};
    transition: fill 250ms;
    &:nth-child(2) {
      margin-left: 10px;
    }
    &:hover {
      fill: ${({ theme }: { theme: any }) => theme.bright};
    }
  }
`;

const FeaturedProject = (props: ProjectProps) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { threshold: 0.5 });

  return (
    <Wrapper ref={ref}>
      {isInView ? (
        <Grid>
          <ImageWrapper
            href={props.external}
            rel="noopener noreferrer"
            target="_blank"
          >
            <ImageOverlay />
            <Image src={props.img} alt={props.title} />
          </ImageWrapper>
          <Content>
            <Date>{props.date}</Date>
            <Title>{props.title}</Title>
            <Description>{props.description}</Description>
            <Tools>
              {props.tools?.map(tool => (
                <Tool>{tool}</Tool>
              ))}
            </Tools>
            <LinkWrapper>
              {props.github && (
                <Link to={props.github}>
                  <GithubIcon />
                </Link>
              )}
              {props.external && (
                <Link to={props.external}>
                  <ExternalIcon />
                </Link>
              )}
            </LinkWrapper>
          </Content>
        </Grid>
      ) : null}
    </Wrapper>
  );
};

export default FeaturedProject;
