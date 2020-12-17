import React,{useState} from 'react';
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet,FlatList, View, Alert } from 'react-native';
import Header from './components/header'
import TodoItem from './components/todoitem';
import AddTodo from './components/addtodo'


export default function App() {

  const [todos, setTodos] = useState([
    {text:"Paani bharo",id:'1'},
    {text:"Sabzi le ao",id:'2'},
    {text:"khana bnao",id:'3'},
    {text:"juice bhi bnaa lena",id:'4'},
    {text:"kprey press kro",id:'5'},
    {text:"charger le k ana",id:'6'},
    {text:"handsfree bhi le ana",id:'7'},
    {text:"or kuch zehn me nai aa rha",id:'8'},
    {text:"sfai bhi dekh lena",id:'9'},
    {text:"shirt bhi le k ani",id:'10'},
    {text:"packing krni hai",id:'11'},
    {text:"atlast list end ho gayee",id:'12'},
  ])

  const pressHandler=(id)=>
  {
    setTodos((prevtodos)=>{
      return prevtodos.filter((todo) => todo.id != id)
    })
  }

  const submitHandler = (text)=>
  {
    if(text.length >= 3)
    {
      setTodos((prevtodos)=>
      {
        return [
          {text: text, id: Math.random().toString()},
          ...prevtodos
        ]
      })  
    }
    else
    {
      Alert.alert('OOPS!', 'Todos must be atleast 3 characters long',[
        {
          text:'Understood',onPress: ()=>console.log('Alert Closed')
        }
      ])
    }
  }

  return(
  
    
      <View style={styles.container}>
        <Header/>
        <LinearGradient
          colors={['#339CB1','#5ED2A0' ]} 
          style={styles.lineargrad}
        >
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
        </LinearGradient>
        
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content:{
    flex:1,
    padding:20,
  },
  list:{
    flex:1
  },
  lineargrad:{
    flex:1,
  }


});
