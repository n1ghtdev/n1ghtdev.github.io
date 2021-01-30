import React, { FC } from 'react';
import { graphql } from 'gatsby';

type Props = {
  date: string;
  external: string;
  github: string;
  title: string;
  tech: string;
  poster: string;
};

const ProjectsCard: FC<Props> = (props) => {
  console.log(props);

  return null;
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
          fluid(maxWidth: 1920, quality: 90) {
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
