import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ShopSection = ({header, subHeader, next}) => {
    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <View style={styles.headerContainer}>
                    <Text style={styles.header}>{header? header: 'Header'}</Text>
                    <Text style={styles.subHeader}>{subHeader? subHeader: 'Sub Header'}</Text>
                </View>
                <TouchableOpacity style={styles.nextBtn}>
                    <Text style={styles.nextText}>View All</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center'
    },
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginVertical: 20
    },
    headerContainer: {

    },
    header: {
        color: 'black',
        fontSize: 40,
    },
    subHeader: {
        color: 'gray',
        fontSize: 18,
    },
    nextBtn: {

    },
    nextText : {
        fontSize: 16
    }
});

export default ShopSection;