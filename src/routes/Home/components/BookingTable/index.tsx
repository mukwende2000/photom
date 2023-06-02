import Heading from '../../../../components/Heading'
import Button from '../../../../components/Button'
import { FaCaretRight } from 'react-icons/fa'
import styles from './BookingTable.module.scss'

function BookingTable() {
  return (
    <div className={`${styles.main}`}>
        <div className="container md:flex items-center justify-between">
            <Heading title="booking table for your family members" subtitle="Need a Table On Coffee House"/>
            <Button background="bg-primary" others="">
                Booking Table <FaCaretRight className="inline text-xl" />
            </Button>
        </div>
     </div>
  )
}

export default BookingTable
