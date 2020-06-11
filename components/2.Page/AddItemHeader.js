import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItemToList, filterRecommendations } from '../../store/actions/shoppingListAndFavorites';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  Button,
} from 'react-native';

const AddItem = (props) => {
  const dispatch = useDispatch();

  const addItemHandler = () => {
    dispatch(addItemToList({ title: props.EnteredGrocery, color: 'none' }));
  };

  

  const returnKeyboardHandler = (e) => {
    console.log(e.nativeEvent.text);
    if (props.EnteredGrocery.length > 0) {
      dispatch(addItemToList({ title: props.EnteredGrocery, color: 'none' }));
      props.resetSetGrocery();
    }
  };

  return (
    <View>
      <View style={styles.topView}>
        <TextInput
          multiline={false}
          value={props.EnteredGrocery}
          placeholder="eigene Lebensmittel hinzufügen..."
          style={styles.inputContainer}
          onChangeText={props.enteredGroceryHandler}
          onSubmitEditing={(e) => returnKeyboardHandler(e)}
          clearButtonMode="always"
        />
        <Button
          title="➕"
          onPress={() => {
            if (props.EnteredGrocery.length > 0) {
              addItemHandler();
              props.resetSetGrocery();
            } else {
            }
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: '80%',
    borderBottomColor: 'black',
    padding: 10,
    marginBottom: 0,
    borderRadius: 12,
    backgroundColor: '#f7f7f7',
  },
  topView: {
    paddingTop: 55,
    paddingBottom: 0,
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default AddItem;
