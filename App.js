import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { TextInput, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [name,setName]=useState('Suleman')
  const [age, setAge] = useState(22)
  
  return (
    <View style={styles.container}>
        <Text>Enter Name: </Text>
        <TextInput 
          multiline
          style={styles.input}
          placeholder='e.g. Ali Khan'
          onChangeText={(val)=>{setName(val)}}
        >
        </TextInput>
        
        <Text>Enter Age: </Text>
        <TextInput 
          style={styles.input}
          placeholder='e.g. 29'
          keyboardType='numeric'
          onChangeText={(val)=>{setAge(val)}}
        >
        </TextInput>
        <Text>My name is {name} and age is {age} years.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    borderWidth: 1,
    borderColor: '#777',
    padding:8,
    margin:10,
    width:200
  }
});
