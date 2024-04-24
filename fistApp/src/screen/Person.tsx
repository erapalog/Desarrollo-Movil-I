import { View, Text } from 'react-native'
import React from 'react'

interface Persona{
    nombre: string,
    apellido:string,
    edad?: number

}

export default function Person(props: Persona) {
  return (
    <View>
      <Text>
        Nombre {props.nombre + props.apellido + props.edad}  

      </Text>
    </View>
  )
}