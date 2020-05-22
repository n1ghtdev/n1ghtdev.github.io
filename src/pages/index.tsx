import React from 'react';
import { graphql } from 'gatsby';

import Hero from '@components/sections/hero';
import FeaturedProjects from '@components/sections/featured-projects';
import Projects from '@components/sections/projects';
import Layout from '@components/layout';

import { SectionProvider } from '@hooks/use-active-section';

const IndexPage = ({ data, location }: { data: any; location: any }) => {
  const sortProjectsByDate = data.projects.edges.sort((a: any, b: any) => {
    const aDate = a.node.frontmatter.date.replace('-', '');
    const bDate = b.node.frontmatter.date.replace('-', '');

    return bDate.localeCompare(aDate);
  });

  return (
    <SectionProvider>
      <Layout location={location}>
        <Hero />
        <FeaturedProjects data={data.featured.edges} />
        <Projects projects={sortProjectsByDate} />
      </Layout>
    </SectionProvider>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  {
    featured: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/featured/" } }
    ) {
      edges {
        node {
          frontmatter {
            date
            external
            github
            title
            poster {
              childImageSharp {
                fluid(
                  maxWidth: 1920
                  quality: 90
                  traceSVG: { color: "#333c80" }
                ) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
            tech
          }
          id
          html
        }
      }
    }
    projects: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/projects/" }
        frontmatter: { featured: { ne: true } }
      }
    ) {
      edges {
        node {
          frontmatter {
            date
            external
            github
            title
            tech
          }
          id
          html
        }
      }
    }
  }
`;
