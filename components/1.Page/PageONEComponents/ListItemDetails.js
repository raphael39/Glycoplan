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


const ListItemDetails = (props) => {
  const dispatch = useDispatch();
  const selectedItemID = props.navigation.getParam('selectedItemID');
  

 

  return (
    <View>
      <Text>{selectedItemID}</Text>
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