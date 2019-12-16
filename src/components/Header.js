import React, { useContext } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import { ThemeContext } from 'styled-components';

import sunIcon from '../images/sun.svg';
import moonIcon from '../images/moon.svg';
import { rhythm, scale } from '../utils/typography';

const StickyHeader = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: ${props => props.theme.spacing.offsetTop};
  z-index: 1100;
  background-color: ${props => props.theme.color.background};
`;

const Navbar = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const ModeToggler = styled.button`
  color: ${props => props.theme.color.text};
  font-size: ${scale(0.05).fontSize};
  line-height: ${scale(0.05).lineHeight};
  text-transform: capitalize;
  display: flex;
  align-items: center;
  margin-left: auto;
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:active,
  &:focus {
    outline: none;
    box-shadow: none;
  }
`;

const ModeIcon = styled.img`
  margin-bottom: 0;
  margin-left: ${rhythm(0.5)};
  width: ${scale(0.5).fontSize};

  &:hover {
    opacity: 0.7;
  }
`;

const HeaderTitle = styled(Link)`
  margin-right: ${rhythm(1)};
  margin-top: 0;
  margin-bottom: 0;

  &#siteTitle {
    color: ${props => props.theme.color.main};

    &:hover {
      text-decoration: none;
    }
  }
`;

const Nav = styled.div`
  display: flex;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: purple;
  margin-right: ${rhythm(1 / 2)};
`;

const Header = () => {
  const { setDarkMode, darkMode } = useContext(ThemeContext);
  const modeName = !!darkMode ? 'Dark' : 'Light';
  const nextModeName = !!darkMode ? 'Light' : 'Dark';

  return (
    <StickyHeader>
      <Container style={{ height: '100%' }}>
        <Navbar className="px-0">
          <HeaderTitle to="/" id="siteTitle" style={scale(0.5)}>
            <strong>Gatsby Starter Readify</strong>
          </HeaderTitle>
          <Nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/blog">Blog</NavLink>
          </Nav>
          <ModeToggler
            onClick={() => setDarkMode(!darkMode)}
            title={`Toggle Dark Mode`}>
            {`${nextModeName} Mode`}
            {
              <ModeIcon
                src={nextModeName === 'Dark' ? moonIcon : sunIcon}
                alt={`${modeName} Mode`}
              />
            }
          </ModeToggler>
        </Navbar>
      </Container>
    </StickyHeader>
  );
};

export default Header;
