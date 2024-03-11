import { format } from "date-fns";
import { View } from "react-native";
import { Text, TextInput } from "react-native-paper";

const SelectDateInput = ({ label, date }: { label: string; date: number }) => {
  const dateStr = `${format(date, "EEEE")}, ${format(date, "d")} ${format(
    date,
    "LLLL"
  )}, ${format(date, "y")}`;
  return (
    <View style={{ display: "flex", gap: 5 }}>
      <Text variant="bodyLarge">{label}</Text>
      <TextInput
        editable={false}
        mode="outlined"
        right={<TextInput.Icon icon="calendar-range" />}
        value={dateStr}
      />
    </View>
  );
};

export default SelectDateInput;
