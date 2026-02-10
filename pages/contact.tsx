import { useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const inputStyle = {
    width: '100%',
    padding: '0.875rem 1rem',
    fontSize: '1rem',
    border: '2px solid #e2e8f0',
    borderRadius: '10px',
    background: '#fff',
    color: '#1e1b4b',
    outline: 'none',
    fontFamily: 'inherit',
    transition: 'border-color 0.2s',
  }

  const labelStyle = {
    display: 'block',
    fontSize: '0.875rem',
    fontWeight: 600,
    color: '#1e1b4b',
    marginBottom: '0.5rem',
  }

  return (
    <>
      <Head>
        <title>Contact | Halyard Labs</title>
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
        <div style={{
          position: 'absolute',
          width: '80px',
          height: '80px',
          background: '#a78bfa',
          borderRadius: '50%',
          bottom: '5%',
          left: '10%',
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
          maxWidth: '500px',
          margin: '0 auto',
          padding: '2rem 0',
        }}>
          {isSubmitted ? (
            <div style={{ textAlign: 'center' }}>
              <h1 style={{
                fontSize: 'clamp(1.5rem, 6vw, 2rem)',
                fontWeight: 700,
                color: '#1e1b4b',
                marginBottom: '1rem',
              }}>
                Thanks for reaching out!
              </h1>
              <p style={{
                fontSize: '1rem',
                color: '#64748b',
                lineHeight: 1.7,
                marginBottom: '2rem',
              }}>
                We&apos;ve received your enquiry and will get back to you within 1-2 business days.
              </p>
              <Link href="/" style={{
                display: 'inline-block',
                fontSize: '1rem',
                fontWeight: 600,
                background: '#1e1b4b',
                color: '#fff',
                padding: '0.875rem 1.5rem',
                borderRadius: '10px',
              }}>Back to home</Link>
            </div>
          ) : (
            <>
              <h1 style={{
                fontSize: 'clamp(1.5rem, 6vw, 2.25rem)',
                fontWeight: 700,
                lineHeight: 1.2,
                color: '#1e1b4b',
                marginBottom: '0.75rem',
                textAlign: 'center',
              }}>
                Let&apos;s talk
              </h1>
              <p style={{
                fontSize: 'clamp(0.9375rem, 4vw, 1rem)',
                color: '#64748b',
                lineHeight: 1.7,
                marginBottom: '1rem',
                textAlign: 'center',
              }}>
                Whether you&apos;re exploring AI opportunities or have a specific project in mind,
                we&apos;d love to hear from you.
              </p>
              <p style={{
                fontSize: '0.875rem',
                color: '#64748b',
                lineHeight: 1.7,
                marginBottom: '2rem',
                textAlign: 'center',
              }}>
                Prefer to book a time directly?{' '}
                <a
                  href="https://calendar.notion.so/meet/alhinds/gr3d13sui"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: '#a78bfa',
                    fontWeight: 500,
                    textDecoration: 'underline',
                  }}
                >Schedule a call</a>
              </p>

              <form
                onSubmit={async (e) => {
                  setIsLoading(true)
                  e.preventDefault()
                  const $form = e.currentTarget
                  const form = new FormData($form)
                  const body = JSON.stringify(Object.fromEntries(form.entries()))
                  await fetch('/api/email', { method: 'POST', body })
                  setIsLoading(false)
                  setIsSubmitted(true)
                }}
                style={{
                  background: '#fff',
                  padding: '1.5rem',
                  borderRadius: '16px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                }}
              >
                <div style={{ marginBottom: '1rem' }}>
                  <label style={labelStyle}>Name</label>
                  <input
                    required
                    name="name"
                    type="text"
                    placeholder="Sarah Blake"
                    style={inputStyle}
                    onFocus={(e) => e.currentTarget.style.borderColor = '#a78bfa'}
                    onBlur={(e) => e.currentTarget.style.borderColor = '#e2e8f0'}
                  />
                </div>
                <div style={{ marginBottom: '1rem' }}>
                  <label style={labelStyle}>Email</label>
                  <input
                    required
                    name="email"
                    type="email"
                    placeholder="sarah@example.com"
                    style={inputStyle}
                    onFocus={(e) => e.currentTarget.style.borderColor = '#a78bfa'}
                    onBlur={(e) => e.currentTarget.style.borderColor = '#e2e8f0'}
                  />
                </div>
                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={labelStyle}>Tell us about your project</label>
                  <textarea
                    name="description"
                    rows={4}
                    placeholder="What are you looking to build or explore?"
                    style={{
                      ...inputStyle,
                      resize: 'vertical',
                      minHeight: '100px',
                    }}
                    onFocus={(e) => e.currentTarget.style.borderColor = '#a78bfa'}
                    onBlur={(e) => e.currentTarget.style.borderColor = '#e2e8f0'}
                  />
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  style={{
                    width: '100%',
                    padding: '0.875rem 1.5rem',
                    fontSize: '1rem',
                    fontWeight: 600,
                    background: isLoading ? '#94a3b8' : '#1e1b4b',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '10px',
                    cursor: isLoading ? 'not-allowed' : 'pointer',
                    fontFamily: 'inherit',
                    transition: 'background 0.2s',
                  }}
                >
                  {isLoading ? 'Sending...' : 'Send enquiry'}
                </button>
              </form>
            </>
          )}
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
