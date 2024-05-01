import { Text, View } from 'react-native'
import React, { Component } from 'react'
import HookUseStare from './src/screen/FechaComponent/HookUseStare'
import FormUser from './src/screen/userEffect/FormUser/FormUser'
import HookMemo from './src/screen/memo/HookMemo'
import ProviderContextCount from './src/screen/Provider/ProviderContextCount'
import ConsumerCounter from './src/screen/Consumer/ConsumerCounter'

export default class App extends Component {
  render() {
    return (
      <View>
        <Text>App</Text>
       {/* <HookUseStare></HookUseStare>

        <FormUser></FormUser>

        <HookMemo></HookMemo>*/}

        <ProviderContextCount>
          <ConsumerCounter></ConsumerCounter>
        </ProviderContextCount>
      </View>
    )
  }
}