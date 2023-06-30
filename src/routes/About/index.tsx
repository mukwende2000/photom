import Hero from "../../components/Hero"
import WhyChooseUs from "../Home/components/WhyChooseUs"
import img2 from '../../assets/images/img2.jpg'
import styles from './About.module.scss'
import Chefs from './Chefs'
import Testimonies from "../Home/components/Testimonies"
import Sponsors from "../../components/Sponsors"

import Services from "./Services"

export default function index() {
  return (
    <>
      <Hero heading="About Us" bg={styles.hero} />
      <main>
        <WhyChooseUs url={img2} about/>
        <Sponsors />
        <Testimonies />
        <Services />
        <Chefs />
      </main>
    </>
  )
}
