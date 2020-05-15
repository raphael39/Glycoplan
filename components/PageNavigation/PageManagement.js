/* import React from 'react';
import PageOne from './1.Page/PageONE';

const PageManagement = (props) => {
  return <PageOne />;
};

export default PageManagement;
 */

import React, { useState } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'
import { Ionicons } from '@expo/vector-icons';

import PageOne from '../1.Page/PageONE';
import PageTwo_shopping from '../2.Page/PageTwo_shoppingList';
import PageTwoItemDetails from '../2.Page/PageTWOComponents/ShoppingQuantity';
import PageThreeRecipes from '../3.Page/PageThree_recipes';
import { color } from 'react-native-reanimated';


import RecipesPage from '../3.Page/PageThree_recipes';
import RecipesDetailPage from '../3.Page/PageTHREEComponents/RecipesDetails'


const RecipeNavigator = createStackNavigator(
  {
    Rezepte: {
      screen: RecipesPage
    },
    RecipesDetail: {
      screen: RecipesDetailPage
    }
  }
);

const ShoppingListNavigator = createStackNavigator(
  {
    ShoppingList: {
      screen: PageTwo_shopping
    },
    ShoppingItemDetails: {
      screen: PageTwoItemDetails
    }
  }
)


const GlycoShoppingNavigator = createBottomTabNavigator(
  {
    '🚦 Ampelliste': {
      screen: PageOne,
    },
    '🛒 Einkaufsliste': {
      screen: ShoppingListNavigator,
    },
    '👨‍🍳 Rezepte': {
      screen: RecipeNavigator,
    },
  },
  {
    tabBarOptions: {
      activeTintColor: 'orange',
    },
  }
);

export default createAppContainer(GlycoShoppingNavigator);


