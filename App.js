import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { FlatList,Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [people,setPeople]=useState([
    {name:'ali',key:'1'},
    {name:'sam',key:'2'},
    {name:'asif',key:'3'},
    {name:'shaheen',key:'4'},
    {name:'akif',key:'5'},
    {name:'zubair',key:'6'},
    {name:'suleman',key:'7'},
    {name:'alina',key:'8'},
    {name:'sami',key:'9'},
    {name:'asim',key:'10'},
    {name:'shamus',key:'11'},
    {name:'aleem',key:'12'},
    {name:'zain',key:'13'},
    {name:'shaun',key:'14'},
  ])
  
  return (
    <View style={styles.container}>
    <Text style={styles.header}>List of Names</Text>

    <FlatList 
      //numColumns={2}
      keyExtractor={(item)=>item.key}
      data={people}
      renderItem={({item}) =>
      (
        <Text style={styles.item}>{item.name}</Text>
      )}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gold',
    paddingTop:40,
    paddingHorizontal:20,
    paddingBottom:20,
  //  alignItems: 'center',
  //  justifyContent: 'center',
  },
  item:{
    marginTop:24,
    padding:8,
    backgroundColor:'lightgrey',
    fontSize:24,
    borderColor:'black',
    borderWidth:1,
  },
  header:{
    padding:20,
    textAlign:'center',
    fontWeight:'bold',
    backgroundColor:'orange',
    fontSize:24,
    borderColor:'black',
    borderWidth:2,
  }

});
