import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Acelerometro from '../screens/Acelerometro';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home2';
import Camara from '../screens/Camara';
import Dipositivo from '../screens/Dipositivo';
import Geolocalizacion from '../screens/Geolocalizacion';
import Mapa from '../screens/Mapa';
import MiUbicacion from '../screens/MiUbicacion';

export default function MyDrawer() {

  const Drawer = createDrawerNavigator();

  return (

    <NavigationContainer>
    <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Dispositovo" component={Dipositivo} />
        <Drawer.Screen name="Acelerometro" component={Acelerometro} />
        <Drawer.Screen name="Camara" component={Camara} />
        <Drawer.Screen name="Geolocalizacion" component={Geolocalizacion} />
        <Drawer.Screen name="Mapa" component={Mapa} />
        <Drawer.Screen name="Mi Ubicacion" component={MiUbicacion} />

    </Drawer.Navigator>
    </NavigationContainer>
    
  )
}