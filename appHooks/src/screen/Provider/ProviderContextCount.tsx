import { View, Text } from 'react-native'
import React, { ReactNode, useContext, useState } from 'react'
import { ContextContador } from '../Context/ContextContador';

interface Props{
    children: ReactNode
}

export default function ProviderContextCount(props:Props) {

  const [count, setCount]=useState(0);

  const increment = ()=>{
    setCount(count+1);
  }

  const decrement=()=>{
    setCount(count-1);
  }
  return (
    <View>
      <Text>ProviderContextCount</Text>
      <ContextContador.Provider value={{count,increment,decrement}}>
        {props.children}
      </ContextContador.Provider>
    </View>
  )
}

export const useCounter =()=>{
    return useContext(ContextContador);
}