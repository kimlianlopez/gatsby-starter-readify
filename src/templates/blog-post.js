import React from 'react';
import { Container } from 'react-bootstrap';
import { graphql } from 'gatsby';

import { SectionContainer } from '../components/Containers';
import Wrapper from '../components/Wrapper';
import SEO from '../components/SEO';

const BlogPostTemplate = ({ data, pageContext }) => {
  const { slug } = pageContext;
  const post = data.markdownRemark;

  return (
    <Wrapper>
      <SEO title={post.frontmatter.title} path={slug} />
      <SectionContainer id="blog-hero-section">
        <Container>
          <h1 className="mb-5">{post.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </Container>
      </SectionContainer>
    </Wrapper>
  );
};

export default BlogPostTemplate;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        cover {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        date
        category
        tags
      }
      fields {
        slug
        date
      }
    }
  }
`;
