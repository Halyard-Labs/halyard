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
            I help engineering, product and operations teams cut through AI noise
            and ship real improvements to their process, productivity and output.
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
          }}>What we do</h2>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
          }}>
            {/* Card 1: AI Readiness Audit */}
            <Link href="/services/audit" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{
              background: '#fff',
              padding: '1.25rem',
              borderRadius: '12px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
              cursor: 'pointer',
            }}>
              <div style={{
                fontSize: '0.6875rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: '#a78bfa',
                marginBottom: '0.375rem',
              }}>Assessment · 1 week</div>
              <div style={{
                fontSize: '1rem',
                fontWeight: 600,
                color: '#1e1b4b',
                marginBottom: '0.5rem',
              }}>
                AI Readiness Audit
              </div>
              <p style={{
                fontSize: '0.875rem',
                color: '#64748b',
                lineHeight: 1.5,
                margin: 0,
                marginBottom: '0.75rem',
              }}>
                A full audit of your existing systems, tools and workflows to find where AI
                will save your team the most time and money. You get clear, prioritised
                recommendations you can act on immediately.
              </p>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.375rem',
              }}>
                {['Discovery call', 'Systems & workflow audit', 'Opportunity analysis', 'Prioritised roadmap'].map((step, i) => (
                  <span key={i} style={{
                    fontSize: '0.6875rem',
                    color: '#64748b',
                    background: '#f8fafc',
                    padding: '0.25rem 0.5rem',
                    borderRadius: '6px',
                  }}>{step}</span>
                ))}
              </div>
            </div>
            </Link>

            {/* Card 2: AI Tooling & Training */}
            <Link href="/services/tooling" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{
              background: '#fff',
              padding: '1.25rem',
              borderRadius: '12px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
              cursor: 'pointer',
            }}>
              <div style={{
                fontSize: '0.6875rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: '#a78bfa',
                marginBottom: '0.375rem',
              }}>Build + Train · 4-8 weeks</div>
              <div style={{
                fontSize: '1rem',
                fontWeight: 600,
                color: '#1e1b4b',
                marginBottom: '0.5rem',
              }}>
                AI Tooling & Training
              </div>
              <p style={{
                fontSize: '0.875rem',
                color: '#64748b',
                lineHeight: 1.5,
                margin: 0,
                marginBottom: '0.75rem',
              }}>
                I set up the right AI tooling for your team&apos;s highest-leverage problems, then
                train your people to run with it. You don&apos;t just get tools — you get a team
                that knows how to use them and improve on them after I leave.
              </p>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.375rem',
              }}>
                {['Scoping call', 'Audit & analysis', 'Tool setup & configuration', 'Guided rollout', 'Training & handover'].map((step, i) => (
                  <span key={i} style={{
                    fontSize: '0.6875rem',
                    color: '#64748b',
                    background: '#f8fafc',
                    padding: '0.25rem 0.5rem',
                    borderRadius: '6px',
                  }}>{step}</span>
                ))}
              </div>
            </div>
            </Link>

            {/* Card 3: Fractional Technical Leadership */}
            <Link href="/services/leadership" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{
              background: '#fff',
              padding: '1.25rem',
              borderRadius: '12px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
              cursor: 'pointer',
            }}>
              <div style={{
                fontSize: '0.6875rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: '#a78bfa',
                marginBottom: '0.375rem',
              }}>Fractional · 3-6 months</div>
              <div style={{
                fontSize: '1rem',
                fontWeight: 600,
                color: '#1e1b4b',
                marginBottom: '0.5rem',
              }}>
                Embedded Technical Leadership
              </div>
              <p style={{
                fontSize: '0.875rem',
                color: '#64748b',
                lineHeight: 1.5,
                margin: 0,
                marginBottom: '0.75rem',
              }}>
                A senior technical and product leader inside your team without a full-time hire. I
                work alongside your engineers to set direction, unblock delivery and build the
                capability for your team to own AI long-term.
              </p>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.375rem',
              }}>
                {['Strategy & assessment', 'Architecture & roadmap', 'Delivery leadership', 'Team capability building', 'Structured transition'].map((step, i) => (
                  <span key={i} style={{
                    fontSize: '0.6875rem',
                    color: '#64748b',
                    background: '#f8fafc',
                    padding: '0.25rem 0.5rem',
                    borderRadius: '6px',
                  }}>{step}</span>
                ))}
              </div>
            </div>
            </Link>
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
            Halyard Labs · ACN 694 449 637
          </p>
        </footer>
      </div>
    </>
  )
}
