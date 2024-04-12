import housePic from '../../../public/house-picture.png'
function HouseCard () {
  return (
    <div className='p-4 bg-gray-200 rounded-2xl h-84 w-72 '>
      <img className='rounded-2xl mb-8' src={housePic} width='auto' height='120px' alt='' />
      {/* TODO mettre les parametres pour récupérer du fetch */}
      <p className='my-8'>titre</p>
      <p className='my-8'>prix</p>
      <p className='my-8'>metres carrés</p>
      <p className='my-8'>icons etiquettes</p>
    </div>
  )
}

export default HouseCard
