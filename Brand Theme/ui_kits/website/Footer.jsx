// Footer.jsx — ViiThri Labs footer
// Export: window.VLFooter

const VLFooter = ({ theme = 'dark' }) => {
  const dark = theme === 'dark';

  const cols = [
    {
      heading: 'Services',
      links: ['Games', 'Mobile Apps', 'Web', 'VR / AR', 'Tools'],
    },
    {
      heading: 'Company',
      links: ['About', 'Our Work', 'Blog', 'Careers'],
    },
    {
      heading: 'Contact',
      links: ['support@viithrilabs.in', 'Chennai, India'],
    },
  ];

  const s = footerStyles;

  return (
    <footer style={{
      ...s.footer,
      background: dark ? '#0A0A12' : '#0E0E18',
      borderTop: dark ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(255,255,255,0.06)',
    }}>
      <div style={s.inner}>
        {/* Brand */}
        <div style={s.brand}>
          <div style={s.logoRow}>
            <div style={s.logoMark}>
              <img src="../../assets/viithrilabs-icon.svg" alt="" style={{ width: 22, height: 22 }} />
            </div>
            <span style={s.logoName}>ViiThri Labs</span>
          </div>
          <p style={s.tagline}>
            A product and services studio crafting games, apps, and digital experiences for the world.
          </p>
          <div style={s.location}>
            <div style={s.dot} />
            Chennai, India
          </div>
        </div>

        {/* Link columns */}
        {cols.map(col => (
          <div key={col.heading} style={s.col}>
            <div style={s.colHeading}>{col.heading}</div>
            {col.links.map(l => (
              <a key={l} href="#" style={s.colLink}>{l}</a>
            ))}
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div style={{
        ...s.bottom,
        borderTop: 'none',
        background: dark ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.04)',
      }}>
        <div style={s.bottomInner}>
          <span style={s.copy}>© 2026 ViiThri Labs. All rights reserved.</span>
          <div style={s.bottomLinks}>
            {['Privacy Policy', 'Terms of Use'].map(l => (
              <a key={l} href="#" style={s.colLink}>{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

const footerStyles = {
  footer: { width: '100%' },
  inner: {
    maxWidth: 1100, margin: '0 auto',
    padding: '56px 48px 48px',
    display: 'grid',
    gridTemplateColumns: '2fr 1fr 1fr 1fr',
    gap: '40px',
  },
  brand: {},
  logoRow: { display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 },
  logoMark: {
    width: 36, height: 36, borderRadius: 8,
    background: 'rgba(108,99,255,0.2)', border: '1px solid rgba(108,99,255,0.3)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  },
  logoName: {
    fontFamily: 'Georgia, serif', fontSize: '15px', fontWeight: 700,
    color: '#fff', letterSpacing: '-0.01em',
  },
  tagline: {
    fontFamily: "'DM Sans', sans-serif", fontSize: '13px', fontWeight: 300,
    lineHeight: 1.7, color: 'rgba(255,255,255,0.4)', maxWidth: 280, marginBottom: 20,
  },
  location: {
    display: 'flex', alignItems: 'center', gap: 8,
    fontFamily: "'DM Sans', sans-serif", fontSize: '12px',
    color: 'rgba(255,255,255,0.35)',
  },
  dot: { width: 6, height: 6, background: '#6C63FF', borderRadius: '50%' },
  col: { display: 'flex', flexDirection: 'column', gap: 10 },
  colHeading: {
    fontFamily: "'DM Sans', sans-serif", fontSize: '11px', fontWeight: 600,
    letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)',
    marginBottom: 4,
  },
  colLink: {
    fontFamily: "'DM Sans', sans-serif", fontSize: '13px', fontWeight: 400,
    color: 'rgba(255,255,255,0.45)', textDecoration: 'none',
    transition: 'color 0.2s', cursor: 'pointer',
  },
  bottom: { padding: '0' },
  bottomInner: {
    maxWidth: 1100, margin: '0 auto', padding: '16px 48px',
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
  },
  copy: {
    fontFamily: "'DM Sans', sans-serif", fontSize: '12px', color: 'rgba(255,255,255,0.25)',
  },
  bottomLinks: { display: 'flex', gap: 24 },
};

Object.assign(window, { VLFooter });
