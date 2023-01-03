import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Navbar from "../components/Navbar";
import { getRouteName } from "../Services/Utilities";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Image
        style={styles.banner}
        source={{
          uri: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        }}
      />
      <Text style={styles.bannerText}>Searching For Something New</Text>
      <TouchableOpacity
        style={styles.shopLink}
        onPress={() => navigation.navigate("Shop")}
      >
        <Text style={styles.shopLinkText}>Go To Shop</Text>
      </TouchableOpacity>
      <Navbar navigation={navigation} currentTab={"Home"} />
    </View>
  );
};

const styles = StyleSheet.create({
  banner: {
    height: 470,
  },
  bannerText: {
    position: "absolute",
    bottom: 120,
    left: 30,
    color: "#FFF",
    fontSize: 40,
    width: 220,
    textShadowColor: "#000",
    textShadowRadius: 5,
  },
  shopLink: {
    position: "absolute",
    bottom: 70,
    left: 30,
    backgroundColor: "#DB3022",
    color: "#FFF",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    shadowColor: "#000",
    shadowRadius: 5,
  },
  shopLinkText: {
    fontSize: 20,
    color: "#FFF",
    fontWeight: "bold",
  },
});

export default HomeScreen;
