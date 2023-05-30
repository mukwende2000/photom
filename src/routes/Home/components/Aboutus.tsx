import organic from '../images/organic.png'
import about from '../images/about.png'
import Heading from '../../../components/Heading'

function Aboutus() {
  return (
    <section className='text-white py-16 md:py-32'>
        <div className="container md:flex gap-10">
            <article className='md:w-7/12'>
                <Heading title='about us' subtitle='Organic & Fresh Coffee Provider Center' />
                <p className='text-slate-400 leading-7'>
                    Sed ut perspiciatis unde omnis iste natus error voluptate 
                    accusantium doloremque laudantium, totam rem aperiam eaque
                    ipsa quae abillo inventore veritatis et quasi architecto 
                    beatae vitae dicta sunt explicabo. Nemo enim ipsluptatem 
                    quia voluptas sit aspernatur aut odit aut fugit sed quia
                    consequuntur magni dolores eos qui ratione
                </p>
                <figure className='flex gap-3 bg-primary my-10 rounded p-5'>
                    <img src={about} alt="" />
                    <figcaption>
                    Quis autem vel eum iure reprehenderit in ealuptate velit esse molestiae
                    </figcaption>
                </figure>
            </article>
            <div className='w-full'>
                <img src={organic} alt="Americano Coffee" />
            </div>
        </div>
    </section>
  )
}

export default Aboutus
