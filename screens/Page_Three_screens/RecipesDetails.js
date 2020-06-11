import React from 'react';
import { useDispatch } from 'react-redux';
import { addItemToList } from '../../store/actions/shoppingListAndFavorites';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { RecipesDetailsArr } from '../../Data/Recipes';

const RecipesDetailsPage = (props) => {
  const recipeID = props.navigation.getParam('recipeID');
  const selectedRecipeObject = RecipesDetailsArr.find(
    (recipe) => recipe.id === recipeID
  );

  const dispatch = useDispatch();

  const addItemHandler = (GroceryItem) => {
    dispatch(
      addItemToList({
        title: GroceryItem.title,
        color: GroceryItem.color,
        quantity: GroceryItem.quantity,
        nutrients: GroceryItem.nutrients,
        ratio: GroceryItem.ratio,
      })
    );
  };

  return (
    <ScrollView>
      <View key={Math.random()}>
        <View style={styles.title}>
          <Text style={styles.titleText}>{selectedRecipeObject.title}</Text>
          <Text >{selectedRecipeObject.persons} Personen</Text>
        </View>

        {selectedRecipeObject.ingredients.map((GroceryItem) => (
          <View
            style={{
              borderColor: GroceryItem.color === 'green' ? 'green' : '#ffd31d',
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 5,
              backgroundColor: 'white',
              borderBottomWidth: 3,
              shadowColor: '#000',
              shadowOpacity: 0.15,
              marginTop: 4,
              marginLeft: '6%',
              borderTopLeftRadius: 12,
              borderBottomLeftRadius: 12,
            }}
            key={`GroceryItem.title${GroceryItem.id}`}
          >
            
            <View key={Math.random()} style={{ maxWidth: '90%' }}>
              <Text key={Math.random()}>{GroceryItem.title}</Text>
              <Text key={Math.random()} style={styles.quantity}>
                {GroceryItem.quantity}
              </Text>
            </View>

            <TouchableOpacity onPress={() => addItemHandler(GroceryItem)}>
              <View
                key={Math.random()}
                style={{
                  backgroundColor:
                    GroceryItem.color === 'green' ? 'green' : '#ffd31d',
                  width: 75,
                height: 33,
                  borderRadius: '50%',
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Text key={Math.random()}>➕🛒</Text>
              </View>
            </TouchableOpacity>
          </View>
        ))}

        <View style={[styles.title, styles.Zubereitung]}>
          <Text style={styles.titleText}>Zubereitung:</Text>
        </View>

        <View style={[styles.steps]}>
          {selectedRecipeObject.steps.map((step, index) => {
            return (
              <View key={`step${index}`}>
                <Text key={Math.random()} style={styles.stepsText}>
                  {step}
                </Text>
                <Text key={Math.random()}>{'\n'}</Text>
              </View>
            );
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
  listItem: {},
  Zubereitung: {
    marginTop: 30,
  },
  stepsText: {
    marginLeft: '4%',
    fontSize: 16,
  },
  quantity: {
    fontSize: 11,
  },
});

export default RecipesDetailsPage;
