import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import { ThemeContext } from 'styled-components';

import sunIcon from '../images/sun.svg';
import moonIcon from '../images/moon.svg';
import { rhythm, scale } from '../utils/typography';

/* eslint-disable */

const StickyHeader = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: ${props => props.theme.spacing.offsetTop};
  z-index: 1100;
  box-shadow: ${props =>
    props.isOnTop ? 'none' : '0 4px 5px -2px rgba(0, 0, 0, 0.15)'};
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
    color: ${props => props.theme.color.siteTitle};

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

const initialState = {
  isOnTop: true
};

const Header = () => {
  const [headerPosition, setHeaderPosition] = useState(initialState);
  const { setDarkMode, darkMode } = useContext(ThemeContext);
  const headerRef = React.createRef();
  const modeName = !!darkMode ? 'Dark' : 'Light';
  const nextModeName = !!darkMode ? 'Light' : 'Dark';

  useEffect(() => {
    const headerHeight = headerRef.current.offsetHeight;
    const onScroll = () => {
      const isHeaderOnTop = window.scrollY < headerHeight;
      if (isHeaderOnTop && headerPosition.isOnTop === false) {
        setHeaderPosition({
          isOnTop: true
        });
      } else if (!isHeaderOnTop && headerPosition.isOnTop === true) {
        setHeaderPosition({ isOnTop: false });
      }
    };

    document.addEventListener('scroll', onScroll);
    return () => document.removeEventListener('scroll', onScroll);
  }, [headerPosition.isOnTop]);

  return (
    <StickyHeader ref={headerRef} isOnTop={headerPosition.isOnTop}>
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
