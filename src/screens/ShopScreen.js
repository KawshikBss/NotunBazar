import { Text, View } from "react-native";
import Navbar from "../components/Navbar";
import { getRouteName } from "../Services/Utilities";

const ShopScreen = ({navigation}) => {
    return (
        <View>
        <Text>Shop Screen</Text>
        <Navbar currentTab={getRouteName(navigation)} />
        </View>
    );
};

export default ShopScreen;