import React, { useState } from 'react'
import styled from 'styled-components'
import { Box, TextField, Button, Typography, Fade, Grow, Zoom, Slide } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import EmailIcon from '@mui/icons-material/Email'
import LocationOnIcon from '@mui/icons-material/LocationOn'

const CTASection = styled.section`
  padding: 100px 40px;
  background: var(--bg-dark);
  max-width: 1200px;
  margin: 0 auto;
  transition: background var(--transition-smooth);

  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`

const CTABox = styled.div`
  background: var(--bg-elevated);
  border: 1px solid var(--border-card);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-radius: 20px;
  padding: 60px;
  display: flex;
  gap: 60px;
  position: relative;
  overflow: hidden;
  transition: background var(--transition-smooth), border-color var(--transition-smooth);

  &::before {
    content: '';
    position: absolute;
    bottom: -150px;
    right: -150px;
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba(56, 189, 248, 0.12) 0%, transparent 70%);
    z-index: 1;
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    top: -80px;
    left: -80px;
    width: 200px;
    height: 200px;
    background: radial-gradient(circle, rgba(56, 189, 248, 0.06) 0%, transparent 70%);
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
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const RightSide = styled.div`
  flex: 1.1;
  z-index: 2;
`

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 18px;
  color: var(--text-muted);
  font-size: 15px;

  svg {
    color: #38bdf8;
    font-size: 22px;
  }
`

const StyledTextField = styled(TextField)`
  && {
    margin-bottom: 16px;

    .MuiOutlinedInput-root {
      background: rgba(255, 255, 255, 0.03);
      border-radius: 10px;
      color: var(--text-main);
      transition: all 0.3s ease;

      fieldset {
        border-color: rgba(255, 255, 255, 0.1);
        transition: border-color 0.3s ease;
      }

      &:hover fieldset {
        border-color: rgba(56, 189, 248, 0.4);
      }

      &.Mui-focused fieldset {
        border-color: #38bdf8;
        border-width: 2px;
      }

      &.Mui-focused {
        background: rgba(255, 255, 255, 0.05);
      }
    }

    .MuiInputLabel-root {
      color: var(--text-dark);
      font-family: var(--font-body);
      transition: color 0.3s ease;

      &.Mui-focused {
        color: #38bdf8;
      }
    }

    .MuiInputLabel-shrink {
      background: transparent;
    }

    .MuiOutlinedInput-input {
      padding: 16px 18px;
      font-size: 14px;
    }

    .MuiInputBase-input::placeholder {
      color: var(--text-dark);
      opacity: 1;
    }

    &.message-field .MuiOutlinedInput-root {
      padding: 0;
    }
  }
`

const StyledButton = styled(Button)`
  && {
    background: linear-gradient(135deg, #38bdf8, #0284c7);
    color: white;
    padding: 14px 32px;
    border-radius: 12px;
    font-size: 15px;
    font-weight: 700;
    text-transform: none;
    font-family: var(--font-heading);
    box-shadow: 0 4px 20px rgba(56, 189, 248, 0.3);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
      transition: left 0.5s ease;
    }

    &:hover {
      background: linear-gradient(135deg, #0284c7, #38bdf8);
      box-shadow: 0 8px 30px rgba(56, 189, 248, 0.5);

      &::after {
        left: 100%;
      }
    }

    &:active {
      transform: translateY(0);
    }

    .MuiButton-endIcon {
      margin-left: 10px;
    }
  }
`

const CTA = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    form.submit()
  }

  return (
    <CTASection id="contact">
      <Fade in timeout={800}>
        <CTABox>
          <LeftSide>
            <Zoom in timeout={1000}>
              <Box>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 800,
                    color: 'var(--text-main)',
                    fontSize: { xs: '30px', md: '38px' },
                    letterSpacing: '-1px',
                    lineHeight: 1.2,
                    mb: 2,
                    fontFamily: 'var(--font-heading)',
                  }}
                >
                  Let's build something{' '}
                  <Box component="span" sx={{ color: '#38bdf8' }}>
                    legendary.
                  </Box>
                </Typography>
              </Box>
            </Zoom>

            <Grow in timeout={1200}>
              <Box>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'var(--text-muted)',
                    lineHeight: 1.7,
                    mb: 3,
                    fontSize: '15px',
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  Currently accepting high-impact contract roles, dedicated engineering
                  positions, and elite interface design overhaul projects. Drop me a line
                  and let's scale your metrics.
                </Typography>

                <Slide direction="up" in timeout={1400}>
                  <Box>
                    <InfoItem>
                      <EmailIcon />
                      <span>brendamoyo@email.com</span>
                    </InfoItem>
                    <InfoItem>
                      <LocationOnIcon />
                      <span>Bulawayo, Zimbabwe</span>
                    </InfoItem>
                  </Box>
                </Slide>
              </Box>
            </Grow>
          </LeftSide>

          <RightSide>
            <Slide direction="left" in timeout={1000}>
              <Box>
                <form
                  action="https://formsubmit.co/66bb05fb638f956270b359a6cea32587"
                  method="POST"
                  onSubmit={handleSubmit}
                >
                  <StyledTextField
                    fullWidth
                    label="Your Name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    variant="outlined"
                    size="medium"
                    InputLabelProps={{ shrink: true }}
                    placeholder="John Doe"
                  />

                  <StyledTextField
                    fullWidth
                    label="Your Email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    variant="outlined"
                    size="medium"
                    InputLabelProps={{ shrink: true }}
                    placeholder="john@example.com"
                  />

                  <StyledTextField
                    fullWidth
                    label="Your Message"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    variant="outlined"
                    size="medium"
                    multiline
                    rows={4}
                    className="message-field"
                    InputLabelProps={{ shrink: true }}
                    placeholder="Tell me about your project..."
                  />

                  <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <StyledButton
                      type="submit"
                      variant="contained"
                      endIcon={<SendIcon />}
                    >
                      Send Message
                    </StyledButton>
                  </Box>
                </form>
              </Box>
            </Slide>
          </RightSide>
        </CTABox>
      </Fade>
    </CTASection>
  )
}

export default CTA