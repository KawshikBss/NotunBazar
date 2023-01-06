import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import SettingsSection from "../components/SettingsSection";

const SettingsScreen = ({ navigation }) => {
    const handleSave = () => {
        navigation.navigate("Profile");
    };
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Settings</Text>
            <View style={styles.wrapper}>
                <Text style={styles.heading}>Personal Details:</Text>
                <SettingsSection title={"Name"} value={""} />
                <SettingsSection title={"Phone"} value={""} />
                <SettingsSection title={"Email"} value={""} />
                <SettingsSection title={"Address"} value={""} />
            </View>
            <View style={styles.wrapper}>
                <Text style={styles.heading}>Security:</Text>
                <SettingsSection title={"Password"} value={""} />
                <SettingsSection title={"Confirm Password"} value={""} />
            </View>
            <TouchableOpacity style={styles.saveBtn} onPress={handleSave}>
                <Text style={styles.saveBtnText}>Save Changes</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#F9F9F9",
    },
    header: {
        fontSize: 40,
        color: "#232323",
        marginLeft: 10,
    },
    wrapper: {},
    heading: {
        marginLeft: 10,
        fontSize: 20,
        color: "#232323",
    },
    saveBtn: {
        color: "white",
        backgroundColor: "#DB3022",
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 5,
        marginVertical: 10,
        padding: 5,
        borderRadius: 10,
    },
    saveBtnText: {
        fontSize: 20,
        color: "white",
    },
});
export default SettingsScreen;
