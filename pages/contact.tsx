import { useState } from 'react'
import Button from '../components/button'
import Textfield, { TextArea } from '../components/textfield'
import styles from './styles.module.css'

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  if (isSubmitted) {
    return (
      <main className={styles.main}>
        <h1 className={styles.splash}>Thanks for reaching out.</h1>
        <p className={styles.supporting}>
          We&apos;ve received your enquiry and will get back to you within 1-2
          business days.
        </p>
        <Button href="/">Back to home</Button>
      </main>
    )
  }

  return (
    <main className={styles.main}>
      <h1 className={styles.splash}>Let&apos;s talk.</h1>
      <p className={styles.intro}>
        Whether you&apos;re looking to build something new, improve an existing
        product, or just want to chat about a technical challenge, we&apos;d love
        to hear from you.
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
        className={styles.form}
      >
        <Textfield
          required
          name="name"
          label="Name"
          placeholder="Sarah Blake"
        />
        <Textfield
          required
          name="email"
          type="email"
          label="Email"
          placeholder="sarah@example.com"
        />
        <TextArea name="description" label="Tell us about your project" rows={4} />
        <Button type="submit" disabled={isLoading}>
          {isLoading ? 'Sending...' : 'Send enquiry'}
        </Button>
      </form>
    </main>
  )
}
