import { Children, ReactNode } from "react"
import styles from './Button.module.scss'

type Props = {
    width: string
    background: string
    children: ReactNode
    isMenu?: boolean
}
function Button({ width, background, children, isMenu}: Props) {
  return (
    <button className={`${styles.btn} relative overflow-hidden ${width} ${background} ${isMenu ? 'hidden md:block': null} uppercase text-white rounded px-6 py-3`}>
      <span className={`absolute left-0 -top-0 bottom-12 right-0 bg-white rounded duration-300`}></span>
      { children }
    </button>
  )
}

export default Button
