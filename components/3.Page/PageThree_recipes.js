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
      <TouchableOpacity style={styles.gridItem} onPress={() => {
        props.navigation.navigate({routeName: 'RecipesDetail', params: {
          recipeID: itemData.item.id
        } })
      }}>
        <View>
          <Text>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return <FlatList data={Recipes} renderItem={renderGridItem} numColumns={2} />;
};

PageThreeRecipes.navigationOptions = {
  headerTitle: 'Rezeptsammlung', 
  headerStyle: {
    backgroundColor: '#639a67'
  }
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
});

export default PageThreeRecipes;
