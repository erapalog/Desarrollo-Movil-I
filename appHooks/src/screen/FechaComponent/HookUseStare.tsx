import { View, Text,Button } from 'react-native'
import React, { useState } from 'react'
import FechaComponent from './FechaComponent';

export default function HookUseStare() {
    
  /**Ejemplo #1 */
  const [name,setName]=useState("Erick Rapalo");
  const cambiarNombre = () => {
    setName("Erick Rapalo Garcia");
  };


   /**Ejemplo #2 */
   const year = new Date().getFullYear();

  const [anio,setAnio]=useState(year.valueOf());

   const calcularAnio=()=>{
      let anioCalculo =anio+1;
      setAnio(anioCalculo);
  }

    
    /**Ejemplo #3 */
    
  const [contador,setContador]=useState(0);
 

  const incrementar = () => {
    setContador(+contador+1);
  };
  const restar = () => {
    if(contador==0) return
    setContador(contador-1);
  };

  return (
    <View>
      <Text>Nombre {name}</Text>

      <Button title="Cambiar nombre" onPress={cambiarNombre} />

      <Text>Contador {contador}</Text>

      <Button title="Incrementar" onPress={incrementar} />
      <View style={{ margin: 10 }} />
      <Button title="Restar" onPress={restar} />

      <FechaComponent anio={anio}></FechaComponent>
      <View style={{ width: 10 }} />
      
      <Button title="Aumentar anio" onPress={calcularAnio} />
      <View style={{ width: 10 }} />
    </View>
  )
}