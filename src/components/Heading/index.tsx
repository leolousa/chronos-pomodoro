import styles from './styles.module.css'

/* Tipando as propriedades do Heading */
type HeadingProps = {
  children: React.ReactNode /* Tipando para qualquer tipo que o React aceita*/
}

export function Heading({ children }: HeadingProps) {
  return <h1 className={styles.heading}>{children}</h1>
}
