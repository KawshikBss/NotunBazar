import { Text, View } from "react-native";
import Navbar from "../components/Navbar";
import { getRouteName } from "../Services/Utilities";

const CartScreen = ({navigation}) => {
    return (
        <View>
        <Text>Cart Screen</Text>
        <Navbar navigation={navigation} currentTab={'Cart'} />
        </View>
    );
};

export default CartScreen;