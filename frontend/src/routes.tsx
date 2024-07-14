import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import App from './App';
import Terminal from './Terminal';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "terminal", // Ensure this matches exactly
                element: <Terminal/>,
            },
        ],
    },
]);

const Routes = () => {
    return <RouterProvider router={router}/>;
};

export default Routes;
