import React, { useEffect, useState } from 'react';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import { animateScroll as scroll } from 'react-scroll';
import { navLinks } from '../data';
import { debounce } from '../utils/helpers';

// styles
import {
  StyledHeader,
  NavContainer,
  Navbar,
  Logo,
  MenuIcon,
  Sidebar,
  NavLinkS,
  BlurBG,
} from './styles/Header.styled';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isShow, setIsShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // remove sidebar when width of window is greater then 768px
  const onResize = (e) => {
    if (e.currentTarget.innerWidth > 768) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  // navbar hide and show on scroll
  const onScroll = debounce(() => {
    const currentScroll = window.scrollY;

    if (currentScroll > lastScrollY) {
      setIsShow(false);
    } else if (currentScroll < lastScrollY) {
      setIsShow(true);
    }

    setLastScrollY(currentScroll);
  }, 10);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [lastScrollY, isShow, onScroll]);

  // remove scroll when sidebar open
  isOpen
    ? (document.body.style.overflow = 'hidden')
    : (document.body.style.overflow = 'visible');

  return (
    <StyledHeader isShow={isShow}>
      <NavContainer>
        <Logo to="/" onClick={() => scroll.scrollToTop()}>
          lianpaulm.
        </Logo>

        <Navbar>
          <ul>
            {navLinks.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <NavLinkS
                    to={url}
                    href={url}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                  >
                    {text}
                  </NavLinkS>
                </li>
              );
            })}
          </ul>
        </Navbar>

        <MenuIcon onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <HiOutlineX /> : <HiOutlineMenu />}
        </MenuIcon>

        <BlurBG isOpen={isOpen} onClick={() => setIsOpen(false)} />

        <Sidebar isOpen={isOpen}>
          <ul>
            {navLinks.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <NavLinkS
                    to={url}
                    href={url}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    onClick={() => setIsOpen(false)}
                  >
                    {text}
                  </NavLinkS>
                </li>
              );
            })}
          </ul>
        </Sidebar>
      </NavContainer>
    </StyledHeader>
  );
};

export default Header;
