import { Text, View, Image, StyleSheet, ScrollView } from "react-native";
import ShopBanner from "../components/Banners/ShopBanner";
import Navbar from "../components/Navbar";
import ShopSection from "../components/Shop/ShopSection";
import { getRouteName } from "../Services/Utilities";
import products from "../products";

const ShopScreen = ({ navigation }) => {
  return (
    <View>
      <ScrollView style={styles.container}>
        <ShopBanner />
        <ShopSection header={'Sale'} subHeader={'Winter Sale'} items={products.sale} />
        <ShopSection header={'New'} subHeader={'New Collections'} items={products.new} />
      </ScrollView>
      <Navbar navigation={navigation} currentTab={"Shop"} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 470,
  },
});

export default ShopScreen;
