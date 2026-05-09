import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const PLANS = [
  {
    name: 'Starter', price: '49', desc: 'Perfect for beginners building their foundation.',
    features: ['Full gym access', 'Group classes (4/mo)', 'Locker room access', 'Fitness assessment', 'App tracking'],
    cta: 'Get Started', popular: false,
  },
  {
    name: 'Pro', price: '99', desc: 'Our most popular plan for serious athletes.',
    features: ['Unlimited gym access', 'Unlimited group classes', 'Monthly 1-on-1 session', 'Nutrition guide', 'Priority booking', 'Recovery suite access'],
    cta: 'Join Pro', popular: true,
  },
  {
    name: 'Elite', price: '199', desc: 'The full Ironforge experience. No compromises.',
    features: ['Everything in Pro', 'Weekly 1-on-1 coaching', 'Custom meal plan', 'Body composition tracking', 'Exclusive events', 'Guest passes (2/mo)'],
    cta: 'Go Elite', popular: false,
  },
]

export default function Pricing() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="pricing" ref={ref} style={{ background: '#0A0A0A', padding: '9rem 2rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <div style={{ width: 2, height: '1.1rem', background: '#D4A017' }} />
            <span style={{ fontFamily: '"Outfit"', fontSize: '0.65rem', letterSpacing: '0.32em', textTransform: 'uppercase', color: '#D4A017' }}>Membership</span>
            <div style={{ width: 2, height: '1.1rem', background: '#D4A017' }} />
          </div>
          <h2 style={{ fontFamily: '"Bebas Neue"', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', letterSpacing: '0.04em', color: '#F5F0E8', margin: 0 }}>INVEST IN YOURSELF</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', alignItems: 'stretch' }}>
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              whileHover={{ y: -6, boxShadow: plan.popular ? '0 30px 60px rgba(0,0,0,0.6), 0 0 40px rgba(212,160,23,0.2)' : '0 20px 50px rgba(0,0,0,0.5)' }}
              style={{
                background: '#111111',
                border: plan.popular ? '1px solid #D4A017' : '1px solid rgba(212,160,23,0.08)',
                padding: '2.5rem 2rem', position: 'relative',
                display: 'flex', flexDirection: 'column',
                boxShadow: plan.popular ? '0 0 40px rgba(212,160,23,0.08)' : 'none',
                scale: plan.popular ? 1.02 : 1,
                transition: 'box-shadow 0.4s ease',
              }}
            >
              {plan.popular && (
                <div style={{
                  position: 'absolute', top: -1, left: '50%', transform: 'translateX(-50%)',
                  background: '#D4A017', color: '#0A0A0A',
                  fontFamily: '"Outfit"', fontWeight: 700, fontSize: '0.58rem',
                  letterSpacing: '0.22em', textTransform: 'uppercase',
                  padding: '0.28rem 1.1rem', whiteSpace: 'nowrap',
                }}>Most Popular</div>
              )}

              <div style={{ fontFamily: '"Bebas Neue"', fontSize: '1.6rem', letterSpacing: '0.1em', color: plan.popular ? '#D4A017' : '#F5F0E8', marginBottom: '0.4rem', marginTop: plan.popular ? '0.5rem' : 0 }}>{plan.name}</div>
              <p style={{ fontFamily: '"Outfit"', fontSize: '0.8rem', color: 'rgba(245,240,232,0.45)', marginBottom: '1.5rem', lineHeight: 1.6 }}>{plan.desc}</p>

              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 3, marginBottom: '2rem' }}>
                <span style={{ fontFamily: '"Outfit"', fontSize: '0.9rem', color: '#D4A017', marginBottom: '0.5rem' }}>$</span>
                <span style={{ fontFamily: '"Bebas Neue"', fontSize: '4rem', color: '#F5F0E8', lineHeight: 1 }}>{plan.price}</span>
                <span style={{ fontFamily: '"Outfit"', fontSize: '0.78rem', color: 'rgba(245,240,232,0.35)', marginBottom: '0.5rem' }}>/mo</span>
              </div>

              <div style={{ height: 1, background: 'linear-gradient(90deg, rgba(212,160,23,0.25), transparent)', marginBottom: '1.5rem' }} />

              <div style={{ flex: 1, marginBottom: '2rem' }}>
                {plan.features.map(f => (
                  <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontFamily: '"Outfit"', fontSize: '0.85rem', color: 'rgba(245,240,232,0.7)', marginBottom: '0.65rem' }}>
                    <span style={{ color: '#D4A017', fontWeight: 700, fontSize: '0.8rem', flexShrink: 0 }}>✓</span>
                    {f}
                  </div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.03, boxShadow: plan.popular ? '0 8px 25px rgba(212,160,23,0.35)' : 'none' }}
                whileTap={{ scale: 0.97 }}
                style={{
                  width: '100%', cursor: 'pointer',
                  background: plan.popular ? '#D4A017' : 'transparent',
                  color: plan.popular ? '#0A0A0A' : '#D4A017',
                  border: plan.popular ? 'none' : '1px solid rgba(212,160,23,0.4)',
                  fontFamily: '"Outfit"', fontWeight: 700, fontSize: '0.78rem',
                  letterSpacing: '0.15em', textTransform: 'uppercase', padding: '1rem',
                  transition: 'all 0.3s ease',
                }}
              >
                {plan.cta}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}