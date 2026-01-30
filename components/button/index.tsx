import { FC, ButtonHTMLAttributes } from 'react'
import Link from 'next/link'
import styles from './styles.module.css'

type ButtonProps = {
  href?: string
  type?: 'submit' | 'button' | 'reset'
  children?: React.ReactNode
  className?: string
}

const Button: FC<ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>> = ({
  href,
  type = 'button',
  children,
  ...rest
}) => {
  if (href) {
    return (
      <Link href={href} className={styles.button}>
        {children}
      </Link>
    )
  }

  return (
    <button {...rest} type={type} className={styles.button}>
      {children}
    </button>
  )
}

export default Button
