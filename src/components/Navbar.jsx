import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_LINKS = ['Home', 'About', 'Programs', 'Trainers', 'Pricing', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const go = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          padding: '1rem 2rem',
          background: scrolled ? 'rgba(10,10,10,0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(212,160,23,0.1)' : 'none',
          transition: 'all 0.5s ease',
        }}
      >
        <div style={{
          maxWidth: '1200px', margin: '0 auto',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          {/* Logo */}
          <motion.button
            onClick={() => go('home')}
            whileHover={{ scale: 1.03 }}
            style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '1px' }}
          >
            <span style={{ fontFamily: '"Bebas Neue"', fontSize: '1.9rem', letterSpacing: '0.08em', color: '#F5F0E8' }}>IRON</span>
            <span style={{ fontFamily: '"Bebas Neue"', fontSize: '1.9rem', letterSpacing: '0.08em', color: '#D4A017' }}>FORGE</span>
            <motion.span
              animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{ width: 7, height: 7, borderRadius: '50%', background: '#D4A017', marginLeft: 5, marginTop: 4, display: 'inline-block' }}
            />
          </motion.button>

          {/* Desktop links */}
          <ul style={{ display: 'flex', gap: '2.5rem', listStyle: 'none', padding: 0, margin: 0 }} className="nav-desktop">
            {NAV_LINKS.map((link, i) => (
              <motion.li
                key={link}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.07, duration: 0.5 }}
              >
                <button
                  onClick={() => go(link)}
                  onMouseEnter={e => e.currentTarget.querySelector('span').style.width = '100%'}
                  onMouseLeave={e => e.currentTarget.querySelector('span').style.width = '0%'}
                  style={{
                    background: 'none', border: 'none', cursor: 'pointer',
                    fontFamily: '"Outfit"', fontSize: '0.72rem',
                    letterSpacing: '0.22em', textTransform: 'uppercase',
                    color: 'rgba(245,240,232,0.7)', padding: '4px 0',
                    position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center',
                    transition: 'color 0.3s',
                  }}
                  onMouseOver={e => e.currentTarget.style.color = '#D4A017'}
                  onMouseOut={e => e.currentTarget.style.color = 'rgba(245,240,232,0.7)'}
                >
                  {link}
                  <span style={{
                    display: 'block', height: '1px', background: '#D4A017',
                    width: '0%', transition: 'width 0.3s ease',
                    position: 'absolute', bottom: 0, left: 0,
                  }} />
                </button>
              </motion.li>
            ))}
          </ul>

          {/* CTA */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            onClick={() => go('pricing')}
            whileHover={{ scale: 1.04, backgroundColor: '#D4A017', color: '#0A0A0A' }}
            whileTap={{ scale: 0.97 }}
            style={{
              background: 'transparent', border: '1px solid #D4A017',
              color: '#D4A017', cursor: 'pointer',
              fontFamily: '"Outfit"', fontWeight: 700,
              fontSize: '0.72rem', letterSpacing: '0.18em',
              textTransform: 'uppercase', padding: '0.6rem 1.5rem',
              transition: 'all 0.3s ease',
            }}
            className="nav-desktop"
          >
            Start Today
          </motion.button>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: 5, padding: 4 }}
            className="nav-mobile"
          >
            <motion.span animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }} style={{ width: 24, height: 2, background: '#D4A017', display: 'block', transformOrigin: 'center', transition: 'background 0.3s' }} />
            <motion.span animate={open ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }} style={{ width: 24, height: 2, background: '#D4A017', display: 'block' }} />
            <motion.span animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }} style={{ width: 24, height: 2, background: '#D4A017', display: 'block', transformOrigin: 'center' }} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            style={{
              position: 'fixed', top: '64px', left: 0, right: 0, zIndex: 99,
              background: 'rgba(10,10,10,0.97)', backdropFilter: 'blur(20px)',
              borderBottom: '1px solid rgba(212,160,23,0.15)',
              overflow: 'hidden',
            }}
          >
            <div style={{ padding: '1.5rem 2rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => go(link)}
                  style={{
                    background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left',
                    fontFamily: '"Outfit"', fontSize: '0.85rem',
                    letterSpacing: '0.2em', textTransform: 'uppercase',
                    color: 'rgba(245,240,232,0.75)', padding: '0.8rem 0',
                    borderBottom: '1px solid rgba(212,160,23,0.07)',
                    transition: 'color 0.3s',
                  }}
                  onMouseOver={e => e.currentTarget.style.color = '#D4A017'}
                  onMouseOut={e => e.currentTarget.style.color = 'rgba(245,240,232,0.75)'}
                >
                  {link}
                </motion.button>
              ))}
              <button
                onClick={() => go('pricing')}
                style={{
                  marginTop: '1rem', background: '#D4A017', color: '#0A0A0A',
                  border: 'none', cursor: 'pointer', fontFamily: '"Outfit"',
                  fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.15em',
                  textTransform: 'uppercase', padding: '0.9rem',
                }}
              >
                Start Today
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .nav-desktop { }
        .nav-mobile { display: none; }
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile { display: flex !important; }
        }
      `}</style>
    </>
  )
}