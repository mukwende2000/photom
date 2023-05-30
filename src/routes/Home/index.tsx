import { FaUtensilSpoon } from "react-icons/fa"
import Aboutus from "./components/Aboutus"
import Hero from '../../components/Hero'
import Service from "./components/Service"
import Popular from './components/Popular'

function index() {
  return (
    <>
      <Hero heading="The London House Cafe" bg="bg-[url('src/assets/images/img34.jpg')]" />
      <Aboutus />
      <div className="container">
        
        <Popular />
      </div>
    </>
  )
}

export default index
