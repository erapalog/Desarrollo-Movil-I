import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
import React,{useEffect, useState} from 'react'
import { TextInput } from 'react-native-paper';
import { RadioButton } from 'react-native-paper';
import { Badge } from 'react-native-paper';

export default function Formulario() {

    
  //set a get
  const [email, setEmail] =useState("");
  const [user, setUser] =useState("");

  const [checked, setChecked] = useState('first');


  const handleGuardar =()=>{
    console.log("Email", email)
    console.log("User", user)
    console.log("Checked",checked)
  }

  return (
    <View style={styles.container}>
      <Text>Formulario de registro</Text>

      <TextInput
        value={email}
        placeholder='Ingresar Email'
        onChangeText={text=> setEmail(text)}
        style={{borderBlockColor: 'green', padding:5}}
        
      >
        
      </TextInput>

      <TextInput
        value={user} //get variable donde asigna un valir
        placeholder='Ingresar Usuario'
        onChangeText={setUser} //set variable que guarda el estado de ese valor
        style={{borderBlockColor: 'green', padding:5, marginTop:4}}
        
      >
        
      </TextInput>

      <RadioButton
        value="first"
        status={ checked === 'first' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('first')}
      />
      <RadioButton
        value="second"
        status={ checked === 'second' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('second')}
      />
       
       <Badge>3</Badge>

      <Button title='Envia Datos' onPress={handleGuardar}></Button>


    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });