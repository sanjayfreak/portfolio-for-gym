import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const LETTERS = 'IRONFORGE'.split('')

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(true)
  const rafRef = useRef(null)

  useEffect(() => {
    const startTime = performance.now()
    const DURATION = 2600

    const tick = (now) => {
      const elapsed = now - startTime
      const p = Math.min((elapsed / DURATION) * 100, 100)
      setProgress(Math.floor(p))

      if (p < 100) {
        rafRef.current = requestAnimationFrame(tick)
      } else {
        // Progress done — wait briefly then fade out
        setTimeout(() => {
          setVisible(false)
          // After fade out animation (600ms), call onComplete
          setTimeout(() => {
            onComplete()
          }, 650)
        }, 300)
      }
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [onComplete])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: '#0A0A0A',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.8rem',
          }}
        >
          {/* Top-left gold glow */}
          <div style={{
            position: 'absolute', top: -100, left: -100,
            width: 500, height: 500, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(212,160,23,0.07) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          {/* Bottom-right glow */}
          <div style={{
            position: 'absolute', bottom: -100, right: -100,
            width: 400, height: 400, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(212,160,23,0.04) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          {/* Letters */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.1rem' }}>
            {LETTERS.map((letter, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 50, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{
                  duration: 0.55,
                  delay: 0.1 + i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  fontFamily: '"Bebas Neue", cursive',
                  fontSize: 'clamp(3.5rem, 9vw, 6.5rem)',
                  letterSpacing: '0.06em',
                  lineHeight: 1,
                  color: i < 4 ? '#F5F0E8' : '#D4A017',
                  textShadow: i >= 4
                    ? '0 0 40px rgba(212,160,23,0.4)'
                    : '0 0 40px rgba(245,240,232,0.1)',
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.7 }}
            style={{
              fontFamily: '"Outfit", sans-serif',
              fontSize: '0.62rem',
              letterSpacing: '0.42em',
              textTransform: 'uppercase',
              color: 'rgba(212,160,23,0.55)',
              marginTop: '-0.5rem',
            }}
          >
            Forging Your Experience...
          </motion.p>

          {/* Progress bar */}
          <div style={{
            width: 'min(300px, 65vw)',
            height: 2,
            background: 'rgba(212,160,23,0.1)',
            position: 'relative',
            overflow: 'hidden',
            borderRadius: 2,
          }}>
            <div style={{
              position: 'absolute', top: 0, left: 0,
              height: '100%',
              width: `${progress}%`,
              background: 'linear-gradient(90deg, #B8860B, #D4A017, #E8B923)',
              boxShadow: '0 0 12px rgba(212,160,23,0.7), 0 0 4px rgba(212,160,23,1)',
              borderRadius: 2,
              transition: 'width 0.04s linear',
            }} />
          </div>

          {/* Percentage + pulsing dot */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '-0.75rem' }}>
            <motion.div
              animate={{ scale: [1, 1.6, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.2, repeat: Infinity }}
              style={{ width: 6, height: 6, borderRadius: '50%', background: '#D4A017' }}
            />
            <span style={{
              fontFamily: '"Bebas Neue", cursive',
              fontSize: '0.95rem',
              letterSpacing: '0.2em',
              color: 'rgba(212,160,23,0.35)',
            }}>
              {progress}%
            </span>
            <motion.div
              animate={{ scale: [1, 1.6, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.2, repeat: Infinity, delay: 0.6 }}
              style={{ width: 6, height: 6, borderRadius: '50%', background: '#D4A017' }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}