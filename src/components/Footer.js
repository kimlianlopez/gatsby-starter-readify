import React, { useEffect, useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled, { withTheme } from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';

import ColorThemeSelector from './ColorThemeSelector';
import { userLinks } from '../../data/siteConfig';

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

const ColorThemeLabel = styled.label`
  color: ${props => props.theme.color.text};
`;

const FooterText = styled.p`
  text-align: center;

  @media (min-width: 992px) {
    text-align: left;
  }
`;

const FooterImage = ({ href, src, alt, title }) => {
  return (
    <a href={href} title={title} target="_blank">
      <img
        src={src}
        alt={alt}
        style={{
          width: '30px',
          height: '30px',
          marginBottom: '0px',
          marginLeft: '16px'
        }}
      />
    </a>
  );
};

const Footer = () => {
  const colorThemeContainerRef = React.createRef();
  const [footerOffset, setFooterOffset] = useState(0);

  const {
    site: { siteMetadata }
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  useEffect(() => {
    const themeContainerHeight = colorThemeContainerRef.current.offsetHeight;
    setFooterOffset(themeContainerHeight);
  }, []);

  return (
    <StyledFooter bottomOffset={footerOffset}>
      <StyledContainer>
        <Row className="align-items-center my-4 h-100" noGutters>
          <Col xs="12" lg="6" className="mb-3 mb-lg-0">
            <FooterText>
              <strong>{siteMetadata.title}</strong>
            </FooterText>
            <FooterText>{siteMetadata.description}</FooterText>
          </Col>
          <Col xs="12" lg="6">
            <Row
              className="justify-content-center justify-content-lg-end"
              noGutters>
              {userLinks.map((link, i) => {
                const notNeededLinks = ['Twitter', 'Email'];
                if (!notNeededLinks.includes(link.label)) {
                  return (
                    <FooterImage
                      key={i}
                      href={link.url}
                      src={link.imgSrc}
                      alt={link.label}
                      title={link.title}
                    />
                  );
                }
              })}
            </Row>
          </Col>
        </Row>
      </StyledContainer>
      <ColorThemeContainer ref={colorThemeContainerRef} className="d-sm-none">
        <ColorThemeLabel>Color Theme</ColorThemeLabel>
        <ColorThemeSelector controlId="footerColorThemeSelector" />
      </ColorThemeContainer>
    </StyledFooter>
  );
};

export default withTheme(Footer);
