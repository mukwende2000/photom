import cake from '../assets/images/img81.png'
import roll from '../assets/images/img82.png'
import burger from '../assets/images/img83.png'
import juice from '../assets/images/img84.png'

interface Services {
    name: string
    desc: string
    url: string
}

export const services: Services[] = [
    {
        name: 'Birthday Cakes',
        desc: 'Sed ut presipication unde',
        url: cake
    },
    {
        name: 'Fresh Foods',
        desc: 'Sed ut presipication unde',
        url: roll
    },
    {
        name: 'Skills Chefs',
        desc: 'Sed ut presipication unde',
        url: burger
    },
    {
        name: 'Organic Juice',
        desc: 'Sed ut presipication unde',
        url: juice
    },
]