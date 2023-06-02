import Aboutus from "./components/Aboutus"
import Hero from '../../components/Hero'
import Popular from '../../components/Popular'
import styles from './Home.module.scss'
import CallToAction from "./components/CallToAction"
import WhyChooseUs from './components/WhyChooseUs'
import Heading from "../../components/Heading"

import img66 from '../../assets/images/img66.jpg'

import img2 from '../../assets/images/img12.jpg'
import Service from "./components/Service"

function index() {
  const coffees = [img2, img2,img2, img2, img2, img2]
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
      <div className="flex overflow-auto whitespace-nowrap">
        {coffees.map(coffee => {
          return <Service url={coffee} alt="coffee">
              <div></div>
          </Service>
        })}
      </div>
      <CallToAction title="need a table on coffee house" subTitle="Need A Table For Your Family?" />
    </> 
  )
}

export default index
