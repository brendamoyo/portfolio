import React from 'react'
import styled from 'styled-components'

const CTASection = styled.section`
  padding: 100px 40px;
  background: var(--bg-dark);
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`

const CTABox = styled.div`
  background: var(--bg-card);
  border: 1px solid var(--border-card);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-radius: 20px;
  padding: 60px;
  display: flex;
  gap: 60px;
  position: relative;
  overflow: hidden;

  
  &::before {
    content: '';
    position: absolute;
    bottom: -150px;
    right: -150px;
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%);
    z-index: 1;
    pointer-events: none;
  }

  @media (max-width: 968px) {
    flex-direction: column;
    padding: 40px 24px;
    gap: 40px;
  }
`

const LeftSide = styled.div`
  flex: 1;
  z-index: 2;
`

const RightSide = styled.div`
  flex: 1.1;
  z-index: 2;
`

const CTATitle = styled.h2`
  font-family: var(--font-heading);
  font-size: 38px;
  font-weight: 800;
  color: var(--text-main);
  margin-bottom: 20px;
  letter-spacing: -1px;
  line-height: 1.2;
`

const CTAText = styled.p`
  font-family: var(--font-body);
  font-size: 16px;
  line-height: 1.7;
  color: var(--text-muted);
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`

const FormInput = styled.input`
  font-family: var(--font-body);
  width: 100%;
  padding: 14px 18px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  color: var(--text-main);
  font-size: 14px;
  outline: none;
  transition: var(--transition-smooth);

  &::placeholder {
    color: var(--text-dark);
  }

  &:focus {
    background: rgba(255, 255, 255, 0.05);
    border-color: var(--primary);
    box-shadow: 0 0 15px rgba(79, 70, 229, 0.15);
  }
`

const FormTextarea = styled.textarea`
  font-family: var(--font-body);
  width: 100%;
  padding: 14px 18px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  color: var(--text-main);
  font-size: 14px;
  outline: none;
  resize: vertical;
  transition: var(--transition-smooth);

  &::placeholder {
    color: var(--text-dark);
  }

  &:focus {
    background: rgba(255, 255, 255, 0.05);
    border-color: var(--primary);
    box-shadow: 0 0 15px rgba(79, 70, 229, 0.15);
  }
`

const SubmitBtn = styled.button`
  font-family: var(--font-heading);
  background: blue;
  color: white;
  padding: 14px 28px;
  border: none;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition-smooth);
  box-shadow: 0 4px 15px rgba(79, 70, 229, 0.2);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(79, 70, 229, 0.4);
  }

  &:active {
    transform: translateY(0);
  }
`

const CTA = () => {
  return (
    <CTASection id="cta">
      <CTABox>
        <LeftSide>
          <CTATitle>Let's build something legendary.</CTATitle>
          <CTAText>
            Currently accepting high-impact contract roles, dedicated engineering
            positions, and elite interface design overhaul projects. Drop me a line
            and let's scale your metrics.
          </CTAText>
        </LeftSide>
        <RightSide>
          <StyledForm
            action="https://formsubmit.co/66bb05fb638f956270b359a6cea32587"
            method="POST"
          >
            <FormInput type="text" name="name" placeholder="Your Name" required />
            <FormInput type="email" name="email" placeholder="Your Email" required />
            <FormTextarea name="message" placeholder="Your Message" rows="4" required />
            <SubmitBtn type="submit">Send Message</SubmitBtn>
          </StyledForm>
        </RightSide>
      </CTABox>
    </CTASection>
  )
}

export default CTA
