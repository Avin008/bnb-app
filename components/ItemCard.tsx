import Colors from "@/constants/Colors";
import { Image, View, useColorScheme } from "react-native";
import { Card, Text } from "react-native-paper";

type ItemCardProps = {
  id: string;
  name: string;
  price: number;
  img: string;
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
          alignItems: "center",
          gap: 30,
        }}
      >
        {false && (
          <View>
            <Image
              height={80}
              width={80}
              borderRadius={10}
              source={{ uri: itemCardData.img }}
            />
          </View>
        )}
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
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
            }}
          >
            <Text
              variant="bodySmall"
              style={{
                color: theme === "dark" ? "#cccc" : Colors.light.text,
              }}
            >
              Total: {itemCardData.total},
            </Text>
            <Text
              variant="bodySmall"
              style={{
                color: theme === "dark" ? "#cccc" : Colors.light.text,
              }}
            >
              Available: {itemCardData.available}
            </Text>
          </View>
        </View>
      </Card.Content>
    </Card>
  );
};

export default ItemCard;
