// Header.jsx — ViiThri Labs Navigation Header
// Export: window.VLHeader

const VLHeader = ({ theme = 'dark', activePage = 'home', onNav }) => {
  const dark = theme === 'dark';
  const s = headerStyles;

  const links = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'work', label: 'Our Work' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header style={{
      ...s.header,
      background: dark ? 'rgba(12,12,20,0.92)' : 'rgba(250,250,250,0.92)',
      borderBottom: dark ? '1px solid rgba(255,255,255,0.07)' : '1px solid rgba(0,0,0,0.07)',
    }}>
      {/* Logo */}
      <div style={s.logo} onClick={() => onNav && onNav('home')}>
        <img src="../../assets/viithrilabs-icon.svg" alt="ViiThri Labs" style={s.logoIcon} />
        <div>
          <div style={{ ...s.logoName, color: dark ? '#fff' : '#0E0E18' }}>ViiThri Labs</div>
          <div style={s.logoSub}>Studio &amp; Products</div>
        </div>
      </div>

      {/* Nav links */}
      <nav style={s.nav}>
        {links.map(l => (
          <button key={l.id} onClick={() => onNav && onNav(l.id)} style={{
            ...s.navLink,
            color: activePage === l.id
              ? (dark ? '#8D87FF' : '#6C63FF')
              : (dark ? 'rgba(255,255,255,0.55)' : '#7A7A9A'),
            borderBottom: activePage === l.id
              ? `2px solid ${dark ? '#6C63FF' : '#6C63FF'}`
              : '2px solid transparent',
          }}>
            {l.label}
          </button>
        ))}
      </nav>

      {/* CTA */}
      <button style={{
        ...s.cta,
        background: dark ? 'rgba(108,99,255,0.12)' : '#6C63FF',
        color: dark ? '#8D87FF' : '#fff',
        border: dark ? '1px solid rgba(108,99,255,0.3)' : 'none',
      }}>
        Get in Touch
      </button>
    </header>
  );
};

const headerStyles = {
  header: {
    display: 'flex', alignItems: 'center', gap: '32px',
    padding: '0 48px', height: '64px',
    backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
    position: 'sticky', top: 0, zIndex: 100,
  },
  logo: {
    display: 'flex', alignItems: 'center', gap: '10px',
    cursor: 'pointer', userSelect: 'none', marginRight: 'auto',
  },
  logoIcon: { width: '32px', height: '32px', borderRadius: '6px' },
  logoName: {
    fontFamily: 'Georgia, serif', fontSize: '15px', fontWeight: 700,
    lineHeight: 1.2, letterSpacing: '-0.01em',
  },
  logoSub: {
    fontFamily: "'DM Sans', sans-serif", fontSize: '9px', fontWeight: 500,
    letterSpacing: '0.12em', textTransform: 'uppercase',
    color: '#6C63FF', marginTop: '1px',
  },
  nav: { display: 'flex', gap: '4px' },
  navLink: {
    background: 'none', border: 'none', borderRadius: '0',
    padding: '8px 12px', fontFamily: "'DM Sans', sans-serif",
    fontSize: '13px', fontWeight: 500, cursor: 'pointer',
    transition: 'color 0.2s', paddingBottom: '6px',
  },
  cta: {
    padding: '9px 18px', borderRadius: '8px',
    fontFamily: "'DM Sans', sans-serif", fontSize: '13px', fontWeight: 500,
    cursor: 'pointer', transition: 'all 0.2s', flexShrink: 0,
  },
};

Object.assign(window, { VLHeader });
