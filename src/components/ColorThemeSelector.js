import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { startCase, camelCase } from 'lodash';
import { Form, Row, Col } from 'react-bootstrap';

import { themes } from '../themes/getTheme';

const ColorThemeSelector = () => {
  const { setTheme, themeName } = useContext(ThemeContext);
  const themeList = Object.keys(themes);

  return (
    <Form.Group controlId="exampleForm.ControlSelect1">
      <Row noGutters>
        <Col xs="12" lg="6">
          <h3>Color Theme:</h3>
          <Form.Control
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
        </Col>
      </Row>
    </Form.Group>
  );
};

export default ColorThemeSelector;
