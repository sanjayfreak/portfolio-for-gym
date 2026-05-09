import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
import Program from './components/Program'
import Trainers from './components/Trainers'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div style={{ background: '#0A0A0A', minHeight: '100vh' }}>
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Program />
      <Trainers />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  )
}