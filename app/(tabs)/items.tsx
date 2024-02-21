import CreateOrderButton from "@/components/CreateOrderButton";
import { View } from "react-native";
import { Text } from "react-native-paper";

const ItemsScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <CreateOrderButton label="New Item" />
      <Text>Items Page</Text>
    </View>
  );
};

export default ItemsScreen;
