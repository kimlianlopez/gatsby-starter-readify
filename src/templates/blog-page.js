import React, { useState } from 'react';
import { Link } from 'gatsby';
import { chunk } from 'lodash';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';

import BlogInfoContainer from '../components/BlogInfoContainer';
import { rhythm } from '../utils/typography';
import { SectionContainer } from '../components/Containers';
import Wrapper from '../components/Wrapper';
import Pagination from '../components/Pagination';

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

const BlogTitle = styled.h3`
  color: ${props => props.theme.color.primary} !important;
`;

const InfoText = styled.span`
  color: ${props => props.theme.color.secondary};
`;

const blogFilterLabel = ({ tag, category }) => {
  if (!tag && !category) {
    return null;
  }

  return (
    <h3>
      {`${!!tag ? 'Tags' : 'Categories'}: `}
      <InfoText>{tag || category}</InfoText>
    </h3>
  );
};

const BlogPageTemplate = ({ blogPosts, blogSettings, tag, category }) => {
  const [currentPage, setPage] = useState(0);
  const chunkedBlogPosts = chunk(blogPosts, blogSettings.postsPerPage);

  return (
    <Wrapper>
      <SectionContainer id="blog-hero-section">
        <Container>
          <h1 className="mb-3">Gatsby Readify Blog</h1>
          {blogFilterLabel({ tag, category })}
          {chunkedBlogPosts[currentPage].map((post, i) => (
            <Row key={i} noGutters>
              <Col xs="12" lg="7">
                <PostWrapper to={`/blog${post.node.fields.slug}`}>
                  <div className="post-inner-wrapper">
                    <BlogTitle>{post.node.frontmatter.title}</BlogTitle>
                    <p className="mb-3">{post.node.excerpt}</p>
                    <BlogInfoContainer
                      blogSettings={blogSettings}
                      date={post.node.frontmatter.date}
                      timeToRead={post.node.timeToRead}
                    />
                  </div>
                </PostWrapper>
              </Col>
            </Row>
          ))}
          <Pagination
            setPage={setPage}
            currentPage={currentPage}
            pageCount={chunkedBlogPosts.length}
          />
        </Container>
      </SectionContainer>
    </Wrapper>
  );
};

BlogPageTemplate.defaultProps = {
  tag: '',
  category: ''
};

BlogPageTemplate.propTypes = {
  blogPosts: PropTypes.array.isRequired,
  tag: PropTypes.string,
  category: PropTypes.string
};

export default BlogPageTemplate;
