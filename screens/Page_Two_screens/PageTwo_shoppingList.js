import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Text, StyleSheet, View, ScrollView } from 'react-native';
import { useDispatch } from 'react-redux';
import {
  addItemToList,
  filterRecommendations,
} from '../../store/actions/shoppingListAndFavorites';

import AddItemHeader from '../../components/2.Page/AddItemHeader';
import { SHOPPINGITEMS } from '../../Data/data';
import shoppingList from '../../models/shoppinList';
import ShoppingListView from '../../components/2.Page/ShoppingLIst';
import SearchItemsRecommendation from '../../components/2.Page/SearchItemsRecommendation';

const PageTwo_shopping = (props) => {
  const [EnteredGrocery, setEnteredGrocery] = useState('');
  const shoppingListItemsStateDerived = useSelector(
    (state) => state.shoppingListFavorites.shoppingList
  );

  const enteredGroceryHandler = (enteredText) => {
    setEnteredGrocery(enteredText);
  };
  const resetSetGrocery = () => {
    setEnteredGrocery('');
  };

  const handleStackNavigatorToQuantity = (id) => {
    props.navigation.navigate({
      routeName: 'ShoppingItemDetails',
      params: {
        ItemID: id
      },
    });
  };
  const handleStackNavigatorToAnalysis = (allNutrientsMessenger) => {
    props.navigation.navigate({
      routeName: 'NutrientsDetailsPage',
      params: {
        allNutrientsMessenger: allNutrientsMessenger
      }
    });
  };
  /*
  function addItemHandler(title) {
    SHOPPINGITEMS.unshift(new shoppingList('A2', title, '10kg'));
    setEnteredGrocery('');
    console.log(SHOPPINGITEMS);
  } */

  return (
    <ScrollView>
      <AddItemHeader
        enteredGroceryHandler={enteredGroceryHandler}
        resetSetGrocery={resetSetGrocery}
        EnteredGrocery={EnteredGrocery} /* addItemHandler={addItemHandler} */
      ></AddItemHeader>
      <SearchItemsRecommendation EnteredGrocery={EnteredGrocery} />
      <ShoppingListView
        SHOPPINGITEMS={shoppingListItemsStateDerived}
        handleStackNavigatorToQuantity={handleStackNavigatorToQuantity}
        handleStackNavigatorToAnalysis={handleStackNavigatorToAnalysis}
      />
    </ScrollView>
  );
};

PageTwo_shopping.navigationOptions = {
  headerTitle: 'test',
  headerStyle: {
    backgroundColor: '#639a67',
  },
  headerShown: false,
};

const styles = StyleSheet.create({
  ViewText: {},
});

export default PageTwo_shopping;
