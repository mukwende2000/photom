import { Link } from 'react-router-dom'

function index() {
  return (
    <nav className='flex gap-5 p-5'>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/menu">Menu</Link>
      <Link to="/page" className='group'>
        Page
        <ul className='bg-black text-white p-5 absolute hidden group-hover:block opacity-0 group-hover:opacity-100 duration-300'>
            <li><Link to="/history">History</Link></li>
            <li><Link to="/gallery">Galley</Link></li>
        </ul>
      </Link>
      <Link to="/blogs">Blogs</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  )
}

export default index
