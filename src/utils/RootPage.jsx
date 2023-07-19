import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar/SideBar";

const RootPage = () => {
    return (
        <Fragment>
            <SideBar />
            <Outlet />
        </Fragment>
    );
};

export default RootPage;
