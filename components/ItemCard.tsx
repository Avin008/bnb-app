import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity, View } from "react-native";
import { Card, Text } from "react-native-paper";

type ItemCardProps = {
  id: string;
  name: string;
  price: number;
  total: number;
  available: number;
};

const ItemCard = ({ itemCardData }: { itemCardData: ItemCardProps }) => {
  return (
    <Card>
      <Card.Content
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View>
          <Text variant="titleMedium">{itemCardData.name}</Text>
          <Text variant="labelLarge">${itemCardData.price} per day</Text>
          <Text variant="labelLarge">
            Total: {itemCardData.total}, Available: {itemCardData.available}
          </Text>
        </View>
        <View>
          <MaterialIcons name="keyboard-arrow-right" size={25} />
        </View>
      </Card.Content>
    </Card>
  );
};

export default ItemCard;
