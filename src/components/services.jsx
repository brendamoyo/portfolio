import React from 'react'
import styled from 'styled-components'

const ServicesSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 20px;
  background: var(--bg-dark);
  max-width: 1200px;
  margin: 0 auto;
`

const SubHeader = styled.span`
  font-size: 14px;
  color: #38bdf8;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 600;
  margin-bottom: 8px;
`

const SectionTitle = styled.h2`
  font-size: 38px;
  color: var(--text-main);
  margin-bottom: 45px;
  font-weight: 700;
  text-align: center;

  span {
    color: #38bdf8;
  }
`

// Clean 2-column layout for Frontend vs Backend
const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  width: 100%;
  max-width: 900px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const ServiceCard = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  padding: 40px 30px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  text-align: center;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    border-color: rgba(56, 189, 248, 0.4);
    box-shadow: 0 10px 25px rgba(56, 189, 248, 0.1);
  }
`

const CardTitle = styled.h3`
  font-size: 22px;
  font-weight: 700;
  color: var(--text-main);
  margin-bottom: 15px;
`

const CardDescription = styled.p`
  font-size: 15px;
  color: var(--text-muted);
  line-height: 1.7;
`

const Services = () => {
  return (
    <ServicesSection id="services">
      <SectionTitle>What I <span>Do Best</span></SectionTitle>

      <ServicesGrid>
        <ServiceCard>
          <CardTitle>Frontend Development</CardTitle>
          <CardDescription>
            Deploying pixel-perfect, highly responsive layouts built with modern component architectures like React, Vite, and styled-components. Focused on seamless performance tuning, modular structure, and clean user flows.
          </CardDescription>
        </ServiceCard>

        <ServiceCard>
          <CardTitle>Backend Development</CardTitle>
          <CardDescription>
            Architecting robust server-side logic, managing relational and non-relational database models, and constructing highly performant API endpoints to handle dynamic ecosystem scaling with structural integrity.
          </CardDescription>
        </ServiceCard>
      </ServicesGrid>
    </ServicesSection>
  )
}

export default Services