import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import {Captura} from '../assets/Captura.png'

export default function Home() {
  const navigator= useNavigation();

  function irStack() {
    navigator.navigate("Stack");
  }

  function irStackParametros() {
    navigator.navigate("StackParameter", {nombre:"juan", apellido: 'perez', image:Captura});
  }
  return (
    <View>

      <TouchableOpacity 
         style={{
        backgroundColor:"yellow",
        padding:15,
        alignSelf:'center',
        borderRadius:5,
        marginTop:50

      }}
      onPress={irStack}
      >

      <Text>Ir a stack</Text>
      </TouchableOpacity>

      <TouchableOpacity 
         style={{
        backgroundColor:"purple",
        padding:15,
        alignSelf:'center',
        borderRadius:5,
        marginTop:20

      }}
      onPress={irStackParametros}
      >

      <Text>Ir a stack con parametros</Text>
      </TouchableOpacity>
    </View>
  )
}