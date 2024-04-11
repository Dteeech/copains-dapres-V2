import searchIcon from '../assets/images/icons/searchIcon.svg'
function Home () {
  return (
    <>
      <div>
        <h1 className='text-center text-primary-500'>
          Colocation entre seniors:
          <br />
          Créez des liens,
          <br />
          créez des souvenirs
        </h1>
      </div>
      <div className=' relative container w-1/4 flex justify-center m-auto my-16'>
        <img className='absolute left-6 top-3' src={searchIcon} alt='' />
        <input placeholder='colocation nantes pour 4' className='placeholder:text-center shadow appearance-none border rounded-full h-14 bg-gray-50 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type='text' name='' id='' />
      </div>
      <div className='' />
    </>

  )
}

export default Home
