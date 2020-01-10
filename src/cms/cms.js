import CMS from 'netlify-cms-app';
import React, { useState, useEffect } from 'react';
import { StyleSheetManager } from 'styled-components';
import { TypographyStyle } from 'react-typography';

import typography from '../utils/typography';
import { ThemeProvider } from '../context/ThemeContext';
import IndexPagePreview from './preview-templates/IndexPagePreview';
import BlogPostPreview from './preview-templates/BlogPostPreview';
import BlogPagePreview from './preview-templates/BlogPagePreview';
// import FooterComponentPreview from './preview-templates/FooterComponentPreview';

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

CMS.registerPreviewTemplate('blogPage', props => (
  <ThemeProvider>
    <TypographyStyle typography={typography} />
    <CSSInjector>
      <BlogPagePreview {...props} />
    </CSSInjector>
  </ThemeProvider>
));

// CMS.registerPreviewTemplate('siteFooter', props => (
//   <CSSInjector>
//     <BootstrapLoader>
//       <FooterComponentPreview {...props} />
//     </BootstrapLoader>
//   </CSSInjector>
// ));
