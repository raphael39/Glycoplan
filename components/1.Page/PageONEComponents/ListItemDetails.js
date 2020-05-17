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

const ListItemDetails = (props) => {
  const dispatch = useDispatch();
  const selectedItemID = props.navigation.getParam('ItemID');
  let selectedItem = shoppingListItemsStateDerived.find(
    (GroceryItem) => GroceryItem.id === selectedItem
  );

 

  return (
    <View>
      <Text>{selectedItem.title}</Text>
    </View>
  );
};



export default ListItemDetails;



const styles = StyleSheet.create({
    styleOne: {
      
    },
    styleTwo: {
    },
  });