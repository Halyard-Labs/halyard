import Button from '../components/button'
import styles from './styles.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.splash}>
        Halyard is a boutique software and design consultancy helping to empower
        growing companies.
      </h1>
      <p className={styles.supporting}>
        We&apos;re focused on bridging technical gaps for our clients in design,
        automation and custom software development. We&apos;d love to work with you.
      </p>
      <Button href="/contact">Get in touch</Button>
    </main>
  )
}
