import React from 'react'
import styled from 'styled-components'

const FooterBar = styled.footer`
  background: var(--bg-dark);
  border-top: 1px solid rgba(255, 255, 255, 0.06);
`

const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 30px 20px;
  }
`

const Copyright = styled.p`
  font-family: var(--font-body);
  font-size: 14px;
  color: var(--text-muted);
`

const FooterLinks = styled.div`
  display: flex;
  gap: 25px;
  flex-wrap: wrap;
  justify-content: center;
`

const FooterLink = styled.a`
  font-family: var(--font-heading);
  color: var(--text-muted);
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: var(--transition-smooth);

  &:hover {
    color: var(--secondary);
    transform: translateY(-1px);
  }
`

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <FooterBar id="footer">
      <FooterContainer>
        <Copyright>© {year} Brenda Moyo. All rights reserved.</Copyright>
        <FooterLinks>
          <FooterLink href="https://github.com/brendamoyo" target="_blank" rel="noopener noreferrer">GitHub</FooterLink>
          <FooterLink href="https://www.linkedin.com/in/brenda-moyo/" target="_blank" rel="noopener noreferrer">LinkedIn</FooterLink>
          <FooterLink href="https://twitter.com/brendamoyo" target="_blank" rel="noopener noreferrer">Twitter</FooterLink>
          <FooterLink href="https://www.brendamoyo.com/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</FooterLink>
        </FooterLinks>
      </FooterContainer>
    </FooterBar>
  )
}

export default Footer
