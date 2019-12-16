import React from 'react';
import { Container } from 'react-bootstrap';

import { SectionContainer } from '../components/Containers';
import Wrapper from '../components/Wrapper';
import SEO from '../components/SEO';

const BlogPage = props => {
  return (
    <Wrapper>
      <SEO title="Blog" path={props.path} />
      <SectionContainer>
        <Container>
          <h1>Articles</h1>
        </Container>
      </SectionContainer>
    </Wrapper>
  );
};

export default BlogPage;
