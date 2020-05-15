import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import { Text, StyleSheet, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { addItemToList, filterRecommendations } from './../../store/actions/shoppingListAndFavorites';

import AddItemHeader from '../2.Page/PageTWOComponents/AddItemHeader';
import { SHOPPINGITEMS } from './../../Data/data';
import shoppingList from './../../models/shoppinList';
import ShoppingListView from './PageTWOComponents/ShoppingLIst';
import SearchItemsRecommendation from './PageTWOComponents/SearchItemsRecommendation';

const PageTwo_shopping = (props) => {
 
  
    const [EnteredGrocery, setEnteredGrocery] = useState('');
    const shoppingListItemsStateDerived = useSelector((state) => state.shoppingListFavorites.shoppingList)


   const enteredGroceryHandler = (enteredText) => {
    setEnteredGrocery(enteredText);
  };
   const resetSetGrocery = () => {
    setEnteredGrocery('');
    
  };
/*
  function addItemHandler(title) {
    SHOPPINGITEMS.unshift(new shoppingList('A2', title, '10kg'));
    setEnteredGrocery('');
    console.log(SHOPPINGITEMS);
  } */

  return (
    <View>
      <AddItemHeader  enteredGroceryHandler={enteredGroceryHandler} resetSetGrocery={resetSetGrocery} EnteredGrocery={EnteredGrocery} /* addItemHandler={addItemHandler} */></AddItemHeader>
      <SearchItemsRecommendation EnteredGrocery={EnteredGrocery}/>
      <ShoppingListView
        SHOPPINGITEMS={shoppingListItemsStateDerived}
      /> 

    </View>
  );
};

PageTwo_shopping.navigationOptions = {
  headerTitle: 'test',
  headerStyle: {
    backgroundColor: '#639a67',
    
  },
  header: null,
};

const styles = StyleSheet.create({
  ViewText: {},
});

export default PageTwo_shopping;
