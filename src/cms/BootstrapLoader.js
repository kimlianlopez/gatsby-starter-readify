import React from 'react';
import styled from 'styled-components';

import { ThemeProvider } from '../context/ThemeContext';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import '../styles/bootstrap-forms.css';

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

const BootstrapLoader = ({ children }) => {
  return (
    <ThemeProvider>
      <SiteWrapper>{children}</SiteWrapper>
    </ThemeProvider>
  );
};

export default BootstrapLoader;
