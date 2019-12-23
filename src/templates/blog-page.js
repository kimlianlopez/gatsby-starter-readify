import React from 'react';
import { Link } from 'gatsby';
import moment from 'moment';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';

import { rhythm } from '../utils/typography';
import { SectionContainer } from '../components/Containers';
import Wrapper from '../components/Wrapper';

const PostWrapper = styled(Link)`
  &:hover {
    text-decoration: none !important;

    & > .post-inner-wrapper {
      background-color: rgba(0, 0, 0, 0.2);
    }
  }

  & > .post-inner-wrapper {
    margin-bottom: ${rhythm(0.5)};
    padding: ${rhythm(0.5)};
    border-radius: ${rhythm(0.2)};
  }

  p {
    font-size: 0.8rem;
    line-height: 0.8rem;
  }
`;

const BlogPageTemplate = ({ blogPosts }) => {
  console.log(blogPosts);
  return (
    <Wrapper>
      <SectionContainer id="blog-hero-section">
        <Container>
          <h1 className="mb-3">Gatsby Readify Blog</h1>
          {blogPosts.map(post => (
            <Row noGutters>
              <Col xs="12" lg="7">
                <PostWrapper to={`/blog${post.node.fields.slug}`}>
                  <div className="post-inner-wrapper">
                    <h3>{post.node.frontmatter.title}</h3>
                    <p className="mb-3">{post.node.excerpt}</p>
                    <p>{post.node.frontmatter.author}</p>
                    <p>
                      {moment(post.node.frontmatter.date).format('ll')} •{' '}
                      {`${post.node.timeToRead} min read`}
                    </p>
                  </div>
                </PostWrapper>
              </Col>
            </Row>
          ))}
        </Container>
      </SectionContainer>
    </Wrapper>
  );
};

export default BlogPageTemplate;
