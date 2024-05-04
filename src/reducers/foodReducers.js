import {
    FETCH_FOOD_ITEMS_REQUEST,
    FETCH_FOOD_ITEMS_SUCCESS,
    FETCH_FOOD_ITEMS_FAILURE,
    FETCH_FOOD_DETAIL_REQUEST,
    FETCH_FOOD_DETAIL_SUCCESS,
    FETCH_FOOD_DETAIL_FAILURE,
} from '../actions/foodActions';
  
  const initialState = {
    foodItems: [],
    loading: false,
    error: null,
  };
  
  const foodReducers = (state = initialState, action) => {
    switch (action.type) {

      //Reducer for Fetching Food List as per area
      case FETCH_FOOD_ITEMS_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case FETCH_FOOD_ITEMS_SUCCESS:
        return {
          ...state,
          loading: false,
          foodItems: action.payload,
        };
      case FETCH_FOOD_ITEMS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };

      //Reducer for Fetching Food Details Here
      case FETCH_FOOD_DETAIL_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case FETCH_FOOD_DETAIL_SUCCESS:
        return {
          ...state,
          loading: false,
          foodDetail: action.payload,
        };
      case FETCH_FOOD_DETAIL_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default foodReducers;
  