export default function AnimatedBg() {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    >
      {/* Base — light ground with very subtle crimson warmth */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(135deg, #F5F8FA 0%, #EEF3F7 45%, #F7F0F0 100%)',
        }}
      />

      {/* Animated grid */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(13,27,46,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(13,27,46,0.04) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          animation: 'grid-drift 12s linear infinite',
        }}
      />

      {/* Network SVG */}
      <svg
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
        viewBox="0 0 1024 768"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        {/* Static connector lines — visible on light bg */}
        <line x1="0" y1="120" x2="280" y2="240" stroke="rgba(204,34,41,0.14)" strokeWidth="1" />
        <line x1="280" y1="240" x2="520" y2="180" stroke="rgba(204,34,41,0.10)" strokeWidth="1" />
        <line x1="520" y1="180" x2="780" y2="300" stroke="rgba(204,34,41,0.12)" strokeWidth="1" />
        <line x1="780" y1="300" x2="1024" y2="220" stroke="rgba(204,34,41,0.10)" strokeWidth="1" />
        <line x1="150" y1="0" x2="280" y2="240" stroke="rgba(13,27,46,0.07)" strokeWidth="1" />
        <line x1="280" y1="240" x2="420" y2="500" stroke="rgba(13,27,46,0.06)" strokeWidth="1" />
        <line x1="520" y1="180" x2="600" y2="480" stroke="rgba(13,27,46,0.07)" strokeWidth="1" />
        <line x1="600" y1="480" x2="780" y2="300" stroke="rgba(13,27,46,0.06)" strokeWidth="1" />
        <line x1="780" y1="300" x2="900" y2="550" stroke="rgba(204,34,41,0.10)" strokeWidth="1" />
        <line x1="900" y1="550" x2="1024" y2="600" stroke="rgba(204,34,41,0.08)" strokeWidth="1" />
        <line x1="420" y1="500" x2="600" y2="480" stroke="rgba(13,27,46,0.06)" strokeWidth="1" />
        <line x1="420" y1="500" x2="200" y2="650" stroke="rgba(204,34,41,0.09)" strokeWidth="1" />
        <line x1="600" y1="480" x2="750" y2="700" stroke="rgba(13,27,46,0.06)" strokeWidth="1" />

        {/* Animated data-flow dashes — crimson */}
        <line
          x1="0" y1="120" x2="280" y2="240"
          stroke="rgba(204,34,41,0.45)"
          strokeWidth="1.5"
          strokeDasharray="12 8"
          style={{ animation: 'flow-dash 3s linear infinite' }}
        />
        <line
          x1="520" y1="180" x2="780" y2="300"
          stroke="rgba(204,34,41,0.35)"
          strokeWidth="1.5"
          strokeDasharray="10 10"
          style={{ animation: 'flow-dash 4.5s linear infinite 1.2s' }}
        />
        <line
          x1="280" y1="240" x2="420" y2="500"
          stroke="rgba(204,34,41,0.3)"
          strokeWidth="1"
          strokeDasharray="8 12"
          style={{ animation: 'flow-dash 5s linear infinite 0.6s' }}
        />
        <line
          x1="600" y1="480" x2="780" y2="300"
          stroke="rgba(204,34,41,0.28)"
          strokeWidth="1"
          strokeDasharray="10 8"
          style={{ animation: 'flow-dash-rev 4s linear infinite 2s' }}
        />
        <line
          x1="780" y1="300" x2="900" y2="550"
          stroke="rgba(204,34,41,0.38)"
          strokeWidth="1.5"
          strokeDasharray="8 10"
          style={{ animation: 'flow-dash 3.5s linear infinite 0.8s' }}
        />

        {/* Nodes */}
        {[
          { cx: 280, cy: 240, r: 4, delay: '0s' },
          { cx: 520, cy: 180, r: 5, delay: '0.8s' },
          { cx: 780, cy: 300, r: 4, delay: '1.6s' },
          { cx: 420, cy: 500, r: 3, delay: '0.4s' },
          { cx: 600, cy: 480, r: 4, delay: '1.2s' },
          { cx: 900, cy: 550, r: 3, delay: '2s' },
          { cx: 150, cy: 0, r: 3, delay: '0.3s' },
          { cx: 200, cy: 650, r: 3, delay: '1.8s' },
        ].map(({ cx, cy, r, delay }, i) => (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r={r}
            fill="#CC2229"
            style={{
              animation: `pulse-node 3s ease-in-out infinite ${delay}`,
              transformOrigin: `${cx}px ${cy}px`,
            }}
          />
        ))}

        {/* Small navy nodes */}
        {[
          { cx: 50, cy: 400 }, { cx: 700, cy: 100 }, { cx: 950, cy: 400 }, { cx: 350, cy: 700 },
        ].map(({ cx, cy }, i) => (
          <circle
            key={`n${i}`}
            cx={cx}
            cy={cy}
            r="2.5"
            fill="rgba(13,27,46,0.2)"
            style={{
              animation: `pulse-node 4s ease-in-out infinite ${i * 0.9}s`,
              transformOrigin: `${cx}px ${cy}px`,
            }}
          />
        ))}
      </svg>

      {/* Floating squares */}
      {[
        { top: '12%', left: '8%', size: 6, delay: '0s', dur: '6s' },
        { top: '28%', right: '12%', size: 8, delay: '1.5s', dur: '7s' },
        { top: '65%', left: '18%', size: 5, delay: '0.8s', dur: '5.5s' },
        { top: '78%', right: '22%', size: 7, delay: '2.2s', dur: '8s' },
        { top: '42%', left: '72%', size: 4, delay: '1s', dur: '6.5s' },
        { top: '18%', left: '55%', size: 6, delay: '3s', dur: '7s' },
        { top: '88%', left: '60%', size: 5, delay: '0.4s', dur: '6s' },
      ].map(({ top, left, right, size, delay, dur }, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            top,
            left,
            right,
            width: size,
            height: size,
            border: '1px solid rgba(204,34,41,0.35)',
            animation: `float-sq ${dur} ease-in-out infinite ${delay}`,
          }}
        />
      ))}

      {/* Subtle crimson tint corners */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '40%',
          height: '40%',
          background: 'radial-gradient(ellipse at top left, rgba(204,34,41,0.05) 0%, transparent 70%)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: '40%',
          height: '40%',
          background: 'radial-gradient(ellipse at bottom right, rgba(204,34,41,0.06) 0%, transparent 70%)',
        }}
      />

      {/* Scanline */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          height: '2px',
          background: 'linear-gradient(90deg, transparent, rgba(204,34,41,0.1), transparent)',
          animation: 'scanline 10s linear infinite',
        }}
      />
    </div>
  )
}
