import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Pressable, View, useColorScheme } from "react-native";
import { List, MD3DarkTheme, MD3LightTheme } from "react-native-paper";

const ListItem = ({ name }: { name: string }) => {
  const theme = useColorScheme();
  return (
    <Pressable
      android_ripple={{
        color:
          theme === "dark"
            ? MD3DarkTheme.colors.onSecondary
            : MD3LightTheme.colors.onSecondary,
      }}
      unstable_pressDelay={200}
    >
      <List.Item
        titleStyle={{ fontSize: 18 }}
        title={name}
        descriptionNumberOfLines={2}
        description={
          "Join us for an enchanting evening under the stars, celebrating love and unity with music, laughter, and cherished memories."
        }
        left={({ color, style }) => (
          <MaterialCommunityIcons
            name="truck"
            color={color}
            size={25}
            style={style}
          />
        )}
      />
    </Pressable>
  );
};

export default ListItem;
