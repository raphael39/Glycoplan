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
import { updateQuantity } from './../../../store/actions/shoppingListAndFavorites';

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

  const handleQuantity = (newQuantity) => {
    setEnteredInputQuantity(newQuantity);
  }
 

  return (
    <View>
      <Text>{selectedItem.title}</Text>
      <View style={styles.updateInput}>
        <TextInput
          /* keyboardType="numeric" */
          placeholder={selectedItem.quantity}
          clearButtonMode="always"
          style={styles.inputContainerDetails}
          onChangeText={handleQuantity}
          /* onChangeText={props.enteredGroceryHandler}
          onSubmitEditing={(e) => returnKeyboardHandler(e)} */
        />
        <Button
          title="Update"
          onPress={() => {
            console.log('selected -->', selectedItem);
            dispatch(updateQuantity(selectedItem.id, EnteredInputQuantity));
            setEnteredInputQuantity('');
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainerDetails: {
    width: '80%',
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
    justifyContent: 'space-around',
  },
});

export default ShoppingQuantity;
