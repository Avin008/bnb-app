import React from "react";
import { View, StyleSheet, useColorScheme, Image } from "react-native";

import { CommonActions } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Text,
  BottomNavigation,
  MD3DarkTheme,
  MD3LightTheme,
} from "react-native-paper";
import HomeScreen from ".";
import {
  FontAwesome,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import SearchScreen from "./search";
import AccountScreen from "./account";
import AppBar from "@/components/AppBar";
import TopNavbar from "@/components/AppBar";
import Colors from "@/constants/Colors";

const Tab = createBottomTabNavigator();

export default function Layout() {
  const theme = useColorScheme();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        headerLeftContainerStyle: { paddingHorizontal: 20 },
        headerRightContainerStyle: { paddingHorizontal: 20 },
        headerStyle: {
          backgroundColor:
            theme === "dark"
              ? MD3DarkTheme.colors.background
              : MD3LightTheme.colors.background,
        },
        headerLeft: () => (
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
            }}
          >
            <Image
              source={{
                uri: "https://cdn3.iconfinder.com/data/icons/feather-5/24/codesandbox-512.png",
              }}
              width={30}
              height={30}
            />
            <Text
              variant="titleMedium"
              style={{
                fontWeight: "700",
              }}
            >
              RentSpace
            </Text>
          </View>
        ),
        headerTitle: "",
      }}
      tabBar={({ navigation, state, descriptors, insets }) => (
        <BottomNavigation.Bar
          navigationState={state}
          safeAreaInsets={insets}
          style={{
            backgroundColor:
              theme === "dark"
                ? MD3DarkTheme.colors.background
                : MD3LightTheme.colors.background,
          }}
          onTabPress={({ route, preventDefault }) => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (event.defaultPrevented) {
              preventDefault();
            } else {
              navigation.dispatch({
                ...CommonActions.navigate(route.name, route.params),
                target: state.key,
              });
            }
          }}
          renderIcon={({ route, focused, color }) => {
            const { options } = descriptors[route.key];
            if (options.tabBarIcon) {
              return options.tabBarIcon({ focused, color, size: 24 });
            }

            return null;
          }}
          getLabelText={({ route }) => {
            const { options } = descriptors[route.key];
            const label = route.name;
            return label;
          }}
        />
      )}
    >
      <Tab.Screen
        name="Orders"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => {
            return (
              <MaterialCommunityIcons
                name="receipt"
                size={size}
                color={color}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ color, size }) => {
            return <MaterialIcons name="search" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Items"
        component={AccountScreen}
        options={{
          tabBarLabel: "Items",
          tabBarIcon: ({ color, size }) => {
            return (
              <MaterialCommunityIcons
                name="truck-delivery"
                size={size}
                color={color}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarLabel: "Account",
          tabBarIcon: ({ color, size }) => {
            return (
              <MaterialCommunityIcons
                name="account"
                size={size}
                color={color}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
