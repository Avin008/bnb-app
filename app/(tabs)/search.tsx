import OrderList from "@/components/OrderList";
import SearchBar from "@/components/screens/SearchBar";
import { ScrollView, View } from "react-native";

const SearchScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <SearchBar />
      <ScrollView>
        <OrderList heading="Search Results" />
      </ScrollView>
    </View>
  );
};

export default SearchScreen;
