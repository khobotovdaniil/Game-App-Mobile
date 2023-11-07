import React from "react"
import { StyleSheet, View, Text } from "react-native";

import { Title } from "../components/Title";

export const GameScreen = () => {

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <View>
        <Text>Higher or lower?</Text>

      </View>
      <Text>Log</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  }
})