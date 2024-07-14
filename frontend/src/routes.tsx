import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './Home'; // Ensure this import path is correct
import Layout from './Layout'; // Ensure this import path is correct
import Terminal from './Terminal'; // Ensure this import path is correct

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>, // Use Layout as the main layout component
        children: [
            {
                index: true, // This means the default child route when path is "/"
                element: <Home/>, // Render Home component for the root path
            },
            {
                path: "terminal",
                element: <Terminal/>, // Render Terminal component for "/terminal" path
            },
        ],
    },
]);

const Routes = () => {
    return <RouterProvider router={router}/>;
};

export default Routes;
