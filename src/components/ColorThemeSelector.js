import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import { startCase, camelCase } from 'lodash';
import { Form } from 'react-bootstrap';

import { themes } from '../themes/getTheme';

const ColorThemeSelector = ({ controlId }) => {
  const { setTheme, themeName } = useContext(ThemeContext);
  const themeList = Object.keys(themes);

  return (
    <Form.Group controlId={controlId} className="mb-0">
      <Form.Control
        size="sm"
        title="Choose Color Theme"
        value={camelCase(themeName)}
        onChange={e => setTheme(e.target.value)}
        as="select">
        {themeList.map((theme, i) => (
          <option value={theme} key={i}>
            {startCase(theme)}
          </option>
        ))}
      </Form.Control>
    </Form.Group>
  );
};

ColorThemeSelector.propTypes = {
  controlId: PropTypes.string.isRequired
};

export default ColorThemeSelector;
