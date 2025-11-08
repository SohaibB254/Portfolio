import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/layout/Navbar'
import Skills from './pages/Skills'
import Footer from './components/layout/Footer'
import Projects from './pages/Projects'
import About from './pages/About'
import CustomCursor from './components/common/CustomCursor'
import ScrollToExplore from './components/layout/ScrollToExplore'

const App = () => {
  return (
 <>
 <CustomCursor/>
 <Navbar/>
 <ScrollToExplore/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/devskills' element={<Skills/>}/>
    <Route path='/projects' element={<Projects/>}/>
    <Route path='/about' element={<About/>}/>
      </Routes>
  <Footer/>
 </>
  )
}

export default App
