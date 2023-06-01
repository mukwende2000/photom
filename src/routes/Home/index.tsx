import Aboutus from "./components/Aboutus"
import Hero from '../../components/Hero'
import Popular from './components/Popular'
import styles from './Home.module.scss'
import BookingTable from "./components/BookingTable"
import WhyChooseUs from './components/WhyChooseUs'

import img2 from '../../assets/images/img12.jpg'
import Service from "./components/Service"

function index() {
  const coffees = [img2, img2,img2, img2, img2, img2]
  return (
    <>
      <Hero heading="The London House Cafe" bg={styles.home} />
      <Aboutus />        
      <Popular />
      <WhyChooseUs />
      <div className="flex overflow-auto whitespace-nowrap">
        {coffees.map(coffee => {
          return <Service url={coffee} alt="coffee">
              <div></div>
          </Service>
        })}
      </div>
      <BookingTable />
    </> 
  )
}

export default index
