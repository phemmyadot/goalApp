import { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";

function GoalInput({ addGoalHandler, modalIsVisible, setModalIsVisible }) {
  const [goalText, setGoalText] = useState("");
  const goalInptHandler = (text) => {
    setGoalText(text);
  };

  const addTextHandler = () => {
    if (goalText) {
      addGoalHandler(goalText);
      setGoalText("");
      setModalIsVisible(false);
    }
  };

  return (
    <Modal visible={modalIsVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image source={require("../assets/icon.png")} style={styles.image} />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal"
          value={goalText}
          onChangeText={goalInptHandler}
        />
        <View style={styles.buttonsContainer}>
          <Button
            title="Cancel"
            onPress={setModalIsVisible.bind(this, false)}
            color={"#393E41"}
          />
          <Button title="Add Goal" onPress={addTextHandler} color={"#44BBA4"} />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "#D3D0CB",
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  textInput: {
    backgroundColor: "white",
    width: "100%",
    borderWidth: 1,
    borderColor: "#cccccc",
    marginRight: 8,
    marginBottom: 24,
    padding: 12,
    borderRadius: 8,
  },
  buttonsContainer: {
    flexDirection: "row",
    columnGap: 20,
  },
  image: {
    height: 100,
    width: 100,
    margin: 24,
  },
});

export default GoalInput;
