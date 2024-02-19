import HomeScreen from "@/app/(tabs)";
import AccountScreen from "@/app/(tabs)/account";
import SearchScreen from "@/app/(tabs)/search";
import Colors from "@/constants/Colors";
import * as React from "react";
import { BottomNavigation, Text } from "react-native-paper";

const MusicRoute = () => <HomeScreen />;

const AlbumsRoute = () => <SearchScreen />;

const RecentsRoute = () => <AccountScreen />;

const BottomNavbar = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: "music",
      title: "Favorites",
      focusedIcon: "heart",
      unfocusedIcon: "heart-outline",
    },
    { key: "albums", title: "Albums", focusedIcon: "album" },
    { key: "recents", title: "Recents", focusedIcon: "history" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default BottomNavbar;
