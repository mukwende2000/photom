import Hero from "../../components/Hero"
import Popular from '../../components/Popular'
import Heading from "../../components/Heading"
import Button from "../../components/Button"

import styles from './Menu.module.scss'

function index() {
  return (
    <div className="bg-[#0e1317]">
      <Hero heading="Menu" bg={styles.main} />
      <Popular>
          <Heading title="choose best coffee" subtitle="Coffee Menu" centerOnMediumScreens />
          <div className="flex flex-wrap justify-center gap-10">
            <Button background="bg-primary hover:bg-primary duration-300" others="">
              all
            </Button>
            <Button background="bg-[#0e1317] hover:bg-primary duration-300" others="">
              fast food 
            </Button>
            <Button background="bg-[#0e1317] hover:bg-primary duration-300" others="">
              hot coffee
            </Button>
            <Button background="bg-[#0e1317] hover:bg-primary duration-300" others="">
            desert
            </Button>
          </div>
      </Popular>
      <form className="md:w-7/12 m-auto bg-black p-10">
        <Heading centerOnMediumScreens title="booking table" subtitle="Make Your Reservation" />
        <div className="md:grid grid-cols-2 gap-5 mb-5">
          <input className="w-full my-2 bg-transparent h-12 rounded-md p-3 border border-primary" type="text" placeholder="Full Name" />
          <input className="w-full my-2 bg-transparent h-12 rounded-md p-3 border border-primary" type="text" placeholder="Email" />
          <input className="w-full my-2 bg-transparent h-12 rounded-md p-3 border border-primary" type="text" placeholder="Phone" />
          <input className="w-full my-2 bg-transparent h-12 rounded-md p-3 border border-primary" type="text" placeholder="Person" />
          <input className="w-full my-2 bg-transparent h-12 rounded-md p-3 border border-primary" type="text" placeholder="Date" />
          <input className="w-full my-2 bg-transparent h-12 rounded-md p-3 border border-primary" type="text" placeholder="Time" />
        </div>
        <Button background="bg-primary" others="block m-auto">
            booking table
        </Button>
      </form>
    </div>
  )
}

export default index
