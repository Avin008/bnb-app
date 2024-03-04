import * as React from "react";
import { StyleSheet } from "react-native";
import { FAB } from "react-native-paper";

const AddNewItemButton = () => (
  <FAB
    icon={"plus"}
    label={"New Item"}
    style={styles.fab}
    onPress={() => console.log("Pressed")}
  />
);

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
    zIndex: 20,
  },
});

export default AddNewItemButton;
