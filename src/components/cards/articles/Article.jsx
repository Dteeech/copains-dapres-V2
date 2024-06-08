import blog_1 from '../../../assets/images/blog_1.webp'
function Article() {
    return ( 
        <div className='p-6 bg-white rounded-2xl h-84 flex flex-col'>
            {/* TODO mettre les parametres pour récupérer du fetch */}
            <div className=''>
                <img className='rounded-2xl mb-8 w-full'  src={blog_1} width='auto' height='120px' alt='' />
                <div className="">
                </div>
                
            </div>
            <div className="p-2 bg-primary-500 w-1/6 text-center rounded-xl text-white">santé</div>
            <div>
                <h3 className='my-8 font-semibold text-xl'>Palier aux carences en hiver</h3>
                <p>Date</p>

            </div>
        </div>
     )
}

export default Article;