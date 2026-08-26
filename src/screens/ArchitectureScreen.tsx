import ScreenShell from '../components/ScreenShell'

const platforms = ['ADVANA', 'Palantir', 'C3.ai', 'Databricks', 'IBM Cloud Pak', 'Snowflake', 'Amazon S3', 'PostgreSQL']

function Cylinder({
  cx, cyTop, rx, ry, bodyH, fill, stroke, label1, label2,
}: {
  cx: number; cyTop: number; rx: number; ry: number; bodyH: number
  fill: string; stroke: string; label1: string; label2?: string
}) {
  const cyBot = cyTop + bodyH
  const midY = cyTop + bodyH / 2
  const textY = label2 ? midY - 5 : midY + 5
  return (
    <g>
      <rect x={cx - rx} y={cyTop} width={rx * 2} height={bodyH} fill={fill} stroke="none" />
      <line x1={cx - rx} y1={cyTop} x2={cx - rx} y2={cyBot} stroke={stroke} strokeWidth="1.5" />
      <line x1={cx + rx} y1={cyTop} x2={cx + rx} y2={cyBot} stroke={stroke} strokeWidth="1.5" />
      <ellipse cx={cx} cy={cyBot} rx={rx} ry={ry} fill={fill} stroke={stroke} strokeWidth="1.5" />
      <ellipse cx={cx} cy={cyTop} rx={rx} ry={ry} fill={fill} stroke={stroke} strokeWidth="1.5" />
      <text x={cx} y={textY} textAnchor="middle" fontFamily="Barlow Condensed, sans-serif" fontWeight="700" fontSize="10" fill={stroke} letterSpacing="0.5">{label1}</text>
      {label2 && <text x={cx} y={textY + 13} textAnchor="middle" fontFamily="Barlow Condensed, sans-serif" fontWeight="700" fontSize="10" fill={stroke} letterSpacing="0.5">{label2}</text>}
    </g>
  )
}

function AgentBox({
  x, y, w, h, fill, stroke, textColor, label, sublabel, rx = 3,
}: {
  x: number; y: number; w: number; h: number
  fill: string; stroke?: string; textColor: string
  label: string; sublabel?: string; rx?: number
}) {
  const labelY = sublabel ? y + h / 2 - 4 : y + h / 2 + 5
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={rx} fill={fill} stroke={stroke} strokeWidth={stroke ? 1.5 : 0} />
      <text x={x + w / 2} y={labelY} textAnchor="middle" fontFamily="Barlow Condensed, sans-serif" fontWeight="700" fontSize="11" fill={textColor} letterSpacing="0.5">
        {label}
      </text>
      {sublabel && (
        <text x={x + w / 2} y={labelY + 14} textAnchor="middle" fontFamily="Barlow, sans-serif" fontSize="9" fill={textColor} fillOpacity={0.72}>
          {sublabel}
        </text>
      )}
    </g>
  )
}

function BiArrow({ x1, y1, x2, y2, color, animated }: {
  x1: number; y1: number; x2: number; y2: number; color: string; animated?: boolean
}) {
  const isH = y1 === y2
  const style = animated ? { animation: 'flow-dash 3s linear infinite' } : {}
  return (
    <g>
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={`${color}28`} strokeWidth="2" />
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="1.5" strokeDasharray="6 7" style={style} />
      {isH ? (
        <>
          <path d={`M${x2 - 7} ${y2 - 4} L${x2} ${y2} L${x2 - 7} ${y2 + 4}`} stroke={color} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <path d={`M${x1 + 7} ${y1 - 4} L${x1} ${y1} L${x1 + 7} ${y1 + 4}`} stroke={color} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </>
      ) : (
        <>
          <path d={`M${x2 - 4} ${y2 - 7} L${x2} ${y2} L${x2 + 4} ${y2 - 7}`} stroke={color} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <path d={`M${x1 - 4} ${y1 + 7} L${x1} ${y1} L${x1 + 4} ${y1 + 7}`} stroke={color} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </>
      )}
    </g>
  )
}

function OneWayArrow({ x1, y1, x2, y2, color }: {
  x1: number; y1: number; x2: number; y2: number; color: string
}) {
  const isH = y1 === y2
  return (
    <g>
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={`${color}35`} strokeWidth="2" />
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="1.5" strokeDasharray="5 6"
        style={{ animation: 'flow-dash 2.8s linear infinite' }} />
      {isH
        ? <path d={`M${x2 - 7} ${y2 - 4} L${x2} ${y2} L${x2 - 7} ${y2 + 4}`} stroke={color} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        : <path d={`M${x2 - 4} ${y2 - 7} L${x2} ${y2} L${x2 + 4} ${y2 - 7}`} stroke={color} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      }
    </g>
  )
}

export default function ArchitectureScreen({ onBack }: { onBack: () => void }) {
  // ── Layout constants ──────────────────────────────────────
  const cxCenter = 380
  const colW = 300                        // center column width
  const cLeft  = cxCenter - colW / 2     // 230
  const cRight = cxCenter + colW / 2     // 530

  // Side agent boxes — narrow to expose arrow corridors
  const lAgentX = 10
  const lAgentW = 116                    // right edge 126  →  gap to cLeft = 104 px
  const lAgentH = 52                     // tall enough for 2-line labels
  const rAgentX = 626                    // left edge 626   →  gap from cRight = 96 px
  const rAgentW = 116                    // right edge 742
  const rAgentH = 48

  const arrowGap = 14

  // Inner orchestrator boxes
  const innerAgentX = cLeft + 14
  const innerAgentW = colW - 28

  // Row Y positions — extra spacing so arrows between blocks are clearly visible
  const yUser = 12
  const yAsk  = 92     // +40px gap below USER (was 62)
  const yOrch = 182    // +40px gap below ASK GOVORCH (was 112)

  // Orchestrator height — compact to keep arrows visible
  const orchH = 148

  // Right agents — 3 agents distributed with tight padding
  const rPad   = 10
  const rGap   = 8
  const rAgentHc = 38                                  // right agent height (compact)
  const rA1y   = yOrch + rPad                         // Catalog Search top
  const rA2y   = rA1y + rAgentHc + rGap               // Policy Compliance top
  const rA3y   = rA2y + rAgentHc + rGap               // Pipeline Generation top

  // Inner orchestrator boxes — centres must align with left agent centres
  const innerAgentH = 34
  // Centre both inner boxes vertically within the orchestrator (gap = 10px)
  const innerPairH = innerAgentH * 2 + 10
  const yPlan = yOrch + Math.round((orchH - innerPairH) / 2)
  const yExec = yPlan + innerAgentH + 10

  // Left agents — centres aligned to inner box centres
  const lA1y   = yPlan + innerAgentH / 2 - lAgentH / 2  // Schema Discovery top
  const lA2y   = yOrch + 109 - lAgentH / 2               // Response Agent top

  // Event bus & below
  const yEvent  = yOrch + orchH + 44  // +44px gap below ORCHESTRATOR (was 22)
  const eventH  = 46
  const yData   = yEvent + eventH + 22
  const dataH   = 106
  const yScript = yData + dataH + 10
  const scriptH = 42
  const totalH  = yScript + scriptH + 14

  // DB cylinders — positioned in the side gaps at event-bus level
  const dbRx    = 56
  const dbRy    = 12
  const dbBodyH = 40
  const dbCyTop = yEvent + 3
  const lDbCx   = lAgentX + lAgentW / 2 + 4          // ~67
  const rDbCx   = rAgentX + rAgentW / 2 - 4          // ~679

  const blueAgent   = '#1B3A80'
  const tealAgent   = '#155040'
  const purpleFill   = '#5C3A9E'
  const purpleText = '#ffffff' 
  const purpleStroke = '#fff'   // text/border on cylinders
  //const purpleStroke = '#B493E8'   // text/border on cylinders
  const purpleArrow  = '#7B4FBF'  // arrow color

  return (
    <ScreenShell onBack={onBack} title="Architecture" label="SYSTEM TOPOLOGY">
      <div style={{ marginBottom: 'clamp(16px, 2.5vh, 24px)', width: '100%' }}>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: 'rgba(204,34,41,1)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 8 }}>
          CODE STRUCTURE // DATA ORCHESTRATION
        </div>
        <div style={{ fontFamily: "'Roboto Condensed', sans-serif", fontWeight: 700, fontSize: 'clamp(22px, 3.5vw, 34px)', color: '#0D1B2E', letterSpacing: '0.04em', textTransform: 'uppercase', lineHeight: 1.1, marginBottom: 10 }}>
          A New Approach to Data Interoperability
        </div>
        <p style={{ fontFamily: "'Roboto', sans-serif", fontSize: 'clamp(13px, 1.5vw, 15px)', color: 'rgba(13,27,46,1)', lineHeight: 1.7, margin: 0 }}>
          GovOrch™ AI is an agentic AI powered data orchestration platform that solves the challenge of limited data interoperability across fragmented systems. It connects to data where it resides, automatically discovers and harmonizes schemas, and builds ETL pipelines to deliver insights through natural language queries, creating a horizontal intelligence layer that enables agencies to answer cross-system questions in minutes and operate with real-time clarity.
        </p>
      </div>

      {/* ── Diagram ── */}
      <div style={{ width: '100%', background: '#ffffff', border: '1px solid rgba(13,27,46,0.1)', borderRadius: 4, padding: 'clamp(12px, 2vw, 20px)', marginBottom: 28, overflowX: 'auto', boxShadow: '0 1px 8px rgba(13,27,46,0.06)' }}>
        <svg viewBox={`0 0 760 ${totalH}`} style={{ width: '100%', minWidth: 540, display: 'block' }} fill="none">

          {/* ── USER ── */}
          <rect x={cxCenter - 90} y={yUser} width={180} height={36} rx="3"
            fill="rgba(190,230,248,0.35)" stroke="#1B2A4A" strokeWidth="1.5" />
          {/* Person icon: head + shoulders */}
          <circle cx={cxCenter - 52} cy={yUser + 13} r="6" fill="none" stroke="#1B2A4A" strokeWidth="1.5" />
          <path d={`M${cxCenter - 64} ${yUser + 34} C${cxCenter - 64} ${yUser + 24} ${cxCenter - 40} ${yUser + 24} ${cxCenter - 40} ${yUser + 34}`}
            fill="none" stroke="#1B2A4A" strokeWidth="1.5" strokeLinecap="round" />
          <text x={cxCenter - 22} y={yUser + 24} fontFamily="Barlow Condensed, sans-serif" fontWeight="800" fontSize="14" fill="#0D1B2E" letterSpacing="2">USER</text>

          {/* USER ↔ ASK GOVORCH */}
          <BiArrow x1={cxCenter} y1={yUser + 36} x2={cxCenter} y2={yAsk} color="#1B2A4A" animated />

          {/* ── ASK GOVORCH ── */}
          <rect x={cxCenter - 110} y={yAsk} width={220} height={36} rx="3"
            fill="#ffffff" stroke="#1B2A4A" strokeWidth="1.5" />
          <text x={cxCenter} y={yAsk + 23} textAnchor="middle" fontFamily="Barlow Condensed, sans-serif" fontWeight="800" fontSize="14" fill="#0D1B2E" letterSpacing="2">ASK GOVORCH</text>

          {/* ASK GOVORCH ↔ ORCHESTRATOR */}
          <BiArrow x1={cxCenter} y1={yAsk + 36} x2={cxCenter} y2={yOrch} color="#CC2229" animated />

          {/* ── ORCHESTRATOR outer ── */}
          <rect x={cLeft} y={yOrch} width={colW} height={orchH} rx="3"
            fill="rgba(245,248,250,0.97)" stroke="#CC2229" strokeWidth="2" />
          <text x={cxCenter} y={yOrch + 17} textAnchor="middle"
            fontFamily="Barlow Condensed, sans-serif" fontWeight="800" fontSize="13"
            fill="#CC2229" letterSpacing="2.5">ORCHESTRATOR</text>

          {/* Planning Agent (inner) */}
          <AgentBox x={innerAgentX} y={yPlan} w={innerAgentW} h={innerAgentH}
            fill="#0D1B2E" textColor="#ffffff" label="Planning Agent" />

          {/* Execution & Routing Agent (inner) */}
          <AgentBox x={innerAgentX} y={yExec} w={innerAgentW} h={innerAgentH}
            fill="#0D1B2E" textColor="#ffffff" label="Execution & Routing Agent" />

          {/* ── LEFT agents ── */}
          {/* Schema Discovery Agent */}
          <AgentBox x={lAgentX} y={lA1y} w={lAgentW} h={lAgentH}
            fill={blueAgent} textColor="#ffffff"
            label="Schema Discovery" sublabel="Agent" />
          <BiArrow
            x1={lAgentX + lAgentW + arrowGap} y1={yPlan + innerAgentH / 2}
            x2={cLeft - arrowGap}             y2={yPlan + innerAgentH / 2}
            color={blueAgent} animated />

          {/* Response Agent */}
          <AgentBox x={lAgentX} y={lA2y} w={lAgentW} h={lAgentH}
            fill={blueAgent} textColor="#ffffff"
            label="Response Agent" sublabel="(Align & Combine)" />
          <BiArrow
            x1={lAgentX + lAgentW + arrowGap} y1={yOrch + 109}
            x2={cLeft - arrowGap}             y2={yOrch + 109}
            color={blueAgent} animated />

          {/* ── RIGHT agents ── */}
          {/* Catalog Search Agent */}
          <AgentBox x={rAgentX} y={rA1y} w={rAgentW} h={rAgentHc}
            fill={tealAgent} textColor="#ffffff"
            label="Catalog Search" sublabel="Agent" />
          <BiArrow
            x1={cRight + arrowGap} y1={rA1y + rAgentHc / 2}
            x2={rAgentX - arrowGap} y2={rA1y + rAgentHc / 2}
            color={tealAgent} animated />

          {/* Policy Compliance Engine */}
          <AgentBox x={rAgentX} y={rA2y} w={rAgentW} h={rAgentHc}
            fill={tealAgent} textColor="#ffffff"
            label="Policy Compliance" sublabel="Engine" />
          <BiArrow
            x1={cRight + arrowGap} y1={rA2y + rAgentHc / 2}
            x2={rAgentX - arrowGap} y2={rA2y + rAgentHc / 2}
            color={tealAgent} animated />

          {/* Pipeline Generation Agents */}
          <AgentBox x={rAgentX} y={rA3y} w={rAgentW} h={rAgentHc}
            fill={tealAgent} textColor="#ffffff"
            label="Pipeline Generation" sublabel="Agents" />
          <BiArrow
            x1={cRight + arrowGap} y1={rA3y + rAgentHc / 2}
            x2={rAgentX - arrowGap} y2={rA3y + rAgentHc / 2}
            color={tealAgent} animated />

          {/* ORCHESTRATOR ↔ EVENT BUS */}
          <BiArrow x1={cxCenter} y1={yOrch + orchH} x2={cxCenter} y2={yEvent} color="#CC2229" animated />

          {/* ── EVENT BUS ── */}
          <rect x={cLeft} y={yEvent} width={colW} height={eventH} rx="3"
            fill="rgba(204,34,41,0.07)" stroke="#CC2229" strokeWidth="2" />
          <text x={cxCenter} y={yEvent + eventH / 2 + 7} textAnchor="middle"
            fontFamily="Barlow Condensed, sans-serif" fontWeight="800" fontSize="17"
            fill="#CC2229" letterSpacing="3">EVENT BUS</text>

          {/* ── Left DB: Federated Knowledge-Graph ── */}
          <Cylinder cx={lDbCx} cyTop={dbCyTop} rx={dbRx} ry={dbRy} bodyH={dbBodyH}
            fill={purpleFill} stroke={purpleStroke} 
            label1="Federated" label2="Knowledge-Graph" />
          <BiArrow
            x1={lDbCx + dbRx + arrowGap} y1={dbCyTop + dbBodyH / 2}
            x2={cLeft - arrowGap}        y2={dbCyTop + dbBodyH / 2}
            color={purpleArrow} animated />

          {/* ── Right DB: Federated Learning Models Repository ── */}
          <Cylinder cx={rDbCx} cyTop={dbCyTop} rx={dbRx} ry={dbRy} bodyH={dbBodyH}
            fill={purpleFill} stroke={purpleStroke}
            label1="Federated Learning" label2="Models' Repository" />
          <BiArrow
            x1={cRight + arrowGap}       y1={dbCyTop + dbBodyH / 2}
            x2={rDbCx - dbRx - arrowGap} y2={dbCyTop + dbBodyH / 2}
            color={purpleArrow} animated />

          {/* EVENT BUS → DATA CONNECTIONS */}
          <BiArrow x1={cxCenter} y1={yEvent + eventH} x2={cxCenter} y2={yData} color="#0D1B2E" animated />

          {/* ── DATA CONNECTIONS AND CATALOG ── */}
          <rect x="10" y={yData} width="740" height={dataH} rx="3"
            fill="#ffffff" stroke="#0D1B2E" strokeWidth="1.5" />
          <rect x="10" y={yData} width="740" height="24" rx="3" fill="#0D1B2E" />
          <rect x="10" y={yData + 14} width="740" height="10" fill="#0D1B2E" />
          <text x="380" y={yData + 16} textAnchor="middle"
            fontFamily="JetBrains Mono, monospace" fontSize="9.5"
            fill="#ffffff" letterSpacing="2">DATA CONNECTIONS AND CATALOG</text>

          {/* Platform tiles */}
          {platforms.map((name, i) => {
            const tileW = 86
            const tileGap = 4
            const startX = 10 + (740 - platforms.length * tileW - (platforms.length - 1) * tileGap) / 2
            const tx = startX + i * (tileW + tileGap)
            const ty = yData + 30
            return (
              <g key={name}>
                <rect x={tx} y={ty} width={tileW} height={28} rx="2"
                  fill="#F5F8FA" stroke="rgba(13,27,46,0.15)" strokeWidth="1" />
                <text x={tx + tileW / 2} y={ty + 18} textAnchor="middle"
                  fontFamily="Barlow, sans-serif" fontSize="9" fill="#0D1B2E" fontWeight="600">{name}</text>
              </g>
            )
          })}

          {/* Description Generator Agent */}
          <rect x="18" y={yData + 65} width="724" height="30" rx="2" fill="#1B5FBF" />
          <text x="380" y={yData + 85} textAnchor="middle"
            fontFamily="Barlow Condensed, sans-serif" fontWeight="700" fontSize="13"
            fill="#ffffff" letterSpacing="1">Description Generator Agent</text>

          {/* ── GovOrch.Script ── */}
          <rect x="10" y={yScript} width="740" height={scriptH} rx="3"
            fill="#0D1B2E" stroke="#CC2229" strokeWidth="1.5" />
          <text x="380" y={yScript + scriptH / 2 + 8} textAnchor="middle"
            fontFamily="Barlow Condensed, sans-serif" fontWeight="800" fontSize="22" letterSpacing="3">
            <tspan fill="#ffffff">Gov</tspan>
            <tspan fill="#CC2229">Orch</tspan>
            <tspan fill="rgba(255,255,255,0.4)">.</tspan>
            <tspan fill="#ffffff">Script</tspan>
          </text>
        </svg>
      </div>

      {/* Legend */}
      <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', marginBottom: 28, padding: '14px 18px', background: '#ffffff', border: '1px solid rgba(13,27,46,0.08)', borderRadius: 3, boxShadow: '0 1px 4px rgba(13,27,46,0.04)' }}>
        {[
          { color: '#1B3A80', label: 'Input / Discovery Agents' },
          { color: '#155040', label: 'Output / Generation Agents' },
          { color: '#CC2229', label: 'Orchestration & Event Layer' },
          { color: '#7B4FBF', label: 'Federated Database Stores' },
          { color: '#1B5FBF', label: 'AI Generation Agent' },
        ].map((l) => (
          <div key={l.label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 12, height: 12, borderRadius: 2, background: l.color, flexShrink: 0 }} />
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: 'rgba(13,27,46,0.75)', letterSpacing: '0.06em' }}>{l.label}</span>
          </div>
        ))}
      </div>

      {/* GovOrch AI Capability + Mission Impact */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(12px, 2vw, 20px)', marginBottom: 40, alignItems: 'stretch' }}>

        {/* ── GovOrch AI Capability ── */}
        <div style={{ background: '#ffffff', border: '1px solid rgba(13,27,46,0.08)', borderTop: '2px solid #CC2229', borderRadius: '0 0 4px 4px', padding: 'clamp(16px, 2vw, 24px)', boxShadow: '0 1px 8px rgba(13,27,46,0.05)' }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: 'rgba(204,34,41,1)', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 6 }}>Platform</div>
          <div style={{ fontFamily: "'Roboto Condensed', sans-serif", fontWeight: 800, fontSize: 'clamp(16px, 2vw, 22px)', color: '#0D1B2E', letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: 20 }}>GovOrch AI Capability</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              {
                label: 'Cross-System Data Connections',
                icon: (
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <ellipse cx="6" cy="8" rx="4" ry="5.5" stroke="#CC2229" strokeWidth="1.5" />
                    <ellipse cx="16" cy="14" rx="4" ry="5.5" stroke="#CC2229" strokeWidth="1.5" />
                    <path d="M10 8 Q13 11 12 14" stroke="#CC2229" strokeWidth="1.5" strokeLinecap="round" />
                    <circle cx="10" cy="8" r="1.5" fill="#CC2229" />
                    <circle cx="12" cy="14" r="1.5" fill="#CC2229" />
                  </svg>
                ),
              },
              {
                label: 'Anomaly & Work-Order Correlation',
                icon: (
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <rect x="3" y="5" width="16" height="12" rx="2" stroke="#CC2229" strokeWidth="1.5" />
                    <path d="M6 13 L8 10 L11 12 L14 8 L16 10" stroke="#CC2229" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="16" cy="7" r="2.5" fill="#CC2229" />
                    <path d="M15 7 L17 7 M16 6 L16 8" stroke="white" strokeWidth="1" strokeLinecap="round" />
                  </svg>
                ),
              },
              {
                label: 'Governed Natural-Language Pipelines',
                icon: (
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M3 5 Q3 3 5 3 H17 Q19 3 19 5 V13 Q19 15 17 15 H12 L8 19 V15 H5 Q3 15 3 13 Z" stroke="#CC2229" strokeWidth="1.5" strokeLinejoin="round" />
                    <path d="M7 9 Q9 7 11 9 Q13 11 15 9" stroke="#CC2229" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                ),
              },
              {
                label: 'Data Lineage & Source Traceability',
                icon: (
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <rect x="2" y="3" width="18" height="16" rx="2" stroke="#CC2229" strokeWidth="1.5" />
                    <path d="M2 7 H20" stroke="#CC2229" strokeWidth="1" />
                    <path d="M6 11 H16 M6 14 H13" stroke="#CC2229" strokeWidth="1.2" strokeLinecap="round" />
                    <circle cx="16" cy="15" r="2.5" fill="none" stroke="#CC2229" strokeWidth="1.2" />
                    <path d="M15.3 14.3 L16.7 15.7" stroke="#CC2229" strokeWidth="1" strokeLinecap="round" />
                  </svg>
                ),
              },
              {
                label: 'Sensor-to-Maintenance Mapping',
                icon: (
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <rect x="3" y="8" width="6" height="6" rx="1" stroke="#CC2229" strokeWidth="1.5" />
                    <rect x="13" y="8" width="6" height="6" rx="1" stroke="#CC2229" strokeWidth="1.5" />
                    <path d="M9 11 H13" stroke="#CC2229" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M6 8 V5 H16 V8" stroke="#CC2229" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 12px', borderRadius: 3, background: 'rgba(13,27,46,0.03)', border: '1px solid rgba(204,34,41,0.15)' }}>
                <div style={{ flexShrink: 0, width: 34, height: 34, borderRadius: '50%', border: '1.5px solid rgba(204,34,41,0.4)', background: 'rgba(204,34,41,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {item.icon}
                </div>
                <span style={{ fontFamily: "'Roboto', sans-serif", fontSize: 'clamp(12px, 1.3vw, 14px)', color: '#0D1B2E', lineHeight: 1.35 }}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Mission Impact ── */}
        <div style={{ background: '#0D1B2E', borderTop: '2px solid #CC2229', borderRadius: '0 0 4px 4px', padding: 'clamp(16px, 2vw, 24px)', boxShadow: '0 1px 8px rgba(13,27,46,0.12)' }}>
          <div style={{ marginBottom: 20 }}>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: 'rgba(255,255,255,.75)', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 6 }}>Outcomes</div>
            <div style={{ fontFamily: "'Roboto Condensed', sans-serif", fontWeight: 800, fontSize: 'clamp(16px, 2vw, 22px)', color: '#ffffff', letterSpacing: '0.04em', textTransform: 'uppercase' }}>Mission Impact</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              { label: 'Earlier Readiness-Risk Detection', icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="8" cy="8" r="5" stroke="white" strokeWidth="1.4" /><line x1="12" y1="12" x2="16" y2="16" stroke="white" strokeWidth="1.4" strokeLinecap="round" /><path d="M8 5 L8 8 L10 10" stroke="#CC2229" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg> },
              { label: 'Faster Maintenance Prioritization', icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="6" stroke="white" strokeWidth="1.4" /><path d="M9 5 V9 L12 11" stroke="#CC2229" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /><path d="M13 2 L15 4" stroke="white" strokeWidth="1.4" strokeLinecap="round" /></svg> },
              { label: 'Reduced Manual Reconciliation', icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="6" cy="9" r="4" stroke="white" strokeWidth="1.4" /><circle cx="12" cy="9" r="4" stroke="white" strokeWidth="1.4" /><path d="M9 6 Q10 9 9 12" stroke="#CC2229" strokeWidth="1.2" strokeLinecap="round" /></svg> },
              { label: 'Greater Analytical Transparency', icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><ellipse cx="9" cy="9" rx="7" ry="4" stroke="white" strokeWidth="1.4" /><circle cx="9" cy="9" r="2" fill="#CC2229" /><line x1="2" y1="9" x2="16" y2="9" stroke="white" strokeWidth="1" strokeOpacity="0.3" /></svg> },
              { label: 'Improved Fleet Readiness Decisions', icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 13 L7 7 L10 10 L13 5 L16 8" stroke="#CC2229" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /><path d="M14 5 L16 5 L16 7" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg> },
            ].map((item) => (
              <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 12px', borderRadius: 3, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(204,34,41,0.2)' }}>
                <div style={{ flexShrink: 0, width: 34, height: 34, borderRadius: '50%', border: '1.5px solid #CC2229', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {item.icon}
                </div>
                <span style={{ fontFamily: "'Roboto', sans-serif", fontSize: 'clamp(12px, 1.3vw, 14px)', color: 'rgba(255,255,255,0.88)', lineHeight: 1.35 }}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </ScreenShell>
  )
}
