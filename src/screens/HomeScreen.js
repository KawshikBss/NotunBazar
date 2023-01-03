import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Banner from "../components/Banners/Banner";
import HomeBanner from "../components/Banners/HomeBanner";
import Navbar from "../components/Navbar";
import { getRouteName } from "../Services/Utilities";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <ScrollView style={styles.container}>
        <HomeBanner navigation={navigation} />
        <View style={{ flexDirection: "row", marginVertical: 50 }}>
          <Banner
            height={400}
            image={require("../../assets/Christmas.jpg")}
            text={"New Collection"}
            navigation={navigation}
          />
          <View>
            <Banner
              width={170}
              image={require("../../assets/WinterCollection.jpg")}
              Top
              text={"Winter"}
              navigation={navigation}
            />
            <Banner
              width={170}
              image={require("../../assets/NewCollection.jpg")}
              Bottom
              text={"Christmas"}
              navigation={navigation}
            />
          </View>
        </View>
      </ScrollView>
      <Navbar navigation={navigation} currentTab={"Home"} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 470,
  },
});

export default HomeScreen;
