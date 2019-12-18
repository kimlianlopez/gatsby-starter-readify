import React from 'react';
import { Container } from 'react-bootstrap';

import { SectionContainer } from '../components/Containers';
import Wrapper from '../components/Wrapper';

const BlogPageTemplate = () => {
  return (
    <Wrapper>
      <SectionContainer>
        <Container>
          <h1>Articles</h1>
        </Container>
      </SectionContainer>
    </Wrapper>
  );
};

export default BlogPageTemplate;
