import { View, Text,TextInput ,Button} from 'react-native'
import React,{useState,useEffect} from 'react'


interface User{
  "userId":number,
   "name": string,
   "title": string
}

const FormUser = () => {

  
  const [users, setUsers] = useState<User[]>([]);

  const usersObject : User[] =[
    {
      userId: 1,
      name: 'John Doe',
      title: 'Developer'
    },
    {
      userId: 2,
      name: 'Jane Smith',
      title: 'Designer'
    },
    // Agrega más objetos de usuario según sea necesario
  ];
  
 
/**
 * Este useEffect se ejecutará solo una vez después de que el componente se monte en 
 * el DOM (cuando se renderice por primera vez). Al pasar un array vacío como segundo argumento 
 * ([]), le estás diciendo a React que el efecto no depende de ninguna prop o estado, por lo tanto,
 *  solo se ejecutará una vez.En este caso, el efecto llama a la función getPost() cuando 
 * el componente se monta por primera vez. La función getPost() establece el estado de users
 *  con la lista inicial de usuarios (usersObject).
 */
 
 useEffect(() => {
    getPost();
}, []);


const getPost = () => {
    setUsers(usersObject);
}


//Mostrar este ejemplo de segundo
const [inputText, setInputText] = useState('');


/**
 * Este useEffect se ejecutará cada vez que el valor de inputText cambie.
 *  Al pasar [inputText] como segundo argumento, estás diciendo que el efecto 
 * depende del estado inputText, por lo que se ejecutará cada vez que inputText 
 * cambie.En este caso, el efecto simplemente imprime en la consola el contenido actual de 
 * inputText cada vez que cambia. Esto es útil para depurar y rastrear cambios en el estado inputText.
 * 
 */
useEffect(() => {
    console.log('Contenido del campo de entrada:', inputText);
  }, [inputText]);

  function agregarNombre (){
    let userNew ={
      userId: Math.floor(Math.random() * 1000) + 1,
      name: inputText,
      title: 'Designer'
    }
  
    setUsers([...users, userNew]); // Agrega el nuevo usuario al estado users
    setInputText('');
  }

  return (
    <View>
      <View style={{ width: 10 }} />
      <Text>Ingrese un nombre:</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 10, padding: 5 }}
        onChangeText={setInputText}
        value={inputText}
      />

      <Button title="Agregar" onPress={agregarNombre} />

            {
                    users.map(item => {
                        return <Text key={item.userId}>{item.name}</Text>
                    })
            }


    </View>
  )
}

export default FormUser