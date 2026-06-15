import React from 'react'
import styled from 'styled-components'

const TestimonialsSection = styled.section`
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

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
  width: 100%;

  @media (max-width: 968px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`

const TestimonialCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 16px;
  padding: 30px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  position: relative;
  overflow: hidden;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    border-color: rgba(56, 189, 248, 0.4);
    box-shadow: 0 10px 25px rgba(56, 189, 248, 0.1);
  }

  &::before {
    content: '"';
    position: absolute;
    top: 15px;
    right: 25px;
    font-size: 80px;
    color: rgba(56, 189, 248, 0.08);
    font-family: serif;
    line-height: 1;
  }
`

const QuoteText = styled.p`
  font-size: 15px;
  color: var(--text-muted);
  line-height: 1.7;
  margin-bottom: 25px;
  font-style: italic;
  position: relative;
  z-index: 2;
`

const ClientInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  padding-top: 15px;
`

const ClientName = styled.h4`
  font-size: 16px;
  font-weight: 600;
  color: var(--text-main);
`

const ClientRole = styled.span`
  font-size: 13px;
  color: #38bdf8; 
  font-weight: 500;
`

const ClientCompany = styled.span`
  font-size: 12px;
  color: var(--text-muted);
`

const Reviews = () => {
  return (
    <TestimonialsSection id="testimonials">
      <SubHeader>Client Validation</SubHeader>
      <SectionTitle>Enterprise <span>Impact</span></SectionTitle>

      <TestimonialsGrid>
        <TestimonialCard>
          <QuoteText>
            "The systemic architecture deployed transformed our transaction processing speeds entirely. 
            The interface update alone reduced onboarding conversion drop-off instantly."
          </QuoteText>
          <ClientInfo>
            <ClientName>Chief Operations Officer</ClientName>
            <ClientCompany>Apex Ledger Systems</ClientCompany>
          </ClientInfo>
        </TestimonialCard>

        <TestimonialCard>
          <QuoteText>
            "An aggressive eye for structural layouts. Delivered an incredibly fast front-end setup 
            that handles dynamic components flawlessly."
          </QuoteText>
          <ClientInfo>
            <ClientName>Marcus Locke</ClientName>
            <ClientRole>Director of Tech</ClientRole>
            <ClientCompany>Retail Core</ClientCompany>
          </ClientInfo>
        </TestimonialCard>

        <TestimonialCard>
          <QuoteText>
            "Exceptional product iteration framework. We managed to bypass weeks of planning overhead 
            due to the precise interface token blueprint provided."
          </QuoteText>
          <ClientInfo>
            <ClientName>Musah</ClientName>
            <ClientRole>Product Architect</ClientRole>
            <ClientCompany>Neural Hub</ClientCompany>
          </ClientInfo>
        </TestimonialCard>
      </TestimonialsGrid>
    </TestimonialsSection>
  )
}

export default Reviews