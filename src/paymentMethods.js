import { lazy } from "react";

const paymentMethods = [
    {
        name: 'Credit/Debit Card',
        icon: lazy(() => import('react-native-vector-icons/FontAwesome5')),
        iconName: 'credit-card',
    },
    {
        name: 'PayPal',
        icon: lazy(() => import('react-native-vector-icons/FontAwesome')),
        iconName: 'cc-paypal',
    },
    {
        name: 'Google Pay',
        icon: lazy(() => import('react-native-vector-icons/FontAwesome')),
        iconName: 'google',
    },
    {
        name: 'Amazon Pay',
        icon: lazy(() => import('react-native-vector-icons/FontAwesome')),
        iconName: 'amazon',
    },
    {
        name: 'Apple Pay',
        icon: lazy(() => import('react-native-vector-icons/Fontisto')),
        iconName: 'apple-pay',
    },
    {
        name: 'Cash On Delivery',
        icon: lazy(() => import('react-native-vector-icons/MaterialCommunityIcons')),
        iconName: 'cash-multiple',
    },
]

export default paymentMethods;