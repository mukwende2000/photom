import { ReactNode } from "react"
import { coffees } from "../../data/coffee"
import Coffee from "./components/Coffee"
import styles from './Popular.module.scss'
import Heading from "../Heading"

function index({ children }:{ children: ReactNode}) {
  return (
    <div className={`${styles.main}`}>
      <div className="container">
           { children }
          <div className="px-5 py-10 bg-[black]/50 grid lg:grid-cols-2 gap-10">
            { coffees.map((coffee, index) => {
              return <Coffee 
                    key={index} 
                    alt={coffee.name}
                    content={coffee.contents} 
                    image={coffee.image}
                    name={coffee.name} 
                    price={coffee.price}
                    />
            })}
          </div>
      </div>
    </div>
  )
}

export default index
