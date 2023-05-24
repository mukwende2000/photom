import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import Navbar from '../components/Navbar'

function Root() {
  return (
    <div>
        <header>
            <Navbar />
        </header>
        <Outlet />
        <Footer />
    </div>
  )
}

export default Root
