import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

const ProfileSection = ({ sectionName, next, items }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>{sectionName ? sectionName : "Section"}</Text>
                <TouchableOpacity style={styles.headerLink}>
                    <Text style={styles.headerLinkText}>{"View All >"}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.items}>
                {items ? (
                    items.map((item, index) => {
                        return (
                            <TouchableOpacity style={styles.itemContainer}>
                                <item.icon
                                    name={item.iconName}
                                    style={styles.itemIcon}
                                />
                                <Text style={styles.itemIconText}>{item.name}</Text>
                            </TouchableOpacity>
                        );
                    })
                ) : (
                    <Text>None</Text>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 10,
        borderBottomColor: '#232323',
        borderBottomWidth: 1,
    },
    headerText: {
        fontSize: 20,
        color: '#232323',
    },
    headerLink: {},
    headerLinkText: {
        fontSize: 16,
        color: '#DB3022',
    },
    items: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: 5
    },
    itemContainer: {
        alignItems: 'center',
        width: 66,
    },
    itemIcon: {
        fontSize: 30,
        color: '#DB3022',
    },
    itemIconText: {
        fontSize: 16,
        color: '#DB3022',
        textAlign: 'center',
    },
});

export default ProfileSection;
