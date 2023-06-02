import { Children, ReactNode } from "react"

type Props = {
    others?: string
    background: string
    children: ReactNode
}
function Button({ others, background, children}: Props) {
  return (
    <button className={`relative overflow-hidden ${others} ${background} uppercase text-white rounded px-6 py-3`}>
      { children }
    </button>
  )
}

export default Button
