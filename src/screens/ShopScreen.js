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
        <ShopSection header={'Sale'} subHeader={'Winter Sale'} items={products.sale} navigation={navigation} />
        <ShopSection header={'New'} subHeader={'New Collections'} items={products.new} navigation={navigation} />
      </ScrollView>
      <Navbar navigation={navigation} currentTab={"Shop"} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 470,
    backgroundColor: '#E9E9E9',
  },
});

export default ShopScreen;
