import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledSectionContainer = styled.section`
  position: relative;
  padding: ${props => `${props.theme.spacing.sectionContainer} 0px`};
  background-color: ${props => props.theme.color.background};
  overflow: hidden;
`;

const SectionContainer = props => {
  const { id, children, className, style } = props;

  return (
    <StyledSectionContainer style={style} id={id} className={className}>
      {children}
    </StyledSectionContainer>
  );
};

SectionContainer.defaultProps = {
  style: {},
  className: ``
};

SectionContainer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  style: PropTypes.object
};

export { SectionContainer };
