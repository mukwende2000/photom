type Props = {
    alt: string
    content: string 
    image: string
    name: string
    price: string
}

function Coffee({alt, content, image, name, price }:Props) {
  return (
    <div className="my-5 flex justify-between md:justify-start md:gap-10 items-start md:items-center">
        <div className={`w-[20%] h-28 rounded`}>
            <img src={image} alt={alt} className="h-full rounded" />
        </div>
        <div className="w-4/12">
            <h6>{ name }</h6>
            <p className="py-2"> { content } </p>
            <p className="flex justify-between text-primary font-bold"><span>..............</span> <span className="text-xl"> { price } </span></p>
        </div>
    </div>
    )
}

export default Coffee
