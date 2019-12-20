import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { Container, Col } from 'react-bootstrap';
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

  @media (min-width: 992px) {
    height: ${props => props.theme.spacing.offsetTopLg};
  }
`;

const Navbar = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  /* align-items: center; */
  /* justify-content: space-between; */
`;

const NavCol = styled(Col)`
  display: flex;
  align-items: center;
  padding-right: 0 !important;
  padding-left: 0 !important;
`;

const ModeToggler = styled.button`
  color: ${props => props.theme.color.text};
  font-size: ${scale(0.05).fontSize};
  line-height: ${scale(0.05).lineHeight};
  text-transform: capitalize;
  display: flex;
  align-items: center;
  /* margin-left: auto; */
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

const ModeText = styled.span`
  @media (max-width: 768px) {
    display: none;
  }
`;

const HeaderTitle = styled(Link)`
  margin-right: ${rhythm(1)};
  font-size: ${scale(0.5).fontSize};
  line-height: ${scale(0).lineHeight};
  margin-top: 0;
  margin-bottom: 0;

  &#siteTitle {
    color: ${props => props.theme.color.siteTitle};

    &:hover {
      text-decoration: none;
    }

    @media (max-width: 576px) {
      margin-right: 0;
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
          {/* Nav Title */}
          <NavCol
            xs="9"
            md="9"
            className="align-items-start justify-content-center justify-content-md-start align-items-md-center flex-column flex-md-row">
            <HeaderTitle to="/" id="siteTitle">
              <strong>Gatsby Readify</strong>
            </HeaderTitle>
            <Nav className="order-2 order-sm-1">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/blog">Blog</NavLink>
            </Nav>
          </NavCol>
          {/* Nav Mode Toggler */}
          <NavCol
            xs="3"
            md="3"
            className="align-items-center justify-content-end">
            <ModeToggler
              onClick={() => setDarkMode(!darkMode)}
              title={`Toggle Dark Mode`}>
              <ModeText>{`${nextModeName} Mode`}</ModeText>
              {
                <ModeIcon
                  src={nextModeName === 'Dark' ? moonIcon : sunIcon}
                  alt={`${modeName} Mode`}
                />
              }
            </ModeToggler>
          </NavCol>
          {/* Nav Main */}
          {/* <NavCol xs="12" lg="6" className="order-lg-1 align-items-lg-center">
            <Nav className="order-2 order-sm-1">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/blog">Blog</NavLink>
            </Nav>
          </NavCol> */}
        </Navbar>
      </Container>
    </StickyHeader>
  );
};

export default Header;
