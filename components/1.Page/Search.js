import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  Button,
} from 'react-native';

const Seachrbar = (props) => {
  const [EnteredInput, setEnteredInput] = useState('');

  const SearchInputHandler = (enteredText) => {
    setEnteredInput(enteredText);
    props.handleSearch(enteredText);
  };

  /* useEffect(() => {
        props.handleSearch(EnteredInput)
     }, [EnteredInput]); */

  return (
    <View>
      <View style={styles.topView}>
        <TextInput
          placeholder="Nachschlagen..."
          style={styles.inputContainer}
          onChangeText={SearchInputHandler}
          clearButtonMode="always"
        />
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: '90%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginBottom: 5,
    borderRadius: 12,
    backgroundColor: 'white',
  },
  topView: {
    paddingTop: 55,
    paddingBottom: 15,
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 0,
    flexDirection: 'row',
    /* justifyContent: 'space-around', */
    backgroundColor: '#639a67',
  },
});

export default Seachrbar;
