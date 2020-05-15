import React from 'react';
import {
  Text,
  TouchableOpacity,
  FlatList,
  View,
  StyleSheet,
} from 'react-native';
import { Recipes } from './../../Data/data';

const PageThreeRecipes = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <TouchableOpacity
        style={styles.gridItem}
        onPress={() => {
          props.navigation.navigate({
            routeName: 'RecipesDetail',
            params: {
              recipeID: itemData.item.id,
            },
          });
        }}
      >
        <View>
          <Text style={styles.gridText}>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return <FlatList data={Recipes} renderItem={renderGridItem} numColumns={2} />;
};

PageThreeRecipes.navigationOptions = {
  headerTitle: 'Rezeptsammlung',
  headerStyle: {
    backgroundColor: '#639a67',
  },
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 5,
    height: 80,
    borderWidth: 2,
    borderColor: 'green',
    borderRadius: 10,
    alignContent: 'center',
    justifyContent: 'center',
    padding: 10,
    shadowColor: '#350',
    shadowOpacity: 0.15,
    backgroundColor: 'green',
  },
  gridText: {
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
    color: 'white',
  },
});

export default PageThreeRecipes;
