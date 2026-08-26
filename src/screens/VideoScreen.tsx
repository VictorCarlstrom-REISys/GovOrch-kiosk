import { useState } from 'react'
import ScreenShell from '../components/ScreenShell'

export default function VideoScreen({ onBack }: { onBack: () => void }) {
  const [playing, setPlaying] = useState(false)

  return (
    <ScreenShell onBack={onBack} title="Video Overview" label="PLATFORM DEMO">
      <div style={{ maxWidth: 860, margin: '0 auto' }}>
        {/* Video player area */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            aspectRatio: '16/9',
            background: '#ffffff',
            border: '1px solid rgba(13,27,46,0.1)',
            borderRadius: 4,
            overflow: 'hidden',
            marginBottom: 28,
            cursor: playing ? 'default' : 'pointer',
            boxShadow: '0 2px 16px rgba(13,27,46,0.08)',
          }}
          onClick={() => !playing && setPlaying(true)}
        >
          {!playing ? (
            <>
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(135deg, #EEF3F7 0%, #F7F0F0 60%, #EEF3F7 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  gap: 24,
                }}
              >
                {/* Network animation */}
                <svg
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.5 }}
                  viewBox="0 0 800 450"
                  fill="none"
                  preserveAspectRatio="xMidYMid slice"
                >
                  <line x1="0" y1="150" x2="300" y2="225" stroke="rgba(204,34,41,0.3)" strokeWidth="1" strokeDasharray="6 8"
                    style={{ animation: 'flow-dash 4s linear infinite' }} />
                  <line x1="300" y1="225" x2="500" y2="180" stroke="rgba(204,34,41,0.25)" strokeWidth="1" strokeDasharray="6 8"
                    style={{ animation: 'flow-dash 3.5s linear infinite 1s' }} />
                  <line x1="500" y1="180" x2="800" y2="250" stroke="rgba(204,34,41,0.28)" strokeWidth="1" strokeDasharray="6 8"
                    style={{ animation: 'flow-dash 4.5s linear infinite 0.5s' }} />
                  <line x1="200" y1="0" x2="300" y2="225" stroke="rgba(27,42,74,0.12)" strokeWidth="1" />
                  <line x1="300" y1="225" x2="400" y2="450" stroke="rgba(27,42,74,0.12)" strokeWidth="1" />
                  <line x1="500" y1="180" x2="600" y2="450" stroke="rgba(27,42,74,0.12)" strokeWidth="1" />
                  {[{ cx: 300, cy: 225 }, { cx: 500, cy: 180 }].map((n, i) => (
                    <circle key={i} cx={n.cx} cy={n.cy} r="5" fill="#CC2229"
                      style={{ animation: `pulse-node 2.5s ease-in-out infinite ${i * 0.8}s`, transformOrigin: `${n.cx}px ${n.cy}px` }} />
                  ))}
                </svg>

                {/* Play button */}
                <div
                  style={{
                    position: 'relative',
                    zIndex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    background: 'rgba(204,34,41,0.08)',
                    border: '2px solid #CC2229',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M10 7l14 7-14 7V7z" fill="#CC2229" />
                  </svg>
                </div>

                <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                  <div
                    style={{
                      fontFamily: "'Roboto Condensed', sans-serif",
                      fontWeight: 700,
                      fontSize: 'clamp(18px, 3vw, 28px)',
                      color: '#0D1B2E',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                    }}
                  >
                    GovOrch AI — Platform Overview
                  </div>
                  <div
                    style={{
                      marginTop: 6,
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 13,
                      color: 'rgba(204,34,41,1)',
                      letterSpacing: '0.15em',
                    }}
                  >
                    TAP TO PLAY // 5:12
                  </div>
                </div>
              </div>
            </>
          ) : (
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/KtEu49WB8rY?autoplay=1"
              title="GovOrch AI Overview"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
            />
          )}
        </div>

        {/* Description row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto',
            gap: 24,
            alignItems: 'start',
            marginBottom: 40,
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "'Roboto Condensed', sans-serif",
                fontWeight: 700,
                fontSize: 'clamp(20px, 2.5vw, 28px)',
                color: '#0D1B2E',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                marginBottom: 10,
              }}
            >
              See GovOrch AI in Action
            </div>
            <p
              style={{
                fontFamily: "'Roboto', sans-serif",
                fontSize: 'clamp(13px, 1.5vw, 15px)',
                color: 'rgba(13,27,46,0.75)',
                lineHeight: 1.75,
                margin: 0,
              }}
            >
              REI’s Agentic AI Data Orchestration Platform helps the Department of War connect fragmented data across systems, enclaves, and security boundaries to deliver governed, decision-ready mission insights.

            </p>
          </div>

          <div
            style={{
              background: '#ffffff',
              border: '1px solid rgba(204,34,41,0.2)',
              borderRadius: 3,
              padding: '14px 20px',
              textAlign: 'center',
              flexShrink: 0,
              boxShadow: '0 1px 6px rgba(13,27,46,0.05)',
            }}
          >
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 24,
                color: '#CC2229',
                fontWeight: 500,
              }}
            >
              5:12
            </div>
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 9,
                color: 'rgba(13,27,46,0.75)',
                letterSpacing: '0.12em',
                marginTop: 4,
              }}
            >
              RUNTIME
            </div>
          </div>
        </div>

        {/* Chapter markers */}
        {/* <div style={{ marginBottom: 40 }}>
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 10,
              color: 'rgba(204,34,41,0.75)',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              marginBottom: 12,
            }}
          >
            VIDEO CHAPTERS
          </div>

          {[
            { time: '0:00', label: 'The Federal Data Access Problem', active: true },
            { time: '0:42', label: 'How GovOrch AI Orchestrates Data', active: false },
            { time: '1:30', label: 'Live Platform Demonstration', active: false },
            { time: '2:45', label: 'Deployment & Integration Overview', active: false },
            { time: '3:10', label: 'Tradewinds Procurement Pathway', active: false },
          ].map((ch) => (
            <div
              key={ch.time}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                padding: '12px 0',
                borderBottom: '1px solid rgba(13,27,46,0.07)',
                cursor: 'pointer',
              }}
            >
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11,
                  color: ch.active ? '#CC2229' : 'rgba(13,27,46,0.75)',
                  letterSpacing: '0.1em',
                  minWidth: 36,
                }}
              >
                {ch.time}
              </span>
              <div
                style={{
                  width: ch.active ? 8 : 4,
                  height: ch.active ? 8 : 4,
                  borderRadius: '50%',
                  background: ch.active ? '#CC2229' : 'rgba(13,27,46,0.2)',
                  flexShrink: 0,
                  transition: 'all 0.15s ease',
                }}
              />
              <span
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontSize: 'clamp(13px, 1.4vw, 15px)',
                  color: ch.active ? '#0D1B2E' : 'rgba(13,27,46,0.75)',
                  fontWeight: ch.active ? 600 : 400,
                }}
              >
                {ch.label}
              </span>
            </div>
          ))}
        </div> */}
      </div>
    </ScreenShell>
  )
}
