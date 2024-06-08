
const HouseListItem = ({ houseKey, title, price, size, image, icons }) => {
  return (
    <div className="relative p-4 bg-primary-600 rounded-2xl h-84 max-w-80">
      <a href={`${process.env.REACT_APP_BASE_URL}/annonces/colocation/${houseKey}`} >
        <img className="absolute right-9 top-8" src={icons.heart} alt="Heart Icon" />
        <img className="rounded-2xl mb-8 w-full h-48 object-cover" src={image} alt="House" />
        <div className="absolute left-8 top-40">
          <img src={icons.photoIcon} alt="Photo Icon" />
          {/* TODO nombre de photos */}
        </div>
        <p className="my-8 text-white"><strong>{title}</strong></p>
        <p className="my-8 text-white">{price} €</p>
        <p className="my-8 p-2 border-spacing-6 rounded-xl bg-squareMeter text-center max-w-20">{size}m²</p>
        <p className="my-8 p-2 border-spacing-6 rounded-xl bg-secondary_bg-500 text-center w-fit">
          <img src={icons.city} className="w-full h-auto" alt="City Icon" />
        </p>
      </a>
    </div>
  )
}

export default HouseListItem
