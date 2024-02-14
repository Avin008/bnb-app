import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const CreateOrderButton = () => {
  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.9}>
      <Ionicons name="add" size={30} color={"white"} />
      <Text style={styles.buttonText}>Create New Order</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 55,
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 10,
    marginHorizontal: 10,
    borderRadius: 8,
    backgroundColor: "#1AA2E6",
  },
  buttonText: {
    color: "white",
    fontWeight: "500",
  },
});

export default CreateOrderButton;
