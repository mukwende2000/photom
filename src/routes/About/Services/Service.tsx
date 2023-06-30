type Props = {
    name: string
    desc: string
    url: string
}

function Service({ name, desc, url }:Props) {
  return (
    <div className="mt-10 flex flex-col items-center">
        <div>
            <img className="rounded-full w-20 h-20" src={ url } alt={ name } />
        </div>
        <h5 className="md:mt-10">{ name }</h5>
        <p>{ desc }</p>
    </div>
  )
}

export default Service
