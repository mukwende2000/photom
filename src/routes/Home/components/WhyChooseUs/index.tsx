import { FaCoffee, FaLeaf } from 'react-icons/fa'
import img66 from '../../../../assets/images/img66.jpg'
import Heading from '../../../../components/Heading'
import Button from '../../../../components/Button'
function index() {
  return (
    <div className='py-20'>
      <div className="container md:flex gap-20">
        <div className='h-screen basis-full'>
            <img className='h-full' src={img66} alt="Chef taking a coffe" />
        </div>
        <div className='px-2'>
            <Heading title='why choose us' subtitle='New London Coffee Founded For Extraordinary Test' />
            <p className='text-lg text-gray-400 mb-5 md:w-9/12 leading-8'>
            Sed ut perspiciatis unde omnis iste natus error voluptate 
            accusantium doloremque laudantium, 
            totam rem aperiam eaque ipsa quae abillo inventore veritatis
            </p>
            <ul className='md:w-8/12'>
                <li className='flex gap-10'>
                    <FaLeaf className='basis-20 text-8xl text-gray-500' />
                    <div className='basis-full'>
                        <h5 className='mb-1'>Natural Coffee Beans</h5>
                        <p className='text-lg text-gray-400 leading-6'>Sed ut perspiciatis unde omnis iste natus error voluptate accusantium doloremque</p>
                    </div>
                </li>
                <li className='flex gap-10 my-5'>
                    <FaCoffee className='basis-20 text-8xl text-gray-500' />
                    <div className='basis-full'>
                        <h5 className='mb-1'>100% ISO Certification</h5>
                        <p className='text-lg text-gray-400 leading-6'>Sed ut perspiciatis unde omnis iste natus error voluptate accusantium doloremque</p>
                    </div>
                </li>
            </ul>
            <Button background='bg-primary' width=''>
                Explore More
            </Button>
        </div>
      </div>
    </div>
  )
}

export default index
