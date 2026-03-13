import { ImageResponse } from 'next/og';

export const alt = 'Karol Lissoń | Full Stack Developer & Inżynier AI';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 50%, #0a0a0f 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        <div
          style={{
            fontSize: 18,
            color: '#6366f1',
            letterSpacing: 10,
            textTransform: 'uppercase',
            marginBottom: 20,
            display: 'flex',
          }}
        >
          PORTFOLIO
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            color: '#ffffff',
            marginBottom: 16,
            textAlign: 'center',
            lineHeight: 1.1,
            display: 'flex',
          }}
        >
          Karol Lissoń
        </div>
        <div
          style={{
            fontSize: 28,
            color: '#a1a1aa',
            textAlign: 'center',
            maxWidth: 700,
            lineHeight: 1.4,
            display: 'flex',
          }}
        >
          Full Stack Developer & Inżynier AI
        </div>
        <div
          style={{
            display: 'flex',
            gap: 12,
            marginTop: 36,
          }}
        >
          {['Cloudflare Workers', 'Next.js 16', 'AI Systems', 'Edge Computing'].map((tag) => (
            <div
              key={tag}
              style={{
                padding: '6px 16px',
                background: 'rgba(99,102,241,0.2)',
                border: '1px solid rgba(99,102,241,0.4)',
                borderRadius: 6,
                fontSize: 16,
                color: '#818cf8',
                display: 'flex',
              }}
            >
              {tag}
            </div>
          ))}
        </div>
        <div
          style={{
            marginTop: 40,
            fontSize: 20,
            color: '#52525b',
            letterSpacing: 2,
            display: 'flex',
          }}
        >
          jimbo77.com
        </div>
      </div>
    ),
    { ...size }
  );
}
