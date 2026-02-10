import Link from 'next/link'
import Head from 'next/head'

import type { ReactNode } from 'react'

const faqs: { q: string; a: ReactNode }[] = [
  {
    q: 'What do you need from us before we start?',
    a: 'Very little. I typically need access to the people who know your workflows best and a rough picture of your current tools and systems. A short kickoff call covers the rest.',
  },
  {
    q: 'What does the output look like?',
    a: 'You get a written report with a prioritised list of opportunities ranked by effort and impact, along with clear next steps your team can act on immediately.',
  },
  {
    q: 'What kinds of companies is this best suited for?',
    a: 'Teams of 10-200 who know AI could help but aren\'t sure where to start, or who\'ve tried a few things that haven\'t stuck. Works well for engineering, operations and product teams.',
  },
  {
    q: 'Can this lead into a deeper engagement?',
    a: <>Yes. Many clients move into the <Link href="/services/tooling" style={{ color: '#1e1b4b', fontWeight: 500 }}>AI Tooling & Training</Link> package after the audit, using the roadmap as the foundation for what to build and roll out first.</>,
  },
  {
    q: 'What if we\'ve already tried some AI tools?',
    a: 'Even better. I\'ll assess what\'s working, what isn\'t and why. Often teams are using the right tools in the wrong places, or missing low-effort wins hiding in plain sight.',
  },
]

const timeline = [
  { label: 'Day 1', title: 'Discovery call', description: 'We align on goals, current pain points, and what success looks like for your team.' },
  { label: 'Days 2-4', title: 'Systems & workflow audit', description: 'I map your existing tools, systems and workflows to understand where time and effort are going.' },
  { label: 'Days 4-5', title: 'Opportunity analysis', description: 'I identify the highest-leverage AI opportunities, ranked by impact and effort.' },
  { label: 'Days 6-7', title: 'Prioritised roadmap', description: 'You get a written report with clear recommendations and a prioritised action plan your team can run with.' },
]

export default function AuditService() {
  return (
    <>
      <Head>
        <title>AI Readiness Audit | Halyard Labs</title>
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
            }}>Assessment · 1 week · $5,000</div>
            <h1 style={{
              fontSize: 'clamp(1.5rem, 6vw, 2.25rem)',
              fontWeight: 700,
              lineHeight: 1.2,
              color: '#1e1b4b',
              marginBottom: '1rem',
            }}>
              AI Readiness Audit
            </h1>
            <p style={{
              fontSize: 'clamp(1rem, 4vw, 1.125rem)',
              lineHeight: 1.7,
              color: '#64748b',
            }}>
              A full audit of your existing systems, tools and workflows to find where AI
              will save your team the most time and money. You get clear, prioritised
              recommendations you can act on immediately.
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
                'A written report mapping your current systems, tools and workflows',
                'Prioritised list of AI opportunities ranked by impact and effort',
                'Clear, actionable next steps your team can start on immediately',
                'Honest assessment of what AI can and can\'t do for your specific situation',
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
              Ready to find out where AI fits in your business?
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
