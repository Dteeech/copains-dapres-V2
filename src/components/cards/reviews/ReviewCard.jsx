import Briac from '../../../../public/user-review.webp'
import ReviewStars from './ReviewStars';
import googleIcon from '../../../assets/images/icons/google.svg'
function ReviewCard() {
    return (
        <div className='p-6 bg-gray-200 rounded-2xl h-84 relative'>
            {/* TODO mettre les parametres pour récupérer du fetch */}
            <div className='flex'>
                <img className='rounded-2xl mb-8 rounded-e-full' src={Briac} width='auto' height='120px' alt='' />
                <div className="flex flex-col mx-8">

                <p className='text-xl'> <strong>Briac</strong> </p>
                <p className='text-xs text-gray-500'>23-04-2024</p>
                </div>
                <div className="absolute right-5"><img src={googleIcon} alt="" /></div>
            </div>
            <div><ReviewStars /></div>
            <div>
                <p className='my-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. .</p>
            </div>
        </div>

    );
}

export default ReviewCard;