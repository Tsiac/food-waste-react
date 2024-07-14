import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import HomePage from "../pages/homepage/Homepage"
import Menu from "../pages/menu/Menu"
import MenuBrowse from "../pages/menu/MenuBrowse"
import Profile from "../pages/profile/Profile"
import Dish from "../pages/menu/Dish"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "", element: <HomePage />},
            { path: "menu", element: <Menu />},
            { path: "browsemenus", element: <MenuBrowse />},
            { path: "profile", element: <Profile />},
            { path: "dish", element: <Dish />},
        ]
    }
])