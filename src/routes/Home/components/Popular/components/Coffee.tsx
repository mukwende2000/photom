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
        <div className={`w-[20%] h-40 rounded`}>
            <img src={image} alt={alt} className="w-full h-full rounded" />
        </div>
        <div className="w-6/12">
            <h5>{ name }</h5>
            <p className="py-2 text-lg"> { content } </p>
            <p className="justify-between pr-10 text-primary font-bold"><span>..............</span> <span className="text-2xl"> { price } </span></p>
        </div>
    </div>
    )
}

export default Coffee
