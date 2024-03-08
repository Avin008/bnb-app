import { View } from "react-native";
import PagerView from "react-native-pager-view";
import DatePicker from "./DatePicker";
import generateDatesForTheMonth from "@/utility/generateDatesForTheMonth";

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
          {generateDatesForTheMonth(6)?.map((dateData: any, i: number) => (
            <DatePicker date={dateData} key={i} />
          ))}
        </View>
      </PagerView>
    </View>
  );
};

export default FilterByDate;
