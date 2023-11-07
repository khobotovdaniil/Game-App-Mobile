import React from "react"
import { StyleSheet, View, Text } from "react-native"

import Colors from "../../constants/colors"

export const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: 24,
    margin: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: Colors.accent500,
    fontSize: 36,
    fontFamily: 'open-sans-bold'
  }
})