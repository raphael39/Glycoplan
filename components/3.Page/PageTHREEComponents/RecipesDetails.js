import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import {RecipesDetailsArr} from './../../../Data/data'

const RecipesDetailsPage = (props) => {
const recipeID = props.navigation.getParam('recipeID')
const selectedRecipeObject = RecipesDetailsArr.find(recipe => recipe.id === recipeID)
console.log(selectedRecipeObject);


  return (
 
<ScrollView>
<View>
  <View style={styles.title}>
  <Text style={styles.titleText}>{selectedRecipeObject.title}</Text>
  
  </View>



{selectedRecipeObject.ingredients.map((GroceryItem) => (
          <View style={styles.listItem}>
            <Text>
              {GroceryItem}
            </Text>

            <TouchableOpacity
              onPress={() => {}}
            >
              <View
                style={{
                  borderColor: 'green',
                  borderWidth: 3,
                  width: 25,
                  height: 25,
                  borderRadius: '50%',
                }}
              ></View>
            </TouchableOpacity>
          </View>
        ))}


  


  </View>
    </ScrollView>
    )
};

RecipesDetailsPage.navigationOptions = {
  headerTitle: 'Anleitung', 
  headerStyle: {
    backgroundColor: '#639a67'
  }
};

const styles = StyleSheet.create({
  title: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft: '5%'
  },
  titleText: {
    fontSize: 20
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
});

export default RecipesDetailsPage;


    