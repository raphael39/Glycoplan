import React from 'react';
import PageManagement from './components/PageNavigation/PageManagement';

import {createStore, combineReducers} from 'redux';
import { Provider } from 'react-redux';
import shoppingListFavoritesReducer from './store/reducer/shoppingListAndFavorites'

const rootReducer = combineReducers({
  shoppingListFavorites: shoppingListFavoritesReducer
})
const store = createStore(rootReducer)






export default function App() { 


  
  return (
      <Provider store={store}><PageManagement /></Provider>
  );

  

}

