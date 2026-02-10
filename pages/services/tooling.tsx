import Link from 'next/link'
import Head from 'next/head'

import type { ReactNode } from 'react'

const faqs: { q: string; a: ReactNode }[] = [
  {
    q: 'What kind of AI tooling do you typically set up?',
    a: 'It depends on your team and problems. Common examples include coding assistants configured for your codebase, automated document processing, internal knowledge bases, and workflow automation. I match the tooling to your highest-leverage problems, not the other way around.',
  },
  {
    q: 'What if our team has no AI experience?',
    a: 'That\'s exactly who this is for. The training component is designed to bring your team from zero to confident. You\'ll understand not just how to use the tools, but when and why.',
  },
  {
    q: 'What happens after you leave?',
    a: 'Your team owns everything. The handover includes documentation, recorded training sessions, and a clear playbook for extending what we\'ve built. The goal is independence, not dependency.',
  },
  {
    q: 'How much of our team\'s time does this require?',
    a: 'Expect 2-3 hours per week from a primary point of contact, plus time for the training sessions. I handle the heavy lifting on setup and configuration.',
  },
  {
    q: 'Should we do an audit first?',
    a: <>If you already know where your biggest problems are, we can jump straight in. If you&apos;re unsure, the <Link href="/services/audit" style={{ color: '#1e1b4b', fontWeight: 500 }}>AI Readiness Audit</Link> is a good starting point — many clients use it to scope this engagement.</>,
  },
]

const timeline = [
  { label: 'Week 1', title: 'Scoping call', description: 'We identify your team\'s highest-leverage problems and agree on what to tackle first.' },
  { label: 'Week 1-2', title: 'Audit & analysis', description: 'I dig into your current tools, workflows and team capabilities to design the right solution.' },
  { label: 'Week 2-4', title: 'Tool setup & configuration', description: 'I select, configure and integrate AI tooling tailored to your team\'s specific needs and existing stack.' },
  { label: 'Week 4-6', title: 'Guided rollout', description: 'We roll tools out to the team with hands-on support, iterating based on real usage and feedback.' },
  { label: 'Week 6-8', title: 'Training & handover', description: 'Your team gets trained to use, maintain and extend the tooling independently. Full documentation and playbooks included.' },
]

export default function ToolingService() {
  return (
    <>
      <Head>
        <title>AI Tooling & Training | Halyard Labs</title>
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
          width: '130px',
          height: '130px',
          background: '#34d399',
          borderRadius: '50%',
          top: '-30px',
          left: '-30px',
          zIndex: 0,
        }}></div>
        <div style={{
          position: 'absolute',
          width: '100px',
          height: '100px',
          background: '#fcd34d',
          borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
          bottom: '20%',
          right: '-30px',
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
            }}>Build + Train · 4-8 weeks · $20,000</div>
            <h1 style={{
              fontSize: 'clamp(1.5rem, 6vw, 2.25rem)',
              fontWeight: 700,
              lineHeight: 1.2,
              color: '#1e1b4b',
              marginBottom: '1rem',
            }}>
              AI Tooling & Training
            </h1>
            <p style={{
              fontSize: 'clamp(1rem, 4vw, 1.125rem)',
              lineHeight: 1.7,
              color: '#64748b',
            }}>
              I set up the right AI tooling for your team&apos;s highest-leverage problems, then
              train your people to run with it. You don&apos;t just get tools — you get a team
              that knows how to use them and improve on them after I leave.
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
                'AI tooling selected, configured and integrated with your existing stack',
                'Hands-on training for your team so they\'re confident using and extending the tools',
                'Full documentation and playbooks for ongoing maintenance',
                'A team that understands not just how to use AI tools, but when and why',
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
              Ready to give your team the right AI tools and the skills to use them?
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
