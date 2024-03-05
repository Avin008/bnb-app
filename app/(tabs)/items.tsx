import AddNewItemButton from "@/components/AddNewItemButton";
import ItemCard from "@/components/ItemCard";
import { itemsData } from "@/data";
import { FlatList, View } from "react-native";
import { List } from "react-native-paper";

const ItemsScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <AddNewItemButton />
      <FlatList
        data={itemsData}
        renderItem={(data) => <ItemCard itemCardData={data.item} />}
        contentContainerStyle={{ padding: 10, gap: 12 }}
        ListHeaderComponent={() => (
          <List.Subheader variant="headlineSmall">Your Items</List.Subheader>
        )}
        ListFooterComponent={() => <View style={{ height: 100 }}></View>}
      />
    </View>
  );
};

export default ItemsScreen;
