import Heading from "../../components/Heading"
import Hero from "../../components/Hero"
import CallToAction from "../Home/components/CallToAction"
import styles from './Faq.module.scss'
import Question from './components/Question'
import Sponsors from '../../components/Sponsors'

function index() {
  const questions = [
   'How much customers like kaffen?',
   'how can i see your food reviews?',
   'how can i order food in online?',
   'what customers say about us?',
   'how to know about company history?'
  ]

  return (
    <>
      <Hero heading="Faq" bg={styles.hero} />
      <main className="bg-[#0e1317]">
        <div className="container">
          <Heading title="have any questions" subtitle="Frequently Asked Questions"   />
          <ul className="mb-16">
            {questions.map((q, i) => {
              return <Question text={q} key={i} />
            })}
          </ul>
        </div>
        <CallToAction title="get in touch" subTitle="Have Any Questions" />
        <Sponsors />
      </main>
    </>
  )
}

export default index
