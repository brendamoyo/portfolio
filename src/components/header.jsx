import React from 'react'
import styled from 'styled-components'
import { useTheme } from '../context/ThemeContext'
import { FaSun, FaMoon } from 'react-icons/fa'

const NavContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  background: var(--bg-nav);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  z-index: 1000;
  border-bottom: 1px solid var(--border-nav);
  transition: background var(--transition-smooth), border-color var(--transition-smooth);
`


const Logo = styled.a`
  font-size: 24px;
  font-weight: 800;
  color: var(--text-main);
  text-decoration: none;
  letter-spacing: 0.5px;
  transition: color var(--transition-smooth);

  span {
    color: #38bdf8; 
  }
`

const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  gap: 30px;

  @media (max-width: 768px) {
    display: none; 
  }
`

const NavLink = styled.a`
  font-size: 15px;
  font-weight: 500;
  color: var(--text-main);
  text-decoration: none;
  position: relative;
  padding: 8px 0;
  transition: color 0.2s ease;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: #38bdf8;
    transition: width 0.2s ease;
  }

  &:hover {
    color: #38bdf8;
    
    &::after {
      width: 100%;
    }
  }
`

const RightGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

const ThemeToggle = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid var(--border-card);
  background: var(--bg-elevated);
  color: var(--text-main);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 18px;
  transition: all var(--transition-smooth);

  &:hover {
    border-color: #38bdf8;
    color: #38bdf8;
  }
`

const ContactButton = styled.a`
  background: #38bdf8;
  color: #ffffff;
  padding: 10px 24px;
  border-radius: 20px; 
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  box-shadow: 0 4px 15px rgba(56, 189, 248, 0.2);
  transition: background 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    background: #0284c7;
    box-shadow: 0 6px 18px rgba(56, 189, 248, 0.4);
  }
`

const Header = () => {
  const { isDark, toggleTheme } = useTheme()

  return (
    <NavContainer>
      <Logo href="#home">Brenda <span>Moyo</span></Logo>
      
      <NavLinks>
        <NavLink href="#home">Home</NavLink>
        <NavLink href="#about">About</NavLink>
        <NavLink href="#services">Services</NavLink>
        <NavLink href="#portfolio">Portfolio</NavLink>
        <NavLink href="#testimonials">Reviews</NavLink>
      </NavLinks>

      <RightGroup>
        <ThemeToggle onClick={toggleTheme} aria-label="Toggle theme">
          {isDark ? <FaSun /> : <FaMoon />}
        </ThemeToggle>
        <ContactButton href="#contact">Contact</ContactButton>
      </RightGroup>
    </NavContainer>
  )
}

export default Header