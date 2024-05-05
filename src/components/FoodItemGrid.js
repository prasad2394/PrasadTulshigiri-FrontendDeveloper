// components/FoodItemGrid.js

import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFoodDetail } from '../actions/foodActions';
import FoodModal from './FoodModal';

const FoodItemGrid = () => {
  const [modalOpen, setModalOpen] = useState(false);
  //const [selectedFoodId, setSelectedFoodId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  //foodItems
  const foodItems = useSelector(state => state.food.foodItems);

  //foodDetail
  const foodDetail = useSelector(state => state.food.foodDetail);
  const dispatch = useDispatch();

  const handleBoxClick = (id) => {
    //setSelectedFoodId(id);
    setModalOpen(true);
    dispatch(fetchFoodDetail(id));
  }

  const closeModal = () => {
    setModalOpen(false);
    //setSelectedFoodId(null);
  }


  // Pagination Code
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = foodItems.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  //Food Raandom Rating
  const [foodRatings, setFoodRatings] = useState([]);

  useEffect(() => {
    setFoodRatings(generateFoodRatings(currentItems.length));
  }, [currentItems.length]);

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-8">
        {currentItems.map((item, index) => (
          <div key={item.idMeal} className="mb-6 hover:scale-95 transition-transform duration-300 ease-in-out" onClick={() => handleBoxClick(item.idMeal)}>
            <img src={item.strMealThumb} alt={item.strMeal} className="w-full rounded-lg h-48 object-cover mb-2" />
            <h3 className="text-lg font-bold">{item.strMeal}</h3>
            <p>{item.strCategory}</p>
            <div className="flex items-center mt-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.458 1.355a.5.5 0 01.884 0l1.699 3.411a.5.5 0 00.448.277l3.779.549c.27.039.378.36.174.546l-2.73 2.666a.5.5 0 00-.145.543l1.396 3.895c.075.21-.195.38-.385.273l-3.474-2.228a.5.5 0 00-.553 0l-3.474 2.228c-.19.107-.46-.063-.385-.273l1.396-3.895a.5.5 0 00-.145-.543l-2.73-2.666a.5.5 0 01.174-.546l3.779-.549a.5.5 0 00.448-.277l1.699-3.411z" clipRule="evenodd" />
              </svg>
              <span className="ml-1">{foodRatings[index]}</span>
            </div>
            <p>{item.strTags}</p>
          </div>
        ))}

        <FoodModal isOpen={modalOpen} closeModal={closeModal} foodDetail={foodDetail} foodRatings={foodRatings} />

        <div className="col-span-4 flex justify-center mt-6">
          {foodItems.length > itemsPerPage && (
            <ul className="flex space-x-2">
              {Array.from({ length: Math.ceil(foodItems.length / itemsPerPage) }, (_, index) => (
                <li key={index}>
                  <button 
                    className={`bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ${currentPage === index + 1 ? 'bg-gray-700' : ''}`} 
                    onClick={() => paginate(index + 1)}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

      </div>
    </div>
  );
};

const generateFoodRatings = (count) => {
  const foodRatings = [];
  for (let i = 0; i < count; i++) {
    foodRatings.push(Math.floor(Math.random() * 5) + 1);
  }
  return foodRatings;
};

export default FoodItemGrid;