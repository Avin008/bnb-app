import { View } from "react-native";
import PagerView from "react-native-pager-view";
import DatePicker from "./DatePicker";

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
            {
              id: "1",
              dayOfTheWeek: "SUN",
              dateOfTheMonth: new Date().getDate(),
            },
            {
              id: "2",
              dayOfTheWeek: "MON",
              dateOfTheMonth: new Date().getDate() + 1,
            },
            {
              id: "3",
              dayOfTheWeek: "TUE",
              dateOfTheMonth: new Date().getDate() + 2,
            },
            {
              id: "4",
              dayOfTheWeek: "WED",
              dateOfTheMonth: new Date().getDate() + 3,
            },
            {
              id: "5",
              dayOfTheWeek: "THU",
              dateOfTheMonth: new Date().getDate() + 4,
            },
            {
              id: "6",
              dayOfTheWeek: "FRI",
              dateOfTheMonth: new Date().getDate() + 5,
            },
            {
              id: "7",
              dayOfTheWeek: "SAT",
              dateOfTheMonth: new Date().getDate() + 6,
            },
          ]?.map((dateData: any, i: number) => (
            <DatePicker datePickerData={dateData} key={i} />
          ))}
        </View>
      </PagerView>
    </View>
  );
};

export default FilterByDate;
