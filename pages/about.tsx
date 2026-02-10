import Link from 'next/link'
import Head from 'next/head'

export default function About() {
  return (
    <>
      <Head>
        <title>About | Halyard Labs</title>
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet" />
      </Head>
      <div style={{
        minHeight: '100vh',
        background: '#fffbeb',
        fontFamily: "'DM Sans', sans-serif",
        padding: '1.5rem',
        overflow: 'hidden',
        position: 'relative',
      }}>
        {/* Decorative shapes */}
        <div style={{
          position: 'absolute',
          width: '120px',
          height: '120px',
          background: '#a78bfa',
          borderRadius: '50%',
          top: '20%',
          right: '-40px',
          zIndex: 0,
        }}></div>
        <div style={{
          position: 'absolute',
          width: '100px',
          height: '100px',
          background: '#fcd34d',
          borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
          bottom: '10%',
          left: '-30px',
          zIndex: 0,
        }}></div>

        {/* Navigation */}
        <nav style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '1100px',
          margin: '0 auto',
          paddingBottom: '1.5rem',
        }}>
          <Link href="/" style={{
            fontSize: '1.25rem',
            fontWeight: 700,
            color: '#1e1b4b',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}>
            <span style={{
              width: '10px',
              height: '10px',
              background: '#f472b6',
              borderRadius: '50%',
            }}></span>
            Halyard
          </Link>
          <div style={{
            display: 'flex',
            gap: '0.75rem',
            alignItems: 'center',
          }}>
            <Link href="/about" style={{
              fontSize: '0.875rem',
              fontWeight: 500,
              color: '#1e1b4b',
              padding: '0.5rem 0.75rem',
            }}>About</Link>
            <Link href="/contact" style={{
              fontSize: '0.875rem',
              fontWeight: 500,
              color: '#1e1b4b',
              background: '#fff',
              padding: '0.625rem 1rem',
              borderRadius: '10px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
            }}>Get in touch</Link>
          </div>
        </nav>

        {/* Content */}
        <main style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '600px',
          margin: '0 auto',
          padding: '2rem 0',
        }}>
          <h1 style={{
            fontSize: 'clamp(1.5rem, 6vw, 2.25rem)',
            fontWeight: 700,
            lineHeight: 1.2,
            color: '#1e1b4b',
            marginBottom: '2rem',
            textAlign: 'center',
          }}>
            Who we are
          </h1>

          {/* Principal Card */}
          <div style={{
            background: '#fff',
            borderRadius: '16px',
            padding: '1.5rem',
            boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
            marginBottom: '2rem',
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              gap: '1rem',
            }}>
              {/* Photo */}
              <div style={{
                width: '140px',
                height: '140px',
                borderRadius: '50%',
                overflow: 'hidden',
                background: 'linear-gradient(135deg, #c4b5fd, #f472b6)',
                flexShrink: 0,
              }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/alex.png"
                  alt="Alex Hinds"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                />
              </div>
              <div>
                <h2 style={{
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: '#1e1b4b',
                  marginBottom: '0.25rem',
                }}>Alex Hinds</h2>
                <p style={{
                  fontSize: '0.875rem',
                  color: '#a78bfa',
                  fontWeight: 500,
                  marginBottom: '1rem',
                }}>Principal Consultant</p>
                <p style={{
                  fontSize: '0.9375rem',
                  color: '#64748b',
                  lineHeight: 1.7,
                  margin: 0,
                }}>
                  I&apos;ve spent the last decade in software engineering and product
                  leadership — at{' '}
                  <a href="https://atlassian.com" target="_blank" rel="noopener noreferrer" style={{ color: '#1e1b4b', fontWeight: 500 }}>Atlassian</a>,{' '}
                  <a href="https://theguardian.com" target="_blank" rel="noopener noreferrer" style={{ color: '#1e1b4b', fontWeight: 500 }}>The Guardian</a>,{' '}
                  <a href="https://kayosports.com.au" target="_blank" rel="noopener noreferrer" style={{ color: '#1e1b4b', fontWeight: 500 }}>Kayo</a> and most recently as the
                  founding product and engineering lead at{' '}
                  <a href="https://lorikeetcx.ai" target="_blank" rel="noopener noreferrer" style={{ color: '#1e1b4b', fontWeight: 500 }}>Lorikeet</a>, where I helped build an
                  AI-powered platform from pre-revenue to Series B. I work at the intersection
                  of AI, product and engineering to help teams ship real improvements to their
                  process, productivity and output.
                </p>
              </div>
            </div>
          </div>

          {/* Philosophy */}
          <div style={{
            background: '#fff',
            borderRadius: '16px',
            padding: '1.5rem',
            boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
            marginBottom: '2rem',
          }}>
            <h3 style={{
              fontSize: '1rem',
              fontWeight: 700,
              color: '#1e1b4b',
              marginBottom: '0.75rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}>
              Our approach
            </h3>
            <p style={{
              fontSize: '0.9375rem',
              color: '#64748b',
              lineHeight: 1.7,
              margin: 0,
            }}>
              The best AI implementations start with understanding your actual problems,
              not the technology. Having built and shipped AI at scale, I focus on systems
              designed to evolve — because AI moves fast, and your infrastructure needs to
              keep up without starting over.
            </p>
          </div>

          {/* CTA */}
          <div style={{
            textAlign: 'center',
            padding: '1rem 0',
          }}>
            <p style={{
              fontSize: '1rem',
              color: '#64748b',
              marginBottom: '1rem',
            }}>
              Ready to talk about what AI can do for your team?
            </p>
            <Link href="/contact" style={{
              display: 'inline-block',
              fontSize: '1rem',
              fontWeight: 600,
              background: '#1e1b4b',
              color: '#fff',
              padding: '0.875rem 1.5rem',
              borderRadius: '10px',
            }}>Get in touch</Link>
          </div>
        </main>

        {/* Footer */}
        <footer style={{
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
          marginTop: '2rem',
          paddingBottom: '1rem',
        }}>
          <p style={{
            fontSize: '0.75rem',
            color: '#94a3b8',
            margin: 0,
          }}>
            Halyard Labs · ACN 694 449 637
          </p>
        </footer>
      </div>
    </>
  )
}
