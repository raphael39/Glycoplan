import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { FILTER_RECOMMENDATIONS } from '../../store/actions/shoppingListAndFavorites';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  Button,
} from 'react-native';

const SearchItemsRecommendation = (props) => {

  const [GlycoListe, setGlycoListe] = useState({
    green: useSelector((state) => state.shoppingListFavorites.greenFiltered),
    yellow: useSelector((state) => state.shoppingListFavorites.yellowFiltered),
  });


  

/* 

     if (props.EnteredGrocery.length >= 0) {
      
      
        return (
            <View>
                <Text>{GlycoListe.green.length}</Text>
            </View>
        )
    } */
   


  return (
    <View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    
  }
});

export default SearchItemsRecommendation;
