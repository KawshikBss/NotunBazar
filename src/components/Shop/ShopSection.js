import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import products from "../../products";
import Card from "./Card";

const ShopSection = ({ header, subHeader, next, items }) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>{header ? header : "Header"}</Text>
          <Text style={styles.subHeader}>
            {subHeader ? subHeader : "Sub Header"}
          </Text>
        </View>
        <TouchableOpacity style={styles.nextBtn}>
          <Text style={styles.nextText}>View All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal style={styles.itemsContainer}>
        {
            items?
            items.map((item) => {
                return (<Card key={item.id} product={item} />)
            }):
            <Text>No Products</Text>
        }
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 200,
  },
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
    paddingHorizontal: 10,
    marginVertical: 20,
  },
  headerContainer: {},
  header: {
    color: "black",
    fontSize: 40,
  },
  subHeader: {
    color: "gray",
    fontSize: 18,
  },
  itemsContainer: {
    height: 320,
  },
  nextBtn: {},
  nextText: {
    fontSize: 16,
  },
});

export default ShopSection;
