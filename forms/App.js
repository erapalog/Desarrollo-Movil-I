import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
import React,{useEffect, useState} from 'react'
import { TextInput } from 'react-native-paper';
import { RadioButton } from 'react-native-paper';
import { Badge } from 'react-native-paper';
import Navigator from './src/components/Navigator';


export default function App() {
 

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

   
   
    <Navigator></Navigator>    
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
