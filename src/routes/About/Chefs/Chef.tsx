import { FaFacebook, FaInstagram, FaLinkedin, FaTwitch, FaTwitter } from "react-icons/fa"

type Props = {
    name: string
    level: string
    url: string
    email: string
}
function Chef({ name, level, url, email }:Props) {
  return (
    <div className="bg-[#0e1317] rounded my-3 p-4 md:w-[20%]">
        <div className="text-center my-5">
          <p className="font-bold text-xl"> { name } </p>
          <p className="text-primary text-lg mt-3"> { level } </p>
        </div>
        <div className="relative group cursor-pointer">
            <img src={url} alt={name} className="duration-300 group-hover:opacity-30 rounded-lg" />
            <div className="hidden absolute w-full top-0 bottom-0 py-5 group-hover:flex flex-col items-center justify-between">
                <div>
                    <p>+034349 4024 900</p>
                    <div> { email } </div>
                </div>
                <div className="flex justify-center gap-3">
                    <FaFacebook className="text-2xl" />
                    <FaTwitter className="text-2xl" />
                    <FaInstagram className="text-2xl" />
                    <FaLinkedin className="text-2xl" />
                </div>
            </div>
       </div>
    </div>
  )
}

export default Chef
