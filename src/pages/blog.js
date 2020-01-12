import React from 'react';
import { graphql } from 'gatsby';

import BlogPageTemplate from '../templates/blog-page';
import SEO from '../components/SEO';

const BlogPage = props => {
  const { data, path } = props;

  return (
    <>
      <SEO title="Blog" path={path} />
      <BlogPageTemplate blogPosts={data.allMarkdownRemark.edges} />
    </>
  );
};

export default BlogPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(filter: { fields: { isBlogPost: { eq: true } } }) {
      edges {
        node {
          timeToRead
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            date
          }
        }
      }
    }
  }
`;
