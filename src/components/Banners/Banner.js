import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

const Banner = ({ image, text, navigation, Top, Bottom, width = 200, height = 200 }) => {
  return (
    <TouchableOpacity
      style={styles.link}
      onPress={() => navigation.navigate("Shop")}
    >
      <ImageBackground
        style={{ ...styles.banner, width: width, height: height, justifyContent: Top? 'flex-start': Bottom? 'flex-end': "center"}}
        source={image}
      >
        <Text style={styles.bannerText}>{text}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  link: {},
  banner: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerText: {
    fontSize: 30,
    color: "#FFF",
    fontWeight: "bold",
    position: "relative",
    opacity: 0.8,
    textShadowColor: 'black',
    textShadowRadius: 7,
    padding: 20,
    textAlign: 'center',
  },
});

export default Banner;
