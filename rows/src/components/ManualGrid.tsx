import { View, Text ,StyleSheet,FlatList,Image, ScrollView} from 'react-native'
import React from 'react'
import perr from '../assets/perr.jpg'

export default function ManualGrid() {



  
  let arrayImage= [
    {
        id:1,
        url:perr
    },
    {
        id:2,
        url:perr
    },
    {
        id:3,
        url:perr
    },
    {
        id:4,
        url:perr
    },
    {
        id:5,
        url:perr
    },
    {
        id:6,
        url:perr
    },
    {
        id:7,
        url:perr
    },
    {
        id:8,
        url:perr
    },
    {
        id:9,
        url:perr
    },
    {
        id:10,
        url:perr
    }

  ]
  return (
    <ScrollView contentContainerStyle={styles1.container}>


    {
    //El propósito de contentContainerStyle en el componente ScrollView 
    //es permitirte definir estilos para el contenedor de contenido dentro del ScrollView.
    arrayImage.map((item, index) => (
      <View key={index} style={styles1.item}>
        <Image source={ item.url } style={styles1.image} />
      </View>
    ))}
  </ScrollView>
  )
}

const styles1 = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap', //permitirá que los elementos se envuelvan automáticamente a filas adicionales si no caben en una sola fila.
        padding: 10,
        backgroundColor: '#fff',
      },
      item: {
        width: '48%', // Dos imágenes por fila
        marginBottom: 10,
      },
      image: {
        width: '100%',
        aspectRatio: 1, //la imagen mantendrá una relación de 1:1 entre su ancho y su altura.
        borderRadius: 8,
        padding:15
      },
  });