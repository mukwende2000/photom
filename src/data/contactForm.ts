interface Field {
    type: string
    name: string
    required?: string
    pattern?: {
        value: RegExp,
        message: string
    },
    placeholder: string

}
const requiredMessage = 'This field is required'
const regExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
const fields: Field[] = [
    {
        type: 'text',
        name: 'name',
        required: requiredMessage,
        placeholder: 'Full Name'
    },
    {
        type: 'email',
        name: 'email',
        required: requiredMessage,
        pattern: {
            value: regExp,
            message: 'Enter an Invalid email address'
        },
        placeholder: 'Email Address'
    },
    {
        type: 'number',
        name: 'phone',
        required: requiredMessage,
        placeholder: 'Phone Number'
    },
    {
        type: 'text',
        name: 'subject',
        required: requiredMessage,
        placeholder: 'Subject'
    }
]
export default fields