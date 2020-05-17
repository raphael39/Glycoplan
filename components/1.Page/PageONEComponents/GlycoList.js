import React from 'react';
import { useDispatch } from 'react-redux';
import { addItemToList } from './../../../store/actions/shoppingListAndFavorites';
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
  };

  return (
    <ScrollView style={styles.scrollView} keyboardShouldPersistTaps={'handled'}>
      {props.green.map((goal) => (
        <TouchableOpacity
        onPress={() => {
          props.handleStackNavigatorToDetails(goal.id)
        }}
        key={`shopping90View${goal.id}`}
      >
        <View style={styles.listItem} key={goal.id}>
          <Text style={styles.title} key={goal.title}>{goal.title}</Text>
          <TouchableOpacity onPress={() => addItemHandler(goal)}>
            <View
              key={`addButton${goal.id}`}
              style={{
                backgroundColor: 'green',
                width: 75,
                height: 37,
                marginRight: 10,
                borderRadius: '50%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text>➕🛒</Text>
            </View>
          </TouchableOpacity>
        </View>
        </TouchableOpacity>
      ))}

      {props.yellow.map((goal) => (
        <View style={styles.listItem2} key={goal.id}>
          <Text style={styles.title} key={goal.title}>{goal.title}</Text>

          <TouchableOpacity onPress={() => addItemHandler(goal)}>
            <View
              key={`addButton${goal.id}`}
              style={{
                backgroundColor: '#ffd31d',
                width: 75,
                height: 37,
                marginRight: 10,
                borderRadius: '50%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text>➕🛒</Text>
            </View>
          </TouchableOpacity>
        </View>
      ))}
      {props.red.map((goal) => (
        <View style={styles.listItem3} key={goal.id}>
          <Text style={styles.title} key={goal.title} >{goal.title}</Text>

          <TouchableOpacity onPress={() => addItemHandler(goal)}>
            <View
              key={`addButton${goal.id}`}
              style={{
                backgroundColor: 'red',
                width: 75,
                height: 37,
                marginRight: 10,
                borderRadius: '50%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text>➕🛒</Text>
            </View>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 10,
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
    paddingLeft: 10,
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
    paddingLeft: 10,
    backgroundColor: 'white',
    borderColor: 'red',
    borderBottomWidth: 2,
    shadowColor: '#000',
    shadowOpacity: 0.15,
  },
  scrollView: {
    marginBottom: 113,
  },
  title: {
    width: '75%',
    marginBottom: 15,
    marginTop: 15,
  }
});

export default GlycoList;
