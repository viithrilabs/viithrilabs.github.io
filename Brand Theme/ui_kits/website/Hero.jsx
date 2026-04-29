// Hero.jsx — Coming-Soon / Hero section
// Export: window.VLHero

const VLHero = ({ onSubmit }) => {
  const [email, setEmail] = React.useState('');
  const [sent, setSent] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setTimeout(() => { setLoading(false); setSent(true); onSubmit && onSubmit(email); }, 900);
  };

  return (
    <div style={heroStyles.layout}>
      {/* LEFT — Brand Panel */}
      <section style={heroStyles.left} aria-label="About ViiThri Labs">
        <div style={heroStyles.glow1} aria-hidden="true" />
        <div style={heroStyles.glow2} aria-hidden="true" />

        {/* Logo */}
        <div style={heroStyles.logo}>
          <div style={heroStyles.logoMark}>
            <img src="../../assets/viithrilabs-icon.svg" alt="" style={{ width: 28, height: 28 }} />
          </div>
          <div>
            <div style={heroStyles.logoName}>ViiThri Labs</div>
            <div style={heroStyles.logoSub}>Studio &amp; Products</div>
          </div>
        </div>

        {/* Headline */}
        <h1 style={heroStyles.headline}>
          Building the digital future,<br />one product at a time.
        </h1>
        <p style={heroStyles.sub}>
          A product and services studio crafting games, apps, tools, and digital experiences for the world.
        </p>

        {/* Tags */}
        <div style={heroStyles.tags} role="list">
          {['Games', 'Mobile Apps', 'Web', 'VR/AR', 'Tools'].map(t => (
            <span key={t} style={heroStyles.tag} role="listitem">{t}</span>
          ))}
        </div>

        {/* Location */}
        <div style={heroStyles.location}>
          <div style={heroStyles.dot} />
          Chennai, India
        </div>
      </section>

      {/* RIGHT — Action Panel */}
      <section style={heroStyles.right} aria-label="Coming soon">
        {/* Status */}
        <div style={heroStyles.statusRow}>
          <div style={heroStyles.pulseDot}>
            <div style={heroStyles.pulseRing} />
          </div>
          <span style={heroStyles.statusText}>Website launching soon</span>
        </div>

        <h2 style={heroStyles.rightHeading}>Something great<br />is on its way.</h2>

        <div style={heroStyles.divider} />

        <p style={heroStyles.desc}>
          We're putting the finishing touches on our digital home. Leave your email and we'll let you know the moment we go live.
        </p>

        {/* Form / Success */}
        {sent ? (
          <div style={heroStyles.success}>
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="10" r="9" stroke="#4ADE80" strokeWidth="1.5"/>
              <path d="M6.5 10.5l2.5 2.5 4.5-5" stroke="#4ADE80" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            You're on the list! We'll reach out as soon as we launch.
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={heroStyles.form} noValidate>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="your@email.com"
              style={heroStyles.input}
              aria-label="Email address"
            />
            <button type="submit" disabled={loading} style={{
              ...heroStyles.btn,
              opacity: loading ? 0.7 : 1,
            }}>
              {loading ? 'Sending…' : 'Notify Me'}
            </button>
          </form>
        )}

        <p style={heroStyles.contactLine}>
          Or reach us at{' '}
          <a href="mailto:support@viithrilabs.in" style={heroStyles.link}>support@viithrilabs.in</a>
        </p>
      </section>
    </div>
  );
};

const heroStyles = {
  layout: { display: 'flex', minHeight: 'calc(100vh - 64px)' },

  // Left panel
  left: {
    background: '#0C0C14', color: '#fff',
    width: '45%', minHeight: '100%',
    display: 'flex', flexDirection: 'column',
    justifyContent: 'center', padding: '60px 56px',
    position: 'relative', overflow: 'hidden',
  },
  glow1: {
    position: 'absolute', top: -100, left: -100,
    width: 320, height: 320, borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(108,99,255,0.14) 0%, transparent 70%)',
    pointerEvents: 'none',
  },
  glow2: {
    position: 'absolute', bottom: -60, right: -60,
    width: 240, height: 240, borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(108,99,255,0.08) 0%, transparent 70%)',
    pointerEvents: 'none',
  },
  logo: { display: 'flex', alignItems: 'center', gap: 12, marginBottom: 52 },
  logoMark: {
    width: 48, height: 48, borderRadius: 10,
    background: 'rgba(108,99,255,0.18)', border: '1px solid rgba(108,99,255,0.35)',
    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
  },
  logoName: {
    fontFamily: 'Georgia, serif', fontSize: '1.2rem', fontWeight: 700,
    color: '#fff', lineHeight: 1.2,
  },
  logoSub: {
    fontFamily: "'DM Sans', sans-serif", fontSize: '0.68rem', fontWeight: 500,
    color: '#8D87FF', letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: 2,
  },
  headline: {
    fontFamily: 'Georgia, serif', fontSize: 'clamp(1.75rem, 2.8vw, 2.5rem)',
    fontWeight: 700, lineHeight: 1.25, marginBottom: 18, color: '#fff',
    letterSpacing: '-0.01em',
  },
  sub: {
    fontFamily: "'DM Sans', sans-serif", fontSize: '1rem', fontWeight: 300,
    lineHeight: 1.75, color: 'rgba(255,255,255,0.65)', marginBottom: 36, maxWidth: 380,
  },
  tags: { display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 52 },
  tag: {
    border: '1px solid rgba(108,99,255,0.4)', color: '#8D87FF',
    fontFamily: "'DM Sans', sans-serif", fontSize: '0.75rem', fontWeight: 500,
    letterSpacing: '0.06em', padding: '6px 14px', borderRadius: 9999,
    textTransform: 'uppercase',
  },
  location: {
    display: 'flex', alignItems: 'center', gap: 8, marginTop: 'auto',
    fontFamily: "'DM Sans', sans-serif", fontSize: '0.875rem',
    color: 'rgba(255,255,255,0.45)',
  },
  dot: { width: 8, height: 8, background: '#6C63FF', borderRadius: '50%', flexShrink: 0 },

  // Right panel
  right: {
    background: '#FAFAFA', width: '55%',
    display: 'flex', flexDirection: 'column',
    justifyContent: 'center', padding: '60px 64px',
  },
  statusRow: { display: 'flex', alignItems: 'center', gap: 8, marginBottom: 32 },
  pulseDot: {
    width: 10, height: 10, background: '#6C63FF', borderRadius: '50%',
    position: 'relative', flexShrink: 0,
  },
  pulseRing: {
    position: 'absolute', inset: -5, borderRadius: '50%',
    background: '#6C63FF', opacity: 0.25,
    animation: 'pulse 2s ease-in-out infinite',
  },
  statusText: {
    fontFamily: "'DM Sans', sans-serif", fontSize: '0.78rem', fontWeight: 500,
    letterSpacing: '0.12em', textTransform: 'uppercase', color: '#7A7A9A',
  },
  rightHeading: {
    fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
    fontWeight: 700, color: '#0E0E18', lineHeight: 1.2, marginBottom: 20,
    letterSpacing: '-0.01em',
  },
  divider: {
    width: 48, height: 3, background: '#6C63FF', borderRadius: 2, marginBottom: 22,
  },
  desc: {
    fontFamily: "'DM Sans', sans-serif", fontSize: '1rem', fontWeight: 300,
    lineHeight: 1.75, color: '#5A5A7A', marginBottom: 32, maxWidth: 420,
  },
  form: { display: 'flex', gap: 10, maxWidth: 460, marginBottom: 16 },
  input: {
    flex: 1, padding: '13px 16px',
    border: '1.5px solid #DCDCEA', borderRadius: 8,
    background: '#fff', fontFamily: "'DM Sans', sans-serif",
    fontSize: '0.95rem', color: '#0E0E18', outline: 'none',
  },
  btn: {
    padding: '13px 20px', background: '#6C63FF', color: '#fff',
    border: 'none', borderRadius: 8, fontFamily: "'DM Sans', sans-serif",
    fontSize: '0.875rem', fontWeight: 500, cursor: 'pointer',
    whiteSpace: 'nowrap', transition: 'background 0.2s',
  },
  success: {
    display: 'flex', alignItems: 'center', gap: 10,
    background: '#F0FDF4', border: '1px solid #BBF7D0',
    borderRadius: 8, padding: '12px 16px', maxWidth: 460,
    fontFamily: "'DM Sans', sans-serif", fontSize: '0.875rem',
    color: '#15803D', marginBottom: 16,
  },
  contactLine: {
    fontFamily: "'DM Sans', sans-serif", fontSize: '0.84rem', color: '#7A7A9A',
  },
  link: {
    color: '#6C63FF', fontWeight: 500, textDecoration: 'none',
    borderBottom: '1px solid transparent',
  },
};

Object.assign(window, { VLHero });
