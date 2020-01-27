import React from 'react';
import { graphql } from 'gatsby';
import Hero from '../components/sections/hero';
import Featured from '../components/sections/featured';
import Projects from '../components/sections/projects';

import Layout from '../components/layout';
import { SectionProvider } from '../hooks/useActiveSection';

const IndexPage = ({ data, location }: { data: any; location: any }) => {
  return (
    <SectionProvider>
      <Layout location={location}>
        <Hero />
        <Featured data={data.featured.edges} />
        <Projects data={data.projects.edges} />
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
              publicURL
            }
            tech
          }
          id
          rawMarkdownBody
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
          rawMarkdownBody
        }
      }
    }
  }
`;
