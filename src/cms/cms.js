import CMS from 'netlify-cms-app';
import React, { useState, useEffect } from 'react';
import { StyleSheetManager } from 'styled-components';

import { ThemeProvider } from '../context/ThemeContext';
import IndexPagePreview from './preview-templates/IndexPagePreview';
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
    <CSSInjector>
      <IndexPagePreview {...props} />
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
