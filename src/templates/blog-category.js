import React from 'react';
import { graphql } from 'gatsby';

import BlogPageTemplate from './blog-page';
import SEO from '../components/SEO';

const BlogCategoryTemplate = ({ data, pageContext, path }) => {
  const { category } = pageContext;

  return (
    <>
      <SEO title={`Blog Category - ${category}`} path={path} />
      <BlogPageTemplate
        blogPosts={data.allMarkdownRemark.edges}
        category={category}
      />
    </>
  );
};

export default BlogCategoryTemplate;

export const pageQuery = graphql`
  query BlogCategoryPage($category: String) {
    allMarkdownRemark(
      limit: 1000
      filter: {
        fields: { isBlogPost: { eq: true } }
        frontmatter: { category: { eq: $category } }
      }
    ) {
      edges {
        node {
          timeToRead
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            author
            date
          }
        }
      }
    }
  }
`;
