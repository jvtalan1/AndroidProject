import React, { Component } from 'react'
import { Text, View } from 'react-native'

class Flexbox extends Component {
  render () {
    return (
      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
        <Text>Flex me</Text>
      </View>
    )
  }
}

export default Flexbox
