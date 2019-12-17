import styled from 'styled-components';
import PropTypes from 'prop-types';

import { rhythm } from '../utils/typography';

const Button = styled.button`
  background-color: ${props => props.theme.color[props.variant]};
  color: ${props => props.theme.color.buttonText};
  cursor: pointer;
  padding: ${rhythm(0.3)} ${rhythm(1)};
  border: ${props => `1px solid ${props.theme.color[props.variant]}`};
  border-radius: 0.25rem;

  &:hover {
    background-color: ${props => props.theme.color[`${props.variant}Dark`]};
    border: ${props =>
      `1px solid ${props.theme.color[`${props.variant}Dark`]}`};
  }
`;

Button.defaultProps = {
  variant: 'primary'
};

Button.propTypes = {
  variant: PropTypes.string
};

export default Button;
