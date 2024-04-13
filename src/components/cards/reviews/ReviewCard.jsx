import Briac from '../../../../public/user-review.webp'
import ReviewStars from './ReviewStars';

function ReviewCard() {
    return (
        <div className='p-4 bg-gray-200 rounded-2xl h-84 w-72 '>
            <img className='rounded-2xl mb-8 rounded-e-full' src={Briac} width='auto' height='120px' alt='' />
            {/* TODO mettre les parametres pour récupérer du fetch */}
            <div className="">
                <p className='my-8'>nom</p>
                <p className='my-8'>date</p>
            </div>
            <ReviewStars />
            <p className='my-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi reprehenderit vitae fugiat similique velit aperiam laudantium inventore dolorum placeat ratione fuga deleniti sunt cum, sapiente aspernatur, iusto voluptatem, numquam nemo.</p>
            <p className='my-8'>icons etiquettes</p>
        </div>

    );
}

export default ReviewCard;