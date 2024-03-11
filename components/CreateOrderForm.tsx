import { View } from "react-native";
import SelectDateInput from "./SelectDateInput";
import { Button, TextInput } from "react-native-paper";

const CreateOrderForm = () => {
  return (
    <View
      style={{
        display: "flex",
        gap: 10,
        padding: 15,
      }}
    >
      <SelectDateInput label="From" date={Date.now()} />
      <SelectDateInput label="To" date={Date.now()} />
      <View style={{ paddingVertical: 10 }}>
        <Button mode="contained">Check Available Items</Button>
      </View>
    </View>
  );
};

export default CreateOrderForm;
