import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const SplashScreen = ({ navigation }) => {
  return (
    <ImageBackground
      style={styles.container}
      source={require("../../assets/SplashImage.jpg")}
    >
      <View>
        <Text style={styles.welcomeText}>Wellcome to</Text>
        <Text style={styles.logo}>NatunBazar</Text>
        <TouchableOpacity
          style={styles.homeBtn}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.homeBtnText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: "cover",
  },
  welcomeText: {
    fontSize: 30,
    color: "white",
    fontWeight: "700",
    position: "relative",
    left: 10,
    top: 100,
    textShadowColor: 'black',
    textShadowRadius: 5,
  },
  logo: {
    fontSize: 50,
    color: "#FFF",
    fontWeight: "bold",
    position: "relative",
    left: 10,
    top: 100,
    textShadowColor: '#DB3022',
    textShadowRadius: 15,
  },
  homeBtn: {
    color: "white",
    backgroundColor: "#DB3022",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    padding: 5,
    borderRadius: 10,
    position: "relative",
    top: 350,
  },
  homeBtnText: {
    fontSize: 20,
    color: "white",
  },
});

export default SplashScreen;
