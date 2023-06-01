import { HtmlAttributes } from "csstype"
import { ReactNode } from "react"

type Props = {
    cta: string
    children: ReactNode
    primary: string
    secondary: string
}

function ContactInfo({children, cta, primary, secondary}:Props) {
  return (
    <div className="bg-black my-5 py-10 w-full text-center rounded">
      { children }
      <h5>{ cta }</h5>
      <p className="my-5 text-gray-500"> { primary } </p>
      <p className="text-gray-500"> { secondary}</p>
    </div>
  )
}

export default ContactInfo
