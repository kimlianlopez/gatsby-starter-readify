import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Container, Row } from 'react-bootstrap';

import ColorThemeSelector from './ColorThemeSelector';

/* eslint-disable */

const StyledFooter = styled.footer`
  position: relative;
  background-color: ${props => props.theme.color.background};

  @media (max-width: 575px) {
    margin-bottom: ${props => props.bottomOffset}px;
  }
`;

const StyledContainer = styled(Container)`
  height: 100%;
  border-top: ${props => `1px solid ${props.theme.color.text}`};
`;

const ColorThemeContainer = styled(Container)`
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: ${props => props.theme.color.background};
  box-shadow: 0 -4px 5px -2px rgba(0, 0, 0, 0.15);
  padding: 1rem;
  width: 100%;
`;

const FormLabel = styled.label`
  color: ${props => props.theme.color.text};
`;

const Footer = () => {
  const colorThemeContainerRef = React.createRef();
  const [footerOffset, setFooterOffset] = useState(0);

  useEffect(() => {
    const themeContainerHeight = colorThemeContainerRef.current.offsetHeight;
    setFooterOffset(themeContainerHeight);
  }, []);

  return (
    <StyledFooter bottomOffset={footerOffset}>
      <StyledContainer>
        <Row className="align-items-center my-4 h-100" noGutters>
          <p>
            <strong>Gatsby Starter Readify</strong> - A gatsby advance starter
            with advance SEO, Theming, and Netlify-CMS.
          </p>
        </Row>
      </StyledContainer>
      <ColorThemeContainer ref={colorThemeContainerRef} className="d-sm-none">
        <FormLabel>Color Theme</FormLabel>
        <ColorThemeSelector controlId="footerColorThemeSelector" />
      </ColorThemeContainer>
    </StyledFooter>
  );
};

export default Footer;
