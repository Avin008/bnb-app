import Colors from "@/constants/Colors";
import { View, useColorScheme } from "react-native";
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
            <View
              key={i}
              style={{
                display: "flex",
                borderRadius: 5,
                width: 50,
                alignItems: "center",
                justifyContent: "center",
                borderWidth: 0.4,
                backgroundColor:
                  theme === "light" ? Colors.dark.tint : Colors.light.tint,
              }}
            >
              <Text>{x.day}</Text>
              <Text variant="bodyLarge">{x.dayNum}</Text>
            </View>
          ))}
        </View>
      </PagerView>
    </View>
  );
};

export default FilterByDate;
