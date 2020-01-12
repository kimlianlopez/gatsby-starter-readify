import CMS from 'netlify-cms-app';
import React, { useState, useEffect } from 'react';
import { StyleSheetManager } from 'styled-components';
import { TypographyStyle } from 'react-typography';

import typography from '../utils/typography';
import { ThemeProvider } from '../context/ThemeContext';
import IndexPagePreview from './preview-templates/IndexPagePreview';
import BlogPostPreview from './preview-templates/BlogPostPreview';

// import BootstrapLoader from './utils/BootstrapLoader';

const CSSInjector = ({ children }) => {
  const [iframeRef, setIframeRef] = useState('');

  useEffect(() => {
    const iframe = document.querySelector('iframe');
    const iframeHeadElem = iframe.contentDocument.head;
    setIframeRef(iframeHeadElem);
  }, []);

  return (
    <div>
      {iframeRef && (
        <StyleSheetManager target={iframeRef}>{children}</StyleSheetManager>
      )}
    </div>
  );
};

CMS.registerPreviewTemplate('index', props => (
  <ThemeProvider>
    <TypographyStyle typography={typography} />
    <CSSInjector>
      <IndexPagePreview {...props} />
    </CSSInjector>
  </ThemeProvider>
));

CMS.registerPreviewTemplate('blogPost', props => (
  <ThemeProvider>
    <TypographyStyle typography={typography} />
    <CSSInjector>
      <BlogPostPreview {...props} />
    </CSSInjector>
  </ThemeProvider>
));
