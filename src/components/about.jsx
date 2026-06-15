import React from 'react'
import styled, { keyframes } from 'styled-components'
import { FaDownload, FaCode, FaPaintBrush, FaBullseye, FaGlobe, FaGraduationCap, FaMapMarkerAlt } from 'react-icons/fa'


const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`

const AboutSection = styled.section`
  padding: 140px 20px 100px 20px;
  background: var(--bg-dark);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle at 30% 50%, rgba(56, 189, 248, 0.03) 0%, transparent 50%);
    pointer-events: none;
  }
`


const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  position: relative;
`


const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  width: 100%;
  align-items: start;
  animation: ${fadeInUp} 0.6s ease forwards;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 50px;
  }
`


const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  gap: 20px;
  padding: 40px;
  background: var(--bg-elevated);
  border-radius: 20px;
  border: 1px solid var(--border-card);
  position: relative;
  transition: background var(--transition-smooth), border-color var(--transition-smooth);

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: -1px;
    width: 3px;
    height: 80px;
    background: linear-gradient(to bottom, #38bdf8, transparent);
    border-radius: 2px;
  }

  @media (max-width: 900px) {
    padding: 30px;
    &::after { display: none; }
  }
`


const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 28px;
  padding: 40px;
  background: var(--bg-elevated);
  border-radius: 20px;
  border: 1px solid var(--border-card);
  transition: background var(--transition-smooth), border-color var(--transition-smooth);
`


const AboutHeader = styled.h2`
  font-size: 42px;
  color: var(--text-main);
  font-weight: 800;
  line-height: 1.2;
  position: relative;
  display: inline-block;

  span {
    color: #38bdf8; 
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 60px;
    height: 4px;
    background: #38bdf8;
    border-radius: 2px;
  }
`


const InfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--text-muted);
  font-size: 14px;

  svg {
    color: #38bdf8;
    font-size: 16px;
  }
`


const RoleSubTitle = styled.h3`
  font-size: 24px;
  color: var(--text-main);
  font-weight: 700;
  background: linear-gradient(135deg, #38bdf8, #7dd3fc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`


const BioText = styled.p`
  font-size: 15px;
  color: var(--text-muted);
  line-height: 1.9;
  position: relative;
  padding-left: 20px;
  border-left: 2px solid rgba(56, 189, 248, 0.3);
`


const ActionBtn = styled.a`
  background: linear-gradient(135deg, #38bdf8, #0284c7);
  color: white;
  padding: 14px 40px;
  border-radius: 50px;
  text-decoration: none;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  box-shadow: 0 4px 20px rgba(56, 189, 248, 0.4);
  transition: all 0.3s ease;

  svg {
    font-size: 16px;
  }

  &:hover {
    box-shadow: 0 8px 30px rgba(56, 189, 248, 0.5);
    background: linear-gradient(135deg, #0284c7, #38bdf8);
  }
`


const SkillsHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  margin-bottom: 5px;
`

const SkillsTitle = styled.h4`
  font-size: 26px;
  color: var(--text-main);
  font-weight: 700;
  
  span {
    color: #38bdf8;
  }
`

const SkillsBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 22px;
`


const SkillItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-radius: 12px;
  padding: 18px 22px;
  background: rgba(255, 255, 255, 0.02); 
  border: 1px solid rgba(255, 255, 255, 0.06);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(56, 189, 248, 0.05);
    border-color: rgba(56, 189, 248, 0.3);
    box-shadow: 0 4px 20px rgba(56, 189, 248, 0.1);
  }
`

const SkillTopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const SkillNameWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

const SkillIcon = styled.span`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: rgba(56, 189, 248, 0.1);
  color: #38bdf8;
  font-size: 14px;
`

const SkillName = styled.div`
  font-size: 13px;
  color: var(--text-muted);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
`

const SkillPercent = styled.div`
  font-size: 18px;
  font-weight: 800;
  color: #38bdf8;
`

const ProgressBarBg = styled.div`
  width: 100%;
  height: 6px;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 3px;
  overflow: hidden;
`

const ProgressBarFill = styled.div`
  height: 100%;
  border-radius: 3px;
  background: linear-gradient(90deg, #38bdf8, #7dd3fc);
  width: ${({ percent }) => percent};
  transition: width 1s ease;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 10px;
    height: 100%;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 3px;
  }
`

const skillIcons = {
  'Graphic Design': <FaPaintBrush />,
  'Development': <FaCode />,
  'Marketing Ideas': <FaBullseye />,
  'Web Management': <FaGlobe />,
}

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

  const skills = [
    { name: 'Graphic Design', percent: '50%' },
    { name: 'Development', percent: '75%' },
    { name: 'Marketing Ideas', percent: '38%' },
    { name: 'Web Management', percent: '63%' },
  ]

  return (
    <AboutSection id="about">
      <Container>
        <ContentWrapper>
          <LeftColumn>
            <AboutHeader>About <span>Me</span></AboutHeader>
            
            <RoleSubTitle>Fullstack Web Developer</RoleSubTitle>
            
            <InfoRow>
              <FaGraduationCap />
              <span>Uncommon.org Graduate</span>
              <FaMapMarkerAlt style={{ marginLeft: '15px' }} />
              <span>Available for work</span>
            </InfoRow>
            
            <BioText>
              I build innovative digital solutions that solve real-world problems. As a Software
              Developer polished through the rigorous program at Uncommon.org, I combine technical
              skills with a passion for continuous learning to build software that matters.
            </BioText>
            
            <ActionBtn href="#download" onClick={downloadCV}>
              <FaDownload /> Download CV
            </ActionBtn>
          </LeftColumn>
          
          <RightColumn>
            <SkillsHeader>
              <SkillsTitle>My <span>Skills</span></SkillsTitle>
            </SkillsHeader>
            
            <SkillsBox>
              {skills.map((skill) => (
                <SkillItem key={skill.name}>
                  <SkillTopRow>
                    <SkillNameWrapper>
                      <SkillIcon>{skillIcons[skill.name]}</SkillIcon>
                      <SkillName>{skill.name}</SkillName>
                    </SkillNameWrapper>
                    <SkillPercent>{skill.percent}</SkillPercent>
                  </SkillTopRow>
                  <ProgressBarBg>
                    <ProgressBarFill percent={skill.percent} />
                  </ProgressBarBg>
                </SkillItem>
              ))}
            </SkillsBox>
          </RightColumn>
        </ContentWrapper>
      </Container>
    </AboutSection>
  )
}

export default About