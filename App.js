import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet,FlatList, Text, View } from 'react-native';
import Header from './components/header'
import TodoItem from './components/todoitem';
import AddTodo from './components/addtodo'

export default function App() {

  const [todos, setTodos] = useState([
    {text:"yo Hhov",id:'1'},
    {text:"nkh jcjfvjgv jhkvkv",id:'2'},
    {text:"njhbvi jbjubiubgv jhbjbikv",id:'3'},
    {text:"yo ihov",id:'4'},
    {text:"nkh jcjfvjgv jhkvkv",id:'5'},
    {text:"njhbvi jbjubiubgv jhbjbikv",id:'6'},
    {text:"yo ihov",id:'7'},
    {text:"nkh jcjfvjgv jhkvkv",id:'8'},
    {text:"njhbvi jbjubiubgv jhbjbikv",id:'9'},
    {text:"yo ihov",id:'10'},
    {text:"nkh jcjfvjgv jhkvkv",id:'11'},
    {text:"njhbvi jbjubiubgv jhbjbik",id:'12'},
  ])

  const pressHandler=(id)=>
  {
    setTodos((prevtodos)=>{
      return prevtodos.filter((todo) => todo.id != id)
    })
  }

  const submitHandler = (text)=>
  {
    setTodos((prevtodos)=>
    {
      return [
        {text: text, id: Math.random().toString()},
        ...prevtodos
      ]
    })
  }

  return(
  
  <View style={styles.container}>
    <Header/>
    <View style={styles.content}>
    <AddTodo submitHandler={submitHandler}/>
      {/* To Form */}
      <View style={styles.list}>
        <FlatList
          keyExtractor={todos.id}
          data={todos}
          renderItem={({item}) => (
          
          <TodoItem item={item} pressHandler={pressHandler}/>
          
          )}
        />
      </View>
    </View>

  </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content:{
    padding:20,
    marginBottom:100
  },
  list:{
    
  }


});
