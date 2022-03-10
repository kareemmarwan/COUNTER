import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

export default function Buttons({ onPress, TitleButtom }) {
  return (
    <View>
      <TouchableOpacity onPress={onPress} style={styles.Buttons}>
        <Text style={{ fontSize: 30, color: '#fff' }}>{TitleButtom}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  Buttons: {
    height: 50,
    width: 70,
    backgroundColor: 'red',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
