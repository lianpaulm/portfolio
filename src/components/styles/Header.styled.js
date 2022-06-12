import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const StyledHeader = styled.header`
  height: 4.3rem;
  width: 100%;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme, isShow }) => isShow && theme.shadow[0]};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  transform: translateY(${({ isShow }) => (isShow ? '0' : '-100%')});
  transition: ${({ theme }) => theme.transition};
`;

export const Logo = styled(LinkR)`
  font-family: 'Suez One', serif;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.primary};
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 0 1.8rem;
`;

export const Navbar = styled.nav`
  ul {
    display: flex;
    gap: 1.3rem;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavLinkS = styled(LinkS)`
  color: ${({ theme }) => theme.fonts.black};
  padding: 0.3rem 0.5rem;
  text-transform: capitalize;
  font-weight: 700;

  &:hover,
  &.active {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const MenuIcon = styled.button`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    font-size: 1.9rem;
    color: ${({ theme }) => theme.colors.black};
    position: relative;
    z-index: 200;
  }
`;

export const Sidebar = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  z-index: 50;
  width: min(75vw, 400px);
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${({ theme }) => theme.shadow[0]};
  transition: ${({ theme }) => theme.transition};
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  transform: translateX(${({ isOpen }) => (isOpen ? '0' : '100%')});

  li {
    margin-bottom: 3rem;
  }
`;

export const BlurBG = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
`;
