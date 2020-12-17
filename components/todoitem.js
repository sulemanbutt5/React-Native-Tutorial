import React from 'react'
import { StyleSheet,Text, TouchableOpacity, View} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons'


export default function TodoItem(props) {
    return (
            <View style={styles.item}>
                <TouchableOpacity onPress={() => props.pressHandler(props.item.id)}>
                    <MaterialIcons name='delete' size={25} color='#111'/>
                </TouchableOpacity>
                <Text style={styles.itemText}>{props.item.text}</Text>
            </View>
            

    )
}

const styles=StyleSheet.create({
    item:{
        flexDirection:'row',
        padding:16,
        marginTop:16,
        borderColor:'#555',
        borderWidth:1,
        borderStyle:'dashed',
        borderRadius:10,
    },
    itemText:{
        marginLeft:20,
    }
})


