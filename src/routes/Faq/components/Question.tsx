import React, { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import faq from '../../../assets/images/img18.jpg'

type Props = {
    text: string
}

function Question({ text }:Props) {
   const [active, setActive] = useState(false)
  return (
    <div onClick={() => setActive(prev => !prev)} className='cursor-pointer m-auto lg:w-8/12 bg-black my-2 px-3 py-5'>
        <div className={`${active ? 'border-b border-primary mb-5  pb-10' : null} flex justify-between items-center`}>
            <p className='font-bold text-xl lg:text-3xl capitalize'>{ text }</p>
            <FaArrowRight className={`${active ? 'rotate-90': null} duration-300`}/>
        </div>
        {active && <div className='lg:flex gap-10'>
            {/* <img src={faq} alt="Frequently asked question illustration" className='rounded-xl lg:w-full w-60 float-right lg:float-none' /> */}
            <p className='text-gray-500 text-xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto quasi ut quibusdam voluptates illo voluptate? Doloremque architecto libero quaerat repellendus eos autem dolorem cumque esse ipsam doloribus in tenetur tempore, voluptas et laudantium. Minus doloribus vitae dolorum repellat! Fuga delectus, ratione omnis voluptas consectetur a! Asperiores quia illum, iste laborum dolore laboriosam quod sapiente error magnam, quibusdam maxime maiores corrupti fugit assumenda adipisci obcaecati perspiciatis, ipsa repellat beatae. Ex accusamus sunt ullam consectetur officia quisquam. Itaque aliquid porro ut. Fugiat aut a sint. Voluptas, expedita ut harum hic non sapiente, aperiam maiores quis error officia cumque neque eligendi consequuntur accusamus!</p>
        </div>}
    </div>
  )
}

export default Question
