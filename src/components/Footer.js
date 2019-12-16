import React from 'react';
import styled from 'styled-components';
import { Container, Row } from 'react-bootstrap';

const StyledFooter = styled.footer`
  height: 100px;
  background-color: ${props => props.theme.color.background};
`;

const StyledContainer = styled(Container)`
  height: 100%;
  border-top: ${props => `1px solid ${props.theme.color.text}`};
`;

const Footer = () => {
  return (
    <StyledFooter>
      <StyledContainer>
        <Row
          style={{ height: '100%' }}
          className="align-items-center"
          noGutters>
          <p>
            <strong>Gatsby Starter Readify</strong> - A gatsby advance starter
            with advance SEO, Theming, and Netlify-CMS.
          </p>
        </Row>
      </StyledContainer>
    </StyledFooter>
  );
};

export default Footer;
