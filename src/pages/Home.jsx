import searchIcon from '../assets/images/icons/searchIcon.svg'
import communicationPictos from '../assets/images/pictos/communication.svg'
import developmentPictos from '../assets/images/pictos/development-devices.svg'
import tasksPictos from '../assets/images/pictos/tasks.svg'
import tasksUnderPressurePictos from '../assets/images/pictos/tasks-under-pressure.svg'
import HouseCard from '../components/cards/HouseCard'
import ReviewCard from '../components/cards/reviews/ReviewCard'
import cornerPropositions from '../assets/images/pictos/corner-propositions.svg'
import Accordeon from '../components/accordeon/Accordeon'
// import { useFetch } from '../hooks/Api'
const apiUrl = process.env.REACT_APP_BASE_URL_API
function Home() {

  return (
    <>
      <section className='homePageHero flex flex-col'>
        <div className='w-8/12  inset-0 bg-white bg-opacity-50 backdrop-blur-sm flex flex-col justify-center items-center text-center p-6 rounded-3xl'>
          <h1 className='text-center text-primary-500 '>
            Colocation entre seniors:
            <br />
            Créez des liens,
            <br />
            créez des souvenirs
          </h1>
        <div className='relative flex justify-center m-auto my-16 shadow appearance-none border rounded-full h-14 bg-gray-50 w-2/5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'>
          <img className='absolute left-6 top-3 ' src={searchIcon} alt='' />
          <input placeholder='colocation nantes pour 4' className='w-56 placeholder:text-center bg-gray-50 search' type='text' name='' id='' />
        </div>
        </div>
      </section>
      <section className='h-50 mb-8 bg-secondary_bg-600 py-20'>
        
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
      <section className='relative'>
        <h2 className='text-center text-primary-500 my-6'>Nos différentes propositions
          <br />
          près de chez vous...
        </h2>
          <img className='absolute right-40 top-10 -z-10' src={cornerPropositions} alt="" />
        <div className=' grid grid-col-3 grid-flow-col justify-center gap-12'>
        
          <HouseCard />

          <HouseCard />

          <HouseCard />
        </div>

        {/* TODO map des habitations enregistrées */}
      </section>
      <section className='mt-24 bg-secondary_bg-600'>
        <div className="flex flex-col container">
        <h2>Ils nous ont jugés gage de qualité !</h2>
          <div className='grid grid-cols-4 gap-4 my-6'>
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
          </div>
          <p className='self-center align-middle mb-6'>Évalutation Google: 5/5, basé sur 80 avis</p>
        </div>
      </section>
      <section>
        <h2 className='text-center text-primary-500'>Notre FAQ pour répondre à vos questionnements</h2>
        <Accordeon />
      </section>

    </>

  )
}

export default Home
