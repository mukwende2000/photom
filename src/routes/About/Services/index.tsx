import { services } from "../../../data/services"
import Service from "./Service"

function index() {
  return (
    <div className="container">
        <div className="md:flex justify-evenly items-center bg-[#0e1317] py-10">
            {services.map((service, index) => {
                return <Service 
                            key={index} 
                            url={service.url} 
                            name={service.name} 
                            desc={service.desc} 
                        />
            })}
        </div>
    </div>
  )
}

export default index
