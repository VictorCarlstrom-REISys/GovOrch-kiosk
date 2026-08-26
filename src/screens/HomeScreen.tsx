import React from 'react'
import Logo from '../components/Logo'
import pointerIcon from '@/imports/pointer-icon.svg'
import awardableBadge from '@/imports/awardable.png'

type Screen = 'factsheet' | 'casestudy' | 'architecture' | 'video'

interface Props {
  onNavigate: (s: Screen) => void
}

const tiles: {
  id: Screen
  label: string
  sub: string
  icon: React.ReactElement
  accent: string
}[] = [
  {
    id: 'factsheet',
    label: 'Fact Sheet',
    sub: 'Core capabilities, mission alignment & key differentiators',
    accent: '#CC2229',
    icon: (
      <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
        <rect x="4" y="2" width="22" height="30" rx="2" stroke="#CC2229" strokeWidth="2" />
        <rect x="10" y="6" width="10" height="2" rx="1" fill="#CC2229" />
        <rect x="8" y="12" width="14" height="1.5" rx="0.75" fill="rgba(204,34,41,0.5)" />
        <rect x="8" y="16" width="14" height="1.5" rx="0.75" fill="rgba(204,34,41,0.5)" />
        <rect x="8" y="20" width="10" height="1.5" rx="0.75" fill="rgba(204,34,41,0.5)" />
        <circle cx="30" cy="28" r="7" fill="#F5F8FA" stroke="#CC2229" strokeWidth="1.5" />
        <line x1="28" y1="28" x2="32" y2="28" stroke="#CC2229" strokeWidth="1.5" />
        <line x1="30" y1="26" x2="30" y2="30" stroke="#CC2229" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    id: 'casestudy',
    label: 'Use Case',
    sub: 'Department of War: agentic data orchestration across mission systems',
    accent: '#CC2229',
    icon: (
      <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
        <rect x="3" y="10" width="32" height="24" rx="2" stroke="#CC2229" strokeWidth="2" />
        <rect x="11" y="3" width="16" height="10" rx="1" stroke="#CC2229" strokeWidth="1.5" />
        <line x1="19" y1="10" x2="19" y2="13" stroke="#CC2229" strokeWidth="1.5" />
        <rect x="9" y="17" width="8" height="10" rx="1" fill="rgba(204,34,41,0.12)" stroke="rgba(204,34,41,0.4)" strokeWidth="1" />
        <rect x="21" y="17" width="8" height="10" rx="1" fill="rgba(204,34,41,0.12)" stroke="rgba(204,34,41,0.4)" strokeWidth="1" />
        <circle cx="13" cy="20" r="2" fill="#CC2229" />
        <circle cx="25" cy="20" r="2" fill="#CC2229" />
      </svg>
    ),
  },
  {
    id: 'architecture',
    label: 'Architecture',
    sub: 'System topology: how databases and services interconnect',
    accent: '#CC2229',
    icon: (
      <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
        <circle cx="19" cy="19" r="5" fill="#1B2A4A" stroke="#CC2229" strokeWidth="2" />
        <circle cx="6" cy="10" r="3.5" stroke="#CC2229" strokeWidth="1.5" fill="rgba(204,34,41,0.15)" />
        <circle cx="32" cy="10" r="3.5" stroke="#CC2229" strokeWidth="1.5" fill="rgba(204,34,41,0.15)" />
        <circle cx="6" cy="28" r="3.5" stroke="#CC2229" strokeWidth="1.5" fill="rgba(204,34,41,0.15)" />
        <circle cx="32" cy="28" r="3.5" stroke="#CC2229" strokeWidth="1.5" fill="rgba(204,34,41,0.15)" />
        <circle cx="19" cy="4" r="3" stroke="rgba(204,34,41,0.6)" strokeWidth="1.5" fill="none" />
        <circle cx="19" cy="34" r="3" stroke="rgba(204,34,41,0.6)" strokeWidth="1.5" fill="none" />
        <line x1="9" y1="12" x2="15" y2="16" stroke="#CC2229" strokeWidth="1.2" />
        <line x1="29" y1="12" x2="23" y2="16" stroke="#CC2229" strokeWidth="1.2" />
        <line x1="9" y1="26" x2="15" y2="22" stroke="#CC2229" strokeWidth="1.2" />
        <line x1="29" y1="26" x2="23" y2="22" stroke="#CC2229" strokeWidth="1.2" />
        <line x1="19" y1="7" x2="19" y2="14" stroke="rgba(204,34,41,0.5)" strokeWidth="1.2" />
        <line x1="19" y1="24" x2="19" y2="31" stroke="rgba(204,34,41,0.5)" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    id: 'video',
    label: 'Video Overview',
    sub: 'See GovOrch AI in action — a 3-minute platform walkthrough',
    accent: '#CC2229',
    icon: (
      <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
        <rect x="2" y="7" width="26" height="20" rx="2.5" stroke="#CC2229" strokeWidth="2" />
        <path d="M28 14l8-5v16l-8-5V14z" stroke="#CC2229" strokeWidth="2" strokeLinejoin="round" />
        <circle cx="15" cy="17" r="5" fill="rgba(204,34,41,0.12)" stroke="#CC2229" strokeWidth="1.5" />
        <path d="M13 15l5 2.5-5 2.5V15z" fill="#CC2229" />
      </svg>
    ),
  },
]

export default function HomeScreen({ onNavigate }: Props) {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 'clamp(24px, 4vh, 48px) clamp(20px, 4vw, 60px)',
        position: 'relative',
      }}
    >
      {/* Header + Hero grouped together */}
      <div style={{ textAlign: 'center', animation: 'fade-in-up 0.6s ease both', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'clamp(16px, 3vh, 28px)' }}>
        <div>
          <div className="hero-pairing">
            <Logo size="lg" showTagline />
            <img height="80px" width="80px" src={awardableBadge} alt="Awardable Content" />
          </div>
          <div
            style={{
              marginTop: 16,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 10,
            }}
          >
            <div style={{ height: 1, width: 40, background: 'rgba(204,34,41,0.4)' }} />
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 11,
                letterSpacing: '0.2em',
                color: 'rgba(204,34,41,0.75)',
                textTransform: 'uppercase',
              }}
            >
              CDAO TRADEWINDS AWARDABLE
            </span>
            <div style={{ height: 1, width: 40, background: 'rgba(204,34,41,0.4)' }} />
          </div>
        </div>

        {/* Hero text */}
        <div
          style={{
            textAlign: 'center',
            animation: 'fade-in-up 0.6s ease 0.15s both',
            maxWidth: 700,
          }}
        >
        <div
          style={{
            fontFamily: "'Roboto Condensed', sans-serif",
            fontWeight: 300,
            fontSize: '54px',
            color: 'rgba(13,27,46,0.75)',
            letterSpacing: '1.16px',
            lineHeight: 1.2,
          }}
        >
          Data isn't the problem.
        </div>
        <div
          style={{
            fontFamily: "'Roboto Condensed', sans-serif",
            fontWeight: 800,
            fontSize: '108px',
            color: '#CC2229',
            letterSpacing: '0.01em',
            lineHeight: 1,
            textTransform: 'uppercase',
          }}
        >
          Access is.
        </div>
        <div
          style={{
            marginTop: 12,
            fontFamily: "'Roboto', sans-serif",
            fontWeight: 400,
            fontSize: '18px',
            width: '500px',
            color: 'rgb(13, 27, 46)',
            lineHeight: 1.6,
          }}
        >
          From <strong>Fragmented Data</strong> to <strong>Mission-Ready Decisions</strong><br />
            <span className="tag-line">GovOrch™</span> AI solves data interoperability across existing defense systems through governed, reusable orchestration<br /><br />
          <br />
          Touch a section below to learn more.
        </div>
        </div>
      </div>

      {/* Navigation tiles */}
      <div
        style={{
          width: '100%',
          maxWidth: 900,
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 'clamp(12px, 2vw, 20px)',
          animation: 'fade-in-up 0.6s ease 0.3s both',
        }}
      >
        {tiles.map((tile, i) => (
          <TileButton
            key={tile.id}
            tile={tile}
            delay={i * 0.06}
            onNavigate={onNavigate}
          />
        ))}
      </div>
      <div className="cta-section" style={{
          width: '100%',
          maxWidth: 900,
          display: 'grid',
          animation: 'fade-in-up 0.6s ease 0.3s both',
        }}>
        <button onClick={() => window.open('https://events.teams.microsoft.com/event/2565552a-e690-49bc-95f5-8e569f245795@31996441-7546-4120-826b-df0c3e239671?source=copyLinkLegacyShareEventDialog', '_blank')} className="tile"><img src={pointerIcon} alt="" />&nbsp;<em>Sign up for Demo Day:</em>&nbsp; September 16th <em>&nbsp;at&nbsp;</em> 10am.</button>
      </div>

      {/* Footer */}
      <div style={{ textAlign: 'center', animation: 'fade-in-up 0.6s ease 0.5s both' }}>
        <div
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 14,
            letterSpacing: '0.15em',
            color: 'rgba(13,27,46,0.75)',
            textTransform: 'uppercase',
          }}
        >
          Touch any tile to explore • Scroll within sections for more
        </div>
      </div>
    </div>
  )
}

function TileButton({
  tile,
  delay,
  onNavigate,
}: {
  tile: (typeof tiles)[0]
  delay: number
  onNavigate: (s: Screen) => void
}) {
  return (
    <button
      onClick={() => onNavigate(tile.id)}
      style={{
        background: 'rgba(255,255,255,0.85)',
        border: '1px solid #cc222966',
        borderRadius: 4,
        padding: 'clamp(20px, 3vw, 32px) clamp(20px, 3vw, 28px)',
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        textAlign: 'left',
        cursor: 'pointer',
        transition: 'all 0.25s ease',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        position: 'relative',
        overflow: 'hidden',
        userSelect: 'none',
        animation: `fade-in-up 0.5s ease ${0.35 + delay}s both`,
        boxShadow: '0 2px 12px rgba(13,27,46,0.07)',
      }}
      onPointerDown={(e) => {
        const el = e.currentTarget
        el.style.transform = 'scale(0.97)'
        el.style.borderColor = 'rgba(204,34,41,0.8)'
        el.style.background = 'rgba(204,34,41,0.06)'
        el.style.boxShadow = '0 4px 20px rgba(204,34,41,0.15)'
      }}
      onPointerUp={(e) => {
        const el = e.currentTarget
        el.style.transform = 'scale(1)'
        el.style.borderColor = 'rgba(204,34,41,0.25)'
        el.style.background = 'rgba(255,255,255,0.85)'
        el.style.boxShadow = '0 2px 12px rgba(13,27,46,0.07)'
      }}
      onPointerLeave={(e) => {
        const el = e.currentTarget
        el.style.transform = 'scale(1)'
        el.style.borderColor = 'rgba(204,34,41,0.25)'
        el.style.background = 'rgba(255,255,255,0.85)'
        el.style.boxShadow = '0 2px 12px rgba(13,27,46,0.07)'
      }}
    >
      {/* Corner accent */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: 40,
          height: 40,
          borderLeft: '1px solid #cc222966',
          borderBottom: '1px solid #cc222966',
          borderBottomLeftRadius: 4,
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: 28,
          height: 28,
          borderRight: '1px solid #cc222966',
          borderTop: '1px solid #cc222966',
          borderTopRightRadius: 4,
        }}
      />

      <div>{tile.icon}</div>

      <div>
        <div
          style={{
            fontFamily: "'Roboto Condensed', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(20px, 2.5vw, 28px)',
            color: '#0D1B2E',
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
            lineHeight: 1,
          }}
        >
          {tile.label}
        </div>
        <div
          style={{
            marginTop: 6,
            fontFamily: "'Roboto', sans-serif",
            fontSize: 'clamp(12px, 1.4vw, 14px)',
            color: 'rgba(13,27,46,0.75)',
            lineHeight: 1.5,
          }}
        >
          {tile.sub}
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 4 }}>
        <div style={{ height: 1, width: 20, background: 'rgba(204,34,41,0.5)' }} />
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 12,
            color: 'rgba(204,34,41,0.80)',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
          }}
        >
          TAP TO EXPLORE
        </span>
      </div>
    </button>
  )
}
