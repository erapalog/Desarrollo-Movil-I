import React, { useState, useEffect } from 'react';
import { View, Text, FlatList,Button, TouchableOpacity , TextInput, StyleSheet } from 'react-native';

export default function Crud() {
  const [alumnos, setAlumnos] = useState([]);
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');

  useEffect(() => {
    fetchAlumnos();
  }, []);

  const fetchAlumnos = async () => {
    try {
      const response = await fetch('http://localhost:3000/alumnos');
      const data = await response.json();
      setAlumnos(data);
    } catch (error) {
      console.error(error);
    }
  };

  const createAlumno = async () => {
    try {
      const response = await fetch('http://localhost:3000/alumnos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombre, apellido }),
      });
      const newAlumno = await response.json();
      setAlumnos([...alumnos, newAlumno]);
      setNombre('');
      setApellido('');
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <View style={styles.container}>
    <TextInput
      style={styles.input}
      placeholder="Nombre"
      value={nombre}
      onChangeText={setNombre}
    />
    <TextInput
      style={styles.input}
      placeholder="Apellido"
      value={apellido}
      onChangeText={setApellido}
    />
    <Button title="Crear Alumno" onPress={createAlumno} />

    <FlatList
        data={alumnos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{`${item.nombre} ${item.apellido}`}</Text>
            <TouchableOpacity  onPress={createAlumno}  style={styles.button}>
            <Text >Eliminar Alumno</Text>

            </TouchableOpacity >
          </View>
        )}
      />
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: '#fff',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
    },
    item: {
      padding: 16,
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
    },
    button: {
        backgroundColor: 'red',
        padding: 10,
        alignItems: 'center',
        borderRadius: 5,
        marginBottom: 12,
      },
  });