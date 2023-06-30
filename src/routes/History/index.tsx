import styles from './History.module.scss'
import Hero from '../../components/Hero'
import founder from '../../assets/images/img26.jpg'
import img48 from '../../assets/images/img48.png'
import img49 from '../../assets/images/img49.png'
import Heading from '../../components/Heading'
import Timeline from './Timeline'

import { Splide, SplideSlide } from '@splidejs/react-splide'
import "@splidejs/react-splide/css"

import { useState } from 'react'
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa'

function index() {
  const [headline, setHeadline] = useState(0)

  type Headlines = {
    title: string
    date: string
  }
  const headlines: Headlines[] = [
    {
      title: 'Kaffen was founded',
      date: '19, December, 2000'
    },
    {
      title: 'We started cooking for you',
      date: '01, January, 2001'
    }, 
    {
      title: 'We got a michelin star',
      date: '01, March, 2003'
    },
    {
      title: 'A new restaurant was build in paris',
      date: '01, December, 2004'
    }
  ]
  return (
    <>
      <Hero heading="Our History" bg={`${styles.hero}`} />
      <main className='container'>
        <div className='bg-[#0e1317] py-20'>
        <div className="relative container py-10" >
          <img className='w-8 absolute -left-10' src={img48} alt="" />
          <img className='w-16 absolute right-20 top-32' src={img49} alt="" />
          <p className='max-w-[785px] m-auto text-2xl text-center mb-7'>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
            accusantium doloremque laudantium, totam rem 
            aperiam eaque ipsa quae ab illo inventore veritatis
            et voluptatem sequi nesciunt neque porro quisqe
          </p>
          <div className='flex flex-col items-center'>
            <div className='w-32 h-32 flex justify-center items-center rounded-full overflow-hidden border border-primary'>
              <img className='w-10/12 rounded-full' src={founder} alt="Dante J. Castanda, Founder of Kaffen" />
            </div>
            <p className='font-bold text-xl my-3'>Danta J. Castaneda</p>
            <p className='text-primary font-bold'>CEO & Founder</p>
          </div>
          </div>
        </div>
        <div className=''>
            <Heading title='our kaffen history' subtitle='Something To Know About Our History' />
            <Splide options={{
              // arrows: false,
              // pagination: false
            }}>
              {
                headlines.map(headline => {
                  return <SplideSlide>
                    <Timeline year={headline.date.slice(headline.date.indexOf('2'))} headline={headline.title} date={headline.date} />
                  </SplideSlide>
                })
              }
            </Splide>
        </div>
      </main>
    </>
  )
}

export default index
