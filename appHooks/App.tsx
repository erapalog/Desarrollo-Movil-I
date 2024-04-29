import { Text, View } from 'react-native'
import React, { Component } from 'react'
import FechasComponent from './src/screen/FechasComponent'
import FormularioComponent from './src/screen/FormularioComponent'

export default class App extends Component {
  render() {
    return (
      <View>
        <Text>App</Text>

        <FechasComponent></FechasComponent>
        <FormularioComponent></FormularioComponent>
      </View>
    )
  }
}