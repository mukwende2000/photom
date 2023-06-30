import comp1 from '../../assets/images/img77.png'
import comp2 from '../../assets/images/img78.png'
import comp3 from '../../assets/images/img79.png'
import comp4 from '../../assets/images/img80.png'
  
function index() {
  return (
    <div className='py-10'>
       <div className="flex justify-center items-center flex-col md:flex-row gap-10 mb-10">
          <img src={comp1} alt="" className="w-[120px] grayscale" />
          <img src={comp2} alt="" className="w-[120px]" />
          <img src={comp3} alt="" className="w-[120px]" />
          <img src={comp4} alt="" className="w-[120px]" />
          <img src={comp1} alt="" className="w-[120px]" />
          <img src={comp2} alt="" className="w-[120px]" />
        </div>
    </div>
  )
}

export default index
