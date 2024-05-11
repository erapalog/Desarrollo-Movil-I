import { View, Text } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'

export default function StacksParameter() {
   
  const route= useRoute()

  const {nombre,apellido}=route.params;
  return (
    <View>
      <Text>Nombre {nombre}</Text>
      <Text>Apellido {apellido}</Text>
    </View>
  )
}