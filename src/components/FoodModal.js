import React, { useEffect, useState } from 'react';

const Modal = ({ isOpen, closeModal, foodDetail, foodRatings}) => {
    // Close modal when clicking outside of it
    const handleOutsideClick = (event) => {
        if (isOpen && !event.target.classList.contains('modal')) {
            closeModal();
        }
    };

    const [truncatedInstructions, setTruncatedInstructions] = useState('');
  
    useEffect(() => {
      if (foodDetail) {
        // Truncate instructions to 100 characters
        const truncated = foodDetail.strInstructions.substring(0, 150);
        setTruncatedInstructions(truncated);
      }
    }, [foodDetail]);

    
    // const currentIndex = foodRatings.findIndex(rating => rating.id === foodDetail.idMeal);
    // const currentRating = currentIndex !== -1 ? foodRatings[currentIndex].rating : 0;



  return (
    <>
      {isOpen && (
        <>
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none" onClick={handleOutsideClick}>
          <div className="relativew-auto w-auto max-w-screen-sm mx-auto my-6">
            <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none modal">
              <div className="flex items-start justify-between p-5 border-b border-solid rounded-t">
                <h3 className="text-3xl font-semibold">Food Detail</h3>
                <button
                  className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={closeModal}
                >
                  <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">×</span>
                </button>
              </div>
              <div className="relative p-6 flex-auto">
                {foodDetail && (
                  <>
                    <div className='grid grid-cols-2 gap-2'>
                        <div>
                            <img className="h-60 rounded-2xl" src={foodDetail.strMealThumb} alt={foodDetail.strMeal} />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold">{foodDetail.strMeal}</h2>
                            {/* <div className="flex items-center">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M8.458 1.355a.5.5 0 01.884 0l1.699 3.411a.5.5 0 00.448.277l3.779.549c.27.039.378.36.174.546l-2.73 2.666a.5.5 0 00-.145.543l1.396 3.895c.075.21-.195.38-.385.273l-3.474-2.228a.5.5 0 00-.553 0l-3.474 2.228c-.19.107-.46-.063-.385-.273l1.396-3.895a.5.5 0 00-.145-.543l-2.73-2.666a.5.5 0 01.174-.546l3.779-.549a.5.5 0 00.448-.277l1.699-3.411z" clipRule="evenodd" />
                              </svg>
                              <span className="ml-1">{currentRating}</span>
                            </div> */}
                            <p className='my-5'>Category: <span className='bg-slate-600 text-white py-1 px-4'>{foodDetail.strCategory}</span></p>
                            <p>Ingredients :</p>
                            <p>{truncatedInstructions}</p>
                            <div className="mt-4">
                              <button className="bg-transparent outline hover:bg-black hover:text-white text-black font-bold py-1 px-4 rounded" onClick={() => window.open(foodDetail.strYoutube, '_blank')}>
                                Watch Video
                              </button>
                            </div>
                        </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
          
        </div>
        <div className="fixed inset-0 z-40 bg-black opacity-50"></div>
        </>
      )}
    </>
  );
};

export default Modal;