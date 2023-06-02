import Button from "../Button"
import Navbar from "../Navbar"
import logo from '../../assets/images/logo.png'
import { useState } from "react"

function index() {
    const [menuIsOpen, setMenuIsOpen] = useState(false)
  return (
    <header className="bg-[#0e1317] sticky top-0 z-30">
    <div className="container py-5 flex flex-wrap items-center justify-between">
          <div className={`relative z-20 `}>
                <div className="w-[40%]">
                    <img src={logo} alt="kaffen logo" />
                </div>
          </div>

          <Navbar setMenuIsOpen={setMenuIsOpen} menuIsOpen = { menuIsOpen } />
          <Button background="bg-primary" others="hidden md:block">
            book a table
          </Button>
          <div onClick={() => setMenuIsOpen(prev => !prev)} className="relative z-30 cursor-pointer md:hidden">
            <div className={`w-7 h-0.5 bg-white ${ menuIsOpen ? '-rotate-45 mb-0' : 'mb-2' } duration-300`}></div>
            <div className={`w-7 h-0.5 bg-white ${ menuIsOpen ? 'rotate-45 my-0' : null } duration-300`}></div>
          </div>
    </div>
</header>
  )
}

export default index
