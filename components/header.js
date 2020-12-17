import React,{useState} from 'react';
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet,Text, View, StatusBar } from 'react-native';

export default function Header()
{
    return(
        <LinearGradient
          colors={['#000','coral']} 
          style={styles.lineargrad}
        >   
            <StatusBar barStyle = "light-content" hidden = {false} backgroundColor = "black" translucent = {true}/>
            <View style={styles.header}>
                <Text style={styles.title}>
                    My Todos
                </Text>
            </View>
        </LinearGradient>
    )

}

const styles=StyleSheet.create({

    header:{
        height:80,
        marginTop:25,
        alignItems:'center',
        justifyContent:'center',
    },
    title:{
        textAlign:'center',
        color:'#fff',
        fontSize:25,
        fontWeight:'bold',
    },
    lineargrad:{
        borderWidth:1,
        borderColor:'black',
    }
})