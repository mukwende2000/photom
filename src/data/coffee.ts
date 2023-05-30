import expresso from '../assets/images/img16.jpg'
import americano from '../assets/images/img3.jpg'
import coldCoffee from '../assets/images/img15.jpg'
import baristerSyrup from '../assets/images/img24.jpg'
import cappuccino from '../assets/images/img20.jpg'
import milkCream from '../assets/images/img21.jpg'


interface Coffees {
    name: string
    contents: string
    price: string 
    image: string
}

export const coffees:Coffees[] = [
    {
        name: 'Americano Coffee',
        contents: '2/3 espresso 1/3 steamed milk',
        price: '$4.9',
        image: americano
    },
    {
        name: 'Espresso Coffee',
        contents: '2/3 espresso 1/3 steamed milk',
        price: '$3.0',
        image: expresso
    },
    {
        name: 'Cold Coffee',
        contents: '2/3 espresso 1/3 steamed milk',
        price: '$4.2',
        image: coldCoffee
    },
    {
        name: 'Barister Pouring Syrup',
        contents: '2/3 espresso 1/3 steamed milk',
        price: '$4.2',
        image: baristerSyrup
    },
    {
        name: 'Cappuccino Coffee',
        contents: '2/3 espresso 1/3 steamed milk',
        price: '$4.2',
        image: cappuccino
    },
    {
        name: 'Milk Cream Coffee',
        contents: '2/3 espresso 1/3 steamed milk',
        price: '$4.2', 
        image: milkCream
    },
]