import { Text, StyleSheet, View, SafeAreaView } from 'react-native'
import React, { Component } from 'react'
import BasicContainer from './src/components/BasicContainer'
import ListContainer from './src/components/ListContainer'
import ManualGrid from './src/components/ManualGrid'

export default class App extends Component {
  render() {
    return (
      <View style={{flex:1}}>

       {/* <BasicContainer></BasicContainer>
        <ListContainer></ListContainer>
       */}

      <ManualGrid></ManualGrid>
      </View>
    )
  }
}

