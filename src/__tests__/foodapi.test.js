import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import fetchFoodByArea from '../apitest/fetchFoodByArea';

describe('fetchFoodByArea', () => {
  it('fetches food items by area', async () => {
    const mock = new MockAdapter(axios);

    const area = 'Indian';
    const responseData = {
      meals: [
        { idMeal: '1', strMeal: 'Biryani', strCategory: 'Main Course', strMealThumb: 'https://www.example.com/biryani.jpg' },
        { idMeal: '2', strMeal: 'Butter Chicken', strCategory: 'Main Course', strMealThumb: 'https://www.example.com/butter_chicken.jpg' },
      ],
    };

    mock.onGet(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`).reply(200, responseData);

    const result = await fetchFoodByArea(area);

    expect(result.meals).toEqual(responseData.meals);
  });
});
