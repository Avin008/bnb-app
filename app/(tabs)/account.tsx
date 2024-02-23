import { View, Image } from "react-native";
import { Text, Card } from "react-native-paper";

const AccountScreen = () => {
  return (
    <View>
      <View
        style={{ display: "flex", alignItems: "center", padding: 20, gap: 5 }}
      >
        <Image
          source={{
            uri: "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
          }}
          borderRadius={50}
          width={80}
          height={80}
        />
        <Text variant="headlineMedium">John Doe</Text>
        <Text variant="titleSmall">You have the premium plan $200 / month</Text>
      </View>
      <View style={{ padding: 10, display: "flex", gap: 10 }}>
        <Card>
          <Card.Content>
            <Text variant="titleMedium">Change your plan</Text>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <Text variant="titleMedium">Company details</Text>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <Text variant="titleMedium">Logout</Text>
          </Card.Content>
        </Card>
      </View>
    </View>
  );
};

export default AccountScreen;
