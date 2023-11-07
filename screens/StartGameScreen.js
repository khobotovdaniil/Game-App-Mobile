import React, { useState } from "react";
import { StyleSheet, View, TextInput, Alert } from "react-native";

import { PrimaryButton } from "../components/PrimaryButton";

export const StartGameScreen = ({ onConfirm }) => {
  const [enteredNumber, setEnteredNumber] = useState('');

  function numberInputHandler(text) {
    setEnteredNumber(text)
  }

  const resetInputHandler = () => {
    setEnteredNumber('')
  }

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Invalid number!',
        'Number has to be a number between 1 and 99.',
        [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
      );
      return;
    }

    onConfirm(chosenNumber);
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType='number-pad'
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={numberInputHandler}
        value={enteredNumber}
      />
      <View style={styles.buttons}>
        <View style={styles.button}>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.button}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: '#3b021f',
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    shadowRadius: 6,
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 }
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: '#ddb52f',
    borderBottomWidth: 2,
    color: '#ddb52f',
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  buttons: {
    flexDirection: 'row',
  },
  button: {
    flex: 1
  }
})