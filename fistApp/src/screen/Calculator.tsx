import { View, Text } from 'react-native'
import React from 'react'


interface OPerationProps  {
    a: number;
    b: number;
    option: number;

};


function calcularOperaciones(props:OPerationProps) {
    
  let result:any;

  switch (props.option) {  
      case 1:
        result = props.a + props.b;
        break;
      case 2:
      result = props.a - props.b;
      break;
      case 3:
        result = props.a * props.b;
        break;
      case 4:
        result = props.b !== 0 ? props.a / props.b : "No se puede dividir por cero";
        break;
      default:
        result = "Operación no válida";
    }

    return result;
  };

export default function Calculator(props:OPerationProps) {

 const result = calcularOperaciones(props);
  return (
    <View>

    <Text>Resultado de la operacion: {result}</Text>
        
    </View>
  )
} 