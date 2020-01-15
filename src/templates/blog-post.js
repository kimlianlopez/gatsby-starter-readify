import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import { graphql, Link } from 'gatsby';
import { kebabCase } from 'lodash';
import { Row, Col } from 'react-bootstrap';

import BlogInfoContainer from '../components/BlogInfoContainer';
import SEO from '../components/SEO';
import { SectionContainer } from '../components/Containers';
import PreviewCompatibleContent from '../components/PreviewCompatibleContent';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import Wrapper from '../components/Wrapper';
import { rhythm } from '../utils/typography';

const TagLink = styled(Link)`
  margin-right: ${rhythm(0.5)};
  padding: ${rhythm(0.2)} ${rhythm(0.5)};
  border: 1px solid ${props => props.theme.color.linkText};
`;

const CoverImage = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    width: 70%;
  }
`;

const BlogTagsAndCategory = ({ title, children }) => {
  return (
    <Row className="mb-3" noGutters>
      <Col xs="12">
        <h4>{title}:</h4>
      </Col>
      <Col xs="12">
        <Row noGutters>{children}</Row>
      </Col>
    </Row>
  );
};

export const BlogPostTemplate = ({
  title,
  description,
  timeToRead,
  tags,
  category,
  date,
  cover,
  coverImageAlt,
  html,
  inEditor,
  blogSettings
}) => {
  return (
    <Wrapper inEditor={inEditor}>
      <SectionContainer id="blog-hero-section">
        <Container>
          <h1>{title}</h1>
          <p className="mb-3">{description}</p>
          <BlogInfoContainer
            className="mb-5"
            blogSettings={blogSettings}
            date={date}
            timeToRead={!!timeToRead ? timeToRead : '0'}
          />
          <CoverImage className="mb-5">
            <PreviewCompatibleImage src={cover} alt={coverImageAlt} />
          </CoverImage>
          <PreviewCompatibleContent
            className="mb-5"
            inEditor={inEditor}
            content={html}
          />
          <BlogTagsAndCategory title="Tags">
            {tags.map(tag => (
              <TagLink key={tag} to={`/blog/tags/${kebabCase(tag)}`}>
                {tag}
              </TagLink>
            ))}
          </BlogTagsAndCategory>
          <BlogTagsAndCategory title="Category">
            <TagLink to={`/blog/categories/${kebabCase(category)}`}>
              {category}
            </TagLink>
          </BlogTagsAndCategory>
        </Container>
      </SectionContainer>
    </Wrapper>
  );
};

BlogPostTemplate.defaultProps = {
  inEditor: false
};

BlogPostTemplate.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  timeToRead: PropTypes.number,
  category: PropTypes.string,
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  cover: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  coverImageAlt: PropTypes.string,
  html: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  inEditor: PropTypes.bool,
  blogSettings: PropTypes.object
};

const BlogPost = ({ data, path }) => {
  const { markdownRemark: post, site } = data;
  const {
    title,
    cover,
    description,
    tags,
    category,
    date,
    coverImageAlt
  } = post.frontmatter;

  return (
    <>
      <SEO
        title={title}
        path={path}
        image={cover.childImageSharp.original.src}
        imageAlt={coverImageAlt}
        description={description}
        isBlogPost={true}
      />
      <BlogPostTemplate
        title={title}
        timeToRead={post.timeToRead}
        description={description}
        tags={tags}
        category={category}
        date={date}
        cover={cover}
        coverImageAlt={coverImageAlt}
        html={post.html}
        blogSettings={site.siteMetadata}
      />
    </>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default BlogPost;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        date
        description
        cover {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
            original {
              src
            }
          }
        }
        coverImageAlt
        category
        tags
      }
    }
    site {
      siteMetadata {
        blogAuthorAvatar
        blogAuthorName
      }
    }
  }
`;
