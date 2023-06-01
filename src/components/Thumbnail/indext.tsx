function Thumbnail({ url}: {url:string}) {
  return (
    <div className="overflow-hidden cursor-pointer">
      <img className="h-full w-full hover:scale-110 duration-300" src={url} />
    </div>
  )
}

export default Thumbnail
