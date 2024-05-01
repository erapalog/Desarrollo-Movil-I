


import { View, Text } from 'react-native'
import React from 'react'

interface Fecha{
    anio: number
}
const FechaComponent = (params: Fecha) => {
  return (
    <View>
      <Text>Anio Actual {params.anio}</Text>
    </View>
  )
}

export default FechaComponent
