import React from 'react'
import styled from 'styled-components'

const HeroSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 60px 40px;
  background: #f5f5f5;
  gap: 40px;
`

const LeftSide = styled.div`
  flex: 1;
`

const Title = styled.h1`
  font-size: 48px;
  color: black;
  margin-bottom: 20px;
`

const Description = styled.p`
  font-size: 16px;
  color: #333;
  line-height: 1.6;
  margin-bottom: 30px;
`

const BlueText = styled.span`
  color: black;
  font-weight: bold;
`

const HelloBtn = styled.a`
  background: #0052a3;
  color: white;
  padding: 12px 24px;
  border-radius: 5px;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
  display: inline-block;

  &:hover {
    background: #003d7a;
  }
`

const StatsBox = styled.div`
  background: white;
  border-radius: 10px;
  padding: 20px;
  margin-top: 40px;
  display: inline-block;
`

const StatNumber = styled.div`
  font-size: 32px;
  font-weight: bold;
  color: #0052a3;
`

const StatText = styled.div`
  font-size: 14px;
  color: #666;
`

const RightSide = styled.div`
  flex: 1;
  text-align: center;
`

const ProfileImg = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
`

const Hero = () => {
  const sayHello = (e) => {
    e.preventDefault()
    const contactSection = document.getElementById('cta')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }
  

  return (
    <HeroSection id="hero">
      <LeftSide>
        <Title>Hello, I'm<br />Brenda Moyo</Title>
        <Description>
          I'm a Freelance <BlueText>Full stacked Software Engineer</BlueText> and{' '}
          <BlueText>Developer</BlueText>. Im Brenda Moyo, a Software Developer based in
          Bulawayo, Zimbabwe. I strive to build immersive and beautiful web applications
          through carefully crafted code and user-centric design.
        </Description>
        <HelloBtn href="#cta" onClick={sayHello}>Say Hello!</HelloBtn>
       
      </LeftSide>
      <RightSide>
        <ProfileImg src="/dev.jpeg" alt="Brenda Moyo" />
      </RightSide>
    </HeroSection>
  )
}

export default Hero