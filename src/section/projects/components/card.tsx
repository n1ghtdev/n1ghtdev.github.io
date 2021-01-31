import React, { FC } from 'react';
import { graphql } from 'gatsby';
import styled, { css } from 'styled-components';
import Img from 'gatsby-image';
import { BoxBottom } from '@components/box/bottom';
import GithubIcon from '@components/assets/github';
import ExternalIcon from '@components/assets/external';
import { FlexRight } from '@components/flex/right';
import { FlexBottom } from '@components/flex/bottom';
import { BoxRight } from '@components/box/right';
import { Placeholder } from '@components/placeholder';
type Props = {
  date: string;
  descr: string;
  external: string;
  github: string;
  title: string;
  tech: string[];
  poster: any;
};

const Wrapper = styled(BoxBottom)`
  height: 100%;
  display: flex;
  padding: 10px;
  flex-flow: column nowrap;
  flex-basis: calc(1 / 3 * 100%);
  flex-shrink: 0;
`;

const Header = styled(FlexRight)`
  width: 100%;
`;

const Descr = styled.div`
  flex: 1;
  text-align: justify;
  line-height: 1.5;
`;

const Tag = styled.div`
  color: #7685a7;
  font-size: 14px;
`;

const Links = styled(BoxRight)`
  svg {
    width: 24px;
    height: 24px;
  }
  & > a.disabled {
    opacity: 0.4;
    pointer-events: none;
  }
`;

const image = css`
  border-radius: inherit;
  height: 100%;
`;

const ProjectLink = styled.a`
  display: block;
  position: relative;
  cursor: pointer;
  height: 320px;
  border-radius: 10px;

  & > .gatsby-img {
    ${image}
  }
`;

const Hover = styled.div`
  opacity: 0;
  transition: opacity 250ms;

  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 10px;

  &:hover {
    opacity: 1;

    svg {
      animation: fadeIn 250ms linear forwards;
    }
  }

  svg {
    width: 72px;
    height: 72px;
    opacity: 0;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translate3d(0, 20px, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
`;

const ProjectsCard: FC<Props> = (props) => {
  const { title, descr, poster, tech, github, external } = props;

  return (
    <Wrapper>
      <ProjectLink href={external || github}>
        {poster ? (
          <Img className="gatsby-img" fluid={poster} alt={title} />
        ) : (
          <Placeholder>{title}</Placeholder>
        )}
        <Hover>
          <ExternalIcon />
        </Hover>
      </ProjectLink>
      <FlexBottom>
        <Header alignItems="center" justifyContent="space-between">
          <h3>{title}</h3>
          <Links>
            <a
              href={github || '#'}
              title="github"
              className={!github ? 'disabled' : ''}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon />
            </a>
            <a
              href={external || '#'}
              title="live website"
              className={!external ? 'disabled' : ''}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalIcon />
            </a>
          </Links>
        </Header>
        <Descr dangerouslySetInnerHTML={{ __html: descr }} />
        <FlexRight>
          {tech?.length
            ? tech.map((v: string) => <Tag key={v}>{v}</Tag>)
            : null}
        </FlexRight>
      </FlexBottom>
    </Wrapper>
  );
};

export const projectFragment = graphql`
  fragment ProjectFragment on MarkdownRemark {
    frontmatter {
      date
      external
      github
      title
      tech
      poster {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 90, traceSVG: { color: "#574AE2" }) {
            aspectRatio
            sizes
            src
            srcSet
            srcSetWebp
            srcWebp
            tracedSVG
          }
        }
      }
    }
    id
    html
  }
`;

export { ProjectsCard };
