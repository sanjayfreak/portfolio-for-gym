import { useRef, useState, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const TESTIMONIALS = [
  { name: 'Daniel Okafor', result: 'Lost 28kg in 6 months',    stars: 5, quote: "Ironforge didn't just change my body — it rewired my entire mindset. The coaching here is on another level entirely. Best decision of my life." },
  { name: 'Priya Mehta',   result: 'Gained 12kg lean muscle',  stars: 5, quote: "I've been to 6 different gyms across 3 cities. Nothing comes close to the environment and expertise at Ironforge. Truly elite." },
  { name: 'Chris Harlow',  result: 'Placed 2nd Nationally',    stars: 5, quote: "Trained here for my first bodybuilding competition and placed 2nd nationally. The programming is absolutely world-class." },
]

export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [active, setActive] = useState(0)
  const [dir, setDir] = useState(1)

  useEffect(() => {
    const t = setInterval(() => { setDir(1); setActive(a => (a + 1) % TESTIMONIALS.length) }, 5000)
    return () => clearInterval(t)
  }, [])

  const go = (i) => { setDir(i > active ? 1 : -1); setActive(i) }

  return (
    <section ref={ref} style={{ background: '#111111', padding: '9rem 2rem', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 700, height: 700, borderRadius: '50%', background: 'radial-gradient(circle, rgba(212,160,23,0.04) 0%, transparent 65%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <div style={{ width: 2, height: '1.1rem', background: '#D4A017' }} />
            <span style={{ fontFamily: '"Outfit"', fontSize: '0.65rem', letterSpacing: '0.32em', textTransform: 'uppercase', color: '#D4A017' }}>Transformations</span>
            <div style={{ width: 2, height: '1.1rem', background: '#D4A017' }} />
          </div>
          <h2 style={{ fontFamily: '"Bebas Neue"', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', letterSpacing: '0.04em', color: '#F5F0E8', margin: '0 0 3rem 0' }}>REAL RESULTS. REAL WARRIORS.</h2>
        </motion.div>

        {/* Carousel */}
        <div style={{ position: 'relative', minHeight: 260, overflow: 'hidden' }}>
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={active}
              custom={dir}
              initial={{ opacity: 0, x: dir * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir * -60 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              style={{
                background: '#0A0A0A',
                border: '1px solid rgba(212,160,23,0.1)',
                padding: '3rem 2.5rem',
                position: 'relative',
              }}
            >
              {/* Big quote mark */}
              <div style={{
                fontFamily: '"Bebas Neue"', fontSize: '7rem', color: '#D4A017',
                lineHeight: 0.4, opacity: 0.15,
                position: 'absolute', top: '1.5rem', left: '1.5rem',
                userSelect: 'none', pointerEvents: 'none',
              }}>"</div>

              {/* Stars */}
              <div style={{ marginBottom: '1.2rem' }}>
                {'★★★★★'.split('').map((s, i) => (
                  <span key={i} style={{ color: '#D4A017', fontSize: '1rem' }}>{s}</span>
                ))}
              </div>

              <p style={{
                fontFamily: '"Outfit"', fontStyle: 'italic',
                fontSize: 'clamp(1rem, 2.2vw, 1.2rem)', lineHeight: 1.8,
                color: 'rgba(245,240,232,0.78)', marginBottom: '2rem',
              }}>
                "{TESTIMONIALS[active].quote}"
              </p>

              <div style={{ fontFamily: '"Bebas Neue"', fontSize: '1.25rem', letterSpacing: '0.08em', color: '#F5F0E8' }}>{TESTIMONIALS[active].name}</div>
              <div style={{ fontFamily: '"Outfit"', fontSize: '0.65rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#D4A017', marginTop: 4 }}>{TESTIMONIALS[active].result}</div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.6rem', marginTop: '1.75rem' }}>
          {TESTIMONIALS.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => go(i)}
              animate={{ width: i === active ? 28 : 8, background: i === active ? '#D4A017' : 'rgba(212,160,23,0.25)' }}
              transition={{ duration: 0.3 }}
              style={{ height: 8, borderRadius: 4, border: 'none', cursor: 'pointer', padding: 0 }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}