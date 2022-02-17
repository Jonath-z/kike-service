import React from "react";
import { Switch, BrowserRouter, Route,RouteComponentProps } from 'react-router-dom';
import { IRoute } from "../modules/types/route.interfce";

interface IProps {
    routes: IRoute[]
}

const Routes: React.FC<IProps> = ({ routes }) => {
    const render = (route: IRoute) => (
        <Route
            key={`route_${routes.indexOf(route)}`}
            exact={route.exact}
            path={route.path}
            render={(props: RouteComponentProps) => {
                if (route.name) {
                    document.title = route.name;
                }
                return <route.component {...props} />;
            }}
        />
    );
    return (
        <BrowserRouter>
            <Switch>{routes.map((route) => render(route))}</Switch>
        </BrowserRouter>
    );
};

export default Routes;