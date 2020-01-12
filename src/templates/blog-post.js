import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import { graphql, Link } from 'gatsby';
import { kebabCase } from 'lodash';
import { Row, Col } from 'react-bootstrap';

import { blogAuthorName } from '../../data/siteConfig';
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

const BlogPostInfo = styled.div`
  display: flex;
  flex-direction: column;

  .smaller {
    font-size: 0.7rem;
  }
`;

const BlogPostInfoContainer = ({ title, children }) => {
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
  inEditor
}) => {
  return (
    <Wrapper inEditor={inEditor}>
      <SectionContainer id="blog-hero-section">
        <Container>
          <h1>{title}</h1>
          <p>{description}</p>
          <BlogPostInfo className="mb-5">
            <p className="mb-0">
              <b>{blogAuthorName}</b>
            </p>
            <p className="smaller mt-0">
              {moment(date).format('ll')} •{' '}
              {`${!!timeToRead ? timeToRead : '0'} min read`}
            </p>
          </BlogPostInfo>
          <div style={{ width: '50%' }}>
            <PreviewCompatibleImage
              className="mb-5"
              src={cover}
              alt={coverImageAlt}
            />
          </div>
          <PreviewCompatibleContent
            className="mb-5"
            inEditor={inEditor}
            content={html}
          />
          <BlogPostInfoContainer title="Tags">
            {tags.map(tag => (
              <TagLink key={tag} to={`/blog/tags/${kebabCase(tag)}`}>
                {tag}
              </TagLink>
            ))}
          </BlogPostInfoContainer>
          <BlogPostInfoContainer title="Category">
            <TagLink to={`/blog/categories/${kebabCase(category)}`}>
              {category}
            </TagLink>
          </BlogPostInfoContainer>
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
  timeToRead: PropTypes.string,
  category: PropTypes.string,
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  cover: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  coverImageAlt: PropTypes.string,
  html: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  inEditor: PropTypes.bool
};

const BlogPost = ({ data, path }) => {
  const { frontmatter: post } = data.markdownRemark;

  return (
    <>
      <SEO title={post.title} path={path} />
      <BlogPostTemplate
        title={post.title}
        timeToRead={data.markdownRemark.timeToRead}
        description={post.description}
        tags={post.tags}
        category={post.category}
        date={post.date}
        cover={post.cover}
        coverImageAlt={post.coverImageAlt}
        html={data.markdownRemark.html}
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
          }
        }
        coverImageAlt
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
