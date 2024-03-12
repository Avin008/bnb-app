import * as React from "react";
import { View } from "react-native";
import { Searchbar } from "react-native-paper";

const SearchBar = ({ label }: { label: string }) => {
  const [searchQuery, setSearchQuery] = React.useState("");

  return (
    <View style={{ margin: 10, marginVertical: 20 }}>
      <Searchbar
        mode="bar"
        placeholder={label}
        onChangeText={setSearchQuery}
        value={searchQuery}
      />
    </View>
  );
};

export default SearchBar;
