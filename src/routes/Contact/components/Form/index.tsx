import { useForm } from "react-hook-form"
import Button from "../../../../components/Button"
import Heading from "../../../../components/Heading"
import { ReactNode, useState } from "react"


function index() {
    const form = useForm()
    const [isSubmitted, setIsSubmitted] = useState(false)
    const { register, formState, handleSubmit } = form
    const { errors } = formState
    const regExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    function onSubmit() {
        setIsSubmitted(true)
    }


  return (
    <div className="py-10">
          <form className="bg-black p-5" noValidate onSubmit={handleSubmit(onSubmit)}>
            <Heading  title="contact us" subtitle="Send Us a Message" />
            <div>
                <div className="flex flex-col md:flex-row md:gap-10">
                    <div className="w-full">
                        <input className="p-5 w-full my-2 h-14 bg-black rounded border border-primary" type="text" {...register('name', {required: 'This field is required'})} placeholder="Full Name"/>
                        <p className="text-red-500">{errors.name?.message as ReactNode}</p>

                    </div>
                    <div className="w-full">
                        <input className="p-5 w-full my-2 h-14 bg-black rounded border border-primary" type="email"  {...register('email', {required: 'This field is required', pattern: {value: regExp, message: 'Enter a valid Email'}})} placeholder="Email Address" />
                        <p className="text-red-500">{errors.email?.message as ReactNode}</p>
                    </div>
                    <div className="w-full">

                        <input className="p-5 w-full my-2 h-14 bg-black rounded border border-primary" type="number" {...register('cell', {required: 'This field is required'})} placeholder="Phone Number"/> 
                        <p className="text-red-500">{errors.cell?.message as ReactNode}</p>
                    </div>
                </div>
                <div className="w-full">
                    <input className="p-5 w-full my-2 h-14 bg-black rounded border border-primary" type="text" {...register('subject', {required: 'This field is required'})}placeholder="Subject" />
                    <p className="text-red-500">{errors.cell?.message as ReactNode}</p>
                </div>
                <div>
                    <textarea className="w-full p-5 my-2 bg-black rounded border border-primary" cols={30} rows={10} placeholder="Message" {...register('message', {required: 'This field is required'})}></textarea>
                    <p>{errors.message?.message as ReactNode}</p>
                </div>
                <Button background="bg-primary" others="">
                  send us a message
                </Button>
            </div>
          </form>
          <p>{isSubmitted && 'You have successfully reserved a place, can\'t wait to see you' }</p>
        </div>
  )
}

export default index
