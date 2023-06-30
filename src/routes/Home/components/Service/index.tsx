import { ReactNode } from "react"

type Props = {
    alt: string 
    children: ReactNode
    url: string
}

function Service({alt, children, url}: Props) {
  return (
    <div className="md:w-full bg-cover bg-center cursor-pointer duration-300 group h-72 mt-20 overflow-hidden rounded-lg  relative text-white">
      <img src={url} alt={alt} className="w-full h-full group-hover:scale-105 opacity-10 group-hover:opacity-30 duration-500" />
      <div className="border border-solid border-primary/30 group-hover:border-primary/100 rounded absolute z-10 top-10 bottom-10 left-10 right-10 flex flex-col justify-center items-center text-2xl duration-300">
        { children }
      </div>
    </div>
  )
}

export default Service
