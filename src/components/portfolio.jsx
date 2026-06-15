import React, { useState } from 'react'
import styled from 'styled-components'

const PortfolioSection = styled.section`
  padding: 100px 40px;
  background: var(--bg-dark);
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`

const TopRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 50px;
`

const SectionTitle = styled.h2`
  font-family: var(--font-heading);
  font-size: 38px;
  font-weight: 800;
  color: var(--text-main);
  margin-bottom: 8px;
  letter-spacing: -1px;
`

const SectionSubtitle = styled.p`
  font-family: var(--font-body);
  font-size: 16px;
  color: var(--text-muted);
  margin-bottom: 30px;
`

const FilterRow = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 40px;
  flex-wrap: wrap;
  justify-content: center;
`

const FilterTab = styled.button`
  font-family: var(--font-heading);
  background: #38bdf8;
  color: ${props => props.$active ? '#ffffff' : 'var(--text-muted)'};
  border: 1px solid ${props => props.$active ? 'transparent' : 'var(--border-card)'};
  padding: 8px 20px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition-smooth);

  &:hover {
    color: #ffffff;
    background: ${props => props.$active ? '' : 'rgba(56, 189, 248, 0.2)'};
    border-color: ${props => props.$active ? 'transparent' : 'rgba(56, 189, 248, 0.4)'};
  }
`

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`

const ProjectCard = styled.div`
  border-radius: 16px;
  overflow: hidden;
  background: var(--bg-card);
  border: 1px solid var(--border-card);
  transition: var(--transition-smooth);
  display: flex;
  flex-direction: column;
  height: 100%;
`

const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-bottom: 1px solid var(--border-card);
`

const ProjectImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const ProjectInfo = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

const ProjectName = styled.h3`
  font-family: var(--font-heading);
  font-size: 20px;
  font-weight: 700;
  color: var(--text-main);
  margin-bottom: 10px;
`

const ProjectDesc = styled.p`
  font-family: var(--font-body);
  font-size: 14px;
  color: var(--text-muted);
  line-height: 1.6;
  margin-bottom: 24px;
  flex-grow: 1;
`

const TechRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
`

const Tag = styled.span`
  background: rgba(56, 189, 248, 0.12);
  color: #7dd3fc;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  border: 1px solid rgba(56, 189, 248, 0.2);
`

const ActionsRow = styled.div`
  display: flex;
  gap: 12px;
`

const ActionLink = styled.a`
  font-family: var(--font-heading);
  font-size: 13px;
  font-weight: 600;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 6px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: var(--transition-smooth);
  flex: 1;
  justify-content: center;

  &.primary {
    background: var(--primary);
    color: #ffffff;
    box-shadow: 0 4px 10px rgba(56, 189, 248, 0.2);

    &:hover {
      background:#0284c7;
    }
  }

  &.secondary {
    background: transparent;
    color: var(--text-main);
    border: 1px solid rgba(255, 255, 255, 0.15);

    &:hover {
      background: rgba(255, 255, 255, 0.05);
      border-color: rgba(255, 255, 255, 0.25);
    }
  }
`

const Portfolio = () => {
  const [filter, setFilter] = useState('All')

  const projects = [
    {
      name: 'My-to-do-list-app',
      category: 'React',
      description: 'This was my first React project at Uncommon. It helps you write down tasks and tick them off when done. Nothing fancy but I was proud of it.',
      tech: 'React.js',
      github: 'https://github.com/brendamoyo/my-to-do-list-app.git',
      liveLink: 'https://my-to-do-list-app-eta.vercel.app/',
      image: '/todo.png'
    },
    {
      name: 'Form',
      category: 'React',
      description: 'Built this contact form as part of my learning at Uncommon. People can fill in their name, email and message then it gets sent somewhere.',
      tech: 'React.js',
      github: 'https://github.com/brendamoyo/form.git',
      liveLink: 'https://vercel.com/brenda-a-projects7/form-8ggg',
      image: '/forms.png'
    },
    {
      name: 'My Portfolio',
      category: 'React',
      description: 'The very site you are looking at right now! I built it from scratch at Uncommon to show off the projects I have been working on.',
      tech: 'React.js',
      github: 'https://github.com/brendamoyo/my-portfolio.git',
      liveLink: 'https://brendamoyo-portfolio.vercel.app/',
      image: '/portfolio.png'
    },
    {
      name: 'Weather App',
      category: 'JavaScript',
      description: 'I used an API to fetch weather data for any city you type in. It shows temperature and conditions. Was tricky getting the API to work at first.',
      tech: 'JavaScript',
      github: 'https://github.com/alwandemasie-code/weather-app.git',
      liveLink: 'https://weather-app-ten-gamma.vercel.app/',
      image: '/weather.png'
    },
    {
      name: 'Age Calculator',
      category: 'JavaScript',
      description: 'A small tool I made at Uncommon - you put in your birthday and it tells you how old you are in years, months and days. Simple but it works.',
      tech: 'JavaScript',
      github: 'https://github.com/alwandemasie-code/ageculculator.git',
      liveLink: 'https://age-calculator-nine-eta.vercel.app/',
      image: '/calculator.png'
    },
    {
      name: 'Calculator',
      category: 'JavaScript',
      description: 'A basic calculator that does addition, subtraction, multiplication and division. One of the first projects I coded at Uncommon.',
      tech: 'JavaScript',
      github: 'https://github.com/alwandemasie-code/Calculator.git',
      liveLink: 'https://calculator-six-phi-11.vercel.app/',
      image: '/calc.png'
    },
    {
      name: 'Student List',
      category: 'Tools',
      description: 'Made this to practice working with lists in JavaScript. You can add student names and remove them. We used similar ideas in class at Uncommon.',
      tech: 'HTML/CSS/JS',
      github: 'https://github.com/alwandemasie-code/student-register.git',
      liveLink: 'https://student-register-lake.vercel.app/',
      image: '/studentlist.png'
    },
    {
      name: 'Popup Message',
      category: 'Tools',
      description: 'A popup system I built to understand how modals work on websites. It shows messages when you click a button. Learned a lot from this one.',
      tech: 'HTML/CSS/JS',
      github: 'https://github.com/alwandemasie-code/pop_up_message.git',
      liveLink: 'https://pop-up-message-seven.vercel.app/',
      image: '/pop.png'
    },
    {
      name: 'My First Website',
      category: 'Tools',
      description: 'This is where it all started at Uncommon. My very first website using just HTML and CSS. It is simple but it reminds me how far I have come.',
      tech: 'HTML/CSS',
      github: 'https://github.com/alwandemasie-code/My-first-website.git',
      liveLink: 'https://my-first-website-eight-neon.vercel.app/',
      image: '/first_website.png'
    },
   
    
    
  ]

  const categories = ['All', 'React', 'JavaScript', 'Tools']

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter)

  return (
    <PortfolioSection id="portfolio">
      <TopRow>
        <SectionSubtitle>Featured Work</SectionSubtitle>
        <SectionTitle>Portfolio Projects</SectionTitle>
        <FilterRow>
          {categories.map((cat, i) => (
            <FilterTab 
              key={i} 
              $active={filter === cat} 
              onClick={() => setFilter(cat)}
            >
              {cat}
            </FilterTab>
          ))}
        </FilterRow>
      </TopRow>

      <ProjectsGrid>
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index}>
            <ImageContainer>
              <ProjectImg src={project.image} alt={project.name} />
            </ImageContainer>
            <ProjectInfo>
              <ProjectName>{project.name}</ProjectName>
              <ProjectDesc>{project.description}</ProjectDesc>
              <TechRow>
                <Tag>{project.tech}</Tag>
              </TechRow>
              <ActionsRow>
                <ActionLink href={project.github} target="_blank" rel="noopener noreferrer" className="secondary">
                  GitHub
                </ActionLink>
                {project.liveLink && (
                  <ActionLink href={project.liveLink} target="_blank" rel="noopener noreferrer" className="primary">
                    Live Demo
                  </ActionLink>
                )}
              </ActionsRow>
            </ProjectInfo>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </PortfolioSection>
  )
}

export default Portfolio