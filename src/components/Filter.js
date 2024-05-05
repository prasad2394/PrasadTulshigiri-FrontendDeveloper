import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchFoodItems } from '../actions/foodActions';
import Dropdown from './Dropdown';

const Filter = () => {
  const dispatch = useDispatch();

  // const handleAreaChange = (area) => {
  //   dispatch(fetchFoodItems(area));
  // };

  const areaFilters = [
    { "id": "canadian", "value": "Canadian" },
    { "id": "indian", "value": "Indian" },
    { "id": "mexican", "value": "Mexican" },
    { "id": "italian", "value": "Italian" },
    { "id": "spanish", "value": "Spanish" }
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  const handleAreaSelect = (area) => {
    dispatch(fetchFoodItems(area));
    setSelectedOption(area);
    //handleAreaChange(area);
  };


  return (
    <>
      <Dropdown
        options={areaFilters}
        selectedOption={selectedOption}
        onSelect={handleAreaSelect}
        RadioButtonName="Select by Area"
      />

      <Dropdown
        //options={areaFilters}
        //selectedOption={selectedOption}
        //onSelect={handleAreaSelect}
        RadioButtonName="By Ratings"
      />


    </>
  );
};

export default Filter;
