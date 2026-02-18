'use client'

interface Props { text: string; speed?: number }

export default function Marquee({ text, speed = 18 }: Props) {
  const repeated = `${text}   •   ${text}   •   ${text}   •   ${text}   •   ${text}   •   ${text}   •   `
  return (
    <div style={{ overflow: 'hidden', width: '100%', padding: '20px 0', borderTop: '1px solid #1a1a1a', borderBottom: '1px solid #1a1a1a' }}>
      <div style={{ display: 'flex', width: 'max-content' }}>
        <div className="marquee-track" style={{ animationDuration: `${speed}s` }}>
          <span style={{ fontSize: 11, color: '#333', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 500, whiteSpace: 'nowrap' }}>
            {repeated}
          </span>
          <span style={{ fontSize: 11, color: '#333', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 500, whiteSpace: 'nowrap' }}>
            {repeated}
          </span>
        </div>
      </div>
    </div>
  )
}
