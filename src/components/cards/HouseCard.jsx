import housePic from '../../../public/house-picture.webp'
import heart from '../../assets/images/icons/heart.svg'
import photoIcon from '../../assets/images/icons/photo-icon.svg'
import city from '../../assets/images/icons/city.svg'
function HouseCard () {
  return (
    <div className='relative p-4 bg-gray-100 rounded-2xl h-84 w-72 '>
      <img className='absolute right-9 top-8' src={heart} alt="" />
      <img className='rounded-2xl mb-8' src={housePic} width='auto' height='120px' alt='' />
      <div className="absolute left-8 top-40">
      <img className='' src={photoIcon} alt='' />
      {/*TODO nombre de photos*/}
      </div>
      {/* TODO mettre les parametres pour récupérer du fetch */}
      <p className='my-8'><strong> Colocation appartement T3 Nantes Sainte Thérèse </strong></p>
      <p className='my-8'>1000€</p>
      
      <p className='my-8 p-2 border-spacing-6 rounded-full bg-squareMeter text-center max-w-20 '>89m²</p>
      {/*TODO faire la remontée des pictos des filtres et faire le composant pour le picto*/}
      <p className='my-8 p-2 border-spacing-6 border-2 rounded-full bg-secondary_bg-500 text-center w-fit'><img src={city} className='w-full h-auto' alt='' /></p>

    </div>
  )
}

export default HouseCard
