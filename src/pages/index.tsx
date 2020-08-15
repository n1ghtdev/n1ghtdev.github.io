import React from 'react';
import { graphql } from 'gatsby';

import Hero from '@components/sections/hero';
import Projects from '@components/sections/projects';
import About from '@components/sections/about';
import Contact from '@components/sections/contact';
import Layout from '@components/layout';

import Footer from '@components/footer';

const IndexPage = ({ data, location }: { data: any; location: any }) => {
  return (
    <Layout location={location}>
      <Hero />
      <Projects projects={data.projects.edges} />
      <About />
      <Contact />
      <Footer />
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  {
    projects: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/projects/" } }
      sort: { fields: frontmatter___order, order: ASC }
    ) {
      edges {
        node {
          frontmatter {
            date
            external
            github
            title
            tech
            poster {
              childImageSharp {
                fluid(
                  maxWidth: 1920
                  quality: 90
                  traceSVG: { color: "#151b27" }
                ) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
          id
          html
        }
      }
    }
  }
`;
