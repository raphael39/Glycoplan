import React, { useState } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'
import { Ionicons } from '@expo/vector-icons';

import PageOne from '../screens/Page_One_screens/PageONE';
import ListItemDetails from '../screens/Page_One_screens/ListItemDetails';
import PageTwo_shopping from '../screens/Page_Two_screens/PageTwo_shoppingList';
import PageTwoItemDetails from '../screens/Page_Two_screens/ShoppingQuantity';
import NutrientsDetails from '../screens/Page_Two_screens/nutrientsAnalysis';
import PageThreeRecipes from '../screens/Page_Three_screens/PageThree_recipes';
import { color } from 'react-native-reanimated';
import RecipesPage from '../screens/Page_Three_screens/PageThree_recipes';
import RecipesDetailPage from '../screens/Page_Three_screens/RecipesDetails'


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
    },
    NutrientsDetailsPage: {
      screen: NutrientsDetails
    }
  }
)

const GlycoListNavigator = createStackNavigator(
  {
    GlycoListe: {
      screen: PageOne
    },
    NutrientsDetails: {
      screen: ListItemDetails
    }
  }
)


const GlycoShoppingNavigator = createBottomTabNavigator(
  {
    'Ampelliste': {
      screen: GlycoListNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return <Text role="img" aria-label="sheep" style={{fontSize: 25}}>🚦</Text>
        }
      }
    },
    'Einkaufsliste': {
      screen: ShoppingListNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return <Text role="img" aria-label="sheep" style={{fontSize: 22}}>🛒</Text>
        }
      }
    },
    'Rezepte': {
      screen: RecipeNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return <Text role="img" aria-label="sheep" style={{fontSize: 22}}>👨‍🍳</Text>
        }
      }
    },
  },
  {
    tabBarOptions: {
      activeTintColor: 'orange',
    },
  }
);

export default createAppContainer(GlycoShoppingNavigator);


