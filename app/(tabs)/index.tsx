import CreateNewOrderButton from "@/components/CreateNewOrderButton";
import ListItem from "@/components/ListItem";
import { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { Divider, List, Text } from "react-native-paper";

const HomeScreen = () => {
  const [ordersData, setOrderData] = useState<any>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => (res.ok ? res.json() : res.json()))
      .then((data) => setOrderData(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <CreateNewOrderButton />
      <FlatList
        data={ordersData}
        renderItem={(item) => (
          <ListItem name={item.item.name} key={item.item.id} />
        )}
        ListHeaderComponent={() => (
          <List.Subheader>Today's Orders</List.Subheader>
        )}
        ListFooterComponent={() => <View style={{ height: 100 }}></View>}
        // ItemSeparatorComponent={() => <Divider />}
      />
    </View>
  );
};

export default HomeScreen;
