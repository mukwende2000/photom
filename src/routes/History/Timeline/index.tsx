import img from '../../../assets/images/img76.jpg'

type Props = {
    year: string
    date: string
    headline: string
}
function index({year, date, headline}: Props) {
  return (
    <div className='md:flex'>
        <div className='relative'>
            <p className='-rotate-90 absolute md:-left-20 -left-5 top-10  md:top-60 font-bold text-2xl text-center bg-primary w-4/12'> { date } </p>
            <img src={img} alt={'Wine'} />
        </div>
        <div className='md:p-10'>
            <p className='text-primary text-xl'>{ headline }</p>
            <h5 className='py-5 md:w-[80%]'>
                Three Frontend Auditing Tools I Discovered 
                Recently Useful FrondEnd Boilerplates
            </h5>
            <p className='text-lg leading-8 text-gray-400 '> 
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae 
                ab illo inventore veritatis et voluptatem sequi nesciunt neque porro quisqe
            </p>
            <h2 className='text-center text-8xl opacity-10 text-primary'> { year } </h2>
        </div>
    </div>
  )
}

export default index
