import axios from 'axios';

export const FETCH_FOOD_ITEMS_REQUEST = 'FETCH_FOOD_ITEMS_REQUEST';
export const FETCH_FOOD_ITEMS_SUCCESS = 'FETCH_FOOD_ITEMS_SUCCESS';
export const FETCH_FOOD_ITEMS_FAILURE = 'FETCH_FOOD_ITEMS_FAILURE';

export const fetchFoodItems = (area) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_FOOD_ITEMS_REQUEST });

    try {
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`);
      dispatch({
        type: FETCH_FOOD_ITEMS_SUCCESS,
        payload: response.data.meals,
      });
    } catch (error) {
      dispatch({
        type: FETCH_FOOD_ITEMS_FAILURE,
        payload: error.message,
      });
    }
  };
};

export const FETCH_FOOD_DETAIL_REQUEST = 'FETCH_FOOD_DETAIL_REQUEST';
export const FETCH_FOOD_DETAIL_SUCCESS = 'FETCH_FOOD_DETAIL_SUCCESS';
export const FETCH_FOOD_DETAIL_FAILURE = 'FETCH_FOOD_DETAIL_FAILURE';

export const fetchFoodDetail = (id) => {
  return async (dispatch) => {

      dispatch({type: FETCH_FOOD_DETAIL_REQUEST});

      try {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        dispatch({
            type: FETCH_FOOD_DETAIL_SUCCESS,
            payload: response.data.meals[0],
        });
      } catch (error) {
        dispatch({
            type: FETCH_FOOD_ITEMS_FAILURE,
            payload: error.message,
        });
      }

  }
}