import { Text, TouchableOpacity, View } from "react-native";

const HomeScreen = ({navigation}) => {
    return (
        <View>
        <Text>Home Screen</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Shop')} ><Text>Shop</Text></TouchableOpacity>
        </View>
    );
};

export default HomeScreen;