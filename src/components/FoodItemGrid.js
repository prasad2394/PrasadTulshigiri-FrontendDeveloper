// components/FoodItemGrid.js

import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFoodDetail } from '../actions/foodActions';
import FoodModal from './FoodModal';

const FoodItemGrid = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedFoodId, setSelectedFoodId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  //foodItems
  const foodItems = useSelector(state => state.food.foodItems);

  //foodDetail
  const foodDetail = useSelector(state => state.food.foodDetail);
  const dispatch = useDispatch();

  const handleBoxClick = (id) => {
    setSelectedFoodId(id);
    setModalOpen(true);
    dispatch(fetchFoodDetail(id));
  }

  const closeModal = () => {
    setModalOpen(false);
    setSelectedFoodId(null);
  }


  // Pagination Code
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = foodItems.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="grid grid-cols-4 gap-4">
      {currentItems.map(item => (
        <div key={item.idMeal} className="mb-6 hover:scale-95 transition-transform duration-300 ease-in-out" onClick={() => handleBoxClick(item.idMeal)}>
          <img src={item.strMealThumb} alt={item.strMeal} className="w-full rounded-lg h-48 object-cover mb-2" />
          <h3 className="text-lg font-bold">{item.strMeal}</h3>
          <p>{item.strCategory}</p>
        </div>
      ))}

      <FoodModal isOpen={modalOpen} closeModal={closeModal} foodDetail={foodDetail}/>

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
  );
};

export default FoodItemGrid;
