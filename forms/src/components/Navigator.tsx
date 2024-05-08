
import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screen/Home';
import Settings from '../screen/Settings';
import { MaterialIcons } from '@expo/vector-icons';


const tab =createBottomTabNavigator();

const Navigator = () => {
  return (
   
    <NavigationContainer>
        <tab.Navigator
            initialRouteName='Home'
        >

            <tab.Screen name='Home' component={Home} 
            options={{
                tabBarLabel:"Inicio",
                tabBarIcon: (props) =>(
                    <MaterialIcons name='home' size={24} color="black"></MaterialIcons>
                )

            }}

            ></tab.Screen>
            <tab.Screen name='Settings' component={Settings}></tab.Screen>
        </tab.Navigator>
    </NavigationContainer>
  )
}

export default Navigator