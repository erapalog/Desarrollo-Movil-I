import { Text, View } from 'react-native'
import React, { Component } from 'react'
import Home from './src/screen/Home';
import Person from './src/screen/Person';

export default class App extends Component {
 

  render() {
   
    const saludo:string="Hola mundo";
    const edad:number=10;
    const precio:number=9.989808098;

    let numberArray: number[] =[2,3,4,8,5];
    let stringArray: Array<string> =["uno"," dos","tres"];
    
    interface Persona{
      nombre:string,
      edad: number,
      dogs?:boolean
    }

    const PersonaObjeto: Persona={
        nombre:"erick",
        edad: 18
        
    }

    return (
      <View>
        <Text>Variable tipo string {saludo} </Text>
        <Text>Variable tipo entero {edad} </Text>
        <Text>Variable tipo float {precio} </Text>
        
        {
          numberArray.map((elemento, index) => (
             <Text key={index} >{elemento}</Text>
          ))
        }

      {
          stringArray.map((elemento, index) => (
             <Text key={index} >{elemento}</Text>
          ))
        }

      <Text>Nombre de la persona {PersonaObjeto.nombre} </Text>
      <Text>Edad de la persona  {PersonaObjeto.edad} </Text>

      <Home></Home>
      <Person nombre='Erick' apellido='Rapalo'></Person>
      <Person {...{nombre:'Erick',apellido:'Rapalo'}}></Person>
      </View>
    )
  }
}