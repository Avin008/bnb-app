import { router } from "expo-router";
import * as React from "react";
import { StyleSheet } from "react-native";
import { FAB } from "react-native-paper";

const CreateNewOrderButton = ({ onPress }: { onPress: () => void }) => (
  <FAB
    icon={"plus"}
    label={"New Order"}
    style={styles.fab}
    onPress={() => router.push("/(modals)/create-order")}
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

export default CreateNewOrderButton;
