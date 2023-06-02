import { FaEnvelope, FaEnvelopeOpen, FaEnvelopeOpenText, FaLocationArrow, FaPhone, FaSearchLocation } from "react-icons/fa"
import ContactInfo from "../../components/Contactinfo/ContactInfo"
import Hero from "../../components/Hero"
import styles from './Contact.module.scss'
import Button from "../../components/Button"
import Heading from "../../components/Heading"
import Sponsors from "../../components/Sponsors"


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
            <Heading  title="contact us" subtitle="Send Us a Message" />
            <div>
                <div className="flex flex-col md:flex-row md:gap-10">
                  <input className="w-full p-5 my-2 h-14 bg-black rounded border border-primary" type="text" placeholder="Full Name"/>
                  <input className="w-full p-5 my-2 h-14 bg-black rounded border border-primary" type="text" placeholder="Email Address" />
                  <input className="w-full p-5 my-2 h-14 bg-black rounded border border-primary" type="text" placeholder="Phone Number"/>
                </div>
                <input className="p-5 w-full my-2 h-14 bg-black rounded border border-primary" type="text" placeholder="Subject" />
                <textarea className="w-full p-5 my-2 bg-black rounded border border-primary" name="" id="" cols={30} rows={10} placeholder="Message"></textarea>
                <Button background="bg-primary" others="">
                  send us a message
                </Button>
            </div>
          </form>
        </div>
      </div>  
       <Sponsors/>
    </section>
    </>
  )
}

export default index
