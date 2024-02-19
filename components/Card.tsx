import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as React from "react";
import { Image, Pressable, useColorScheme } from "react-native";
import { Card, MD3DarkTheme, MD3LightTheme } from "react-native-paper";

const LeftContent = (props: any) => (
  <MaterialCommunityIcons color={"white"} name="receipt" size={25} />
);

const OrderCard = () => {
  const theme = useColorScheme();
  return (
    <Pressable
      onPress={() => console.log("Pressed")}
      android_ripple={{
        color:
          theme === "dark"
            ? MD3DarkTheme.colors.secondaryContainer
            : MD3LightTheme.colors.secondaryContainer,
      }}
      unstable_pressDelay={150}
    >
      <Card
        style={{ backgroundColor: "transparent", shadowColor: "transparent" }}
      >
        <Card.Title
          titleVariant="titleMedium"
          title={`Avinash Mahananda`}
          subtitle="Status: Pending"
          left={() => (
            <Image
              width={50}
              height={50}
              borderRadius={100}
              style={{
                objectFit: "cover",
              }}
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDVJZSsFRquEhWK_qlau6Lr6jN4hLhkzSmyg&usqp=CAU",
              }}
            />
          )}
          leftStyle={{ marginRight: 30 }}
          rightStyle={{ marginRight: 20 }}
        />
      </Card>
    </Pressable>
  );
};

export default OrderCard;
