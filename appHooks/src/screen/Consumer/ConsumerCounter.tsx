
import { View, Text,Button } from 'react-native'
import React from 'react'
import { useCounter } from '../Provider/ProviderContextCount'

export default function ConsumerCounter() {

   const {count,increment,decrement} =useCounter();
      
  return (
    <View>
      <Text>Contador {count}</Text>
      <Button title='Sumar' onPress={increment}></Button>
      <Button title='Restar' onPress={decrement}></Button>
    </View>
  )
}