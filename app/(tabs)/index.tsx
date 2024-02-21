import CreateOrderButton from "@/components/CreateOrderButton";
import OrderList from "@/components/OrderList";
import { ScrollView, View } from "react-native";

const HomeScreen = () => {
  return (
    <View style={{ flex: 1, paddingVertical: 5 }}>
      <CreateOrderButton />
      <ScrollView>
        <OrderList heading="Today's Orders" />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
