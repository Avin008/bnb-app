import { Pressable, View } from "react-native";
import SelectDateInput from "./SelectDateInput";
import { Button } from "react-native-paper";

const CreateOrderForm = () => {
  return (
    <View style={{ gap: 10, paddingHorizontal: 20, paddingVertical: 10 }}>
      <SelectDateInput label="From" date={Date.now()} />
      <SelectDateInput label="To" date={Date.now()} />
      <View style={{ paddingVertical: 10 }}>
        <Button mode="contained">Search Available Items</Button>
      </View>
    </View>
  );
};

export default CreateOrderForm;
