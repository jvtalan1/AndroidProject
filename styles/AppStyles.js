import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  view1: {
    width: 100,
    height: 100,
    backgroundColor: 'red'
  },
  input: {
    width: 200,
    height: 80,
    borderWidth: 1,
    color: 'darkorchid'
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

export default styles
