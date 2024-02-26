import CreateOrderButton from "@/components/CreateOrderButton";
import HeadingChips from "@/components/HeadingChips";
import ItemCard from "@/components/ItemCard";
import ItemList from "@/components/ItemList";
import SearchBar from "@/components/screens/SearchBar";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Image, ScrollView, View } from "react-native";
import { Button, Card, Text } from "react-native-paper";

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
      <SearchBar />
      <ScrollView>
        <View style={{ padding: 10, display: "flex", gap: 10 }}>
          {dummyData?.map((data: any) => (
            <ItemCard key={data.id} itemCardData={data} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default ItemsScreen;
