import { FaEnvelopeOpenText, FaPhone, FaSearchLocation } from "react-icons/fa"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import '@splidejs/react-splide/css'

import img5 from '../../assets/images/img5.jpg'
import img6 from '../../assets/images/img6.jpg'
import img7 from '../../assets/images/img7.jpg'
import img8 from '../../assets/images/img8.jpg'
import img9 from '../../assets/images/img9.jpg'
import img10 from '../../assets/images/img10.jpg'
import img11 from '../../assets/images/img11.jpg'

import ContactInfo from "../../components/Contactinfo/ContactInfo"
import Hero from "../../components/Hero"
import styles from './Contact.module.scss'
import Form from './components/Form'
import Sponsors from "../../components/Sponsors"



function index() {
  const slides = [ img5, img6, img7, img8, img9, img10, img11]
  return (
    <>
    <section className="bg-[#0e1317]">
      <Hero heading="Contact" bg={`${styles.contact}`} />
      <div className="container">
        <div className="py-10 md:flex justify-between gap-10">
            <ContactInfo 
                cta="Our Location" 
                primary="55 Main Street, 2nd Block" 
                secondary="3rd Floor, New York"
            >
              <FaSearchLocation className="text-primary m-auto mb-5 text-5xl" /> 
            </ContactInfo>

            <ContactInfo 
                cta="Write to Us" 
                primary="supportkaffen@gmail.com" 
                secondary="www.kaffeninfo.net" 
            >
              <FaEnvelopeOpenText className="text-5xl text-primary m-auto mb-5" />
            </ContactInfo>
            <ContactInfo 
                  cta="Call to Us" 
                  primary="+012 3323 423" 
                  secondary="8979878"
            >
              <FaPhone className="text-5xl text-primary m-auto mb-5" />
            </ContactInfo>
        </div>
        <Form />
      </div>  
      <Splide options={{
        perPage: 4,
        gap: '1rem',
        drag: 'free',
        arrows: false,
        pagination: false,
        type:'loop'
      }}>
      { slides.map(slide => {
         return <SplideSlide>
          <img src={slide} alt="" className="w-full h-full" />
         </SplideSlide> 
      })}
      </Splide>
      <Sponsors/>
    </section>
    </>
  )
}

export default index
