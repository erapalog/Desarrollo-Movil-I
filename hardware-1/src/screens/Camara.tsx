import { View, Text, Button ,Image,Alert} from 'react-native'
import React, { useState } from 'react'
import * as ImagePicker from 'expo-image-picker';

import {Estilos} from '../Estililos/Estilos'

export default function Camara() {

   const [image,setImage]=useState("https://fakeimg.pl/200x200");


   const [imageCamera,setImageCamera]=useState("https://fakeimg.pl/300x300");

const seleccionarImage = async () => {

    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        //significa que el ancho será 4 unidades y la altura será 3 unidades
        aspect: [4, 3],
        quality: 1,
      });
      console.log(result);

      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }

  }

  const tomarFotografia = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      console.log("si ingresa")
      setImageCamera(result.assets[0].uri);
    }
  };

  return (
    <View>
        <Button title='Seleccionar Imagen' onPress={seleccionarImage}></Button>

        <Image 
        style={Estilos.imageGaleria}
        source={{uri:image}}
        >

        </Image>

        <Button title='Tomar Fotografia' onPress={tomarFotografia} ></Button>

        <Image 
        style={Estilos.imageCamara}
        source={{uri:imageCamera}}
        >

        </Image>
    </View>
  )
}