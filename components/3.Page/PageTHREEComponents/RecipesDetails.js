import React from 'react';
import {useDispatch} from 'react-redux';
import { addItemToList } from './../../../store/actions/shoppingListAndFavorites'
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { RecipesDetailsArr } from './../../../Data/data';

const RecipesDetailsPage = (props) => {

  const recipeID = props.navigation.getParam('recipeID');
  const selectedRecipeObject = RecipesDetailsArr.find(
    (recipe) => recipe.id === recipeID
  );
  
  const dispatch = useDispatch();
  
  const addItemHandler = (GroceryItem) => {
    dispatch(addItemToList({title: GroceryItem, color: 'green'}));
  }

  return (
    <ScrollView>
      <View>
        <View style={styles.title}>
          <Text style={styles.titleText}>{selectedRecipeObject.title}</Text>
        </View>

        {selectedRecipeObject.ingredients.map((GroceryItem) => (
          <View style={styles.listItem}>
            <Text key={Math.random()}>{GroceryItem}</Text>

            <TouchableOpacity onPress={() => addItemHandler(GroceryItem)}>
            <View
              style={{
                backgroundColor: 'green',
                width: 26,
                height: 26,
                borderRadius: '50%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text>➕</Text>
            </View>
          </TouchableOpacity>
          </View>
        ))}

        <View style={[styles.title, styles.Zubereitung]}>
          <Text style={styles.titleText}>Zubereitung:</Text>
        </View>

        <View style={[styles.steps]}>
          {selectedRecipeObject.steps.map((step) => {
            return <View><Text key={Math.random()} style={styles.stepsText}>{step}</Text><Text key={Math.random()}>{"\n"}</Text></View>
          })}
         
        </View>


      </View>
    </ScrollView>
  );
};

RecipesDetailsPage.navigationOptions = {
  headerTitle: 'Anleitung',
  headerStyle: {
    backgroundColor: '#639a67',
  },
};

const styles = StyleSheet.create({
  title: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft: '5%',
  },
  titleText: {
    fontSize: 20,
    textDecorationLine: 'underline',
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    backgroundColor: 'white',
    borderColor: 'green',
    borderBottomWidth: 3,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    marginTop: 4,
    marginLeft: '6%',
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  },
  Zubereitung: {
    marginTop: 30,
  },
  stepsText: {
    marginLeft: '4%',
    fontSize: 16
  }
});

export default RecipesDetailsPage;
