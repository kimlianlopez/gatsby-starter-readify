import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';

import { SectionContainer } from '../components/Containers';
import ColorThemeSelector from '../components/ColorThemeSelector';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import Button from '../components/Button';
import Wrapper from '../components/Wrapper';

const IndexPageTemplate = ({ inEditor, content }) => {
  return (
    <Wrapper inEditor={inEditor}>
      <SectionContainer id="hero-section">
        <Container>
          <Row className="mb-3" noGutters>
            <Col xs="12" md="8" className="d-flex flex-column">
              <h1>{content.heroTitle}</h1>
              <p>{content.description}</p>
            </Col>
            <Col md="1" />
            <Col xs="12" md="2">
              <PreviewCompatibleImage src={content.heroImage} alt="asd" />
            </Col>
          </Row>
          <Row className="mb-3" noGutters>
            <Col xs="12" md="4">
              <h3>{content.themeButtonsTitle}</h3>
              <Button variant="primary" className="mr-3">
                {content.primaryButtonText}
              </Button>
              <Button variant="secondary">{content.secondaryButtonText}</Button>
            </Col>
            <Col
              xs="12"
              md="8"
              className="d-flex flex-column justify-content-start">
              <ColorThemeSelector />
            </Col>
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
