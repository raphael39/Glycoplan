import React, { useState } from 'react';
import {
  Text,
  TouchableOpacity,
  FlatList,
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  Linking,
} from 'react-native';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { GlycoListeData } from './../../../Data/data';
import { DataTable } from 'react-native-paper';

const ListItemDetails = (props) => {
  const dispatch = useDispatch();
  const selectedItemID = props.navigation.getParam('selectedItemID');
  const selectedNutrientItem = GlycoListeData.find(
    (Item) => Item.id === selectedItemID
  );
  console.log(selectedNutrientItem);

  if ('nutrients' in selectedNutrientItem) {
    if ('VitaminC' in selectedNutrientItem.nutrients) {
      return (
        <View style={styles.PageViewItemDetails}>
          <ScrollView>
            <View>
              <Text
                style={{ fontSize: 18, marginLeft: '3%', marginBottom: '2%' }}
              >
                {selectedNutrientItem.title}
              </Text>
              <Text
                style={{ fontSize: 14, marginLeft: '3%', marginBottom: '2%', marginRight: '2%' }}
              >
                {selectedNutrientItem.nutrients.description} 
                <Text style={{ fontSize: 12, color: '#00008b', textDecorationLine: 'underline', }} onPress={() =>
              Linking.openURL(selectedNutrientItem.nutrients.descriptionLink)}>Wikipedia</Text>
              </Text>
            </View>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title>{selectedNutrientItem.title}</DataTable.Title>
                <DataTable.Title numeric>pro 100g</DataTable.Title>
              </DataTable.Header>

              <DataTable.Row>
                <DataTable.Cell>Kalorien</DataTable.Cell>
                <DataTable.Cell numeric>
                  {selectedNutrientItem.nutrients.Kalorien}
                </DataTable.Cell>
              </DataTable.Row>

              <DataTable.Row>
                <DataTable.Cell>Fett</DataTable.Cell>
                <DataTable.Cell numeric>
                  {selectedNutrientItem.nutrients.Fettgehalt}
                </DataTable.Cell>
              </DataTable.Row>

              <DataTable.Row>
                <DataTable.Cell>- Gesättigte Fettsäuren</DataTable.Cell>
                <DataTable.Cell numeric>
                  {selectedNutrientItem.nutrients.GesättigteFettsäuren}
                </DataTable.Cell>
              </DataTable.Row>

              <DataTable.Row>
                <DataTable.Cell>
                  - Mehrfach ungesättigte Fettsäuren
                </DataTable.Cell>
                <DataTable.Cell numeric>
                  {
                    selectedNutrientItem.nutrients
                      .MehrfachUngesättigteFettsäuren
                  }
                </DataTable.Cell>
              </DataTable.Row>

              <DataTable.Row>
                <DataTable.Cell>
                  - Einfach ungesättigte Fettsäuren
                </DataTable.Cell>
                <DataTable.Cell numeric>
                  {selectedNutrientItem.nutrients.EinfachUngesättigteFettsäuren}
                </DataTable.Cell>
              </DataTable.Row>

              <DataTable.Row>
                <DataTable.Cell>Kohlenhydrate</DataTable.Cell>
                <DataTable.Cell numeric>
                  {selectedNutrientItem.nutrients.Kohlenhydrate}
                </DataTable.Cell>
              </DataTable.Row>

              <DataTable.Row>
                <DataTable.Cell>- davon Zucker</DataTable.Cell>
                <DataTable.Cell numeric>
                  {selectedNutrientItem.nutrients.Fettgehalt}
                </DataTable.Cell>
              </DataTable.Row>

              <DataTable.Row>
                <DataTable.Cell>Protein</DataTable.Cell>
                <DataTable.Cell numeric>
                  {selectedNutrientItem.nutrients.Protein}
                </DataTable.Cell>
              </DataTable.Row>

              <DataTable.Row>
                <DataTable.Cell>Cholesterin</DataTable.Cell>
                <DataTable.Cell numeric>
                  {selectedNutrientItem.nutrients.Cholesterin}
                </DataTable.Cell>
              </DataTable.Row>

              <DataTable.Row>
                <DataTable.Cell>Natrium</DataTable.Cell>
                <DataTable.Cell numeric>
                  {selectedNutrientItem.nutrients.Natrium}
                </DataTable.Cell>
              </DataTable.Row>

              <DataTable.Row>
                <DataTable.Cell>Vitamin A</DataTable.Cell>
                <DataTable.Cell numeric>
                  {selectedNutrientItem.nutrients.VitaminA}
                </DataTable.Cell>
              </DataTable.Row>

              <DataTable.Row>
                <DataTable.Cell>Vitamin C</DataTable.Cell>
                <DataTable.Cell numeric>
                  {selectedNutrientItem.nutrients.VitaminC}
                </DataTable.Cell>
              </DataTable.Row>

              <DataTable.Row>
                <DataTable.Cell>Vitamin D</DataTable.Cell>
                <DataTable.Cell numeric>
                  {selectedNutrientItem.nutrients.VitaminD}
                </DataTable.Cell>
              </DataTable.Row>

              <DataTable.Row>
                <DataTable.Cell>Vitamin B6</DataTable.Cell>
                <DataTable.Cell numeric>
                  {selectedNutrientItem.nutrients.VitaminB6}
                </DataTable.Cell>
              </DataTable.Row>

              <DataTable.Row>
                <DataTable.Cell>Vitamin B12</DataTable.Cell>
                <DataTable.Cell numeric>
                  {selectedNutrientItem.nutrients.VitaminB12}
                </DataTable.Cell>
              </DataTable.Row>

              <DataTable.Row>
                <DataTable.Cell>Kalzium</DataTable.Cell>
                <DataTable.Cell numeric>
                  {selectedNutrientItem.nutrients.Kalzium}
                </DataTable.Cell>
              </DataTable.Row>

              <DataTable.Row>
                <DataTable.Cell>Eisen</DataTable.Cell>
                <DataTable.Cell numeric>
                  {selectedNutrientItem.nutrients.Eisen}
                </DataTable.Cell>
              </DataTable.Row>

              <DataTable.Row>
                <DataTable.Cell>Magnesium</DataTable.Cell>
                <DataTable.Cell numeric>
                  {selectedNutrientItem.nutrients.Magnesium}
                </DataTable.Cell>
              </DataTable.Row>
            </DataTable>
            <Text
              style={{
                marginTop: 40,
                marginBottom: 10,
                textAlign: 'center',
                fontSize: 11,
                textDecorationLine: 'underline',
              }}
              onPress={() =>
                Linking.openURL(selectedNutrientItem.nutrients.Quelle)
              }
            >
              source: USDA {selectedNutrientItem.title}
            </Text>
          </ScrollView>
        </View>
      );
    } else {
      <View style={styles.PageViewItemDetails}>
        <ScrollView>
          <DataTable>
            <DataTable.Header>
              <DataTable.Title>{selectedNutrientItem.title}</DataTable.Title>
              <DataTable.Title numeric>pro 100g</DataTable.Title>
            </DataTable.Header>

            <DataTable.Row>
              <DataTable.Cell>Kalorien</DataTable.Cell>
              <DataTable.Cell numeric>
                {selectedNutrientItem.nutrients.Kalorien}
              </DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell>Fett</DataTable.Cell>
              <DataTable.Cell numeric>
                {selectedNutrientItem.nutrients.Fettgehalt}
              </DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell>Kohlenhydrate</DataTable.Cell>
              <DataTable.Cell numeric>
                {selectedNutrientItem.nutrients.Kohlenhydrate}
              </DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell>- davon Zucker</DataTable.Cell>
              <DataTable.Cell numeric>
                {selectedNutrientItem.nutrients.Fettgehalt}
              </DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell>Protein</DataTable.Cell>
              <DataTable.Cell numeric>
                {selectedNutrientItem.nutrients.Protein}
              </DataTable.Cell>
            </DataTable.Row>
          </DataTable>
          <Text
            style={{
              marginTop: 40,
              marginBottom: 10,
              textAlign: 'center',
              fontSize: 11,
              textDecorationLine: 'underline',
            }}
            onPress={() =>
              Linking.openURL(selectedNutrientItem.nutrients.Quelle)
            }
          >
            source: USDA {selectedNutrientItem.title}
          </Text>
        </ScrollView>
      </View>;
    }
  } else {
    return <Text>Coming soon...</Text>;
  }
};

export default ListItemDetails;

const styles = StyleSheet.create({
  PageViewItemDetails: {
    marginTop: 30,
  },
  styleTwo: {},
});
