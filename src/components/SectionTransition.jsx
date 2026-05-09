import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function SectionTransition({
  children,
  id,
  showLine = false,
  delay = 0,
  style = {},
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <div ref={ref} id={id} style={{ position: 'relative', ...style }}>
      {/* Optional gold line draw */}
      {showLine && (
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: '100%' } : { width: 0 }}
          transition={{ duration: 1.2, delay, ease: 'easeOut' }}
          style={{
            position: 'absolute', top: 0, left: 0,
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(212,160,23,0.5), transparent)',
            zIndex: 2,
          }}
        />
      )}

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </div>
  )
}