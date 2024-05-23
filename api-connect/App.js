import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Crud from './Screens/Crud';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Listado de Alumnos</Text>
      <StatusBar style="auto" />
      <Crud></Crud>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
