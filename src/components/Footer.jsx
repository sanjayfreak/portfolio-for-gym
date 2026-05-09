import { motion } from 'framer-motion'

const COLS = {
  Navigate: ['Home', 'About', 'Programs', 'Trainers', 'Pricing', 'Contact'],
  Programs: ['Strength & Power', 'HIIT & Cardio', 'Elite Performance', 'Nutrition Coaching'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
}

export default function Footer() {
  const go = (id) => document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer style={{ background: '#080808', borderTop: '1px solid rgba(212,160,23,0.08)', padding: '5rem 2rem 2rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '3rem', marginBottom: '4rem' }}>

          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 1, marginBottom: '1rem' }}>
              <span style={{ fontFamily: '"Bebas Neue"', fontSize: '1.8rem', letterSpacing: '0.08em', color: '#F5F0E8' }}>IRON</span>
              <span style={{ fontFamily: '"Bebas Neue"', fontSize: '1.8rem', letterSpacing: '0.08em', color: '#D4A017' }}>FORGE</span>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#D4A017', marginLeft: 4, display: 'inline-block' }} />
            </div>
            <p style={{ fontFamily: '"Outfit"', fontSize: '0.8rem', lineHeight: 1.75, color: 'rgba(245,240,232,0.4)', marginBottom: '1.5rem', maxWidth: 200 }}>
              Where steel meets soul.<br />Building warriors since 2018.
            </p>
            <div style={{ display: 'flex', gap: '0.6rem' }}>
              {['IG', 'TW', 'YT', 'FB'].map(s => (
                <motion.button
                  key={s}
                  whileHover={{ scale: 1.1, borderColor: '#D4A017', color: '#D4A017' }}
                  style={{
                    width: 34, height: 34, background: 'transparent',
                    border: '1px solid rgba(212,160,23,0.18)',
                    color: 'rgba(245,240,232,0.45)', cursor: 'pointer',
                    fontFamily: '"Outfit"', fontSize: '0.58rem', fontWeight: 700,
                    letterSpacing: '0.05em', transition: 'all 0.3s ease',
                  }}
                >
                  {s}
                </motion.button>
              ))}
            </div>
          </div>

          {Object.entries(COLS).map(([col, items]) => (
            <div key={col}>
              <div style={{ fontFamily: '"Outfit"', fontWeight: 700, fontSize: '0.65rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: '#D4A017', marginBottom: '1.25rem' }}>{col}</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {items.map(item => (
                  <li key={item} style={{ marginBottom: '0.55rem' }}>
                    <button
                      onClick={() => go(item.split(' ')[0])}
                      style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: '"Outfit"', fontSize: '0.82rem', color: 'rgba(245,240,232,0.4)', padding: 0, textAlign: 'left', transition: 'color 0.3s' }}
                      onMouseOver={e => e.currentTarget.style.color = '#D4A017'}
                      onMouseOut={e => e.currentTarget.style.color = 'rgba(245,240,232,0.4)'}
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div style={{ borderTop: '1px solid rgba(212,160,23,0.07)', paddingTop: '2rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
          <span style={{ fontFamily: '"Outfit"', fontSize: '0.73rem', color: 'rgba(245,240,232,0.22)', letterSpacing: '0.04em' }}>© 2025 Ironforge Fitness. All rights reserved.</span>
          <span style={{ fontFamily: '"Outfit"', fontSize: '0.68rem', color: 'rgba(212,160,23,0.45)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Forged with purpose.</span>
        </div>
      </div>
    </footer>
  )
}