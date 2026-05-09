import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const STATS = [
  { num: 2500, suffix: '+', label: 'Active Members' },
  { num: 40,   suffix: '+', label: 'Elite Trainers' },
  { num: 200,  suffix: '+', label: 'Equipment Units' },
  { num: 8,    suffix: '',  label: 'Years of Legacy' },
]

function Counter({ target, suffix, run }) {
  const [val, setVal] = useState(0)
  const [done, setDone] = useState(false)
  useEffect(() => {
    if (!run) return
    let start = 0
    const step = target / 55
    const t = setInterval(() => {
      start += step
      if (start >= target) { setVal(target); setDone(true); clearInterval(t) }
      else setVal(Math.floor(start))
    }, 28)
    return () => clearInterval(t)
  }, [run, target])

  return (
    <span style={{
      fontFamily: '"Bebas Neue"',
      fontSize: 'clamp(2.8rem, 5vw, 4.5rem)',
      color: '#D4A017',
      lineHeight: 1,
      textShadow: done ? '0 0 30px rgba(212,160,23,0.5)' : 'none',
      transition: 'text-shadow 0.5s ease',
    }}>
      {val.toLocaleString()}{suffix}
    </span>
  )
}

export default function Stats() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <SectionTransitionInline id="stats">
      <section ref={ref} style={{
        background: '#111111',
        borderTop: '1px solid rgba(212,160,23,0.08)',
        borderBottom: '1px solid rgba(212,160,23,0.08)',
        padding: '4rem 2rem',
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem' }}>
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              style={{
                textAlign: 'center', padding: '2.5rem 1rem',
                borderRight: i < STATS.length - 1 ? '1px solid rgba(212,160,23,0.1)' : 'none',
                position: 'relative',
              }}
            >
              <Counter target={s.num} suffix={s.suffix} run={inView} />
              <div style={{
                fontFamily: '"Outfit"', fontSize: '0.7rem',
                letterSpacing: '0.25em', textTransform: 'uppercase',
                color: 'rgba(245,240,232,0.4)', marginTop: '0.6rem',
              }}>
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </SectionTransitionInline>
  )
}

// Inline wrapper to avoid circular imports
function SectionTransitionInline({ children, id }) {
  return <div id={id}>{children}</div>
}