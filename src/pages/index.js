import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/SEO';
import IndexPageTemplate from '../templates/index-page';

const IndexPage = ({ data, path }) => {
  const { frontmatter: content } = data.markdownRemark;
  return (
    <>
      <SEO path={path} />
      <IndexPageTemplate content={content} />
    </>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    markdownRemark(frontmatter: { pageKey: { eq: "index-page" } }) {
      frontmatter {
        heroTitle
        description
        themeButtonsTitle
        primaryButtonText
        secondaryButtonText
        heroImage {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
