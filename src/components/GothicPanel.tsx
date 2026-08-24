'use client'

export default function GothicPanel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      position: 'relative',
      background: 'linear-gradient(to bottom, #F8F0D8 0%, #EAD9A8 50%, #C8A060 100%)',
      clipPath: 'polygon(0 10px, 10px 0, calc(100% - 10px) 0, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0 calc(100% - 10px))',
      padding: 5,
    }}>
      <div style={{
        background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(234,217,168,0.95) 100%)',
        clipPath: 'polygon(0 8px, 8px 0, calc(100% - 8px) 0, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0 calc(100% - 8px))',
        padding: 24,
        position: 'relative',
        overflow: 'hidden',
      }}>
        {children}
      </div>
    </div>
  )
}
