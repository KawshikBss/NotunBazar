import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import routes from "../routes";

const Navbar = ({ navigation, currentTab = 'Home' }) => {
  const getNavStatus = (navName) => {
    return navName === currentTab ? styles.navActive : styles.navIcon;
  };
  const changeNav = (navName) => {
    if (navName === currentTab || navName.length === 0) return;
    navigation.navigate(navName);
  };
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.name}
        data={routes}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              changeNav(item.name);
            }}
            style={styles.navBtn}
          >
            <item.icon style={getNavStatus(item.name)} name={item.iconName} />
          </TouchableOpacity>
        )}
        numColumns={routes.length}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    position: "absolute",
    bottom: -40,
    left: 0,
    right: 0,
    backgroundColor: "#FFF",
    height: 50,
    alignItems: "center",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  navBtn: {
    flex: 1,
    alignItems: "center",
  },
  navIcon: {
    fontSize: 25,
    color: "#232323",
    opacity: 0.5,
  },
  navActive: {
    fontSize: 25,
    color: "#DB3022",
    opacity: 1,
  },
});

export default Navbar;
