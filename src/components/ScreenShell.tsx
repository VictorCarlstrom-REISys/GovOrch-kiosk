import Logo from './Logo'

interface Props {
  onBack: () => void
  title: string
  label: string
  children: React.ReactNode
}

export default function ScreenShell({ onBack, title, label, children }: Props) {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Sticky header */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '16px clamp(20px, 4vw, 48px)',
          background: 'rgba(245,248,250,0.94)',
          borderBottom: '1px solid rgba(204,34,41,0.2)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          gap: 16,
        }}
      >
        <button
          onClick={onBack}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            background: 'transparent',
            border: '1px solid rgba(204,34,41,0.4)',
            borderRadius: 3,
            padding: '8px 16px',
            cursor: 'pointer',
            color: '#CC2229',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            transition: 'all 0.2s ease',
            userSelect: 'none',
            flexShrink: 0,
          }}
          onPointerDown={(e) => {
            e.currentTarget.style.background = 'rgba(204,34,41,0.15)'
          }}
          onPointerUp={(e) => {
            e.currentTarget.style.background = 'transparent'
          }}
          onPointerLeave={(e) => {
            e.currentTarget.style.background = 'transparent'
          }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M9 2L4 7l5 5" stroke="#CC2229" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          HOME
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: 16, flex: 1, justifyContent: 'center' }}>
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 12,
              color: 'rgba(204,34,41,1)',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
            }}
          >
            {label}
          </div>
          <div style={{ height: 14, width: 1, background: 'rgba(204,34,41,0.3)' }} />
          <div
            style={{
              fontFamily: "'Roboto Condensed', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(16px, 2.5vw, 22px)',
              color: '#0D1B2E',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
            }}
          >
            {title}
          </div>
        </div>

        <div style={{ flexShrink: 0 }}>
          <Logo size="sm" />
        </div>
      </header>

      {/* Scrollable content */}
      <main
        style={{
          flex: 1,
          overflowY: 'auto',
          padding: 'clamp(24px, 4vh, 48px) clamp(20px, 5vw, 80px)',
          animation: 'fade-in-up 0.5s ease both',
        }}
      >
        {children}
      </main>
    </div>
  )
}
