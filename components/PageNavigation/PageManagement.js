import React, { useState } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'
import { Ionicons } from '@expo/vector-icons';

import PageOne from '../1.Page/PageONE';
import ListItemDetails from '../1.Page/PageONEComponents/ListItemDetails';
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

const GlycoListNavigator = createStackNavigator(
  {
    GlycoListe: {
      screen: PageOne
    },
    NutrientDetails: {
      screen: ListItemDetails
    }
  }
)


const GlycoShoppingNavigator = createBottomTabNavigator(
  {
    '🚦 Ampelliste': {
      screen: GlycoListNavigator,
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


