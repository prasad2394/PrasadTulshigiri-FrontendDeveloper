// components/Filter.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchFoodItems } from '../actions/foodActions';

const Filter = () => {
  const dispatch = useDispatch();

  const handleAreaChange = (area) => {
    dispatch(fetchFoodItems(area));
    setSelectedOption(area); 
  };

  const areaFilters = [
    { "id": "canadian", "value": "Canadian" },
    { "id": "indian", "value": "Indian" },
    { "id": "mexican", "value": "Mexican" },
    { "id": "italian", "value": "Italian" },
    { "id": "spanish", "value": "Spanish" }
  ];


  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
 
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <div className="relative inline-block text-left my-6">
      <div>
        <span className="rounded-md shadow-sm">
          <button
            type="button"
            className="inline-flex justify-center w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
            id="options-menu"
            aria-haspopup="true"
            aria-expanded={isOpen}
            onClick={toggleDropdown}
          >
            {selectedOption ? selectedOption : "Filter"}
            <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
            </svg>
          </button>
        </span>
      </div>
      {isOpen && (
      <div
        className="origin-top-right z-10 absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        {areaFilters?.map((area) => (
          <div key={area.id} className="px-4 py-2 text-sm text-gray-700">
            <label htmlFor={area.id} className="flex items-center justify-between space-x-2 cursor-pointer">
              <span>{area.value}</span>
              <input
                type="radio"
                className="form-radio h-5 w-5 text-indigo-600"
                id={area.id}
                name="area"
                value={area.value}
                onChange={() => handleAreaChange(area.value)}
              />
            </label>
          </div>
        ))}
      </div>
      )}
    </div>
    </>
  );
};

export default Filter;
