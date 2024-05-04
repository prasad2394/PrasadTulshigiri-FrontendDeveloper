import React, { useEffect, useState } from 'react';

const Modal = ({ isOpen, closeModal, foodDetail}) => {
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
        const truncated = foodDetail.strInstructions.substring(0, 100);
        setTruncatedInstructions(truncated);
      }
    }, [foodDetail]);


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
                            <p className='my-5'>Category: <span className='bg-slate-600 text-white py-1 px-4'>{foodDetail.strCategory}</span></p>
                            <p>Ingredients :</p>
                            <p>{truncatedInstructions}</p>
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