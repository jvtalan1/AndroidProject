import React, { Component } from 'react'
import { Button, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native'

import AnimationExample from './src/AnimationExample'
import FlatListExample from './src/FlatListExample'
import styles from './styles/AppStyles'

class HomeScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      text: ''
    }
  }

  handleChange (text) {
    this.setState({
      text: text
    })
  }

  render () {
    return (
      <View style={{flex: 1}}>
        <AnimationExample />
        {/* <View style={[styles.view1, { backgroundColor: 'blue'}]} />
        <TextInput onChangeText={(text) => this.handleChange(text)} style={styles.input}/>
        <Button onPress={() => { console.log('Button') }} title='Button' style={styles.button} />
        <TouchableOpacity onPress={() => { console.log('TouchableOpacity') }} title='TouchabbleOpacity' style={styles.button2}>
          <Text>TouchableOpacity</Text>
        </TouchableOpacity>
        <TouchableHighlight onPress={() => { console.log('TouchableHighlight') }} style={styles.button3}>
          <Text>TouchableHighlight</Text>
        </TouchableHighlight>
        <FlatListExample /> */}
      </View>
    )
  }
}

export default HomeScreen
