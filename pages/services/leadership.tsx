import Link from 'next/link'
import Head from 'next/head'

const faqs = [
  {
    q: 'How many days per week are you available?',
    a: 'Typically 2-3 days per week, depending on the engagement. This is enough to drive meaningful progress without the overhead and cost of a full-time hire.',
  },
  {
    q: 'How is this different from hiring a CTO or VP Eng?',
    a: 'You get senior leadership immediately, without a 3-month search and 6-month ramp. I come with hands-on experience shipping AI products and can start contributing from week one. And the structured transition means your team is stronger when I leave.',
  },
  {
    q: 'What does a typical week look like?',
    a: 'A mix of architecture reviews, pairing with engineers, product and roadmap discussions, and unblocking work. The exact split depends on where your team needs the most help.',
  },
  {
    q: 'Can this be extended beyond 6 months?',
    a: 'Yes, though the goal is to build enough internal capability that you don\'t need to. If you need longer-term support we can discuss what that looks like.',
  },
  {
    q: 'How do you handle the transition out?',
    a: 'Every engagement includes a structured transition period. I document decisions, hand over context, and make sure your team has what they need to keep momentum without me.',
  },
]

const timeline = [
  { label: 'Month 1', title: 'Strategy & assessment', description: 'I get embedded with your team, assess the current state, and align on priorities and technical direction.' },
  { label: 'Month 1-2', title: 'Architecture & roadmap', description: 'I set the technical foundation — architecture decisions, tooling choices, and a delivery roadmap the team can execute against.' },
  { label: 'Month 2-4', title: 'Delivery leadership', description: 'I lead execution alongside your engineers — unblocking work, making trade-offs, and shipping.' },
  { label: 'Month 3-5', title: 'Team capability building', description: 'I upskill your team through pairing, code reviews, and knowledge transfer so they can own this long-term.' },
  { label: 'Month 5-6', title: 'Structured transition', description: 'I hand over all context, document key decisions, and ensure your team has full ownership and momentum.' },
]

export default function LeadershipService() {
  return (
    <>
      <Head>
        <title>Embedded Technical Leadership | Halyard Labs</title>
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
          {/* Header */}
          <div style={{ marginBottom: '2rem' }}>
            <div style={{
              fontSize: '0.6875rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: '#a78bfa',
              marginBottom: '0.5rem',
            }}>Fractional · 3-6 months · $27,000/mo</div>
            <h1 style={{
              fontSize: 'clamp(1.5rem, 6vw, 2.25rem)',
              fontWeight: 700,
              lineHeight: 1.2,
              color: '#1e1b4b',
              marginBottom: '1rem',
            }}>
              Embedded Technical Leadership
            </h1>
            <p style={{
              fontSize: 'clamp(1rem, 4vw, 1.125rem)',
              lineHeight: 1.7,
              color: '#64748b',
            }}>
              A senior technical and product leader inside your team without a full-time hire. I
              work alongside your engineers to set direction, unblock delivery and build the
              capability for your team to own AI long-term.
            </p>
          </div>

          {/* Timeline */}
          <div style={{
            background: '#fff',
            borderRadius: '16px',
            padding: '1.5rem',
            boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
            marginBottom: '2rem',
          }}>
            <h2 style={{
              fontSize: '0.75rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: '#94a3b8',
              marginBottom: '1.25rem',
            }}>How it works</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {timeline.map((step, i) => (
                <div key={i} style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{
                    fontSize: '0.6875rem',
                    fontWeight: 600,
                    color: '#a78bfa',
                    minWidth: '60px',
                    paddingTop: '2px',
                  }}>{step.label}</div>
                  <div>
                    <div style={{
                      fontSize: '0.9375rem',
                      fontWeight: 600,
                      color: '#1e1b4b',
                      marginBottom: '0.25rem',
                    }}>{step.title}</div>
                    <p style={{
                      fontSize: '0.875rem',
                      color: '#64748b',
                      lineHeight: 1.5,
                      margin: 0,
                    }}>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* What you get */}
          <div style={{
            background: '#fff',
            borderRadius: '16px',
            padding: '1.5rem',
            boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
            marginBottom: '2rem',
          }}>
            <h2 style={{
              fontSize: '0.75rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: '#94a3b8',
              marginBottom: '1rem',
            }}>What you get</h2>
            <ul style={{
              margin: 0,
              padding: '0 0 0 1.25rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
            }}>
              {[
                'Senior technical and product leadership 2-3 days per week',
                'Architecture direction and key technical decisions made with your team',
                'Hands-on delivery alongside your engineers — not just advice from the sidelines',
                'A team that\'s stronger and more capable when the engagement ends',
              ].map((item, i) => (
                <li key={i} style={{
                  fontSize: '0.875rem',
                  color: '#64748b',
                  lineHeight: 1.5,
                }}>{item}</li>
              ))}
            </ul>
          </div>

          {/* FAQs */}
          <div style={{
            background: '#fff',
            borderRadius: '16px',
            padding: '1.5rem',
            boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
            marginBottom: '2rem',
          }}>
            <h2 style={{
              fontSize: '0.75rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: '#94a3b8',
              marginBottom: '1.25rem',
            }}>Common questions</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {faqs.map((faq, i) => (
                <div key={i}>
                  <div style={{
                    fontSize: '0.9375rem',
                    fontWeight: 600,
                    color: '#1e1b4b',
                    marginBottom: '0.375rem',
                  }}>{faq.q}</div>
                  <p style={{
                    fontSize: '0.875rem',
                    color: '#64748b',
                    lineHeight: 1.5,
                    margin: 0,
                  }}>{faq.a}</p>
                </div>
              ))}
            </div>
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
              Need senior technical leadership without the full-time commitment?
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" style={{
                display: 'inline-block',
                fontSize: '1rem',
                fontWeight: 600,
                background: '#1e1b4b',
                color: '#fff',
                padding: '0.875rem 1.5rem',
                borderRadius: '10px',
              }}>Get in touch</Link>
              <a href="https://calendar.notion.so/meet/alhinds/gr3d13sui" target="_blank" rel="noopener noreferrer" style={{
                display: 'inline-block',
                fontSize: '1rem',
                fontWeight: 500,
                color: '#1e1b4b',
                padding: '0.875rem 1.5rem',
                border: '2px dashed #c4b5fd',
                borderRadius: '10px',
              }}>Book a call</a>
            </div>
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
