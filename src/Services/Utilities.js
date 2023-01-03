export const getRouteName = (navigation) => {
    const route = navigation?.getState()?.routes[0]?.name? navigation.getState().routes[0].name: '';
    console.log(route);
    return route;
}