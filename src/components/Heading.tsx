type Props = {
  title: string
  subtitle: string
  isCenter?: boolean
}

function Heading({ title, subtitle, isCenter }:Props) {
  return (
    <div className={`my-10 ${isCenter ? 'md:text-center' : null}`}>
      <p className="text-primary uppercase">{ title }</p>
      <h5 className={`text-5xl text-white`}>{ subtitle }</h5>
    </div>
  )
}

export default Heading
