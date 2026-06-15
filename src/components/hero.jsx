import React from 'react'
import styled from 'styled-components'

const HeroSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
  padding: 100px 40px;
  background: var(--bg-dark);
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 968px) {
    flex-direction: column-reverse; 
    text-align: center;
    padding: 60px 20px;
  }
`

const TextContainer = styled.div`
  flex: 1.2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 968px) {
    align-items: center;
  }
`


const WelcomeTag = styled.span`
  font-size: 14px;
  color: #38bdf8; 
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: 700;
  margin-bottom: 12px;
`


const MainHeading = styled.h1`
  font-size: 52px;
  font-weight: 800;
  color: var(--text-main);
  line-height: 1.2;
  margin-bottom: 15px;

  span {
    color: #38bdf8; 
  }

  @media (max-width: 480px) {
    font-size: 40px;
  }
`

const SubRole = styled.h2`
  font-size: 20px;
  color: #38bdf8;
  font-weight: 600;
  margin-bottom: 20px;
`

const BioDescription = styled.p`
  font-size: 16px;
  color: var(--text-muted);
  line-height: 1.7;
  margin-bottom: 35px;
  max-width: 580px;
`


const ClientCTA = styled.a`
  background: #38bdf8;
  color: white;
  padding: 14px 40px;
  border-radius: 30px; 
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  display: inline-block;
  box-shadow: 0 4px 20px rgba(56, 189, 248, 0.3);
  transition: background 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    background: #0284c7;
    box-shadow: 0 8px 25px rgba(56, 189, 248, 0.5);
  }
`


const ImageWrapper = styled.div`
  flex: 0.8;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 350px;
  height: 350px;

  
  &::before {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    border-radius: 50%;
    background: radial-gradient(circle, #38bdf8 0%, transparent 75%);
    z-index: 1;
    opacity: 0.5;
    filter: blur(12px);
  }

  @media (max-width: 480px) {
    width: 280px;
    height: 280px;
  }
`

const CircularImage = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  object-position: top; 
  border: 4px solid #38bdf8; 
  z-index: 2;
  background: #111; 
`


const Hero = () => {
  return (
    <HeroSection id="home">
      <TextContainer>
        <WelcomeTag>Hello!</WelcomeTag>
        <MainHeading>I'm <span>Brenda Moyo</span></MainHeading>
        <SubRole>Fullstake Web Developer</SubRole>
        <BioDescription>
          Based in Bulawayo, Zimbabwe, I strive to build immersive and beautiful web 
          applications through carefully crafted code and user-centric design layouts.
        </BioDescription>
        <ClientCTA href="#contact">contact me</ClientCTA>
      </TextContainer>

      
      <ImageWrapper>
        <CircularImage src="/brenda.jpeg" alt="Brenda Moyo" />
      </ImageWrapper>
    </HeroSection>
  )
}

export default Hero