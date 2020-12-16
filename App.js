import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [name,setName]=useState('Suleman')
  const [person, setPerson] = useState({ name: 'Aleem', age: 50})
  
  const pressHandler = () => {
    setName('M Suleman Butt')
    setPerson({name:'Dar',age:35})
  }

  return (
    <View style={styles.container}>
        <Text>My name is {name}.</Text>
        <Text>His name is {person.name} and his age is {person.age} years.</Text>
        <View style={styles.buttonContainer}>
          <Button title='Update State' onPress={pressHandler}/>
        </View>
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
  buttonContainer:{
    marginTop: 20
  }
});
