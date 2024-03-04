import CreateOrderButton from "@/components/CreateOrderButton";
import ItemCard from "@/components/ItemCard";
import { itemsData } from "@/data";
import { FlatList, View } from "react-native";
import { List } from "react-native-paper";

const ItemsScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <CreateOrderButton label="New Item" />
      <FlatList
        data={itemsData}
        renderItem={(data) => <ItemCard itemCardData={data.item} />}
        contentContainerStyle={{ padding: 10, gap: 12 }}
        ListHeaderComponent={() => (
          <List.Subheader variant="headlineSmall">Your Items</List.Subheader>
        )}
      />
    </View>
  );
};

export default ItemsScreen;
