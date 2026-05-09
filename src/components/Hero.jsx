import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const particles = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 4 + 2,
  duration: Math.random() * 6 + 6,
  delay: Math.random() * 4,
}))

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const fn = (e) => setMousePos({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight })
    window.addEventListener('mousemove', fn)
    return () => window.removeEventListener('mousemove', fn)
  }, [])

  return (
    <section id="home" style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

      {/* Video */}
      <video
        autoPlay muted loop playsInline
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}
        src="/gym.mp4"
      />

      {/* STRONGER dark overlay — this is the key fix */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.55) 30%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,0.92) 100%)'
      }} />

      {/* Side vignettes */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'linear-gradient(to right, rgba(0,0,0,0.6) 0%, transparent 25%, transparent 75%, rgba(0,0,0,0.6) 100%)'
      }} />

      {/* Extra center darkening behind text */}
      <div style={{
        position: 'absolute', zIndex: 1,
        top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '900px', height: '500px',
        background: 'radial-gradient(ellipse, rgba(0,0,0,0.55) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Gold light leak top-left */}
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
        style={{
          position: 'absolute', top: -100, left: -100, zIndex: 2,
          width: '700px', height: '700px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(212,160,23,0.08) 0%, transparent 65%)',
          pointerEvents: 'none',
          transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 20}px)`,
          transition: 'transform 0.8s ease',
        }}
      />

      {/* Floating particles */}
      {particles.map(p => (
        <motion.div
          key={p.id}
          animate={{ y: [0, -30, 0], x: [0, 15, 0], opacity: [0.2, 0.7, 0.2] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute', zIndex: 2,
            left: `${p.x}%`, top: `${p.y}%`,
            width: p.size, height: p.size,
            borderRadius: '50%', background: '#D4A017',
            boxShadow: `0 0 ${p.size * 4}px rgba(212,160,23,0.7)`,
            pointerEvents: 'none',
          }}
        />
      ))}

      {/* ── CONTENT ── */}
      <div style={{
        position: 'relative', zIndex: 3,
        textAlign: 'center', padding: '0 2rem',
        maxWidth: '950px', width: '100%',
      }}>

        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '1.75rem' }}
        >
          <motion.span
            initial={{ width: 0 }} animate={{ width: 55 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{ height: 1, background: 'rgba(212,160,23,0.7)', display: 'block' }}
          />
          <span style={{
            fontFamily: '"Outfit"', fontSize: '0.65rem',
            letterSpacing: '0.38em', textTransform: 'uppercase',
            color: '#D4A017',
            textShadow: '0 0 20px rgba(212,160,23,0.8)',
          }}>
            Premium Fitness · Est. 2018
          </span>
          <motion.span
            initial={{ width: 0 }} animate={{ width: 55 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{ height: 1, background: 'rgba(212,160,23,0.7)', display: 'block' }}
          />
        </motion.div>

        {/* FORGE YOUR — white with strong shadow */}
        {/* FORGE YOUR */}
<div style={{ overflow: 'hidden' }}>
  <motion.h1
    initial={{ y: 80, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{
      duration: 0.9,
      delay: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }}
    style={{
      fontFamily: '"Bebas Neue"',
      fontSize: 'clamp(3.8rem, 11vw, 9.5rem)',
      letterSpacing: '0.06em',
      lineHeight: 0.95,
      color: '#FFFFFF',
      margin: 0,
      textShadow: '0 2px 10px rgba(0,0,0,0.18)',
    }}
  >
    FORGE YOUR
  </motion.h1>
</div>

        {/* LEGACY — gold with glow + dark shadow */}
        {/* LEGACY */}
<div style={{ overflow: 'hidden' }}>
  <motion.div
    initial={{ y: 80, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{
      duration: 0.9,
      delay: 0.7,
      ease: [0.22, 1, 0.36, 1]
    }}
    style={{
      position: 'relative',
      display: 'inline-block'
    }}
  >
    <h1
      style={{
        fontFamily: '"Bebas Neue"',
        fontSize: 'clamp(3.8rem, 11vw, 9.5rem)',
        letterSpacing: '0.06em',
        lineHeight: 0.95,
        color: '#D4A017',
        margin: 0,
        textShadow: '0 0 25px rgba(212,160,23,0.22)',
      }}
    >
      LEGACY
    </h1>

    {/* Underline */}
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      transition={{
        duration: 1.2,
        delay: 1.3,
        ease: 'easeOut'
      }}
      style={{
        position: 'absolute',
        bottom: -4,
        left: 0,
        height: 3,
        background: '#D4A017',
        boxShadow: '0 0 12px rgba(212,160,23,0.5)',
      }}
    />
  </motion.div>
</div>

        {/* Tagline — frosted pill background for readability */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 1 }}
          style={{ marginTop: '1.75rem', display: 'inline-block' }}
        >
         <p
  style={{
    fontFamily: '"Outfit"',
    fontStyle: 'italic',
    fontSize: 'clamp(0.85rem, 1.8vw, 1.05rem)',
    color: 'rgba(245,240,232,0.9)',
    letterSpacing: '0.03em',
    margin: 0,
    padding: '0.6rem 1.5rem',
    background: 'rgba(0,0,0,0.45)',
    backdropFilter: 'blur(8px)',
    WebkitBackdropFilter: 'blur(8px)',
    border: '1px solid rgba(212,160,23,0.15)',
    textShadow: 'none',
  }}
>
  "Where steel meets soul, and ordinary becomes extraordinary."
</p>     </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.2 }}
          style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2.5rem', flexWrap: 'wrap' }}
        >
          <motion.button
            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            whileHover={{ scale: 1.05, boxShadow: '0 0 50px rgba(212,160,23,0.6), 0 8px 30px rgba(0,0,0,0.5)' }}
            whileTap={{ scale: 0.97 }}
            style={{
              background: '#D4A017',
              color: '#0A0A0A',
              border: 'none',
              cursor: 'pointer',
              fontFamily: '"Outfit"',
              fontWeight: 800,
              fontSize: '0.8rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              padding: '1.1rem 2.8rem',
              boxShadow: '0 4px 20px rgba(0,0,0,0.5), 0 0 20px rgba(212,160,23,0.3)',
            }}
          >
            Join Now
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, borderColor: '#D4A017', color: '#D4A017', background: 'rgba(0,0,0,0.6)' }}
            whileTap={{ scale: 0.97 }}
            style={{
              background: 'rgba(0,0,0,0.45)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              border: '1px solid rgba(245,240,232,0.5)',
              color: '#FFFFFF',
              cursor: 'pointer',
              fontFamily: '"Outfit"',
              fontWeight: 700,
              fontSize: '0.8rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              padding: '1.1rem 2.8rem',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
            }}
          >
            Watch Our Story
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        style={{
          position: 'absolute', bottom: '2rem', right: '2.5rem', zIndex: 3,
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem',
          cursor: 'pointer',
        }}
        onClick={() => document.getElementById('stats')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span style={{
          fontFamily: '"Outfit"', fontSize: '0.55rem', letterSpacing: '0.3em',
          textTransform: 'uppercase', color: 'rgba(245,240,232,0.5)',
          writingMode: 'vertical-rl', transform: 'rotate(180deg)',
          textShadow: '0 0 10px rgba(0,0,0,0.8)',
        }}>
          Scroll
        </span>
        <motion.div
          animate={{ scaleY: [0.4, 1, 0.4], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ width: 1, height: 50, background: 'linear-gradient(to bottom, #D4A017, transparent)' }}
        />
      </motion.div>
    </section>
  )
}