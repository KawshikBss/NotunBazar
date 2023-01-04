import { lazy } from 'react';

const sections = {
    order: [
        {
            name: 'To Pay',
            icon: lazy(() => import('react-native-vector-icons/FontAwesome5')),
            iconName: 'money-check-alt',
            route: 'toPay',
        },
        {
            name: 'To Ship',
            icon: lazy(() => import('react-native-vector-icons/FontAwesome5')),
            iconName: 'shipping-fast',
            route: 'toShip',
        },
        {
            name: 'To Receive',
            icon: lazy(() => import('react-native-vector-icons/MaterialCommunityIcons')),
            iconName: 'package-down',
            route: 'toReceive',
        },
        {
            name: 'To Review',
            icon: lazy(() => import('react-native-vector-icons/MaterialIcons')),
            iconName: 'rate-review',
            route: 'toReview',
        }
    ],
    services: [
        {
            name: 'My Messages',
            icon: lazy(() => import('react-native-vector-icons/MaterialIcons')),
            iconName: 'message',
            route: 'messages',
        },
        {
            name: 'Payment Options',
            icon: lazy(() => import('react-native-vector-icons/Entypo')),
            iconName: 'paypal',
            route: 'payment',
        },
        {
            name: 'Help',
            icon: lazy(() => import('react-native-vector-icons/Entypo')),
            iconName: 'help-with-circle',
            route: 'help',
        },
        {
            name: 'Customer Care',
            icon: lazy(() => import('react-native-vector-icons/AntDesign')),
            iconName: 'customerservice',
            route: 'customerCare',
        }
    ]
};

export default sections;
