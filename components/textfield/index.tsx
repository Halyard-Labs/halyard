import { HTMLProps, FC, PropsWithChildren } from 'react'
import styles from './styles.module.css'

type Props = {
  label: string
}

export const Field: FC<PropsWithChildren<{ label: string; id?: string }>> = ({
  children,
  label,
  id,
}) => (
  <div className={styles.field}>
    <label htmlFor={id}>{label}</label>
    {children}
  </div>
)

const Textfield: FC<HTMLProps<HTMLInputElement> & Props> = ({
  label,
  id,
  ...props
}) => (
  <Field label={label} id={id}>
    <input id={id} type="text" className={styles.input} {...props} />
  </Field>
)

export const TextArea: FC<HTMLProps<HTMLTextAreaElement> & Props> = ({
  label,
  id,
  ...props
}) => (
  <Field label={label} id={id}>
    <textarea id={id} type="text" className={styles.input} {...props} />
  </Field>
)

export default Textfield
