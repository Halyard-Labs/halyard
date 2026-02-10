import Head from 'next/head'

export default function OGPreview() {
  return (
    <>
      <Head>
        <title>OG Preview</title>
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet" />
      </Head>
      <div style={{
        width: '1200px',
        height: '630px',
        background: '#fffbeb',
        fontFamily: "'DM Sans', sans-serif",
        padding: '60px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Decorative shapes */}
        <div style={{
          position: 'absolute',
          width: '300px',
          height: '300px',
          background: '#fcd34d',
          borderRadius: '50%',
          top: '-80px',
          right: '-60px',
          zIndex: 0,
        }}></div>
        <div style={{
          position: 'absolute',
          width: '200px',
          height: '200px',
          background: '#a78bfa',
          borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
          bottom: '-40px',
          left: '100px',
          zIndex: 0,
        }}></div>
        <div style={{
          position: 'absolute',
          width: '150px',
          height: '150px',
          background: '#34d399',
          borderRadius: '50%',
          bottom: '100px',
          right: '80px',
          zIndex: 0,
        }}></div>

        {/* Content */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          {/* Logo */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '60px',
          }}>
            <span style={{
              width: '16px',
              height: '16px',
              background: '#f472b6',
              borderRadius: '50%',
            }}></span>
            <span style={{
              fontSize: '28px',
              fontWeight: 700,
              color: '#1e1b4b',
            }}>Halyard</span>
          </div>

          {/* Main text */}
          <h1 style={{
            fontSize: '72px',
            fontWeight: 700,
            lineHeight: 1.1,
            color: '#1e1b4b',
            marginBottom: '30px',
            maxWidth: '800px',
          }}>
            Solve the right problems,{' '}
            <span style={{ position: 'relative', display: 'inline' }}>
              <span style={{ position: 'relative', zIndex: 1 }}>faster</span>
              <span style={{
                position: 'absolute',
                bottom: '8px',
                left: '-8px',
                right: '-8px',
                height: '20px',
                background: '#fcd34d',
                zIndex: 0,
                transform: 'rotate(-1deg)',
              }}></span>
            </span>
          </h1>

          <p style={{
            fontSize: '28px',
            lineHeight: 1.5,
            color: '#64748b',
            maxWidth: '700px',
          }}>
            Helping engineering and product teams ship real AI
            improvements — fast.
          </p>
        </div>

        {/* Footer - positioned relative to outer container */}
        <div style={{
          position: 'absolute',
          bottom: '40px',
          right: '60px',
          fontSize: '20px',
          color: '#64748b',
          zIndex: 10,
        }}>
          halyard.dev
        </div>
      </div>
    </>
  )
}
