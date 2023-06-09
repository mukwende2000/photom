import { FaCoffee, FaLeaf } from 'react-icons/fa'
import Heading from '../../../../components/Heading'
import Button from '../../../../components/Button'

function index({ url, about }:{ url:string, about?:boolean }) {
  return (
    <div className='py-20'>
      <div className={`${about ? 'flex-row-reverse' : 'flex-row'} container md:flex  gap-20`}>
        <div className='h-screen basis-full'>
            <img className='h-full' src={url} alt="Chef taking a coffe" />
        </div>
        <div className='px-2'>
            <Heading title='why choose us' subtitle='New London Coffee Founded For Extraordinary Test' />
            <p className='text-lg text-gray-600 mb-5 md:w-9/12 leading-8'>
            Sed ut perspiciatis unde omnis iste natus error voluptate 
            accusantium doloremque laudantium, 
            totam rem aperiam eaque ipsa quae abillo inventore veritatis
            </p>
            <ul className='md:w-8/12'>
                <li className='flex gap-10'>
                    <FaLeaf className='basis-20 text-8xl text-primary' />
                    <div className='basis-full'>
                        <h5 className='mb-1'>Natural Coffee Beans</h5>
                        <p className='text-lg text-gray-600 leading-6'>Sed ut perspiciatis unde omnis iste natus error voluptate accusantium doloremque</p>
                    </div>
                </li>
                <li className='flex gap-10 my-5'>
                    <FaCoffee className='basis-20 text-8xl text-primary' />
                    <div className='basis-full'>
                        <h5 className='mb-1'>100% ISO Certification</h5>
                        <p className='text-lg text-gray-600 leading-6'>Sed ut perspiciatis unde omnis iste natus error voluptate accusantium doloremque</p>
                    </div>
                </li>
            </ul>
            <Button background='bg-primary' others="">
                Explore More
            </Button>
        </div>
      </div>
    </div>
  )
}

export default index
