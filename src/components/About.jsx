import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const PILLARS = [
  { icon: '⚡', title: 'Discipline', desc: 'Every rep, every set — a deliberate act of becoming. Consistency forged through unbreakable structure.' },
  { icon: '🔥', title: 'Community', desc: 'Iron sharpens iron. Surround yourself with warriors who refuse to settle for anything less.' },
  { icon: '🎯', title: 'Results',    desc: 'Data-driven programming built for measurable transformation. Not guesswork — guaranteed progress.' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" ref={ref} style={{ background: '#0A0A0A', padding: '9rem 2rem', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '5rem', alignItems: 'center' }}>

        {/* Image col */}
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          style={{ position: 'relative' }}
        >
          {/* Offset gold frame */}
          <div style={{
            position: 'absolute', top: -16, left: -16, right: 16, bottom: 16,
            border: '1px solid rgba(212,160,23,0.25)', zIndex: 0,
          }} />
          <div style={{ position: 'relative', zIndex: 1, overflow: 'hidden' }}>
            <img
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=85"
              alt="Gym interior"
              style={{ width: '100%', height: '520px', objectFit: 'cover', display: 'block', filter: 'brightness(0.82) contrast(1.08)' }}
            />
            {/* Gradient overlay on image */}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 50%)' }} />
            {/* Bottom gold bar */}
            <motion.div
              initial={{ width: 0 }}
              animate={inView ? { width: '60%' } : {}}
              transition={{ duration: 1.2, delay: 0.6, ease: 'easeOut' }}
              style={{ position: 'absolute', bottom: 0, left: 0, height: 3, background: '#D4A017', boxShadow: '0 0 12px rgba(212,160,23,0.6)' }}
            />
          </div>
        </motion.div>

        {/* Text col */}
        <motion.div
          initial={{ opacity: 0, x: 70 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Label */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <div style={{ width: 2, height: '1.1rem', background: '#D4A017' }} />
            <span style={{ fontFamily: '"Outfit"', fontSize: '0.65rem', letterSpacing: '0.32em', textTransform: 'uppercase', color: '#D4A017' }}>Our Philosophy</span>
          </div>

          <h2 style={{ fontFamily: '"Bebas Neue"', fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)', lineHeight: 1.05, letterSpacing: '0.03em', color: '#F5F0E8', marginBottom: '0.3rem' }}>
            WE DON'T BUILD GYMS.
          </h2>
          <h2 style={{ fontFamily: '"Bebas Neue"', fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)', lineHeight: 1.05, letterSpacing: '0.03em', color: '#D4A017', marginBottom: '1.75rem' }}>
            WE BUILD WARRIORS.
          </h2>

          <p style={{ fontFamily: '"Outfit"', fontSize: '0.9rem', lineHeight: 1.85, color: 'rgba(245,240,232,0.55)', marginBottom: '2rem' }}>
            Ironforge was born from the belief that true transformation requires more than equipment — it demands environment, expertise, and an unbreakable culture. Every inch of this space is engineered for results.
          </p>

          <div style={{ width: 60, height: 2, background: 'linear-gradient(90deg, #D4A017, transparent)', marginBottom: '2rem' }} />

          {/* Pillars */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
            {PILLARS.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + i * 0.15 }}
                style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}
              >
                <div style={{
                  width: 44, height: 44, flexShrink: 0,
                  background: 'rgba(212,160,23,0.07)',
                  border: '1px solid rgba(212,160,23,0.22)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.15rem',
                }}>
                  {p.icon}
                </div>
                <div>
                  <div style={{ fontFamily: '"Outfit"', fontWeight: 700, fontSize: '0.82rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#F5F0E8', marginBottom: '0.3rem' }}>{p.title}</div>
                  <div style={{ fontFamily: '"Outfit"', fontSize: '0.83rem', lineHeight: 1.7, color: 'rgba(245,240,232,0.5)' }}>{p.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}