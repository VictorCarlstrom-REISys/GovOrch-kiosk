import React, { useState, useEffect } from 'react'
import AnimatedBg from './components/AnimatedBg'
import HomeScreen from './screens/HomeScreen'
import FactSheetScreen from './screens/FactSheetScreen'
import CaseStudyScreen from './screens/CaseStudyScreen'
import ArchitectureScreen from './screens/ArchitectureScreen'
import VideoScreen from './screens/VideoScreen'

type Screen = 'home' | 'factsheet' | 'casestudy' | 'architecture' | 'video'

export default function App() {
  const [current, setCurrent] = useState<Screen>('home')
  const [visible, setVisible] = useState<Screen>('home')
  const [phase, setPhase] = useState<'idle' | 'exit' | 'enter'>('idle')

  const navigate = (to: Screen) => {
    if (to === current || phase !== 'idle') return
    setPhase('exit')
    setTimeout(() => {
      setCurrent(to)
      setPhase('enter')
      setTimeout(() => {
        setVisible(to)
        setPhase('idle')
      }, 50)
    }, 320)
  }

  // Scroll to top on screen change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [current])

  const screenStyle: React.CSSProperties = {
    position: 'relative',
    zIndex: 1,
    minHeight: '100vh',
    opacity: phase === 'exit' ? 0 : 1,
    transform:
      phase === 'exit'
        ? 'translateY(-12px) scale(0.99)'
        : phase === 'enter'
        ? 'translateY(12px) scale(0.99)'
        : 'translateY(0) scale(1)',
    transition:
      phase === 'idle'
        ? 'opacity 0.35s ease, transform 0.35s ease'
        : 'opacity 0.32s ease, transform 0.32s ease',
  }

  const screens: Record<Screen, React.ReactElement> = {
    home: <HomeScreen onNavigate={navigate} />,
    factsheet: <FactSheetScreen onBack={() => navigate('home')} />,
    casestudy: <CaseStudyScreen onBack={() => navigate('home')} />,
    architecture: <ArchitectureScreen onBack={() => navigate('home')} />,
    video: <VideoScreen onBack={() => navigate('home')} />,
  }

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        background: '#F5F8FA',
        overflowX: 'hidden',
      }}
    >
      <AnimatedBg />
      <div style={screenStyle}>
        {screens[current]}
      </div>
    </div>
  )
}
