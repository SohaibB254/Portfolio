import React from 'react'
import Hero from '../components/sections/Hero'
import Shapes from '../components/layout/Shapes'
import Skills from '../components/sections/Skills'
import Projects from '../components/sections/Projects'
import Services from '../components/sections/Services'
import About from '../components/sections/About'
import Footer from '../components/layout/Footer'

const Home = () => {
  return (
    <div className='relative'>
        <Hero/>
        {/* Abstract Shapes */}
        <Shapes/>
        <Skills/>
        <Projects/>
        <Services/>
        <About/>
        <Footer/>
    </div>
  )
}

export default Home
