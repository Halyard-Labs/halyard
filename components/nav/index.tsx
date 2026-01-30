import Link from 'next/link'
import { FC } from 'react'
import Logo from '../logo'
import styles from './index.module.css'

const Nav: FC = () => (
  <header>
    <nav className={styles.nav}>
      <Link href="/">
        <Logo />
      </Link>
      <div className={styles.navItems}>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  </header>
)

export default Nav
