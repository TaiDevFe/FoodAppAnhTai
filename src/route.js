import { Component } from "react";
import { ROUTERS } from "./utils/router"
import { Route, Routes } from "react-router-dom";
import HomePage from "./assets/pages/users/homePage";
import MasterLayout from "./assets/pages/users/theme/masterLayout";
import ProfilePage from "./assets/pages/users/profilePage";


const renderUserRouter = () => {
    const userRouters = [{
        path: ROUTERS.USER.HOME,
        Component:<HomePage />,
    },
    {
        path: ROUTERS.USER.PROFILE,
        Component:<ProfilePage />,
    },
    {
        path: ROUTERS.USER.PRODUCTS,
        Component:<ProfilePage />,
    },
    ];
    return (
        <MasterLayout>
            <Routes>
            {
                userRouters.map((item, key) => (
                    <Route key={key} path={item.path} element={item.Component}></Route>
                ))
            }
            </Routes>
        </MasterLayout>
        
    )
}

const RouterCustom = () => {
    return renderUserRouter();
};
export default RouterCustom;