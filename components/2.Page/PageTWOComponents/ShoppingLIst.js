import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { deleteItemFromList } from './../../../store/actions/shoppingListAndFavorites';
import ShoppingListColorRendering from './ShoppingListColorRendering';

/* import { SHOPPINGITEMS } from '../../../Data/data'; */

const ShoppingListView = (props) => {
  const dispatch = useDispatch();

  const deleteItemHandler = (id) => {
    dispatch(deleteItemFromList(id));
  };

  let greenShoppingItems = props.SHOPPINGITEMS.filter(
    (Grocery) => Grocery.color === 'green'
  );
  let yellowShoppingItems = props.SHOPPINGITEMS.filter(
    (Grocery) => Grocery.color === 'yellow'
  );
  let redShoppingItems = props.SHOPPINGITEMS.filter(
    (Grocery) => Grocery.color === 'red'
  );
  let noneShoppingItems = props.SHOPPINGITEMS.filter(
    (Grocery) => Grocery.color === 'none'
  );

  return (
    <View style={styles.GroceryListView}>
      <Text style={{ fontSize: 25, marginLeft: '5%', marginBottom: 15 }}>
        Einkaufsliste:
      </Text>
      <ScrollView keyboardShouldPersistTaps={'handled'}>
        {/* this is start of green */}
        {greenShoppingItems.map((GroceryItem) => (
          <View style={styles.listItem} key={`shopping${GroceryItem.id}`}>
            <View>
            <Text>{GroceryItem.title}</Text>
            <Text style={styles.quantity}>{GroceryItem.quantity}</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                deleteItemHandler(GroceryItem.id);
              }}
            >
              <View
                style={{
                  borderColor: 'green',
                  borderWidth: 3,
                  width: 25,
                  height: 25,
                  borderRadius: '50%',
                }}
              ></View>
            </TouchableOpacity>
          </View>
        ))}
        {/* this is end of green */}
        {/* this is Start of yellow */}
        {yellowShoppingItems.map((GroceryItem) => (
          <View style={styles.listItem2} key={`shopping${GroceryItem.id}`}>
            <View>
            <Text>{GroceryItem.title}</Text>
            <Text style={styles.quantity}>{GroceryItem.quantity}</Text>
            </View>

            <TouchableOpacity
              onPress={() => {
                deleteItemHandler(GroceryItem.id);
              }}
            >
              <View
                style={{
                  borderColor: '#ffd31d',
                  borderWidth: 3,
                  width: 25,
                  height: 25,
                  borderRadius: '50%',
                }}
              ></View>
            </TouchableOpacity>
          </View>
        ))}
        {/* this is end of yellow */}
        {/* this is Start of Red */}
        {redShoppingItems.map((GroceryItem) => (
          <View style={styles.listItem3} key={`shopping${GroceryItem.id}`}>
            <View>
            <Text>{GroceryItem.title}</Text>
            <Text style={styles.quantity}>{GroceryItem.quantity}</Text>
            </View>

            <TouchableOpacity
              onPress={() => {
                deleteItemHandler(GroceryItem.id);
              }}
            >
              <View
                style={{
                  borderColor: 'red',
                  borderWidth: 3,
                  width: 25,
                  height: 25,
                  borderRadius: '50%',
                }}
              ></View>
            </TouchableOpacity>
          </View>
        ))}
        {/* this is end of Red */}
        {/* this is Start of None */}
        {noneShoppingItems.map((GroceryItem) => (
          <View style={styles.listItem4}>
            <Text>{GroceryItem.title}</Text>

            <TouchableOpacity
              onPress={() => {
                deleteItemHandler(GroceryItem.id);
              }}
            >
              <View
                style={{
                  borderColor: 'grey',
                  borderWidth: 3,
                  width: 25,
                  height: 25,
                  borderRadius: '50%',
                }}
              ></View>
            </TouchableOpacity>
          </View>
        ))}
        {/* this is end of None */}
      </ScrollView>
    </View>
  );

  /*  return (
    <View style={styles.GroceryListView}>
      <Text style={{ fontSize: 25, marginLeft: '5%', marginBottom: 15 }}>
        Einkaufsliste:
      </Text>
      <ScrollView>
        {props.SHOPPINGITEMS.map((GroceryItem) => (
          <View style={styles.listItem}>
            <Text key={GroceryItem.title}>{GroceryItem.title}</Text>
            <Text key={GroceryItem.title}>{GroceryItem.color}</Text>
            <TouchableOpacity
              onPress={() => {
                deleteItemHandler(GroceryItem.id);
              }}
            >
              <View
                style={{
                  borderColor: 'green',
                  borderWidth: 3,
                  width: 25,
                  height: 25,
                  borderRadius: '50%',
                }}
              ></View>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  ); */
};

const styles = StyleSheet.create({
  GroceryListView: {
    marginTop: 30,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: 'white',
    borderColor: 'green',
    borderBottomWidth: 3,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    marginTop: 4,
    marginLeft: '2%',
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  },
  listItem2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: 'white',
    borderColor: '#ffd31d',
    borderBottomWidth: 3,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    marginTop: 4,
    marginLeft: '2%',
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  },
  listItem3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: 'white',
    borderColor: 'red',
    borderBottomWidth: 3,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    marginTop: 4,
    marginLeft: '2%',
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  },
  listItem4: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: 'white',
    borderColor: 'grey',
    borderBottomWidth: 3,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    marginTop: 4,
    marginLeft: '2%',
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  },
  quantity: {
    fontSize: 11,
  }
});

export default ShoppingListView;
