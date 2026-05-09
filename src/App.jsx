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
  const [loaded, setLoaded] = useState(false)

  return (
    <div style={{ background: '#0A0A0A', minHeight: '100vh' }}>
      <AnimatePresence>
        {!loaded && (
          <Loader key="loader" onComplete={() => setLoaded(true)} />
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ duration: 0.8, ease: 'easeIn' }}
        style={{ visibility: loaded ? 'visible' : 'hidden' }}
      >
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
      </motion.div>
    </div>
  )
}