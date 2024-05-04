// App.js

import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './middleware/store';
import Filter from './components/Filter';
import FoodItemGrid from './components/FoodItemGrid';
import { fetchFoodItems } from './actions/foodActions';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  useEffect(() => {
    store.dispatch(fetchFoodItems("Indian"));
  }, []);

  return (
    <Provider store={store} className="font-sans">
      <Header />
      <div className="container mx-auto p-4">
        <Filter />
        <FoodItemGrid />
      </div>
      <Footer />
    </Provider>
  );
};

export default App;
