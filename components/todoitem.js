import React from 'react'
import { StyleSheet,Text, TouchableOpacity } from 'react-native';


export default function TodoItem(props) {
    return (
        <TouchableOpacity onPress={() => props.pressHandler(props.item.id)}>
            <Text style={styles.item}>{props.item.text}</Text>
        </TouchableOpacity>
    )
}

const styles=StyleSheet.create({
    item:{
        padding:16,
        marginTop:16,
        borderColor:'#555',
        borderWidth:1,
        borderStyle:'dashed',
        borderRadius:10,
    }
})


