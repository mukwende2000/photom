import { ReactNode } from "react"

type Props = {
    alt: string 
    children: ReactNode
    url: string
}

function Service({ url, alt, children }:Props) {
  return (
    <div className="text-white bg-[url('../images/hero2.jpg')] bg-cover bg-center">
     { children }
    </div>
  )
}

export default Service
