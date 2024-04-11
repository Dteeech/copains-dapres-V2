import searchIcon from '../assets/images/icons/searchIcon.svg'
import communicationPictos from '../assets/images/pictos/communication.svg'
import developmentPictos from '../assets/images/pictos/development-devices.svg'
import tasksPictos from '../assets/images/pictos/tasks.svg'
import tasksUnderPressurePictos from '../assets/images/pictos/tasks-under-pressure.svg'
import HouseCard from '../components/cards/HouseCard'

function Home () {
  return (
    <>
      <section>
        <div>
          <h1 className='text-center text-primary-500'>
            Colocation entre seniors:
            <br />
            Créez des liens,
            <br />
            créez des souvenirs
          </h1>
        </div>
        <div className='relative w-2/6 flex justify-center m-auto my-16 shadow appearance-none border rounded-full h-14 bg-gray-50 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'>
          <img className='absolute left-6 top-3 ' src={searchIcon} alt='' />
          <input placeholder='colocation nantes pour 4' className='w-56 placeholder:text-center bg-gray-50 search' type='text' name='' id='' />
        </div>
      </section>
      <section className='h-50 my-8 bg-secondary_bg'>
        <div className='grid grid-cols-4 mx-auto justify-heavenly'>
          <div className='flex items-center flex-col'>
            <img src={communicationPictos} alt='' />
            <p>Entreprise à l'écoute</p>
          </div>
          <div className='flex items-center flex-col'>
            <img src={developmentPictos} alt='' />
            <p>Service pensé pour vous</p>
          </div>
          <div className='flex items-center flex-col'>
            <img src={tasksPictos} alt='' />
            <p>Équipe polyvalente</p>
          </div>
          <div className='flex items-center flex-col'>
            <img src={tasksUnderPressurePictos} alt='' />
            <p>Plus de 500 partenaires</p>
          </div>
        </div>
      </section>
      <section>
        <h2 className='text-center text-primary-500 my-6'>Nos différentes propositions
          <br />
          près de chez vous...
        </h2>
        <div className='grid grid-col-3 grid-flow-col justify-center gap-12'>

          <HouseCard />

          <HouseCard />

          <HouseCard />

        </div>
        {/* TODO map des habitations enregistrées */}
      </section>

    </>

  )
}

export default Home
