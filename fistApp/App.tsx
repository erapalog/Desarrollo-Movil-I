import { Text, View } from 'react-native'
import React, { Component } from 'react'
import Home from './src/screen/Home';
import Person from './src/screen/Person';
import Calculator from './src/screen/Calculator';

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

    const props={nombre:"Eirck",apellido:"Roberto",edad:3}

    const operation={a:2,b:2, option:3}

    
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
      <Person {...props}>Esto se llama propagacion</Person>

      <Calculator a={3} b={5} option={1}></Calculator>
      <Calculator a={3} b={5} option={2}></Calculator>
      <Calculator a={3} b={5} option={3}></Calculator>
      <Calculator a={3} b={5} option={4}></Calculator>


      <Calculator {...operation}></Calculator>

      </View>
    )
  }
}