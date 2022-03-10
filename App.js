import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import CounterScreen from './src/Screens/CounterScreen'
import { store } from './src/redux/Store'
import { Provider } from 'react-redux'
export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <CounterScreen />
      </View>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
