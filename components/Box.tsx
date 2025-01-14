import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Box({style, children}) {
  return (
    <View style={styles.box}>
      <Text style={[styles.text, style]}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    box:{
        flex:1,
        backgroundColor:"#fff",
        // padding:20,
        // flexDirection:'column'
        // flexDirection:'row',
        // justifyContent:"space-evenly",
       

    },
    text:{
        fontSize:24,
        fontWeight:"bold",
        textAlign:"center",
        color:"white"
    }
})