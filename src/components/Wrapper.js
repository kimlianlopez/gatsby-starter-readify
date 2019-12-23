import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Header from './Header';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import '../styles/bootstrap-forms.css';

const MainWrapper = styled.main`
  margin-top: ${props =>
    !!props.inEditor ? 0 : props.theme.spacing.offsetTop};
  padding-bottom: ${props =>
    !!props.inEditor ? 0 : props.theme.spacing.offsetTop};
  background-color: ${props => props.theme.color.background};
  flex-grow: 1;

  @media (min-width: 576px) {
    margin-top: ${props => props.theme.spacing.offsetTopLg};
  }
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
    color: ${props => props.theme.color.linkText};

    &:hover {
      color: ${props => props.theme.color.linkHoverText};
      text-decoration: underline;
    }
  }

  .form-control {
    &:focus,
    &:active {
      box-shadow: 0 0 0 0.2rem ${props => props.theme.color.primary};
      border: ${props => props.theme.color.primary};
      outline: none;
    }
  }
`;

const Wrapper = ({ children, inEditor }) => {
  if (!!inEditor) {
    return (
      <SiteWrapper id="__siteWrapper" inEditor={true}>
        <MainWrapper>{children}</MainWrapper>
      </SiteWrapper>
    );
  }

  return (
    <SiteWrapper id="__siteWrapper" inEditor={false}>
      <Header />
      <MainWrapper>{children}</MainWrapper>
      <Footer />
    </SiteWrapper>
  );
};

Wrapper.propTypes = {
  inEditor: PropTypes.bool
};

export default Wrapper;
