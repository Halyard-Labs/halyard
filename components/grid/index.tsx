import { FC, PropsWithChildren } from 'react'
import styles from './index.module.css'

const ContentGrid: FC<PropsWithChildren> = (props) => <div className={styles.grid} {...props} />

export default ContentGrid
