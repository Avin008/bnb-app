import Colors from "@/constants/Colors";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity, View, useColorScheme } from "react-native";
import { Button, Card, Text } from "react-native-paper";

type ItemCardProps = {
  id: string;
  name: string;
  price: number;
  priceUnit: string;
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
        <View style={{ display: "flex", gap: 4 }}>
          <Text
            variant="bodyMedium"
            style={{
              fontWeight: "700",
            }}
          >
            {itemCardData.name}
          </Text>
          <Text
            variant="bodySmall"
            style={{
              fontWeight: "700",
              color: theme === "dark" ? "#cccc" : "#262626",
            }}
          >
            {itemCardData.price.toLocaleString("en-IN", {
              currency: "INR",
              style: "currency",
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}{" "}
            per {itemCardData.priceUnit}
          </Text>
          <Text
            variant="bodySmall"
            style={{
              color: theme === "dark" ? "#cccc" : Colors.light.text,
            }}
          >
            Total: {itemCardData.total}, Available: {itemCardData.available}
          </Text>
        </View>
      </Card.Content>
    </Card>
  );
};

export default ItemCard;
