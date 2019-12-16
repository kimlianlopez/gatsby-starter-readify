import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap-grid.min.css';

const MainWrapper = styled.main`
  margin-top: ${props => props.theme.spacing.offsetTop};
  background-color: ${props => props.theme.color.background};
  flex-grow: 1;
`;

const SiteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  h1,
  h2,
  h3 {
    color: ${props => props.theme.color.headerText};
  }

  p {
    color: ${props => props.theme.color.text};
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.color.secondary};

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Wrapper = ({ children }) => {
  return (
    <SiteWrapper id="__siteWrapper">
      <Header />
      <MainWrapper>{children}</MainWrapper>
      <Footer />
    </SiteWrapper>
  );
};

export default Wrapper;
