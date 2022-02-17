import React from "react";

export interface IRoute {
    name: string,
    path: string,
    secured: boolean,
    exact: boolean
    component: React.ElementType
}