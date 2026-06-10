import React from 'react'
import styled from 'styled-components'

const ServicesSection = styled.section`
  padding: 60px 40px;
  background: #f5f5f5;
  text-align: center;
`

const SectionTitle = styled.h2`
  font-size: 36px;
  color: black;
  margin-bottom: 10px;
`

const SectionSubtitle = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 40px;
`

const CardsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`

const ServiceCard = styled.div`
  background: white;
  border-radius: 10px;
  padding: 30px 20px;
`

const IconBox = styled.div`
  font-size: 32px;
  margin-bottom: 15px;
`

const CardTitle = styled.h3`
  font-size: 18px;
  color: black;
  margin-bottom: 10px;
`

const CardText = styled.p`
  font-size: 14px;
  color: #666;
  line-height: 1.5;
`

const Services = () => {
  return (
    <ServicesSection id="services">
      <SectionTitle>What I Do Best</SectionTitle>
      <CardsRow>
        <ServiceCard>
          
          <CardTitle>UI/UX Interface Design</CardTitle>
          <CardText>
            Architecting high-fidelity mockups, complex layout systems, user flow
            frameworks, and digital prototypes.
          </CardText>
        </ServiceCard>
        <ServiceCard>
          <CardTitle>Engineered Frontend Systems</CardTitle>
          <CardText>
            Deploying pixel-perfect responsive layouts built with modern component
            architectures and seamless performance tuning.
          </CardText>
        </ServiceCard>
        <ServiceCard>
          <CardTitle>Growth & Marketing Strategy</CardTitle>
          <CardText>
            Formulating go-to-market data models, landing page optimization flows,
            and customer acquisition funnels.
          </CardText>
        </ServiceCard>
        <ServiceCard>
          <CardTitle>Full Product Management</CardTitle>
          <CardText>
            Overseeing digital products from competitive analysis and system architecture
            up through production launch.
          </CardText>
        </ServiceCard>
      </CardsRow>
    </ServicesSection>
  )
}

export default Services