
import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screen/Home';
import Settings from '../screen/Settings';
import { MaterialIcons } from '@expo/vector-icons';
import Formulario from '../screen/Formulario';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Stack from '../screen/Stack';
import StacksParameter from '../screen/StacksParameter';


const tab =createBottomTabNavigator();

const tabHome= createNativeStackNavigator();


function myStack() {
    return (
        <tabHome.Navigator>
            <tabHome.Screen name='HomeScreen' component={Home}></tabHome.Screen>
            <tabHome.Screen name='SetttingScreem' component={Settings}></tabHome.Screen>
            <tabHome.Screen name='FormularioScren' component={Formulario}></tabHome.Screen>
            <tabHome.Screen name='Stack' component={Stack}></tabHome.Screen>
            <tabHome.Screen name='StackParameter' component={StacksParameter}></tabHome.Screen>
        </tabHome.Navigator>
    )

}

const Navigator = () => {
  return (
   
    <NavigationContainer>
        <tab.Navigator
            initialRouteName='Home'
        >

            <tab.Screen name='Home' component={myStack} 
            options={{
                tabBarLabel:"Inicio",
                tabBarIcon: (props) =>(
                    <MaterialIcons name='home' size={24} color="black"></MaterialIcons>
                ),
                headerShown:false

            }}

            ></tab.Screen>
            <tab.Screen name='Settings' component={Settings}
                options={{
                    headerShown:false
                }}
            
            ></tab.Screen>

            <tab.Screen name='Formulario' component={Formulario}
            options={{
                headerShown:false
            }}
        
            ></tab.Screen>
        </tab.Navigator>
    </NavigationContainer>
  )
}

export default Navigator