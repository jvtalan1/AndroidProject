import React, { Component } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#d3d6d6',
    borderWidth: 1,
    borderRadius: 5,
    width: 500,
    height: 100
  }
})
class FlatListExample extends Component {
  constructor (props) {
    super(props)
    this.data = [
      {key: 'MJ'},
      {key: 'Jed'},
      {key: 'Lloyd'},
      {key: 'Jayah'},
      {key: 'Mhejoy'},
      {key: 'Chaeska'},
      {key: 'Ly'},
      {key: 'Moses'},
      {key: 'Jose'}
    ]
  }

  renderItem (item) {
    console.log('item', item)
    return (
      <View style={styles.container}>
        <Text>{item.key}</Text>
      </View>
    )
  }

  render () {
    return (
      <FlatList
        data={this.data}
        initialNumToRender={3}
        renderItem={({ item }) => this.renderItem(item)}
      />
    )
  }
}

export default FlatListExample
