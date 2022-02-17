import Home from "../../initials/noAuth/Home";
import Shop from "../../initials/noAuth/Shop";
import { IRoute } from "../../modules/types/route.interfce";

const noAuthRoute:IRoute[] = [
    {
        name: 'Home',
        path: '/',
        secured: false,
        exact: true,
        component: Home
    },
    {
        name: 'Shop',
        path: '/shop',
        secured: false,
        exact: false,
        component: Shop
    }
]

export default noAuthRoute;