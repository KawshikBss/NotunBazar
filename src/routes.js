import { lazy } from "react";

const routes = [
    {
        name: 'Home',
        icon: lazy(() => import('react-native-vector-icons/FontAwesome')),
        iconName: 'home'
    },
    {
        name: 'Shop',
        icon: lazy(() => import('react-native-vector-icons/FontAwesome')),
        iconName: 'shopping-cart'
    },
    {
        name: 'Cart',
        icon: lazy(() => import('react-native-vector-icons/FontAwesome')),
        iconName: 'shopping-bag'
    },
    {
        name: 'Profile',
        icon: lazy(() => import('react-native-vector-icons/FontAwesome')),
        iconName: 'user'
    }
];

export default routes;
