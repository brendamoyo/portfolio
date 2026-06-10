import React from 'react'
import styled from 'styled-components'

const ReviewSection = styled.section`
  padding: 100px 40px;
  background: var(--bg-dark);
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 60px 20px;
  }
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
  margin-bottom: 50px;
`

const ReviewsRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  text-align: left;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`

const BigReview = styled.div`
  background: linear-gradient(135deg, rgba(79, 70, 229, 0.15) 0%, rgba(139, 92, 246, 0.1) 100%);
  border: 1px solid rgba(79, 70, 229, 0.25);
  border-radius: 16px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);

  &::after {
    content: '"';
    position: absolute;
    top: 10px;
    right: 30px;
    font-size: 180px;
    font-family: serif;
    color: rgba(79, 70, 229, 0.1);
    line-height: 1;
    pointer-events: none;
  }
`

const SmallReviews = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const SmallReview = styled.div`
  background: var(--bg-card);
  border: 1px solid var(--border-card);
  border-radius: 16px;
  padding: 30px;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  transition: var(--transition-smooth);

  &:hover {
    transform: translateY(-4px);
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(255, 255, 255, 0.12);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  }
`

const Quote = styled.p`
  font-family: var(--font-body);
  font-size: 16px;
  line-height: 1.7;
  color: var(--text-main);
  margin-bottom: 24px;
  position: relative;
  z-index: 2;
`

const AuthorName = styled.div`
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 15px;
  color: var(--text-main);
`

const AuthorJob = styled.div`
  font-family: var(--font-body);
  font-size: 13px;
  color: var(--text-muted);
  margin-top: 2px;
`

const Reviews = () => {
  return (
    <ReviewSection>
      <SectionSubtitle>Client Validation</SectionSubtitle>
      <SectionTitle>Enterprise Impact</SectionTitle>
      <ReviewsRow>
        <BigReview>
          <Quote>
            "The systemic architecture deployed transformed our transaction processing
            speeds entirely. The interface update alone reduced onboarding conversion
            drop-off instantly."
          </Quote>
          <AuthorName>Chief Operations Officer</AuthorName>
          <AuthorJob>Apex Ledger Systems</AuthorJob>
        </BigReview>
        <SmallReviews>
          <SmallReview>
            <Quote>
              "An aggressive eye for structural layouts. Delivered an incredibly fast
              front-end setup that handles dynamic components flawlessly."
            </Quote>
            <AuthorName>Marcus Locke</AuthorName>
            <AuthorJob>Director of Tech, Retail Core</AuthorJob>
          </SmallReview>
          <SmallReview>
            <Quote>
              "Exceptional product iteration framework. We managed to bypass weeks of
              planning overhead due to the precise interface token blueprint provided."
            </Quote>
            <AuthorName>Sarah Jenkins</AuthorName>
            <AuthorJob>Product Architect, Neural Hub</AuthorJob>
          </SmallReview>
        </SmallReviews>
      </ReviewsRow>
    </ReviewSection>
  )
}

export default Reviews
