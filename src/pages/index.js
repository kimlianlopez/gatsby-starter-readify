import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { SectionContainer } from '../components/Containers';
import ColorThemeSelector from '../components/ColorThemeSelector';
import Button from '../components/Button';
import Wrapper from '../components/Wrapper';
import SEO from '../components/SEO';

const IndexPage = props => {
  return (
    <Wrapper>
      <SEO title="Home" path={props.path} />
      <SectionContainer id="hero-section">
        <Container>
          <Row className="mb-3" noGutters>
            <h1>Gatsby Starter Readify</h1>
            <p className="mb-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <Button variant="primary" className="mr-3">
              Primary
            </Button>
            <Button variant="secondary">Secondary</Button>
          </Row>
          <Row noGutters>
            <Col className="d-flex flex-column justify-content-start">
              <ColorThemeSelector />
            </Col>
          </Row>
        </Container>
      </SectionContainer>
    </Wrapper>
  );
};

export default IndexPage;
