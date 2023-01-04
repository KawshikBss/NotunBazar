import { ScrollView, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from "react-native";
import CartItem from "../components/CartItem";
import Navbar from "../components/Navbar";
import products from "../products";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { getRouteName } from "../Services/Utilities";

const CartScreen = ({ navigation }) => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.heading}>My Cart</Text>
        <ScrollView style={styles.itemsContainer}>
          {products?.new ? (
            products.new.map((item, index) => {
              return <CartItem item={item} key={index} />;
            })
          ) : (
            <Text>'No Items In Cart'</Text>
          )}
        </ScrollView>
        <View style={styles.promoWrapper}>
            <TextInput style={styles.promoInput} placeholder={'Enter your promo code'} />
            <TouchableOpacity style={styles.promoBtn}>
                <FontAwesome5 style={styles.promoBtnText} name="chevron-circle-right" />
            </TouchableOpacity>
        </View>
        <View style={styles.priceWrapper}>
            <Text style={styles.priceText}>Total amount:</Text>
            <Text style={styles.totalPrice}>0$</Text>
        </View>
        <TouchableOpacity style={styles.checkoutBtn}>
            <Text style={styles.checkoutBtnText}>Checkout</Text>
        </TouchableOpacity>
      </View>
      <Navbar navigation={navigation} currentTab={"Cart"} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 470,
    backgroundColor: '#E9E9E9',
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    marginHorizontal: 10,
    marginVertical: 5,
  },
  itemsContainer: {
    height: 240,
  },
  promoWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  promoInput: {
    backgroundColor: 'white',
    color: 'gray',
    marginHorizontal: 10,
    borderRadius: 10,
    padding: 5,
     flex: 1,
  },
  promoBtn: {
    backgroundColor: 'white',
    position: 'absolute',
    // left: -20,
    right: 3,
    borderRadius: 50
  },
  promoBtnText: {
    fontSize: 40,
    color: '#232323',
  },
  priceWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginBottom: 5,
    // flex: 1,
  },
  priceText: {
    color: 'gray',
    fontSize: 20,
  },
  totalPrice: {
    color: 'black',
    fontSize: 20,
},
  checkoutBtn: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DB3022',
    marginHorizontal: 10,
    marginTop: 5,
    marginBottom: 20,
    paddingVertical: 5,
    borderRadius: 10,
  },
  checkoutBtnText: {
    fontSize: 20,
    color: 'white',

  },
});

export default CartScreen;
