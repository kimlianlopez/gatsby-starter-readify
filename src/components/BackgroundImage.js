import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import PreviewCompatibleImage from './PreviewCompatibleImage';

const FixedContainer = styled.div`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

const Overlay = ({ overlay }) => {
  const { color = '#000000', opacity = 0.4 } = overlay;
  if (!!overlay) {
    return <FixedContainer style={{ color, opacity, zIndex: 100 }} />;
  }

  return '';
};

const BackgroundImage = props => {
  const defaultStyle = { width: '100%', height: '100%', ...style };
  const nonFluidStyle = {
    objectPosition: '15% 50%',
    objectFit: 'cover'
  };
  return (
    <FixedContainer>
      <Overlay overlay={props.overlay} />
      {typeof props.src === 'string' ? (
        <PreviewCompatibleImage
          style={{ ...defaultStyle, ...nonFluidStyle }}
          {...props}
        />
      ) : (
        <PreviewCompatibleImage
          style={defaultStyle}
          {...nonFluidStyle}
          {...props}
        />
      )}
    </FixedContainer>
  );
};

BackgroundImage.defaultProps = {
  isSvg: false,
  style: {},
  alt: '',
  overlay: false
};

BackgroundImage.propTypes = {
  isSvg: PropTypes.bool,
  src: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  style: PropTypes.object,
  alt: PropTypes.string,
  overlay: PropTypes.oneOfType([PropTypes.object, PropTypes.bool])
};

export default BgImage;
