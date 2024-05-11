import { View, Text ,Button} from 'react-native'
import React, { useEffect,useState } from 'react'
import { Estilos } from '../Estililos/Estilos';

import * as Device from 'expo-device';


export default function Dipositivo() {

    

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>
        {Device.manufacturer}: {Device.modelName} : {Device.brand}
      </Text>
    </View>
  )
}