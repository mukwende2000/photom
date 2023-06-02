import styles from './History.module.scss'
import Hero from '../../components/Hero'
import founder from '../../assets/images/img26.jpg'
import img48 from '../../assets/images/img48.png'
import img49 from '../../assets/images/img49.png'
import Heading from '../../components/Heading'

function index() {
  return (
    <>
      <Hero heading="Our History" bg={`${styles.hero}`} />
      <main>
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
        </div>
      </main>
    </>
  )
}

export default index
