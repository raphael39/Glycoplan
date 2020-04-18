import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';

const GlycoList = props => {

    return(
        <ScrollView >

      {props.green.map((goal) => 
      <View style={styles.listItem}>
          <Text key={goal}>{goal}</Text>
          <View style={{backgroundColor: 'green', width: 20, height: 20, borderRadius: '50%'}}></View>
      </View>)}
      
      {props.yellow.map((goal) => 
      <View style={styles.listItem2}>
          <Text key={goal}>{goal}</Text>
          <View style={{backgroundColor: '#ffd31d', width: 20, height: 20, borderRadius: '50%'}}></View>
      </View>)}
      
      </ScrollView>
    );
}


const styles = StyleSheet.create({
    listItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: 'white',
        borderColor: 'green',
        borderBottomWidth: 2,
        shadowColor: "#000",
        shadowOpacity: 0.15,
      },
      listItem2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: 'white',
        borderColor: '#ffd31d',
        borderBottomWidth: 2,
        shadowColor: "#000",
        shadowOpacity: 0.15,
      }

    });

export default GlycoList;

