import CreateOrderForm from "@/components/CreateOrderForm";
import SelectDateInput from "@/components/SelectDateInput";
import Colors from "@/constants/Colors";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import { View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Button, Divider, Text, TextInput } from "react-native-paper";

const CreateScreenScreen = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Stack.Screen options={{ headerTitle: "Create New Order" }} />
        <CreateOrderForm />
        <Divider />
      </View>
    </GestureHandlerRootView>
  );
};

export default CreateScreenScreen;
