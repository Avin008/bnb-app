import * as React from "react";
import { Searchbar } from "react-native-paper";

const SearchBar = ({ label }: { label: string }) => {
  const [searchQuery, setSearchQuery] = React.useState("");

  return (
    <Searchbar
      mode="view"
      placeholder={label}
      onChangeText={setSearchQuery}
      value={searchQuery}
    />
  );
};

export default SearchBar;
