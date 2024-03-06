import Colors from "@/constants/Colors";
import convertDateToTime from "@/utility/convertDateToTime";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Pressable,
  Touchable,
  TouchableOpacity,
  View,
  useColorScheme,
} from "react-native";
import {
  Button,
  Chip,
  List,
  MD3DarkTheme,
  MD3LightTheme,
  Text,
} from "react-native-paper";

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
        description={() => (
          <View style={{ display: "flex", gap: 5 }}>
            <Text variant="bodySmall">
              Delivery {convertDateToTime(new Date())}
            </Text>
            <Chip>
              {Math.floor(Math.random() * 10) > 5
                ? " Ready for Pickup"
                : "Delivered"}
            </Chip>
          </View>
        )}
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
