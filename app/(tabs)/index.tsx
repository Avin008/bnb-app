import CreateOrderButton from "@/components/CreateOrderButton";
import ListItem from "@/components/ListItem";
import { dummyData } from "@/components/OrderList";
import { FlatList, View } from "react-native";
import { List } from "react-native-paper";

const HomeScreen = () => {
  return (
    <View style={{ flex: 1, paddingVertical: 5 }}>
      <CreateOrderButton label="New Order" />
      <FlatList
        data={dummyData}
        renderItem={(item) => (
          <ListItem
            name={item.item.name}
            icon={item.item.icon}
            key={item.index}
          />
        )}
        ListHeaderComponent={() => (
          <List.Subheader>Today's Orders</List.Subheader>
        )}
      />
    </View>
  );
};

export default HomeScreen;
