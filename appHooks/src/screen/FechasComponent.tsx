import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'

export default function FechasComponent() {

  const [name, setName] = useState("Juan perez")

  const cambiarNombre =()=>{
        setName("Juan Perez Calderon")
  }


  const year = new Date().getFullYear();
  const [anio, setAnio] =useState(year.valueOf())

  const aumentarAnio = ()=>{
    let anioCalculado= anio+1;
    setAnio(anioCalculado) 
  }

  const restarAnio = ()=>{
    if(anio==0) return

    let anioCalculado= anio-1;
    setAnio(anioCalculado) 
  }


  return (
    <View>

      <Text>Nombre de la persona es:  {name}</Text>
      <Button title='Cambiar nombre' onPress={cambiarNombre}></Button>

      <Text style={{borderColor:"red", padding:50}}>El anio actual es:  {anio}</Text>
      <Button title='AUmentar anio' onPress={aumentarAnio}></Button>
      <Button title='Restar anio' onPress={restarAnio} ></Button>


    </View>  
  )
}