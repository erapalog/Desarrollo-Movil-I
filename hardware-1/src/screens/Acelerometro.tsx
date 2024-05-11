import { View, Text,Pressable } from 'react-native'
import React,{useState,useEffect} from 'react'

import { Accelerometer } from 'expo-sensors';

export default function Acelerometro() {

  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });

  useEffect(() => {
    //Indicamos que la aplicacion esta escuchando
    Accelerometer.addListener(accelerometerData => {
      setData(accelerometerData);
    });

    //que actualice los valores cada 1000 milisegundos

    Accelerometer.setUpdateInterval(1000);

    //restablezca los valores iniciales
    return () => {
      Accelerometer.removeAllListeners();
    };
  }, []);


  
 


  return (
    <View>
      
      <Text style={{ fontSize: 18, marginBottom: 10, color: '#003F5C', padding: 25, fontWeight: 'bold' }}>Accelerometer:</Text>
      <Text style={{ fontSize: 18, marginBottom: 10, color: '#003F5C' }}>x: {data.x.toFixed(2)}</Text>
      <Text style={{ fontSize: 18, marginBottom: 10, color: '#003F5C' }}>y: {data.y.toFixed(2)}</Text>
      <Text style={{ fontSize: 18, marginBottom: 10, color: '#003F5C' }}>z: {data.z.toFixed(2)}</Text>


    </View>
  )
}