import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const INFO = [
  { icon: '📍', label: 'Location', val: '42 Iron Street, Downtown District\nNew York, NY 10001' },
  { icon: '📞', label: 'Phone',    val: '+1 (212) 555-0199' },
  { icon: '✉️', label: 'Email',   val: 'hello@ironforgefit.com' },
  { icon: '🕐', label: 'Hours',   val: 'Mon–Fri: 5am – 11pm\nSat–Sun: 6am – 9pm' },
]

const inputStyle = (focused) => ({
  background: '#0A0A0A',
  border: `1px solid ${focused ? '#D4A017' : 'rgba(212,160,23,0.18)'}`,
  boxShadow: focused ? '0 0 0 3px rgba(212,160,23,0.07)' : 'none',
  color: '#F5F0E8', fontFamily: '"Outfit"',
  padding: '0.9rem 1.2rem', width: '100%', outline: 'none',
  fontSize: '0.875rem', transition: 'all 0.3s ease',
  boxSizing: 'border-box',
})

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [focus, setFocus] = useState({})
  const [done, setDone] = useState(false)

  const handleSubmit = (e) => { e.preventDefault(); setDone(true) }

  return (
    <section id="contact" ref={ref} style={{ background: '#111111', padding: '9rem 2rem', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', bottom: 0, right: 0, width: 700, height: 700, background: 'radial-gradient(circle, rgba(212,160,23,0.04) 0%, transparent 65%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: 0, left: 0, width: 400, height: 400, background: 'radial-gradient(circle, rgba(212,160,23,0.03) 0%, transparent 65%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <div style={{ width: 2, height: '1.1rem', background: '#D4A017' }} />
            <span style={{ fontFamily: '"Outfit"', fontSize: '0.65rem', letterSpacing: '0.32em', textTransform: 'uppercase', color: '#D4A017' }}>Start Your Journey</span>
            <div style={{ width: 2, height: '1.1rem', background: '#D4A017' }} />
          </div>
          <h2 style={{ fontFamily: '"Bebas Neue"', fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '0.04em', color: '#F5F0E8', margin: 0 }}>READY TO START?</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', alignItems: 'start' }}>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <AnimatePresence mode="wait">
              {done ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{ textAlign: 'center', padding: '3rem', border: '1px solid rgba(212,160,23,0.2)', background: '#0A0A0A' }}
                >
                  <motion.div
                    animate={{ scale: [0.5, 1.2, 1] }}
                    transition={{ duration: 0.5 }}
                    style={{ fontSize: '3rem', marginBottom: '1rem' }}
                  >⚡</motion.div>
                  <h3 style={{ fontFamily: '"Bebas Neue"', fontSize: '2rem', color: '#D4A017', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>MESSAGE SENT</h3>
                  <p style={{ fontFamily: '"Outfit"', fontSize: '0.875rem', color: 'rgba(245,240,232,0.55)', lineHeight: 1.7 }}>We'll be in touch within 24 hours.<br />Your legacy starts now.</p>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {[['Full Name','text'],['Email Address','email']].map(([ph, type]) => (
                    <input
                      key={ph} type={type} placeholder={ph} required
                      style={inputStyle(focus[ph])}
                      onFocus={() => setFocus(f => ({ ...f, [ph]: true }))}
                      onBlur={() => setFocus(f => ({ ...f, [ph]: false }))}
                    />
                  ))}
                  <select
                    required defaultValue=""
                    style={{ ...inputStyle(focus['goal']), cursor: 'pointer', appearance: 'none', color: 'rgba(245,240,232,0.55)' }}
                    onFocus={() => setFocus(f => ({ ...f, goal: true }))}
                    onBlur={() => setFocus(f => ({ ...f, goal: false }))}
                  >
                    <option value="" disabled>Select Your Goal</option>
                    <option value="fat-loss">Fat Loss</option>
                    <option value="muscle">Build Muscle</option>
                    <option value="performance">Athletic Performance</option>
                    <option value="general">General Fitness</option>
                  </select>
                  <textarea
                    placeholder="Your message..."
                    rows={4}
                    style={{ ...inputStyle(focus['msg']), resize: 'none' }}
                    onFocus={() => setFocus(f => ({ ...f, msg: true }))}
                    onBlur={() => setFocus(f => ({ ...f, msg: false }))}
                  />
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02, boxShadow: '0 8px 30px rgba(212,160,23,0.35)' }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                      background: '#D4A017', color: '#0A0A0A', border: 'none', cursor: 'pointer',
                      fontFamily: '"Outfit"', fontWeight: 700, fontSize: '0.78rem',
                      letterSpacing: '0.18em', textTransform: 'uppercase', padding: '1rem',
                      marginTop: '0.5rem',
                    }}
                  >
                    Send Message
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ display: 'flex', flexDirection: 'column', gap: '2.2rem' }}
          >
            {INFO.map(item => (
              <div key={item.label} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ width: 44, height: 44, flexShrink: 0, background: 'rgba(212,160,23,0.07)', border: '1px solid rgba(212,160,23,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem' }}>
                  {item.icon}
                </div>
                <div>
                  <div style={{ fontFamily: '"Outfit"', fontWeight: 700, fontSize: '0.65rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#D4A017', marginBottom: '0.25rem' }}>{item.label}</div>
                  <div style={{ fontFamily: '"Outfit"', fontSize: '0.875rem', color: 'rgba(245,240,232,0.6)', lineHeight: 1.65, whiteSpace: 'pre-line' }}>{item.val}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}