import Colors from "@/constants/Colors";
import { eachDayOfInterval, format } from "date-fns";
import { useState } from "react";
import { Pressable, useColorScheme } from "react-native";
import { Text } from "react-native-paper";

const DatePicker = ({ date }: { date: Date }) => {
  const theme = useColorScheme();

  const todaysDate = eachDayOfInterval({
    start: Date.now(),
    end: Date.now(),
  })[0];

  const [selectedDate, setSelectedDate] = useState(todaysDate);

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
        backgroundColor:
          theme === "light"
            ? selectedDate.toString() === date.toString()
              ? Colors.light.tint
              : Colors.dark.tint
            : selectedDate.toString() === date.toString()
            ? Colors.light.tint
            : "black",
      }}
    >
      <Text
        style={{
          color:
            theme === "dark"
              ? selectedDate.toString() === date.toString()
                ? "white"
                : "white"
              : selectedDate.toString() === date.toString()
              ? "white"
              : "black",
        }}
      >
        {format(date, "eee").toUpperCase()}
      </Text>
      <Text
        style={{
          color:
            theme === "dark"
              ? selectedDate.toString() === date.toString()
                ? "white"
                : "white"
              : selectedDate.toString() === date.toString()
              ? "white"
              : "black",
        }}
        variant="bodyLarge"
      >
        {format(date, "d")}
      </Text>
    </Pressable>
  );
};

export default DatePicker;
