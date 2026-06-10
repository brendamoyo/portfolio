import React from 'react'
import styled from 'styled-components'

const AboutSection = styled.section`
  display: flex;
  gap: 40px;
  padding: 60px 40px;
  background: white;
`

const LeftCol = styled.div`
  flex: 1;
`

const RightCol = styled.div`
  flex: 1;
`

const SectionTitle = styled.h2`
  font-size: 36px;
  color: black;
  margin-bottom: 10px;
`

const SubTitle = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 20px;
`

const DownloadBtn = styled.a`
  background: #0052a3;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
  display: inline-block;
  margin-bottom: 30px;

  &:hover {
    background: #003d7a;
  }
`

const InfoRow = styled.div`
  background: #f5f5f5;
  padding: 10px 15px;
  margin-bottom: 8px;
  border-radius: 5px;
  font-size: 14px;
`

const InfoLabel = styled.span`
  font-weight: bold;
  color: black;
`

const BioText = styled.p`
  font-size: 15px;
  color: #333;
  line-height: 1.6;
  margin-bottom: 20px;
`

const Signature = styled.div`
  font-size: 22px;
  font-style: italic;
  color: black;
  margin-bottom: 30px;
`

const SkillsBox = styled.div`
  border-radius: 10px;
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
`

const SkillItem = styled.div`
  border-radius: 8px;
  padding: 15px;
  text-align: center;
`

const SkillPercent = styled.div`
  font-size: 28px;
  font-weight: bold;
  color: black;
`

const SkillName = styled.div`
  font-size: 13px;
  color: #666;
  margin-top: 5px;
`

const About = () => {
  const downloadCV = (e) => {
    e.preventDefault()
    const link = document.createElement('a')
    link.href = '/cv.pdf'
    link.download = 'Brenda_Moyo_CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <AboutSection id="about">
      <LeftCol>
        <SectionTitle>About Me</SectionTitle>
        <SubTitle>I like creating innovative digital solutions.</SubTitle>
        <DownloadBtn href="#" onClick={downloadCV}>Download CV</DownloadBtn>
        <InfoRow><InfoLabel>Age: </InfoLabel>22</InfoRow>
        <InfoRow><InfoLabel>Residence: </InfoLabel>Zimbabwe</InfoRow>
        <InfoRow><InfoLabel>Address: </InfoLabel>32919 Entumbane, Bulawayo, Zimbabwe</InfoRow>
        <InfoRow><InfoLabel>E-mail: </InfoLabel>alwandemasie@gmail.com</InfoRow>
        <InfoRow><InfoLabel>Phone: </InfoLabel>+263 717616608</InfoRow>
        <InfoRow><InfoLabel>Freelance: </InfoLabel>Available</InfoRow>
      </LeftCol>
      <RightCol>
        <BioText>
          I build innovative digital solutions that solve real-world problems. As a Software
          Developer polished through the rigorous program at Uncommon.org, I combine technical
          skills with a passion for continuous learning to build software that matters.
        </BioText>
        <Signature>Brenda Moyo</Signature>
        <SkillsBox>
          <SkillItem>
            <SkillPercent>50%</SkillPercent>
            <SkillName>Graphic Design</SkillName>
          </SkillItem>
          <SkillItem>
            <SkillPercent>75%</SkillPercent>
            <SkillName>Development</SkillName>
          </SkillItem>
          <SkillItem>
            <SkillPercent>38%</SkillPercent>
            <SkillName>Marketing Ideas</SkillName>
          </SkillItem>
          <SkillItem>
            <SkillPercent>63%</SkillPercent>
            <SkillName>Web Management</SkillName>
          </SkillItem>
        </SkillsBox>
      </RightCol>
    </AboutSection>
  )
}

export default About
