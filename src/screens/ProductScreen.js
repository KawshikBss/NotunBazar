import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Fontisto from "react-native-vector-icons/Fontisto";

const ProductScreen = ({ route, navigaton }) => {
  const { product } = route.params;
  console.log(route);
  return (
    <ScrollView style={styles.container}>
      <Image source={product.image} style={styles.image} />
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <Text style={styles.title}>
            {product?.title ? product.title : "Title"}
          </Text>
          <Text style={styles.price}>
            ${product?.price ? product.price : "0"}
          </Text>
        </View>
        <View style={styles.ratingContainer}>
          <Fontisto style={styles.rating} name="star" />
          <Fontisto style={styles.rating} name="star" />
          <Fontisto style={styles.rating} name="star" />
          <Fontisto style={styles.rating} name="star" />
          <Fontisto style={styles.rating} name="star" />
        </View>
        <Text style={styles.description}>
          {product?.description ? product.description : "Description"}
        </Text>
      </View>
      <TouchableOpacity style={styles.cartBtn}>
        <Text style={styles.cartBtnText}>Add To Cart</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
  image: {
    width: 500,
    height: 400,
    resizeMode: "contain",
    alignSelf: "center",
    backgroundColor: "#E7E7E7",
  },
  wrapper: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 30,
  },
  price: {
    fontSize: 30,
  },
  ratingContainer: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  rating: {
    color: "#FFBA49",
    fontSize: 16,
    marginRight: 2,
  },
  description: {
    color: "gray",
    fontSize: 18,
  },
  cartBtn: {
    backgroundColor: "#DB3022",
    paddingVertical: 10,
    paddingHorizontal: 80,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    margin: 10
  },
  cartBtnText: {
    fontSize: 18,
    color: "white",
  },
});

export default ProductScreen;
