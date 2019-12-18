import React from 'react';
import Image from 'gatsby-image/withIEPolyfill';
import PropTypes from 'prop-types';

const PreviewCompatibleImage = ({ src, alt, style, ...props }) => {
  const altTemplate = !!alt ? alt : '';

  if (!!src && typeof src === 'string') {
    return (
      <img src={src} alt={altTemplate} style={{ width: '100%', ...style }} />
    );
  }

  if (!!src && !!src.childImageSharp) {
    const { fluid, fixed } = src.childImageSharp;
    if (!!fluid) {
      return <Image fluid={fluid} alt={altTemplate} style={style} {...props} />;
    }

    if (!!fixed) {
      return <Image fixed={fixed} alt={altTemplate} style={style} {...props} />;
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
