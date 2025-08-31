import styles from './style.module.css'

/* Tipagem das propriedades em conjunto com as propriedades do componente input do React  */
type DefaultInputProps = {
  id: string
  labelText: string
} & React.ComponentProps<'input'>

export function DefautInput({
  id,
  type,
  labelText,
  ...rest
}: DefaultInputProps) {
  return (
    <>
      <label htmlFor={id}>{labelText}</label>
      <input className={styles.input} id={id} type={type} {...rest} />
    </>
  )
}
