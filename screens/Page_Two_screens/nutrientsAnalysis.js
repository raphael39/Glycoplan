import React, { useState } from 'react';
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';
import {
  Text,
  TouchableOpacity,
  FlatList,
  View,
  StyleSheet,
  TextInput,
  Button,
} from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Dimensions } from 'react-native';


const screenWidth = Dimensions.get('window').width * 1.1;
const chartConfig = {
  backgroundGradientFrom: '#1E2923',
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: '#08130D',
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};

const NutrientsAnalysis = (props) => {
  const nutrientsObj = props.navigation.getParam('allNutrientsMessenger');
  const data = [
    {
      name: '% KH',
      population: nutrientsObj.KohlenhydratePro,
      color: '#85a392',
      legendFontColor: 'white',
      legendFontSize: 11,
    },
    {
      name: '% Fett',
      population: nutrientsObj.FettPro,
      color: '#f5b971',
      legendFontColor: 'white',
      legendFontSize: 11,
    },
    {
      name: '% Protein',
      population: nutrientsObj.ProteinPro,
      color: 'red',
      legendFontColor: 'white',
      legendFontSize: 11,
    },
  ];

  return (
    <View>
      <View style={{ marginTop: 40, alignItems: 'center' }}>
        <Text style={{ fontSize: 18 }}>Einkaufsliste</Text>
      </View>

      <Card
        style={{
          margin: 10,
          borderRadius: '15%',
          padding: 10,
          backgroundColor: '#511845',
        }}
      >
        <Text
          style={{ color: 'white', fontSize: 17, fontWeight: 'bold' }}
        >{`Kalorien: \t\t\t ${Math.round(nutrientsObj.Kalorien)}`}</Text>
        <Text
          style={{ color: 'white', fontSize: 17, fontWeight: 'bold' }}
        >{`Kohlenhydrate: \t ${nutrientsObj.Kohlenhydrate}g`}</Text>
        <Text
          style={{ color: 'white', fontSize: 17, fontWeight: 'bold' }}
        >{`Fettgehalt: \t\t ${nutrientsObj.Fett}g`}</Text>
        <Text
          style={{ color: 'white', fontSize: 17, fontWeight: 'bold' }}
        >{`Protein: \t\t\t ${nutrientsObj.Protein}g`}</Text>
      </Card>

      <View style={{ marginTop: 40, alignItems: 'center',  }}>
        <Text style={{ fontSize: 18 }}>Energieverteilung</Text>
      </View>

      <Card style={{margin: 10, borderRadius: '15%', backgroundColor: '#511845', }}>
        <PieChart
          data={data}
          width={screenWidth}
          height={220}
          chartConfig={chartConfig}
          accessor="population"
          backgroundColor="transparent"
          paddingRight="15"
          absolute
          
        />
        
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  input1: {},
  update2: {},
});

export default NutrientsAnalysis;
