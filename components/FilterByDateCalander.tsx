import Colors from "@/constants/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity, View } from "react-native";
import PagerView from "react-native-pager-view";
import { Text } from "react-native-paper";

const FilterByDate = () => {
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
              style={{
                display: "flex",
                borderRadius: 5,
                width: 50,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: i === 1 ? "#6eebf2" : "black",
              }}
            >
              <Text style={{ color: i === 1 ? "black" : "white" }}>
                {x.day}
              </Text>
              <Text
                style={{ color: i === 1 ? "black" : "white" }}
                variant="bodyLarge"
              >
                {x.dayNum}
              </Text>
            </View>
          ))}
        </View>
      </PagerView>
    </View>
  );
};

export default FilterByDate;
