import { Link } from "react-router-dom"
import Heading from "../../components/Heading"
import Hero from "../../components/Hero"
import { blogs } from "../../data/blogs"
import { useState } from "react"
import { FaCalendar, FaCaretRight, FaComment } from "react-icons/fa"
import Button from "../../components/Button"

import comp1 from '../../assets/images/img77.png'
import comp2 from '../../assets/images/img78.png'
import comp3 from '../../assets/images/img79.png'
import comp4 from '../../assets/images/img80.png'
import comp5 from '../../assets/images/img81.png'
import comp6 from '../../assets/images/img82.png'

function index() {
  const [count, setCount] =  useState(0)

  const blogPage = blogs[count]
  return (
      <section className="py-10">
      <Hero heading="Blog grid" bg="bg-[url('src/assets/images/img58.jpg')]" />
        <div className="container">
          <div>
            <Heading title="get every single update" subtitle="Read Some Latest Blog & News" isCenter />
          </div>
          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
             { blogPage.map((blog, index) => {
              return <li key={index} className={`relative h-80 text-white overflow-hidden group`} > 
              <Link to={"/"} className="">
                <div className="absolute left-0 top-0 right-0 bottom-0 bg-black opacity-70 group-hover:opacity-50 duration-300" />
                <span className="absolute inline-block w-full -z-10 left-0 right-0 top-0 bottom-0 group-hover:scale-105 duration-300" >
                    <img src={blog.background} className="w-full h-full" />
                </span>
                <h6 className="absolute left-10 right-0 top-52 bottom-0 leading-6 w-9/12">{ blog.title }</h6>
                <div className="flex gap-5 absolute left-10 right-0 top-72 bottom-0 leading-5 ">
                  <p className="flex items-start gap-2 text-gray-300"><FaCalendar className="inline" /> { (blog.date).toLocaleDateString() }</p>  
                  <p className="flex items-start gap-2 text-gray-300"><FaComment className="inline" /> Comments({blog.comments})</p>
                </div>  
              </Link> 
              </li>
             })} 
          </ul>
          <div className="pagination flex justify-center my-10">
            <button onClick={() => setCount(0)} className="bg-primary font-bold mx-3 rounded py-3 hover:text-primary hover:bg-white px-7 duration-300">1</button>
            <button onClick={() => setCount(1)} className="bg-primary font-bold mx-3 rounded py-3 hover:text-primary hover:bg-white px-7 duration-300">2</button>
          </div>
        </div>
        <div className="h-60 bg-[url('../../assets/images/img9.jpg')] bg-no-repeat bg-center bg-cover">
          <div className="container md:flex items-center justify-between">
            <Heading title="booking table for your family members" subtitle="Need a Table On Coffee House"/>
            <Button background="bg-primary" width="">
              Booking Table <FaCaretRight className="inline text-xl" />
            </Button>
          </div>
          
        </div>
        <div className="flex justify-evenly items-center flex-col md:flex-row gap-10 my-10">
          <img src={comp1} alt="" className="w-[120px] grayscale" />
          <img src={comp2} alt="" className="w-[120px]" />
          <img src={comp3} alt="" className="w-[120px]" />
          <img src={comp4} alt="" className="w-[120px]" />
          <img src={comp5} alt="" className="w-[120px]" />
          <img src={comp6} alt="" className="w-[120px]" />
        </div>
      </section>
  )
}

export default index
