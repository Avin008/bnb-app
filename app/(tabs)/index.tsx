import OrderCard from "@/components/Card";
import CardComponent from "@/components/Card";
import CreateOrderButton from "@/components/CreateOrderButton";
import HeadingChips from "@/components/HeadingChips";
import { ScrollView, View } from "react-native";
import { Divider, Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  return (
    <View style={{ flex: 1, paddingVertical: 5 }}>
      <CreateOrderButton />
      <ScrollView>
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
