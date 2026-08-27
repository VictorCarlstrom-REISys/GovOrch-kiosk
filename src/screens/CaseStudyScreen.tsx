import ScreenShell from '../components/ScreenShell'
import govOrchIcon from '@/imports/goicon.svg'
//const govOrchIcon = new URL('imports/goicon.svg', import.meta.url).href;

const sections = [
  {
    phase: 'The Challenge',
    color: '#CC2229',
    heading: 'A Lack of Orchestration, Not Data',
    body: 'Across the Department, the challenge is not a lack of data. It is a lack of orchestration. Data sits across mission, sustainment, finance, acquisition, and operational systems, forcing users to work around disconnected tools to answer critical questions.',
  },
  {
    phase: 'The Platform',
    color: '#1B3A80',
    heading: 'A Governed Orchestration Layer Across Existing Systems',
    body: 'GovOrch AI connects across the platforms already powering Department systems — from Snowflake and Palantir to Databricks, AWS, and Azure — creating a governed orchestration layer without centralizing data. No migration. No downtime. No schema modification.',
  },
]

const workflowSteps = [
  {
    step: '01',
    label: 'Connections',
    color: '#1B3A80',
    heading: 'Discover and Validate Data Sources',
    body: 'The engineer begins in Connections, where GovOrch lists available data sources across the environment. DoW-relevant sources include sensor telemetry, Army GCSS maintenance data, contract and evaluation records, and other operational datasets. The engineer can test a connection, inspect available datasets, and confirm that sources are ready for governed use before mission users depend on the results.',
  },
  {
    step: '02',
    label: 'Data Pipelines',
    color: '#155040',
    heading: 'Build Pipelines in Natural Language',
    body: 'From there, the engineer moves into Data Pipelines. GovOrch shows recent workflow runs, status, timing, and pipeline structure. The engineer can create a new pipeline in natural language and review the workflow visually, step by step. Each node can be inspected, giving technical teams a clear view of how data is being prepared, transformed, and governed before it is used to support mission decisions.',
  },
  {
    step: '03',
    label: 'Ask GovOrch',
    color: '#CC2229',
    heading: 'Mission Users Query Across Connected Data',
    body: 'An aviation sustainment officer starts by asking what data is available. GovOrch summarizes relevant maintenance, telemetry, supply, finance, contract, and readiness-related sources — the entire landscape in one workspace, including which sources are available and what kinds of questions each can support.',
    subItems: [
      {
        label: 'Trace Readiness Lineage',
        body: 'The officer asks how to trace aircraft readiness across sensor readings and open maintenance work orders. GovOrch maps the lineage across sensor telemetry, Army GCSS maintenance data, and PUBLOG supply information — showing which systems are involved, how the information connects, and where readiness indicators are coming from.',
      },
      {
        label: 'Identify Emerging Degradation',
        body: 'To identify emerging readiness degradation, the officer asks which aircraft has both an active anomaly flag and an open maintenance work order. GovOrch correlates telemetry, maintenance, and logistics data to identify the specific asset at risk — including fault correlation, maintenance status, and readiness impact. The officer can see not only the answer, but the path behind it.',
      },
      {
        label: 'Interactive Visualization',
        body: 'GovOrch converts the analysis into an interactive visualization. An officer can compare open work orders by priority level from Army GCSS — covering 104 open orders across 65 equipment users. Nearly half the open backlog is urgent or critical, and the relatively high number of Very High priority open orders may warrant immediate attention.',
      },
    ],
  },
]

export default function CaseStudyScreen({ onBack }: { onBack: () => void }) {
  return (
    <ScreenShell onBack={onBack} title="Use Case" label="DEPARTMENT OF WAR">

      {/* Hero */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 24,
        padding: 'clamp(20px, 3vw, 32px)',
        background: '#ffffff',
        border: '1px solid rgba(204,34,41,0.5)',
        borderRadius: 4,
        marginBottom: 'clamp(28px, 4vh, 44px)',
        boxShadow: '0 1px 10px rgba(13,27,46,0.06)',
      }}>
        <div style={{ flexShrink: 0 }}>
          <img src={govOrchIcon} alt="GovOrch AI" width={72} height={72} style={{ display: 'block', objectFit: 'contain' }} />
        </div>
        <div>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: 'rgba(204,34,41,1)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 6 }}>
            USE CASE // DEPARTMENT OF WAR
          </div>
          <div style={{ fontFamily: "'Roboto Condensed', sans-serif", fontWeight: 800, fontSize: 'clamp(20px, 3vw, 32px)', color: '#0D1B2E', letterSpacing: '0.04em', textTransform: 'uppercase', lineHeight: 1.1 }}>
            Agentic Data Orchestration Across Department Systems
          </div>
          <div style={{ marginTop: 10, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {['Sustainment & Readiness', 'Cross-System Queries', 'Natural Language Pipelines', 'CDAO Tradewinds Awardable'].map((tag) => (
              <span key={tag} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: 'rgba(13,27,46,0.75)', letterSpacing: '0.07em', padding: '3px 8px', border: '1px solid rgba(13,27,46,0.15)', borderRadius: 2, background: 'rgba(13,27,46,0.03)' }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Challenge + Platform sections */}
      {sections.map((s) => (
        <div key={s.phase} style={{ marginBottom: 'clamp(24px, 3.5vh, 40px)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
            <div style={{ fontFamily: "'Roboto Condensed', sans-serif", fontWeight: 800, fontSize: 11, color: s.color, letterSpacing: '0.25em', textTransform: 'uppercase', padding: '4px 12px', border: `1px solid ${s.color}`, borderRadius: 2, background: '#fff' }}>
              {s.phase}
            </div>
            <div style={{ height: 1, flex: 1, background: `${s.color}50` }} />
          </div>
          <div style={{ fontFamily: "'Roboto Condensed', sans-serif", fontWeight: 700, fontSize: 'clamp(17px, 2.2vw, 24px)', color: '#0D1B2E', letterSpacing: '0.03em', textTransform: 'uppercase', marginBottom: 12, borderLeft: `3px solid ${s.color}`, paddingLeft: 16 }}>
            {s.heading}
          </div>
          <p style={{ fontFamily: "'Roboto', sans-serif", fontSize: 'clamp(13px, 1.5vw, 15px)', color: 'rgba(13,27,46,0.75)', lineHeight: 1.85, margin: 0, paddingLeft: 16 }}>
            {s.body}
          </p>
        </div>
      ))}

      {/* Workflow — Connections, Pipelines, Ask GovOrch */}
      <div style={{ marginBottom: 'clamp(24px, 3.5vh, 40px)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
          <div style={{ fontFamily: "'Roboto Condensed', sans-serif", fontWeight: 800, fontSize: 11, color: '#0D1B2E', letterSpacing: '0.25em', textTransform: 'uppercase', padding: '4px 12px', border: '1px solid rgba(13,27,46,0.5)', borderRadius: 2, background: '#fff' }}>
            Platform Walkthrough
          </div>
          <div style={{ height: 1, flex: 1, background: 'rgba(13,27,46,0.3)' }} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {workflowSteps.map((step) => (
            <div key={step.step} style={{ background: '#ffffff', border: '1px solid rgba(13,27,46,0.08)', borderLeft: `3px solid ${step.color}`, borderRadius: '0 4px 4px 0', padding: 'clamp(16px, 2vw, 24px)', boxShadow: '0 1px 6px rgba(13,27,46,0.04)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, fontWeight: 600, color: step.color, letterSpacing: '0.12em' }}>
                  STEP {step.step}
                </div>
                <div style={{ fontFamily: "'Roboto Condensed', sans-serif", fontWeight: 800, fontSize: 12, color: step.color, letterSpacing: '0.2em', textTransform: 'uppercase', padding: '2px 10px', border: `1px solid ${step.color}40`, borderRadius: 2, background: `${step.color}08` }}>
                  {step.label}
                </div>
              </div>
              <div style={{ fontFamily: "'Roboto Condensed', sans-serif", fontWeight: 700, fontSize: 'clamp(15px, 2vw, 20px)', color: '#0D1B2E', letterSpacing: '0.03em', textTransform: 'uppercase', marginBottom: 10 }}>
                {step.heading}
              </div>
              <p style={{ fontFamily: "'Roboto', sans-serif", fontSize: 'clamp(13px, 1.4vw, 14px)', color: 'rgba(13,27,46,0.75)', lineHeight: 1.8, margin: 0 }}>
                {step.body}
              </p>

              {step.subItems && (
                <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {step.subItems.map((sub) => (
                    <div key={sub.label} style={{ padding: '12px 16px', background: 'rgba(204,34,41,0.03)', border: '1px solid #CC222975', borderRadius: 3 }}>
                      <div style={{ fontFamily: "'Roboto Condensed', sans-serif", fontWeight: 700, fontSize: 13, color: '#CC2229', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 6 }}>
                        {sub.label}
                      </div>
                      <p style={{ fontFamily: "'Roboto', sans-serif", fontSize: 'clamp(12px, 1.3vw, 14px)', color: 'rgba(13,27,46,0.75)', lineHeight: 1.75, margin: 0 }}>
                        {sub.body}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Closing banner */}
      <div style={{ background: '#0D1B2E', borderLeft: '3px solid #CC2229', borderRadius: '0 4px 4px 0', padding: 'clamp(24px, 3vw, 36px)', marginBottom: 40, boxShadow: '0 2px 16px rgba(13,27,46,0.15)' }}>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: 'rgba(255,255,255,1)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 14 }}>
          Mission Scale
        </div>
        <p style={{ fontFamily: "'Roboto Condensed', sans-serif", fontWeight: 700, fontSize: 'clamp(16px, 2vw, 22px)', color: '#ffffff', lineHeight: 1.5, margin: '0 0 20px' }}>
          That same orchestration pattern scales across Department workflows — from sustainment and readiness to audit, acquisition, ISR fusion, and joint fires.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 20 }}>
          {['No more stovepipes', 'No more spreadsheet warfare', 'No more fragile custom integrations'].map((t) => (
            <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#CC2229', flexShrink: 0 }} />
              <span style={{ fontFamily: "'Roboto', sans-serif", fontSize: 'clamp(13px, 1.4vw, 15px)', color: 'rgba(255,255,255,0.75)' }}>{t}</span>
            </div>
          ))}
        </div>
        <div style={{ height: 1, background: 'rgba(204,34,41,.75)', marginBottom: 20 }} />
        <p style={{ fontFamily: "'Roboto Condensed', sans-serif", fontWeight: 800, fontSize: 'clamp(17px, 2.2vw, 24px)', color: '#ffffff', letterSpacing: '0.06em', textTransform: 'uppercase', margin: '0 0 10px' }}>
          Just governed, agentic data orchestration.
        </p>
        <p style={{ fontFamily: "'Roboto', sans-serif", fontSize: 'clamp(12px, 1.4vw, 14px)', color: 'rgba(255,255,255,0.75', margin: 0, letterSpacing: '0.04em' }}>
          GovOrch AI — Secure. Governed. Mission-driven. Now awardable on the CDAO Tradewinds Solutions Marketplace.
        </p>
      </div>

    </ScreenShell>
  )
}
