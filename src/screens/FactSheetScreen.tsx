import ScreenShell from '../components/ScreenShell'

const capabilities = [
  {
    label: 'Discover Data\nAutomatically',
    icon: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        {/* Database cylinders */}
        <ellipse cx="16" cy="12" rx="9" ry="3.5" stroke="#CC2229" strokeWidth="1.8" />
        <rect x="7" y="12" width="18" height="10" fill="none" />
        <line x1="7" y1="12" x2="7" y2="22" stroke="#CC2229" strokeWidth="1.8" />
        <line x1="25" y1="12" x2="25" y2="22" stroke="#CC2229" strokeWidth="1.8" />
        <ellipse cx="16" cy="22" rx="9" ry="3.5" stroke="#CC2229" strokeWidth="1.8" />
        {/* Eye / scan indicator */}
        <circle cx="32" cy="14" r="7" fill="rgba(204,34,41,0.1)" stroke="#CC2229" strokeWidth="1.8" />
        <circle cx="32" cy="14" r="2.5" fill="#CC2229" />
        {/* Scan lines */}
        <line x1="21" y1="17" x2="25" y2="14" stroke="#CC2229" strokeWidth="1.4" strokeDasharray="2 2" />
        {/* Radar sweep */}
        <path d="M32 14 L39 8" stroke="rgba(204,34,41,0.5)" strokeWidth="1.2" />
        {/* Signal arcs */}
        <path d="M16 34 Q22 28 28 34" stroke="rgba(204,34,41,0.4)" strokeWidth="1.2" fill="none" />
        <path d="M12 38 Q22 29 32 38" stroke="rgba(204,34,41,0.25)" strokeWidth="1.2" fill="none" />
      </svg>
    ),
  },
  {
    label: 'Build Data\nPipelines Instantly',
    icon: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        {/* Source box */}
        <rect x="2" y="17" width="10" height="10" rx="2" fill="rgba(204,34,41,0.12)" stroke="#CC2229" strokeWidth="1.8" />
        {/* Middle box */}
        <rect x="17" y="17" width="10" height="10" rx="2" fill="rgba(204,34,41,0.18)" stroke="#CC2229" strokeWidth="1.8" />
        {/* Dest box */}
        <rect x="32" y="17" width="10" height="10" rx="2" fill="rgba(204,34,41,0.12)" stroke="#CC2229" strokeWidth="1.8" />
        {/* Arrows */}
        <path d="M12 22h5" stroke="#CC2229" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M15 19.5l2.5 2.5-2.5 2.5" stroke="#CC2229" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M27 22h5" stroke="#CC2229" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M30 19.5l2.5 2.5-2.5 2.5" stroke="#CC2229" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        {/* Lightning bolt — "instantly" */}
        <path d="M24 6l-3 7h5l-3 7" stroke="#CC2229" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: 'Query Systems in\nNatural Language',
    icon: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        {/* Speech bubble */}
        <path d="M6 8h24a3 3 0 013 3v12a3 3 0 01-3 3H18l-6 5v-5H9a3 3 0 01-3-3V11a3 3 0 013-3z"
          fill="rgba(204,34,41,0.08)" stroke="#CC2229" strokeWidth="1.8" strokeLinejoin="round" />
        {/* Waveform lines inside bubble */}
        <line x1="11" y1="17" x2="11" y2="17" stroke="#CC2229" strokeWidth="2" strokeLinecap="round" />
        <line x1="15" y1="14" x2="15" y2="20" stroke="#CC2229" strokeWidth="2" strokeLinecap="round" />
        <line x1="19" y1="12" x2="19" y2="22" stroke="#CC2229" strokeWidth="2" strokeLinecap="round" />
        <line x1="23" y1="15" x2="23" y2="19" stroke="#CC2229" strokeWidth="2" strokeLinecap="round" />
        <line x1="27" y1="17" x2="27" y2="17" stroke="#CC2229" strokeWidth="2" strokeLinecap="round" />
        {/* AI spark */}
        <path d="M36 28l1.5 3 3 1.5-3 1.5-1.5 3-1.5-3-3-1.5 3-1.5z" fill="#CC2229" />
      </svg>
    ),
  },
  {
    label: 'Maintain Security\nand Governance',
    icon: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        {/* Shield */}
        <path d="M22 4l14 5v10c0 9-6 16-14 19C14 35 8 28 8 19V9l14-5z"
          fill="rgba(204,34,41,0.08)" stroke="#CC2229" strokeWidth="1.8" strokeLinejoin="round" />
        {/* Checkmark */}
        <path d="M15 22l5 5 9-10" stroke="#CC2229" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        {/* Lock hasp at top */}
        <rect x="18" y="2" width="8" height="5" rx="2" fill="rgba(204,34,41,0.2)" stroke="#CC2229" strokeWidth="1.2" />
      </svg>
    ),
  },
]

const problemPoints = [
  'Data is fragmented across record systems, ERPs, and intel platforms',
  'Users pivot across NIPR, SIPR, & JWICS for answers',
  'Manual reconciliation & ad hoc integration persist',
  'Routine questions require technical support',
  'Integrations are brittle, custom and resource-constrained',
  "Data can't unify for JADC2 or mission decisions",
]

const agentStack = [
  { name: 'Schema Discovery Agent', bold: true },
  { name: 'Response Agent', bold: true },
  { name: 'Catalog Search and Pipeline Generation Agents', bold: true },
  { name: 'Policy Agent', bold: true },
]

const govOrchScriptCapabilities = [
  { term: 'Translate', detail: 'natural language requests into executable data pipelines' },
  { term: 'Operate', detail: 'across multiple platforms and data environments' },
  { term: 'Reduce AI hallucinations', detail: 'through deterministic, governed pipeline definitions' },
  { term: 'Automatically generate', detail: 'the infrastructure needed to run workflows' },
]

const useCases = [
  'Joint fires and targeting',
  'ISR fusion across domains',
  'Sustainment and readiness orchestration',
  'Financial management and audit reconciliation',
  'Acquisition and contracting visibility',
]

const keyBenefits = [
  'Faster decision cycles across mission and business systems',
  'Improved operational efficiency',
  'Open and extensible architecture',
  'Secure and policy-driven',
  'Government-owned and vendor neutral',
]

export default function FactSheetScreen({ onBack }: { onBack: () => void }) {
  return (
    <ScreenShell onBack={onBack} title="Fact Sheet" label="GOVORCH AI — DEPT. OF WAR">

      {/* ── Hero ── */}
      <div style={{ marginBottom: 'clamp(28px, 4vh, 44px)' }}>
        <div
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 14,
            color: 'rgba(204,34,41)',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            marginBottom: 10,
          }}
        >
          FACT SHEET
        </div>
        <h1
          style={{
            fontFamily: "'Roboto Condensed', sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(32px, 5.5vw, 60px)',
            color: '#0D1B2E',
            letterSpacing: '0.01em',
            lineHeight: 1.05,
            margin: '0 0 12px',
            textTransform: 'uppercase',
          }}
        >
          GovOrch™ AI:&nbsp;
          <span style={{ color: '#CC2229' }}>Department of War</span>
        </h1>
        <div
          style={{
            fontFamily: "'Roboto Condensed', sans-serif",
            fontWeight: 600,
            fontSize: 'clamp(16px, 2vw, 22px)',
            color: '#0D1B2E',
            letterSpacing: '0.03em',
            marginBottom: 14,
          }}
        >
          Unlocking Mission Data Orchestration with Agentic AI
        </div>
        <p
          style={{
            fontFamily: "'Roboto', sans-serif",
            fontSize: 'clamp(13px, 1.5vw, 15px)',
            color: 'rgba(13,27,46)',
            lineHeight: 1.8,
            margin: 0,
            // maxWidth: 820,
          }}
        >
          Across the Department of War, the challenge is not a lack of data — it is a lack of
          orchestration. Data is spread across thousands of systems, multiple enclaves, and security
          boundaries, and even with platforms like Advana, Vantage, PANDA, and Maven Smart System,
          teams still rely on manual reconciliation to answer critical questions. This fragmentation
          slows decisions and erodes advantage. Mission environments must move to governed, real-time
          orchestration.
        </p>
      </div>

      {/* ── 4 Capability tiles ── */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 'clamp(10px, 1.5vw, 16px)',
          marginBottom: 'clamp(32px, 5vh, 52px)',
        }}
      >
        {capabilities.map((c) => (
          <div
            key={c.label}
            style={{
              background: '#ffffff',
              border: '1px solid rgba(204,34,41,0.2)',
              borderTop: '3px solid #CC2229',
              borderRadius: '0 0 4px 4px',
              padding: 'clamp(18px, 2.5vw, 26px) clamp(14px, 2vw, 20px)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              gap: 14,
              boxShadow: '0 2px 10px rgba(13,27,46,0.06)',
            }}
          >
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: '50%',
                background: 'rgba(204,34,41,0.05)',
                border: '1px solid rgba(204,34,41,0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              {c.icon}
            </div>
            <div
              style={{
                fontFamily: "'Roboto Condensed', sans-serif",
                fontWeight: 700,
                fontSize: 'clamp(13px, 1.6vw, 16px)',
                color: '#0D1B2E',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                lineHeight: 1.25,
                whiteSpace: 'pre-line',
              }}
            >
              {c.label}
            </div>
          </div>
        ))}
      </div>

      {/* ── Platform description + Problem callout ── */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          gap: 'clamp(16px, 3vw, 32px)',
          marginBottom: 'clamp(28px, 4vh, 44px)',
          alignItems: 'start',
        }}
      >
        {/* Left: platform description */}
        <div>
          <SectionHeader label="THE PLATFORM" title="The GovOrch AI Solution" />
          <p
            style={{
              fontFamily: "'Roboto', sans-serif",
              fontSize: 'clamp(13px, 1.5vw, 15px)',
              color: 'rgba(13,27,46)',
              lineHeight: 1.8,
              marginBottom: 16,
            }}
          >
            <strong style={{ color: '#CC2229' }}>GovOrch™ AI</strong> is REI Systems' open, agentic
            AI-powered data orchestration platform built to transform how the Department operates
            across fragmented systems. At TRL 7, it works within the environments the Department
            already owns — no rip-and-replace required. It automatically discovers data, understands
            schemas, and generates governed pipelines that deliver insights in real time without
            centralizing data.
          </p>
          <p
            style={{
              fontFamily: "'Roboto', sans-serif",
              fontSize: 'clamp(13px, 1.5vw, 15px)',
              color: 'rgba(13,27,46)',
              lineHeight: 1.8,
              marginBottom: 16,
            }}
          >
            GovOrch AI uses autonomous AI agents to connect data across systems creating a horizontal
            intelligence layer that connects to existing systems and orchestrates data dynamically.
          </p>
          <div
            style={{
              padding: '14px 18px',
              background: 'rgba(204,34,41,0.05)',
              borderLeft: '3px solid #CC2229',
              borderRadius: '0 3px 3px 0',
            }}
          >
            <p
              style={{
                fontFamily: "'Roboto', sans-serif",
                fontWeight: 600,
                fontSize: 'clamp(13px, 1.5vw, 15px)',
                color: '#0D1B2E',
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              <strong>The result:</strong> faster, more informed decisions across warfighting, ISR,
              sustainment, financial management, and acquisition; reduced manual reconciliation; and a
              unified operational picture across systems.
            </p>
          </div>
          <div
            style={{
              marginTop: 14,
              padding: '14px 18px',
              background: '#0D1B2E',
              borderRadius: 3,
            }}
          >
            <p
              style={{
                fontFamily: "'Roboto Condensed', sans-serif",
                fontWeight: 700,
                fontSize: 'clamp(14px, 1.6vw, 17px)',
                color: '#ffffff',
                letterSpacing: '0.02em',
                margin: 0,
                lineHeight: 1.4,
              }}
            >
              GovOrch AI turns disconnected data into decision-ready workflows without the cost and
              complexity of traditional integration.
            </p>
          </div>
        </div>

        {/* Right: "data rich" callout */}
        <div
          style={{
            width: 'clamp(220px, 28vw, 300px)',
            background: '#ffffff',
            border: '1px solid rgba(204,34,41,0.25)',
            borderRadius: 4,
            padding: 'clamp(16px, 2.5vw, 24px)',
            boxShadow: '0 2px 12px rgba(13,27,46,0.07)',
            flexShrink: 0,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: 10,
              marginBottom: 14,
            }}
          >
            {/* Data-rich icon */}
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
              <path d="M14 3l3 8h8l-6.5 4.7 2.5 8L14 19l-7 4.7 2.5-8L3 11h8z" fill="rgba(204,34,41,0.15)" stroke="#CC2229" strokeWidth="1.5" strokeLinejoin="round" />
              <line x1="14" y1="8" x2="14" y2="12" stroke="#CC2229" strokeWidth="1.5" />
            </svg>
            <div
              style={{
                fontFamily: "'Roboto Condensed', sans-serif",
                fontWeight: 700,
                fontSize: 'clamp(15px, 1.8vw, 19px)',
                color: '#CC2229',
                letterSpacing: '0.02em',
                lineHeight: 1.2,
              }}
            >
              Is your organization data rich but mission insight poor?
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {problemPoints.map((pt) => (
              <div key={pt} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                <div
                  style={{
                    marginTop: 4,
                    width: 14,
                    height: 14,
                    borderRadius: '50%',
                    background: 'rgba(204,34,41,0.1)',
                    border: '1.5px solid rgba(204,34,41,0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <svg width="7" height="7" viewBox="0 0 7 7">
                    <path d="M1 3.5h5M3.5 1l2.5 2.5-2.5 2.5" stroke="#CC2229" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span
                  style={{
                    fontFamily: "'Roboto', sans-serif",
                    fontSize: 'clamp(11px, 1.2vw, 13px)',
                    color: 'rgba(13,27,46,0.75)',
                    lineHeight: 1.5,
                  }}
                >
                  {pt}
                </span>
              </div>
            ))}
          </div>
          <div
            style={{
              marginTop: 14,
              paddingTop: 12,
              borderTop: '1px solid rgba(13,27,46,0.08)',
              fontFamily: "'Roboto', sans-serif",
              fontSize: 'clamp(11px, 1.2vw, 13px)',
              color: 'rgba(13,27,46,0.75)',
              lineHeight: 1.6,
              fontStyle: 'italic',
            }}
          >
            When these conditions persist, the Department loses time, decision advantage, and mission
            agility.
          </div>
        </div>
      </div>

      {/* ── Core Agent Stack + GovOrch.Script ── */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'clamp(14px, 2.5vw, 24px)',
          marginBottom: 'clamp(28px, 4vh, 44px)',
        }}
      >
        {/* Core Agent Stack */}
        <div
          style={{
            background: '#ffffff',
            border: '1px solid rgba(13,27,46,0.1)',
            borderRadius: 4,
            padding: 'clamp(18px, 2.5vw, 28px)',
            boxShadow: '0 1px 8px rgba(13,27,46,0.05)',
          }}
        >
          <SectionHeader label="AGENT ARCHITECTURE" title="Core Agent Stack" />
          <p
            style={{
              fontFamily: "'Roboto', sans-serif",
              fontSize: 'clamp(12px, 1.3vw, 14px)',
              color: 'rgba(13,27,46,0.75)',
              lineHeight: 1.7,
              marginBottom: 16,
            }}
          >
            Components replace manual data integration and enable governed, real-time access across
            systems.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 16 }}>
            {agentStack.map((a) => (
              <div
                key={a.name}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  padding: '10px 14px',
                  background: 'rgba(204,34,41,0.04)',
                  border: '1px solid rgba(204,34,41,0.15)',
                  borderRadius: 3,
                }}
              >
                <div
                  style={{
                    width: 7,
                    height: 7,
                    background: '#CC2229',
                    borderRadius: '50%',
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontFamily: "'Roboto Condensed', sans-serif",
                    fontWeight: 700,
                    fontSize: 'clamp(13px, 1.4vw, 15px)',
                    color: '#0D1B2E',
                    letterSpacing: '0.03em',
                    textTransform: 'uppercase',
                  }}
                >
                  {a.name}
                </span>
              </div>
            ))}
          </div>
          <p
            style={{
              fontFamily: "'Roboto', sans-serif",
              fontSize: 'clamp(12px, 1.3vw, 14px)',
              color: 'rgba(13,27,46,0.75)',
              lineHeight: 1.65,
              margin: '0 0 12px',
            }}
          >
            At the center, the orchestrator with routing and execution agents collaborates with other
            agents to translate Ask GovOrch user questions into data-driven insights.
          </p>
          <ResultBadge text="Tasks that once required weeks of data engineering can be orchestrated in minutes." />
        </div>

        {/* GovOrch.Script */}
        <div
          style={{
            background: '#0D1B2E',
            border: '1px solid rgba(204,34,41,0.3)',
            borderRadius: 4,
            padding: 'clamp(18px, 2.5vw, 28px)',
            boxShadow: '0 1px 8px rgba(13,27,46,0.1)',
          }}
        >
          {/* Script wordmark */}
          <div style={{ marginBottom: 16 }}>
            <div
              style={{
                fontFamily: "'Roboto Condensed', sans-serif",
                fontWeight: 800,
                fontSize: 'clamp(20px, 2.8vw, 30px)',
                letterSpacing: '0.06em',
                lineHeight: 1,
              }}
            >
              <span style={{ color: '#ffffff' }}>Gov</span>
              <span style={{ color: '#CC2229' }}>Orch</span>
              <span style={{ color: 'rgba(255,255,255,0.5)' }}>.</span>
              <span style={{ color: '#ffffff' }}>Script</span>
            </div>
            <div
              style={{
                marginTop: 4,
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 12,
                color: 'rgba(255,255,255,0.75)',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
              }}
            >
              REI SYSTEMS' ORCHESTRATION LANGUAGE
            </div>
          </div>

          <p
            style={{
              fontFamily: "'Roboto', sans-serif",
              fontSize: 'clamp(12px, 1.3vw, 14px)',
              color: 'rgba(200,212,228)',
              lineHeight: 1.7,
              marginBottom: 18,
            }}
          >
            At the core of GovOrch™ AI is GovOrch.Script, REI Systems' orchestration language. With
            it, the platform can:
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {govOrchScriptCapabilities.map((cap) => (
              <div key={cap.term} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <div
                  style={{
                    marginTop: 3,
                    width: 14,
                    height: 14,
                    background: 'rgba(204,34,41,0.2)',
                    border: '1.5px solid #CC2229',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <svg width="7" height="7" viewBox="0 0 7 7">
                    <path d="M1 3.5h5M3.5 1l2.5 2.5-2.5 2.5" stroke="#CC2229" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div
                  style={{
                    fontFamily: "'Roboto', sans-serif",
                    fontSize: 'clamp(12px, 1.3vw, 14px)',
                    color: 'rgba(200,212,228,1)',
                    lineHeight: 1.55,
                  }}
                >
                  <strong style={{ color: '#ffffff', fontWeight: 600 }}>{cap.term}</strong>{' '}
                  {cap.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Use Cases + Key Benefits ── */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'clamp(14px, 2.5vw, 24px)',
          marginBottom: 40,
        }}
      >
        {/* Use Cases */}
        <div
          style={{
            background: '#ffffff',
            border: '1px solid rgba(13,27,46,0.1)',
            borderRadius: 4,
            padding: 'clamp(18px, 2.5vw, 28px)',
            boxShadow: '0 1px 8px rgba(13,27,46,0.05)',
          }}
        >
          <SectionHeader label="APPLICATIONS" title="Typical Department of War Use Cases" />
          <p
            style={{
              fontFamily: "'Roboto', sans-serif",
              fontSize: 'clamp(12px, 1.3vw, 14px)',
              color: 'rgba(13,27,46,0.75)',
              lineHeight: 1.7,
              marginBottom: 16,
            }}
          >
            GovOrch AI supports mission-critical operations and business workflows where data must be
            combined across systems to drive decisions:
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {useCases.map((uc) => (
              <div key={uc} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                <div
                  style={{
                    marginTop: 5,
                    width: 6,
                    height: 6,
                    background: '#CC2229',
                    borderRadius: '50%',
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontFamily: "'Roboto', sans-serif",
                    fontSize: 'clamp(12px, 1.4vw, 15px)',
                    color: 'rgba(13,27,46,0.75)',
                    lineHeight: 1.5,
                  }}
                >
                  {uc}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Key Benefits */}
        <div
          style={{
            background: '#ffffff',
            border: '1px solid rgba(13,27,46,0.1)',
            borderRadius: 4,
            padding: 'clamp(18px, 2.5vw, 28px)',
            boxShadow: '0 1px 8px rgba(13,27,46,0.05)',
          }}
        >
          <SectionHeader label="MISSION VALUE" title="Key Benefits for Department of War Missions" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 4 }}>
            {keyBenefits.map((b) => (
              <div
                key={b}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 12,
                  padding: '10px 14px',
                  background: 'rgba(13,27,46,0.02)',
                  border: '1px solid rgba(13,27,46,0.07)',
                  borderLeft: '3px solid rgba(204,34,41,0.5)',
                  borderRadius: '0 3px 3px 0',
                }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ marginTop: 1, flexShrink: 0 }}>
                  <circle cx="7" cy="7" r="6" fill="rgba(204,34,41,0.1)" stroke="#CC2229" strokeWidth="1.2" />
                  <path d="M4 7l2 2 4-4" stroke="#CC2229" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span
                  style={{
                    fontFamily: "'Roboto', sans-serif",
                    fontSize: 'clamp(12px, 1.4vw, 15px)',
                    color: 'rgba(13,27,46,0.75)',
                    lineHeight: 1.5,
                  }}
                >
                  {b}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ScreenShell>
  )
}

function SectionHeader({ label, title }: { label: string; title: string }) {
  return (
    <div style={{ marginBottom: 'clamp(12px, 2vh, 18px)' }}>
      <div
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 14,
          color: 'rgba(204,34,41)',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          marginBottom: 5,
        }}
      >
        {label}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ width: 3, height: 20, background: '#CC2229', borderRadius: 1, flexShrink: 0 }} />
        <div
          style={{
            fontFamily: "'Roboto Condensed', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(16px, 2.2vw, 22px)',
            color: '#0D1B2E',
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
            lineHeight: 1.1,
          }}
        >
          {title}
        </div>
      </div>
    </div>
  )
}

function ResultBadge({ text }: { text: string }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: 10,
        padding: '10px 14px',
        background: 'rgba(204,34,41,0.05)',
        border: '1px solid rgba(204,34,41,0.2)',
        borderRadius: 3,
      }}
    >
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ marginTop: 2, flexShrink: 0 }}>
        <path d="M7 1l1.5 4h4l-3.2 2.4 1.2 4L7 9 4.5 11.4l1.2-4L2.5 5h4z" fill="#CC2229" />
      </svg>
      <span
        style={{
          fontFamily: "'Roboto', sans-serif",
          fontWeight: 600,
          fontSize: 'clamp(11px, 1.2vw, 13px)',
          color: '#0D1B2E',
          lineHeight: 1.55,
        }}
      >
        <strong>The result:</strong> {text}
      </span>
    </div>
  )
}
