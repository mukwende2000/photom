import Aboutus from "./components/Aboutus"
import Hero from '../../components/Hero'
import Popular from '../../components/Popular'
import styles from './Home.module.scss'
import CallToAction from "./components/CallToAction"
import WhyChooseUs from './components/WhyChooseUs'
import Heading from "../../components/Heading"

import { Splide, SplideSlide } from "@splidejs/react-splide"
import '@splidejs/react-splide/css'

import img66 from '../../assets/images/img66.jpg'
import Testimonies from "./components/Testimonies"

function index() {
  return (
    <>
      <Hero heading="The London House Cafe" bg={styles.home} />
      <Aboutus /> 
      <div>
        <Popular>
            <Heading title="choose best coffee" subtitle="Kaffen Popular Coffee"  />
        </Popular>
      </div>       
      <WhyChooseUs url={img66} />
      <Testimonies />
      <CallToAction title="need a table on coffee house" subTitle="Need A Table For Your Family?" />
    </> 
  )
}

export default index
