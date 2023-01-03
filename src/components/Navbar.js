import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import routes from "../routes";
import { getRouteName } from "../Services/Utilities";

const Navbar = ({ navigation, currentTab = 'Home' }) => {
  const [activeNav, setActiveNav] = useState(currentTab);
  const getNavStatus = (navName) => {
    return navName === activeNav ? styles.navActive : styles.navIcon;
  };
  const changeNav = (navName) => {
    if (navName === activeNav || navName.length === 0) return;
    setActiveNav(navName);
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
              navigation.navigate(item.name);
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
    color: "#700D05",
    opacity: 0.5,
  },
  navActive: {
    fontSize: 25,
    color: "#DB3022",
    opacity: 1,
  },
});

export default Navbar;
