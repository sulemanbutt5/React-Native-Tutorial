import React,{useState} from 'react'
import { StyleSheet,Text, View, Button, TextInput } from 'react-native';


export default function addtodo(props) {

    const [text,setText] =useState('')
    const changeHandler = (val) =>
    {
        setText(val)
    }

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder='new todo...'
                onChangeText={changeHandler}
            />
            <Button
                onPress={() => props.submitHandler(text)}
                title='Add Todo'
                color='coral'
            />
        </View>
    )
}

const styles=StyleSheet.create({
    input:{
        backgroundColor:'lightgrey',
        marginBottom:10,
        padding: 8,
        borderWidth:1,
        borderColor:'#000',
        borderRadius:5,
    }
})

