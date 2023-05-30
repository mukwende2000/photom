import { FaLocationArrow, FaEnvelope, FaPhone} from 'react-icons/fa'

import logo from './images/logo.png'
import img16 from '../../assets/images/img16.jpg'
import img33 from '../../assets/images/img33.jpg'
import img8 from '../../assets/images/img34.jpg'
import img74 from '../../assets/images/img35.jpg'
import img68 from '../../assets/images/img36.jpg'
import img69 from '../../assets/images/img39.jpg'

import Thumbnail from '../Thumbnail'

export default function index() {

  const thumbnails: string[] = [img16, img33, img8, img74, img68, img69]

  return (
    <footer className='py-10 bg-black text-white'>
      <div className={`container`}>
        <div className='grid md:grid-cols-2 gap-10 lg:flex justify-between items-start'>
            <div className='w-32 mb-10 basis-1/3'>
              <img src={logo} alt="kaffen logo" className='lg:w-1/2'/>
            </div>

            <div className='basis-1/2'>
              <h6 className='mb-5'>Working Hours</h6>
              <ul>
                <li className='list-disc ml-5'>
                  <p className='font-bold'>Sunday-Thursday</p>
                  <p className='text-primary'>08:00 am - 09:00 pm</p>
                </li>
                <li className='my-3 list-disc ml-5'>
                  <p className='font-bold'>Only Friday</p>
                  <p className='text-primary'>03:00 am - 09:00 pm</p>
                </li>
                <li className='font-bold italic text-yellow-500 ml-5'>
                  saturday Close
                </li>
              </ul>
            </div>

            <div className='my-16 md:m-0 basis-1/2'>
                <h6 className='mb-5'>Contact Us</h6>
                <ul>
                    <li className='flex items-center gap-5'>
                      <FaLocationArrow className='text-primary text-3xl' />
                      <div>
                        <p className='text-primary font-bold'>Location:</p>
                        <p>55 Main Street, New York</p>
                      </div>
                    </li>
                    <li className='flex items-center gap-5 my-6'>
                      <FaEnvelope className='text-primary text-3xl' />
                      <div>
                        <p className='text-primary font-bold'>Email Address:</p>
                        <p>Kaffendev@gmail.com</p>
                      </div>
                    </li>
                    <li className='flex items-center gap-5'>
                      <FaPhone className='text-primary text-3xl' />
                      <div>
                        <p className='text-primary font-bold'>Phone Number:</p>
                        <p>+012 (345) 6789</p>
                      </div>
                    </li>
                </ul>
            </div>

            <div>
            <h6 className='mb-5'>Gallery</h6>
            <div className='grid grid-cols-3 basis-full gap-2' style={{gridTemplateRows: 'repeat(2, 100px)'}}>
                 {thumbnails.map((thumbnail, index) => <Thumbnail key={index} url={thumbnail}/>)}
            </div>
          </div>
        </div>
        <p className='text-center border-t border-solid border-gray-500 mt-6 pt-3'>Copyright Kaffen @2022. All Rights Reserved.</p>  
      </div>
    </footer>
  )
}