import Link from 'next/link'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Halyard Labs | AI & Software Consultancy</title>
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
          width: '150px',
          height: '150px',
          background: '#fcd34d',
          borderRadius: '50%',
          top: '-40px',
          right: '-20px',
          zIndex: 0,
        }}></div>
        <div style={{
          position: 'absolute',
          width: '100px',
          height: '100px',
          background: '#a78bfa',
          borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
          bottom: '15%',
          left: '-20px',
          zIndex: 0,
        }}></div>
        <div style={{
          position: 'absolute',
          width: '80px',
          height: '80px',
          background: '#34d399',
          borderRadius: '50%',
          top: '50%',
          right: '-20px',
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

        {/* Hero */}
        <main style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '600px',
          margin: '0 auto',
          padding: '3rem 0 2rem',
          textAlign: 'center',
        }}>
          <h1 style={{
            fontSize: 'clamp(1.75rem, 7vw, 3rem)',
            fontWeight: 700,
            lineHeight: 1.15,
            color: '#1e1b4b',
            marginBottom: '1.25rem',
          }}>
            Solve the right problems,{' '}
            <span style={{ position: 'relative', display: 'inline' }}>
              <span style={{ position: 'relative', zIndex: 1 }}>faster</span>
              <span style={{
                position: 'absolute',
                bottom: '2px',
                left: '-4px',
                right: '-4px',
                height: '10px',
                background: '#fcd34d',
                zIndex: 0,
                transform: 'rotate(-1deg)',
              }}></span>
            </span>
          </h1>
          <p style={{
            fontSize: 'clamp(1rem, 4vw, 1.125rem)',
            lineHeight: 1.7,
            color: '#64748b',
            marginBottom: '2rem',
            padding: '0 0.5rem',
          }}>
            A boutique consultancy helping companies navigate AI adoption,
            build intelligent systems, and design solutions that evolve with your business.
          </p>
          <div style={{
            display: 'flex',
            gap: '0.75rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}>
            <Link href="/contact" style={{
              fontSize: '1rem',
              fontWeight: 600,
              background: '#1e1b4b',
              color: '#fff',
              padding: '0.875rem 1.5rem',
              borderRadius: '10px',
            }}>Work with us</Link>
            <Link href="/about" style={{
              fontSize: '1rem',
              fontWeight: 500,
              color: '#1e1b4b',
              padding: '0.875rem 1.5rem',
              border: '2px dashed #c4b5fd',
              borderRadius: '10px',
            }}>Who we are</Link>
          </div>
        </main>

        {/* Services */}
        <section style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '600px',
          margin: '2rem auto 0',
        }}>
          <h2 style={{
            fontSize: '0.75rem',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            color: '#94a3b8',
            textAlign: 'center',
            marginBottom: '1rem',
          }}>How we help</h2>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
          }}>
            <div style={{
              background: '#fff',
              padding: '1.25rem',
              borderRadius: '12px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
            }}>
              <div style={{
                fontSize: '1rem',
                fontWeight: 600,
                color: '#1e1b4b',
                marginBottom: '0.375rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}>
                <span>🤖</span> AI Strategy & Adoption
              </div>
              <p style={{
                fontSize: '0.875rem',
                color: '#64748b',
                lineHeight: 1.5,
                margin: 0,
              }}>
                Figure out where AI fits in your business. We help you cut through the hype and find real opportunities.
              </p>
            </div>
            <div style={{
              background: '#fff',
              padding: '1.25rem',
              borderRadius: '12px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
            }}>
              <div style={{
                fontSize: '1rem',
                fontWeight: 600,
                color: '#1e1b4b',
                marginBottom: '0.375rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}>
                <span>🎨</span> Systems Design
              </div>
              <p style={{
                fontSize: '0.875rem',
                color: '#64748b',
                lineHeight: 1.5,
                margin: 0,
              }}>
                Build software architecture that grows with you. We design systems meant to evolve, not be replaced.
              </p>
            </div>
            <div style={{
              background: '#fff',
              padding: '1.25rem',
              borderRadius: '12px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
            }}>
              <div style={{
                fontSize: '1rem',
                fontWeight: 600,
                color: '#1e1b4b',
                marginBottom: '0.375rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}>
                <span>🛠️</span> Custom Development
              </div>
              <p style={{
                fontSize: '0.875rem',
                color: '#64748b',
                lineHeight: 1.5,
                margin: 0,
              }}>
                From prototypes to production. We build the tools and integrations that make AI work for your team.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer style={{
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
          marginTop: '3rem',
          paddingBottom: '1rem',
        }}>
          <p style={{
            fontSize: '0.75rem',
            color: '#94a3b8',
            margin: 0,
          }}>
            Halyard Labs · ACN 123 456 789
          </p>
        </footer>
      </div>
    </>
  )
}
