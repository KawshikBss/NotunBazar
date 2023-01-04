import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    ImageBackground,
    TouchableOpacity,
} from "react-native";
import React from "react";
import Navbar from "../components/Navbar";
import ProfileSection from "../components/ProfileSection";
import sections from "../profileSections";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";

const ProfileScreen = ({ navigation, user }) => {
    return (
        <View>
            <View style={styles.container}>
                <View style={styles.headerImage}>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                        }}
                    >
                        <Text style={styles.heading}>My Profile</Text>
                        <TouchableOpacity>
                            <Ionicons
                                style={styles.settingIcon}
                                name="ios-settings-outline"
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.header}>
                        <Image
                            style={styles.image}
                            source={require("../../assets/Profile.png")}
                        />
                        <View style={styles.infoWrapper}>
                            <Text style={styles.name}>
                                {user?.name ? user.name : "Elon Musk"}
                            </Text>
                            <Text style={styles.infoText}>
                                {user?.phone ? user.phone : "+011110001"}
                            </Text>
                            <Text style={styles.infoText}>
                                {user?.email ? user.email : "musk@elon.tesla"}
                            </Text>
                            <Text style={styles.infoText}>
                                {user?.address
                                    ? user.address
                                    : "Musk Land, Mars"}
                            </Text>
                        </View>
                    </View>
                </View>
                <ScrollView style={styles.sections}>
                    <ProfileSection
                        sectionName={"My Orders"}
                        items={sections.order}
                    />
                    <View style={{flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 10}}>
                        <TouchableOpacity style={styles.item}>
                            <AntDesign style={styles.itemIcon} name="heart"/>
                            <Text style={styles.itemIconText}>Wishlist</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.item}>
                            <Entypo style={styles.itemIcon} name="ticket"/>
                            <Text style={styles.itemIconText}>Coupons</Text>
                        </TouchableOpacity>
                    </View>
                    <ProfileSection
                        sectionName={"My Services"}
                        items={sections.services}
                    />
                </ScrollView>
            </View>
            <Navbar navigation={navigation} currentTab={"Profile"} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 470,
        backgroundColor: "#E9E9E9",
    },
    heading: {
        fontSize: 35,
        color: "#232323",
        fontWeight: "700",
        marginHorizontal: 10,
    },
    settingIcon: {
        fontSize: 25,
        color: "#FFF",
        fontWeight: "700",
        padding: 10,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 20,
        marginHorizontal: 10,
    },
    headerImage: {
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        backgroundColor: "#DB3022",
        borderBottomWidth: 4,
        borderRightWidth: 2,
        borderLeftWidth: 2,
        borderColor: '#232323',
    },
    image: {
        height: 120,
        width: 120,
        resizeMode: "cover",
        borderRadius: 120,
        borderWidth: 2,
        borderColor: '#232323',
    },
    infoWrapper: {
        flex: 1,
        marginLeft: 20,
        padding: 10,
        borderRadius: 10,
    },
    name: {
        color: "#232323",
        fontSize: 20,
        fontWeight: "bold",
    },
    infoText: {
        color: "#D9D9D9",
        fontSize: 18,
        fontWeight: "bold",
    },
    item: {
        alignItems: 'center',
        width: 66,
    },
    itemIcon: {
        fontSize: 20,
        color: '#232323',
    },
    itemIconText: {
        fontSize: 16,
        color: '#232323',
        textAlign: 'center',
    },
    sections: {},
});

export default ProfileScreen;
