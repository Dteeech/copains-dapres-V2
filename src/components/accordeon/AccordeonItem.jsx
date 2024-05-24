import { useState } from "react";
import question1 from '../../assets/images/icons/question1.svg'
import question2 from '../../assets/images/icons/question2.svg'
import question3 from '../../assets/images/icons/question3.svg'
import question4 from '../../assets/images/icons/question4.svg'

import plusIcon from '../../assets/images/icons/plus.svg'
function AccordeonItem({ question, title, titleDescription, description }) {
    const [isOpen, setIsOpen] = useState(false)
    const questionNumber = {
        1: question1,
        2: question2,
        3: question3,
        4: question4
    }
    const questionImage = questionNumber[question]
    const handleToggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <div className="container w-full my-8">
                <button className="container w-full relative " onClick={handleToggle}>
                    {questionImage && <img src={questionImage} alt={`Question ${question}`} className='absolute top-8 left-20 ' />}
                    <div className="question bg-secondary_bg-500 min-h-20 text-center flex items-center justify-center">
                        <p>{title}</p>
                    <img src={plusIcon} alt="" className="absolute right-20 top-6"/>
                    </div>
                </button>
                {
                    isOpen && (
                        <div className="container w-full">
                            <div className="bg-gray-200 min-h-24 w-full text-start flex flex-col items-center justify-center px-5">
                                <p className="my-2"> {titleDescription}</p>
                                <div dangerouslySetInnerHTML={{ __html: description }} className="whitespace-pre-line my-2"></div>
                    

                            </div>
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default AccordeonItem;