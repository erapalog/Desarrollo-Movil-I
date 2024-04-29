import { View, Text, TextInput,Button } from 'react-native'
import React, { useEffect, useState } from 'react'


interface User{
    userId: number,
    name: string,
    title: string
}
const FormularioComponent = () => {

  const [users, setUsers] = useState<User[]> ([]);

  const userObject : User[] =[
    {
       userId: 1,
       name: "Andres lopez",
       title: "Abogado"
        
    },
    {
        userId: 2,
        name: "Pedro Garcia",
        title: "Abogado"
         
     }
   
  ]

  const getUser =()=>{
    setUsers(userObject)
  }

  useEffect(()=>{
    getUser()
  },[])


  const [inputText,setInputText]= useState("")

  useEffect(()=>{

    console.log("Valr ingrsado" , inputText)
  },[inputText])

  const agregarNombre=()=>{

    let newUser:  User={
        userId: 3,
        name: "Pedro Garcia uiui",
        title: "Abogado"
     }
     setUsers([...users, newUser]);
     setInputText("")

    }

  return (
    <View>
      <Text>FormularioComponent</Text>

      <TextInput onChangeText={setInputText}
                    value={inputText}
      ></TextInput>

      <Button title='Asignar valir' onPress={agregarNombre}></Button>

      {
        users.map(item=>{
            return <Text key={item.userId}> {item.name}</Text>
        })
      }
    </View>
  )
}

export default FormularioComponent