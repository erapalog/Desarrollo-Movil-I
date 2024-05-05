import { View, Text, ScrollView, FlatList, Image, StyleSheet } from 'react-native'
import React from 'react'
import perr from '../assets/perr.jpg'

export default function ListContainer() {

  
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
    }
  ]
  return (
   

    <View style={styles.container}>


  
    <FlatList 
        data={arrayImage} // el arreglo de imagnes
        numColumns={3} // Define el número de columnas en la galería
        keyExtractor={(item, index) => index.toString()} //indice de la imagen que reccore
        renderItem={({ item }) => (
            <Image source={item.url} style={styles.image} />
        )}
      />
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        //alignItems: 'center', //permite alinear el contenido dentro del contenedor, este se lo quito cuando lo agrego como row 
        justifyContent:'center' // lo alinea de forma vertical dentro del contenedor
       
     },
     image: {
         width: '33.33%', // Ocupa el 50% del ancho del contenedor padre (2 imágenes por fila)
         aspectRatio: 1, // Mantiene la relación de aspecto de la imagen
         margin: 2
       }
}
    
)