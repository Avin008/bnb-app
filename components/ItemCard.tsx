import Colors from "@/constants/Colors";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity, View, useColorScheme } from "react-native";
import { Card, Text } from "react-native-paper";

type ItemCardProps = {
  id: string;
  name: string;
  price: number;
  total: number;
  available: number;
};

const ItemCard = ({ itemCardData }: { itemCardData: ItemCardProps }) => {
  const theme = useColorScheme();
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
          <MaterialIcons
            name="keyboard-arrow-right"
            size={25}
            color={theme === "dark" ? Colors.dark.text : Colors.light.text}
          />
        </View>
      </Card.Content>
    </Card>
  );
};

export default ItemCard;
