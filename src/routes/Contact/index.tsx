import { FaEnvelope, FaEnvelopeOpen, FaEnvelopeOpenText, FaLocationArrow, FaPhone, FaSearchLocation } from "react-icons/fa"
import ContactInfo from "../../components/Contactinfo/ContactInfo"
import Hero from "../../components/Hero"
import styles from './Contact.module.scss'
import Button from "../../components/Button"
import Heading from "../../components/Heading"

import comp1 from '../../assets/images/img77.png'
import comp2 from '../../assets/images/img78.png'
import comp3 from '../../assets/images/img79.png'
import comp4 from '../../assets/images/img80.png'
import comp5 from '../../assets/images/img81.png'
import comp6 from '../../assets/images/img82.png'

function index() {
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
        <div className="py-10">
          <form className="bg-black p-5">
            <Heading centerOnMediumScreens title="contact us" subtitle="Send Us a Message" />
            <div>
                <div className="flex flex-col md:flex-row md:gap-10">
                  <input className="w-full p-5 my-2 h-14 bg-black rounded border border-primary" type="text" placeholder="Full Name"/>
                  <input className="w-full p-5 my-2 h-14 bg-black rounded border border-primary" type="text" placeholder="Email Address" />
                  <input className="w-full p-5 my-2 h-14 bg-black rounded border border-primary" type="text" placeholder="Phone Number"/>
                </div>
                <input className="p-5 w-full my-2 h-14 bg-black rounded border border-primary" type="text" placeholder="Subject" />
                <textarea className="w-full p-5 my-2 bg-black rounded border border-primary" name="" id="" cols={30} rows={10} placeholder="Message"></textarea>
                <Button background="bg-primary" width="">
                  send us a message
                </Button>
            </div>
          </form>
        </div>
        <div className="flex justify-evenly items-center flex-col md:flex-row gap-10 mb-10">
          <img src={comp1} alt="" className="w-[120px] grayscale" />
          <img src={comp2} alt="" className="w-[120px]" />
          <img src={comp3} alt="" className="w-[120px]" />
          <img src={comp4} alt="" className="w-[120px]" />
          <img src={comp5} alt="" className="w-[120px]" />
          <img src={comp6} alt="" className="w-[120px]" />
        </div>
      </div>
    </section>
    </>
  )
}

export default index
