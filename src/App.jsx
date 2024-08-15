import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Features from './components/Features'
import Workflow from './components/Workflow'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl pt-20 px-6 mx-auto">
      <HeroSection/>
      <Features/>
      <Workflow/>
      <Pricing/>
      <Testimonials/>
      <Footer/>
      </div>
    </>
  )
}

export default App