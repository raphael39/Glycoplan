import React, { useState } from 'react';
import {
  Text,
  TouchableOpacity,
  FlatList,
  View,
  StyleSheet,
  TextInput,
  Button,
} from 'react-native';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { updateQuantity } from '../../store/actions/shoppingListAndFavorites';

const ShoppingQuantity = (props) => {
  const dispatch = useDispatch();
  const [EnteredInputQuantity, setEnteredInputQuantity] = useState('');
  const ItemID = props.navigation.getParam('ItemID');
  const shoppingListItemsStateDerived = useSelector(
    (state) => state.shoppingListFavorites.shoppingList
  );
  let selectedItem = shoppingListItemsStateDerived.find(
    (GroceryItem) => GroceryItem.id === ItemID
  );
  let GesamtGewicht = 0;
  if (selectedItem.ratio) {
    GesamtGewicht = parseInt(selectedItem.quantity.split(' ')[0] * parseInt(selectedItem.ratio.split(' ')[0]));
    console.log(GesamtGewicht);
  }
  


  const handleQuantity = (newQuantity) => {
    if (selectedItem.ratio) {
    GesamtGewicht = newQuantity * parseInt(selectedItem.ratio.split(' ')[0]);
    }
    
    setEnteredInputQuantity(newQuantity);
  };

  return (
    <View>
      
      <View style={styles.updateInput}>
        <TextInput
          keyboardType="numeric"
          placeholder={selectedItem.quantity.split(' ')[0]}
          clearButtonMode="always"
          style={styles.inputContainerDetails}
          onChangeText={handleQuantity}
          /* onChangeText={props.enteredGroceryHandler}
          onSubmitEditing={(e) => returnKeyboardHandler(e)} */
        />
        <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Text key={`${selectedItem.title}`}>
            {selectedItem.quantity.split(' ')[1]}
          </Text>
        </View>
        <Button
          title="Update"
          onPress={() => {
            dispatch(updateQuantity(selectedItem.id, EnteredInputQuantity, selectedItem.quantity.split(' ')[1]));
            setEnteredInputQuantity('');
          }}
        />
      </View>
       {(selectedItem.ratio)? (<View><Text>Ø Gewicht = {selectedItem.ratio}</Text>
        <Text>Gesamtgewicht = {`${GesamtGewicht} g`}</Text></View>) :<Text></Text>}  
        
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainerDetails: {
    width: '50%',
    borderBottomColor: 'black',
    padding: 10,
    marginBottom: 0,
    borderRadius: 12,
    backgroundColor: '#f7f7f7',
  },
  updateInput: {
    paddingTop: 55,
    paddingBottom: 0,
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 10,
    flexDirection: 'row',
    textAlign: 'center',
    justifyContent: 'space-around',
  },
});

export default ShoppingQuantity;
