import React from 'react';
import { graphql } from 'gatsby';

import BlogPageTemplate from './blog-page';
import SEO from '../components/SEO';

const BlogTagsTemplate = ({ data, pageContext, path }) => {
  const { tag } = pageContext;

  return (
    <>
      <SEO title={`Post tagged as "${tag}"`} path={path} />
      <BlogPageTemplate
        blogPosts={data.allMarkdownRemark.edges}
        blogSettings={data.site.siteMetadata}
        tag={tag}
      />
    </>
  );
};

export default BlogTagsTemplate;

export const pageQuery = graphql`
  query BlogTagsPage($tag: String) {
    allMarkdownRemark(
      limit: 1000
      filter: {
        fields: { isBlogPost: { eq: true } }
        frontmatter: { tags: { in: [$tag] } }
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
            date
          }
        }
      }
    }
    site {
      siteMetadata {
        blogAuthorAvatar
        blogAuthorName
        postsPerPage
      }
    }
  }
`;
