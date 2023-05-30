import { FaUtensilSpoon } from "react-icons/fa"
import Aboutus from "./components/Aboutus"
import Hero from '../../components/Hero'
import Service from "./components/Service"
import Popular from './components/Popular'
import text from '../../assets/images/logo.png'
import styles from './Home.module.scss'

function index() {
  return (
    <>
      <Hero heading="The London House Cafe" bg={styles.home} />
      <Aboutus />
      <div className="container">
        
        <Popular />
      </div>
    </>
  )
}

export default index
