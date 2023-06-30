import Heading from "../../../../components/Heading"
import Testimony from "./Components/Testimony"

import { Splide, SplideSlide } from "@splidejs/react-splide"
import '@splidejs/react-splide/css'

import { testimonies } from "../../../../data/testimonies"
function index() {
  

  return (
    <div className="container">
        <Heading title="customer feedback" subtitle="what our clients say" />
        <Splide options={{
            arrows: false,
            perPage: 3,
            gap: '2rem',
            breakpoints: {
                768: {
                    perPage: 1
                    // destroy: true
                },
                1020: {
                    perPage: 2
                }
            }
        }}>
            { testimonies.map(testimony => {
                return <SplideSlide>
                    <Testimony
                            key ={testimony.id}
                            name ={testimony.name} 
                            job = {testimony.job}
                            message = { testimony.message}
                            url = { testimony.url}
                            />
                </SplideSlide> 

            })}
        </Splide>
    </div>
  )
}

export default index
