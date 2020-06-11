import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { deleteItemFromList } from '../../store/actions/shoppingListAndFavorites';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

/* import { SHOPPINGITEMS } from '../../../Data/data'; */

const ShoppingListView = (props) => {
  const dispatch = useDispatch();
  const deleteItemHandler = (id) => {
    dispatch(deleteItemFromList(id));
  };
  let KalorienGesamt = 0;
  let KohlenhydrateGesamt = 0;
  let FettGesamt = 0;
  let ProteinGesamt = 0;
  for (let i = 0; i < props.SHOPPINGITEMS.length; i++) {
    let currentGrocery = props.SHOPPINGITEMS[i];
    
    if (currentGrocery.nutrients.Kalorien === 0) {
      console.log('calculation --> ', currentGrocery);
      continue;
    }
    if (currentGrocery.nutrients) {
     
      let currentFactor = 0;
      if (currentGrocery.ratio) {
        currentFactor =
      parseInt(currentGrocery.quantity.split(' ')[0], 10) * parseInt(currentGrocery.ratio.split(' ')[0]) / 100;
      } else {
        currentFactor =
        parseInt(currentGrocery.quantity.split(' ')[0], 10) / 100;
      }
    

    KalorienGesamt +=  Math.round(currentFactor * currentGrocery.nutrients.Kalorien * 100) / 100;
    KohlenhydrateGesamt +=
      currentFactor *
      currentGrocery.nutrients.Kohlenhydrate.split(' ')[0].replace(',', '.');
    FettGesamt +=
      currentFactor *
      currentGrocery.nutrients.Fettgehalt.split(' ')[0].replace(',', '.');
    ProteinGesamt +=
      currentFactor *
      currentGrocery.nutrients.Protein.split(' ')[0].replace(',', '.');
    }
    
  }

  let KalorienCalculatedGesamt =
   KohlenhydrateGesamt * 4.1 + FettGesamt * 9.3 + ProteinGesamt * 4.1;

  const allNutrientsMessenger = {
    Kalorien: KalorienGesamt,
    Kohlenhydrate: Math.round(KohlenhydrateGesamt * 100) / 100,
    KohlenhydratePro:
      Math.round(
        ((KohlenhydrateGesamt * 4.1) / KalorienCalculatedGesamt) * 1000
      ) / 10,
    Fett: Math.round(FettGesamt * 100)/100,
    FettPro:
      Math.round(((FettGesamt * 9.3) / KalorienCalculatedGesamt) * 1000) / 10,
    Protein: Math.round(ProteinGesamt * 100) / 100 ,
    ProteinPro:
      Math.round(((ProteinGesamt * 4.1) / KalorienCalculatedGesamt) * 1000) /
      10,
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
    <View keyboardShouldPersistTaps={'handled'} style={styles.GroceryListView}>
        <View>
        {KalorienGesamt ? (
          <TouchableOpacity
            onPress={() => {
              props.handleStackNavigatorToAnalysis(allNutrientsMessenger);
            }}
          >
            <Card style={{ margin: 10, borderRadius: '15%' }}>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 10,
                  marginBottom: 10,
                }}
              >
                <View
                  style={{
                    width: '70%',
                    marginLeft: '10%',
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <Text>Nährstoffanalyse</Text>
                  {/* <Text>Kalorien: {KalorienGesamt}</Text>
                <Text>
                  Kohlenhydrate: {Math.round(KohlenhydrateGesamt * 100) / 100}g
                </Text>
                <Text>Fettgehalt: {Math.round(FettGesamt * 100) / 100}g</Text>
                <Text>Protein: {Math.round(ProteinGesamt * 100) / 100}g</Text> */}
                </View>
                <View
                  style={{
                    width: '20%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <AntDesign name="right" size={24} color="black" />
                </View>
              </View>
            </Card>
          </TouchableOpacity>
          ) : (
            <Text></Text>
          )}
        </View>
      
      <Text style={{ fontSize: 25, marginLeft: '5%', marginBottom: 15 }}>
        Einkaufsliste:
      </Text>

      {/* this is start of green */}
      {greenShoppingItems.map((GroceryItem) => (
        <TouchableOpacity
          onPress={() => {
            props.handleStackNavigatorToQuantity(GroceryItem.id);
          }}
          key={`shopping90View${GroceryItem.id}`}
        >
          <View style={styles.listItem} key={`shopping${GroceryItem.id}`}>
            <View style={{ maxWidth: '90%' }}>
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
        </TouchableOpacity>
      ))}
      {/* this is end of green */}
      {/* this is Start of yellow */}
      {yellowShoppingItems.map((GroceryItem) => (
        <TouchableOpacity
          onPress={() => {
            props.handleStackNavigatorToQuantity(GroceryItem.id);
          }}
          key={`shopping90View${GroceryItem.id}`}
        >
          <View style={styles.listItem2} key={`shopping${GroceryItem.id}`}>
            <View style={{ maxWidth: '90%' }}>
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
        </TouchableOpacity>
      ))}
      {/* this is end of yellow */}
      {/* this is Start of Red */}
      {redShoppingItems.map((GroceryItem) => (
        <TouchableOpacity
          onPress={() => {
            props.handleStackNavigatorToQuantity(GroceryItem.id);
          }}
          key={`shopping90View${GroceryItem.id}`}
        >
          <View style={styles.listItem3} key={`shopping${GroceryItem.id}`}>
            <View style={{ maxWidth: '90%' }}>
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
        </TouchableOpacity>
      ))}
      {/* this is end of Red */}
      {/* this is Start of None */}
      {noneShoppingItems.map((GroceryItem) => (
        <TouchableOpacity
        onPress={() => {
          props.handleStackNavigatorToQuantity(GroceryItem.id);
        }}
        key={`shopping90View${GroceryItem.id}`}
      >
        <View style={styles.listItem4}>
        <View style={{ maxWidth: '90%' }}>
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
                borderColor: 'grey',
                borderWidth: 3,
                width: 25,
                height: 25,
                borderRadius: '50%',
              }}
            ></View>
          </TouchableOpacity>
        </View>
        </TouchableOpacity>
      ))}
      {/* this is end of None */}
    </View>
  );
};

const styles = StyleSheet.create({
  GroceryListView: {
    marginTop: 30,
    marginBottom: '12%',
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
  },
  title: {
    width: '75%',
    marginBottom: 15,
    marginTop: 15,
  },
});

export default ShoppingListView;

{
  /* <Text>
  <Text>Kalorien: {KalorienGesamt}</Text>
  <Text>Kohlenhydrate: {Math.round(KohlenhydrateGesamt * 100) / 100}g</Text>
  <Text>Fettgehalt: {Math.round(FettGesamt * 100) / 100}g</Text>
  <Text>Protein: {Math.round(ProteinGesamt * 100) / 100}g</Text>
</Text>;
 */
}
