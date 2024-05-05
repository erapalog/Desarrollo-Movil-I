import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function BasicContainer() {
  return (
    <View style={style.container}>

        <View style={style.container1}>
            <Text>Container 1</Text>
        </View>
        <View style={style.container2}>
            <Text>Container 2</Text>
        </View>

        <View style={style.container3}>
            <Text>Container 2</Text>
        </View>
    </View>
  )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: 'blue',
        flex:1,
        justifyContent: 'center',
        flexDirection:'row'
    },
    container1:{
        flex:1,
        backgroundColor:'yellow',
        justifyContent: "center",

    },
    container2:{
        flex:1,
        backgroundColor:'green',
        justifyContent: "center",

    },
    container3:{

        flex:3,
        backgroundColor:'white',
        justifyContent: "center",
        flexDirection:'row'
    }
})

