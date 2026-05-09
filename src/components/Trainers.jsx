import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const TRAINERS = [
  { name: 'Marcus Reid',  specialty: 'Strength & Powerlifting', bio: '12-year veteran. Former national powerlifting champion. Specializes in maximal strength development and elite programming.', img: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=500&q=80' },
  { name: 'Sofia Vega',   specialty: 'HIIT & Conditioning',     bio: 'Certified metabolic specialist. Transformed 500+ clients with high-intensity protocols that deliver fast, lasting results.', img: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=500&q=80' },
  { name: 'James Ko',     specialty: 'Elite Performance',       bio: 'Sports science degree + 10 years coaching elite athletes. Data-driven periodization and peak performance expert.', img: 'https://images.unsplash.com/photo-1584466977773-e625c37cdd50?w=500&q=80' },
  { name: 'Aisha Nour',   specialty: 'Nutrition & Wellness',    bio: 'Registered dietitian and mobility coach. Holistic approach to sustainable body transformation and long-term health.', img: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=500&q=80' },
]
export default function Trainers() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [hovered, setHovered] = useState(null)

  return (
    <section id="trainers" ref={ref} style={{ background: '#0A0A0A', padding: '9rem 2rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <div style={{ width: 2, height: '1.1rem', background: '#D4A017' }} />
            <span style={{ fontFamily: '"Outfit"', fontSize: '0.65rem', letterSpacing: '0.32em', textTransform: 'uppercase', color: '#D4A017' }}>The Team</span>
            <div style={{ width: 2, height: '1.1rem', background: '#D4A017' }} />
          </div>
          <h2 style={{ fontFamily: '"Bebas Neue"', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', letterSpacing: '0.04em', color: '#F5F0E8', margin: 0 }}>MEET THE ELITE</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
          {TRAINERS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, scale: 0.93 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.65, delay: i * 0.12 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{ position: 'relative', overflow: 'hidden', cursor: 'pointer', aspectRatio: '3/4' }}
            >
              {/* Image */}
              <img
                src={t.img}
                alt={t.name}
                style={{
                  width: '100%', height: '100%', objectFit: 'cover', display: 'block',
                  filter: hovered === i ? 'grayscale(0%) brightness(0.75)' : 'grayscale(40%) brightness(0.8)',
                  transform: hovered === i ? 'scale(1.06)' : 'scale(1)',
                  transition: 'all 0.6s ease',
                }}
              />

              {/* Bottom gradient always */}
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.15) 55%, transparent 100%)' }} />

              {/* Gold hover overlay */}
              <motion.div
                animate={{ opacity: hovered === i ? 1 : 0 }}
                transition={{ duration: 0.4 }}
                style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(212,160,23,0.88) 0%, rgba(212,160,23,0.5) 45%, transparent 100%)',
                  display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
                  padding: '1.5rem',
                }}
              >
                <p style={{ fontFamily: '"Outfit"', fontSize: '0.8rem', lineHeight: 1.65, color: '#0A0A0A', marginBottom: '0.85rem' }}>{t.bio}</p>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  {['IG', 'TW', 'LI'].map(s => (
                    <button key={s} style={{
                      background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(0,0,0,0.15)',
                      color: '#0A0A0A', cursor: 'pointer', fontFamily: '"Outfit"',
                      fontWeight: 700, fontSize: '0.58rem', letterSpacing: '0.1em',
                      padding: '0.28rem 0.55rem',
                    }}>{s}</button>
                  ))}
                </div>
              </motion.div>

              {/* Name always visible */}
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1.2rem 1.4rem',
                opacity: hovered === i ? 0 : 1, transition: 'opacity 0.3s ease',
              }}>
                <div style={{ fontFamily: '"Bebas Neue"', fontSize: '1.35rem', letterSpacing: '0.05em', color: '#F5F0E8' }}>{t.name}</div>
                <div style={{ fontFamily: '"Outfit"', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#D4A017', marginTop: 2 }}>{t.specialty}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}