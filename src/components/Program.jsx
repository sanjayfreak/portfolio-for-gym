import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const PROGRAMS = [
  {
    title: 'Strength & Power',
    icon: '🏋️',
    img: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&q=80',
    desc: 'Progressive overload programming designed to build raw strength and muscle. Barbells, compound lifts, and iron discipline.',
    tags: ['Powerlifting', 'Hypertrophy', 'Olympic'],
  },
  {
    title: 'HIIT & Cardio',
    icon: '⚡',
    img: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80',
    desc: 'High-intensity interval training fused with metabolic conditioning. Burn fat, build endurance, dominate every session.',
    tags: ['Fat Loss', 'Endurance', 'Conditioning'],
  },
  {
    title: 'Elite Performance',
    icon: '👑',
    img: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=600&q=80',
    desc: 'Our flagship 1-on-1 program. Custom periodization, nutrition coaching, and weekly performance analytics.',
    tags: ['1-on-1', 'Nutrition', 'Analytics'],
  },
]

export default function Programs() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [hovered, setHovered] = useState(null)

  return (
    <section id="programs" ref={ref} style={{ background: '#111111', padding: '9rem 2rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <div style={{ width: 2, height: '1.1rem', background: '#D4A017' }} />
            <span style={{ fontFamily: '"Outfit"', fontSize: '0.65rem', letterSpacing: '0.32em', textTransform: 'uppercase', color: '#D4A017' }}>Training Paths</span>
            <div style={{ width: 2, height: '1.1rem', background: '#D4A017' }} />
          </div>
          <h2 style={{ fontFamily: '"Bebas Neue"', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', letterSpacing: '0.04em', color: '#F5F0E8', margin: 0 }}>
            CHOOSE YOUR PATH
          </h2>
        </div>

        {/* Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {PROGRAMS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                position: 'relative', overflow: 'hidden',
                height: '460px', cursor: 'pointer',
                borderTop: '2px solid #D4A017',
                boxShadow: hovered === i ? '0 20px 60px rgba(0,0,0,0.7), 0 0 30px rgba(212,160,23,0.15)' : '0 10px 40px rgba(0,0,0,0.4)',
                transition: 'box-shadow 0.4s ease',
              }}
            >
              {/* BG image */}
              <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: `url(${p.img})`,
                backgroundSize: 'cover', backgroundPosition: 'center',
                transform: hovered === i ? 'scale(1.07)' : 'scale(1)',
                transition: 'transform 0.6s ease',
                filter: 'brightness(0.45)',
              }} />

              {/* Default overlay */}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 60%, transparent 100%)',
              }} />

              {/* Hover gold overlay */}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(212,160,23,0.12) 0%, transparent 60%)',
                opacity: hovered === i ? 1 : 0,
                transition: 'opacity 0.4s ease',
              }} />

              {/* Content */}
              <div style={{
                position: 'absolute', inset: 0, padding: '2rem',
                display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
              }}>
                <motion.div
                  animate={{ y: hovered === i ? -10 : 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{p.icon}</div>
                  <h3 style={{ fontFamily: '"Bebas Neue"', fontSize: '2rem', letterSpacing: '0.05em', color: '#F5F0E8', marginBottom: '0.75rem' }}>{p.title}</h3>

                  <motion.p
                    animate={{ opacity: hovered === i ? 1 : 0, height: hovered === i ? 'auto' : 0 }}
                    transition={{ duration: 0.4 }}
                    style={{ fontFamily: '"Outfit"', fontSize: '0.83rem', lineHeight: 1.7, color: 'rgba(245,240,232,0.75)', marginBottom: '1rem', overflow: 'hidden' }}
                  >
                    {p.desc}
                  </motion.p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: hovered === i ? '1.25rem' : '0' }}>
                    {p.tags.map(t => (
                      <span key={t} style={{
                        fontFamily: '"Outfit"', fontSize: '0.6rem', letterSpacing: '0.15em',
                        textTransform: 'uppercase', color: '#D4A017',
                        border: '1px solid rgba(212,160,23,0.3)', padding: '0.2rem 0.55rem',
                      }}>{t}</span>
                    ))}
                  </div>

                  <motion.button
                    animate={{ opacity: hovered === i ? 1 : 0 }}
                    style={{
                      background: 'none', border: 'none', cursor: 'pointer',
                      fontFamily: '"Outfit"', fontWeight: 700, fontSize: '0.72rem',
                      letterSpacing: '0.2em', textTransform: 'uppercase',
                      color: '#D4A017', padding: 0, display: 'flex', alignItems: 'center', gap: '0.5rem',
                    }}
                  >
                    Explore Program <span>→</span>
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}