import Heading from "../../../../components/Heading"
import { coffees } from "../../../../data/coffee"
import Coffee from "./components/Coffee"

function index() {
  return (
    <div className="text-white">
      <Heading title="choose best coffee" subtitle="Kaffen popular Coffee Menu" />
      <div className="grid lg:grid-cols-2 gap-10">
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
  )
}

export default index
