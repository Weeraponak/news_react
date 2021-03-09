import React from "react";
import Home from "./objects/Home";
import Data from "./objects/Data";
import Factory from "./objects/Factory";

const routes = [
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/data",
        element: <Data />,
    },
    {
        path: "/factory",
        element: <Factory />,
    },
];
export default routes;