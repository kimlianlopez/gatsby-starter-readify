import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';

import { SectionContainer } from '../components/Containers';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import Button from '../components/Button';
import Wrapper from '../components/Wrapper';

const IndexPageTemplate = ({ inEditor, content }) => {
  return (
    <Wrapper>
      <SectionContainer id="hero-section">
        <Container>
          <Row className="mb-3" noGutters>
            <Col
              xs="12"
              md="9"
              lg="10"
              className="d-flex flex-column pr-md-5 pr-0 order-2 order-md-1">
              <h1>{content.heroTitle}</h1>
              <p>{content.description}</p>
            </Col>
            <Col xs="5" sm="4" md="3" lg="2" className="order-1 order-md-2">
              <PreviewCompatibleImage src={content.heroImage} alt="asd" />
            </Col>
          </Row>
          <Row className="mb-3" noGutters>
            <Col xs="12" md="6" lg="4">
              <h3>{content.themeButtonsTitle}</h3>
              <Button variant="primary" className="mr-3">
                {content.primaryButtonText}
              </Button>
              <Button variant="secondary">{content.secondaryButtonText}</Button>
            </Col>
            <Col
              xs="12"
              md="6"
              lg="8"
              className="d-flex flex-column justify-content-start"></Col>
          </Row>
        </Container>
      </SectionContainer>
    </Wrapper>
  );
};

IndexPageTemplate.defaultProps = {
  inEditor: false
};

IndexPageTemplate.propTypes = {
  inEditor: PropTypes.bool,
  content: PropTypes.shape({
    heroTitle: PropTypes.string,
    description: PropTypes.string,
    heroImage: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    themeButtonsTitle: PropTypes.string,
    primaryButtonText: PropTypes.string,
    secondaryButtonText: PropTypes.string
  })
};

export default IndexPageTemplate;
