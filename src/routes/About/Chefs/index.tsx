import Heading from "../../../components/Heading"
import chefs from "../../../data/chef"
import CallToAction from "../../Home/components/CallToAction"
import Chef from "./Chef"

function index() {
  return (
    <>
        <Heading centerOnMediumScreens title="experience team member" subtitle="Meet Our Professional Chefs" />
        <div className='container md:flex justify-center gap-5 my-20'>
            { chefs.map(chef => {
                return <Chef email={chef.email} url={chef.url} name={chef.name} level={chef.position} />
            })}
        </div>
        <CallToAction title="need a table on coffee house" subTitle="Booking Table For Your Family Members" />
    </>
  )
}

export default index
