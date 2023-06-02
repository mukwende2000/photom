import Heading from '../../../../components/Heading'
import Button from '../../../../components/Button'
import { FaCaretRight } from 'react-icons/fa'
import styles from './CallToAction.module.scss'

function CallToAction({ title, subTitle}:{ title:string, subTitle:string}) {
  return (
    <div className={`${styles.main}`}>
        <div className="container md:flex items-center justify-between">
            <Heading title={title} subtitle={subTitle}/>
            <Button background="bg-primary">
                Booking Table <FaCaretRight className="inline text-xl" />
            </Button>
        </div>
     </div>
  )
}

export default CallToAction
