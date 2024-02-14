import CreateOrderButton from "@/components/screens/CreateOrderButton";
import { StyleSheet, Text, View } from "react-native";

const TabScreen = () => {
  return (
    <View style={styles.container}>
      <CreateOrderButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default TabScreen;
