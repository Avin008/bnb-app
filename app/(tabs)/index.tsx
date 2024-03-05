import CreateNewOrderButton from "@/components/CreateNewOrderButton";
import ListItem from "@/components/ListItem";
import { ordersData } from "@/data";
import { FlatList, View } from "react-native";
import { List } from "react-native-paper";

const HomeScreen = () => {
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
      />
    </View>
  );
};

export default HomeScreen;
