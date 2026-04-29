// Services.jsx — Services / Products grid section
// Export: window.VLServices

const services = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
      </svg>
    ),
    title: 'Games',
    desc: 'Engaging game experiences across mobile, desktop, and VR platforms.',
    tag: 'Unity · Unreal · WebGL',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2"/>
        <circle cx="12" cy="17" r="1" fill="currentColor" stroke="none"/>
      </svg>
    ),
    title: 'Mobile Apps',
    desc: 'iOS and Android applications built for performance and delight.',
    tag: 'React Native · Swift · Kotlin',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
      </svg>
    ),
    title: 'Web',
    desc: 'Full-stack web applications, marketing sites, and digital platforms.',
    tag: 'React · Next.js · Node',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    ),
    title: 'VR / AR',
    desc: 'Immersive spatial experiences for training, gaming, and exploration.',
    tag: 'WebXR · Unity XR',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
    title: 'Tools',
    desc: 'Productivity software, developer utilities, and internal tooling.',
    tag: 'SaaS · CLI · APIs',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'Client Work',
    desc: 'End-to-end digital product delivery for startups and businesses.',
    tag: 'Discovery · Design · Build',
  },
];

const VLServices = ({ theme = 'dark' }) => {
  const dark = theme === 'dark';
  const [hovered, setHovered] = React.useState(null);

  return (
    <section style={{
      ...svcStyles.section,
      background: dark ? '#0C0C14' : '#FAFAFA',
    }}>
      <div style={svcStyles.inner}>
        {/* Header */}
        <div style={svcStyles.header}>
          <div style={svcStyles.eyebrow}>What we build</div>
          <h2 style={{
            ...svcStyles.heading,
            color: dark ? '#fff' : '#0E0E18',
          }}>
            Products &amp; Services
          </h2>
          <p style={{
            ...svcStyles.sub,
            color: dark ? 'rgba(255,255,255,0.55)' : '#5A5A7A',
          }}>
            From concept to launch — we craft digital experiences that people remember.
          </p>
        </div>

        {/* Grid */}
        <div style={svcStyles.grid}>
          {services.map((s, i) => {
            const isHovered = hovered === i;
            return (
              <div
                key={s.title}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  ...svcStyles.card,
                  background: dark
                    ? (isHovered ? '#18182A' : '#12121E')
                    : (isHovered ? '#F4F4F8' : '#fff'),
                  border: dark
                    ? `1px solid ${isHovered ? 'rgba(108,99,255,0.4)' : 'rgba(255,255,255,0.08)'}`
                    : `1px solid ${isHovered ? 'rgba(108,99,255,0.3)' : 'rgba(0,0,0,0.08)'}`,
                  boxShadow: isHovered
                    ? (dark ? '0 8px 32px rgba(0,0,0,0.5)' : '0 8px 24px rgba(0,0,0,0.08)')
                    : 'none',
                  transform: isHovered ? 'translateY(-2px)' : 'none',
                  transition: 'all 0.2s ease',
                }}
              >
                <div style={{
                  ...svcStyles.iconWrap,
                  background: dark ? 'rgba(108,99,255,0.14)' : 'rgba(108,99,255,0.08)',
                  color: '#8D87FF',
                  border: dark ? '1px solid rgba(108,99,255,0.25)' : '1px solid rgba(108,99,255,0.15)',
                }}>
                  {s.icon}
                </div>
                <div style={{
                  ...svcStyles.cardTitle,
                  color: dark ? '#fff' : '#0E0E18',
                }}>
                  {s.title}
                </div>
                <div style={{
                  ...svcStyles.cardDesc,
                  color: dark ? 'rgba(255,255,255,0.55)' : '#5A5A7A',
                }}>
                  {s.desc}
                </div>
                <div style={svcStyles.cardTag}>{s.tag}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const svcStyles = {
  section: { padding: '80px 0' },
  inner: { maxWidth: 1100, margin: '0 auto', padding: '0 48px' },
  header: { textAlign: 'center', marginBottom: 56 },
  eyebrow: {
    fontFamily: "'DM Sans', sans-serif", fontSize: '0.7rem', fontWeight: 500,
    letterSpacing: '0.14em', textTransform: 'uppercase', color: '#6C63FF',
    marginBottom: 12,
  },
  heading: {
    fontFamily: 'Georgia, serif', fontSize: 'clamp(2rem, 3vw, 2.8rem)',
    fontWeight: 700, lineHeight: 1.2, letterSpacing: '-0.02em', marginBottom: 16,
  },
  sub: {
    fontFamily: "'DM Sans', sans-serif", fontSize: '1rem', fontWeight: 300,
    lineHeight: 1.75, maxWidth: 480, margin: '0 auto',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: 16,
  },
  card: {
    borderRadius: 16, padding: '24px', cursor: 'default',
  },
  iconWrap: {
    width: 44, height: 44, borderRadius: 10,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    marginBottom: 16, flexShrink: 0,
  },
  cardTitle: {
    fontFamily: "'DM Sans', sans-serif", fontSize: '15px', fontWeight: 600,
    marginBottom: 8,
  },
  cardDesc: {
    fontFamily: "'DM Sans', sans-serif", fontSize: '13px', fontWeight: 300,
    lineHeight: 1.65, marginBottom: 14,
  },
  cardTag: {
    fontFamily: "'DM Sans', sans-serif", fontSize: '10px', fontWeight: 500,
    letterSpacing: '0.08em', color: '#6C63FF',
    background: 'rgba(108,99,255,0.1)', border: '1px solid rgba(108,99,255,0.2)',
    borderRadius: 6, padding: '3px 8px', display: 'inline-block',
  },
};

Object.assign(window, { VLServices });
