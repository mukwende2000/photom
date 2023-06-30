import Hero from "../../components/Hero"
import Popular from '../../components/Popular'
import Heading from "../../components/Heading"
import Button from "../../components/Button"
import Sponsors from '../../components/Sponsors'

import { useForm } from "react-hook-form"

import styles from './Menu.module.scss'
import { ReactNode } from "react"

function index() {
  const { register, formState, handleSubmit } = useForm()
  const {errors} = formState

  function onSubmit() {

  }
  return (
    <div className="bg-[#0e1317]">
      <Hero heading="Menu" bg={styles.main} />
      <Popular>
          <Heading title="choose best coffee" subtitle="Coffee Menu"  />
          <div className="flex flex-wrap justify-center mb-10 gap-10">
            <Button background="bg-primary hover:bg-primary duration-300" others="">
              all
            </Button>
            <Button background="bg-black hover:bg-primary duration-300" others="">
              fast food 
            </Button>
            <Button background="bg-black hover:bg-primary duration-300" others="">
              hot coffee
            </Button>
            <Button background="bg-black hover:bg-primary duration-300" others="">
            desert
            </Button>
          </div>
      </Popular>
      <form onSubmit={handleSubmit(onSubmit)} className="md:w-7/12 m-auto bg-black p-10">
        <Heading  title="booking table" subtitle="Make Your Reservation" />
        <div className="md:grid grid-cols-2 gap-5 mb-5">
          <div>
            <input className="w-full my-2 bg-transparent h-12 rounded-md p-3 border border-primary" {...register('name', {required: 'this field is required'})} type="text" placeholder="Full Name" />
            <p className="text-red-600">{errors.name?.message as ReactNode}</p>
          </div>

          <div>
            <input className="w-full my-2 bg-transparent h-12 rounded-md p-3 border border-primary" {...register('email', {required: 'this field is required'})} type="text" placeholder="Email" />
            <p className="text-red-600">{errors.email?.message as ReactNode}</p>
          </div>

          <div>
            <input className="w-full my-2 bg-transparent h-12 rounded-md p-3 border border-primary" {...register('phone', {required: 'this field is required'})} type="text" placeholder="Phone" />
            <p className="text-red-600">{errors.phone?.message as ReactNode}</p>
          </div>

          <div>
            <input className="w-full my-2 bg-transparent h-12 rounded-md p-3 border border-primary" {...register('person', {required: 'this field is required'})} type="text" placeholder="Person" />
            <p className="text-red-600">{errors.person?.message as ReactNode}</p>
          </div>

          <div>
            <input className="w-full my-2 bg-transparent h-12 rounded-md p-3 border border-primary" {...register('date', {required: 'this field is required'})} type="text" placeholder="Date" />
            <p className="text-red-600">{errors.date?.message as ReactNode}</p>
          </div>

          <div>
            <input className="w-full my-2 bg-transparent h-12 rounded-md p-3 border border-primary" {...register('time', {required: 'this field is required'})} type="text" placeholder="Time" />
            <p className="text-red-600">{errors.time?.message as ReactNode}</p>
          </div>
        </div>
        <Button background="bg-primary" others="block m-auto">
            booking table
        </Button>
      </form>
      <Sponsors />
    </div>
  )
}

export default index
