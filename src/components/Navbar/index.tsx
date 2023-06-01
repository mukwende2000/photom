import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.scss'
import { useEffect, useState } from 'react'
import { FaCaretDown } from 'react-icons/fa'

type Props = {
  menuIsOpen: boolean
  setMenuIsOpen:React.Dispatch<React.SetStateAction<boolean>>
}

function index({ menuIsOpen, setMenuIsOpen} : Props) {

  const [width, setWidth] = useState(innerWidth)
  useEffect(() => {
    function handleResize() {
      setMenuIsOpen(false)
      setWidth(innerWidth)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })

  return (
    <nav className={`bg-[#0e1317] h-full fixed md:static left-0 right-0 z-10 ${ menuIsOpen ? 'top-0' : '-top-full'} duration-500`}>
      <div className={` flex flex-col md:flex-row items-center text-center gap-5 ${menuIsOpen && width < 768 ? 'opacity-100' : 'opacity-0 md:opacity-100'} pt-32 md:pt-0 duration-[1s] delay-1000`}>
          <NavLink onClick={() => {setMenuIsOpen(false)}} className={`${styles.link} link`} to="/">Home</NavLink>
          <NavLink onClick={() => {setMenuIsOpen(false)}} className={`${styles.link} link`} to="/about">About</NavLink>
          <NavLink onClick={() => {setMenuIsOpen(false)}} className={`${styles.link} link`} to="/menu">Menu</NavLink>
          <NavLink onClick={() => {setMenuIsOpen(false)}} className={`${styles.link} link group`} to="/page">
            <span className='flex items-center'>page <FaCaretDown /></span>
            
            <ul className={`text-white p-5 absolute ml-10 hidden group-hover:block opacity-0 group-hover:opacity-100 duration-300`}>
                <li><NavLink to="/history">History</NavLink></li>
                <li><NavLink to="/gallery">Galley</NavLink></li>
            </ul>
          </NavLink>
          <NavLink onClick={() => {setMenuIsOpen(false)}} className={`${styles.link} link`} to="/blogs">Blogs</NavLink>
          <NavLink onClick={() => {setMenuIsOpen(false)}} className={`${styles.link} link`} to="/contact">Contact</NavLink>
      </div>
    </nav>
  )
}

export default index
