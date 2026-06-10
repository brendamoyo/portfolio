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
  background: black;
  color: ${props => props.$active ? 'white' : 'var(--text-muted)'};
  border: 1px solid ${props => props.$active ? 'transparent' : 'var(--border-card)'};
  padding: 8px 20px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition-smooth);

  &:hover {
    color: grey;
    background: ${props => props.$active ? '' : 'rgba(255, 255, 255, 0.08)'};
    border-color: ${props => props.$active ? 'transparent' : 'rgba(255, 255, 255, 0.2)'};
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
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
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
  transition: transform 0.5s ease;

  ${ProjectCard}:hover & {
    transform: scale(1.08);
  }
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
  background: rgba(79, 70, 229, 0.12);
  color: #a5b4fc;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  border: 1px solid rgba(79, 70, 229, 0.2);
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
    background:blue;
    color: white;
    box-shadow: 0 4px 10px rgba(79, 70, 229, 0.2);

    &:hover {
      background: black;
      transform : translateY(-2px)
    }
  }

  &.secondary {
    background: transparent;
    color: var(--text-main);
    border: 1px solid rgba(255, 255, 255, 0.15);

    &:hover {
      background: rgba(255, 255, 255, 0.05);
      border-color: rgba(255, 255, 255, 0.25);
      transform: translateY(-2px);
    }
  }
`

const Portfolio = () => {
  const [filter, setFilter] = useState('All')

  const projects = [
    {
      name: 'My-to-do-list-app',
      category: 'React',
      description: 'A simple and responsive productivity web application built with React.js.',
      tech: 'React.js',
      github: 'https://github.com/brendamoyo/my-to-do-list-app.git',
      liveLink: 'https://my-to-do-list-app-eta.vercel.app/',
      image: '/todo.png'
    },
    {
      name: 'Form',
      category: 'React',
      description: 'A modern React contact form built with Styled Components and Web3Forms.',
      tech: 'React.js',
      github: 'https://github.com/brendamoyo/form.git',
      liveLink: 'https://vercel.com/brenda-a-projects7/form-8ggg',
      image: '/forms.png'
    },
    {
      name: 'my-portfolio',
      category: 'React',
      description: 'Professional dark-themed React portfolio engineered for visual excellence.',
      tech: 'React.js',
      github: 'https://github.com/brendamoyo/my-portfolio.git',
      image: '/portfolio.png'
    },
    {
      name: 'Weather app',
      category: 'JavaScript',
      description: 'A weather forecasting web application pulling data from external APIs.',
      tech: 'JavaScript',
      github: 'https://github.com/alwandemasie-code/weather-app.git',
      image: '/weather.png'
    },
    {
      name: 'age_calculator',
      category: 'JavaScript',
      description: 'An interactive date calculation tool designed with pixel-perfect layouts.',
      tech: 'JavaScript',
      github: 'https://github.com/alwandemasie-code/ageculculator.git',
      image: '/calculator.png'
    },
    {
      name: 'calculator',
      category: 'JavaScript',
      description: 'A fully functional desktop calculator utility with responsive layout grid.',
      tech: 'JavaScript',
      github: 'https://github.com/alwandemasie-code/Calculator.git',
      image: '/calc.png'
    },
    {
      name: 'studentlist',
      category: 'Tools',
      description: 'A student record registration dashboard for educational data management.',
      tech: 'HTML/CSS/JS',
      github: 'https://github.com/alwandemasie-code/student-register.git',
      image: '/studentlist.png'
    },
    {
      name: 'popup message',
      category: 'Tools',
      description: 'A reusable modal, alert, and popup system with dynamic animation triggers.',
      tech: 'HTML/CSS/JS',
      github: 'https://github.com/alwandemasie-code/pop_up_message.git',
      image: '/pop.png'
    },
    {
      name: 'My first website',
      category: 'Tools',
      description: 'A clean introductory marketing website built using fundamental styling standards.',
      tech: 'HTML/CSS',
      github: 'https://github.com/alwandemasie-code/My-first-website.git',
      image: '/first_website.png'
    }
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