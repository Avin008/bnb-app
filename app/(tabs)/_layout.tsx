import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: { height: 55, paddingBottom: 6 },
        tabBarActiveTintColor: "black",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "Orders",
          tabBarLabel: "Orders",
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="receipt" size={size} color={color} />
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="pickups"
        options={{
          headerTitle: "Pickups",
          tabBarLabel: "Pickups",
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="directions-walk" size={size} color={color} />
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="search"
        options={{
          headerTitle: "Search",
          tabBarLabel: "Search",
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="search" size={size} color={color} />
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="account"
        options={{
          headerTitle: "Account",
          tabBarLabel: "Account",
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="person" color={color} size={size} />
          ),
        }}
      ></Tabs.Screen>
    </Tabs>
  );
};

export default Layout;
