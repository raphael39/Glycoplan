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

const NutrientsAnalysis = (props) => {
    const nutrientsObj = props.navigation.getParam('allNutrientsMessenger');
    console.log('inside analysis', nutrientsObj);

  return (
    <View>
        <Text>Kalorien: {nutrientsObj.Kalorien}</Text>
        <Text>Kohlenhydrate: {nutrientsObj.Kohlenhydrate}g</Text>
        <Text>Fettgehalt: {nutrientsObj.Fett}g</Text>
        <Text>Protein: {nutrientsObj.Protein}g</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input1: {
  },
  update2: {
  },
});

export default NutrientsAnalysis;