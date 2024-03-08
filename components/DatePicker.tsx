import Colors from "@/constants/Colors";
import { Pressable, useColorScheme } from "react-native";
import { Text } from "react-native-paper";

type DatePickerPropsType = {
  id: string;
  dayOfTheWeek: string;
  dateOfTheMonth: string;
};

const DatePicker = ({
  datePickerData,
}: {
  datePickerData: DatePickerPropsType;
}) => {
  const theme = useColorScheme();
  return (
    <Pressable
      android_ripple={{ color: "#8ac5ef" }}
      unstable_pressDelay={200}
      style={{
        display: "flex",
        borderRadius: 5,
        width: 50,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 0.4,
        backgroundColor: theme === "light" ? Colors.dark.tint : "black",
      }}
    >
      <Text>{datePickerData.dayOfTheWeek}</Text>
      <Text variant="bodyLarge">{datePickerData.dateOfTheMonth}</Text>
    </Pressable>
  );
};

export default DatePicker;
