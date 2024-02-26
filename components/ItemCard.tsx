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
      <Card.Content>
        <Text variant="titleMedium">{itemCardData.name}</Text>
        <Text variant="labelLarge">${itemCardData.price} per day</Text>
        <Text variant="labelLarge">
          Total: {itemCardData.total}, Available: {itemCardData.available}
        </Text>
      </Card.Content>
    </Card>
  );
};

export default ItemCard;
