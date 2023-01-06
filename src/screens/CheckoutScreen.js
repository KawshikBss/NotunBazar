import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from "react-native";
import React from "react";
import paymentMethods from "../paymentMethods";

const CheckoutScreen = () => {
    return (
        <View>
            <View style={styles.header}>
                <Text style={styles.heading}>Shipping Address</Text>
                <TouchableOpacity>
                    <Text style={styles.changeBtn}>Change</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.shippingAddContainer}>
                <Text style={styles.shippingName}>Elon Musk</Text>
                <Text style={styles.shippingPhone}>+ 011001111001</Text>
                <Text style={styles.shippingAdd}>Musk Land, Mars</Text>
            </View>
            <Text style={styles.heading}>Payment Method</Text>
            <ScrollView style={styles.paymentMethodsContainer}>
                {paymentMethods ? (
                    paymentMethods.map((item, index) => {
                        return (
                            <View
                                key={index}
                                style={styles.paymentMethodSection}
                            >
                                <item.icon
                                    name={item.iconName}
                                    style={styles.paymentMethodIcon}
                                />
                                <Text style={styles.paymentMethodText}>
                                    {item.name}
                                </Text>
                            </View>
                        );
                    })
                ) : (
                    <Text>None</Text>
                )}
            </ScrollView>
            <Text style={styles.heading}>Shipping Method</Text>
            <View style={styles.deliveryMethodsContainer}>
                <Image source={require('../../assets/Fedex.png')} style={styles.deliveryMethod} />
                <Image source={require('../../assets/Usps.png')} style={styles.deliveryMethod} />
                <Image source={require('../../assets/Dhl.png')} style={styles.deliveryMethod} />
            </View>
            <View style={styles.priceWrapper}>
                <View style={styles.priceScetion}>
                    <Text style={styles.priceType}>Order:</Text>
                    <Text style={styles.priceAmount}>100$</Text>
                </View>
                <View style={styles.priceScetion}>
                    <Text style={styles.priceType}>Delivery:</Text>
                    <Text style={styles.priceAmount}>10$</Text>
                </View>
                <View style={styles.priceScetion}>
                    <Text style={styles.priceType}>Summary:</Text>
                    <Text style={styles.priceAmount}>110$</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.submitBtn}>
                <Text style={styles.submitBtnText}>Submit Order</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#F9F9F9",
    },
    heading: {
        fontSize: 20,
        color: "#232323",
        marginLeft: 10,
        marginTop: 5,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    changeBtn: {
        color: "#DB3022",
        fontSize: 18,
        marginRight: 10,
    },
    shippingAddContainer: {
        backgroundColor: "white",
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop: 10,
        borderRadius: 10,
        marginHorizontal: 10,
    },
    shippingName: {
        fontSize: 18,
        color: "#232323",
        marginBottom: 5,
    },
    shippingPhone: {
        fontSize: 16,
        color: "#232323",
    },
    shippingAdd: {
        fontSize: 16,
        color: "#232323",
    },
    paymentMethodsContainer: {
        marginTop: 5,
        height: 100,
    },
    paymentMethodSection: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "white",
        paddingVertical: 5,
        paddingHorizontal: 5,
        borderRadius: 10,
        marginTop: 5,
        marginHorizontal: 10,
    },
    paymentMethodIcon: {
        fontSize: 14,
        color: "$232323",
    },
    paymentMethodText: {
        fontSize: 14,
        color: "$232323",
    },
    deliveryMethodsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 10,
        marginVertical: 5,
    },
    deliveryMethod: {
        width: 100,
        height: 72,
        resizeMode: 'contain',
        borderRadius: 20,
    },
    priceWrapper: {
        marginHorizontal: 10,
        marginVertical: 5,
        backgroundColor: "white",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    priceScetion: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    priceType: {
        color: "gray",
        fontSize: 18,
    },
    priceAmount: {
        color: "#DB3022",
        fontSize: 18,
    },
    submitBtn: {
        // flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#DB3022",
        marginHorizontal: 10,
        marginTop: 5,
        marginBottom: 20,
        paddingVertical: 5,
        borderRadius: 50,
    },
    submitBtnText: {
        fontSize: 20,
        color: "white",
    },
});

export default CheckoutScreen;
