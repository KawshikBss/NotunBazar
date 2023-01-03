import { ImageBackground, StyleSheet, Text } from "react-native";

const ShopBanner = () => {
  return (
    <ImageBackground
      style={styles.banner}
      source={require("../../../assets/ShopBanner.jpg")}
    >
      <Text style={styles.bannerText}>Pick Your Choice</Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  banner: {
    width: 470,
    height: 270,
    resizeMode: "cover",
    alignSelf: "flex-end",
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  bannerText: {
    fontSize: 30,
    color: '#FFF',
    textShadowColor: '#000',
    textShadowRadius: 5,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10
  }
});

export default ShopBanner;
