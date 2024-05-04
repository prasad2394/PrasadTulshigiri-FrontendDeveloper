import axios from "axios";

async function fetchFoodByArea(area) {
  try {
    const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching food items by area:', error);
    return null;
  }
}

export default fetchFoodByArea;
