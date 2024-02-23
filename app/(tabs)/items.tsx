import CreateOrderButton from "@/components/CreateOrderButton";
import ItemList from "@/components/ItemList";
import { View } from "react-native";
import { Text } from "react-native-paper";

const ItemsScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <CreateOrderButton label="New Item" />
      <ItemList />
    </View>
  );
};

export default ItemsScreen;
