import { useLocation } from "react-router-dom"
import Button from "../Button"

function Hero({ heading, bg }: { heading:string, bg: string }) {
  const { pathname } = useLocation()
  return (
    <section className={`opacity-50 text-secondary bg-cover bg-center min-h-screen ${bg}`}>
        <div className="container py-32">
            { pathname === '/' && <p className="uppercase flex items-center gap-2"><span className="inline-block h-[1px] w-8 bg-primary"></span> welcome to the kaffen</p> }
            <h1 className="w-8/12 md:w-6/12 text-5xl md:text-8xl">{ heading }</h1>
            { pathname === '/' ? <div className="flex gap-5 mt-10">
              <Button background="bg-primary" others="" >
                explore more
              </Button>
              <Button background="bg-[#0e1317]" others="">
                get delivery
              </Button>
            </div> :
            <p> {`Home ${pathname}`.toUpperCase()} </p> }
        </div>
      </section>
  )
}

export default Hero
