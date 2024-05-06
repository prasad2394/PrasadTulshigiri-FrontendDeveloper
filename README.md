# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


### `Components`

Create React components to structure your application. Here are some components you might consider:

### `App`

The main component that orchestrates the application's structure.

### `FoodList` 

A component to display a list of food items.

### `FoodItem`

A component to represent a single food item.

### `FoodDetails`

A component to display detailed information about a selected food item.

### `Filter`

Created Filter Component for fetching data by area

### `API Used for WebApp (Endpoints)`

* fetch by area : https://www.themealdb.com/api/json/v1/1/filter.php?a=

* fetch food item detail : https://www.themealdb.com/api/json/v1/1/lookup.php?i= 


### `State Management`

Used REDUX for state management in this WebApp
The list of food items.
Selected food item details.
Loading state while fetching data.
Error state for handling any fetch errors.

### `Fetching Data`

Implement functionality to fetch food items and details from an API. For fetching used Axios Library.

### `Rendering Data`
Render the fetched food items and their details in the appropriate components. 

### `JEST Testing`

Created one test case for API data testing, you can see below files

* __test__/foodapi.test.js : Created one test case
* apitest/fetchFoodByArea.js : Fetch Simple API here by area.

### `WebApp Video URL`
https://vimeo.com/943012808?share=copy