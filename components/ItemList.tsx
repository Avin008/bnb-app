import { ScrollView, View } from "react-native";
import { List, Text } from "react-native-paper";
import ListItemComp from "./ListItemComp";

const ItemList = () => {
  const dummyData = [
    { name: "Chair", price: 20 },
    { name: "Bucket", price: 20 },
    { name: "Water Drum", price: 20 },
    { name: "Light", price: 20 },
    { name: "Dekchi", price: 20 },
    { name: "Parda", price: 20 },
    { name: "Parat", price: 20 },
    { name: "Tasla", price: 20 },
    { name: "Patia", price: 20 },
    { name: "Mat", price: 20 },
    { name: "Jug", price: 20 },
  ];
  return (
    <ScrollView>
      <List.Section>
        <List.Subheader>Your Items</List.Subheader>
        {dummyData?.map((x, i) => (
          <ListItemComp x={x} key={i} />
        ))}
      </List.Section>
    </ScrollView>
  );
};

export default ItemList;
