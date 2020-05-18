import React from 'react';
import PageManagement from './components/PageNavigation/PageManagement';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import shoppingListFavoritesReducer from './store/reducer/shoppingListAndFavorites';
import { AppRegistry } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
const rootReducer = combineReducers({
  shoppingListFavorites: shoppingListFavoritesReducer,
});
const store = createStore(rootReducer);

export default function App() {
  return (
    <PaperProvider>
      <Provider store={store}>
        <PageManagement />
      </Provider>
    </PaperProvider>
  );
}

AppRegistry.registerComponent('main', () => Main);