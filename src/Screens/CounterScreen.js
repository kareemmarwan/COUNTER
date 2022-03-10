import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Buttons from '../Component/Buttons'
import { useSelector, useDispatch } from 'react-redux'
import {
  increaseCounter,
  decreaseCounter,
} from '../redux/counterRedux/counter.actions'
import { COUNTER_KEY } from '../redux/counterRedux/counter.reducer'
export default function CounterScreen() {
  // const [count, setCount] = useState(0)

  // const Increase = () => {
  //   setCount(count + 1)
  // }

  // const Decrease = () => {
  //   {
  //     count <= 0 ? null : setCount(count - 1)
  //   }
  // }

  let dispach = useDispatch()

  let increaseBtn = () => {
    dispach(increaseCounter())
  }

  let decreaseBtn = () => {
    dispach(decreaseCounter())
  }

  let viewCounter = useSelector((state) => {
    return state[COUNTER_KEY]
  })
  return (
    <View style={styles.container}>
      <View>
        <Text style={{ fontSize: 100 }}>{viewCounter.count}</Text>
      </View>

      <View style={styles.ConternerButtom}>
        <Buttons onPress={increaseBtn} TitleButtom='+' />
        <Buttons onPress={decreaseBtn} TitleButtom='-' />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ConternerButtom: {
    height: 100,
    width: 300,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
})
