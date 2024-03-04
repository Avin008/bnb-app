import CreateOrderButton from "@/components/CreateOrderButton";
import HeadingChips from "@/components/HeadingChips";
import ItemCard from "@/components/ItemCard";
import ItemList from "@/components/ItemList";
import SearchBar from "@/components/screens/SearchBar";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FlatList, Image, ScrollView, View } from "react-native";
import { Button, Card, Divider, List, Text } from "react-native-paper";

const ItemsScreen = () => {
  const dummyData: any = [
    { id: "1", name: "Chair", price: 20, total: 100, available: 50 },
    { id: "2", name: "Dj Box", price: 100, total: 100, available: 50 },
    { id: "3", name: "Mat", price: 100, total: 100, available: 50 },
    { id: "4", name: "Tent", price: 100, total: 100, available: 50 },
    { id: "5", name: "Light", price: 100, total: 100, available: 50 },
    { id: "6", name: "Mug", price: 100, total: 100, available: 50 },
    { id: "7", name: "Table", price: 100, total: 100, available: 50 },
    { id: "8", name: "Amplifier", price: 100, total: 100, available: 50 },
  ];
  return (
    <View style={{ flex: 1 }}>
      <CreateOrderButton label="New Item" />
      <FlatList
        data={dummyData}
        renderItem={(data) => <ItemCard itemCardData={data.item} />}
        contentContainerStyle={{ padding: 5, gap: 10 }}
        ListHeaderComponent={() => (
          <List.Subheader variant="headlineSmall">Your Items</List.Subheader>
        )}
      />
    </View>
  );
};

export default ItemsScreen;
