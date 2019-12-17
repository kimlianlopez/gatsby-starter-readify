import React from 'react';
import Image from 'gatsby-image/withIEPolyfill';
import PropTypes from 'prop-types';

const PreviewCompatibleImage = ({ src, alt, style, ...props }) => {
  const altTemplate = !!alt ? alt : '';

  if (!!src) {
    if (typeof src === 'string') {
      return (
        <img src={src} alt={altTemplate} style={{ width: '100%', ...style }} />
      );
    }

    if (!!src.fluid) {
      return (
        <Image fluid={src.fluid} alt={altTemplate} style={style} {...props} />
      );
    }

    if (!!src.fixed) {
      return (
        <Image fixed={src.fixed} alt={altTemplate} style={style} {...props} />
      );
    }
  }

  return '';
};

PreviewCompatibleImage.defaultProps = {
  alt: '',
  style: {}
};

PreviewCompatibleImage.propTypes = {
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  alt: PropTypes.string.isRequired,
  style: PropTypes.object
};

export default PreviewCompatibleImage;
