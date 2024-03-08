import Colors from "@/constants/Colors";
import { Pressable, View, useColorScheme } from "react-native";
import PagerView from "react-native-pager-view";
import { Text, useTheme } from "react-native-paper";

const FilterByDate = () => {
  const theme = useColorScheme();
  return (
    <View style={{ height: 80 }}>
      <PagerView style={{ flex: 1 }} initialPage={0}>
        <View
          key="1"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "stretch",
            justifyContent: "space-around",
            padding: 10,
          }}
        >
          {[
            { day: "SUN", dayNum: 1 },
            { day: "MON", dayNum: 2 },
            { day: "TUE", dayNum: 3 },
            { day: "WED", dayNum: 4 },
            { day: "THU", dayNum: 5 },
            { day: "FRI", dayNum: 6 },
            { day: "SAT", dayNum: 7 },
          ].map((x, i) => (
            <Pressable
              android_ripple={{ color: "#8ac5ef" }}
              unstable_pressDelay={200}
              key={i}
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
              <Text>{x.day}</Text>
              <Text variant="bodyLarge">{x.dayNum}</Text>
            </Pressable>
          ))}
        </View>
        <View
          key="2"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "stretch",
            justifyContent: "space-around",
            padding: 10,
          }}
        >
          {[
            { day: "SUN", dayNum: 8 },
            { day: "MON", dayNum: 9 },
            { day: "TUE", dayNum: 10 },
            { day: "WED", dayNum: 11 },
            { day: "THU", dayNum: 12 },
            { day: "FRI", dayNum: 13 },
            { day: "SAT", dayNum: 14 },
          ].map((x, i) => (
            <Pressable
              android_ripple={{ color: "#8ac5ef" }}
              unstable_pressDelay={200}
              key={i}
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
              <Text>{x.day}</Text>
              <Text variant="bodyLarge">{x.dayNum}</Text>
            </Pressable>
          ))}
        </View>
      </PagerView>
    </View>
  );
};

export default FilterByDate;
