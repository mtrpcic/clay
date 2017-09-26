import authRoutes from './auth';

function buildRouteObjects(routes) {
    return Object.keys(routes).map(key => {
        let [verb, url] = key.toLowerCase().split(" ");
        let action = routes[key];
        return { verb, url, action };
    });
}

let routes = [];
routes = buildRouteObjects(authRoutes);
export default routes;