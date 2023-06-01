import Heading from "../../../../components/Heading"
import { coffees } from "../../../../data/coffee"
import Coffee from "./components/Coffee"
import styles from './Popular.module.scss'
import c from '../../../../assets/images/img15.jpg'

function index() {
  return (
    <div className={`${styles.main}`}>
      <div className="container">
          <Heading centerOnMediumScreens title="choose best coffee" subtitle="Kaffen popular Coffee Menu" />
          <div className=" p-16 bg-[black]/50 grid lg:grid-cols-2 gap-10">
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
