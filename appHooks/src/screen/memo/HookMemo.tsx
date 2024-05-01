import { View, Text } from 'react-native'
import React, { useMemo } from 'react'

export default function HookMemo() {

 /* let contador=0;

  for(let i=0; i<1000000;i++){
    contador++;
    
  }*/

  const resultado= useMemo(()=>{
    let contador=0;

  for(let i=0; i<10000000;i++){
    contador++;
  }

  return contador;
  }, []); 


  return (
    <View>
      <Text>Valor contador  hjhj {resultado}</Text>
    </View>
  )
}