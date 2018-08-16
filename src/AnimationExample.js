import React, { Component, Fragment } from 'react'
import { Animated, Easing, View } from 'react-native'

import styles from '../styles/AnimationExampleStyles'

class AnimationExample extends Component {
  constructor (props)  {
    super(props)
    this.animatedValue = new Animated.Value()
    this.spinValue = new Animated.Value()
  }

  componentDidMount () {
    this.animate()
    this.spin()
  }

  animate () {
    this.animatedValue.setValue(0)
    Animated.timing(
      this.animatedValue,
      {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear
      }
    ).start(() => this.animate())
  }

  spin () {
    this.spinValue.setValue(0)
    Animated.timing(
      this.spinValue,
      {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear
      }
    ).start(() => this.spin())
  }

  render () {
    const marginAnim = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 300, 0]
    })

    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    })
    return (
      <Fragment>
        <Animated.View style={[styles.box1, { marginLeft: marginAnim }]}>
        </Animated.View>
        <Animated.Image
          source={require('../assets/fidget_spinner.jpg')}
          style={{width: 100, height: 100, transform: [{rotate: spin }]}}
        />
      </Fragment>
    )
  }
}

export default AnimationExample
