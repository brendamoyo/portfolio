import React from 'react'
import styled from 'styled-components'

const Nav = styled.nav`
  background: white;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
`

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color:  black;
  cursor: pointer;
`

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
`

const NavLink = styled.a`
  color: black;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`

const ContactBtn = styled.a`
  background: #0052a3;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background: #003d7a;
  }
`

const Header = () => {
  const goToSection = (e, sectionName) => {
    e.preventDefault()
    const section = document.getElementById(sectionName)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <Nav>
      <Logo onClick={(e) => goToSection(e, 'hero')}>Brenda Moyo</Logo>
      <NavLinks>
        <NavLink href="#hero" onClick={(e) => goToSection(e, 'hero')}>Home</NavLink>
        <NavLink href="#about" onClick={(e) => goToSection(e, 'about')}>About</NavLink>
        <NavLink href="#services" onClick={(e) => goToSection(e, 'services')}>Services</NavLink>
        <NavLink href="#portfolio" onClick={(e) => goToSection(e, 'portfolio')}>Portfolio</NavLink>
        <NavLink href="#footer" onClick={(e) => goToSection(e, 'footer')}>Blog</NavLink>
      </NavLinks>
      <ContactBtn href="#cta" onClick={(e) => goToSection(e, 'cta')}>Contact</ContactBtn>
    </Nav>
  )
}

export default Header
