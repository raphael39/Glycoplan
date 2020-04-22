import React from 'react';
import {useDispatch} from 'react-redux'
import { addItemToList } from './../../../store/actions/shoppingListAndFavorites'
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Button,
} from 'react-native';

const GlycoList = (props) => {

  const dispatch = useDispatch();
  
  const addItemHandler = (Grocery) => {
    dispatch(addItemToList(Grocery));
  }

  return (
    <ScrollView keyboardShouldPersistTaps={'handled'}>
      {props.green.map((goal) => (
        <View style={styles.listItem}>
          <Text key={Math.random()}>{goal.title}</Text>
          <TouchableOpacity onPress={() => addItemHandler(goal)}>
            <View
              style={{
                backgroundColor: 'green',
                width: 27,
                height: 27,
                borderRadius: '50%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text>➕</Text>
            </View>
          </TouchableOpacity>
        </View>
      ))}

      {props.yellow.map((goal) => (
        <View style={styles.listItem2}>
          <Text key={goal}>{goal.title}</Text>

          <TouchableOpacity onPress={() => addItemHandler(goal)}>
            <View
              style={{
                backgroundColor: '#ffd31d',
                width: 27,
                height: 27,
                borderRadius: '50%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text>➕</Text>
            </View>
          </TouchableOpacity>
        </View>
      ))}
      {/* {props.red.map((goal) => (
        <View style={styles.listItem3}>
          <Text key={goal}>{goal.title}</Text>

          <TouchableOpacity onPress={() => addItemHandler(goal)}>
            <View
              style={{
                backgroundColor: 'red',
                width: 27,
                height: 27,
                borderRadius: '50%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text>➕</Text>
            </View>
          </TouchableOpacity>
        </View>
      ))} */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    display: 'flex',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white',
    borderColor: 'green',
    borderBottomWidth: 2,
    shadowColor: '#000',
    shadowOpacity: 0.15,
  },
  listItem2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    display: 'flex',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white',
    borderColor: '#ffd31d',
    borderBottomWidth: 2,
    shadowColor: '#000',
    shadowOpacity: 0.15,
  },
  listItem3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    display: 'flex',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white',
    borderColor: 'red',
    borderBottomWidth: 2,
    shadowColor: '#000',
    shadowOpacity: 0.15,
  },
});

export default GlycoList;
