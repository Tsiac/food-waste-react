import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import HomePage from "../pages/homepage/Homepage"
import Menu from "../pages/menu/Menu"
import MenuBrowse from "../pages/menu/MenuBrowse"
import Profile from "../pages/profile/Profile"
import Dish from "../pages/menu/Dish"
import ExistingMenu from "../pages/menu/ExistingMenu"
import Scraps from "../pages/scraps/Scraps"
import BlogPost from "../pages/scraps/BlogPost"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "food-waste-react", element: <HomePage />},
            { path: "", element: <HomePage />},
            { path: "menu", element: <Menu />},
            { path: "menu/:id", element: <ExistingMenu />},
            { path: "browse-menus", element: <MenuBrowse />},
            { path: "profile", element: <Profile />},
            { path: "dish", element: <Dish />},
            { path: "scraps", element: <Scraps />},
            { path: "blog-post/:name", element: <BlogPost />},
        ]
    }
])