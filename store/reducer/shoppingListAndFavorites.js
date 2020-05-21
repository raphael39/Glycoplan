import { SHOPPINGITEMS, green, yellow, GlycoListeData } from '../../Data/data';
import { ADD_ITEM_TOLIST } from '../actions/shoppingListAndFavorites';
import { DELETE_ITEM_FROMLIST } from '../actions/shoppingListAndFavorites';
import { FILTER_RECOMMENDATIONS } from '../actions/shoppingListAndFavorites';
import { UPDATE_QUANTITY } from '../actions/shoppingListAndFavorites';
import shoppingListModel from './../../models/shoppinList';


const initialState = {
  shoppingList: SHOPPINGITEMS,
  favoritItemsState: [],
  favoriteRecipesState: [],
  green: green,
  yellow: yellow,
  red: [],
  greenFiltered: [],
  yellowFiltered: yellow,
  redFiltered: [],
};

const shoppingListFavoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM_TOLIST:
      return {
        ...state,
        shoppingList: [
          new shoppingListModel(
            `${action.sentID}_${Math.random().toString()}`,
            action.ItemTitle,
            '100g',
            action.colorCode, 
            action.nutrients,
          ),
          ...state.shoppingList,
        ],
      };
    case DELETE_ITEM_FROMLIST:
      const existingIndex = state.shoppingList.findIndex(
        (grocery) => grocery.id === action.ItemID
      );
      if (existingIndex >= 0) {
        const updatedShoppingItems = [...state.shoppingList];
        updatedShoppingItems.splice(existingIndex, 1);
        return { ...state, shoppingList: updatedShoppingItems };
      }
    case FILTER_RECOMMENDATIONS:

      let updatedFiltered = state.green;
      console.log('updatedFilterd -1- -->', updatedFiltered);
      updatedFiltered = updatedFiltered.filter(
        (Food) => Food.title.length > 12);
        console.log('updatedFilterd -1- -->', updatedFiltered);
        const LastTry = [...updatedFiltered];
      return Object.assign({}, state, { greenFiltered: LastTry });

      case UPDATE_QUANTITY: 
      let selectedItem = state.shoppingList.find(
        (GroceryItem) => GroceryItem.id === action.ItemID
      );
      const indexUpdate = state.shoppingList.findIndex(
        (GroceryItem) => GroceryItem.id === action.ItemID
      );
      selectedItem = {...selectedItem, quantity: `${action.quantity}g`};
      const updatedListQuantity= [...state.shoppingList,]
      updatedListQuantity.splice(indexUpdate, 1, selectedItem);
      console.log(updatedListQuantity);
      return { ...state, shoppingList: updatedListQuantity };

    default:
      return state;
  }
};

export default shoppingListFavoritesReducer;
