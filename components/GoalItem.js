import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem({ goal, deleteGoalhandler }) {
  return (
    <Pressable
      onPress={deleteGoalhandler.bind(this, goal.id)}
      style={({ pressed }) => pressed && styles.pressedItem}
    >
      <View style={styles.goalItemContainer}>
        <Text style={styles.goalItem}>{goal.text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  goalItemContainer: {
    marginBottom: 8,
    borderRadius: 6,
    backgroundColor: "#e7bb41",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalItem: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    color: "#393e41",
    textTransform: "capitalize",
  },
});

export default GoalItem;
