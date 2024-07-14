import React from 'react';
import {Outlet} from 'react-router-dom';
import "./Layout.css"
import Header from "./Header";

const Layout = () => {
    return (
        <div className="container">
            <Header/>
            <Outlet/>
        </div>
    );
};

export default Layout;
