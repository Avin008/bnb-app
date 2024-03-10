import CreateNewOrderButton from "@/components/CreateNewOrderButton";
import CreateNewOrderModal from "@/components/CreateNewOrderModal";
import FilterByDate from "@/components/FilterByDate";
import ListItem from "@/components/ListItem";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useCallback, useEffect, useRef, useState } from "react";
import { FlatList, View } from "react-native";
import { List, Text } from "react-native-paper";

const HomeScreen = () => {
  const [ordersData, setOrderData] = useState<any>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => (res.ok ? res.json() : res.json()))
      .then((data) => setOrderData(data))
      .catch((err) => console.log(err));
  }, []);

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <CreateNewOrderModal modalProps={{ modalRef: bottomSheetModalRef }} />
      <CreateNewOrderButton onPress={handlePresentModalPress} />
      <FilterByDate />
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
