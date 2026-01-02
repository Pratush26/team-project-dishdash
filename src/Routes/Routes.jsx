import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/Home";
import HomePage from "../Pages/Home";
import RegisterPage from "../Pages/Forms/Register";
import LoginPage from "../Pages/Forms/Login";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import OpenRestaurantForm from "../Pages/Forms/OpenRestaurent";
import ManageRestaurant from "../Pages/tables/ManageRestaurant";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: HomeLayout,
        children: [
            {
                index: true,
                Component: HomePage
            },
            {
                path: "register",
                Component: RegisterPage
            },
            {
                path: "login",
                Component: LoginPage
            },
            {
                path: "open-restaurant",
                element: <OpenRestaurantForm />
            },
            {
                path: "manage-restaurant",
                element: <ManageRestaurant />
            },
            {
                path: "about",
                Component: About,
            },
            {
                path: "contact",
                Component: Contact,
            }
        ]
    }
])
