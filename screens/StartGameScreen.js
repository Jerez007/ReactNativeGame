import {
  TextInput,
  View,
  StyleSheet,
  Alert,
} from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";
import Colors from "../constants/color";

function StartGameScreen({
  onPickNumber,
}) {
  const [
    enteredNumber,
    setEnteredNumber,
  ] = useState("");

  function numberInputHandler(
    enteredText
  ) {
    setEnteredNumber(enteredText);
  }

  function resetInputHandler() {
    setEnteredNumber("");
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(
      enteredNumber
    );

    if (
      isNaN(chosenNumber) ||
      chosenNumber <= 0 ||
      chosenNumber > 99
    ) {
      Alert.alert(
        "Invalid number!",
        "Number needs to be between 1 and 99.",
        [
          {
            text: "Okay",
            style: "destructive",
            onPress: resetInputHandler,
          },
        ]
      );
      return;
    }
    onPickNumber(chosenNumber);
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        value={enteredNumber}
        onChangeText={
          numberInputHandler
        }
      />
      <View
        style={styles.buttonsContainer}
      >
        <View
          style={styles.buttonContainer}
        >
          <PrimaryButton
            onPress={resetInputHandler}
          >
            Reset
          </PrimaryButton>
        </View>
        <View
          style={styles.buttonContainer}
        >
          <PrimaryButton
            onPress={
              confirmInputHandler
            }
          >
            Confirm
          </PrimaryButton>
        </View>
      </View>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 100,
    marginHorizontal: 20,
    borderRadius: 8,
    padding: 16,
    backgroundColor: Colors.primary800,
    elevation: 4, //for shadow in android only
    shadowColor: "black", // for iOS
    shadowOffset: {
      width: 0,
      height: 2,
    }, // for iOS
    shadowRadius: 6, // for iOS
    shadowOpacity: 0.25, // for iOS,
    justifyContent: "center",
    alignItems: "center",
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
