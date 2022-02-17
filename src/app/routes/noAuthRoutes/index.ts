import { IRoute } from "../../modules/types/route.interfce";
import noAuthRoute from "./noAuth.routes";

const appRoutes: IRoute[] = [
    ...noAuthRoute
]

export default appRoutes;