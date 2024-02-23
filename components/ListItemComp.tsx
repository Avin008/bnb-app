import { View } from "react-native";
import { List, Text } from "react-native-paper";

const ListItemComp = ({ x }: { x: { name: string; price: number } }) => {
  return (
    <List.Item
      style={{
        paddingHorizontal: 20,
      }}
      title={null}
      left={({ style, color }) => (
        <View style={style}>
          <Text variant="titleMedium">{x.name}</Text>
          <Text variant="titleSmall">Rs.{x.price} per day</Text>
        </View>
      )}
      right={({ style }) => (
        <View style={{ ...style, display: "flex", gap: 5 }}>
          <Text variant="labelMedium">{"Total Quantity: 200"}</Text>
          <Text variant="labelMedium">{"Available: 180"}</Text>
        </View>
      )}
    />
  );
};

export default ListItemComp;
