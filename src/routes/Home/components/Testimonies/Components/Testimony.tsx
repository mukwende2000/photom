type Props = {
    name: string 
    message: string 
    url: string 
    job: string
}

function Testimony({ name, message, url, job }:Props) {
  return (
    <div className="my-10 p-10 text-center bg-[#0E1317] rounded-lg">
        <img src={url} alt={name} className="-mt-16 m-auto w-20 rounded-full" />
        <blockquote className="my-5">
            <p className="text-lg">{ message }</p>
            <footer className="my-3">
                 <p className="font-bold text-xl"> { name} </p> 
                 <p className="text-xl text-primary">{ job }</p>
            </footer>
        </blockquote>

    </div>
  )
}

export default Testimony
