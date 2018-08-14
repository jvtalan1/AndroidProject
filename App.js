import React, { Component } from 'react'
import { Button, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import FlatListExample from './src/FlatListExample'

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  view1: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    alignSelf: 'center'
  },
  input: {
    width: 200,
    height: 80,
    borderWidth: 1
  },
  button: {
    width: 500,
    height: 100,
  },
  button2: {
    backgroundColor: 'green',
    height: 100
  },
  button3: {
    backgroundColor: 'yellow',
    height: 100
  }
})

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
      <View style={styles.container}>
        <View style={styles.view1}>
        </View>
        <TextInput onChangeText={(text) => this.handleChange(text)} style={styles.input}/>
        <Button onPress={() => { console.log('Button') }} title='Button' style={styles.button} />
        <TouchableOpacity onPress={() => { console.log('TouchableOpacity') }} title='TouchabbleOpacity' style={styles.button2}>
          <Text>TouchableOpacity</Text>
        </TouchableOpacity>
        <TouchableHighlight onPress={() => { console.log('TouchableHighlight') }} style={styles.button3}>
          <Text>TouchableHighlight</Text>
        </TouchableHighlight>
        <FlatListExample />
      </View>
    )
  }
}

export default HomeScreen
