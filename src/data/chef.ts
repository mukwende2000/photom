import anthony from '../assets/images/img4.jpg'
import anna from '../assets/images/img5.jpg'
import kenny from '../assets/images/img32.jpg'
import joseph from '../assets/images/img62.jpg'


interface Chefs {
    name: string
    position: string
    url: string
    email: string
}

const chefs: Chefs[] = [
    {
        name: 'Anthony J. Bowman',
        position: 'Senior Chef',
        url: anthony,
        email: 'anthony@gmail.com'
    },
    {
        name: 'Kenny V. Gonzelez',
        position: 'Sous Chef',
        url: kenny,
        email: 'kenny@gmail.com'
    },
    {
        name: 'Joseph M. Lawrence',
        position: 'pastry Chef',
        url: joseph,
        email: 'joseph@gmail.com'
    },
    {
        name: 'Anna K. Smith',
        position: 'Junior Chef',
        url: anna,
        email: 'anna@gmail.com'
    },
]
export default chefs