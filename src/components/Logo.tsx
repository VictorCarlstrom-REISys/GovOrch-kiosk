import logoImg from '@/imports/GovOrchAI_TM_Logo_Horizontal_RGB.png'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  showTagline?: boolean
}

const widths = { sm: 210, md: 300, lg: 420 }

export default function Logo({ size = 'md', showTagline: _showTagline }: LogoProps) {
  // The PNG includes the icon, wordmark, and "powered by REI Systems" tagline — render as-is.
  // showTagline is ignored since the tagline is baked into the image.
  const w = widths[size]
  // Original image is 2527×461, so height scales proportionally
  const h = Math.round(w * (461 / 2527))

  return (
    <img
      src={logoImg}
      alt="GovOrch AI — powered by REI Systems"
      width={w}
      height={h}
      style={{ display: 'block', objectFit: 'contain' }}
    />
  )
}
