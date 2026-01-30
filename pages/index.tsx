import Button from '../components/button'
import styles from './styles.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h1 className={styles.splash}>
          Halyard is a boutique software and design consultancy helping to empower
          growing companies.
        </h1>
        <p className={styles.supporting}>
          We&apos;re focused on bridging technical gaps for our clients in design,
          automation and custom software development. We&apos;d love to work with you.
        </p>
        <Button href="/contact">Get in touch</Button>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>What we do</h2>
        <div className={styles.services}>
          <div className={styles.service}>
            <h3>Custom Software</h3>
            <p>
              From web applications to internal tools, we build software tailored
              to your business needs using modern technologies and best practices.
            </p>
          </div>
          <div className={styles.service}>
            <h3>Design Systems</h3>
            <p>
              We create cohesive design systems that scale with your product,
              ensuring consistency across all touchpoints and faster development.
            </p>
          </div>
          <div className={styles.service}>
            <h3>Technical Strategy</h3>
            <p>
              Navigate complex technical decisions with confidence. We help you
              choose the right architecture, tools, and approaches for your goals.
            </p>
          </div>
          <div className={styles.service}>
            <h3>Automation</h3>
            <p>
              Streamline your workflows and eliminate repetitive tasks. We build
              integrations and automated systems that save time and reduce errors.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Who we are</h2>
        <p className={styles.supporting}>
          Halyard was founded by engineers with decades of combined experience at
          leading technology companies. We&apos;re passionate about helping smaller
          teams punch above their weight through thoughtful technology choices and
          clean implementation.
        </p>
        <p className={styles.supporting}>
          Based in Sydney, we work with clients across Australia and internationally,
          bringing enterprise-grade expertise to projects of all sizes.
        </p>
        <Button href="/contact">Work with us</Button>
      </section>
    </main>
  )
}
