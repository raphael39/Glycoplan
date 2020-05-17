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
import { GlycoListeData } from './../../../Data/data';


const ListItemDetails = (props) => {
  const dispatch = useDispatch();
  const selectedItemID = props.navigation.getParam('selectedItemID');
  const selectedNutrientItem = GlycoListeData.find((Item) => Item.id === selectedItemID);
  console.log(selectedNutrientItem);

 

  return (
    <View style={styles.PageViewItemDetails}>
      <Text>{selectedNutrientItem.nutrients.Ballaststoff}</Text>
    </View>
  );
};



export default ListItemDetails;



const styles = StyleSheet.create({
    PageViewItemDetails: {
      marginTop: 30, 
    },
    styleTwo: {
    },
  });