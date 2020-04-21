import { SHOPPINGITEMS } from '../../Data/data';
import { ADD_ITEM_TOLIST } from '../actions/shoppingListAndFavorites';
import {DELETE_ITEM_FROMLIST} from '../actions/shoppingListAndFavorites'
import shoppingListModel from './../../models/shoppinList';

const initialState = {
  shoppingList: SHOPPINGITEMS,
  favoritItemsState: [],
  favoriteRecipesState: [],
};

const shoppingListFavoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM_TOLIST:
      return {
        ...state,shoppingList: [
          new shoppingListModel(
            Math.random().toString(),
            action.ItemTitle,
            '10kg',
            action.colorCode,
          ),
          ...state.shoppingList,
        ],
      };
    case DELETE_ITEM_FROMLIST:
        const existingIndex = state.shoppingList.findIndex(
            grocery => grocery.id === action.ItemID
          );
          if (existingIndex >= 0) {
            const updatedShoppingItems = [...state.shoppingList];
            updatedShoppingItems.splice(existingIndex, 1);
            return { ...state, shoppingList: updatedShoppingItems};
          } 
            
    default:
      return state;
  }
};

export default shoppingListFavoritesReducer;
