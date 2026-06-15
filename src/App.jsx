import React from 'react'
import { ThemeProvider } from './context/ThemeContext'
import Header from './components/header'
import Hero from './components/hero'
import About from './components/about'
import Services from './components/services'
import Portfolio from './components/portfolio'
import Reviews from './components/reviews'
import CTA from './components/cta'
import Footer from './components/footer'

const App = () => {
  return (
    <ThemeProvider>
      <Header />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Reviews />
      <CTA />
      <Footer />
    </ThemeProvider>
  )
}

export default App