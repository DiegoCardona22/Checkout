// @packages
import Container from 'react-bootstrap/Container';
import Link from 'next/link';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import classnames from 'classnames';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';

// @scripts
import Logo from 'components/atoms/logo';
import useBreakpoint from 'src/hooks/useBreakpoint';

// @styles
import classes from './styles.module.scss';

// @types
import {
  SIZE_LG,
  SIZE_XL,
  SIZE_XXL
} from 'src/types/breakpoint';

const routes = [
  {
    url: '/',
    name: 'Home'
  },
  {
    url: '/marketplace',
    name: 'Marketplace'
  },
  {
    url: '/collections',
    name: 'Collections'
  },
  {
    url: '/profile',
    name: 'Profile'
  },
  {
    url: '/ranking',
    name: 'Ranking'
  }
];

const Header = () => {
  const [expandedMenu, setExpandedMenu] = useState(false);
  const menuRef = useRef(null as HTMLElement | null);

  const router = useRouter();
  const actualRoute = router.pathname;

  const breakpoint = useBreakpoint();

  const handleExpandedMenu = () => {
    setExpandedMenu(!expandedMenu);
  };

  const isDesktop = (
    breakpoint === SIZE_LG
    || breakpoint === SIZE_XL
    || breakpoint === SIZE_XXL
  );

  useEffect(() => {
    const eventCatcher = (e: any) => {
      if (menuRef.current == null || menuRef.current.contains(e.target) || isDesktop) return;
      if (expandedMenu) setExpandedMenu(false);
    };
    document.addEventListener('click', eventCatcher);

    return () => document.removeEventListener('click', eventCatcher);
  }, [expandedMenu, breakpoint]);

  return (
    <Navbar
      ref={menuRef}
      expanded={isDesktop ? true : expandedMenu}
      className={classes.header}
      expand="lg"
      variant="dark"
      sticky="top"
    >
      <Container className={classes.wrapper}>
        <Link passHref href="/">
          <a data-event-type="click/logo-navbar/logo">
            <Navbar.Brand className={classes.header__logo}>
              <Logo />
            </Navbar.Brand>
          </a>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleExpandedMenu} />
        <Navbar.Collapse className={classes.header__menu} id="basic-navbar-nav">
          <Nav className={classes.header__option}>
            {routes.map((item, index) => (
              <Link key={`nav-link-${index}`} href={item.url}>
                <a
                  role="presentation"
                  className={classnames(
                    classes.link,
                    actualRoute === item.url && classes.active
                  )}
                  data-event-type={`click/link-navbar/${item.name}`}
                  onClick={handleExpandedMenu}
                >
                  {item.name}
                </a>
              </Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
