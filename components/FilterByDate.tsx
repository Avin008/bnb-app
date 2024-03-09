import { View } from "react-native";
import PagerView from "react-native-pager-view";
import DatePicker from "./DatePicker";
import generateDatesForTheMonth from "@/utility/generateDatesForTheMonth";
import { eachDayOfInterval } from "date-fns";
import { useState } from "react";

const FilterByDate = () => {
  const todaysDate = eachDayOfInterval({
    start: Date.now(),
    end: Date.now(),
  })[0];

  const [selectedDate, setSelectedDate] = useState(todaysDate);

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
            <DatePicker
              date={dateData}
              key={i}
              selectedDate={selectedDate}
              setSelectedDateHandler={setSelectedDate}
            />
          ))}
        </View>
      </PagerView>
    </View>
  );
};

export default FilterByDate;
