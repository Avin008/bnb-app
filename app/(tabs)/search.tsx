import ListItem from "@/components/ListItem";
import SearchBar from "@/components/screens/SearchBar";
import { ordersData } from "@/data";
import { FlatList, View } from "react-native";
import { List } from "react-native-paper";

const SearchScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <SearchBar label="Search Orders" />
      <FlatList
        data={ordersData}
        renderItem={(data) => <ListItem name={data.item.name} />}
        ListHeaderComponent={() => (
          <List.Subheader>Search Results</List.Subheader>
        )}
      />
    </View>
  );
};

export default SearchScreen;
