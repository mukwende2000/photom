type Props = {
  title: string
  subtitle: string
  centerOnMediumScreens?: boolean
}

function Heading({ title, subtitle, centerOnMediumScreens=true }:Props) {
  return (
    <div className={`py-10 ${ centerOnMediumScreens? 'md:text-center' : null}`}>
      <p className="text-primary uppercase my-6">{ title }</p>
      <h5 className={`md:text-4xl text-3xl text-white capitalize`}>{ subtitle }</h5>
    </div>
  )
}

export default Heading
