import * as React from "react";
import { Chip } from "react-native-paper";

const HeadingChips = ({ name }: { name: string }) => (
  <Chip
    icon="information"
    mode="outlined"
    onPress={() => console.log("Pressed")}
  >
    {name}
  </Chip>
);

export default HeadingChips;
