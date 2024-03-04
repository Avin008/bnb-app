import ListItem from "@/components/ListItem";
import { dummyData } from "@/components/OrderList";
import SearchBar from "@/components/screens/SearchBar";
import { FlatList, ScrollView, Text, View } from "react-native";
import { List } from "react-native-paper";

const SearchScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <SearchBar />
      <FlatList
        data={dummyData}
        renderItem={(data) => (
          <ListItem name={data.item.name} icon={data.item.icon} />
        )}
        ListHeaderComponent={() => (
          <List.Subheader>Search Results</List.Subheader>
        )}
      />
    </View>
  );
};

export default SearchScreen;
