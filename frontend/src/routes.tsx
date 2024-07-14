// routes.tsx
import React from 'react';
import {createBrowserRouter, RouteObject, RouterProvider} from 'react-router-dom';
import App from './App';
import Terminal from './Terminal';

// Define route objects
const routes: RouteObject[] = [
    {
        path: '/',
        element: <App/>,
    },
    {
        path: '/terminal',
        element: <Terminal/>,
    },
];

// Create the router instance
const router = createBrowserRouter(routes);

const Routes = () => {
    return <RouterProvider router={router}/>;
};

export default Routes;
